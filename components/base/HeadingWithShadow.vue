<script setup lang="ts">
defineProps<{ shadow: string }>();
</script>

<template>
  <div class="relative h-24 md:h-32">
    <p
      class="absolute top-0 gradient-text font-[900] text-6xl md:text-8xl whitespace-nowrap"
    >
      {{ shadow }}
    </p>
    <h3
      class="absolute top-[2rem] md:top-[3.5rem] font-[700] text-3xl md:text-4xl text-complement-100 font-serif"
    >
      <slot />
    </h3>
  </div>
</template>

<style scoped>
.gradient-text {
  background-image: linear-gradient(
    180deg,
    rgb(249, 248, 243, 0.2),
    rgb(249, 248, 243, 0)
  );
  background-clip: text;
  color: transparent;
}
</style>
