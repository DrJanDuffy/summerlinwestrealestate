import { NextResponse } from 'next/server';

/**
 * Comprehensive Sitemap Index for Google SEO
 * Includes all pages with proper priorities and change frequencies
 */

const baseUrl = 'https://www.summerlinwestrealestate.com';

// High priority pages (priority 1.0)
const highPriorityPages = [
  { path: '', priority: '1.0', changefreq: 'daily' },
];

// Important pages (priority 0.9)
const importantPages = [
  { path: '/properties', priority: '0.9', changefreq: 'daily' },
  { path: '/communities', priority: '0.9', changefreq: 'weekly' },
  { path: '/service-area', priority: '0.9', changefreq: 'weekly' },
  { path: '/about', priority: '0.9', changefreq: 'monthly' },
  { path: '/contact', priority: '0.9', changefreq: 'monthly' },
];

// Subdivision pages (priority 0.9)
const subdivisionPages = [
  'paradiso', 'palmilla', 'estancia', 'talaverde', 'casa-rosa', 'san-marcos',
  'sonesta', 'barrington', 'monterossa', 'kingwood', 'ashton-park', 'bella-vista',
  'hillstone', 'portofino', 'encanto', 'somerset', 'summerfield', 'vista-verde',
  'talega', 'canterra', 'capri', 'cara-vella'
];

// Community pages (priority 0.9)
const communityPages = [
  'the-vistas', 'stonebridge', 'redpoint', 'reverence', 'the-cliffs', 'red-rock'
];

// Secondary pages (priority 0.8)
const secondaryPages = [
  { path: '/market-reports', priority: '0.8', changefreq: 'weekly' },
  { path: '/team', priority: '0.8', changefreq: 'monthly' },
  { path: '/testimonials', priority: '0.8', changefreq: 'monthly' },
  { path: '/press', priority: '0.8', changefreq: 'monthly' },
  { path: '/home-values', priority: '0.8', changefreq: 'weekly' },
  { path: '/current-listing', priority: '0.8', changefreq: 'daily' },
  { path: '/new-homes-summerlin', priority: '0.8', changefreq: 'weekly' },
  { path: '/downtown-summerlin', priority: '0.8', changefreq: 'weekly' },
  { path: '/the-vistas', priority: '0.8', changefreq: 'weekly' },
  { path: '/vistas-listing', priority: '0.8', changefreq: 'daily' },
  { path: '/compare', priority: '0.8', changefreq: 'weekly' },
  { path: '/sold', priority: '0.8', changefreq: 'daily' },
  { path: '/market', priority: '0.8', changefreq: 'weekly' },
  { path: '/market-insights', priority: '0.8', changefreq: 'weekly' },
  { path: '/maps', priority: '0.8', changefreq: 'monthly' },
  { path: '/faq', priority: '0.8', changefreq: 'monthly' },
  { path: '/local-seo', priority: '0.8', changefreq: 'monthly' },
];

// Hyperlocal pages (priority 0.8)
const schoolPages = [
  'red-rock-elementary', 'sig-rogich-middle', 'palo-verde-high', 'faith-lutheran'
];

const zipCodePages = [
  '89135', '89134', '89144'
];

const streetPages = [
  'sky-vista-drive', 'desert-foothills-drive', 'town-center-drive', 'hualapai-way'
];

// Market report pages (priority 0.7)
const marketReportPages = [
  'paradiso', 'palmilla'
];

// Blog pages (priority 0.7)
const blogPages = [
  'summerlin-west-market-update-2024',
  'luxury-homes-the-vistas-guide',
  'red-rock-canyon-living',
  'summerlin-west-schools-guide',
];

// Low priority pages (priority 0.5)
const lowPriorityPages = [
  { path: '/google-places', priority: '0.5', changefreq: 'monthly' },
  { path: '/hidden-home-equity-tax', priority: '0.5', changefreq: 'monthly' },
  { path: '/linear-test', priority: '0.5', changefreq: 'monthly' },
  { path: '/realscout-test', priority: '0.5', changefreq: 'monthly' },
  { path: '/test-tailwind', priority: '0.5', changefreq: 'monthly' },
  { path: '/v0-test', priority: '0.5', changefreq: 'monthly' },
];

interface SitemapUrl {
  loc: string;
  lastmod: string;
  changefreq: string;
  priority: string;
}

function generateComprehensiveSitemap() {
  const urls: SitemapUrl[] = [];

  // Add high priority pages
  highPriorityPages.forEach((page) => {
    urls.push({
      loc: `${baseUrl}${page.path}`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: page.changefreq,
      priority: page.priority,
    });
  });

  // Add important pages
  importantPages.forEach((page) => {
    urls.push({
      loc: `${baseUrl}${page.path}`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: page.changefreq,
      priority: page.priority,
    });
  });

  // Add subdivision pages
  subdivisionPages.forEach((subdivision) => {
    urls.push({
      loc: `${baseUrl}/service-area/${subdivision}`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'weekly',
      priority: '0.9',
    });
  });

  // Add community pages
  communityPages.forEach((community) => {
    urls.push({
      loc: `${baseUrl}/communities/${community}`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'weekly',
      priority: '0.9',
    });
  });

  // Add secondary pages
  secondaryPages.forEach((page) => {
    urls.push({
      loc: `${baseUrl}${page.path}`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: page.changefreq,
      priority: page.priority,
    });
  });

  // Add school pages
  schoolPages.forEach((school) => {
    urls.push({
      loc: `${baseUrl}/schools/${school}`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'weekly',
      priority: '0.8',
    });
  });

  // Add zip code pages
  zipCodePages.forEach((zipCode) => {
    urls.push({
      loc: `${baseUrl}/zip-codes/${zipCode}`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'weekly',
      priority: '0.8',
    });
  });

  // Add street pages
  streetPages.forEach((street) => {
    urls.push({
      loc: `${baseUrl}/streets/${street}`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'weekly',
      priority: '0.8',
    });
  });

  // Add market report pages
  marketReportPages.forEach((report) => {
    urls.push({
      loc: `${baseUrl}/market-reports/subdivisions/${report}`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'monthly',
      priority: '0.7',
    });
  });

  // Add blog pages
  blogPages.forEach((post) => {
    urls.push({
      loc: `${baseUrl}/blog/${post}`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'monthly',
      priority: '0.7',
    });
  });

  // Add low priority pages
  lowPriorityPages.forEach((page) => {
    urls.push({
      loc: `${baseUrl}${page.path}`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: page.changefreq,
      priority: page.priority,
    });
  });

  // Generate XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"
        xmlns:news="http://www.google.com/schemas/sitemap-news/0.9">
${urls
  .map(
    (url) => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return sitemap;
}

export async function GET() {
  try {
    const sitemap = generateComprehensiveSitemap();

    return new NextResponse(sitemap, {
      status: 200,
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=3600, s-maxage=3600',
        'X-Cache-Bust': 'v2',
      },
    });
  } catch (error) {
    console.error('Error generating sitemap:', error);
    return new NextResponse('Error generating sitemap', { status: 500 });
  }
}
