/**
 * Script de génération du sitemap.xml avec dates lastmod dynamiques
 * basées sur la date de dernière modification des fichiers sources.
 * 
 * Usage: node scripts/generate-sitemap.js
 * Exécuté automatiquement avant le build via "prebuild" dans package.json.
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const DOMAIN = 'https://reparaction-volets.fr';

function getLastMod(filePaths) {
  let latest = new Date(0);
  for (const fp of filePaths) {
    const full = path.resolve(ROOT, fp);
    try {
      const stat = fs.statSync(full);
      if (stat.mtime > latest) latest = stat.mtime;
    } catch { /* file not found, skip */ }
  }
  return latest.toISOString().split('T')[0];
}

// Map: URL path → source files that affect its content
const pages = [
  // Main pages
  { loc: '/', sources: ['src/pages/Index.tsx', 'src/components/HeroSection.tsx', 'src/components/ServicesSection.tsx'], changefreq: 'weekly', priority: '1.0' },
  { loc: '/services/reparation-volets-roulants', sources: ['src/pages/services/ReparationVolets.tsx'], changefreq: 'monthly', priority: '0.9' },
  { loc: '/services/installation-remplacement-volets', sources: ['src/pages/services/InstallationRemplacement.tsx'], changefreq: 'monthly', priority: '0.9' },
  { loc: '/services/vitrerie-remplacement-vitrage', sources: ['src/pages/services/Vitrerie.tsx'], changefreq: 'monthly', priority: '0.9' },
  { loc: '/services/motorisation-domotique', sources: ['src/pages/services/MotorisationDomotique.tsx'], changefreq: 'monthly', priority: '0.9' },
  { loc: '/services/depannage-express', sources: ['src/pages/services/DepannageExpress.tsx'], changefreq: 'monthly', priority: '0.9' },
  
  // Blog
  { loc: '/blog', sources: ['src/pages/Blog.tsx', 'src/data/blogArticles.ts'], changefreq: 'weekly', priority: '0.8' },
  // Blog articles — all driven by blogArticles.ts
  ...[
    'entretien-volets', 'somfy-vs-bubendorff', 'guide-motorisation',
    'prix-reparation-volet-roulant', 'comment-choisir-volet-roulant',
    'volet-roulant-bloque-que-faire', 'double-vitrage-avantages-prix',
    'domotique-volets-tout-savoir', 'isolation-thermique-volets-roulants',
    'aides-financieres-renovation-volets-2026',
    'reparation-volet-paris-15', 'reparation-volet-paris-11-marais',
    'reparation-volet-boulogne-billancourt', 'reparation-volet-saint-denis-93',
    'reparation-volet-versailles-78', 'reparation-volet-creteil-94',
    'choisir-volet-roulant-marais-paris', 'depannage-volet-montmartre-paris-18',
    'motorisation-volet-immeuble-haussmannien', 'isolation-phonique-volets-grands-boulevards',
    'securite-volets-roulants-neuilly-sur-seine',
  ].map(slug => ({
    loc: `/blog/${slug}`,
    sources: ['src/data/blogArticles.ts', 'src/pages/BlogArticle.tsx'],
    changefreq: 'monthly',
    priority: '0.7',
  })),

  // Zones
  { loc: '/zones-intervention', sources: ['src/pages/ZonesIntervention.tsx'], changefreq: 'monthly', priority: '0.8' },
  { loc: '/zones-intervention/paris', sources: ['src/pages/regions/ParisPage.tsx'], changefreq: 'monthly', priority: '0.8' },
  { loc: '/zones-intervention/ile-de-france', sources: ['src/pages/regions/IdFPage.tsx'], changefreq: 'monthly', priority: '0.8' },
  // Paris arrondissements
  ...Array.from({ length: 20 }, (_, i) => ({
    loc: `/zones-intervention/reparation-volet-paris-${i + 1}`,
    sources: ['src/data/zonesPagesData.ts', 'src/pages/zones/ZoneCityRoute.tsx'],
    changefreq: 'monthly',
    priority: '0.7',
  })),
  // Villes IDF
  ...[
    'aubervilliers', 'bagnolet', 'bobigny', 'boulogne-billancourt', 'cergy',
    'corbeil-essonnes', 'courbevoie', 'creteil', 'evry', 'fontenaysous-bois',
    'ivrysur-seine', 'la-defense', 'levallois-perret', 'mantesla-jolie', 'melun',
    'montreuil', 'neuillysur-seine', 'noisyle-sec', 'pantin', 'pontoise',
    'puteaux', 'rambouillet', 'rueil-malmaison', 'saint-cloud', 'saint-denis',
    'saint-germainen-laye', 'saint-mande', 'saint-ouen', 'sevres', 'versailles',
    'villejuif', 'vincennes', 'vitrysur-seine',
  ].map(slug => ({
    loc: `/zones-intervention/reparation-volet-${slug}`,
    sources: ['src/data/zonesPagesData.ts', 'src/pages/zones/ZoneCityRoute.tsx'],
    changefreq: 'monthly',
    priority: '0.7',
  })),

  // Legal pages
  { loc: '/qui-sommes-nous', sources: ['src/pages/AboutUs.tsx'], changefreq: 'monthly', priority: '0.7' },
  { loc: '/mentions-legales', sources: ['src/pages/MentionsLegales.tsx'], changefreq: 'yearly', priority: '0.3' },
  { loc: '/politique-confidentialite', sources: ['src/pages/PolitiqueConfidentialite.tsx'], changefreq: 'yearly', priority: '0.3' },
  { loc: '/cgv', sources: ['src/pages/CGV.tsx'], changefreq: 'yearly', priority: '0.3' },
];

function generateSitemap() {
  const urls = pages.map(p => {
    const lastmod = getLastMod(p.sources);
    return `  <url><loc>${DOMAIN}${p.loc}</loc><lastmod>${lastmod}</lastmod><changefreq>${p.changefreq}</changefreq><priority>${p.priority}</priority></url>`;
  });

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>`;

  fs.writeFileSync(path.resolve(ROOT, 'public/sitemap.xml'), xml, 'utf-8');
  console.log(`✅ Sitemap généré avec ${pages.length} URLs et dates lastmod dynamiques.`);
}

generateSitemap();
