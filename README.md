# Bergachi Meubles — Site Vitrine

## Aperçu du projet
- **Nom** : Bergachi Meubles
- **Objectif** : Site vitrine élégant présentant les collections de mobilier moderne de Bergachi Meubles (Tunisie). Pas de e-commerce — les demandes se font via WhatsApp.
- **Fonctionnalités** :
  - Page d'accueil (hero, collections, produits en vedette, showrooms, aperçu contact)
  - Catalogue de collection avec recherche, filtre par catégorie et tri
  - Pages détail produit (galerie, spécifications, demande de devis via WhatsApp)
  - Page contact : cartes Google Maps intégrées (2 emplacements), WhatsApp, email — **sans formulaire**

## Modèle « site vitrine »
- ❌ Pas de prix
- ❌ Pas de panier / commande
- ❌ Pas de tableau de bord admin
- ❌ Pas de formulaire de contact
- ✅ Demandes de renseignements via WhatsApp

## Emplacements (2)
1. **Showroom Bizerte** — Menzel Jemil, Bizerte 7080
2. **Showroom Tunis** — Ettadhamen Mnihla, Ariana

## Coordonnées
- **Téléphone** : 50 807 859 (+216 50 807 859)
- **WhatsApp** : 216 50 807 859
- **Email** : abergachi@gmail.com
- **Facebook** : https://www.facebook.com/profile.php?id=100064514840260

## Routes principales
- `/` — Accueil
- `/collection` — Catalogue (params : `?categorie=salons|chambres|salles-a-manger|decoration`)
- `/produit/[slug]` — Détail produit
- `/contact` — Contact (cartes, WhatsApp, email)

## Architecture technique
- **Stack** : Next.js 15.1.3 (App Router) + TypeScript + Tailwind CSS + Framer Motion + lucide-react
- **Rendu** : Statique (SSG) — 25 pages prégénérées, prêt pour Vercel
- **Polices** : Poppins (sans) + Cormorant Garamond (serif) via next/font
- **Données** : contenu statique dans `src/lib/data.ts` (catégories + produits)
- **Images** : `public/hero.png`, `public/logo.png`, `public/products/*`, `public/showroom/*`

## Charte graphique
- Fond `#FAF8F5` · Navbar `#F3EEE8` · Texte `#2B2B2B`
- Primaire `#A37B52` · Secondaire `#8D6E4F`
- Style : élégant, chaleureux, minimaliste, animations subtiles

## Développement
```bash
npm install
npm run dev        # serveur de développement
npm run build      # build de production (SSG)
npm start          # serveur de production
```

## Déploiement
- **Plateforme** : Vercel (statique / SSG)
- **Statut** : ✅ Build OK — 25 pages statiques
- **Dernière mise à jour** : 2026-08-08
