import { loadSites } from '../atlas.js';

const shownTitle = (site) => (site.status === 'stale' || site.status === 'broken' ? `${site.title} (${site.status})` : site.title);

export default {
  watch: ['../../../sites/*.md'],
  load() {
    return loadSites().map((site) => ({
      slug: site.slug,
      title: shownTitle(site),
      description: site.description,
      verdict: site.verdict,
      licence_class: site.licence_class,
      agent: site.agent ?? [],
      reviewed: site.reviewed,
      status: site.status,
      haystack: [site.title, site.description, site.type, ...(site.topics ?? []), ...(site.agent ?? []), site.licence_class]
        .join(' ')
        .toLowerCase(),
    }));
  },
};
