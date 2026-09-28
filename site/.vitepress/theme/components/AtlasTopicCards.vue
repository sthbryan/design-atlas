<script setup>
import { withBase } from 'vitepress';
import { data as topics } from '../topics.data.js';

const sentence = (text) => text.charAt(0).toUpperCase() + text.slice(1);
</script>

<template>
  <ul class="atlas-cards" aria-label="Topic hubs">
    <li v-for="topic in topics" :key="topic.slug">
      <a class="atlas-card" :href="withBase(`/topics/${topic.slug}`)">
        <span class="atlas-card-title">{{ topic.title }}</span>
        <span class="atlas-card-desc">{{ sentence(topic.description) }}</span>
        <span class="atlas-card-count">{{ topic.count }} {{ topic.count === 1 ? 'site' : 'sites' }}</span>
      </a>
    </li>
  </ul>
</template>
