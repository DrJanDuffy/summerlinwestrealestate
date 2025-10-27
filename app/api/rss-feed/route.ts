import { NextResponse } from 'next/server';

export async function GET() {
  // Use Vercel serverless to proxy the RSS feed
  try {
    const rssUrl = 'https://www.simplifyingthemarket.com/en/feed?a=956758-ef2edda2f940e018328655620ea05f18';
    
    const response = await fetch(rssUrl, {
      next: { revalidate: 3600 }, // Cache for 1 hour
      headers: {
        'User-Agent': 'Mozilla/5.0',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch RSS feed');
    }

    const xmlText = await response.text();
    
    // Simple XML parsing without advanced regex
    const itemRegex = /<item>([\s\S]*?)<\/item>/g;
    const items = [];
    
    let match;
    while ((match = itemRegex.exec(xmlText)) !== null && items.length < 10) {
      const itemContent = match[1];
      
      const titleMatch = itemContent.match(/<title><!\[CDATA\[([\s\S]*?)\]\]><\/title>/);
      const linkMatch = itemContent.match(/<link>(.*?)<\/link>/);
      const descMatch = itemContent.match(/<description><!\[CDATA\[([\s\S]*?)\]\]><\/description>/);
      const dateMatch = itemContent.match(/<pubDate>(.*?)<\/pubDate>/);
      const guidMatch = itemContent.match(/<guid>(.*?)<\/guid>/);
      
      if (titleMatch && linkMatch && descMatch) {
        items.push({
          title: titleMatch[1],
          link: linkMatch[1],
          description: descMatch[1],
          pubDate: dateMatch ? dateMatch[1] : new Date().toISOString(),
          guid: guidMatch ? guidMatch[1] : linkMatch[1],
        });
      }
    }

    return NextResponse.json({ items });
  } catch (error) {
    console.error('Error fetching RSS feed:', error);
    return NextResponse.json({ items: [] });
  }
}

