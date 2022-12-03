<template>
  <header class="sticky top-0 bg-gray-200 py-2">
    <div class="flex justify-between page-wrapper">
      <h1>AppHeader</h1>
      <nav>
        <ul class="flex gap-2">
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/about-me">About me</NuxtLink></li>
          <li><NuxtLink to="/collab">Collaboration</NuxtLink></li>
        </ul>
      </nav>
    </div>
  </header>
</template>
