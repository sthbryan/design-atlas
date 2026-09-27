import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { dirname, join, resolve } from 'node:path';
import { test } from 'node:test';
import { fileURLToPath } from 'node:url';
import { stem, tokenize } from '../skills/design-atlas/scripts/search.mjs';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const QUERY = join(ROOT, 'skills/design-atlas/scripts/query.mjs');

function run(...args) {
  const res = spawnSync(process.execPath, [QUERY, '--atlas', ROOT, '--offline', ...args], { encoding: 'utf8' });
  return { code: res.status, stderr: res.stderr, out: res.stdout ? JSON.parse(res.stdout) : null };
}

const CASES = [
  { query: 'animated icons for React I can ship commercially', top: ['heroicons-animated', 'lucide-animated'], within: 4, suggest: '--licence ship' },
  { query: 'pricing page inspiration', anyOf: ['saasframe', 'saaspo', 'cta-gallery'] },
  { query: 'shdcn charts', first: 'evil-charts', corrected: 'shdcn→shadcn' },
  { query: 'lotie loaders', top: ['lottiefiles'], corrected: 'lotie→lottie' },
  { query: 'spinner', top: ['loading-dev', 'circle-loaders'] },
  { query: 'oklch palette with dark mode tokens', first: 'ramps' },
  { query: 'learn glsl shaders', top: ['book-of-shaders', 'shaderfrog'] },
  { query: 'ui sound effects', top: ['soundcn', 'uisfx'] },
  { query: '404 page ideas', first: '404s' },
  { query: 'footer inspiration', first: 'footer-design' },
  { query: 'animated number counter', top: ['number-flow', 'rolling-number'], within: 4 },
  { query: 'accessibility audit skill', first: 'accesslint-skills' },
  { query: 'easing curves', first: 'easing-wizard' },
  { query: 'react three fiber helpers', top: ['drei', 'react-three-fiber'] },
];

for (const c of CASES) {
  test(`search: ${c.query}`, () => {
    const { code, out } = run('--search', c.query);
    assert.equal(code, 0);
    const slugs = out.sites.map((s) => s.slug);
    const top = slugs.slice(0, c.within ?? 3);
    for (const slug of c.top ?? []) assert.ok(top.includes(slug), `${slug} not in top ${c.within ?? 3}: ${top.join(', ')}`);
    if (c.first) assert.equal(slugs[0], c.first, `top 3: ${top.join(', ')}`);
    if (c.anyOf) assert.ok(c.anyOf.some((s) => top.includes(s)), `none of ${c.anyOf.join(', ')} in top 3: ${top.join(', ')}`);
    if (c.corrected) assert.ok(out.search.corrected.includes(c.corrected), `corrected: ${out.search.corrected.join(', ')}`);
    if (c.suggest) assert.ok(out.search.suggest?.includes(c.suggest));
    const scores = out.sites.map((s) => s.score);
    assert.deepEqual(scores, [...scores].sort((a, b) => b - a));
    for (const row of out.sites) assert.ok(Object.keys(row.match).length > 0);
  });
}

test('filters apply before ranking', () => {
  const { code, out } = run('--search', 'icons', '--licence', 'ship', '--agent', 'any', '--limit', '50');
  assert.equal(code, 0);
  const ship = ['public-domain', 'open-source-permissive', 'cc-attribution'];
  for (const row of out.sites) {
    assert.ok(ship.includes(row.licence_class), row.slug);
    assert.ok(row.agent.length > 0, row.slug);
  }
});

test('stale sites stay in the results', () => {
  const { code, out } = run('--search', 'icons', '--status', 'stale');
  assert.equal(code, 0);
  assert.ok(out.sites.length > 0);
  for (const row of out.sites) assert.equal(row.status, 'stale');
});

test('visual-style searches ignore generic framing words and rank style galleries', () => {
  const { code, out } = run('--search', 'brutalist website design');
  assert.equal(code, 0);
  assert.ok(out.search.terms.includes('brutalist'));
  assert.ok(!out.search.terms.includes('websit'));
  assert.ok(!out.search.terms.includes('design'));
  const top = out.sites.slice(0, 3).map((site) => site.slug);
  assert.ok(top.includes('loadmore'), `missing style-tagged gallery: ${top.join(', ')}`);
  assert.ok(top.includes('curated-design'), `missing style-tagged gallery: ${top.join(', ')}`);
});

test('Spanish brutalismo finds the same visual-style references without fuzzy correction', () => {
  const { code, out } = run('--search', 'brutalismo');
  assert.equal(code, 0);
  assert.deepEqual(out.search.corrected, []);
  assert.ok(out.search.expanded.includes('neobrutalism'));
  assert.ok(out.sites.slice(0, 3).some((site) => site.slug === 'curated-design'));
});

test('other named styles also prioritize style-focused galleries', () => {
  const { code, out } = run('--search', 'editorial website design');
  assert.equal(code, 0);
  assert.deepEqual(out.search.terms, ['editorial']);
  assert.ok(out.sites.slice(0, 3).some((site) => site.slug === 'inspora'));
});

test('the default limit still applies', () => {
  const { out, stderr } = run('--search', 'components');
  assert.equal(out.shown, 12);
  assert.match(stderr, /matches not shown/);
});

test('no match exits 1 and an empty query exits 2', () => {
  assert.equal(run('--search', 'zzzzqqqx').code, 1);
  assert.equal(run('--search', 'the and of').code, 2);
});

test('the bundled index is used when no clone is found', () => {
  const res = spawnSync(process.execPath, [QUERY, '--location', 'bundled', '--search', 'shdcn charts'], { encoding: 'utf8', cwd: dirname(ROOT) });
  assert.equal(res.status, 0);
  assert.equal(JSON.parse(res.stdout).sites[0].slug, 'evil-charts');
});

test('normalisation folds plurals and inflections', () => {
  assert.equal(stem('libraries'), stem('library'));
  assert.equal(stem('icons'), stem('icon'));
  assert.equal(stem('animated'), stem('animate'));
  assert.equal(stem('animations'), stem('animated'));
  assert.equal(stem('pricing'), stem('price'));
  assert.equal(stem('404s'), '404');
  assert.deepEqual(tokenize('The shadcn/ui registry, for Next.js'), ['shadcn', 'ui', 'registry', 'next', 'js']);
});
