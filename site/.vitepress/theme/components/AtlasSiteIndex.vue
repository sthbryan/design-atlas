<script setup>
import { computed, onMounted, ref, watch } from 'vue';
import { withBase } from 'vitepress';
import { data as sites } from '../sites.data.js';
import { icon, legendHtml, slotsHtml } from '../legend.js';

const query = ref('');
const field = ref(null);
const terms = computed(() => query.value.toLowerCase().split(/\s+/).filter(Boolean));
const shown = computed(() => sites.filter((site) => terms.value.every((term) => site.haystack.includes(term))));
const countText = computed(() => (terms.value.length ? `${shown.value.length} of ${sites.length} sites` : `${sites.length} sites`));

onMounted(() => {
  query.value = new URLSearchParams(window.location.search).get('q') ?? '';
});

watch(query, (value) => {
  const url = new URL(window.location.href);
  if (value.trim()) url.searchParams.set('q', value.trim());
  else url.searchParams.delete('q');
  window.history.replaceState(window.history.state, '', url);
});

function clear() {
  query.value = '';
  field.value?.focus();
}
</script>

<template>
  <div class="atlas-index">
    <label class="atlas-label" for="atlas-filter">Filter sites</label>
    <div class="atlas-search">
      <span class="atlas-search-glyph" v-html="icon('magnifying-glass')"></span>
      <input
        id="atlas-filter"
        ref="field"
        v-model="query"
        type="search"
        name="q"
        autocomplete="off"
        spellcheck="false"
        placeholder="For example: icons mcp"
      />
      <button v-if="query" class="atlas-button" type="button" @click="clear">Clear</button>
    </div>
    <p class="atlas-count" role="status">{{ countText }}</p>
    <div v-html="legendHtml()"></div>
    <ul v-if="shown.length" class="gazetteer">
      <li v-for="site in shown" :key="site.slug" class="gz-row">
        <span class="gz-name"><a :href="withBase(`/sites/${site.slug}`)">{{ site.title }}</a></span>
        <span class="gz-desc">{{ site.description }}</span>
        <span class="gz-slots" v-html="slotsHtml(site)"></span>
      </li>
    </ul>
    <div v-else class="atlas-empty">
      <p>No site matches “{{ query.trim() }}”. Try fewer words, or a topic such as icons or motion.</p>
      <button class="atlas-button" type="button" @click="clear">Clear the filter</button>
    </div>
  </div>
</template>
