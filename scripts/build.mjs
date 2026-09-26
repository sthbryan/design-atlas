import { existsSync, readFileSync, readdirSync, writeFileSync, writeSync } from 'node:fs';
import { dirname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parse } from 'yaml';
import { searchDoc, searchIndexJson } from '../skills/design-atlas/scripts/search.mjs';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const CHECK = process.argv.includes('--check');
const REVIEW_DAYS = 180;

const VOCAB = {
  type: [
    'gallery', 'component-library', 'component-registry', 'design-system', 'js-library',
    'icon-library', 'font-library', 'asset-library', 'sound-library', 'style-library', 'prompt-library',
    'template-library', 'pattern-library', 'documentation', 'guidelines', 'directory', 'tool',
    'design-workspace', 'browser-extension', 'ai-builder', 'agent-skill', 'agent-skill-collection',
  ],
  verdict: ['very-useful', 'useful', 'niche'],
  agent: ['mcp', 'llms-txt', 'cli', 'registry', 'api', 'prompts', 'skill'],
  pricing: ['free', 'freemium', 'paid', 'not-stated'],
  licence_class: [
    'open-source-permissive', 'open-source-copyleft', 'source-available', 'public-domain',
    'cc-attribution', 'cc-noncommercial', 'proprietary-free', 'proprietary-paid', 'mixed', 'not-stated',
  ],
  status: ['active', 'stale', 'broken', 'removed'],
};

const SITE_FIELDS = [
  'title', 'description', 'url', 'type', 'formats', 'topics', 'verdict', 'agent',
  'pricing', 'licence', 'licence_class', 'reviewed', 'status', 'note', 'related',
];
const OPTIONAL = new Set(['formats', 'note']);
const SECTIONS = [
  'What it is', 'When to open it', 'Most useful', 'Using it with agents',
  'Watch out for', 'Reusable ideas', 'Related',
];
const MAX_TOPICS = 4;
const MAX_START_HERE = 5;
const MAX_DESCRIPTION = 160;
const CRUMB_PREFIX = '[← Atlas](../README.md)';
const MARKER = (name, edge) => `<!-- atlas:${name}:${edge} -->`;
const MARKER_NAMES = ['topics', 'sites', 'sources'];
const ALLOWED_COMMENTS = new Set(MARKER_NAMES.flatMap((n) => [MARKER(n, 'start'), MARKER(n, 'end')]));

const errors = [];
const fail = (path, message) => errors.push(`${path}: ${message}`);
const read = (path) => (existsSync(join(ROOT, path)) ? readFileSync(join(ROOT, path), 'utf8') : '');
const byTitle = (a, b) => a.title.localeCompare(b.title, 'en', { sensitivity: 'base' });

function splitFrontmatter(path, src) {
  const match = src.match(/^---\n([\s\S]*?)\n---\n/);
  if (!match) {
    fail(path, 'missing YAML frontmatter');
    return [{}, src, ''];
  }
  try {
    return [parse(match[1]) ?? {}, src.slice(match[0].length), match[0]];
  } catch (error) {
    fail(path, `invalid YAML: ${error.message.split('\n')[0]}`);
    return [{}, src.slice(match[0].length), match[0]];
  }
}

function loadDir(dir) {
  return readdirSync(join(ROOT, dir))
    .filter((file) => file.endsWith('.md'))
    .sort()
    .map((file) => {
      const path = `${dir}/${file}`;
      const src = read(path);
      const [data, body, head] = splitFrontmatter(path, src);
      return { slug: file.slice(0, -3), path, src, body, head, data };
    });
}

