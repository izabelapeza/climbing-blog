<script lang="ts" setup>
import HeadingWithShadow from "~~/components/Base/HeadingWithShadow.vue";
import { blogPosts } from "~~/data/blogPosts";
import createIntersectionObserver from "~~/utils/intersectionObserver";

onMounted(() => {
  createIntersectionObserver(
    ".recent-posts-heading",
    "recent-posts-heading__animation"
  );
  createIntersectionObserver(
    ".recent-posts-card",
    "recent-posts-card__animation"
  );
});
</script>

<template>
  <section id="recent-posts" class="page-wrapper my-20">
    <HeadingWithShadow
      shadow="Recent Posts"
      class="recent-posts-heading opacity-0 transition-all duration-700"
      >Recent Posts</HeadingWithShadow
    >
    <div class="grid gap-4 grid-cols-1 md:grid-cols-3 max-w-[100vw]">
      <BasePostCard
        v-for="index in 3"
        :key="index"
        :post="blogPosts[0]"
        :justifyPhoto="'top'"
        class="recent-posts-card opacity-0 translate-x-[10rem] md:translate-x-[30rem] transition-all duration-700"
        :style="{ transitionDelay: index * 150 + 75 + 'ms' }"
      />
    </div>
  </section>
</template>

<style scoped>
.recent-posts-heading__animation {
  opacity: 1;
}
.recent-posts-card__animation {
  opacity: 1;
  transform: translateX(0);
}
</style>
