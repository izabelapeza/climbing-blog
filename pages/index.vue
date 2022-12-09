<script lang="ts" setup>
import { blogPosts } from "~~/data/blogPosts";
</script>

<template>
  <main>
    <section id="welcome" class="page-wrapper"></section>
    <section
      id="posts"
      class="page-wrapper grid gap-4 grid-cols-1 md:grid-cols-3 py-6"
    >
      <BasePostCard
        v-for="index in 3"
        :key="index"
        :post="blogPosts[0]"
        :justifyPhoto="'top'"
      />
    </section>
  </main>
</template>
