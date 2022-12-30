<script setup lang="ts">
import { mdiEmailOutline } from "@mdi/js";
</script>

<template>
  <section
    id="collab-email"
    class="page-wrapper text-2xl md:text-4xl font-bold flex items-center justify-center gap-2"
  >
    <BaseIcon
      class="h-8 w-8 md:h-10 md:w-10 translate-y-[0.2rem]"
      :path="mdiEmailOutline"
    />
    <p>contact: <span class="text-accentGreen">collab@citymonkey.com</span></p>
  </section>
</template>
