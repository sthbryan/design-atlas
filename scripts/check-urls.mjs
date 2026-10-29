import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const FILE = 'url-health.json';
const ATTEMPTS = 2;
const RETRY_DELAY_MS = 1000;
const DEFAULT_CONCURRENCY = 8;
const DEFAULT_TIMEOUT_MS = 10000;
const AGENT = 'design-atlas-url-check/1.0 (+https://github.com/sthbryan/design-atlas)';
const BLOCKED = new Set([401, 403, 429]);

const HELP = `Usage: node scripts/check-urls.mjs [options]

Fetches every site's url from sites.json, follows redirects and writes ${FILE},
the URL health report that \`query.mjs --link\` reads. Run \`bun run build\` first,
so sites.json holds every listed page.

A page is "live" when it answers below 400 on its own host, "moved" when it now
serves another host after normalising www and the scheme, "blocked" when the
server gives no usable answer to an automated request (401, 403, 429, a timeout
or a reset, so the check proves nothing), and "dead" when it errors, cannot
resolve or answers 400 or above. Network errors and 5xx answers get one retry.
Same-host redirects stay live, since sites move their own pages freely.

Options:
  --concurrency N      requests in flight (default ${DEFAULT_CONCURRENCY})
  --timeout MS         timeout per request (default ${DEFAULT_TIMEOUT_MS})
  --dry-run            print the summary and leave ${FILE} untouched
  --help               show this text

Prints JSON: file, checked, live, blocked, and moved and dead (slugs). Exits 1
when any page is moved or dead, so a scheduled run reports it.`;

function die(code, message) {
  process.stderr.write(`${message}\n`);
  process.exit(code);
}

function parseArgs(argv) {
  const opts = { concurrency: DEFAULT_CONCURRENCY, timeout: DEFAULT_TIMEOUT_MS, write: true };
  const valued = new Set(['concurrency', 'timeout']);
  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (!arg.startsWith('--')) die(2, `unexpected argument "${arg}"; options start with --. Run --help.`);
    const [key, inline] = arg.slice(2).split(/=(.*)/s, 2);
    if (key === 'help') {
      process.stdout.write(`${HELP}\n`);
      process.exit(0);
    }
    if (key === 'dry-run') {
      opts.write = false;
      continue;
    }
    if (!valued.has(key)) die(2, `unknown option --${key}. Run --help.`);
    const value = inline ?? argv[++i];
    if (value === undefined || value.startsWith('--')) die(2, `--${key} needs a value. Run --help.`);
    opts[key] = Number(value);
    if (!Number.isInteger(opts[key]) || opts[key] < 1) die(2, `--${key} must be a positive integer.`);
  }
  return opts;
}

const today = new Date().toISOString().slice(0, 10);

const hostOf = (value) => new URL(value).hostname.toLowerCase().replace(/^www\./, '');

async function attempt(url, timeout) {
  const res = await fetch(url, {
    redirect: 'follow',
    signal: AbortSignal.timeout(timeout),
    headers: { 'user-agent': AGENT, accept: 'text/html,application/xhtml+xml,*/*;q=0.8' },
  });
  await res.body?.cancel();
  return { http: res.status, final: res.url || url };
}

async function probe(site, opts) {
  let last = null;
  for (let i = 0; i < ATTEMPTS; i += 1) {
    try {
      const res = await attempt(site.url, opts.timeout);
      if (res.http < 500) return { ...res, error: null };
      last = { http: res.http, final: res.final, error: `HTTP ${res.http}` };
    } catch (error) {
      const code = error.name === 'TimeoutError' ? 'timeout' : (error.cause?.code ?? error.message);
      last = { http: null, final: site.url, error: code, blocked: code === 'timeout' || code === 'ECONNRESET' };
    }
    if (i + 1 < ATTEMPTS) await new Promise((done) => setTimeout(done, RETRY_DELAY_MS));
  }
  return last;
}

function classify(site, result) {
  if (result.http === null) return result.blocked ? 'blocked' : 'dead';
  if (BLOCKED.has(result.http)) return 'blocked';
  if (result.http >= 400) return 'dead';
  try {
    return hostOf(result.final) === hostOf(site.url) ? 'live' : 'moved';
  } catch {
    return 'moved';
  }
}

const opts = parseArgs(process.argv.slice(2));
const indexPath = join(ROOT, 'sites.json');
if (!existsSync(indexPath)) die(3, `no sites.json at ${indexPath}; run bun run build first.`);
let index;
try {
  index = JSON.parse(readFileSync(indexPath, 'utf8'));
} catch (error) {
  die(3, `could not parse ${indexPath}: ${error.message}`);
}
const sites = (index.sites ?? []).filter((site) => /^https?:\/\//.test(site.url ?? ''));
if (!sites.length) die(3, `${indexPath} has no site urls; run bun run build first.`);

const rows = new Array(sites.length);
let next = 0;
async function worker() {
  while (next < sites.length) {
    const i = next++;
    const site = sites[i];
    const result = await probe(site, opts);
    const row = { slug: site.slug, status: classify(site, result), http: result.http, final_url: result.final };
    if (result.error) row.error = result.error;
    rows[i] = row;
  }
}
await Promise.all(Array.from({ length: Math.min(opts.concurrency, sites.length) }, worker));
rows.sort((a, b) => (a.slug < b.slug ? -1 : a.slug > b.slug ? 1 : 0));

const count = (status) => rows.filter((row) => row.status === status).length;
const about = {
  checked: today,
  generated_by: 'scripts/check-urls.mjs',
  sites: rows.length,
  live: count('live'),
  moved: count('moved'),
  blocked: count('blocked'),
  dead: count('dead'),
};
const report = ['{', `"about":${JSON.stringify(about)},`, '"sites":[', rows.map((row) => JSON.stringify(row)).join(',\n'), ']', '}', ''].join('\n');

if (opts.write) writeFileSync(join(ROOT, FILE), report);
process.stdout.write(`${JSON.stringify({
  file: opts.write ? FILE : null,
  checked: about.checked,
  live: about.live,
  blocked: about.blocked,
  moved: rows.filter((row) => row.status === 'moved').map((row) => row.slug),
  dead: rows.filter((row) => row.status === 'dead').map((row) => row.slug),
})}\n`);
process.exit(about.moved || about.dead ? 1 : 0);
