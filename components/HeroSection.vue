<template>
  <section class="hero" aria-labelledby="hero-title">
    <div class="hero-content animate-fade-in">
      <div class="hero-branding">
        <img src="/memolooper-logo.png" alt="MemoLooper Logo" class="hero-logo" width="80" height="80">
        <h2 class="hero-app-name">MemoLooper</h2>
      </div>
      <h1 id="hero-title" class="hero-title" v-html="t('hero.title')">
      </h1>
      <p class="hero-subtitle">
        {{ t('hero.subtitle') }}
      </p>
      <a 
        href="#" 
        class="app-store-button"
        data-app-store-link
        role="button"
        :aria-label="t('hero.cta')"
      >
        <svg class="app-store-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
          <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
          <path d="M2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
        <span>{{ t('hero.cta') }}</span>
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t } = useI18n()
</script>

<style scoped>
.hero {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  background: #ffffff;
  position: relative;
  overflow: hidden;
}

.hero-content {
  max-width: 800px;
  text-align: center;
  position: relative;
  z-index: 1;
}

.hero-branding {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-bottom: 2rem;
}

.hero-logo {
  width: 80px;
  height: 80px;
  object-fit: contain;
  border-radius: 16px;
}

.hero-app-name {
  font-size: 1.75rem;
  font-weight: 700;
  color: #5f33e1;
  letter-spacing: -0.01em;
  margin: 0;
}

.hero-title {
  font-size: clamp(2.5rem, 6vw, 4rem);
  font-weight: 800;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  color: #1a1a1a;
  letter-spacing: -0.02em;
}

.hero-subtitle {
  font-size: clamp(1.125rem, 2.5vw, 1.375rem);
  line-height: 1.6;
  margin-bottom: 2.5rem;
  color: #4a4a4a;
  max-width: 650px;
  margin-left: auto;
  margin-right: auto;
}

.app-store-button {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  background: #5f33e1;
  color: white;
  padding: 1rem 2rem;
  border-radius: 12px;
  font-size: 1.125rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(95, 51, 225, 0.3);
}

.app-store-button:hover {
  background: #4e2ab8;
  transform: translateY(-2px);
  box-shadow: 0 6px 25px rgba(95, 51, 225, 0.4);
}

.app-store-button:focus {
  outline: 2px solid #5f33e1;
  outline-offset: 4px;
}

.app-store-button:active {
  transform: translateY(0);
}

.app-store-icon {
  flex-shrink: 0;
}

.animate-fade-in {
  animation: fadeInUp 0.8s ease-out;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .hero {
    min-height: calc(100vh - 4rem);
    padding: 6rem 1.5rem 2rem;
  }
  
  .hero-title {
    margin-bottom: 1.25rem;
  }
  
  .hero-subtitle {
    margin-bottom: 2rem;
  }
  
  .app-store-button {
    padding: 0.875rem 1.75rem;
    font-size: 1rem;
  }
}
</style>
