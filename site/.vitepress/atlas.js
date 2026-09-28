import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { dirname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parse } from 'yaml';
import { gazetteerHeaderHtml, legendHtml, slotsHtml } from './theme/legend.js';

export const REPO = resolve(dirname(fileURLToPath(import.meta.url)), '../..');
export const GITHUB = 'https://github.com/sthbryan/design-atlas';

export const ROUTES = {
  'README.md': 'readme.md',
  'CONTRIBUTING.md': 'contributing.md',
  'site/DESIGN.md': 'design.md',
  'site/home.md': 'index.md',
  'site/sites.md': 'sites/index.md',
  'site/topics.md': 'topics/index.md',
};
const DIRECTORY_ROUTES = { sites: 'sites/index.md', topics: 'topics/index.md' };
const PAGE_DIRS = ['sites', 'topics'];
const KEEP = new Set(['README.md', 'CONTRIBUTING.md', 'site', ...PAGE_DIRS]);

export function srcExclude() {
  return readdirSync(REPO, { withFileTypes: true })
    .filter((entry) => !KEEP.has(entry.name))
    .map((entry) => (entry.isDirectory() ? `${entry.name}/**` : entry.name));
}

const isPageSource = (rel) => rel in ROUTES || PAGE_DIRS.some((dir) => new RegExp(`^${dir}/[^/]+\\.md$`).test(rel));

function frontmatter(file) {
  const match = readFileSync(file, 'utf8').match(/^---\n([\s\S]*?)\n---\n/);
  return match ? parse(match[1]) ?? {} : {};
}

function loadDir(dir) {
  return readdirSync(join(REPO, dir))
    .filter((file) => file.endsWith('.md'))
    .sort()
    .map((file) => ({ slug: file.slice(0, -3), ...frontmatter(join(REPO, dir, file)) }));
}

const byTitle = (a, b) => a.title.localeCompare(b.title, 'en', { sensitivity: 'base' });

export const loadTopics = () => loadDir('topics').sort((a, b) => a.order - b.order);
export const loadSites = () => loadDir('sites').filter((site) => site.status !== 'removed').sort(byTitle);

function repoLink(href, sourceFile) {
  if (/^[a-z][a-z0-9+.-]*:/i.test(href) || href.startsWith('#') || href.startsWith('/')) return null;
  const [path, hash = ''] = href.split(/(?=#)/);
  const target = resolve(dirname(sourceFile), decodeURI(path));
  const rel = relative(REPO, target).split('\\').join('/');
  if (rel.startsWith('..')) return null;
  if (isPageSource(rel)) return `/${ROUTES[rel] ?? rel}${hash}`;
  if (rel in DIRECTORY_ROUTES) return `/${DIRECTORY_ROUTES[rel]}${hash}`;
  if (!existsSync(target)) return null;
  const kind = statSync(target).isDirectory() ? 'tree' : 'blob';
  return `${GITHUB}/${kind}/main/${rel}${hash}`;
}

function rewriteLinks(state) {
  const source = state.env.realPath ?? state.env.path;
  if (!source) return;
  for (const block of state.tokens) {
    for (const token of block.children ?? []) {
      if (token.type !== 'link_open') continue;
      const next = repoLink(token.attrGet('href') ?? '', source);
      if (next) token.attrSet('href', next);
    }
  }
}

function html(state, content, type = 'html_inline') {
  const token = new state.Token(type, '', 0);
  token.content = content;
  return token;
}

function gazetteer(state, sites) {
  const bySlug = new Map(sites.map((site) => [site.slug, site]));
  const tokens = state.tokens;
  for (let i = 0; i < tokens.length; i++) {
    if (tokens[i].type !== 'html_block' || !tokens[i].content.includes('atlas:sources:start')) continue;
    const open = tokens[i + 1];
    if (open?.type !== 'bullet_list_open') continue;
    open.attrJoin('class', 'gazetteer');
    let j = i + 2;
    for (; j < tokens.length && !(tokens[j].type === 'bullet_list_close' && tokens[j].level === open.level); j++) {
      const token = tokens[j];
      if (token.type === 'list_item_open') token.attrJoin('class', 'gz-row');
      if (token.type !== 'inline') continue;
      const children = token.children;
      const start = children.findIndex((child) => child.type === 'link_open');
      const end = children.findIndex((child) => child.type === 'link_close');
      const slug = (children[start]?.attrGet('href') ?? '').match(/^\.\.\/sites\/([a-z0-9-]+)\.md$/)?.[1];
      const site = bySlug.get(slug);
      if (!site || end < 0) continue;
      const rest = children.slice(end + 1);
      if (rest[0]?.type === 'text') rest[0].content = rest[0].content.replace(/^\s*\u2014\s*/, '');
      token.children = [
        html(state, '<span class="gz-name">'),
        ...children.slice(start, end + 1),
        html(state, '</span><span class="gz-desc">'),
        ...rest,
        html(state, `</span><span class="gz-slots">${slotsHtml(site)}</span>`),
      ];
    }
    tokens.splice(i + 2, 0, html(state, `<li class="gz-header" role="presentation" aria-hidden="true">${gazetteerHeaderHtml}</li>\n`, 'html_block'));
    tokens.splice(i + 1, 0, html(state, legendHtml(), 'html_block'));
    i = j + 2;
  }
}

function siteFacts(state) {
  if (dirname(state.env.realPath ?? '') !== join(REPO, 'sites')) return;
  const tokens = state.tokens;
  const close = tokens.findIndex((token) => token.type === 'heading_close' && token.tag === 'h1');
  if (close >= 0) tokens.splice(close + 1, 0, html(state, '<AtlasSiteFacts placement="inline" />\n', 'html_block'));
}

export function atlasMarkdown(md) {
  const sites = loadSites();
  md.core.ruler.push('atlas_gazetteer', (state) => gazetteer(state, sites));
  md.core.ruler.push('atlas_repo_links', rewriteLinks);
  md.core.ruler.push('atlas_site_facts', siteFacts);
}
