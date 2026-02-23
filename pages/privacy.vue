<template>
  <div class="privacy-page">
    <LanguageSwitcher />
    
    <main>
      <header class="privacy-header">
        <div class="privacy-header-content">
          <NuxtLink to="/" class="back-link" aria-label="Back to home">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <line x1="19" y1="12" x2="5" y2="12"></line>
              <polyline points="12 19 5 12 12 5"></polyline>
            </svg>
            <span>{{ locale === 'en' ? 'Back' : 'Retour' }}</span>
          </NuxtLink>
          <h1 class="privacy-title">{{ t('privacy.title') }}</h1>
          <p class="privacy-updated">{{ t('privacy.lastUpdated') }}</p>
        </div>
      </header>

      <div class="privacy-content">
        <article class="privacy-article">
        <!-- Application Publisher -->
        <section class="privacy-section">
          <h2>{{ t('privacy.sections.editor.title') }}</h2>
          <p>{{ t('privacy.sections.editor.description') }}</p>
          <p class="contact-email">
            <a href="mailto:memo.flashcards.contact@gmail.com">
              memo.flashcards.contact@gmail.com
            </a>
          </p>
          <p>{{ t('privacy.sections.editor.address') }}</p>
        </section>

        <!-- Hosting -->
        <section class="privacy-section">
          <h2>{{ t('privacy.sections.hosting.title') }}</h2>
          <p>{{ t('privacy.sections.hosting.description') }}</p>
          <p>{{ t('privacy.sections.hosting.privacy') }}</p>
        </section>

        <!-- Personal Data -->
        <section class="privacy-section">
          <h2>{{ t('privacy.sections.personalData.title') }}</h2>
          <p>{{ t('privacy.sections.personalData.collection') }}</p>
          <p>{{ t('privacy.sections.personalData.ads') }}</p>
          <p>{{ t('privacy.sections.personalData.deletion') }}</p>
        </section>

        <!-- Third-Party Services -->
        <section class="privacy-section">
          <h2>{{ t('privacy.sections.thirdPartyServices.title') }}</h2>
          <p>{{ t('privacy.sections.thirdPartyServices.description') }}</p>
          <ul>
            <li>{{ t('privacy.sections.thirdPartyServices.sentry') }}</li>
            <li>{{ t('privacy.sections.thirdPartyServices.posthog') }}</li>
            <li>{{ t('privacy.sections.thirdPartyServices.revenuecat') }}</li>
            <li>{{ t('privacy.sections.thirdPartyServices.web3forms') }}</li>
          </ul>
        </section>

        <!-- Permissions and Access -->
        <section class="privacy-section">
          <h2>{{ t('privacy.sections.permissions.title') }}</h2>
          <p>{{ t('privacy.sections.permissions.description') }}</p>
          <ul>
            <li>{{ t('privacy.sections.permissions.photos') }}</li>
            <li>{{ t('privacy.sections.permissions.notifications') }}</li>
          </ul>
        </section>

        <!-- Distribution Platforms -->
        <section class="privacy-section">
          <h2>{{ t('privacy.sections.distribution.title') }}</h2>
          <p>{{ t('privacy.sections.distribution.platforms') }}</p>
          <p>{{ t('privacy.sections.distribution.policies') }}</p>
        </section>

        <!-- Intellectual Property -->
        <section class="privacy-section">
          <h2>{{ t('privacy.sections.intellectualProperty.title') }}</h2>
          <p>{{ t('privacy.sections.intellectualProperty.copyright') }}</p>
          <p>{{ t('privacy.sections.intellectualProperty.prohibition') }}</p>
        </section>

        <!-- Terms of Use -->
        <section class="privacy-section">
          <h2>{{ t('privacy.sections.termsOfUse.title') }}</h2>
          <p>{{ t('privacy.sections.termsOfUse.version') }}</p>
          <p>{{ t('privacy.sections.termsOfUse.compliance') }}</p>
        </section>
      </article>
      </div>
    </main>

    <FooterComponent />
  </div>
</template>

<script setup lang="ts">
const { t, locale } = useI18n()

useHead({
  htmlAttrs: {
    lang: computed(() => locale.value)
  },
  title: computed(() => `${t('privacy.title')} - MemoLooper`),
  meta: [
    {
      name: 'description',
      content: computed(() => 
        locale.value === 'en' 
          ? 'Privacy policy for MemoLooper app' 
          : 'Politique de confidentialité de l\'application MemoLooper'
      )
    },
    {
      name: 'robots',
      content: 'index, follow'
    }
  ]
})
</script>

<style scoped>
.privacy-page {
  min-height: 100vh;
  background: white;
}

.privacy-header {
  padding: 6rem 2rem 3rem;
  background: #ffffff;
  border-bottom: 1px solid #e8e8e8;
}

.privacy-header-content {
  max-width: 800px;
  margin: 0 auto;
}

.back-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #5f33e1;
  text-decoration: none;
  font-weight: 500;
  margin-bottom: 2rem;
  transition: opacity 0.2s ease;
}

.back-link:hover {
  opacity: 0.8;
}

.back-link:focus {
  outline: 2px solid #5f33e1;
  outline-offset: 4px;
  border-radius: 4px;
}

.privacy-title {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  margin-bottom: 0.75rem;
  color: #1a1a1a;
  letter-spacing: -0.02em;
}

.privacy-updated {
  font-size: 0.9375rem;
  color: #6a6a6a;
}

.privacy-content {
  padding: 4rem 2rem;
}

.privacy-article {
  max-width: 800px;
  margin: 0 auto;
}

.privacy-section {
  margin-bottom: 3rem;
}

.privacy-section h2 {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #1a1a1a;
}

.privacy-section p {
  font-size: 1rem;
  line-height: 1.7;
  color: #4a4a4a;
  margin-bottom: 1rem;
}

.privacy-section ul {
  list-style: none;
  padding-left: 0;
  margin-top: 1rem;
}

.privacy-section li {
  font-size: 1rem;
  line-height: 1.7;
  color: #4a4a4a;
  padding-left: 1.5rem;
  position: relative;
  margin-bottom: 0.5rem;
}

.privacy-section li::before {
  content: '•';
  position: absolute;
  left: 0.5rem;
  color: #5f33e1;
  font-weight: bold;
}

.contact-email {
  margin: 1rem 0;
}

.contact-email a {
  color: #5f33e1;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s ease;
}

.contact-email a:hover {
  color: #4e2ab8;
  text-decoration: underline;
}

.contact-email a:focus {
  outline: 2px solid #5f33e1;
  outline-offset: 4px;
  border-radius: 2px;
}

@media (max-width: 768px) {
  .privacy-header {
    padding: 5rem 1.5rem 2rem;
  }
  
  .privacy-content {
    padding: 3rem 1.5rem;
  }
  
  .privacy-section {
    margin-bottom: 2.5rem;
  }
}
</style>
