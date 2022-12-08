<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();
</script>

<template>
  <main>
    <article id="posts-page" class="page-wrapper">
      <h2>Post {{ route.params.id }}</h2>
    </article>
  </main>
</template>
