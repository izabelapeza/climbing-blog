<template>
  <header class="sticky top-0 bg-dominant-300 py-2">
    <div class="flex justify-between page-wrapper text-sm">
      <h1>
        <NuxtLink to="/">AppHeader</NuxtLink>
      </h1>
      <nav aria-label="primary-navigation">
        <ul class="flex gap-4">
          <li><NuxtLink to="/beginners">Beginners</NuxtLink></li>
          <li><NuxtLink to="/technique">Technique</NuxtLink></li>
          <li>
            <NuxtLink to="/fitness-mobility">Fitness & Mobility</NuxtLink>
          </li>
        </ul>
      </nav>
      <NuxtLink to="/contact">Contact</NuxtLink>
    </div>
  </header>
</template>
