import { existsSync, readFileSync, statSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const RAW_BASE = 'https://raw.githubusercontent.com/sthbryan/design-atlas/main';
const FETCH_TIMEOUT_MS = 8000;
const DEFAULT_LIMIT = 12;
const MAX_LIMIT = 50;
const SKILL_DIR = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const BUNDLED_CATALOG = join(SKILL_DIR, 'references', 'catalog.json');
const VERDICT_RANK = { 'very-useful': 3, useful: 2, niche: 1 };
const STATUS_RANK = { active: 2, stale: 1, broken: 0 };
const LICENCE_GROUPS = {
  ship: ['public-domain', 'open-source-permissive', 'cc-attribution'],
  conditional: ['open-source-copyleft', 'cc-noncommercial', 'source-available', 'proprietary-free', 'proprietary-paid', 'mixed'],
  'look-only': ['not-stated'],
};
const LIST_FILTERS = { topic: 'topics', type: 'type', agent: 'agent', licence: 'licence_class', pricing: 'pricing', verdict: 'verdict', status: 'status', slug: 'slug' };
const BRIEF_FIELDS = ['slug', 'title', 'description', 'type', 'topics', 'verdict', 'agent', 'pricing', 'licence_class', 'reviewed', 'status'];
const FULL_FIELDS = ['url', 'licence', 'note', 'related'];

const HELP = `Usage: node scripts/query.mjs [filters] [options]

Filters the Design Atlas index and prints JSON. Values in one filter are ORed;
different filters are ANDed. Results sort by status, verdict, then title.

Filters (comma-separated values):
  --topic a,b          sites tagged with any of these hub slugs
  --type a,b           site types, e.g. icon-library,component-registry
  --agent a,b          agent channels: mcp,llms-txt,cli,registry,api,prompts,skill
                       "any" = at least one channel, "none" = no channel
  --licence a,b        licence classes, or a group: ship, conditional, look-only
  --pricing a,b        free, freemium, paid, not-stated
  --verdict a,b        very-useful, useful, niche
  --min-verdict v      useful = useful or very-useful
  --status a,b         active, stale, broken
  --slug a,b           exact site slugs (combine with --full for licence text)
  --text "words"       every word must appear in slug, title, url, description or licence

Options:
  --full               add url, licence text, note and related slugs
  --limit N            rows to print (default ${DEFAULT_LIMIT}, max ${MAX_LIMIT})
  --topics             list hubs with their site counts instead of sites
  --atlas DIR          read this local clone
  --offline            never use the network
  --location L         force one location: local, remote or bundled
  --help               show this text

Location order: --atlas, $DESIGN_ATLAS_DIR, the current directory and its
parents, the plugin root two levels above this skill, then raw GitHub
(${RAW_BASE}), then the bundled references/catalog.json.

Exit codes: 0 results found, 1 no match, 2 bad arguments, 3 no index available.`;

function die(code, message) {
  process.stderr.write(`${message}\n`);
  process.exit(code);
}

function parseArgs(argv) {
  const opts = { filters: {}, limit: DEFAULT_LIMIT };
  const flags = new Set(['full', 'topics', 'offline', 'help']);
  const valued = new Set([...Object.keys(LIST_FILTERS), 'min-verdict', 'text', 'limit', 'atlas', 'location']);
  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (!arg.startsWith('--')) die(2, `unexpected argument "${arg}"; options start with --. Run --help.`);
    const [key, inline] = arg.slice(2).split(/=(.*)/s, 2);
    if (flags.has(key)) {
      opts[key] = true;
      continue;
    }
    if (!valued.has(key)) die(2, `unknown option --${key}. Run --help.`);
    const value = inline ?? argv[++i];
    if (value === undefined || value.startsWith('--')) die(2, `--${key} needs a value. Run --help.`);
    if (key in LIST_FILTERS) opts.filters[key] = value.split(',').map((v) => v.trim()).filter(Boolean);
    else if (key === 'min-verdict') opts.minVerdict = value;
    else if (key === 'text') opts.text = value.toLowerCase().split(/\s+/).filter(Boolean);
    else if (key === 'limit') opts.limit = Number(value);
    else if (key === 'atlas') opts.atlas = value;
    else opts.location = value;
  }
  if (!Number.isInteger(opts.limit) || opts.limit < 1) die(2, `--limit must be a positive integer.`);
  opts.limit = Math.min(opts.limit, MAX_LIMIT);
  if (opts.location && !['local', 'remote', 'bundled'].includes(opts.location)) die(2, `--location must be local, remote or bundled.`);
  if (opts.minVerdict && !(opts.minVerdict in VERDICT_RANK)) die(2, `--min-verdict must be one of: ${Object.keys(VERDICT_RANK).join(', ')}.`);
  return opts;
}

