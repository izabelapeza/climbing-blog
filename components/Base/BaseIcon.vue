<script setup lang="ts">
defineProps<{ path: string }>();
</script>

<template>
  <svg viewBox="0 0 24 24">
    <path fill="currentColor" :d="path" />
  </svg>
</template>
