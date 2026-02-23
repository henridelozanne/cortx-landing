<template>
  <div>
    <LanguageSwitcher />
    <NuxtPage />
  </div>
</template>

<script setup lang="ts">
const { initLocale } = useI18n()

// Initialize i18n on app load
onMounted(() => {
  initLocale()
})
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
