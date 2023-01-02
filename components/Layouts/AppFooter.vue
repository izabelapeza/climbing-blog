<script setup lang="ts">
import { mdiYoutube, mdiInstagram, mdiFacebook } from "@mdi/js";

const config = useRuntimeConfig();
</script>

<template>
  <footer class="bg-dominant-300 py-4 md:py-2 text-sm">
    <div class="page-wrapper py-4 grid md:flex md:justify-between gap-5">
      <div class="grid gap-3 md:gap-2">
        <h2 class="font-[800] text-2xl uppercase text-dominant-100">
          {{ config.public.BLOG_NAME }}
        </h2>
        <div class="flex gap-2">
          <a
            class="h-7 w-7 bg-dominant-200 hover:bg-dominant-100 transition cursor-pointer rounded-full flex justify-center items-center border border-dominant-100"
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow us on YouTube"
          >
            <BaseIcon class="h-5 w-5" :path="mdiYoutube" />
          </a>
          <a
            class="h-7 w-7 bg-dominant-200 hover:bg-dominant-100 transition cursor-pointer rounded-full flex justify-center items-center border border-dominant-100"
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Connect with us on Instagram"
          >
            <BaseIcon class="h-5 w-5" :path="mdiInstagram" />
          </a>
          <a
            class="h-7 w-7 bg-dominant-200 hover:bg-dominant-100 transition cursor-pointer rounded-full flex justify-center items-center border border-dominant-100"
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow us on Facebook"
          >
            <BaseIcon class="h-5 w-5" :path="mdiFacebook" />
          </a>
        </div>
      </div>
      <div class="grid gap-3 md:gap-2">
        <h3 class="font-[800] text-sm uppercase text-dominant-100">Menu</h3>
        <nav aria-label="footer-navigation">
          <ul class="grid grid-cols-[140px_140px] gap-1 text-sm">
            <BaseRouterLink href="/beginners">Beginners</BaseRouterLink>
            <BaseRouterLink href="/technique">Technique</BaseRouterLink>
            <BaseRouterLink href="/fitness-mobility"
              >Fitness & Mobility</BaseRouterLink
            >
            <BaseRouterLink href="/collaboration">Collaboration</BaseRouterLink>
          </ul>
        </nav>
      </div>
    </div>
  </footer>
</template>
