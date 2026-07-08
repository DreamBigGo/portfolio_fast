# Instructions Claude Code - Site Portfolio

Ce fichier contient les directives de développement, de structure et de workflow pour ce projet de site portfolio.

## 1. Contexte & Stack Technique
- **Projet :** Site Portfolio d'Ingénierie Informatique / Développement.
- **Framework :** Next.js (App Router, routes dynamiques). 
  - *Attention :* Cette version de Next.js peut comporter des changements majeurs. Référez-vous au guide dans [node_modules/next/dist/docs/](file:///home/speshwa/WebstormProjects/portfolio_fast/node_modules/next/dist/docs/index.md) avant d'écrire du code.
- **Langage :** TypeScript avec mode strict activé.
- **Design System :** Tailwind CSS avec support natif du Mode Sombre (`dark:`) et Mode Clair.
- **Palette de couleurs imposée :** Orange, Vert, Blanc, Noir (à utiliser de manière équilibrée et esthétique). Les nuances de gris (`zinc`) sont admises comme neutres — ex. le palier « Notions » du système de niveaux de compétences (Notions/gris, Intermédiaire/orange, Avancé/vert).
- **Esthétique :** Minimalisme, simplicité, animations fluides et légères (ex: Framer Motion ou transitions CSS pures).
- **Internationalisation (i18n) :** Support multilingue requis (Français et Anglais) pour l'intégralité du site.

## 2. Structure des Pages (App Router)
Le projet doit être structuré avec les routes suivantes dans le dossier `app/` :
- `app/page.tsx` : Accueil épuré (Présentation flash, tagline) - Route `/(home)`
- `app/experiences/page.tsx` : Parcours professionnel et stages — chaque expérience référence ses compétences acquises/améliorées
- `app/etudes/page.tsx` : Formations et diplômes
- `app/projets/page.tsx` : Liste des projets avec filtres (dont un filtre par compétence)
- `app/projets/[id]/page.tsx` : Détail d'une réalisation (Route dynamique) — chaque projet référence ses compétences acquises/améliorées
- `app/hobbies/page.tsx` : Centres d'intérêt et projets personnels
- `app/contact/page.tsx` : Formulaire de contact (géré via Server Actions)

> **Compétences (pas de page dédiée) :** Les compétences ne sont plus une page/section autonome (`app/competences` supprimée). Elles deviennent un **attribut** rattaché à chaque expérience et à chaque projet : **1 expérience ou 1 projet ⇒ N compétences**, chacune qualifiée par un **niveau de maîtrise sur 3 paliers** (du plus faible au plus fort) :
>
> | Niveau | Clé (`SkillLevel`) | Couleur |
> |---|---|---|
> | Notions | `basics` | Gris (`zinc-400`) |
> | Intermédiaire | `intermediate` | Orange |
> | Avancé | `advanced` | Vert |
>
> Le gris reste dans la palette imposée (nuance de Noir/Blanc). Une éventuelle vue transversale des compétences est **dérivée par agrégation** de ces références (le niveau le plus élevé l'emporte ; pas de source de données séparée).

## 3. Normes de Code & Règles de Développement
- **Modularité :** Code hautement modulaire. Créer des composants atomiques réutilisables et des hooks personnalisés pour la logique (ex: filtrage, animations).
- **Taille limite :** Maximum 150 lignes de code par fonction ou composant. En cas de dépassement nécessaire, proposez un découpage ou justifiez la complexité.
- **Architecture & Nommage :** Dossiers et fichiers nommés en minuscules/kebab-case (ex: `project-card.tsx`). Éviter les noms génériques ambigus.
- **Server vs Client Components :** Utiliser les React Server Components (RSC) par défaut. N'ajouter `'use client'` que lorsque c'est strictement nécessaire (states, animations, gestionnaires d'événements).
- **Typage Strict :** L'utilisation de `any` est strictement interdite. Tous les types et interfaces doivent être définis de manière explicite et propre.

## 4. Workflow & Plugins installés dans Claude Code
- **Utilisation des outils :** Utilisez systématiquement les outils spécialisés du système (recherche textuelle, lecture/écriture ciblée, exécution de commandes) plutôt que de deviner ou de faire de grandes modifications manuelles.
- **Plugins installés sur ce projet :**
  - `frontend-design` : Utilisé automatiquement par Claude pour concevoir des interfaces soignées, uniques et fluides (Palette : Orange, Vert, Blanc, Noir, avec animations Framer Motion ou CSS pures).
  - `typescript-lsp` : Serveur de langage TypeScript/JavaScript pour l'auto-complétion, la navigation et le typage strict.
  - `/code-review` : Commande permettant de lancer une revue de code multi-agents sur les PRs afin d'auditer les modifications et de vérifier la conformité avec ce fichier `CLAUDE.md`.
  - `BMAD-METHOD` (Brief, Map, Act, Deliver) : Framework de développement agile basé sur des agents (PM, Architecte, Dev, QA) configuré sous forme de skills Claude Code dans `.claude/skills`.
    - Utilisez les skills BMAD comme `bmad-help` pour de l'aide générale, `bmad-create-prd`, `bmad-create-architecture`, `bmad-dev-story`, ou `bmad-code-review` pour guider le cycle de vie du projet.
    - Les dossiers `_bmad/` (fichiers de configuration et scripts) et `_bmad-output/` (artefacts de planification et livrables) structurent le workflow.
  - `/commit` et `/commit-push-pr` : Commandes intégrées pour automatiser la création de commits et de PRs propres.
- **Validation obligatoire :** Après chaque modification majeure :
  1. Résumez les changements effectués.
  2. Lancez la validation de compilation TypeScript avec `npm run build` ou `npx tsc --noEmit`.
  3. Vérifiez qu'il n'y a pas de régressions ou d'erreurs de linter.


