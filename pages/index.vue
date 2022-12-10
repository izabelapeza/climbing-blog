<script lang="ts" setup>
import HeadingWithShadow from "~~/components/base/HeadingWithShadow.vue";
import { blogPosts } from "~~/data/blogPosts";
import { scrollTo } from "~~/utils/functions";
</script>

<template>
  <main>
    <section
      id="welcome"
      class="bg-cover bg-center w-full h-[90vh]"
      style="background-image: url('/img/yns-plt-NY1D4Zni7fc-unsplash.webp')"
    >
      <div
        class="w-full h-full bg-gradient-to-b from-dominant-300 flex justify-center items-center"
      >
        <div class="grid gap-4">
          <h2 class="font-[900] text-4xl md:text-6xl font-serif">
            Discover Bouldering
          </h2>
          <BaseBtn
            class="w-[12rem] m-auto md:block hidden"
            size="md"
            @click="scrollTo('#recent-posts', 80)"
            >See Recent Posts</BaseBtn
          >
          <BaseBtn
            class="w-[10rem] m-auto block md:hidden"
            size="sm"
            @click="scrollTo('#recent-posts', 80)"
            >See Recent Posts</BaseBtn
          >
        </div>
      </div>
    </section>
    <section id="recent-posts" class="page-wrapper my-12">
      <HeadingWithShadow shadow="Recent Posts">Recent Posts</HeadingWithShadow>
      <div class="grid gap-4 grid-cols-1 md:grid-cols-3">
        <BasePostCard
          v-for="index in 3"
          :key="index"
          :post="blogPosts[0]"
          :justifyPhoto="'top'"
        />
      </div>
    </section>
  </main>
</template>
