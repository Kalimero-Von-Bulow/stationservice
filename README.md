# Station-Service — Kalimero Von Bülow

Site personnel de Kalimero Von Bülow. Stack : React + TypeScript + Vite + Tailwind CSS.

---

## 🚀 Structure du repo

```
stationservice/
├── public/                 ← CRÉER ce dossier s'il n'existe pas
│   ├── hero.webp           ← personnage flottant (hero)
│   ├── kalimero-logo.jpg   ← logo rond (navbar, From Hell, Ecce Kalimero)
│   ├── artwork-1.jpg       ← Fin de Journée
│   ├── artwork-2.jpg       ← Sérigraphie
│   ├── artwork-3.jpg       ← Self Portrait
│   ├── artwork-4.jpg       ← Inutile !!! Hors du Sage
│   ├── artwork-5.jpg       ← Chronic
│   └── artwork-6.jpg       ← Rayon X
├── App.tsx
├── Home.tsx
├── Navbar.tsx
├── Footer.tsx
├── CarouselSection.tsx
├── StarfieldCanvas.tsx
├── index.css
└── README.md
```

---

## 📁 Fichiers à uploader

### Fichiers de code — remplacer les existants (à la racine du repo)

| Fichier | Ce qui a changé |
|---|---|
| `App.tsx` | Suppression du ThemeProvider (plus de mode clair) |
| `Home.tsx` | Liens mis à jour, images locales, suppression du système de thème |
| `Navbar.tsx` | Liens mis à jour, liens inactifs désactivés proprement |
| `Footer.tsx` | Liens mis à jour, doublon Instagram supprimé |
| `CarouselSection.tsx` | Navigation clavier ajoutée, accessibilité améliorée |
| `StarfieldCanvas.tsx` | Aucun changement (fichier identique) |
| `index.css` | Mode sombre uniquement, suppression du override `.flex`, animation float réduite |

### Images — créer le dossier `/public/` et y déposer

| Fichier | Description |
|---|---|
| `hero.webp` | Personnage flottant dans le hero |
| `kalimero-logo.jpg` | Logo Kalimero (navbar + sections) |
| `artwork-1.jpg` | Fin de Journée |
| `artwork-2.jpg` | Sérigraphie |
| `artwork-3.jpg` | Self Portrait |
| `artwork-4.jpg` | Inutile !!! Hors du Sage |
| `artwork-5.jpg` | Chronic |
| `artwork-6.jpg` | Rayon X |

---

## 🗑️ Fichiers à supprimer du repo

Ces fichiers sont orphelins (non utilisés dans le code) :

- `1bec2c50-0fa1-11f1-a03c-611c8a7f14e1.jpg`
- `86779ae0-0fa2-11f1-a03c-611c8a7f14e1.avif`
- `index_1.html`
- `ideas.md`
- `site_analysis.md`

---

## ✅ TODO restants dans le code

Ces éléments sont marqués en commentaire `// TODO` dans le code :

- **Navbar / Footer** — Ajouter les vraies URLs quand disponibles : `Chronic`, `Rayon X`, `Goodies`, `Pixelfed`, `Peertube`, `Mastodon`, `Opensea`, `Patreon`
- **Showcase** — "Ecce Kalimero" et "Kalimero Von Bülow" pointent tous deux vers `kalimero.ink` — mettre à jour si des URLs distinctes existent
- **Carousel** — Vérifier / corriger les titres des œuvres `artwork-2.jpg`, `artwork-5.jpg`, `artwork-6.jpg`

---

## 🛠️ Lancer le projet en local

```bash
npm install
npm run dev
```

---

© Kalimero Von Bülow — All rights reserved
