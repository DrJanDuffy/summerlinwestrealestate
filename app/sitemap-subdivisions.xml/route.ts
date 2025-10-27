import { NextResponse } from 'next/server';
import subdivisionsData from '../service-area/subdivisions.json';

/**
 * Subdivisions Sitemap for Google Search Console
 * Lists all service-area subdivision pages for better SEO indexing
 */

const baseUrl = 'https://www.summerlinwestrealestate.com';
const today = new Date().toISOString().split('T')[0];

export async function GET() {
  const subdivisions = subdivisionsData as Array<{ slug: string }>;

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${subdivisions
  .map((subdivision) => {
    return `  <url>
    <loc>${baseUrl}/service-area/${subdivision.slug}</loc>
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

