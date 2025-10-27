import { NextResponse } from 'next/server';

interface RSSItem {
  title: string;
  link: string;
  description: string;
  pubDate: string;
  guid: string;
  content?: string;
}

export async function GET() {
  try {
    const rssUrl = 'https://www.simplifyingthemarket.com/en/feed?a=956758-ef2edda2f940e018328655620ea05f18';
    
    const response = await fetch(rssUrl, {
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!response.ok) {
      throw new Error('Failed to fetch RSS feed');
    }

    const xmlText = await response.text();
    
    // Parse RSS XML
    const items: RSSItem[] = [];
    const titleRegex = /<title><!\[CDATA\[(.*?)\]\]><\/title>/g;
    const linkRegex = /<link>(.*?)<\/link>/g;
    const descriptionRegex = /<description><!\[CDATA\[(.*?)\]\]><\/description>/gs;
    const pubDateRegex = /<pubDate>(.*?)<\/pubDate>/g;
    const guidRegex = /<guid>(.*?)<\/guid>/g;

    const titles = Array.from(xmlText.matchAll(titleRegex), (m) => m[1]);
    const links = Array.from(xmlText.matchAll(linkRegex), (m) => m[1]);
    const descriptions = Array.from(xmlText.matchAll(descriptionRegex), (m) => m[1]);
    const pubDates = Array.from(xmlText.matchAll(pubDateRegex), (m) => m[1]);
    const guids = Array.from(xmlText.matchAll(guidRegex), (m) => m[1]);

    // Skip first title (feed title)
    const itemCount = Math.min(titles.length - 1, 10);

    for (let i = 0; i < itemCount; i++) {
      const title = titles[i + 1];
      const link = links[i];
      const description = descriptions[i];
      const pubDate = pubDates[i];
      const guid = guids[i] || link;

      if (title && link && description) {
        items.push({
          title,
          link,
          description,
          pubDate: pubDate || new Date().toISOString(),
          guid,
        });
      }
    }

    return NextResponse.json({ items });
  } catch (error) {
    console.error('Error fetching RSS feed:', error);
    return NextResponse.json(
      { error: 'Failed to fetch RSS feed' },
      { status: 500 }
    );
  }
}

