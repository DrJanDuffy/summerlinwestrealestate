'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import MarketInsightImage from './MarketInsightImage';

interface MarketArticle {
  title: string;
  excerpt: string;
  url: string;
  date: string;
  category: string;
  imageUrl?: string;
  content: string;
}

interface MarketInsightsFeedProps {
  maxArticles?: number;
  showImages?: boolean;
  category?: string;
  title?: string;
}

export default function MarketInsightsFeed({
  maxArticles = 4,
  showImages = true,
  category = 'all',
  title = 'Latest Market Insights'
}: MarketInsightsFeedProps) {
  const [articles, setArticles] = useState<MarketArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMarketInsights = async () => {
      try {
        setLoading(true);
        
        // Fetch RSS feed from Simplifying the Market
        const response = await fetch('/api/market-insights');
        if (!response.ok) {
          throw new Error('Failed to fetch market insights');
        }
        
        const data = await response.json();
        setArticles(data.articles || []);
      } catch (err) {
        console.error('Error fetching market insights:', err);
        setError('Failed to load market insights');
        
        // Fallback to static content based on Simplifying the Market feed
        setArticles([
          {
            title: "Downsizing Without Debt: How More Homeowners Are Buying Their Next House in Cash",
            excerpt: "More than 40% of U.S. owner-occupied homes are mortgage-free – an all-time high. If you've owned your home for a while, you may be able to buy your next house outright.",
            url: "https://www.simplifyingthemarket.com/en/2025/09/25/downsizing-without-debt-how-more-homeowners-are-buying-their-next-house-in-cash?a=956758-ef2edda2f940e018328655620ea05f18",
            date: "2025-09-25",
            category: "Selling Tips",
            imageUrl: "/images/market-insights/downsizing-cash.jpg",
            content: "If you've been thinking about downsizing to lower your expenses, be closer to family, or just make life easier, here's a trend worth paying attention to: More homeowners are buying their next house outright, without taking on a new mortgage."
          },
          {
            title: "Why Buyers and Sellers Face Very Different Conditions Today",
            excerpt: "There's a new divide in housing right now. In some states, buyers are gaining ground. In others, sellers still have the upper hand. It all depends on where you live.",
            url: "https://www.simplifyingthemarket.com/en/2025/09/24/why-buyers-and-sellers-face-very-different-conditions-today?a=956758-ef2edda2f940e018328655620ea05f18",
            date: "2025-09-24",
            category: "Market Analysis",
            imageUrl: "/images/market-insights/market-divide.jpg",
            content: "The housing market is experiencing a divide. Conditions vary based on where you live, where you're moving, and if you're buying or selling. Only a local agent truly has the information you need."
          },
          {
            title: "3 Reasons Affordability Is Showing Signs of Improvement This Fall",
            excerpt: "The typical monthly mortgage payment has been coming down, and is now about $290 lower than it was just a few months ago. Affordability may finally be showing signs of improvement.",
            url: "https://www.simplifyingthemarket.com/en/2025/09/22/3-reasons-affordability-is-showing-signs-of-improvement-this-fall?a=956758-ef2edda2f940e018328655620ea05f18",
            date: "2025-09-22",
            category: "Affordability",
            imageUrl: "/images/market-insights/affordability-improvement.jpg",
            content: "For the past couple of years, it's been tough for a lot of homebuyers to make the numbers work. But there's some encouraging news. Affordability may finally be showing signs of improvement this fall."
          },
          {
            title: "Builder Incentives Reach 5-Year High",
            excerpt: "66% of builders offered sales incentives in August. That's the peak so far this year, and the highest percentage we've seen in 5 years. 2 out of every 3 builders are offering something extra.",
            url: "https://www.simplifyingthemarket.com/en/2025/09/04/builder-incentives-reach-5-year-high?a=956758-ef2edda2f940e018328655620ea05f18",
            date: "2025-09-04",
            category: "New Construction",
            imageUrl: "/images/market-insights/builder-incentives.jpg",
            content: "Even with more homes on the market right now, some buyers are still having a tough time finding the right one at the right price. That's why more buyers are turning to new construction – and finding some of the best deals available today."
          }
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchMarketInsights();
  }, []);

  const filteredArticles = articles
    .filter(article => category === 'all' || article.category.toLowerCase().includes(category.toLowerCase()))
    .slice(0, maxArticles);

  if (loading) {
    return (
      <div className="market-insights-feed">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">{title}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[...Array(maxArticles)].map((_, i) => (
            <div key={i} className="bg-white rounded-lg shadow-md p-6 animate-pulse">
              <div className="h-4 bg-gray-200 rounded mb-4"></div>
              <div className="h-3 bg-gray-200 rounded mb-2"></div>
              <div className="h-3 bg-gray-200 rounded mb-4"></div>
              <div className="h-8 bg-gray-200 rounded"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="market-insights-feed">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">{title}</h2>
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-red-600">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="market-insights-feed">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
        <Link 
          href="https://www.simplifyingthemarket.com/?a=956758-ef2edda2f940e018328655620ea05f18"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800 text-sm font-medium"
        >
          View All Articles →
        </Link>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredArticles.map((article, index) => (
          <article key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
            {showImages && (
              <MarketInsightImage
                title={article.title}
                category={article.category}
                className="h-48 w-full"
              />
            )}
            
            <div className="p-6">
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <time dateTime={article.date}>
                  {new Date(article.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
                {!showImages && (
                  <span className="ml-2 bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                    {article.category}
                  </span>
                )}
              </div>
              
              <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
                {article.title}
              </h3>
              
              <p className="text-gray-600 mb-4 line-clamp-3">
                {article.excerpt}
              </p>
              
              <Link
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm"
              >
                Read Full Article
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </Link>
            </div>
          </article>
        ))}
      </div>
      
      <div className="mt-8 text-center">
        <p className="text-gray-600 mb-4">
          Stay informed with the latest market insights from Simplifying the Market
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors duration-300"
        >
          Get Personalized Market Analysis
          <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
