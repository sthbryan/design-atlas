import { loadSites, loadTopics } from '../atlas.js';

export default {
  watch: ['../../../topics/*.md', '../../../sites/*.md'],
  load() {
    const sites = loadSites();
    return loadTopics().map((topic) => ({
      slug: topic.slug,
      title: topic.title,
      description: topic.description,
      count: sites.filter((site) => site.topics?.includes(topic.slug)).length,
    }));
  },
};
