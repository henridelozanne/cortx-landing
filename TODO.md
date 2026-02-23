# TODO - Prochaines étapes

Cette checklist répertorie les tâches à accomplir pour finaliser la landing page MemoLooper.

## 🎨 Contenu à ajouter

### 1. Lien App Store
- [ ] Obtenir l'URL de votre app sur l'App Store
- [ ] Remplacer `href="#"` dans [components/HeroSection.vue](components/HeroSection.vue:19)
- [ ] Tester le lien en production

### 2. Screenshots de l'app
- [ ] Préparer 3-4 screenshots de qualité de l'app
- [ ] Optimiser les images (format WebP recommandé)
- [ ] Ajouter les images dans `public/screenshots/`
- [ ] Mettre à jour [components/ScreenshotsSection.vue](components/ScreenshotsSection.vue)
- [ ] Ajouter les dimensions width/height pour éviter le layout shift

**Code de remplacement suggéré :**
```vue
<img
  src="/screenshots/home.webp"
  alt="MemoLooper flashcards interface"
  width="320"
  height="693"
  loading="lazy"
  decoding="async"
  class="screenshot-image"
/>
```

### 3. Images SEO
- [ ] Créer une image Open Graph (1200x630px)
- [ ] Créer une favicon 180x180px pour Apple Touch Icon
- [ ] Créer des icônes PWA (192x192 et 512x512)
- [ ] Ajouter ces images dans [nuxt.config.ts](nuxt.config.ts)

---

## 🔧 Configuration

### 1. Domaine
- [ ] Acheter/configurer votre domaine
- [ ] Mettre à jour l'URL dans [public/sitemap.xml](public/sitemap.xml:3)
- [ ] Configurer les DNS

### 2. Analytics (optionnel)
- [ ] Créer un compte Google Analytics
- [ ] Ajouter le tracking ID
- [ ] Installer @nuxtjs/google-analytics si nécessaire

### 3. Variables d'environnement
- [ ] Copier `.env.example` en `.env`
- [ ] Configurer les variables selon vos besoins

---

## 🚀 Déploiement

### 1. Préparation
- [ ] Tester localement avec `npm run build && npm run preview`
- [ ] Vérifier toutes les pages (/, /privacy)
- [ ] Tester le switch de langue
- [ ] Vérifier la navigation sur mobile

### 2. Hébergement
- [ ] Choisir un hébergeur (Vercel recommandé)
- [ ] Connecter le repository Git
- [ ] Configurer le build
- [ ] Déployer la première version

### 3. Post-déploiement
- [ ] Vérifier que le site est accessible
- [ ] Tester les scores Lighthouse (objectif 100/100)
- [ ] Soumettre le sitemap à Google Search Console
- [ ] Tester sur plusieurs navigateurs
- [ ] Tester sur mobile et desktop

---

## 🎯 Optimisations

### Performance
- [ ] Compresser les images avec [Squoosh](https://squoosh.app/)
- [ ] Utiliser WebP pour toutes les images
- [ ] Vérifier le temps de réponse serveur

### SEO
- [ ] Soumettre à Google Search Console
- [ ] Soumettre à Bing Webmaster Tools
- [ ] Vérifier l'indexation des pages
- [ ] Créer un compte Twitter/LinkedIn pour le partage

### Accessibilité
- [ ] Tester avec un lecteur d'écran (VoiceOver sur Mac)
- [ ] Vérifier la navigation au clavier complète
- [ ] Tester avec WAVE (https://wave.webaim.org/)

---

## 📱 Tests

### Navigateurs à tester
- [ ] Chrome (Desktop & Mobile)
- [ ] Safari (Desktop & Mobile)
- [ ] Firefox (Desktop)
- [ ] Edge (Desktop)

### Appareils à tester
- [ ] iPhone (Safari)
- [ ] Android (Chrome)
- [ ] iPad
- [ ] Desktop (différentes résolutions)

---

## 📊 Monitoring

### Une fois en production
- [ ] Configurer les alertes de disponibilité
- [ ] Surveiller les performances avec PageSpeed Insights
- [ ] Vérifier les taux de conversion du bouton App Store
- [ ] Analyser le trafic avec Google Analytics

---

## 🎨 Améliorations futures (optionnelles)

### Contenu
- [ ] Ajouter une section témoignages
- [ ] Ajouter une FAQ
- [ ] Ajouter une section "Comment ça marche"
- [ ] Créer un blog pour le SEO

### Fonctionnalités
- [ ] Ajouter un formulaire de newsletter
- [ ] Ajouter un bouton de partage social
- [ ] Ajouter des animations plus avancées
- [ ] Créer une vidéo de démonstration

### Marketing
- [ ] Créer des meta tags pour Twitter Card
- [ ] Optimiser pour Pinterest Rich Pins
- [ ] Créer des variations pour les A/B tests
- [ ] Ajouter le pixel Facebook si nécessaire

---

## ✅ Checklist de lancement

Avant le lancement officiel :

- [ ] Toutes les traductions sont vérifiées
- [ ] L'URL App Store est configurée
- [ ] Les screenshots réels sont ajoutés
- [ ] Le domaine est configuré
- [ ] HTTPS est activé
- [ ] Les scores Lighthouse sont > 95
- [ ] Le site est testé sur mobile et desktop
- [ ] Google Analytics est configuré (optionnel)
- [ ] Le sitemap est soumis à Google
- [ ] Les meta tags sont optimisés
- [ ] Les images Open Graph sont ajoutées

---

## 📝 Notes

**Fichiers à personnaliser en priorité :**

1. `components/HeroSection.vue` - Ajouter l'URL App Store
2. `components/ScreenshotsSection.vue` - Remplacer les placeholders
3. `public/sitemap.xml` - Mettre à jour l'URL du domaine
4. `nuxt.config.ts` - Ajouter les images Open Graph

**Commandes utiles :**

```bash
# Développement
npm run dev

# Build de production
npm run build

# Génération statique
npm run generate

# Preview du build
npm run preview

# Vérifier les erreurs TypeScript
npx nuxi typecheck
```

---

## 🆘 Besoin d'aide ?

Consultez les guides :
- [README.md](README.md) - Vue d'ensemble du projet
- [DEPLOYMENT.md](DEPLOYMENT.md) - Guide de déploiement
- [LIGHTHOUSE.md](LIGHTHOUSE.md) - Guide d'optimisation

Contact : memo.flashcards.contact@gmail.com
