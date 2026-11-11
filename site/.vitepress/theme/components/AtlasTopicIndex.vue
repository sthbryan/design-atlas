<script setup>
import { withBase } from 'vitepress';
import { data as topics } from '../topics.data.js';
</script>

<template>
  <ol class="atlas-contents" aria-label="Topic hubs">
    <li v-for="(topic, index) in topics" :key="topic.slug">
      <a class="atlas-contents-row" :href="withBase(`/topics/${topic.slug}`)">
        <span class="atlas-contents-number" aria-hidden="true">{{ String(index + 1).padStart(2, '0') }}</span>
        <span class="atlas-contents-title">{{ topic.title }}</span>
        <span class="atlas-contents-count">{{ topic.count }} {{ topic.count === 1 ? 'site' : 'sites' }}</span>
      </a>
    </li>
  </ol>
</template>
