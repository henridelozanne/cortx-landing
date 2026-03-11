<template>
  <section class="features" aria-labelledby="features-title">
    <div class="features-container">
      <h2 id="features-title" class="features-title">
        {{ t("features.title") }}
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
            <IconStatistics v-else-if="feature.key === 'statistics'" />
            <IconAI v-else-if="feature.key === 'ai'" />
            <IconWidget v-else />
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
import { h } from "vue";

const { t } = useI18n();

const features = [
  { key: "flashcards" },
  { key: "repetition" },
  { key: "ai" },
  { key: "widget" },
  { key: "statistics" },
];

// Icon components
const IconFlashcards = () =>
  h(
    "svg",
    {
      width: 48,
      height: 48,
      viewBox: "0 0 24 24",
      fill: "currentColor",
      stroke: "none",
    },
    [
      // Carte arrière (gauche)
      h("rect", {
        x: 4,
        y: 8,
        width: 10,
        height: 14,
        rx: 1.5,
        transform: "rotate(-15 9 15)",
        opacity: "0.4",
      }),
      // Carte du milieu
      h("rect", {
        x: 7,
        y: 6,
        width: 10,
        height: 14,
        rx: 1.5,
        opacity: "0.7",
      }),
      // Carte avant (droite)
      h("rect", {
        x: 10,
        y: 8,
        width: 10,
        height: 14,
        rx: 1.5,
        transform: "rotate(15 15 15)",
      }),
    ],
  );

const IconRepetition = () =>
  h(
    "svg",
    {
      width: 48,
      height: 48,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": "2",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
    },
    [
      h("polyline", { points: "23 4 23 10 17 10" }),
      h("path", { d: "M20.49 15a9 9 0 1 1-2.12-9.36L23 10" }),
    ],
  );

const IconStatistics = () =>
  h(
    "svg",
    {
      width: 48,
      height: 48,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      "stroke-width": "2",
      "stroke-linecap": "round",
      "stroke-linejoin": "round",
    },
    [
      h("line", { x1: 18, y1: 20, x2: 18, y2: 10 }),
      h("line", { x1: 12, y1: 20, x2: 12, y2: 4 }),
      h("line", { x1: 6, y1: 20, x2: 6, y2: 14 }),
    ],
  );

const IconAI = () =>
  h(
    "svg",
    {
      width: 48,
      height: 48,
      viewBox: "0 0 24 24",
      fill: "currentColor",
      stroke: "none",
    },
    [
      // Grande étoile 4 branches centrale
      h("path", {
        d: "M12 2 L14.83 9.17 L22 12 L14.83 14.83 L12 22 L9.17 14.83 L2 12 L9.17 9.17 Z",
      }),
      // Petite étoile 4 branches haut-droite
      h("path", {
        d: "M19 2 L20.06 3.94 L22 5 L20.06 6.06 L19 8 L17.94 6.06 L16 5 L17.94 3.94 Z",
        opacity: "0.65",
      }),
      // Micro étoile bas-gauche
      h("path", {
        d: "M5 16 L5.71 17.29 L7 18 L5.71 18.71 L5 20 L4.29 18.71 L3 18 L4.29 17.29 Z",
        opacity: "0.4",
      }),
    ],
  );

const IconWidget = () =>
  h(
    "svg",
    {
      width: 48,
      height: 48,
      viewBox: "0 0 24 24",
      fill: "currentColor",
      stroke: "none",
    },
    [
      // Téléphone
      h("rect", { x: 5, y: 1, width: 14, height: 22, rx: 3, opacity: "0.2" }),
      h("rect", {
        x: 5,
        y: 1,
        width: 14,
        height: 22,
        rx: 3,
        fill: "none",
        stroke: "currentColor",
        "stroke-width": "1.5",
      }),
      // Widget arrondi
      h("rect", { x: 7.5, y: 5, width: 9, height: 7, rx: 1.5 }),
      // Notch horloge : deux petits ronds
      h("circle", { cx: 10.5, cy: 17.5, r: 1, opacity: "0.7" }),
      h("circle", { cx: 13.5, cy: 17.5, r: 1, opacity: "0.4" }),
    ],
  );

// Intersection Observer for scroll animations
onMounted(() => {
  if (process.client) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" },
    );

    document.querySelectorAll(".feature-card").forEach((card) => {
      observer.observe(card);
    });

    onUnmounted(() => observer.disconnect());
  }
});
</script>

<style scoped>
.features {
  padding: 6rem 2rem;
  background: transparent;
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
  background: rgba(255, 255, 255, 0.55);
  backdrop-filter: blur(4px);
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
  background: rgba(255, 255, 255, 0.85);
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
