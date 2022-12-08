<script setup lang="ts">
defineProps<{
  href?: string;
}>();
</script>

<template>
  <component
    class="px-4 py-1 rounded-full text-xs text-complement-100 font-bold bg-accentRed hover:brightness-[115%] transition-all cursor-pointer"
    :is="href ? 'a' : 'button'"
    :href="href"
  >
    <slot />
  </component>
</template>
