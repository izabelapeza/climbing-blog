<script lang="ts" setup>
import HeadingWithShadow from "~~/components/base/HeadingWithShadow.vue";
</script>

<template>
  <section id="about-us" class="page-wrapper my-20">
    <div class="grid grid-cols-1 md:grid-cols-2 items-center gap-6">
      <div>
        <HeadingWithShadow shadow="About Us">About Us</HeadingWithShadow>
        <p class="text-lg md:text-xl">
          Marcin, Tola, Arnold, Krzysztof - we are friends who share a love for
          bouldering 🧗 We met at the climbing section in 2018 and since then we
          keep meeting to improve our skills together and create content for our
          wonderful followers 🐒 We hope you are or will become one of them!
        </p>
      </div>
      <div
        class="bg-cover bg-center min-h-[16rem] w-[95%] rounded rotate-[2deg] m-auto opacity-60"
        style="background-image: url('/img/pexels-helena-lopes-708440.webp')"
      ></div>
    </div>
  </section>
</template>
