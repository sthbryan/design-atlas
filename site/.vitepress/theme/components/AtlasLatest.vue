<script setup>
import { computed } from 'vue';
import { withBase } from 'vitepress';
import { data as sites } from '../sites.data.js';
import { gazetteerHeaderHtml, legendHtml, slotsHtml } from '../legend.js';

const latest = computed(() =>
  [...sites]
    .sort((a, b) => (a.reviewed === b.reviewed ? a.title.localeCompare(b.title, 'en', { sensitivity: 'base' }) : a.reviewed < b.reviewed ? 1 : -1))
    .slice(0, 5),
);
</script>

<template>
  <div v-html="legendHtml()"></div>
  <ul class="gazetteer">
    <li class="gz-header" role="presentation" aria-hidden="true" v-html="gazetteerHeaderHtml"></li>
    <li v-for="site in latest" :key="site.slug" class="gz-row">
      <span class="gz-name"><a :href="withBase(`/sites/${site.slug}`)">{{ site.title }}</a></span>
      <span class="gz-desc">{{ site.description }}</span>
      <span class="gz-slots" v-html="slotsHtml(site)"></span>
    </li>
  </ul>
</template>
