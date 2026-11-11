<script setup>
import { computed, onBeforeUnmount, onMounted } from 'vue';
import { useData } from 'vitepress';
import DefaultTheme from 'vitepress/theme-without-fonts';
import AtlasIcons from './components/AtlasIcons.vue';
import AtlasSiteFacts from './components/AtlasSiteFacts.vue';
import { enhanceSidebar, releaseSidebar } from './sidebar-disclosure.js';

const { Layout } = DefaultTheme;
const { frontmatter } = useData();
const isSite = computed(() => frontmatter.value.pageClass === 'atlas-site');

let searchTrigger = null;

function warmSearch() {
  const href = document.querySelector('meta[name="atlas-search-index"]')?.content;
  if (!href || document.querySelector('link[data-atlas-search]')) return;
  const link = document.createElement('link');
  link.rel = 'prefetch';
  link.as = 'script';
  link.href = href;
  link.dataset.atlasSearch = '';
  document.head.append(link);
}

onMounted(() => {
  enhanceSidebar();
  searchTrigger = document.querySelector('.VPNavBarSearch');
  if (!searchTrigger) return;
  searchTrigger.addEventListener('pointerenter', warmSearch, { once: true });
  searchTrigger.addEventListener('focusin', warmSearch, { once: true });
  searchTrigger.addEventListener('pointerdown', warmSearch, { once: true });
});

onBeforeUnmount(() => {
  releaseSidebar();
  searchTrigger?.removeEventListener('pointerenter', warmSearch);
  searchTrigger?.removeEventListener('focusin', warmSearch);
  searchTrigger?.removeEventListener('pointerdown', warmSearch);
});
</script>

<template>
  <Layout>
    <template #layout-top>
      <AtlasIcons />
    </template>
    <template #aside-top>
      <AtlasSiteFacts v-if="isSite" placement="rail" />
    </template>
  </Layout>
</template>
