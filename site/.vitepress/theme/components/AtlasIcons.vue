<script setup>
import check from '@phosphor-icons/core/assets/regular/check.svg?raw';
import warning from '@phosphor-icons/core/assets/regular/warning.svg?raw';
import eye from '@phosphor-icons/core/assets/regular/eye.svg?raw';
import linkBreak from '@phosphor-icons/core/assets/regular/link-break.svg?raw';
import magnifier from '@phosphor-icons/core/assets/regular/magnifying-glass.svg?raw';

const inner = (svg) => svg.replace(/^[\s\S]*?<svg[^>]*>/, '').replace(/<\/svg>\s*$/, '');
const symbols = { check, warning, eye, 'link-break': linkBreak, 'magnifying-glass': magnifier };
const sprite = Object.entries(symbols)
  .map(([name, svg]) => `<symbol id="atlas-icon-${name}" viewBox="0 0 256 256" fill="currentColor">${inner(svg)}</symbol>`)
  .join('');
</script>

<template>
  <svg class="atlas-sprite" aria-hidden="true" focusable="false" v-html="sprite"></svg>
</template>
