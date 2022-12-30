<script lang="ts" setup>
const config = useRuntimeConfig();
</script>

<template>
  <section
    id="collab-welcome"
    class="page-wrapper-narrow text-center max-width-"
  >
    <div
      class="bg-cover bg-center min-h-[16rem] w-[95%] rounded rotate-[2deg] mb-6"
      style="
        background-image: url('/img/maxime-dore-fD2orULc0cY-unsplash.webp');
      "
    ></div>
    <p class="text-2xl">{{ config.public.BLOG_NAME }}</p>
    <h2 class="text-5xl font-bold font-serif pt-2 pb-6">Let's cooperate!</h2>
    <p class="text-xl">
      With your valuable products or great services and our top-quality texts
      and images, we can conquer the world as formidable team!
    </p>
  </section>
</template>
