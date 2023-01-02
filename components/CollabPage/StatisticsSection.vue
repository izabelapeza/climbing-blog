<script setup lang="ts">
import { mdiYoutube, mdiInstagram } from "@mdi/js";
</script>

<template>
  <!-- blog -->
  <CollabPageStatisticsElement
    id="blog"
    title="Blog"
    desc="The blog is our main medium of communication with our community. Here we publish extensive articles, guides, product recommendations and the most important content."
  ></CollabPageStatisticsElement>

  <!-- youtube -->
  <CollabPageStatisticsElement
    id="youtube"
    title="YouTube"
    desc="On our youtube we share our exemplary trainings to improve your climbing technique. New videos are released weekly on Thursday."
  >
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://www.youtube.com/"
      class="text-accentGreen hover:brightness-[105%] transition-all flex gap-2 items-center"
      ><BaseIcon class="h-5 w-5" :path="mdiYoutube" /> YouTube Profile</a
    >
  </CollabPageStatisticsElement>

  <!-- instagram -->
  <CollabPageStatisticsElement
    id="instagram"
    title="Instagram"
    desc="The profile is used for everyday communication with our community through photos from our trainings and trips and daily stories"
  >
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://www.instagram.com/"
      class="text-accentGreen hover:brightness-[105%] transition-all flex gap-2 items-center"
      ><BaseIcon class="h-5 w-5" :path="mdiInstagram" /> Instagram Profile</a
    >
  </CollabPageStatisticsElement>
</template>
