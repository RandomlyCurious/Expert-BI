# CLAUDE.md — Site vitrine {{NOM_ACTIVITE}}

> Référence complète : **lire intégralement `CdC-site-vitrine-v2.md`** avant toute action.
> Ce fichier rappelle les règles à tenir en permanence. (Pour un blocage strict, prévoir un hook plutôt que de compter sur ce fichier.)

## Projet
Site vitrine **de conversion** (FR), prestation BI freelance, **100 % remote, France entière**.
Mission : faire comprendre l'offre en **< 30 s**, qualifier, **déclencher une prise de contact**.
Pas d'e-commerce, pas de paiement en ligne, **pas de blog**.

## Stack (imposée)
- **Astro (SSG) + Tailwind CSS**. JS minimal ; îlots Astro uniquement pour le formulaire et l'agenda.
- **CMS git-based : TinaCMS** (Decap en repli). Contenu versionné dans Git.
- Hébergement statique (Cloudflare Pages / Netlify). Analytics **cookieless** (Plausible/Matomo).

## Priorités transverses
- **SEO (point d'or)** : sans blog → landing pages par intention + on-page + technique (CdC §9).
- **Clarté** : choix de l'offre **par situation**, zéro jargon, **un seul** CTA primaire.

## Règles IMMUABLES (CdC §6 — ne jamais enfreindre)
- Offre = **3 piliers + 1 extension**. **JAMAIS** de tableau de prix 3 colonnes pour les piliers → **3 blocs distincts**.
- **« C'est pour vous si… »** sur chaque pilier (sélection par situation, pas par prix).
- **Pilier 1 « Data Analyst à temps partiel » dominant**, en premier, plus détaillé.
- **JAMAIS** afficher de nombre de jours/mois.
- Pack 20 h (2 000 €) **jamais adjacent** au prix du temps partiel (2 200 €/mois).
- **Automatisation** = section subordonnée, **après** les 3 offres, **sans prix**, niveau visuel inférieur.

## Direction artistique (CdC §8B)
« Tableau de bord premium » : épuré, pro. Blanc + teal-azur (`#0EA5A4`→`#2563EB`) + **un** accent ambre (`#F59E0B`, CTA). Typo **Space Grotesk + Inter**, **chiffres tabulaires**. Fluidité par micro-animations discrètes (respect `prefers-reduced-motion`). **Évoquer Power BI/Fabric SANS copier Microsoft ; aucune capture Power BI.**

## Voix & terminologie
- Voix éditoriale : `{{VOIX}}` (je/nous — à trancher). Le copy s'adresse surtout à **« vous »**.
- Toujours **« Data Analyst à temps partiel »** ; ne jamais parler de « forfait en jours ».
- Toutes les valeurs `{{...}}` en config/variables d'env, **jamais en dur**. Aucun secret en dur.

## Budgets
Lighthouse ≥ 95 (4 axes) ; LCP < 2 s ; CLS < 0,1 ; INP < 200 ms (mobile) ; **WCAG 2.1 AA**.

## Terminé
= tous les critères du **CdC §15** cochés (dont **test clarté < 30 s**, §14).
