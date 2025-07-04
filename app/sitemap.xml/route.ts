import { NextResponse } from 'next/server';
import { posts } from '../../lib/posts';

export async function GET() {
  const baseUrl = 'https://summerlinwestrealestate.com';
  const today = new Date().toISOString().split('T')[0];
  const urls = [
    '',
    'about',
    'communities',
    'compare',
    'sold',
    'the-vistas',
    'vistas-listing',
    'market',
    'current-listing',
  ];
  const blogUrls = posts.map(post => `blog/${post.slug}`);
  const allUrls = [...urls, ...blogUrls];
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allUrls
    .map(
      (path) => `
    <url>
      <loc>${baseUrl}/${path}</loc>
      <lastmod>${today}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>${path === '' ? '1.0' : '0.8'}</priority>
    </url>`
    )
    .join('')}
</urlset>`;
  return new NextResponse(sitemap, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
    },
  });
} 