<script setup lang="ts">
import { useRoute } from "vue-router";
import { onClickOutside } from "@vueuse/core";
import { mdiMenu } from "@mdi/js";

const route = useRoute();
const config = useRuntimeConfig();

// check window width
let screenWidth = ref<number>(0);

onBeforeMount(() => {
  screenWidth.value = window.innerWidth;
});

onMounted(() => {
  window.addEventListener("resize", () => {
    screenWidth.value = window.innerWidth;
  });
});

// open menu
const openMenu = ref(false);

watch(
  () => screenWidth.value,
  () => {
    if (screenWidth.value >= 768) openMenu.value = false;
  }
);

// click outside mobile menu
const navbarRef = ref(null);

onClickOutside(navbarRef, () => {
  openMenu.value = false;
});
</script>

<template>
  <header class="sticky top-0 bg-dominant-300 py-2 z-50" ref="navbarRef">
    <div class="flex justify-between items-center page-wrapper py-1">
      <h1 class="font-[800] uppercase">
        <NuxtLink to="/">{{ config.public.BLOG_NAME }}</NuxtLink>
      </h1>
      <nav aria-label="primary-navigation" class="hidden md:flex">
        <ul class="flex gap-8">
          <BaseRouterLink href="/beginners">Beginners</BaseRouterLink>
          <BaseRouterLink href="/technique">Technique</BaseRouterLink>
          <BaseRouterLink href="/fitness-mobility"
            >Fitness & Mobility</BaseRouterLink
          >
        </ul>
      </nav>
      <div class="flex gap-4 items-center">
        <button
          class="flex md:hidden transition-all"
          :class="
            openMenu
              ? 'opacity-100 text-complement-100'
              : 'opacity-60 hover:opacity-80'
          "
          @click="openMenu = !openMenu"
        >
          <BaseIcon class="h-5 w-5" :path="mdiMenu" />
        </button>
        <BaseBtn size="sm"
          ><NuxtLink to="/collaboration">Collaboration</NuxtLink></BaseBtn
        >
      </div>
    </div>
    <nav
      aria-label="mobile-navigation"
      class="transition-all overflow-hidden"
      :class="openMenu ? 'h-[18rem]' : 'h-0'"
    >
      <ul class="grid gap-10 justify-center text-center py-8">
        <BaseRouterLink @click="openMenu = false" href="/beginners"
          >Beginners</BaseRouterLink
        >
        <BaseRouterLink @click="openMenu = false" href="/technique"
          >Technique</BaseRouterLink
        >
        <BaseRouterLink @click="openMenu = false" href="/fitness-mobility"
          >Fitness & Mobility</BaseRouterLink
        >
        <BaseRouterLink @click="openMenu = false" href="/collaboration"
          >Collaboration</BaseRouterLink
        >
      </ul>
    </nav>
  </header>
</template>
