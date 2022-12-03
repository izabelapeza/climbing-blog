<template>
  <header class="sticky top-0 bg-gray-200 py-2">
    <div class="flex justify-between page-wrapper text-sm">
      <h1>
        <NuxtLink to="/">AppHeader</NuxtLink>
      </h1>
      <nav aria-label="primary-navigation">
        <ul class="flex gap-4">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/posts">Posts</NuxtLink></li>
          <li><NuxtLink to="/about-me">About me</NuxtLink></li>
          <li><NuxtLink to="/collab">Collaboration</NuxtLink></li>
        </ul>
      </nav>
    </div>
  </header>
</template>
