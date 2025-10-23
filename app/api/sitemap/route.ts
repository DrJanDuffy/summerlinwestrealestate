import { NextResponse } from 'next/server';

/**
 * V0-Generated Sitemap API Route
 * Generates dynamic sitemap.xml for SEO optimization
 */

const baseUrl = 'https://www.summerlinwestrealestate.com';

// Static pages
const staticPages = [
  '',
  '/about',
  '/properties',
  '/communities',
  '/contact',
  '/market-reports',
  '/team',
  '/testimonials',
  '/press',
  '/home-values',
  '/current-listing',
  '/new-homes-summerlin',
  '/downtown-summerlin',
  '/the-vistas',
  '/vistas-listing',
  '/compare',
  '/sold',
  '/market',
  '/market-insights',
  '/blog',
  '/service-area',
  '/google-places',
  '/hidden-home-equity-tax',
  '/maps',
  '/faq',
  '/local-seo',
  '/linear-test',
  '/realscout-test',
  '/test-tailwind',
  '/v0-test',
];

// Dynamic pages - communities
const communities = [
  'the-vistas',
  'stonebridge',
  'redpoint',
  'reverence',
  'the-cliffs',
  'red-rock',
];

// Dynamic pages - subdivisions
const subdivisions = [
  'casa-rosa',
  'encanto',
  'serenity',
  'vista-ridge',
  'sunset-hills',
  'mountain-view',
];

// Dynamic pages - streets
const streets = [
  'sky-vista-drive',
  'desert-foothills-drive',
  'town-center-drive',
  'hualapai-way',
];

// Dynamic pages - schools
const schools = [
  'red-rock-elementary',
  'sig-rogich-middle',
  'palo-verde-high',
  'faith-lutheran',
];

// Dynamic pages - zip codes
const zipCodes = [
  '89135',
  '89134',
  '89144',
];

// Dynamic pages - market reports
const marketReports = [
  'paradiso',
  'palmilla',
];

// Blog posts (would be dynamic in real implementation)
const blogPosts = [
  'summerlin-west-market-update-2024',
  'luxury-homes-the-vistas-guide',
  'red-rock-canyon-living',
  'summerlin-west-schools-guide',
];

interface SitemapUrl {
  loc: string;
  lastmod: string;
  changefreq: string;
  priority: string;
}

function generateSitemap() {
  const urls: SitemapUrl[] = [];

  // Add static pages
  staticPages.forEach((page) => {
    urls.push({
      loc: `${baseUrl}${page}`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: page === '' ? 'daily' : 'weekly',
      priority: page === '' ? '1.0' : '0.8',
    });
  });

  // Add community pages
  communities.forEach((community) => {
    urls.push({
      loc: `${baseUrl}/communities/${community}`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'weekly',
      priority: '0.9',
    });
  });

  // Add subdivision pages
  subdivisions.forEach((subdivision) => {
    urls.push({
      loc: `${baseUrl}/service-area/${subdivision}`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'weekly',
      priority: '0.9',
    });
  });

  // Add street pages
  streets.forEach((street) => {
    urls.push({
      loc: `${baseUrl}/streets/${street}`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'weekly',
      priority: '0.8',
    });
  });

  // Add school pages
  schools.forEach((school) => {
    urls.push({
      loc: `${baseUrl}/schools/${school}`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'weekly',
      priority: '0.8',
    });
  });

  // Add zip code pages
  zipCodes.forEach((zipCode) => {
    urls.push({
      loc: `${baseUrl}/zip-codes/${zipCode}`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'weekly',
      priority: '0.8',
    });
  });

  // Add market report pages
  marketReports.forEach((report) => {
    urls.push({
      loc: `${baseUrl}/market-reports/subdivisions/${report}`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'monthly',
      priority: '0.7',
    });
  });

  // Add blog posts
  blogPosts.forEach((post) => {
    urls.push({
      loc: `${baseUrl}/blog/${post}`,
      lastmod: new Date().toISOString().split('T')[0],
      changefreq: 'monthly',
      priority: '0.7',
    });
  });

  // Generate XML
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
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
    const sitemap = generateSitemap();

    return new NextResponse(sitemap, {
      status: 200,
      headers: {
        'Content-Type': 'application/xml',
        'Cache-Control': 'public, max-age=3600, s-maxage=3600',
        'X-Cache-Bust': 'v1',
      },
    });
  } catch (error) {
    console.error('Sitemap generation error:', error);

    return new NextResponse('Error generating sitemap', {
      status: 500,
      headers: {
        'Content-Type': 'text/plain',
        'Cache-Control': 'no-cache',
      },
    });
  }
}
