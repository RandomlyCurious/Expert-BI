# Livrable 5 — On-page & SEO technique

> Titles < 60 car. · meta descriptions < 155 car. · structure Hn · JSON-LD par page · maillage interne.
> Marque/nom d'activité = `MASPIE-BI` (variable) · domaine `expert-data-powerbi.fr` (variable). Tout reste paramétrable.

---

## 1. Titles & meta descriptions

> Longueurs vérifiées (≈ caractères, espaces compris). « | MASPIE-BI » ≈ 11 car. à intégrer dans le budget des 60 ; certains titles l'omettent pour rester sous la limite.

| Page | `<title>` (< 60) | car. | Meta description (< 155) | car. |
|---|---|---|---|---|
| `/` | Data analyst à temps partiel, sans le CDI \| MASPIE-BI | 53 | Votre Business Intelligence prise en charge : fiable, entretenue, qui évolue. Un data analyst à temps partiel, 100 % à distance en France. | 142 |
| `/offres/` | Nos offres BI : temps partiel, dev, assistance | 47 | Trois façons de prendre en charge votre BI selon votre situation : data analyst à temps partiel, développement sur mesure, assistance Power BI. | 145 |
| `/comment-ca-marche/` | Comment ça marche : diagnostic, structuration, suivi | 53 | Notre méthode en 3 étapes : diagnostic, structuration de vos données, prise en charge continue de votre reporting. Sans jargon. | 130 |
| `/contact/` | Réserver un diagnostic BI \| MASPIE-BI | 38 | Réservez votre diagnostic BI. 100 % à distance, partout en France. Réponse sous 1 jour ouvré. | 94 |
| `/reporting-grand-compte/` | Fiabiliser votre reporting grand compte | 40 | Votre reporting vers vos grands comptes ne doit jamais faillir. Nous le prenons en charge et fiabilisons vos flux critiques. Diagnostic sur mesure. | 149 |
| `/data-analyst-temps-partiel/` | Data analyst à temps partiel & externalisé | 43 | Toute l'expertise d'un data analyst sans le CDI : prise en charge continue de votre BI, budget maîtrisé, sans risque RH. Dès 2 200 €/mois. | 141 |
| `/externaliser-power-bi/` | Externaliser Power BI : admin & maintenance | 44 | Externalisez votre Power BI en abonnement : administration, maintenance et évolution de vos rapports. Plateforme tenue à jour, 100 % remote. | 144 |
| `/alternative-recrutement-data-analyst/` | Alternative au recrutement d'un data analyst | 45 | Plutôt que recruter un data analyst en CDI : l'expertise en continu, sans charges ni risque RH. Budget maîtrisé, résiliable. | 127 |
| `/developpement-power-bi-fabric/` | Développement Power BI & ETL Fabric | 36 | Rapports Power BI et pipelines ETL Fabric sur mesure. Un projet cadré, livré et documenté. À partir de 700 € + sur devis. | 124 |
| `/assistance-power-bi/` | Assistance Power BI & Excel : débogage DAX | 43 | Débloquez votre équipe : débogage DAX, aide Excel, publication et montée en compétence. Packs d'heures, réactivité. | 117 |
| `/automatisation-reporting/` | Automatiser son reporting : alertes & diffusion | 49 | Automatisez votre reporting une fois vos données en ordre : alertes KPI, diffusion automatique, langage naturel. Power Automate & n8n. | 138 |
| `/mentions-legales/` | Mentions légales \| MASPIE-BI | 30 | Mentions légales du site MASPIE-BI. | 36 |
| `/confidentialite/` | Politique de confidentialité \| MASPIE-BI | 42 | Politique de confidentialité et traitement des données personnelles (RGPD). | 76 |

---

## 2. Structure Hn (une seule H1 par page)

