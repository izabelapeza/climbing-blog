<script setup lang="ts">
import { useRoute } from "vue-router";
import { blogPosts } from "~~/data/blogPosts";
import { authors, Author } from "~/data/authors";
import { ComputedRef } from "vue";

const route = useRoute();

const postID = computed(() => {
  return route.params.id as string;
});
const postTag = computed(() => {
  return route.fullPath.split("/")[1];
});
const currentPost = computed(() => {
  return blogPosts.find((post) => {
    return post.id === postID.value && post.tag === postTag.value;
  });
});

const author: ComputedRef<Author | undefined> = computed(() => {
  return authors.find((a) => {
    return a.id === currentPost.value?.authorID;
  });
});

const postDate: ComputedRef<string> = computed(() => {
  if (!currentPost.value) return "no date";
  let date = new Date(currentPost.value?.date * 1000);
  return date.toLocaleString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
});
</script>

<template>
  <main>
    <section
      id="post-not-found"
      class="page-wrapper"
      v-if="currentPost === undefined"
    >
      Post not found
    </section>
    <article v-else id="posts-page" class="page-wrapper">
      <div class="py-10 grid gap-4">
        <div class="bg-dominant-300 w-full h-96 rounded"></div>
        <h2 class="font-bold text-4xl font-serif">{{ currentPost.title }}</h2>
        <div
          class="border-t pt-2 border-opacity-10 border-complement-200 flex justify-between items-center"
        >
          <div class="flex gap-2 items-center">
            <div class="h-7 w-7 rounded-full bg-dominant-300"></div>
            <p class="text-sm">{{ author?.name }} {{ author?.lastname }}</p>
          </div>
          <p class="text-sm">{{ postDate }}</p>
        </div>
        <p class="text-lg font-bold text-justify">{{ currentPost.lead }}</p>
        <div class="grid gap-2 text-justify" v-html="currentPost.post"></div>
      </div>
    </article>
  </main>
</template>
