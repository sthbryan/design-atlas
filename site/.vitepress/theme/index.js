import { defineAsyncComponent } from 'vue';
import DefaultTheme from 'vitepress/theme-without-fonts';
import './style.css';
import Layout from './Layout.vue';
import AtlasCover from './components/AtlasCover.vue';
import AtlasLatest from './components/AtlasLatest.vue';
import AtlasSiteFacts from './components/AtlasSiteFacts.vue';
import AtlasTopicCards from './components/AtlasTopicCards.vue';
import AtlasTopicIndex from './components/AtlasTopicIndex.vue';

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.component('AtlasCover', AtlasCover);
    app.component('AtlasLatest', AtlasLatest);
    app.component('AtlasSiteFacts', AtlasSiteFacts);
    app.component('AtlasSiteIndex', defineAsyncComponent(() => import('./components/AtlasSiteIndex.vue')));
    app.component('AtlasTopicCards', AtlasTopicCards);
    app.component('AtlasTopicIndex', AtlasTopicIndex);
  },
};
