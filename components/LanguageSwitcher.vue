<template>
  <div class="language-switcher">
    <button
      @click="toggleLanguage"
      class="language-button"
      type="button"
      :aria-label="locale === 'en' ? 'FR - Switch to French' : 'EN - Switch to English'"
    >
      <span class="language-label" aria-hidden="true">{{ locale === 'en' ? 'FR' : 'EN' }}</span>
    </button>
  </div>
</template>

<script setup lang="ts">
const { locale, setLocale } = useI18n()

const toggleLanguage = () => {
  setLocale(locale.value === 'en' ? 'fr' : 'en')
}
</script>

<style scoped>
.language-switcher {
  position: fixed;
  top: 1.5rem;
  right: 1.5rem;
  z-index: 100;
}

.language-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  background: rgba(255, 255, 255, 0.95);
  border: 1px solid rgba(95, 51, 225, 0.2);
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  font-weight: 600;
  font-size: 0.875rem;
  color: #5f33e1;
}

.language-button:hover {
  background: #5f33e1;
  color: white;
  transform: scale(1.05);
  box-shadow: 0 4px 12px rgba(95, 51, 225, 0.3);
}

.language-button:focus {
  outline: 2px solid #5f33e1;
  outline-offset: 2px;
}

.language-button:active {
  transform: scale(0.95);
}

.language-label {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

@media (max-width: 768px) {
  .language-switcher {
    top: 1rem;
    right: 1rem;
  }
  
  .language-button {
    width: 2.5rem;
    height: 2.5rem;
    font-size: 0.8125rem;
  }
}
</style>
