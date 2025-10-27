import { NextResponse } from 'next/server';

/**
 * Communities Sitemap for Google Search Console
 * Lists all community pages for better SEO indexing
 */

const baseUrl = 'https://www.summerlinwestrealestate.com';
const today = new Date().toISOString().split('T')[0];

// Community pages (priority 0.9)
const communityPages = [
  'the-vistas',
  'stonebridge',
  'redpoint',
  'reverence',
  'the-cliffs',
  'red-rock',
];

export async function GET() {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${communityPages
  .map((community) => {
    return `  <url>
    <loc>${baseUrl}/communities/${community}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>`;
  })
  .join('\n')}
</urlset>`;

  return new NextResponse(sitemap, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}

