<template>
  <section class="screenshots" aria-labelledby="screenshots-title">
    <div class="screenshots-container">
      <h2 id="screenshots-title" class="screenshots-title">
        {{ t("screenshots.title") }}
      </h2>
      <p class="screenshots-subtitle">
        {{ t("screenshots.subtitle") }}
      </p>

      <div class="screenshots-grid">
        <div
          v-for="i in 3"
          :key="i"
          class="screenshot-item"
          :style="{ animationDelay: `${i * 0.15}s` }"
        >
          <picture>
            <source :srcset="`/ss-${i}.webp`" type="image/webp" />
            <img
              :src="`/ss-${i}.png`"
              :alt="`Screenshot ${i}`"
              class="screenshot-image"
              loading="lazy"
            />
          </picture>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { t, locale } = useI18n();

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
      { threshold: 0.1 },
    );

    document.querySelectorAll(".screenshot-item").forEach((el) => {
      observer.observe(el);
    });

    onUnmounted(() => observer.disconnect());
  }
});
</script>

<style scoped>
.screenshots {
  padding: 6rem 2rem;
  background: transparent;
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

.screenshot-item {
  aspect-ratio: 1242 / 2688;
  border-radius: 24px;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  opacity: 0;
  transform: translateY(30px) scale(0.95);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.screenshot-item.animate-in {
  animation: zoomInUp 0.7s ease-out forwards;
}

.screenshot-item:hover {
  transform: translateY(-8px) scale(1.02);
  box-shadow: 0 12px 40px rgba(95, 51, 225, 0.2);
}

.screenshot-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
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
item
