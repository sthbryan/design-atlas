<script setup>
defineProps({
  items: { type: Array, default: () => [] },
});
</script>

<template>
  <nav class="atlas-steps" aria-label="Steps">
    <ol>
      <li v-for="(item, index) in items" :key="index" :class="`atlas-steps-${item.state || 'todo'}`">
        <span class="atlas-steps-index" aria-hidden="true">{{ index + 1 }}</span>
        <span class="atlas-steps-text">
          <strong>{{ item.title }}</strong>
          <span v-if="item.text">{{ item.text }}</span>
        </span>
      </li>
    </ol>
  </nav>
</template>
