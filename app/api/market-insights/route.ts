import { NextResponse } from 'next/server';

interface MarketArticle {
  title: string;
  excerpt: string;
  url: string;
  date: string;
  category: string;
  imageUrl?: string;
  content: string;
}

export async function GET() {
  try {
    // Fetch RSS feed from Simplifying the Market
    const feedUrl =
      'https://www.simplifyingthemarket.com/en/feed?a=956758-ef2edda2f940e018328655620ea05f18';

    const response = await fetch(feedUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; RealEstateBot/1.0)',
      },
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const xmlText = await response.text();

    // Parse RSS XML (simplified parsing)
    const articles: MarketArticle[] = [];

    // Extract articles from RSS feed
    const itemRegex = /<item>([\s\S]*?)<\/item>/g;
    let match;

    while ((match = itemRegex.exec(xmlText)) !== null && articles.length < 10) {
      const itemContent = match[1];

      const titleMatch = itemContent.match(/<title><!\[CDATA\[(.*?)\]\]><\/title>/);
      const linkMatch = itemContent.match(/<link>(.*?)<\/link>/);
      const pubDateMatch = itemContent.match(/<pubDate>(.*?)<\/pubDate>/);
      const descriptionMatch = itemContent.match(
        /<description><!\[CDATA\[(.*?)\]\]><\/description>/
      );
      const categoryMatch = itemContent.match(/<category><!\[CDATA\[(.*?)\]\]><\/category>/);

      if (titleMatch && linkMatch && pubDateMatch) {
        const title = titleMatch[1].trim();
        const url = linkMatch[1].trim();
        const pubDate = pubDateMatch[1].trim();
        const description = descriptionMatch ? descriptionMatch[1].trim() : '';
        const category = categoryMatch ? categoryMatch[1].trim() : 'Market News';

        // Extract excerpt from description (first 200 characters)
        const excerpt =
          description
            .replace(/<[^>]*>/g, '') // Remove HTML tags
            .substring(0, 200)
            .trim() + '...';

        // Generate image URL based on article title
        const imageUrl = `/images/market-insights/${title
          .toLowerCase()
          .replace(/[^a-z0-9\s]/g, '')
          .replace(/\s+/g, '-')
          .substring(0, 50)}.jpg`;

        articles.push({
          title,
          excerpt,
          url,
          date: new Date(pubDate).toISOString().split('T')[0],
          category,
          imageUrl,
          content: description.replace(/<[^>]*>/g, '').trim(),
        });
      }
    }

    return NextResponse.json({
      articles,
      lastUpdated: new Date().toISOString(),
      source: 'Simplifying the Market',
      feedUrl,
    });
  } catch (error) {
    console.error('Error fetching market insights:', error);

    // Return fallback content based on Simplifying the Market feed
    const fallbackArticles: MarketArticle[] = [
      {
        title: 'Downsizing Without Debt: How More Homeowners Are Buying Their Next House in Cash',
        excerpt:
          "More than 40% of U.S. owner-occupied homes are mortgage-free – an all-time high. If you've owned your home for a while, you may be able to buy your next house outright.",
        url: 'https://www.simplifyingthemarket.com/en/2025/09/25/downsizing-without-debt-how-more-homeowners-are-buying-their-next-house-in-cash?a=956758-ef2edda2f940e018328655620ea05f18',
        date: '2025-09-25',
        category: 'Selling Tips',
        imageUrl: '/images/market-insights/downsizing-cash.jpg',
        content:
          "If you've been thinking about downsizing to lower your expenses, be closer to family, or just make life easier, here's a trend worth paying attention to: More homeowners are buying their next house outright, without taking on a new mortgage.",
      },
      {
        title: 'Why Buyers and Sellers Face Very Different Conditions Today',
        excerpt:
          "There's a new divide in housing right now. In some states, buyers are gaining ground. In others, sellers still have the upper hand. It all depends on where you live.",
        url: 'https://www.simplifyingthemarket.com/en/2025/09/24/why-buyers-and-sellers-face-very-different-conditions-today?a=956758-ef2edda2f940e018328655620ea05f18',
        date: '2025-09-24',
        category: 'Market Analysis',
        imageUrl: '/images/market-insights/market-divide.jpg',
        content:
          "The housing market is experiencing a divide. Conditions vary based on where you live, where you're moving, and if you're buying or selling. Only a local agent truly has the information you need.",
      },
      {
        title: '3 Reasons Affordability Is Showing Signs of Improvement This Fall',
        excerpt:
          'The typical monthly mortgage payment has been coming down, and is now about $290 lower than it was just a few months ago. Affordability may finally be showing signs of improvement.',
        url: 'https://www.simplifyingthemarket.com/en/2025/09/22/3-reasons-affordability-is-showing-signs-of-improvement-this-fall?a=956758-ef2edda2f940e018328655620ea05f18',
        date: '2025-09-22',
        category: 'Affordability',
        imageUrl: '/images/market-insights/affordability-improvement.jpg',
        content:
          "For the past couple of years, it's been tough for a lot of homebuyers to make the numbers work. But there's some encouraging news. Affordability may finally be showing signs of improvement this fall.",
      },
      {
        title: 'Builder Incentives Reach 5-Year High',
        excerpt:
          "66% of builders offered sales incentives in August. That's the peak so far this year, and the highest percentage we've seen in 5 years. 2 out of every 3 builders are offering something extra.",
        url: 'https://www.simplifyingthemarket.com/en/2025/09/04/builder-incentives-reach-5-year-high?a=956758-ef2edda2f940e018328655620ea05f18',
        date: '2025-09-04',
        category: 'New Construction',
        imageUrl: '/images/market-insights/builder-incentives.jpg',
        content:
          "Even with more homes on the market right now, some buyers are still having a tough time finding the right one at the right price. That's why more buyers are turning to new construction – and finding some of the best deals available today.",
      },
      {
        title: 'Why 50% of Homes Are Selling for Under Asking and How To Avoid It',
        excerpt:
          'Right now, about 50% of homes on the market are selling for less than their asking price. In this return to normal, your pricing strategy is more important than ever.',
        url: 'https://www.simplifyingthemarket.com/en/2025/09/08/why-50-of-homes-are-selling-for-under-asking-and-how-to-avoid-it?a=956758-ef2edda2f940e018328655620ea05f18',
        date: '2025-09-08',
        category: 'Selling Tips',
        imageUrl: '/images/market-insights/pricing-strategy.jpg',
        content:
          "If your selling strategy still assumes you'll get multiple offers over asking, it's officially time for a reset. That frenzied seller's market is behind us.",
      },
    ];

    return NextResponse.json({
      articles: fallbackArticles,
      lastUpdated: new Date().toISOString(),
      source: 'Simplifying the Market (Fallback)',
      error: 'Unable to fetch live feed, using cached content',
    });
  }
}
