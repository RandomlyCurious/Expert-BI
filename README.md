# Site vitrine BI — MASPIE-BI

Site vitrine de conversion (FR) pour une prestation BI freelance, 100 % remote, France entière.
Référence fonctionnelle : [`CdC-site-vitrine-v2.md`](./CdC-site-vitrine-v2.md). Règles non négociables : §6.

## Stack

- **Astro 6 (SSG)** + **Tailwind CSS v4** (tokens DA §8B dans `src/styles/global.css`)
- **TinaCMS** (CMS git-based, admin sur `/admin/`) — Decap en repli
- Polices auto-hébergées : Space Grotesk + Inter (`@fontsource-variable`)
- Hébergement statique (Cloudflare Pages / Netlify), build sur push Git
- Analytics cookieless (Plausible) via Partytown

## Prérequis

- Node ≥ 20 (testé sur Node 24)

## Démarrage

```bash
npm install
cp .env.example .env   # puis renseigner les variables (§0)
npm run dev            # http://localhost:4321
```

### Avec l'éditeur TinaCMS

```bash
npm run tina:dev       # lance Astro + l'admin Tina (/admin/)
```

## Scripts

| Script | Rôle |
|---|---|
| `npm run dev` | Serveur de dev Astro |
| `npm run build` | Build statique (`dist/`) |
| `npm run preview` | Prévisualise le build |
| `npm run tina:dev` | Dev + admin Tina |
| `npm run tina:build` | Build Tina + Astro (pour la prod) |

## Configuration

Toutes les valeurs `{{...}}` du CdC §0 sont centralisées dans
[`src/config/site.ts`](./src/config/site.ts) et lues depuis l'environnement
(`.env`). **Aucun secret ni valeur en dur** dans les pages/composants.

| Variable | Rôle |
|---|---|
| `PUBLIC_SITE_NAME` / `PUBLIC_SITE_URL` | Identité & canonique |
| `PUBLIC_CTA_LABEL` | CTA primaire (§17.2) |
| `PUBLIC_RDV_URL` | Agenda de prise de RDV |
| `WEBHOOK_N8N` | Webhook formulaire (secret) |
| `PUBLIC_TURNSTILE_SITE_KEY` / `TURNSTILE_SECRET_KEY` | Anti-spam |
| `PUBLIC_PLAUSIBLE_DOMAIN` | Analytics cookieless |
| `TINA_CLIENT_ID` / `TINA_TOKEN` | Tina Cloud (secrets) |

## Structure

```
src/
├─ config/site.ts        Config centrale (variables §0)
├─ content/              Contenu versionné (landings, pages) — éditable via Tina
├─ content.config.ts     Schémas des collections (contraintes SEO)
├─ layouts/              Layout de base
├─ pages/                Routes du site (§7)
└─ styles/global.css     Design tokens DA §8B
tina/config.ts           Config CMS git-based
```

## Avancement (lots §16)

- [x] **Lot 1 ①** Init Astro + Tailwind + intégrations + CMS
- [x] **Lot 1 ②** Design system & composants (Variante A)
- [x] **Lot 1 ③** Pages (Accueil, Offres, Comment ça marche, Contact, 7 landings, légal)
- [ ] Lot 1 ④ Conversion (formulaire → n8n, agenda, analytics)
- [ ] Lot 1 ⑤ SEO technique (meta centralisées, JSON-LD, robots/canonical)
- [ ] Lot 1 ⑥ Recette (Lighthouse, a11y, règles §6, test clarté)
