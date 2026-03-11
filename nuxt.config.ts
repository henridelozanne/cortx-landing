// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },

  modules: [["nuxt-gtag", { id: "G-TR1M8X5FRH", loadingStrategy: "defer" }]],

  // SSG mode for optimal performance
  ssr: true,

  // @ts-expect-error - Nitro config is valid but types may not be complete
  nitro: {
    preset: "static",
    prerender: {
      crawlLinks: true,
      routes: ["/", "/privacy"],
    },
  },

  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      script: [
        {
          innerHTML: `(function(){try{var userSet=localStorage.getItem('locale_user_set');var s=localStorage.getItem('locale');if(userSet==='true'&&(s==='fr'||s==='en')){window.__initialLocale=s;}else{var langs=(navigator.languages&&navigator.languages.length)?Array.from(navigator.languages):[navigator.language||''];for(var i=0;i<langs.length;i++){if(String(langs[i]).toLowerCase().startsWith('fr')){window.__initialLocale='fr';break;}}}}catch(e){}window.__initialLocale=window.__initialLocale||'en';}())`,
          tagPosition: "bodyClose",
        },
      ],
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: "Cortx - Study smarter. Remember longer.",
      meta: [
        {
          name: "description",
          content:
            "Cortx helps you memorize anything using flashcards and spaced repetition. Turn your notes into lasting knowledge.",
        },
        { name: "theme-color", content: "#5f33e1" },
        { name: "format-detection", content: "telephone=no" },

        // Open Graph
        { property: "og:type", content: "website" },
        {
          property: "og:title",
          content: "Cortx - Study smarter. Remember longer.",
        },
        {
          property: "og:description",
          content:
            "Cortx helps you memorize anything using flashcards and spaced repetition.",
        },
        { property: "og:site_name", content: "Cortx" },

        // Twitter Card
        { name: "twitter:card", content: "summary_large_image" },
        {
          name: "twitter:title",
          content: "Cortx - Study smarter. Remember longer.",
        },
        {
          name: "twitter:description",
          content:
            "Cortx helps you memorize anything using flashcards and spaced repetition.",
        },
      ],
      link: [
        { rel: "icon", type: "image/png", href: "/cortx-logo.png" },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/cortx-logo.png",
        },
        { rel: "manifest", href: "/manifest.json" },
        { rel: "preconnect", href: "https://www.googletagmanager.com" },
        { rel: "dns-prefetch", href: "https://www.google-analytics.com" },
        {
          rel: "preload",
          as: "image",
          href: "/cortx-logo-80.webp",
          type: "image/webp",
          fetchpriority: "high",
        },
      ],
    },
  },

  css: ["~/assets/css/main.css"],

  vite: {
    build: {
      target: "es2022",
    },
  },
});
