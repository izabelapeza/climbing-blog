<script lang="ts" setup>
import HeadingWithShadow from "~~/components/base/HeadingWithShadow.vue";
import createIntersectionObserver from "~~/utils/intersectionObserver";

onMounted(() => {
  createIntersectionObserver(
    ".about-us-heading",
    "about-us-heading__animation"
  );
  createIntersectionObserver(".about-us-desc", "about-us-desc__animation");
  createIntersectionObserver(".about-us-img", "about-us-img__animation");
});
</script>

<template>
  <section id="about-us" class="page-wrapper my-20">
    <div
      class="grid grid-cols-1 md:grid-cols-2 items-center gap-6 about-us-heading opacity-0 transition-all duration-1000"
    >
      <div class="about-us-desc opacity-0 transition-all duration-1000">
        <HeadingWithShadow shadow="About Us">About Us</HeadingWithShadow>
        <p class="text-lg md:text-xl">
          Marcin, Tola, Arnold, Krzysztof - we are friends who share a love for
          bouldering 🧗 We met at the climbing section in 2018 and since then we
          keep meeting to improve our skills together and create content for our
          wonderful followers 🐒 We hope you are or will become one of them!
        </p>
      </div>
      <div
        class="bg-cover bg-center min-h-[16rem] w-[95%] rounded rotate-[10deg] m-auto opacity-60 about-us-img opacity-0 transition-all duration-1000"
        style="background-image: url('/img/pexels-helena-lopes-708440.webp')"
      ></div>
    </div>
  </section>
</template>

<style scoped>
.about-us-heading__animation,
.about-us-desc__animation {
  opacity: 1;
}
.about-us-img__animation {
  opacity: 1;
  transform: rotate(2deg);
}
</style>
