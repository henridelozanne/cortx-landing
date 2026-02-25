# Guide de déploiement Cortx Landing Page

## 🚀 Déploiement sur Vercel (Recommandé)

Vercel est la solution la plus simple pour déployer un site Nuxt 3.

### Étapes :

1. **Créez un compte sur [Vercel](https://vercel.com)**

2. **Connectez votre repository GitHub**
   - Pushez votre code sur GitHub
   - Importez le projet dans Vercel

3. **Configuration automatique**
   - Vercel détecte automatiquement Nuxt 3
   - Build Command : `npm run build`
   - Output Directory : `.output/public`

4. **Variables d'environnement (optionnelles)**
   - Ajoutez vos variables dans les paramètres Vercel

5. **Déployez** 🎉

### Configuration custom domain :

- Ajoutez votre domaine dans les paramètres Vercel
- Configurez les DNS selon les instructions

---

## 📦 Déploiement sur Netlify

### Étapes :

1. **Créez un compte sur [Netlify](https://netlify.com)**

2. **Nouvelle site depuis Git**
   - Connectez votre repository

3. **Build settings :**

   ```
   Build command: npm run generate
   Publish directory: .output/public
   ```

4. **Variables d'environnement (optionnelles)**
   - Site settings > Environment variables

5. **Deploy site** 🎉

### Netlify.toml (optionnel) :

Créez un fichier `netlify.toml` à la racine :

```toml
[build]
  command = "npm run generate"
  publish = ".output/public"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

## 🌐 Déploiement sur Cloudflare Pages

### Étapes :

1. **Créez un compte sur [Cloudflare Pages](https://pages.cloudflare.com)**

2. **Create a project**
   - Connectez votre repository

3. **Build configuration :**

   ```
   Build command: npm run generate
   Build output directory: .output/public
   ```

4. **Variables d'environnement (optionnelles)**
   - Settings > Environment variables

5. **Save and Deploy** 🎉

---

## 🔧 Déploiement manuel (n'importe quel hébergeur)

Si vous utilisez un hébergeur traditionnel :

### Étapes :

1. **Générez le site statique localement :**

   ```bash
   npm run generate
   ```

2. **Récupérez les fichiers**
   - Les fichiers sont dans `.output/public`

3. **Upload via FTP/SFTP**
   - Uploadez tout le contenu de `.output/public` dans le dossier racine

4. **Configuration serveur**
   - Assurez-vous que le serveur serve `index.html` pour toutes les routes

---

## ✅ Checklist avant déploiement

- [ ] Testez en local avec `npm run preview`
- [ ] Vérifiez que toutes les traductions sont correctes
- [ ] Ajoutez l'URL App Store quand disponible
- [ ] Remplacez les screenshots placeholder par les vraies images
- [ ] Configurez votre domaine custom
- [ ] Ajoutez Google Analytics (optionnel)
- [ ] Testez sur mobile et desktop
- [ ] Vérifiez les scores Lighthouse (100/100 sur tous les indicateurs)

---

## 🔍 Post-déploiement

### 1. Vérification SEO

- [ ] Testez votre sitemap : `votredomaine.com/sitemap.xml`
- [ ] Vérifiez robots.txt : `votredomaine.com/robots.txt`
- [ ] Soumettez votre site à Google Search Console
- [ ] Vérifiez les meta tags avec [Meta Tags](https://metatags.io/)

### 2. Performance

- [ ] Testez avec [PageSpeed Insights](https://pagespeed.web.dev/)
- [ ] Vérifiez avec [Lighthouse](https://developers.google.com/web/tools/lighthouse)

### 3. Accessibilité

- [ ] Testez avec un lecteur d'écran
- [ ] Vérifiez la navigation au clavier
- [ ] Testez avec [WAVE](https://wave.webaim.org/)

---

## 📊 Analytics (optionnel)

Pour ajouter Google Analytics :

1. **Installez le module Nuxt :**

   ```bash
   npm install @nuxtjs/google-analytics
   ```

2. **Configurez dans `nuxt.config.ts` :**
   ```typescript
   modules: [
     '@nuxtjs/google-analytics'
   ],
   googleAnalytics: {
     id: 'G-XXXXXXXXXX'
   }
   ```

---

## 🆘 Dépannage

### Le site ne se build pas

- Vérifiez les erreurs avec `npm run build`
- Supprimez `node_modules` et réinstallez : `rm -rf node_modules && npm install`

### Les traductions ne fonctionnent pas

- Vérifiez que les fichiers JSON sont valides
- Vérifiez les clés de traduction dans les composants

### Les images ne s'affichent pas

- Vérifiez que les images sont dans le dossier `public/`
- Utilisez des chemins absolus : `/images/screenshot.png`

---

## 📧 Support

Pour toute question : hello@cortx-app.com
