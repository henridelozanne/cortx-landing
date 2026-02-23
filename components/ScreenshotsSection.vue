<template>
  <section class="screenshots" aria-labelledby="screenshots-title">
    <div class="screenshots-container">
      <h2 id="screenshots-title" class="screenshots-title">
        {{ t('screenshots.title') }}
      </h2>
      <p class="screenshots-subtitle">
        {{ t('screenshots.subtitle') }}
      </p>
      
      <div class="screenshots-grid">
        <div 
          v-for="i in 3" 
          :key="i" 
          class="screenshot-placeholder"
          :style="{ animationDelay: `${i * 0.15}s` }"
          :aria-label="`Screenshot ${i}`"
          role="img"
        >
          <div class="placeholder-content">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
              <circle cx="8.5" cy="8.5" r="1.5"></circle>
              <polyline points="21 15 16 10 5 21"></polyline>
            </svg>
            <p class="placeholder-text">Screenshot {{ i }}</p>
          </div>
        </div>
      </div>
      
      <p class="screenshots-note">
        {{ locale === 'en' ? 'Screenshots coming soon' : 'Captures d\'écran à venir' }}
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t, locale } = useI18n()

onMounted(() => {
  if (process.client) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in')
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('.screenshot-placeholder').forEach((el) => {
      observer.observe(el)
    })

    onUnmounted(() => observer.disconnect())
  }
})
</script>

<style scoped>
.screenshots {
  padding: 6rem 2rem;
  background: #ffffff;
}

.screenshots-container {
  max-width: 1200px;
  margin: 0 auto;
}

.screenshots-title {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  text-align: center;
  margin-bottom: 1rem;
  color: #1a1a1a;
  letter-spacing: -0.02em;
}

.screenshots-subtitle {
  font-size: 1.25rem;
  text-align: center;
  margin-bottom: 4rem;
  color: #4a4a4a;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.screenshots-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;
}

.screenshot-placeholder {
  aspect-ratio: 9 / 16;
  background: linear-gradient(135deg, #fafafa 0%, #f0f0f0 100%);
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid #e8e8e8;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  transform: translateY(30px) scale(0.95);
}

.screenshot-placeholder.animate-in {
  animation: zoomInUp 0.7s ease-out forwards;
}

.screenshot-placeholder:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 12px 40px rgba(95, 51, 225, 0.2);
  border-color: rgba(95, 51, 225, 0.3);
}

.placeholder-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  color: #9a9a9a;
}

.placeholder-text {
  font-size: 0.875rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.screenshots-note {
  text-align: center;
  font-size: 0.9375rem;
  color: #6a6a6a;
  font-style: italic;
  margin-top: 2rem;
}

@keyframes zoomInUp {
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

@media (max-width: 768px) {
  .screenshots {
    padding: 4rem 1.5rem;
  }
  
  .screenshots-subtitle {
    margin-bottom: 3rem;
  }
  
  .screenshots-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .screenshot-placeholder {
    max-width: 320px;
    margin: 0 auto;
  }
}
</style>
