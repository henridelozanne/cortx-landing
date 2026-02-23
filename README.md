# Cortx Landing Page

Une landing page moderne et performante pour l'app iOS Cortx, construite avec Nuxt 3.

## 🚀 Fonctionnalités

- ✅ **Nuxt 3 avec SSG** (Static Site Generation) pour des performances optimales
- 🌍 **Bilangue FR/EN** avec détection automatique de la langue du navigateur
- 🎨 **Design moderne et minimaliste** avec la couleur principale (#5f33e1)
- 📱 **Mobile-first** et entièrement responsive
- ♿ **Accessibilité parfaite** (ARIA labels, focus states, navigation au clavier)
- 🎭 **Animations scroll custom** sans bibliothèque externe
- ⚡ **Performance optimale** - prêt pour 100% Lighthouse
- 🔍 **SEO optimisé** (meta tags dynamiques, sitemap, structured data JSON-LD)

## 📦 Installation

```bash
# Installation des dépendances
npm install

# Serveur de développement (http://localhost:3000)
npm run dev

# Build pour la production
npm run build

# Génération du site statique
npm run generate

# Prévisualisation du build de production
npm run preview
```

## 📁 Structure du projet

```
├── assets/
│   └── css/
│       └── main.css              # Styles globaux
├── components/
│   ├── HeroSection.vue           # Section hero
│   ├── FeaturesSection.vue       # Présentation des 3 features
│   ├── ScreenshotsSection.vue    # Galerie de screenshots
│   ├── FooterComponent.vue       # Footer
│   └── LanguageSwitcher.vue      # Switch de langue
├── composables/
│   └── useI18n.ts               # Système i18n custom
├── locales/
│   ├── en.json                  # Traductions anglaises
│   └── fr.json                  # Traductions françaises
├── pages/
│   ├── index.vue                # Page d'accueil
│   └── privacy.vue              # Politique de confidentialité
├── plugins/
│   └── seo.client.ts            # Plugin SEO (structured data)
├── public/
│   ├── favicon.svg              # Favicon
│   ├── manifest.json            # Manifest PWA
│   ├── robots.txt               # Configuration robots
│   └── sitemap.xml              # Sitemap
├── nuxt.config.ts               # Configuration Nuxt
└── package.json                 # Dépendances

```

## 🎨 Personnalisation

### Lien App Store

Le bouton "Download on the App Store" utilise actuellement `href="#"`. Pour ajouter votre lien App Store :

1. Ouvrez [components/HeroSection.vue](components/HeroSection.vue)
2. Remplacez `href="#"` par votre URL App Store
3. L'attribut `data-app-store-link` facilite le tracking

### Screenshots

Remplacez les placeholders de screenshots :

1. Ajoutez vos images dans le dossier `public/screenshots/`
2. Modifiez [components/ScreenshotsSection.vue](components/ScreenshotsSection.vue)
3. Remplacez les placeholders par vos images

### Traductions

Modifiez les fichiers :

- [locales/en.json](locales/en.json) pour l'anglais
- [locales/fr.json](locales/fr.json) pour le français

## 🌐 Déploiement

Le site peut être déployé sur n'importe quel service d'hébergement statique :

### Vercel (recommandé)

```bash
npm run build
# Déployer le dossier .output/public
```

### Netlify

```bash
npm run generate
# Déployer le dossier .output/public
```

### GitHub Pages / Cloudflare Pages

```bash
npm run generate
# Déployer le dossier .output/public
```

## ⚡ Performance

Ce site est optimisé pour obtenir des scores parfaits sur Lighthouse :

- ✅ **Performance** : Code splitting, images optimisées, minimal JS
- ✅ **Accessibilité** : ARIA labels, contraste, navigation clavier
- ✅ **SEO** : Meta tags, structured data, sitemap
- ✅ **Best Practices** : HTTPS, sécurité, standards web

## 🛠️ Technologies

- **Nuxt 3** - Framework Vue.js
- **Vue 3** - Composition API
- **TypeScript** - Type safety
- **CSS3** - Animations et styles custom

## 📝 Contact

Email : memo.flashcards.contact@gmail.com

## 📄 License

© 2026 Cortx. Tous droits réservés.
