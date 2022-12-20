<script lang="ts" setup>
import HeadingWithShadow from "~~/components/base/HeadingWithShadow.vue";
import { blogPosts } from "~~/data/blogPosts";
</script>

<template>
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
</template>
