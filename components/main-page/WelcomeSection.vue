<script setup lang="ts">
import { scrollTo } from "~~/utils/functions";
import createIntersectionObserver from "~~/utils/intersectionObserver";

onMounted(() => {
  createIntersectionObserver(
    ".welcome-section__title",
    "welcome-section__title__animation"
  );
  createIntersectionObserver(
    ".welcome-section__button",
    "welcome-section__button__animation"
  );
});
</script>

<template>
  <section
    id="welcome"
    class="bg-cover bg-center w-full h-[90vh]"
    style="background-image: url('/img/yns-plt-NY1D4Zni7fc-unsplash.webp')"
  >
    <div
      class="w-full h-full bg-gradient-to-b from-dominant-300 flex justify-center items-center"
    >
      <div class="grid gap-4">
        <h2
          class="font-[900] text-4xl md:text-6xl font-serif welcome-section__title opacity-0 translate-y-[10rem] transition-all duration-700"
        >
          Discover Bouldering
        </h2>
        <BaseBtn
          class="w-[12rem] m-auto md:block hidden welcome-section__button opacity-0 translate-y-[10rem] transition-all duration-700 delay-300"
          size="md"
          @click="scrollTo('#recent-posts', 80)"
          >See Recent Posts</BaseBtn
        >
        <BaseBtn
          class="w-[10rem] m-auto block md:hidden welcome-section__button opacity-0 translate-y-[10rem] transition-all duration-700 delay-300"
          size="sm"
          @click="scrollTo('#recent-posts', 80)"
          >See Recent Posts</BaseBtn
        >
      </div>
    </div>
  </section>
</template>

<style scoped>
.welcome-section__title__animation,
.welcome-section__button__animation {
  opacity: 1;
  transform: translateY(0);
}
</style>
