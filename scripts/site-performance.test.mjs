import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { test } from 'node:test';
import { createMarkdownRenderer } from 'vitepress';
import { REPO, atlasMarkdown, loadSites } from '../site/.vitepress/atlas.js';
import { renderSearch, searchSource } from '../site/.vitepress/search.js';
import siteData from '../site/.vitepress/theme/sites.data.js';

const md = await createMarkdownRenderer(REPO, { config: atlasMarkdown });

test('large hubs paginate while small hubs retain their complete source list', () => {
  const sites = loadSites();
  for (const topic of ['inspiration', 'error-pages']) {
    const path = join(REPO, 'topics', `${topic}.md`);
    const html = md.render(readFileSync(path, 'utf8'), { path });
    const count = sites.filter((site) => site.topics?.includes(topic)).length;
    assert.equal(html.includes(`<AtlasSiteIndex topic="${topic}"`), count > 50);
    if (count <= 50) assert.equal((html.match(/class="gz-row"/g) ?? []).length, count);
    assert.ok(html.includes('Patterns worth reusing'));
  }
});

test('search indexes site prose once without repeated navigation and preserves opt-out', () => {
  const path = join(REPO, 'sites/awwwards.md');
  const src = readFileSync(path, 'utf8');
  const html = renderSearch(src, { path, relativePath: 'sites/awwwards.md' }, md);
  assert.equal((html.match(/<h[1-6]\b/g) ?? []).length, 1);
  assert.ok(html.includes('Awwwards'));
  assert.ok(html.includes('Reusable ideas'));
  assert.ok(!html.includes('id="related"'));
  assert.equal(renderSearch('---\nsearch: false\n---\n# Hidden', {}, md), '');
  const hub = readFileSync(join(REPO, 'topics/inspiration.md'), 'utf8');
  assert.ok(!searchSource(hub).includes('atlas:sources'));
  assert.ok(searchSource(hub).includes('Patterns worth reusing'));
});

test('compact catalog retains every field needed for filtering and topic scope', () => {
  const source = loadSites();
  const catalog = siteData.load();
  assert.equal(catalog.length, source.length);
  for (let i = 0; i < source.length; i++) {
    assert.deepEqual(catalog[i].topics, source[i].topics ?? []);
    assert.equal(catalog[i].type, source[i].type);
    assert.equal(catalog[i].description, source[i].description);
    assert.ok(!('haystack' in catalog[i]));
  }
});
