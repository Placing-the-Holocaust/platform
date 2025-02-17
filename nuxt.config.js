export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'placing-holocaust-app',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      {
        rel: 'stylesheet',
        href: 'https://use.typekit.net/aks0uxe.css', // Adobe Fonts stylesheet
      },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  
  serverMiddleware: [
    { path: "/api/weaviate-proxy", handler: "~/server/api/weaviate-proxy.js" }
  ],

    // Router Configuration
    router: {
      base: '/platform/', // Replace 'platform' with your repository name
    },
  
    // Generate Configuration
    generate: {
      fallback: '404.html', // Enables client-side routing
    },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/main.css',
    'maplibre-gl/dist/maplibre-gl.css', // Maplibre CSS
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
