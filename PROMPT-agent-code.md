# Prompt de lancement — Agent CODE (build Astro)

> À coller dans Claude Code (VS Code). Le repo doit contenir `CdC-site-vitrine-v2.md` et `CLAUDE.md` à la racine.

```
Rôle : tu es l'agent de développement front-end de ce projet.

Avant toute action, lis INTÉGRALEMENT `CdC-site-vitrine-v2.md` et `CLAUDE.md` (racine du repo).
Objectif : un site vitrine de conversion en français pour une prestation BI freelance.

Stack imposée : Astro (SSG) + Tailwind CSS ; CMS git-based TinaCMS (Decap en repli) ;
hébergement statique (Cloudflare Pages/Netlify). JS minimal, îlots Astro seulement pour
le formulaire et l'agenda.

AVANT DE CODER :
1. Reformule ta compréhension du CdC en 10 lignes max + liste les ambiguïtés.
2. Propose un plan de build (arbo de fichiers, composants, étapes) suivant les lots du §16.
3. Applique la DIRECTION ARTISTIQUE du §8B et propose 2-3 déclinaisons visuelles sous forme
   d'une maquette de la PAGE D'ACCUEIL + du BLOC OFFRES. ATTENDS ma validation avant
   d'industrialiser le reste.

NON NÉGOCIABLES (CdC §6) — à respecter et à auto-vérifier :
- Pas de tableau de prix 3 colonnes pour les piliers → 3 blocs distincts.
- « C'est pour vous si… » sur chaque pilier ; sélection par situation, pas par prix.
- Pilier 1 (Data Analyst à temps partiel) dominant, en premier, plus détaillé.
- JAMAIS de nombre de jours/mois affiché.
- Pack 20 h jamais adjacent au prix du temps partiel (2 200 €/mois).
- Automatisation = section subordonnée après les 3 offres, sans prix, niveau visuel inférieur.

DIRECTION ARTISTIQUE (CdC §8B) :
« Tableau de bord premium » épuré. Blanc + teal-azur (#0EA5A4→#2563EB) + un seul accent
ambre (#F59E0B, CTA). Dégradés doux teal→bleu→violet en touches rares (fluidité). Typo
Space Grotesk + Inter, chiffres tabulaires. Cartes à ombre subtile, coins arrondis moyens,
grands blancs. Micro-animations discrètes (scroll-reveal, compteurs, lignes data en mouvement),
prefers-reduced-motion respecté. Motifs dashboard abstraits ORIGINAUX — jamais de captures
Power BI ni de photos stock. Évoque Power BI/Fabric SANS copier Microsoft.

RÉASSURANCE & RÉFÉRENCES (CdC §11) :
Prévoir un composant « bande de références » (Safran, Cdiscount, Edenauto, CRIT, Europhone),
sobre, en niveaux de gris, sur l'accueil et renforcé sur /reporting-grand-compte/. Titre par
défaut « Ils m'ont fait confiance ». NE PAS inventer de logos ni de mentions ; laisser le
wording exact en variable tant qu'il n'est pas validé.

BUDGETS : Lighthouse ≥ 95 (4 axes), LCP < 2 s, CLS < 0,1, INP < 200 ms (mobile) ; WCAG 2.1 AA ;
SEO technique §9 (sitemap, robots, métadonnées centralisées, JSON-LD
Organization/ProfessionalService/Service/FAQPage/BreadcrumbList, maillage interne).

CONVENTIONS : toutes les valeurs {{...}} en variables d'env/config, jamais en dur.
Formulaire → POST {{WEBHOOK_N8N}} + honeypot + Turnstile. Agenda {{RDV_URL}}.
Aucun secret en dur. README de build.

TERMINÉ = tous les critères du §15 cochés, dont le test de clarté < 30 s (§14).

Travaille lot par lot, montre le résultat à chaque lot, ne passe pas au suivant sans validation.
```
