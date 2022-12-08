<script setup lang="ts">
import { useRoute } from "vue-router";

const route = useRoute();

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
</script>

<template>
  <header class="sticky top-0 bg-dominant-300 py-2">
    <div class="flex justify-between items-center page-wrapper text-sm py-1">
      <h1 class="font-[800] uppercase">
        <NuxtLink to="/">CityMonkey</NuxtLink>
      </h1>
      <nav aria-label="primary-navigation" class="hidden md:flex">
        <ul class="flex gap-8">
          <li
            :class="
              route.path === '/beginners'
                ? 'opacity-100 text-complement-100'
                : 'opacity-60 hover:opacity-80 transition-all'
            "
          >
            <NuxtLink to="/beginners">Beginners</NuxtLink>
          </li>
          <li
            :class="
              route.path === '/technique'
                ? 'opacity-100 text-complement-100'
                : 'opacity-60 hover:opacity-80 transition-all'
            "
          >
            <NuxtLink to="/technique">Technique</NuxtLink>
          </li>
          <li
            :class="
              route.path === '/fitness-mobility'
                ? 'opacity-100 text-complement-100'
                : 'opacity-60 hover:opacity-80 transition-all'
            "
          >
            <NuxtLink to="/fitness-mobility">Fitness & Mobility</NuxtLink>
          </li>
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
          hamburger
        </button>
        <BaseBtn href="/contact">Contact</BaseBtn>
      </div>
    </div>
    <nav
      aria-label="mobile-navigation"
      class="transition-all overflow-hidden"
      :class="openMenu ? 'h-[18rem]' : 'h-0'"
    >
      <ul class="grid gap-10 justify-center text-center py-8">
        <li
          :class="
            route.path === '/beginners'
              ? 'opacity-100 text-complement-100'
              : 'opacity-60 hover:opacity-80 transition-all'
          "
        >
          <NuxtLink to="/beginners">Beginners</NuxtLink>
        </li>
        <li
          :class="
            route.path === '/technique'
              ? 'opacity-100 text-complement-100'
              : 'opacity-60 hover:opacity-80 transition-all'
          "
        >
          <NuxtLink to="/technique">Technique</NuxtLink>
        </li>
        <li
          :class="
            route.path === '/fitness-mobility'
              ? 'opacity-100 text-complement-100'
              : 'opacity-60 hover:opacity-80 transition-all'
          "
        >
          <NuxtLink to="/fitness-mobility">Fitness & Mobility</NuxtLink>
        </li>
        <li
          :class="
            route.path === '/contact'
              ? 'opacity-100 text-complement-100'
              : 'opacity-60 hover:opacity-80 transition-all'
          "
        >
          <NuxtLink to="/contact">Contact</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>
