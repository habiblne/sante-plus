# Cabinet Médical Santé Plus

Site vitrine moderne et accessible pour un cabinet médical fictif à Alger, conçu comme projet de démonstration pour le portfolio de développement web de **DZWEB**.

> **Note :** Ce site est un projet de démonstration pour portfolio. Il ne s'agit pas d'un véritable cabinet médical et aucune donnée patient réelle n'est collectée.

---

## Technologies utilisées

- **React 19** – Bibliothèque frontend moderne
- **Vite 6** – Bundler et serveur de développement ultra-rapide
- **Tailwind CSS v4** (`@tailwindcss/vite`) – Framework CSS utilitaire
- **Lucide React** – Icônes vectorielles cohérentes et légères
- **IntersectionObserver API** – Animations scroll-reveal calmes avec support natif de `prefers-reduced-motion`

---

## Démarrage rapide

### 1. Installation des dépendances

```bash
npm install
```

### 2. Lancer le serveur de développement

```bash
npm run dev
```

L'application sera accessible sur `http://localhost:5173`.

### 3. Compiler pour la production

```bash
npm run build
```

Les fichiers statiques optimisés seront générés dans le dossier `dist/`.

### 4. Prévisualiser le build de production

```bash
npm run preview
```

### 5. Linter le code

```bash
npm run lint
```

---

## Déploiement

Le projet est configuré pour un déploiement zero-config sur **Vercel** ou **Netlify** :
- **Build Command :** `npm run build`
- **Output Directory :** `dist`
