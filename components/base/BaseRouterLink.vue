<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();

const props = defineProps<{
  href: string;
}>();

const path = computed(() => {
  return route.path.split("/")[1] === props.href.replaceAll("/", "");
});
</script>

<template>
  <li
    :class="
      path
        ? 'opacity-100 text-complement-100'
        : 'opacity-60 hover:opacity-80 transition-all'
    "
  >
    <NuxtLink :to="href"><slot /></NuxtLink>
  </li>
</template>
