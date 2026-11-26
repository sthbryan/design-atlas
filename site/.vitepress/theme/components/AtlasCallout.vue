<script setup>
defineProps({
  title: { type: String, default: 'Note' },
  tone: { type: String, default: 'note' },
});
</script>

<template>
  <aside :class="['atlas-callout', `atlas-callout-${tone}`]" aria-label="Callout">
    <div class="atlas-callout-title">{{ title }}</div>
    <div class="atlas-callout-body"><slot /></div>
  </aside>
</template>
