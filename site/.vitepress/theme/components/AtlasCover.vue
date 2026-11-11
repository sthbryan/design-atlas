<script setup>
import { computed } from 'vue';
import { data as sites } from '../sites.data.js';
import { data as topics } from '../topics.data.js';
import { licenceGroup } from '../legend.js';

const shippable = computed(() => sites.filter((site) => licenceGroup(site.licence_class).key === 'ship').length);
const latestReview = computed(() => sites.reduce((latest, site) => (site.reviewed > latest ? site.reviewed : latest), ''));
const figures = computed(() => [
  { label: 'Reviewed references', value: String(sites.length) },
  { label: 'Topic hubs', value: String(topics.length) },
  { label: 'Shippable under licence', value: String(shippable.value) },
  { label: 'Latest review', value: latestReview.value },
]);
</script>

<template>
  <dl class="atlas-figures" aria-label="Atlas at a glance">
    <div v-for="figure in figures" :key="figure.label" class="atlas-figure">
      <dt>{{ figure.label }}</dt>
      <dd>{{ figure.value }}</dd>
    </div>
  </dl>
</template>
