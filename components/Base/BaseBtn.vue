<script setup lang="ts">
const props = defineProps<{
  href?: string;
  size: "sm" | "md";
}>();

const selectedClasses = computed(() => {
  let classes = "";

  if (props.size === "sm") classes = "px-4 py-1 text-sm";
  else classes = "px-6 py-1 text-base";

  return classes;
});
</script>

<template>
  <component
    class="rounded-full text-complement-100 text-center font-bold bg-accentRed hover:brightness-[115%] transition-all cursor-pointer"
    :class="selectedClasses"
    :is="href ? 'a' : 'button'"
    :href="href"
  >
    <slot />
  </component>
</template>