const isString = (value) => typeof value === 'string' && value.trim() !== '' && value === value.trim();
const h1Of = (body) => (body.match(/^# (.+)$/m) ?? [])[1];

function validDate(value) {
  if (typeof value !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const date = new Date(`${value}T00:00:00Z`);
  return !Number.isNaN(date.getTime()) && date.toISOString().startsWith(value);
}

function checkList(path, key, value, allowed, { min = 0, max = Infinity } = {}) {
  if (!Array.isArray(value)) return fail(path, `${key} must be a list`);
  if (value.length < min || value.length > max) fail(path, `${key} needs ${min}-${max === Infinity ? 'n' : max} entries, has ${value.length}`);
  if (new Set(value).size !== value.length) fail(path, `${key} has duplicates`);
  for (const item of value) if (!allowed.includes(item)) fail(path, `${key} has unknown value "${item}" (allowed: ${allowed.join(', ')})`);
}

const topics = loadDir('topics');
const topicSlugs = topics.map((t) => t.slug);
for (const t of topics) {
  const { title, description, order } = t.data;
  for (const key of Object.keys(t.data)) if (!['title', 'description', 'order'].includes(key)) fail(t.path, `unknown field "${key}"`);
  if (!isString(title)) fail(t.path, 'title must be a non-empty string');
  if (!isString(description)) fail(t.path, 'description must be a non-empty string');
  if (!Number.isInteger(order)) fail(t.path, 'order must be an integer');
  if (title && h1Of(t.body) !== title) fail(t.path, `H1 "${h1Of(t.body)}" differs from title "${title}"`);
  Object.assign(t, { title, description, order });
}
for (const [i, t] of topics.entries()) {
  if (topics.some((u, j) => j < i && u.order === t.order)) fail(t.path, `order ${t.order} is used twice`);
}
topics.sort((a, b) => a.order - b.order);

const sites = loadDir('sites');
const siteBySlug = Object.fromEntries(sites.map((s) => [s.slug, s]));
const today = new Date();
for (const s of sites) {
  const d = s.data;
  for (const key of Object.keys(d)) if (!SITE_FIELDS.includes(key)) fail(s.path, `unknown field "${key}"`);
  for (const key of SITE_FIELDS) if (d[key] === undefined && !OPTIONAL.has(key)) fail(s.path, `missing field "${key}"`);
  for (const key of ['title', 'description', 'url', 'licence']) if (d[key] !== undefined && !isString(d[key])) fail(s.path, `${key} must be a non-empty single string`);
  for (const key of OPTIONAL) if (d[key] !== undefined && !isString(d[key])) fail(s.path, `${key} must be a non-empty string`);
  if (isString(d.description) && (d.description.length > MAX_DESCRIPTION || d.description.includes('\n'))) fail(s.path, `description must be one line of at most ${MAX_DESCRIPTION} characters`);
  if (isString(d.url) && !/^https?:\/\/\S+$/.test(d.url)) fail(s.path, `url "${d.url}" is not an http(s) URL`);
  for (const key of ['type', 'verdict', 'pricing', 'licence_class', 'status']) {
    if (d[key] !== undefined && !VOCAB[key].includes(d[key])) fail(s.path, `${key} "${d[key]}" is not one of: ${VOCAB[key].join(', ')}`);
  }
  if (d.topics !== undefined) checkList(s.path, 'topics', d.topics, topicSlugs, { min: 1, max: MAX_TOPICS });
  if (d.agent !== undefined) checkList(s.path, 'agent', d.agent, VOCAB.agent);
  if (d.related !== undefined) checkList(s.path, 'related', d.related, sites.filter((x) => x.slug !== s.slug && x.data.status !== 'removed').map((x) => x.slug), { min: 1 });
  if (d.reviewed !== undefined) {
    if (!validDate(d.reviewed)) fail(s.path, `reviewed "${d.reviewed}" must be a YYYY-MM-DD date`);
    else if (new Date(`${d.reviewed}T00:00:00Z`) > today) fail(s.path, `reviewed ${d.reviewed} is in the future`);
    else if ((today - new Date(`${d.reviewed}T00:00:00Z`)) / 864e5 > REVIEW_DAYS) console.warn(`review due: ${s.path} (reviewed ${d.reviewed})`);
  }
  if (d.title && h1Of(s.body) !== d.title) fail(s.path, `H1 "${h1Of(s.body)}" differs from title "${d.title}"`);
  const headings = [...s.body.matchAll(/^## (.+)$/gm)].map((m) => m[1]);
  if (headings.join('|') !== SECTIONS.join('|')) fail(s.path, `sections must be, in order: ${SECTIONS.join(', ')}`);
  Object.assign(s, d);
}
function exitOnErrors() {
  if (!errors.length) return;
  writeSync(2, `${errors.join('\n')}\n\n${errors.length} error(s)\n`);
  process.exit(1);
}

exitOnErrors();
const listed = sites.filter((s) => s.status !== 'removed');

const shownTitle = (s) => (s.status === 'stale' || s.status === 'broken' ? `${s.title} (${s.status})` : s.title);
const cell = (text) => String(text).replace(/\|/g, '\\|');
const agentText = (s) => (s.agent?.length ? s.agent.join(', ') : 'none');

function replaceBlock(path, src, name, content) {
  const start = MARKER(name, 'start');
  const end = MARKER(name, 'end');
  const from = src.indexOf(start);
  const to = src.indexOf(end);
  if (from < 0 || to < from || src.indexOf(start, from + 1) >= 0) {
    fail(path, `needs exactly one ${start} ... ${end} block`);
    return src;
  }
  return `${src.slice(0, from + start.length)}\n${content}\n${src.slice(to)}`;
}

const outputs = new Map();

let readme = read('README.md');
readme = replaceBlock('README.md', readme, 'topics',
  topics.map((t) => `- [${t.title}](topics/${t.slug}.md) — ${t.description}`).join('\n'));
readme = replaceBlock('README.md', readme, 'sites', [
  '| Site | Type | Topics | Verdict | Agent access | Licence |',
  '|---|---|---|---|---|---|',
  ...[...listed]
    .sort((a, b) => a.type.localeCompare(b.type) || byTitle(a, b))
    .map((s) => `| [${cell(shownTitle(s))}](sites/${s.slug}.md) | ${s.type} | ${s.topics.join(', ')} | ${s.verdict} | ${agentText(s)} | ${s.licence_class} |`),
].join('\n'));
outputs.set('README.md', readme);

for (const t of topics) {
  const members = listed.filter((s) => s.topics?.includes(t.slug)).sort(byTitle);
  let src = replaceBlock(t.path, t.src, 'sources',
    members.map((s) => `- [${shownTitle(s)}](../sites/${s.slug}.md) — ${s.description}`).join('\n'));
  const startHere = (t.body.match(/^## Start here\n([\s\S]*?)(?=^## )/m) ?? [])[1] ?? '';
  const picks = [...startHere.matchAll(/^- \[[^\]]*\]\(\.\.\/sites\/([a-z0-9-]+)\.md\)/gm)].map((m) => m[1]);
  if (picks.length > MAX_START_HERE) fail(t.path, `Start here has ${picks.length} entries; keep it to ${MAX_START_HERE}`);
  for (const slug of picks) if (!siteBySlug[slug]?.topics?.includes(t.slug)) fail(t.path, `Start here links ${slug}, which is not tagged "${t.slug}"`);
  outputs.set(t.path, src);
}

for (const s of sites) {
  if (!s.head || !Array.isArray(s.topics) || !Array.isArray(s.related)) continue;
  const crumb = `${CRUMB_PREFIX} · Topics: ${s.topics.map((t) => `[${t}](../topics/${t}.md)`).join(', ')}`;
  let body = s.body.startsWith(CRUMB_PREFIX) ? s.body.replace(/^.*\n/, `${crumb}\n`) : `${crumb}\n\n${s.body}`;
  const related = s.related.filter((r) => siteBySlug[r]).map((r) => `[${siteBySlug[r].title}](${r}.md)`).join(', ');
  body = body.replace(/\n## Related\n[\s\S]*$/, `\n## Related\n\n${related}\n`);
  outputs.set(s.path, s.head + body);
}

const pick = (s) => Object.fromEntries([['slug', s.slug], ['path', s.path], ...SITE_FIELDS.filter((k) => s[k] !== undefined).map((k) => [k, s[k]])]);
outputs.set('sites.json', `${JSON.stringify({
  topics: topics.map((t) => ({ slug: t.slug, path: t.path, title: t.title, description: t.description })),
  sites: listed.map(pick),
}, null, 2)}\n`);

const SKILL_REFS = 'skills/design-atlas/references';
const CATALOG_FIELDS = [
  'slug', 'path', 'title', 'description', 'url', 'type', 'topics', 'verdict', 'agent',
  'pricing', 'licence_class', 'licence', 'reviewed', 'status', 'note', 'related',
];
const catalogRow = (s) => JSON.stringify(Object.fromEntries(CATALOG_FIELDS.filter((k) => s[k] !== undefined).map((k) => [k, s[k]])));
const catalogAbout = {
  name: 'Design Atlas bundled catalog',
  repository: 'https://github.com/sthbryan/design-atlas',
  snapshot_of: 'main',
  latest_review: listed.map((s) => s.reviewed).sort().at(-1),
  content_licence: 'CC BY 4.0, Design Atlas contributors',
};
outputs.set(`${SKILL_REFS}/catalog.json`, [
  '{',
  `"about":${JSON.stringify(catalogAbout)},`,
  '"topics":[',
  topics.map((t) => JSON.stringify({ slug: t.slug, path: t.path, title: t.title, description: t.description })).join(',\n'),
  '],',
  '"sites":[',
  listed.map(catalogRow).join(',\n'),
  ']',
  '}',
  '',
].join('\n'));

outputs.set(`${SKILL_REFS}/search-index.json`, searchIndexJson(
  listed.map((s) => searchDoc(s, s.body)),
  { name: 'Design Atlas search index', latest_review: catalogAbout.latest_review },
));

const hubSection = (body, name) => (body.match(new RegExp(`^## ${name}\\n([\\s\\S]*?)(?=^## |(?![\\s\\S]))`, 'm')) ?? [])[1] ?? '';
const slugsIn = (text, pattern) => [...text.matchAll(pattern)].map((m) => `\`${m[1]}\``).join(', ');
outputs.set(`${SKILL_REFS}/hub-map.md`, [
  '# Hub map',
  '',
  `A snapshot of every hub, generated with \`catalog.json\` (latest review ${catalogAbout.latest_review}): its scope, its "Start here" picks and its adjacent hubs. Read it to choose hubs without opening them, and to widen a thin hub. When a live hub is reachable, the live hub wins.`,
  '',
  'A hub marked "none yet" has no curated picks. Query the index for its topic, then read the adjacent hubs.',
  '',
  '| Hub | Scope | Start here | Adjacent hubs |',
  '|---|---|---|---|',
  ...topics.map((t) => `| \`${t.slug}\` | ${cell(t.description)} | ${slugsIn(hubSection(t.body, 'Start here'), /\(\.\.\/sites\/([a-z0-9-]+)\.md\)/g) || 'none yet'} | ${slugsIn(hubSection(t.body, 'Related topics'), /\(([a-z0-9-]+)\.md\)/g) || 'none'} |`),
  '',
  'Every hub has the same sections: Start here, All sources, Patterns worth reusing, Pitfalls and Related topics. Read "Start here", "Patterns worth reusing" and "Pitfalls"; skip "All sources", because the index already lists them.',
  '',
].join('\n'));

outputs.set('llms.txt', [
  '# Design Atlas',
  '',
  '> A curated wiki of design references for building websites and UI: galleries, component libraries, design systems, DESIGN.md sources, agent skills, icons, sound and motion. Every site page gives a verdict, says how the site plugs into coding agents, and records its pricing and licence as checked on its review date.',
  '',
  'Each site page is Markdown with YAML frontmatter (title, description, url, type, topics, verdict, agent, pricing, licence, licence_class, reviewed, status, related) and the same sections: What it is, When to open it, Most useful, Using it with agents, Watch out for, Reusable ideas, Related. Topic hubs pick up to five "Start here" sites and collect patterns and pitfalls across their sources. Facts such as prices, licences and counts are only as fresh as each page\'s reviewed date, so re-check a licence before reusing code or assets. The atlas describes sites in its own words; it does not grant any rights to their code, brands or assets.',
  '',
  'Each line under Sites ends with filterable fields: type, topics, verdict, agent (the channels an agent can use: mcp, llms-txt, cli, registry, api, prompts, skill; "none" when there are none), licence (a licence class) and reviewed.',
  '',
  '## Topics',
  '',
  ...topics.map((t) => `- [${t.title}](topics/${t.slug}.md): ${t.description}`),
  '',
  '## Sites',
  '',
  ...[...listed].sort(byTitle).map((s) => `- [${shownTitle(s)}](sites/${s.slug}.md): ${s.description} — type: ${s.type}; topics: ${s.topics.join(', ')}; verdict: ${s.verdict}; agent: ${agentText(s)}; licence: ${s.licence_class}; reviewed: ${s.reviewed}`),
  '',
  '## Optional',
  '',
  '- [sites.json](sites.json): the same metadata as JSON, one object per site, plus the topic list',
  '- [README](README.md): the human-facing index and sites table',
  '- [Page template](TEMPLATE.md): the frontmatter fields and sections every site page uses',
  '- [Contributing](CONTRIBUTING.md): how sites are added, reviewed and removed, and the allowed frontmatter values',
  '- [AGENTS.md](AGENTS.md): how agents should read and edit this repository',
  '- [design-atlas skill](skills/design-atlas/SKILL.md): an agent skill that queries this atlas and writes a cited, licence-checked brief',
  '- [design-atlas-ui skill](skills/design-atlas-ui/SKILL.md): an agent skill that builds and reviews UI from a DESIGN.md, using this atlas for references',
  '',
].join('\n'));

function markdownFiles(dir = ROOT) {
  return readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    if (entry.name === '.git' || entry.name === 'node_modules') return [];
    const full = join(dir, entry.name);
    if (entry.isDirectory()) return markdownFiles(full);
    return entry.name.endsWith('.md') || entry.name === 'llms.txt' ? [relative(ROOT, full)] : [];
  });
}

for (const path of new Set([...markdownFiles(), ...[...outputs.keys()].filter((p) => !p.endsWith('.json'))])) {
  const text = outputs.get(path) ?? read(path);
  for (const comment of text.match(/<!--[\s\S]*?-->/g) ?? []) {
    if (!ALLOWED_COMMENTS.has(comment)) fail(path, `comment not allowed (only generator markers): ${comment.slice(0, 60)}`);
  }
  const prose = text.replace(/^```[\s\S]*?^```/gm, '').replace(/`[^`\n]*`/g, '');
  for (const [, target] of prose.matchAll(/\]\(([^)\s]+)(?:\s+"[^"]*")?\)/g)) {
    if (/^[a-z][a-z0-9+.-]*:/i.test(target) || target.startsWith('#')) continue;
    const file = decodeURI(target.split('#')[0]);
    const full = resolve(ROOT, dirname(path), file);
    if (!existsSync(full) && !outputs.has(relative(ROOT, full))) fail(path, `broken link to ${target}`);
  }
}

exitOnErrors();

const stale = [...outputs].filter(([path, content]) => read(path) !== content).map(([path]) => path);
if (CHECK) {
  if (stale.length) {
    writeSync(2, `${stale.length} generated file(s) out of date; run npm run build:\n${stale.join('\n')}\n`);
    process.exit(1);
  }
  console.log(`ok: ${listed.length} sites, ${topics.length} topics`);
} else {
  for (const path of stale) writeFileSync(join(ROOT, path), outputs.get(path));
  console.log(`built: ${listed.length} sites, ${topics.length} topics, ${stale.length} file(s) updated`);
}
