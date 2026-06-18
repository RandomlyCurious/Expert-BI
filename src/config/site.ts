/**
 * Configuration centrale du site.
 * Toutes les valeurs {{...}} du CdC §0 sont lues ici depuis l'environnement,
 * JAMAIS écrites en dur dans les pages/composants (convention CdC §12).
 */

const env = import.meta.env;

export const site = {
  /** Nom de l'activité — §17.1 (défaut : MASPIE-BI). */
  name: env.PUBLIC_SITE_NAME ?? 'MASPIE-BI',
  /** Domaine canonique — vérifier dispo registrar (§0). */
  url: env.PUBLIC_SITE_URL ?? 'https://expert-data-powerbi.fr',
  /** Contact / destinataire des leads. */
  email: env.PUBLIC_CONTACT_EMAIL ?? 'pierre.masson@maspie.com',
  /** Couverture : 100 % remote, France entière. */
  areaServed: 'France',
  /** Signal local optionnel (§0). */
  city: env.PUBLIC_CITY ?? '',
  /** Voix éditoriale — §17.3 (défaut : nous). */
  voice: (env.PUBLIC_VOICE ?? 'nous') as 'je' | 'nous',
} as const;

/** CTA primaire unique et répété — §10 / §17.2. */
export const cta = {
  label: env.PUBLIC_CTA_LABEL ?? 'Réserver un diagnostic',
  /** Ancre interne vers le formulaire/agenda. */
  href: '/contact/',
} as const;

/** Conversion — §10. */
export const conversion = {
  /** Webhook recevant les soumissions de formulaire. */
  webhookN8n: env.WEBHOOK_N8N ?? '',
  /** Agenda de prise de RDV (Calendly / cal.com). */
  rdvUrl: env.PUBLIC_RDV_URL ?? '',
  /** Cloudflare Turnstile (anti-spam). */
  turnstileSiteKey: env.PUBLIC_TURNSTILE_SITE_KEY ?? '',
} as const;

/** Analytics cookieless (Plausible) — §12. */
export const analytics = {
  plausibleDomain: env.PUBLIC_PLAUSIBLE_DOMAIN ?? '',
} as const;

/**
 * Prix affichés — centralisés.
 * RAPPELS §6 : jamais de nombre de jours/mois ; pas de prix sur Dev (au-delà
 * du « à partir de ») ni sur l'Automatisation.
 */
export const offers = {
  tempsPartiel: {
    priceFrom: '2 200 €',
    priceSuffix: '/mois',
  },
  dev: {
    priceFrom: '700 €',
    priceNote: '+ sur devis', // §17.4
  },
  assistance: {
    packs: [
      { hours: 5, price: '600 €' },
      { hours: 10, price: '1 100 €' },
      { hours: 20, price: '2 000 €' },
    ],
  },
} as const;

/**
 * Bande de références (CdC §11 / PROMPT).
 * NE PAS inventer de logos : wording exact en variable tant que non validé.
 */
export const references = {
  title: env.PUBLIC_REFERENCES_TITLE ?? 'Ils m’ont fait confiance',
  /** Laissé vide tant que la liste n'est pas validée (pas d'invention). */
  logos: [] as { name: string; src?: string }[],
} as const;

/** Mentions de conformité — §13. */
export const legal = {
  microsoftDisclaimer:
    'Power BI® est une marque déposée de Microsoft Corporation. Site non affilié à Microsoft.',
} as const;
