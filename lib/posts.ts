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
        image: getImageUrlFromRSSItem(item) || 'https://placehold.co/800x320?text=Market+Insights',
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
      image: 'https://placehold.co/800x320?text=Market+Update',
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
      image: 'https://placehold.co/800x320?text=Communities',
      content: 'Full content coming soon.',
      alt: 'Best Communities in Summerlin image',
    },
    {
      id: 'summerlin-home-buying-tips',
      slug: 'summerlin-home-buying-tips',
      title: 'Summerlin Home Buying Tips',
      excerpt: 'Essential tips for buying a home in Summerlin West, from local experts.',
      date: '2024-03-20',
      image: 'https://placehold.co/800x320?text=Home+Buying+Tips',
      content: 'Full content coming soon.',
      alt: 'Summerlin Home Buying Tips image',
    },
  ];
}

// Legacy export for backward compatibility
export const posts: BlogPost[] = [];
