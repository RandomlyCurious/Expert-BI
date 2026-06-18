# Cahier des charges v2 — Site vitrine [NOM DE L'ACTIVITÉ]

> Aligné sur le brief BA du jour. **Remplace la v1.** Deux priorités transverses imposées par le commanditaire : **le SEO (point d'or)** et **la clarté du site**. Les règles de présentation des §6 (et leurs interdits) sont **NON NÉGOCIABLES** et priment sur toute convention de mise en page.
>
> Document destiné à deux agents : un **agent code** (build Astro) et un **agent SEO/contenu** (mots-clés, copy, SEO technique). Chaque section indique l'agent concerné.

---

## 0. Variables de projet (à renseigner / remplacer partout)

| Variable | Valeur | Note |
|---|---|---|
| `MASPIE-BI` | Nom de l'activité (point à finaliser) |
| `expert-data-powerbi.fr` | Domaine — vérifier dispo registrar |
| `Nous` | Recommandation §17 ; le copy s'adresse surtout à « vous », ce qui minimise l'impact |
| `{{CTA}}` | « Réserver un diagnostic » (recommandé) | Libellé du CTA primaire — à trancher §17 |
| `{{RDV_URL}}` | *à renseigner* | Agenda de prise de RDV (Calendly ou équivalent, p. ex. cal.com) |
| `{{WEBHOOK_N8N}}` | *à renseigner* | Webhook recevant les soumissions de formulaire |
| `pierre.masson@maspie.com` | Contact / destinataire des leads |
| `{{VILLE}}` | *optionnel* | Signal local léger (intervention 100 % remote France) |

---

## 1. Contexte & objectifs

Prestation BI en freelance, **100 % à distance, France entière**. Positionnement : **« un data analyst à temps partiel, sans le CDI »** — prise en charge *continue* de la BI (structuration, administration, évolution des rapports) pour des PME/ETI non-tech.

Nature : **site vitrine de conversion** — pas d'e-commerce, pas de paiement en ligne, pas de blog. Mission : faire comprendre l'offre en **moins de 30 secondes**, qualifier le visiteur, **déclencher une prise de contact**.

**Conversion primaire :** une prise de contact qualifiée (formulaire + prise de RDV).

### KPIs
- Performance/SEO : Lighthouse ≥ 95 (4 axes) ; LCP < 2,0 s ; CLS < 0,1 ; INP < 200 ms (mobile). Audit SEO technique sans erreur.
- Clarté : un visiteur non-tech identifie **en < 30 s** laquelle des 3 offres est pour lui (testable, voir §14).
- Conversion : taux de clic vers le CTA primaire mesuré ; cible à fixer après le 1er mois.

---

## 2. Les deux priorités transverses (à respecter partout)

**SEO — le point d'or.** Sans blog, le SEO repose sur trois leviers : (a) les pages de conversion elles-mêmes parfaitement optimisées ; (b) un jeu de **landing pages par intention** (par situation, cas d'usage, mot-clé commercial — voir §9) qui font pleinement partie d'un site vitrine ; (c) une **excellence technique** (perf, données structurées, local). Chaque page = une intention de recherche claire.

**Clarté.** Le site doit être limpide pour une cible non-tech : une promesse dominante, des offres qu'on choisit **par sa situation** (pas par comparaison de prix), zéro jargon, un seul CTA primaire répété. La clarté est aussi une contrainte de design (voir §6 et §14).

---

## 3. Cibles & personas (agent SEO/contenu)

**Acheteur principal : DAF et responsable des opérations** de PME/ETI non-tech. Deux situations de besoin à adresser :
- Besoin data réel mais **< 1 ETP** (trop pour rien, pas assez pour un plein temps) → offre récurrente (Pilier 1).
- Entreprise qui **reporte vers un grand compte** (reporting critique, enjeu contractuel) → **cœur de cible** (Pilier 1, angle « transfert de risque »).

**Acheteur secondaire (offre Assistance) :** équipe disposant déjà d'utilisateurs Power BI/Excel non-experts, qui **garde la main** mais veut être débloquée vite et monter en compétence.

