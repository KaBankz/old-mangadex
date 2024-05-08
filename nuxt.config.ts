// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  build: {
    transpile: [
      '@fortawesome/vue-fontawesome',
      '@fortawesome/fontawesome-svg-core',
      '@fortawesome/free-solid-svg-icons',
      '@fortawesome/free-brands-svg-icons',
    ],
  },
  css: ['@fortawesome/fontawesome-svg-core/styles.css'],
});