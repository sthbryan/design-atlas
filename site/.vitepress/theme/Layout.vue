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

onMounted(enhanceSidebar);
onBeforeUnmount(releaseSidebar);
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
