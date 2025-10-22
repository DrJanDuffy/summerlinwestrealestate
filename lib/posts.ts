// Blog posts with RSS feed integration
import type { BlogPost } from '../types/blog';
import { fetchRSSFeed, getCategoryFromRSSItem, getImageUrlFromRSSItem } from './rss-parser';
import { additionalBlogPosts, staticBlogPosts } from './static-blog-posts';

export async function getPosts(): Promise<BlogPost[]> {
  // Always return static blog posts first to ensure they're available
  const allStaticPosts = [...staticBlogPosts, ...additionalBlogPosts];

  // Try to add RSS posts if available (but don't let them override static posts)
  try {
    const feed = await fetchRSSFeed();
    if (feed) {
      const rssPosts = feed.items.slice(0, 6).map((item, index) => ({
        id: `rss-post-${index}`,
        slug: `rss-post-${index}`,
        title: item.title,
        excerpt: item.contentSnippet || '',
        date: item.pubDate || new Date().toISOString(),
        image:
          getImageUrlFromRSSItem(item) ||
          'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=320&fit=crop&crop=entropy&auto=format&q=80',
        content: item.content || item.contentSnippet || '',
        alt: `${item.title} image`,
        category: getCategoryFromRSSItem(item),
        url: item.link,
      }));

      // Combine static posts with RSS posts, but prioritize static posts
      // This ensures our static posts are always available
      return [...allStaticPosts, ...rssPosts];
    }
  } catch (error) {
    console.error('Error fetching RSS feed for blog posts:', error);
  }

  // Return static posts even if RSS fails
  return allStaticPosts;
}

// Legacy export for backward compatibility
export const posts: BlogPost[] = [];
