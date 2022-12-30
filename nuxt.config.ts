// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss"],
  runtimeConfig: {
    public: {
      BLOG_NAME: process.env.BLOG_NAME || "CityMonkey",
    },
  },
});
