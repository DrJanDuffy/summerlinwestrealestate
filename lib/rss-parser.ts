import { Parser } from 'rss-parser';

export interface RSSFeedItem {
  title: string;
  link: string;
  pubDate?: string;
  contentSnippet?: string;
  content?: string;
  enclosure?: {
    url: string;
    type?: string;
    length?: number;
  };
  'media:content'?: {
    url: string;
    type?: string;
    width?: number;
    height?: number;
  } | Array<{
    url: string;
    type?: string;
    width?: number;
    height?: number;
  }>;
  categories?: string[];
  guid?: string;
}

export interface ParsedRSSFeed {
  title: string;
  description: string;
  link: string;
  items: RSSFeedItem[];
  lastBuildDate?: string;
}

const RSS_FEED_URL = 'https://www.simplifyingthemarket.com/en/feed?a=956758-ef2edda2f940e018328655620ea05f18';

// Cache for RSS data
let rssCache: { data: ParsedRSSFeed | null; timestamp: number } = {
  data: null,
  timestamp: 0,
};

const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

export async function fetchRSSFeed(): Promise<ParsedRSSFeed | null> {
  try {
    const now = Date.now();

    // Check cache first
    if (rssCache.data && now - rssCache.timestamp < CACHE_DURATION) {
      return rssCache.data;
    }

    const parser = new Parser({
      customFields: {
        item: ['media:content', 'enclosure', 'categories'],
      },
    });

    const feed = await parser.parseURL(RSS_FEED_URL);
    
    const parsedFeed: ParsedRSSFeed = {
      title: feed.title || 'Market Insights',
      description: feed.description || 'Latest real estate market insights',
      link: feed.link || '',
      lastBuildDate: feed.lastBuildDate,
      items: feed.items.map(item => ({
        title: item.title || '',
        link: item.link || '',
        pubDate: item.pubDate,
        contentSnippet: item.contentSnippet,
        content: item.content,
        enclosure: item.enclosure,
        'media:content': item['media:content'],
        categories: item.categories,
        guid: item.guid,
      })),
    };

    // Update cache
    rssCache = { data: parsedFeed, timestamp: now };
    
    return parsedFeed;
  } catch (error) {
    console.error('Error fetching RSS feed:', error);
    return null;
  }
}

export function getImageUrlFromRSSItem(item: RSSFeedItem): string | null {
  // Handle media:content as array or object
  const mediaContent = item['media:content'];
  if (Array.isArray(mediaContent)) {
    // Find first with url
    const found = mediaContent.find((mc) => mc.url);
    if (found) return found.url;
  } else if (mediaContent?.url) {
    return mediaContent.url;
  }
  
  // Check enclosure
  if (item.enclosure?.url) {
    return item.enclosure.url;
  }
  
  return null;
}

export function getCategoryFromRSSItem(item: RSSFeedItem): string {
  if (item.categories && item.categories.length > 0) {
    return item.categories[0];
  }
  
  // Try to infer category from title
  const title = item.title.toLowerCase();
  if (title.includes('selling') || title.includes('sell')) {
    return 'Selling Tips';
  } else if (title.includes('buying') || title.includes('buy')) {
    return 'Buying Tips';
  } else if (title.includes('market') || title.includes('analysis')) {
    return 'Market Analysis';
  } else if (title.includes('affordability') || title.includes('affordable')) {
    return 'Affordability';
  } else if (title.includes('construction') || title.includes('new home')) {
    return 'New Construction';
  } else if (title.includes('news') || title.includes('update')) {
    return 'Market News';
  }
  
  return 'Market Insights';
}

export function formatDate(dateString?: string): string {
  if (!dateString) return '';
  
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  } catch {
    return '';
  }
}

export function truncateContent(content: string, maxLength: number = 150): string {
  if (content.length <= maxLength) return content;
  return content.substring(0, maxLength).trim() + '...';
}
