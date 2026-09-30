<script setup>
import { computed } from 'vue';
import { useData } from 'vitepress';
import { VERDICTS, agentText, licenceBadge, statusBadge, words } from '../legend.js';

defineProps({ placement: { type: String, default: 'rail' } });

const { frontmatter } = useData();
const host = computed(() => {
  try {
    return new URL(frontmatter.value.url).host.replace(/^www\./, '');
  } catch {
    return frontmatter.value.url;
  }
});
const plain = (text) => String(text ?? '').replace(/`([^`]*)`/g, '$1');
</script>

<template>
  <section :class="['atlas-facts', `atlas-facts-${placement}`]" aria-label="Site facts">
    <dl>
      <div>
        <dt>Site</dt>
        <dd><a :href="frontmatter.url" target="_blank" rel="noopener noreferrer">{{ host }}</a></dd>
      </div>
      <div>
        <dt>Type</dt>
        <dd>{{ words(frontmatter.type) }}</dd>
      </div>
      <div>
        <dt>Verdict</dt>
        <dd>{{ VERDICTS[frontmatter.verdict] ?? words(frontmatter.verdict) }} <span v-if="frontmatter.status !== 'active'" v-html="statusBadge(frontmatter.status)"></span></dd>
      </div>
      <div>
        <dt>Licence</dt>
        <dd>
          <span v-html="licenceBadge(frontmatter.licence_class)"></span>
          <code class="atlas-facts-class">{{ frontmatter.licence_class }}</code>
          <span class="atlas-facts-text">{{ plain(frontmatter.licence) }}</span>
        </dd>
      </div>
      <div>
        <dt>Agent channels</dt>
        <dd>{{ agentText(frontmatter.agent) }}</dd>
      </div>
      <div>
        <dt>Pricing</dt>
        <dd>{{ words(frontmatter.pricing) }}</dd>
      </div>
      <div>
        <dt>Reviewed</dt>
        <dd><time :datetime="frontmatter.reviewed">{{ frontmatter.reviewed }}</time></dd>
      </div>
      <div v-if="frontmatter.note">
        <dt>Note</dt>
        <dd>{{ plain(frontmatter.note) }}</dd>
      </div>
    </dl>
  </section>
</template>
