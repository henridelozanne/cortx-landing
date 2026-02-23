<template>
  <section class="features" aria-labelledby="features-title">
    <div class="features-container">
      <h2 id="features-title" class="features-title">
        {{ t('features.title') }}
      </h2>
      
      <div class="features-grid">
        <article 
          v-for="(feature, index) in features" 
          :key="feature.key"
          class="feature-card"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <div class="feature-icon" :aria-hidden="true">
            <IconFlashcards v-if="feature.key === 'flashcards'" />
            <IconRepetition v-else-if="feature.key === 'repetition'" />
            <IconStatistics v-else />
          </div>
          <h3 class="feature-title">
            {{ t(`features.items.${feature.key}.title`) }}
          </h3>
          <p class="feature-description">
            {{ t(`features.items.${feature.key}.description`) }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { h } from 'vue'

const { t } = useI18n()

const features = [
  { key: 'flashcards' },
  { key: 'repetition' },
  { key: 'statistics' }
]

// Icon components
const IconFlashcards = () => h('svg', {
  width: 48,
  height: 48,
  viewBox: '0 0 24 24',
  fill: 'currentColor',
  stroke: 'none'
}, [
  // Carte arrière (gauche)
  h('rect', { 
    x: 4, y: 8, width: 10, height: 14, rx: 1.5,
    transform: 'rotate(-15 9 15)',
    opacity: '0.4'
  }),
  // Carte du milieu
  h('rect', { 
    x: 7, y: 6, width: 10, height: 14, rx: 1.5,
    opacity: '0.7'
  }),
  // Carte avant (droite)
  h('rect', { 
    x: 10, y: 8, width: 10, height: 14, rx: 1.5,
    transform: 'rotate(15 15 15)'
  })
])

const IconRepetition = () => h('svg', {
  width: 48,
  height: 48,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  'stroke-width': '2',
  'stroke-linecap': 'round',
  'stroke-linejoin': 'round'
}, [
  h('polyline', { points: '23 4 23 10 17 10' }),
  h('path', { d: 'M20.49 15a9 9 0 1 1-2.12-9.36L23 10' })
])

const IconStatistics = () => h('svg', {
  width: 48,
  height: 48,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  'stroke-width': '2',
  'stroke-linecap': 'round',
  'stroke-linejoin': 'round'
}, [
  h('line', { x1: 18, y1: 20, x2: 18, y2: 10 }),
  h('line', { x1: 12, y1: 20, x2: 12, y2: 4 }),
  h('line', { x1: 6, y1: 20, x2: 6, y2: 14 })
])

// Intersection Observer for scroll animations
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
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    )

    document.querySelectorAll('.feature-card').forEach((card) => {
      observer.observe(card)
    })

    onUnmounted(() => observer.disconnect())
  }
})
</script>

<style scoped>
.features {
  padding: 6rem 2rem;
  background: white;
}

.features-container {
  max-width: 1200px;
  margin: 0 auto;
}

.features-title {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  text-align: center;
  margin-bottom: 4rem;
  color: #1a1a1a;
  letter-spacing: -0.02em;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2.5rem;
}

.feature-card {
  padding: 2.5rem;
  border-radius: 16px;
  background: #fafafa;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  transform: translateY(30px);
}

.feature-card.animate-in {
  animation: slideInUp 0.6s ease-out forwards;
}

.feature-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 40px rgba(95, 51, 225, 0.15);
  background: white;
}

.feature-icon {
  width: 64px;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #5f33e1 0%, #7c52ff 100%);
  color: white;
  border-radius: 12px;
  margin-bottom: 1.5rem;
  transition: transform 0.3s ease;
}

.feature-card:hover .feature-icon {
  transform: scale(1.1) rotate(5deg);
}

.feature-title {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #1a1a1a;
}

.feature-description {
  font-size: 1rem;
  line-height: 1.7;
  color: #4a4a4a;
}

@keyframes slideInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 768px) {
  .features {
    padding: 4rem 1.5rem;
  }
  
  .features-title {
    margin-bottom: 3rem;
  }
  
  .features-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .feature-card {
    padding: 2rem;
  }
}
</style>
