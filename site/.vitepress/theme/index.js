import { defineAsyncComponent } from 'vue';
import DefaultTheme from 'vitepress/theme-without-fonts';
import '@fontsource-variable/montagu-slab/opsz.css';
import './style.css';
import Layout from './Layout.vue';
import AtlasSiteFacts from './components/AtlasSiteFacts.vue';
import AtlasTopicCards from './components/AtlasTopicCards.vue';

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component('AtlasSiteFacts', AtlasSiteFacts);
    app.component('AtlasSiteIndex', defineAsyncComponent(() => import('./components/AtlasSiteIndex.vue')));
    app.component('AtlasTopicCards', AtlasTopicCards);
  },
};
