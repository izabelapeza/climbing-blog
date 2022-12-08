<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();

defineProps<{
  href: string;
}>();
</script>

<template>
  <li
    :class="
      route.path === href
        ? 'opacity-100 text-complement-100'
        : 'opacity-60 hover:opacity-80 transition-all'
    "
  >
    <NuxtLink :to="href"><slot /></NuxtLink>
  </li>
</template>
