import { NextResponse } from 'next/server';
import Parser from 'rss-parser';

/**
 * Blog Posts Sitemap for Google Search Console
 * Dynamically generates sitemap from RSS feed
 */

const baseUrl = 'https://www.summerlinwestrealestate.com';
const today = new Date().toISOString().split('T')[0];

// Hardcoded blog posts for fallback (will be enhanced with RSS feed)
const blogPosts = [
  'summerlin-west-market-update-2024',
  'luxury-homes-the-vistas-guide',
  'red-rock-canyon-living',
  'summerlin-west-schools-guide',
  '2026-housing-market-outlook',
];

interface BlogPost {
  slug: string;
  lastmod: string;
  changefreq: string;
  priority: string;
}

async function getBlogPosts(): Promise<BlogPost[]> {
  try {
    // Fetch posts from RSS feed
    const parser = new Parser();
    const feed = await parser.parseURL(
      'https://www.simplifyingthemarket.com/en/feed?a=956758-ef2edda2f940e018328655620ea05f18'
    );

    if (feed.items && feed.items.length > 0) {
      return feed.items.slice(0, 50).map((item) => {
        // Extract slug from URL or use title as slug
        let slug = item.link || item.id || '';
        slug = slug
          .split('/')
          .pop()
          ?.split('?')[0]
          .replace(/\.(html|htm)$/, '') || '';
        
        // Extract date from published date or current date
        const date = item.isoDate || item.pubDate || today;
        const lastmod = new Date(date).toISOString().split('T')[0];

        return {
          slug: slug || 'blog-post',
          lastmod,
          changefreq: 'weekly',
          priority: '0.8',
        };
      });
    }
  } catch (error) {
    console.error('Error fetching RSS feed for sitemap:', error);
  }

  // Fallback to hardcoded posts if RSS fails
  return blogPosts.map((slug) => ({
    slug,
    lastmod: today,
    changefreq: 'weekly',
    priority: '0.8',
  }));
}

export async function GET() {
  const posts = await getBlogPosts();

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${posts
  .map((post) => {
    return `  <url>
    <loc>${baseUrl}/blog/${post.slug}</loc>
    <lastmod>${post.lastmod}</lastmod>
    <changefreq>${post.changefreq}</changefreq>
    <priority>${post.priority}</priority>
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