**Modèle landing (§8) :**
- `H1` = la requête reformulée en promesse
- `H2` Le problème
- `H2` La réponse (l'offre concernée)
- `H2` Ce que vous y gagnez (`H3` par bénéfice si besoin)
- `H2` Réassurance
- `H2` Réserver un diagnostic (CTA)

**Accueil `/` :**
- `H1` Un data analyst à temps partiel, sans le CDI
- `H2` À qui s'adresse cette offre
- `H2` Trois façons de travailler ensemble → `H3` Data analyst à temps partiel · `H3` Développement BI & ETL · `H3` Assistance
- `H2` Une fois vos données en ordre, on va plus loin *(automatisation, niveau visuel inférieur)*
- `H2` Une expertise BI éprouvée, une méthode claire
- `H2` Mettons vos données au travail *(CTA final)*

**Offres `/offres/` :**
- `H1` Nos offres — trois façons de prendre en charge votre BI
- `H2` Data Analyst à temps partiel *(dominant)* → `H3` C'est pour vous si… · `H3` Ce que nous prenons en charge · `H3` Ce que vous y gagnez
- `H2` Développement BI & ETL sur mesure
- `H2` Assistance Power BI & Excel
- `H2` Une fois vos données en ordre, on va plus loin *(automatisation subordonnée)*

> Garde-fou Hn : ne jamais structurer les 3 piliers en colonnes comparatives ; 3 sections H2 distinctes (§6.1). La H2 automatisation vient **après** les 3 piliers (§6.5).

---

## 3. Données structurées JSON-LD (par page)

**Global (toutes pages, dans le `<head>` via composant SEO centralisé) :**
- `Organization` (ou `ProfessionalService`) — `name`, `url`, `email` = `pierre.masson@maspie.com`, `areaServed: "France"`, `availableChannel` remote, `logo`.
- `WebSite` — `name`, `url`.
- `BreadcrumbList` — sur toutes les pages internes.

**Par page :**
| Page | Schémas JSON-LD recommandés |
|---|---|
| `/` | `Organization` + `ProfessionalService` (areaServed: France) + `WebSite` |
| `/offres/` | `Service` (×3, un par pilier) reliés au provider ; `BreadcrumbList` |
| `/reporting-grand-compte/` | `Service` (name: « Fiabilisation du reporting grand compte ») + `BreadcrumbList` |
| `/data-analyst-temps-partiel/` | `Service` (offers: priceCurrency EUR, price « à partir de 2200 », `unitText` mois — **sans nombre de jours**) + `BreadcrumbList` |
| `/externaliser-power-bi/` | `Service` + `BreadcrumbList` |
| `/developpement-power-bi-fabric/` | `Service` (offers: à partir de 700 €) + `BreadcrumbList` |
| `/assistance-power-bi/` | `Service` + `OfferCatalog` (packs 5h/10h/20h) + `BreadcrumbList` |
| `/automatisation-reporting/` | `Service` (**sans `offers`/prix** — §6.5) + `BreadcrumbList` |
| `/comment-ca-marche/` | `HowTo` (3 étapes) ou `Service` + `BreadcrumbList` |
| `/contact/` | `ContactPage` + `BreadcrumbList` |
| *(futur)* `/faq/` | `FAQPage` |

> Si voix finale = « je » → ajouter `Person` lié au provider (CdC §9). Voix retenue = **nous** → on s'en tient à `Organization`/`ProfessionalService` (Person optionnel si Pierre est mis en avant comme fondateur).
> Ne déclarer aucune `aggregateRating`/avis non réels ; aucun `Microsoft`/partenariat dans les données structurées.

---

## 4. Plan de maillage interne

**Principe (CdC §9) :** Accueil → Offres → Landing pages ; et chaque Landing → Offre concernée + Contact. Pas de page orpheline.

```
Accueil /
 ├─ → /offres/ (aperçu des 3 blocs)
 ├─ → /data-analyst-temps-partiel/
 ├─ → /reporting-grand-compte/        (mise en avant cœur de cible)
 ├─ → /comment-ca-marche/
 └─ → /contact/ (CTA répété)

/offres/
 ├─ Bloc 1 → /data-analyst-temps-partiel/ , /externaliser-power-bi/ , /reporting-grand-compte/
 ├─ Bloc 2 → /developpement-power-bi-fabric/
 ├─ Bloc 3 → /assistance-power-bi/
 └─ Section auto → /automatisation-reporting/

Landings (Pilier 1) ─ maillage croisé :
 /reporting-grand-compte/ ↔ /data-analyst-temps-partiel/ ↔ /externaliser-power-bi/ ↔ /alternative-recrutement-data-analyst/
 chacune → /offres/ + /contact/

/developpement-power-bi-fabric/ → /externaliser-power-bi/ , /offres/ , /contact/
/assistance-power-bi/ → /offres/ , /comment-ca-marche/ , /contact/
/automatisation-reporting/ → /offres/ (section auto) , /data-analyst-temps-partiel/ , /contact/
```

**Ancres recommandées (varier, descriptives) :** « data analyst à temps partiel », « fiabiliser votre reporting grand compte », « externaliser Power BI », « réserver un diagnostic ». Éviter « cliquez ici ».

---

## 5. Technique (rappel pour l'agent code)
- `sitemap.xml` + `robots.txt` cohérents ; URLs propres en minuscules avec trailing slash ; `canonical` auto par page.
- Open Graph + Twitter Card par page (réutiliser title/description ci-dessus + image OG générique « tableau de bord premium »).
- Core Web Vitals : LCP < 2 s, CLS < 0,1, INP < 200 ms (la perf est un facteur SEO).
- Footer global : disclaimer « Power BI® est une marque déposée de Microsoft Corporation. Site non affilié à Microsoft. » + « 100 % remote, France entière ».
