<template>
  <footer class="footer" role="contentinfo">
    <div class="footer-container">
      <div class="footer-content">
        <div class="footer-brand">
          <h2 class="footer-logo">Cortx</h2>
          <p class="footer-tagline">{{ t("footer.tagline") }}</p>
        </div>

        <nav class="footer-nav" aria-label="Footer navigation">
          <NuxtLink to="/privacy" class="footer-link">
            {{ t("footer.privacy") }}
          </NuxtLink>
        </nav>

        <div class="footer-contact">
          <p>{{ t("footer.contact") }}</p>
          <a
            href="mailto:memo.flashcards.contact@gmail.com"
            class="footer-email"
            aria-label="Send email to memo.flashcards.contact@gmail.com"
          >
            memo.flashcards.contact@gmail.com
          </a>
        </div>
      </div>

      <div class="footer-bottom">
        <p class="footer-copyright">{{ t("footer.copyright") }}</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const { t } = useI18n();
</script>

<style scoped>
.footer {
  background: #1a1a1a;
  color: #fafafa;
  padding: 4rem 2rem 2rem;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;
  margin-bottom: 3rem;
  padding-bottom: 3rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.footer-brand {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.footer-logo {
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  margin: 0;
}

.footer-tagline {
  font-size: 0.9375rem;
  color: #a0a0a0;
  line-height: 1.6;
}

.footer-nav {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.footer-link {
  color: #fafafa;
  text-decoration: none;
  transition: color 0.2s ease;
  font-size: 0.9375rem;
  width: fit-content;
}

.footer-link:hover {
  color: #5f33e1;
}

.footer-link:focus {
  outline: 2px solid #5f33e1;
  outline-offset: 4px;
  border-radius: 2px;
}

.footer-contact {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  font-size: 0.9375rem;
}

.footer-contact p {
  color: #a0a0a0;
  margin: 0;
}

.footer-email {
  color: #8b6aff;
  text-decoration: none;
  transition: color 0.2s ease;
  width: fit-content;
}

.footer-email:hover {
  color: #a388ff;
  text-decoration: underline;
}

.footer-email:focus {
  outline: 2px solid #5f33e1;
  outline-offset: 4px;
  border-radius: 2px;
}

.footer-bottom {
  text-align: center;
}

.footer-copyright {
  font-size: 0.875rem;
  color: #9a9a9a;
  margin: 0;
}

@media (max-width: 768px) {
  .footer {
    padding: 3rem 1.5rem 1.5rem;
  }

  .footer-content {
    grid-template-columns: 1fr;
    gap: 2rem;
    margin-bottom: 2rem;
    padding-bottom: 2rem;
  }
}
</style>
