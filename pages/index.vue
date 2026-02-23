<template>
  <main>
    <HeroSection />
    <FeaturesSection />
    <ScreenshotsSection />
    <FooterComponent />
  </main>
</template>

<script setup lang="ts">
const { t, locale } = useI18n()

// Dynamic meta tags based on locale
useHead({
  htmlAttrs: {
    lang: computed(() => locale.value)
  },
  title: computed(() => t('meta.title')),
  meta: [
    {
      name: 'description',
      content: computed(() => t('meta.description'))
    },
    {
      property: 'og:title',
      content: computed(() => t('meta.title'))
    },
    {
      property: 'og:description',
      content: computed(() => t('meta.description'))
    },
    {
      name: 'twitter:title',
      content: computed(() => t('meta.title'))
    },
    {
      name: 'twitter:description',
      content: computed(() => t('meta.description'))
    }
  ]
})
</script>
