import { defineConfig } from 'tinacms';

/**
 * TinaCMS — CMS git-based (CdC §12). Édition visuelle → commit Git → re-build.
 * L'admin est généré dans public/admin (accessible sur /admin/).
 * Decap reste le repli zéro-coût (config alternative non activée ici).
 */

const branch =
  process.env.TINA_BRANCH ||
  process.env.GITHUB_BRANCH ||
  process.env.HEAD ||
  'main';

export default defineConfig({
  branch,
  clientId: process.env.TINA_CLIENT_ID ?? '',
  token: process.env.TINA_TOKEN ?? '',
  build: {
    outputFolder: 'admin',
    publicFolder: 'public',
  },
  media: {
    tina: {
      mediaRoot: 'uploads',
      publicFolder: 'public',
    },
  },
  schema: {
    collections: [
      {
        name: 'landing',
        label: 'Landing pages SEO',
        path: 'src/content/landings',
        format: 'md',
        fields: [
          { type: 'string', name: 'title', label: 'Titre SEO (<60)', required: true },
          { type: 'string', name: 'description', label: 'Meta description (<155)', ui: { component: 'textarea' }, required: true },
          { type: 'string', name: 'h1', label: 'H1 (promesse)', required: true },
          { type: 'string', name: 'intent', label: 'Intention / mot-clé', required: true },
          {
            type: 'string',
            name: 'relatesTo',
            label: 'Renvoie vers',
            options: ['pilier1', 'pilier2', 'pilier3', 'automatisation', 'accueil'],
            required: true,
          },
          { type: 'string', name: 'cta', label: 'Libellé CTA (optionnel)' },
          { type: 'string', name: 'ogImage', label: 'Image OG (optionnel)' },
          { type: 'boolean', name: 'noindex', label: 'noindex' },
          { type: 'boolean', name: 'draft', label: 'Brouillon' },
          { type: 'rich-text', name: 'body', label: 'Contenu', isBody: true },
        ],
      },
      {
        name: 'page',
        label: 'Pages',
        path: 'src/content/pages',
        format: 'md',
        fields: [
          { type: 'string', name: 'title', label: 'Titre SEO (<60)', required: true },
          { type: 'string', name: 'description', label: 'Meta description (<155)', ui: { component: 'textarea' }, required: true },
          { type: 'string', name: 'ogImage', label: 'Image OG (optionnel)' },
          { type: 'boolean', name: 'noindex', label: 'noindex' },
          { type: 'rich-text', name: 'body', label: 'Contenu', isBody: true },
        ],
      },
    ],
  },
});