const isAtlas = (dir) => {
  try {
    return existsSync(join(dir, 'sites.json')) && statSync(join(dir, 'topics')).isDirectory();
  } catch {
    return false;
  }
};

function localCandidates(opts) {
  if (opts.atlas) return [resolve(opts.atlas)];
  const dirs = [];
  if (process.env.DESIGN_ATLAS_DIR) dirs.push(resolve(process.env.DESIGN_ATLAS_DIR));
  for (let dir = process.cwd(); ; dir = dirname(dir)) {
    dirs.push(dir);
    if (dirname(dir) === dir) break;
  }
  dirs.push(resolve(SKILL_DIR, '..', '..'));
  return dirs;
}

function readJson(path) {
  try {
    return JSON.parse(readFileSync(path, 'utf8'));
  } catch (error) {
    process.stderr.write(`could not parse ${path}: ${error.message}\n`);
    return null;
  }
}

async function loadIndex(opts) {
  const tried = [];
  if (!opts.location || opts.location === 'local') {
    for (const dir of localCandidates(opts)) {
      if (!isAtlas(dir)) continue;
      const data = readJson(join(dir, 'sites.json'));
      if (data) return { location: 'local', root: dir, pages: dir, data };
    }
    tried.push(opts.atlas ? `local clone at ${resolve(opts.atlas)} (no sites.json plus topics/)` : 'local clone (none found)');
    if (opts.atlas) die(3, `no atlas at ${resolve(opts.atlas)}: it needs sites.json and a topics/ folder.`);
  }
  if ((!opts.location || opts.location === 'remote') && !opts.offline) {
    try {
      const res = await fetch(`${RAW_BASE}/sites.json`, { signal: AbortSignal.timeout(FETCH_TIMEOUT_MS) });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return { location: 'remote', root: RAW_BASE, pages: RAW_BASE, data: await res.json() };
    } catch (error) {
      tried.push(`raw GitHub (${error.name === 'TimeoutError' ? 'timed out' : error.message})`);
    }
  }
  if (!opts.location || opts.location === 'bundled') {
    const data = existsSync(BUNDLED_CATALOG) ? readJson(BUNDLED_CATALOG) : null;
    if (data) {
      process.stderr.write(`using the bundled snapshot (latest review ${data.about?.latest_review ?? 'unknown'}); it holds no site pages, so the brief must say they were not read.\n`);
      return { location: 'bundled', root: BUNDLED_CATALOG, pages: null, snapshot: data.about, data };
    }
    tried.push('bundled references/catalog.json (missing or unreadable)');
  }
  die(3, `no atlas index available. Tried: ${tried.join('; ')}. Clone https://github.com/sthbryan/design-atlas and pass --atlas DIR.`);
}

function expandValues(key, values) {
  if (key !== 'licence') return values;
  return values.flatMap((v) => LICENCE_GROUPS[v] ?? [v]);
}

