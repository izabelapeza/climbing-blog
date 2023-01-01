<script setup lang="ts">
defineProps<{
  id: string;
  title: string;
  desc: string;
}>();
</script>

<template>
  <section :id="`collab-statistics-${id}`" class="page-wrapper-narrow">
    <h2 class="text-2xl font-bold font-serif">{{ title }}</h2>
    <p>
      {{ desc }}
    </p>
    <div class="pt-2">
      <slot />
    </div>
  </section>
</template>