> Le DAF achète **coût maîtrisé / prévisibilité / risque évité**. L'ops achète **fiabilité / temps gagné**. Le copy doit parler aux deux, sans jargon, bénéfices avant fonctionnalités.

---

## 4. Positionnement & message (agent SEO/contenu)

**Promesse centrale :** un partenaire unique qui **structure, supervise et fait évoluer votre BI dans la durée** — là où le marché vend des projets ponctuels, de la régie à piloter, ou un CDI à recruter.

Angles de valeur pour le copy :
- **« Sans le CDI »** — moins cher qu'un recrutement chargé, sans risque RH, résiliable, en opex.
- **« Transfert de risque »** (surtout reporting grand compte) — votre reporting critique ne vous mettra jamais en défaut.
- **« Qui tient le clavier »** — distinguer nettement **Assistance** (votre équipe pilote, on l'appuie) de **Temps partiel** (on prend en charge).

Tonalité : pro, claire, concrète, **sans jargon technique**. Le copy s'adresse à « vous » (le client) ; n'employer « je »/« nous » que là où c'est inévitable, selon `{{VOIX}}`.

---

## 5. L'offre — 3 piliers + 1 extension (agent SEO/contenu)

**Pilier 1 — HÉROS — « Data Analyst à temps partiel »** *(récurrent, abonnement mensuel)*
Prend en charge en continu l'industrialisation des rapports, l'administration du service, le développement et l'évolution. Stack : Power BI / Fabric / Power Automate.
- Prix affiché : **à partir de 2 200 €/mois**.
- **Règle stricte :** forfait mensuel **à périmètre de responsabilité**, **jamais vendu en jours** — ne **jamais** afficher de nombre de jours/mois. Le copy vend l'outcome (« votre BI prise en charge : fiable, entretenue, qui évolue »), pas du temps.

**Pilier 2 — « Développement BI & ETL sur mesure »** *(projet ponctuel)*
Rapports et pipelines ETL Fabric sur mesure.
- Prix affiché : **à partir de 700 € + sur devis** *(voir contradiction du brief, §17)*.

**Pilier 3 — « Assistance »** *(packs d'heures, ponctuel)*
Débogage à la demande, déblocage DAX/Excel, accompagnement publication & administration, montée en compétence. Pour une équipe qui **garde la main**.
- Prix affichés : **5 h — 600 € · 10 h — 1 100 € · 20 h — 2 000 €**.

**Extension (PAS un 4e pilier) — « Automatisation & IA »**
Prolongement *une fois les données structurées* : alertes pilotées par KPI, automatisation de la collecte, diffusion automatisée du reporting, Q&A en langage naturel, outils métier. Stack : Power Automate / n8n + IA.
- **Pas de prix** (sur devis).

---

## 6. Règles de présentation — NON NÉGOCIABLES (agent code + agent SEO/contenu)

Ces règles priment sur toute convention de mise en page. Toute entorse doit être validée.

1. **Pas de tableau de prix à 3 colonnes** pour les piliers. Ce ne sont pas 3 paliers d'un même produit, mais **3 modes d'engagement** → **3 blocs/sections distincts**.
2. Chaque pilier est introduit par un **« C'est pour vous si… »** : le visiteur se sélectionne par sa **situation**, pas par comparaison de prix.
3. Le **Pilier 1** reçoit le **poids visuel dominant** : bloc principal, en premier, plus détaillé. Dev et Assistance en secondaire, plus légers.
4. **Ne pas** placer le pack 20 h (2 000 €) visuellement adjacent au temps partiel (2 200 €/mois) — chiffres proches, engagements opposés → éviter la comparaison cannibalisante.
5. L'**automatisation** est une **section subordonnée, APRÈS les 3 offres** (« Une fois vos données en ordre, on va plus loin »), 2-3 exemples concrets en bénéfices, **sans prix**, **jamais** au même niveau visuel que les piliers.

Interdits explicites (rappel §9 du brief) : pas de vente/paiement en ligne ; pas de jours/mois pour le temps partiel ; pas de tableau comparatif 3 colonnes ; automatisation jamais en 4e pilier ; pas de prix sur le dev (au-delà du « à partir de ») ni sur l'automatisation.

---

## 7. Arborescence (agent code + agent SEO/contenu)

| Page | URL | Rôle |
|---|---|---|
| Accueil | `/` | Promesse + pour qui + aperçu des 3 offres + extension auto + réassurance + CTA |
| Offres / Services | `/offres/` | Détail des 3 piliers (selon §6) + section automatisation subordonnée |
| Comment ça marche | `/comment-ca-marche/` | Parcours Diagnostic → structuration → abonnement (rassure sur la méthode) |
| Contact / Prise de RDV | `/contact/` | Formulaire court + agenda |
| **Landing SEO** (voir §9) | `/data-analyst-temps-partiel/`, `/reporting-grand-compte/`, `/externaliser-power-bi/`, `/assistance-power-bi/`, … | Pages par intention de recherche (cœur du SEO sans blog) |
| *(Plus tard)* Cas clients | `/cas-clients/` | Preuves |
| *(Plus tard)* FAQ | `/faq/` | Réassurance + SEO (schema FAQ) |
| Légal | `/mentions-legales/`, `/confidentialite/` | RGPD |

Navigation : header (Offres, Comment ça marche, Contact + CTA primaire) ; footer (liens, légal, mention « 100 % remote, France entière », disclaimer Microsoft).

---

## 8. Spécifications par page — wireframe + copy directionnel + CTA (agent code + contenu)

> Format : objectif · sections dans l'ordre · copy directionnel (jargon-free, « vous ») · CTA · intention SEO.

### Accueil `/`
- **Objectif :** comprendre l'offre en < 30 s, orienter vers la bonne offre, déclencher le contact.
- **Sections (ordre) :**
  1. **Hero** — promesse dominante + sous-titre + CTA primaire. Copy directionnel : *« Un data analyst à temps partiel, sans le CDI. Votre Business Intelligence prise en charge : fiable, entretenue, qui évolue. »*
  2. **Pour qui** — les deux situations (besoin < 1 ETP ; reporting critique vers un grand compte).
  3. **Aperçu des 3 offres** — 3 blocs distincts (PAS un tableau 3 colonnes, règle §6.1), Pilier 1 dominant et premier ; chacun avec son **« C'est pour vous si… »** et un lien vers son détail.
  4. **Extension automatisation** — bandeau subordonné « Une fois vos données en ordre, on va plus loin », sans prix (§6.5).
  5. **Réassurance** — expertise, méthode, engagements de service (§11).
  6. **CTA final** (primaire, répété).
- **CTA :** `{{CTA}}`.
- **SEO :** intention principale = `data analyst externalisé` / `data analyst à temps partagé` ; secondaire = `externaliser power bi`.

### Offres / Services `/offres/`
- **Objectif :** détailler les 3 modes d'engagement et laisser le visiteur se reconnaître.
- **Structure imposée (§6) :**
  - **Bloc 1 — Data Analyst à temps partiel (dominant, en premier, détaillé).** « C'est pour vous si… *vous avez un vrai besoin data sans de quoi occuper un temps plein, ou votre reporting engage votre entreprise vis-à-vis d'un grand compte et ne doit jamais faillir.* » Bénéfices (prise en charge continue, fiabilité, prévisibilité du coût, sans recrutement). Prix : à partir de 2 200 €/mois. **Aucun jour/mois affiché.**
  - **Bloc 2 — Développement BI & ETL sur mesure (secondaire, plus léger).** « C'est pour vous si… *vous avez un besoin précis et ponctuel : un rapport à créer, un flux de données à industrialiser.* » Prix : à partir de 700 € + sur devis.
  - **Bloc 3 — Assistance (secondaire, plus léger).** « C'est pour vous si… *votre équipe utilise déjà Power BI/Excel, garde la main, mais veut être débloquée vite et monter en compétence.* » Packs 5 h / 10 h / 20 h. **Ne pas placer le pack 20 h adjacent au prix du temps partiel (§6.4)** : séparer par le bloc Dev ou un séparateur visuel net.
  - **Section subordonnée — Automatisation & IA.** Après les 3 blocs, titre « Une fois vos données en ordre, on va plus loin », 2-3 exemples en bénéfices (alertes sur vos KPI, diffusion automatique de vos rapports, posez vos questions en langage naturel), **sans prix**, niveau visuel inférieur aux piliers.
- **SEO :** chaque bloc cible son intention (voir §9) ; cette page relaie vers les landing pages dédiées.

### Comment ça marche `/comment-ca-marche/`
- **Objectif :** rassurer une cible non-tech sur la méthode.
- **Parcours en 3 étapes :** **Diagnostic** (payant, première marche dérisquée — on comprend votre situation et on chiffre) → **Structuration** (on remet vos données et vos rapports en ordre) → **Abonnement** (on prend en charge dans la durée). Étapes simples, sans jargon.
- **CTA :** `{{CTA}}`.
- **SEO :** `diagnostic data`, `structurer son reporting`, `comment externaliser sa bi`.

### Contact / Prise de RDV `/contact/`
- **Objectif :** convertir.
- **Formulaire court :** nom, société, **fonction**, besoin en 1 phrase → `{{WEBHOOK_N8N}}` ; honeypot + Turnstile. + **agenda** `{{RDV_URL}}`.
- **CTA :** `{{CTA}}`.

### Landing pages SEO (voir §9 pour la liste et les intentions)
- **Objectif :** capter une intention de recherche précise et convertir vers le contact.
- **Gabarit :** H1 = la requête reformulée en promesse · le problème · la réponse (l'offre concernée) · réassurance · **CTA primaire**. Une seule intention par page. Maillage vers l'offre et l'accueil.

---

## 9. SEO — le point d'or, sans blog (agent SEO/contenu + agent code)

### Stratégie
Pas de flux éditorial. Le SEO s'appuie sur **les pages de conversion optimisées** + **des landing pages par intention** + **l'excellence technique**. Chaque page porte **une** intention principale.

### Landing pages par intention (font partie du vitrine, pas un blog)
| Landing | URL | Intention / mots-clés | Renvoie vers |
|---|---|---|---|
| Data analyst à temps partiel | `/data-analyst-temps-partiel/` | data analyst externalisé · data analyst à temps partagé · sans recruter | Pilier 1 |
| Reporting grand compte *(cœur de cible)* | `/reporting-grand-compte/` | fiabiliser reporting grand compte · reporting fournisseur grande distribution · externaliser reporting client · transfert de risque reporting | Pilier 1 |
| Externaliser Power BI | `/externaliser-power-bi/` | externaliser power bi · power bi en abonnement · administration / maintenance / TMA power bi | Pilier 1 |
| Alternative au recrutement | `/alternative-recrutement-data-analyst/` | alternative recrutement data analyst · combien coûte un data analyst | Accueil / Pilier 1 |
| Développement & ETL Fabric | `/developpement-power-bi-fabric/` | développement power bi · consultant power bi · etl fabric · pipeline de données | Pilier 2 |
| Assistance Power BI / Excel | `/assistance-power-bi/` | aide power bi · débogage dax · assistance excel · accompagnement power bi | Pilier 3 |
| Automatisation du reporting | `/automatisation-reporting/` | automatiser son reporting · alertes power bi · power automate / n8n | Section auto |

### SEO technique (agent code)
- SSG Astro → budget Core Web Vitals du §1 respecté (la perf **est** un facteur SEO).
- `sitemap.xml` + `robots.txt` cohérents ; URLs propres ; canonical ; pas de page orpheline.
- Métadonnées par page via composant SEO centralisé : `<title>` unique (< 60 car.), meta description (< 155 car.), Open Graph + Twitter Card.
- **Données structurées JSON-LD :** `Organization` + `ProfessionalService` (`areaServed: France`), `Service` sur chaque pilier, `FAQPage` (page FAQ et blocs FAQ), `BreadcrumbList`, `Person` si `{{VOIX}}` = je.
- Maillage interne : accueil → offres → landing pages, et landing → offre/contact.

### Local & entité
- Fiche **Google Business Profile** (« 100 % remote, France entière » ; ville `{{VILLE}}` optionnelle pour un signal local + un backlink). NAP cohérent partout.

### Limite assumée
Sans blog, le site ne captera pas les requêtes **informationnelles** (top-funnel). Si tu veux les viser plus tard, prévoir une section **« Ressources / Guides »** (hors périmètre actuel).

---

## 10. Conversion & captation (agent code)

- **CTA primaire unique et répété :** `{{CTA}}` (recommandé : « Réserver un diagnostic », cohérent avec le diagnostic payant comme première marche dérisquée — voir §17).
- **Point d'entrée valorisé :** un **diagnostic initial payant** (pas gratuit), présenté comme la première marche dérisquée vers la relation.
- **Formulaire court** → `{{WEBHOOK_N8N}}` (payload JSON : nom, société, fonction, besoin, page source). Validation client, honeypot + Turnstile, messages succès/erreur. + **agenda** `{{RDV_URL}}`.
- Événements analytics : clics CTA, soumission formulaire, vues pages offre/landing.

---

## 11. Réassurance (agent SEO/contenu)

À placer avant d'éventuels cas clients : **expertise** (années d'expérience, multi-secteurs, stack maîtrisée Power BI/Fabric/Power Automate) ; **méthode claire et documentée** (rassure le non-tech — renvoie à « Comment ça marche ») ; **engagements de service** (réactivité, suivi — à formaliser en SLA par offre ultérieurement).

---

## 12. Stack & contraintes techniques (agent code)

- **Framework :** Astro (dernière version stable) + Tailwind CSS. Rendu **statique (SSG)**. Îlots interactifs seulement où nécessaire (formulaire, embed agenda).
- **Administration de contenu :** **CMS git-based** — **TinaCMS par défaut** (édition visuelle, écrit dans le dépôt), **Decap** en alternative zéro-coût. Le contenu reste versionné dans Git, pas de base ni de serveur. *(Pas de blog, mais le CMS sert à éditer les pages, créer des landing pages, ajouter cas clients et FAQ sans toucher au code.)* Workflow : édition dans l'admin → commit auto → re-build → mise en ligne (< 2 min).
- **JS minimal** ; **images** via `<Image>` Astro (AVIF/WebP, lazy, dimensions explicites) ; **polices** auto-hébergées, `font-display: swap`, 2 graisses max.
- **Hébergement :** plateforme statique (Cloudflare Pages / Netlify), build sur push Git.
- **Analytics :** privacy-friendly et léger (Plausible / Matomo, cookieless de préférence pour alléger le consentement).
- **Accessibilité :** WCAG 2.1 AA. **Responsive** mobile-first.
- **Repo :** structure claire, README, variables d'env pour les `{{...}}`, aucun secret en dur.

---

## 13. Conformité (agent code)

- RGPD : mentions légales, politique de confidentialité, consentement si cookies non exemptés (privilégier l'analytics cookieless). Pas de paiement ni de compte en ligne.
- Footer : **« Power BI® est une marque déposée de Microsoft Corporation. Site non affilié à Microsoft. »** Ne revendiquer aucune certification/partenariat non détenu.

---

## 14. Clarté — exigences & test (agent code + contenu)

- **Hiérarchie du message :** une seule promesse dominante au-dessus de la ligne de flottaison ; Pilier 1 dominant partout.
- **Sélection par situation :** chaque offre via « C'est pour vous si… » ; jamais par comparaison de prix.
- **Zéro jargon :** bénéfices avant fonctionnalités ; pas de terme technique non expliqué dans les titres et accroches.
- **Séparation des modes d'engagement :** 3 blocs nettement distincts ; 20 h (2 000 €) non adjacent au temps partiel (2 200 €/mois).
- **Un seul CTA primaire**, répété, visible sur chaque page.
- **Scannabilité :** sections courtes, sous-titres clairs, pas de pavé.
- **Test d'acceptation clarté :** un testeur non-tech doit, en **< 30 s** sur l'accueil, dire **laquelle des 3 offres** le concerne et **quoi faire ensuite**.

---

## 15. Critères d'acceptation (Definition of Done)

- [ ] Toutes les pages du §7 livrées, responsive, accessibles (WCAG 2.1 AA).
- [ ] Lighthouse ≥ 95 (4 axes) sur mobile, pages clés.
- [ ] `sitemap.xml`, `robots.txt`, métadonnées et JSON-LD valides (Rich Results / validateur schema).
- [ ] **Règles §6 respectées** : pas de tableau 3 colonnes des piliers ; « C'est pour vous si… » sur chaque pilier ; Pilier 1 dominant ; 20 h non adjacent au temps partiel ; automatisation subordonnée, sans prix, niveau visuel inférieur.
- [ ] **Aucun jour/mois affiché** pour le temps partiel.
- [ ] Landing pages SEO (§9) en ligne, une intention par page, maillées.
- [ ] Formulaire → `{{WEBHOOK_N8N}}` + anti-spam ; agenda `{{RDV_URL}}` opérationnel ; CTA primaire unique et répété.
- [ ] CMS git-based (Tina/Decap) : éditer une page ou créer une landing **sans toucher au code**, mise en ligne < 2 min, contenu versionné dans Git.
- [ ] RGPD/mentions/disclaimer Microsoft présents. Aucun secret en dur ; README de build.
- [ ] **Test clarté < 30 s** (§14) validé par un relecteur non-tech.

---

## 16. Découpage en lots

**Lot 1 — Build (agent code)**
1. Init Astro + Tailwind + intégrations (sitemap, image, content collections) + CMS git-based (Tina/Decap, admin `/admin`).
2. Design system & composants (hero, bloc offre « C'est pour vous si… », bandeau automatisation subordonné, étapes méthode, FAQ accordéon, bandeau CTA).
3. Pages : Accueil, Offres (structure §6/§8), Comment ça marche, Contact, gabarit Landing SEO, légal.
4. Conversion : formulaire → n8n, agenda, analytics.
5. SEO technique : composant meta, JSON-LD, sitemap/robots, maillage.
6. Recette : Lighthouse, accessibilité, formulaire, **conformité aux règles §6**, **test clarté §14**.

**Lot 2 — SEO & contenu (agent SEO/contenu)**
1. Plan de mots-clés (intention → page), priorisation ; finalisation des landing pages (§9).
2. Copy des pages et des piliers (ton §4, règles §6), « C'est pour vous si… » de chaque pilier.
3. Copy des landing pages par intention (cœur de cible : reporting grand compte).
4. Optimisation on-page (titles, metas, maillage interne, données structurées).
5. Off-site : fiche Google Business Profile, premiers backlinks.

---

## 17. Points à confirmer (décisions ouvertes)

1. **Nom de l'activité** `{{NOM_ACTIVITE}}` + domaine.
2. **Libellé du CTA primaire** — recommandation : **« Réserver un diagnostic »** (cohérent avec le diagnostic payant comme première marche, qualifie l'intention). Alternative plus douce : « Échanger 30 min » (plus de leads, moins qualifiés). À trancher.
3. **Voix éditoriale** `{{VOIX}}` — *je* (authenticité, proximité) vs *nous* (gravité/réassurance, utile pour le cœur de cible « grand compte »). Le copy étant surtout en « vous », l'impact est limité ; recommandation : **nous** si l'enjeu grand compte domine, **je** si l'angle indépendant/proximité prime.
4. **Contradiction prix Dev** — §3 « à partir de 700 € + sur devis » vs §9 « pas de prix sur le dev ». Tranché par défaut sur l'affichage « à partir de 700 € + sur devis ». À confirmer.
5. **SEO sans blog** — résolu via landing pages + technique (§9). Si tu veux capter l'informationnel plus tard, prévoir « Ressources/Guides ».

> Note : par rapport à la v1, sont **retirés du périmètre du site** (conformément au brief) l'escalier à 5 marches, les paliers Essentiel/Pro/Premium, et l'upsell Portail Data (Weweb/Supabase). Ils peuvent rester des évolutions commerciales hors site.