function checkVocabulary(sites, topics, filters) {
  const known = {
    topic: new Set(topics.map((t) => t.slug)),
    type: new Set(sites.map((s) => s.type)),
    agent: new Set([...sites.flatMap((s) => s.agent ?? []), 'any', 'none']),
    licence: new Set([...sites.map((s) => s.licence_class), ...Object.keys(LICENCE_GROUPS), ...Object.values(LICENCE_GROUPS).flat()]),
    pricing: new Set(sites.map((s) => s.pricing)),
    verdict: new Set(Object.keys(VERDICT_RANK)),
    status: new Set(Object.keys(STATUS_RANK)),
    slug: new Set(sites.map((s) => s.slug)),
  };
  for (const [key, values] of Object.entries(filters)) {
    const unknown = values.filter((v) => !known[key].has(v));
    if (!unknown.length) continue;
    const hint = key === 'slug' ? 'check the slug with --text' : `known: ${[...known[key]].sort().join(', ')}`;
    die(2, `unknown --${key} value "${unknown.join(', ')}"; ${hint}.`);
  }
}

function matches(site, opts) {
  for (const [key, raw] of Object.entries(opts.filters)) {
    const values = expandValues(key, raw);
    const field = site[LIST_FILTERS[key]];
    if (key === 'agent') {
      const channels = field ?? [];
      const ok = values.some((v) => (v === 'any' ? channels.length > 0 : v === 'none' ? channels.length === 0 : channels.includes(v)));
      if (!ok) return false;
    } else if (Array.isArray(field)) {
      if (!values.some((v) => field.includes(v))) return false;
    } else if (!values.includes(field)) return false;
  }
  if (opts.minVerdict && (VERDICT_RANK[site.verdict] ?? 0) < VERDICT_RANK[opts.minVerdict]) return false;
  if (opts.text) {
    const hay = `${site.slug} ${site.title} ${site.url ?? ''} ${site.description} ${site.licence ?? ''}`.toLowerCase();
    if (!opts.text.every((w) => hay.includes(w))) return false;
  }
  return true;
}

function emit(head, key, rows) {
  const top = JSON.stringify(head).slice(0, -1);
  const body = rows.length ? `\n${rows.map((r) => JSON.stringify(r)).join(',\n')}\n` : '';
  process.stdout.write(`${top},"${key}":[${body}]}\n`);
}

function shape(site, full) {
  const fields = full ? [...BRIEF_FIELDS, ...FULL_FIELDS] : BRIEF_FIELDS;
  const row = Object.fromEntries(fields.filter((k) => site[k] !== undefined).map((k) => [k, site[k]]));
  row.path = site.path;
  return row;
}

const opts = parseArgs(process.argv.slice(2));
if (opts.help) {
  process.stdout.write(`${HELP}\n`);
  process.exit(0);
}

const index = await loadIndex(opts);
const sites = Array.isArray(index.data.sites) ? index.data.sites : [];
const topics = Array.isArray(index.data.topics) ? index.data.topics : [];
if (!sites.length) die(3, `the index at ${index.root} has no sites; rebuild it with npm run build in the atlas.`);
const header = { location: index.location, base: index.pages, ...(index.snapshot ? { snapshot: index.snapshot } : {}) };

if (opts.topics) {
  const rows = topics.map((t) => ({
    slug: t.slug,
    title: t.title,
    description: t.description,
    sites: sites.filter((s) => s.topics?.includes(t.slug)).length,
    path: t.path,
  }));
  emit(header, 'topics', rows);
  process.exit(0);
}

checkVocabulary(sites, topics, opts.filters);
const hits = sites
  .filter((s) => matches(s, opts))
  .sort((a, b) => (STATUS_RANK[b.status] ?? 0) - (STATUS_RANK[a.status] ?? 0)
    || (VERDICT_RANK[b.verdict] ?? 0) - (VERDICT_RANK[a.verdict] ?? 0)
    || a.title.localeCompare(b.title, 'en', { sensitivity: 'base' }));
const shown = hits.slice(0, opts.limit).map((s) => shape(s, opts.full));
emit({ ...header, total: hits.length, shown: shown.length }, 'sites', shown);
if (hits.length > shown.length) process.stderr.write(`matches not shown: ${hits.length - shown.length}; narrow the filters or raise --limit.\n`);
process.exit(hits.length ? 0 : 1);
