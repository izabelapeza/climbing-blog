<template>
  <div
    class="grid m-0 min-h-[100vh] grid-rows-[auto_1fr_auto] bg-dominant-400 text-complement-200"
  >
    <LayoutsAppHeader class="min-h-96" />
    <slot />
    <LayoutsAppFooter class="min-h-96" />
  </div>
</template>
