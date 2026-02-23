// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  
  // SSG mode for optimal performance
  ssr: true,
  
  nitro: {
    preset: 'static',
    prerender: {
      crawlLinks: true,
      routes: ['/','/', '/privacy']
    }
  },
  
  app: {
    head: {
      htmlAttrs: {
        lang: 'en'
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'MemoLooper - Study smarter. Remember longer.',
      meta: [
        { name: 'description', content: 'MemoLooper helps you memorize anything using flashcards and spaced repetition. Turn your notes into lasting knowledge.' },
        { name: 'theme-color', content: '#5f33e1' },
        { name: 'format-detection', content: 'telephone=no' },
        
        // Open Graph
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'MemoLooper - Study smarter. Remember longer.' },
        { property: 'og:description', content: 'MemoLooper helps you memorize anything using flashcards and spaced repetition.' },
        { property: 'og:site_name', content: 'MemoLooper' },
        
        // Twitter Card
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'MemoLooper - Study smarter. Remember longer.' },
        { name: 'twitter:description', content: 'MemoLooper helps you memorize anything using flashcards and spaced repetition.' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/manifest.json' }
      ]
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },

  css: ['~/assets/css/main.css'],

  modules: []
})
