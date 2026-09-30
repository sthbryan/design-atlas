<script setup>
import { computed, nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue';
import { WindowVirtualizer } from 'virtua/vue';
import { withBase } from 'vitepress';
import { data as sites } from '../sites.data.js';
import { gazetteerHeaderHtml, icon, legendHtml, licenceGroup, slotsHtml } from '../legend.js';

const props = defineProps({ topic: { type: String, default: '' } });
const catalog = sites.map((site) => ({
  ...site,
  haystack: [site.title, site.description, site.type, ...site.topics, ...site.agent, site.verdict, site.licence_class, licenceGroup(site.licence_class).label, site.status, site.reviewed].join(' ').toLowerCase(),
}));

const query = ref('');
const field = ref(null);
const keyboardNavigation = ref(false);
const pageSize = 50;
const visibleLimit = ref(pageSize);
const terms = computed(() => query.value.toLowerCase().split(/\s+/).filter(Boolean));
const scoped = computed(() => props.topic ? catalog.filter((site) => site.topics.includes(props.topic)) : catalog);
const shown = computed(() => terms.value.length ? scoped.value.filter((site) => terms.value.every((term) => site.haystack.includes(term))) : scoped.value);
const visible = computed(() => shown.value.slice(0, visibleLimit.value));
const countText = computed(() => `Showing ${visible.value.length} of ${shown.value.length} ${terms.value.length ? 'matches' : 'sites'}`);
const remainingCount = computed(() => Math.min(pageSize, shown.value.length - visible.value.length));

function syncQueryFromUrl() {
  query.value = new URLSearchParams(window.location.search).get('q') ?? '';
}

function preserveKeyboardNavigation(event) {
  if (event.key !== 'Tab' || keyboardNavigation.value) return;
  const focused = document.activeElement?.dataset.site;
  keyboardNavigation.value = true;
  if (focused) nextTick(() => document.querySelector(`[data-site="${focused}"]`)?.focus({ preventScroll: true }));
}

onMounted(() => {
  syncQueryFromUrl();
  window.addEventListener('popstate', syncQueryFromUrl);
  window.addEventListener('keydown', preserveKeyboardNavigation);
});

onBeforeUnmount(() => {
  window.removeEventListener('popstate', syncQueryFromUrl);
  window.removeEventListener('keydown', preserveKeyboardNavigation);
});

watch(query, (value) => {
  visibleLimit.value = pageSize;
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
    <div v-if="shown.length && !keyboardNavigation" class="gazetteer atlas-virtual-gazetteer">
      <div class="gz-header" aria-hidden="true" v-html="gazetteerHeaderHtml"></div>
      <WindowVirtualizer :key="query" :data="visible" :ssr-count="Math.min(pageSize, visible.length)" as="ul" item="li" class="atlas-virtual-list" #default="{ item: site }">
        <div :key="site.slug" class="gz-row">
          <span class="gz-name"><a :href="withBase(`/sites/${site.slug}`)" :data-site="site.slug">{{ site.title }}</a></span>
          <span class="gz-desc">{{ site.description }}</span>
          <span class="gz-slots" v-html="slotsHtml(site)"></span>
        </div>
      </WindowVirtualizer>
    </div>
    <ul v-else-if="shown.length" class="gazetteer">
      <li class="gz-header" role="presentation" aria-hidden="true" v-html="gazetteerHeaderHtml"></li>
      <li v-for="site in visible" :key="site.slug" v-memo="[site.slug]" class="gz-row">
        <span class="gz-name"><a :href="withBase(`/sites/${site.slug}`)" :data-site="site.slug">{{ site.title }}</a></span>
        <span class="gz-desc">{{ site.description }}</span>
        <span class="gz-slots" v-html="slotsHtml(site)"></span>
      </li>
    </ul>
    <button
      v-if="visible.length < shown.length"
      class="atlas-button"
      type="button"
      @click="visibleLimit += pageSize"
    >
      Show {{ remainingCount }} more results
    </button>
    <div v-if="!shown.length" class="atlas-empty">
      <p>No site matches “{{ query.trim() }}”. Try fewer words, or a topic such as icons or motion.</p>
      <button class="atlas-button" type="button" @click="clear">Clear the filter</button>
    </div>
  </div>
</template>
