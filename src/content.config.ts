import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * Collections de contenu (éditables via TinaCMS, versionnées dans Git).
 * Le copy (Lot 2 — agent SEO) viendra remplir ces fichiers markdown ;
 * le schéma garantit la cohérence SEO (title < 60, description < 155).
 */

const seoFields = {
  title: z.string().max(70),
  description: z.string().max(160),
  ogImage: z.string().optional(),
  noindex: z.boolean().default(false),
};

/** Landing pages par intention de recherche (CdC §9). */
const landings = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/landings' }),
  schema: z.object({
    ...seoFields,
    h1: z.string(),
    intent: z.string(), // intention / mot-clé principal
    relatesTo: z.enum(['pilier1', 'pilier2', 'pilier3', 'automatisation', 'accueil']),
    cta: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

/** Pages éditoriales génériques (réassurance, légal, etc.). */
const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    ...seoFields,
  }),
});

export const collections = { landings, pages };
