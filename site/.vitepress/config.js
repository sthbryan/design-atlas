import { copyFileSync, mkdirSync } from 'node:fs';
import { createRequire } from 'node:module';
import { dirname, join } from 'node:path';
import { defineConfig } from 'vitepress';
import { GITHUB, ROUTES, atlasMarkdown, loadTopics, srcExclude } from './atlas.js';

const require = createRequire(import.meta.url);
const topics = loadTopics();
const SITE_URL = 'https://atlas.justcallmebryan.com/';
const SOCIAL_IMAGE = new URL('og.png', SITE_URL).href;

function publicUrl(relativePath) {
  const path = ROUTES[relativePath] ?? relativePath;
  const route = path.replace(/(^|\/)index\.md$/, '$1').replace(/\.md$/, '');
  return new URL(route, SITE_URL).href;
}

export default defineConfig({
  lang: 'en',
  title: 'Design Atlas',
  description: 'Reviewed design references for building websites and UI, with how each one plugs into a coding agent.',
  srcDir: '..',
  srcExclude: srcExclude(),
  rewrites: ROUTES,
  cleanUrls: true,
  sitemap: { hostname: SITE_URL },
  appearance: 'force-auto',
  lastUpdated: false,
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    ['meta', { name: 'theme-color', content: '#F6FAF8', media: '(prefers-color-scheme: light)' }],
    ['meta', { name: 'theme-color', content: '#121815', media: '(prefers-color-scheme: dark)' }],
    ['meta', { property: 'og:site_name', content: 'Design Atlas' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:image', content: SOCIAL_IMAGE }],
    ['meta', { property: 'og:image:alt', content: 'Design Atlas: reviewed references for websites and UI' }],
    ['meta', { property: 'og:image:width', content: '1200' }],
    ['meta', { property: 'og:image:height', content: '630' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
  ],
  transformHead({ pageData, title, description }) {
    const url = publicUrl(pageData.relativePath);
    return [
      ['link', { rel: 'canonical', href: url }],
      ['meta', { property: 'og:url', content: url }],
      ['meta', { property: 'og:title', content: title }],
      ['meta', { property: 'og:description', content: description }],
      ['meta', { name: 'twitter:title', content: title }],
      ['meta', { name: 'twitter:description', content: description }],
      ['meta', { name: 'twitter:image', content: SOCIAL_IMAGE }],
    ];
  },
  markdown: {
    externalLinks: { target: '_self', rel: 'noreferrer' },
    config: atlasMarkdown,
  },
  transformPageData(pageData) {
    const path = pageData.relativePath;
    const { reviewed } = pageData.frontmatter;
    if (reviewed instanceof Date) pageData.frontmatter.reviewed = reviewed.toISOString().slice(0, 10);
    const index = path === 'sites/index.md' || path === 'topics/index.md';
    if (path === 'site/home.md') pageData.frontmatter.pageClass = 'atlas-home';
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
          { text: 'Home', link: '/' },
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
