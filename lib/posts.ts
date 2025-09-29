// Blog posts with RSS feed integration
import type { BlogPost } from '../types/blog';
import { fetchRSSFeed, getImageUrlFromRSSItem, getCategoryFromRSSItem } from './rss-parser';

export async function getPosts(): Promise<BlogPost[]> {
  try {
    const feed = await fetchRSSFeed();
    if (feed) {
      return feed.items.slice(0, 6).map((item, index) => ({
        id: `rss-post-${index}`,
        slug: `rss-post-${index}`,
        title: item.title,
        excerpt: item.contentSnippet || '',
        date: item.pubDate || new Date().toISOString(),
        image: getImageUrlFromRSSItem(item) || 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=320&fit=crop&crop=entropy&auto=format&q=80',
        content: item.content || item.contentSnippet || '',
        alt: `${item.title} image`,
        category: getCategoryFromRSSItem(item),
        url: item.link,
      }));
    }
  } catch (error) {
    console.error('Error fetching RSS feed for blog posts:', error);
  }

  // Fallback to static content
  return [
    {
      id: 'summerlin-market-update-2024',
      slug: 'summerlin-market-update-2024',
      title: 'Summerlin Market Update 2024',
      excerpt: 'Get the latest insights and trends for the Summerlin real estate market in 2024.',
      date: '2024-05-01',
          image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=320&fit=crop&crop=entropy&auto=format&q=80',
      content: 'Full content coming soon.',
      alt: 'Market Update 2024 image',
    },
    {
      id: 'best-communities-in-summerlin',
      slug: 'best-communities-in-summerlin',
      title: 'Best Communities in Summerlin',
      excerpt:
        'Explore the top neighborhoods and communities in Summerlin for families and professionals.',
      date: '2024-04-15',
          image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=320&fit=crop&crop=entropy&auto=format&q=80',
      content: 'Full content coming soon.',
      alt: 'Best Communities in Summerlin image',
    },
    {
      id: 'summerlin-home-buying-tips',
      slug: 'summerlin-home-buying-tips',
      title: 'Summerlin Home Buying Tips',
      excerpt: 'Essential tips for buying a home in Summerlin West, from local experts.',
      date: '2024-03-20',
          image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&h=320&fit=crop&crop=entropy&auto=format&q=80',
      content: 'Full content coming soon.',
      alt: 'Summerlin Home Buying Tips image',
    },
  ];
}

// Legacy export for backward compatibility
export const posts: BlogPost[] = [];
