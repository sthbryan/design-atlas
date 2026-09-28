import { copyFileSync, mkdirSync } from 'node:fs';
import { createRequire } from 'node:module';
import { dirname, join } from 'node:path';
import { defineConfig } from 'vitepress';
import { GITHUB, ROUTES, atlasMarkdown, loadTopics, srcExclude } from './atlas.js';

const require = createRequire(import.meta.url);
const topics = loadTopics();

export default defineConfig({
  lang: 'en',
  title: 'Design Atlas',
  description: 'Reviewed design references for building websites and UI, with how each one plugs into a coding agent.',
  srcDir: '..',
  srcExclude: srcExclude(),
  rewrites: ROUTES,
  cleanUrls: true,
  appearance: 'force-auto',
  lastUpdated: false,
  markdown: {
    externalLinks: { target: '_self', rel: 'noreferrer' },
    config: atlasMarkdown,
  },
  transformPageData(pageData) {
    const path = pageData.relativePath;
    const { reviewed } = pageData.frontmatter;
    if (reviewed instanceof Date) pageData.frontmatter.reviewed = reviewed.toISOString().slice(0, 10);
    const index = path === 'sites/index.md' || path === 'topics/index.md';
    if (path === 'index.md') pageData.frontmatter.pageClass = 'atlas-home';
    else if (path.startsWith('sites/') && !index) {
      pageData.frontmatter.pageClass = 'atlas-site';
      pageData.frontmatter.outline = false;
    } else if (path.startsWith('topics/') || index) {
      pageData.frontmatter.pageClass = 'atlas-hub';
      pageData.frontmatter.aside = false;
    }
  },
  buildEnd(siteConfig) {
    const licence = join(dirname(require.resolve('@fontsource-variable/montagu-slab/package.json')), 'LICENSE');
    mkdirSync(join(siteConfig.outDir, 'fonts'), { recursive: true });
    copyFileSync(licence, join(siteConfig.outDir, 'fonts', 'montagu-slab-OFL.txt'));
  },
  themeConfig: {
    siteTitle: 'Design Atlas',
    nav: [
      { text: 'Topics', link: '/topics/', activeMatch: '^/topics/' },
      { text: 'Sites', link: '/sites/', activeMatch: '^/sites/' },
      { text: 'DESIGN.md', link: '/design' },
    ],
    socialLinks: [{ icon: 'github', link: GITHUB, ariaLabel: 'Design Atlas on GitHub' }],
    sidebar: [
      {
        text: 'Atlas',
        items: [
          { text: 'Overview', link: '/' },
          { text: 'All sites', link: '/sites/' },
          { text: 'All topics', link: '/topics/' },
          { text: 'Website DESIGN.md', link: '/design' },
          { text: 'Contributing', link: '/contributing' },
        ],
      },
      {
        text: 'Topics',
        items: topics.map((topic) => ({ text: topic.title, link: `/topics/${topic.slug}` })),
      },
    ],
    outline: { level: 2, label: 'On this page' },
    search: { provider: 'local' },
    docFooter: { prev: 'Previous', next: 'Next' },
    externalLinkIcon: false,
  },
});
