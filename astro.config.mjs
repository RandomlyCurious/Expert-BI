// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import partytown from '@astrojs/partytown';
// Tailwind v4 est chargé via PostCSS (postcss.config.mjs) — compatible rolldown-vite.

// L'URL canonique du site vient de l'environnement (jamais en dur ailleurs).
const SITE_URL = process.env.PUBLIC_SITE_URL || 'https://expert-data-powerbi.fr';

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'always',
  integrations: [
    sitemap(),
    // Partytown : décharge l'analytics cookieless hors du thread principal (budget INP).
    partytown({ config: { forward: ['plausible'] } }),
  ],
  image: {
    // Formats modernes par défaut pour le composant <Image>.
    responsiveStyles: true,
  },
});
