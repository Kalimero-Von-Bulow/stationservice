# Station-Service — Kalimero Von Bülow

Site personnel de Kalimero Von Bülow. Stack : React + TypeScript + Vite + Tailwind CSS.

---

## 🚀 Structure du repo

Tous les fichiers sont **à la racine**, sauf les images qui vont dans `/public/`.

```
stationservice/
├── public/
│   ├── hero.webp
│   ├── kalimero-logo.jpg
│   ├── artwork-1.jpg       ← Fin de Journée
│   ├── artwork-2.jpg       ← Sérigraphie
│   ├── artwork-3.jpg       ← Self Portrait
│   ├── artwork-4.jpg       ← Inutile !!! Hors du Sage
│   ├── artwork-5.jpg       ← Chronic
│   └── artwork-6.jpg       ← Rayon X
├── App.tsx
├── CarouselSection.tsx
├── ErrorBoundary.tsx
├── Footer.tsx
├── Home.tsx
├── main.tsx
├── Navbar.tsx
├── NotFound.tsx
├── StarfieldCanvas.tsx
├── index.css
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

## 📁 Fichiers à uploader sur GitHub

### Nouveaux fichiers (à créer dans le repo)

| Fichier | Description |
|---|---|
| `package.json` | Dépendances du projet — **indispensable pour Vercel** |
| `vite.config.ts` | Configuration du bundler — **indispensable pour Vercel** |
| `tsconfig.json` | Configuration TypeScript |
| `index.html` | Point d'entrée HTML — **indispensable pour Vite** |
| `main.tsx` | Point d'entrée React |
| `ErrorBoundary.tsx` | Composant de gestion d'erreurs |
| `NotFound.tsx` | Page 404 |

### Fichiers à remplacer (existants dans le repo)

| Fichier | Ce qui a changé |
|---|---|
| `App.tsx` | Simplifié, imports corrigés |
| `Home.tsx` | Liens mis à jour, images locales, imports corrigés |
| `Navbar.tsx` | Liens mis à jour, liens inactifs désactivés |
| `Footer.tsx` | Liens mis à jour, doublon Instagram supprimé |
| `CarouselSection.tsx` | Navigation clavier, accessibilité améliorée |
| `StarfieldCanvas.tsx` | Aucun changement |
| `index.css` | Mode sombre uniquement, fixes CSS |

### Images — dans le dossier `/public/` (à créer)

| Fichier | Description |
|---|---|
| `hero.webp` | Personnage flottant dans le hero |
| `kalimero-logo.jpg` | Logo (navbar + sections) |
| `artwork-1.jpg` | Fin de Journée |
| `artwork-2.jpg` | Sérigraphie |
| `artwork-3.jpg` | Self Portrait |
| `artwork-4.jpg` | Inutile !!! Hors du Sage |
| `artwork-5.jpg` | Chronic |
| `artwork-6.jpg` | Rayon X |

---

## 🗑️ Fichiers à supprimer du repo

- `1bec2c50-0fa1-11f1-a03c-611c8a7f14e1.jpg`
- `86779ae0-0fa2-11f1-a03c-611c8a7f14e1.avif`
- `index_1.html`
- `ideas.md`
- `site_analysis.md`

---

## ✅ TODO restants dans le code

- **Navbar / Footer** — URLs à compléter : `Chronic`, `Rayon X`, `Goodies`, `Pixelfed`, `Peertube`, `Mastodon`, `Opensea`, `Patreon`
- **Showcase** — "Ecce Kalimero" et "Kalimero Von Bülow" pointent tous deux vers `kalimero.ink`
- **Carousel** — Vérifier les titres de `artwork-2.jpg`, `artwork-5.jpg`, `artwork-6.jpg`

---

## 🛠️ Lancer le projet en local

```bash
npm install
npm run dev
```

---

© Kalimero Von Bülow — All rights reserved
