'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
// import MarketInsightImage from './MarketInsightImage'; // Removed unused import
import {
  fetchRSSFeed,
  formatDate,
  getCategoryFromRSSItem,
  getImageUrlFromRSSItem,
} from '../../lib/rss-parser';

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
  title = 'Latest Market Insights',
}: MarketInsightsFeedProps) {
  const [articles, setArticles] = useState<MarketArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMarketInsights = async () => {
      try {
        setLoading(true);

        // Fetch RSS feed from Simplifying the Market
        const feed = await fetchRSSFeed();
        if (feed) {
          const articles = feed.items.slice(0, maxArticles).map((item) => ({
            title: item.title,
            excerpt: item.contentSnippet || '',
            url: item.link,
            date: item.pubDate || '',
            category: getCategoryFromRSSItem(item),
            imageUrl:
              getImageUrlFromRSSItem(item) ||
              'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=400&h=225&fit=crop&crop=entropy&auto=format&q=80',
            content: item.content || item.contentSnippet || '',
          }));
          setArticles(articles);
        } else {
          throw new Error('Failed to fetch market insights');
        }
      } catch (err) {
        console.error('Error fetching market insights:', err);
        setError('Failed to load market insights');
        setArticles([]);
      } finally {
        setLoading(false);
      }
    };

    fetchMarketInsights();
  }, [maxArticles]);

  const filteredArticles = articles
    .filter(
      (article) =>
        category === 'all' || article.category.toLowerCase().includes(category.toLowerCase())
    )
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
          <article
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            {showImages && article.imageUrl && (
              <div className="h-48 w-full relative overflow-hidden">
                <Image
                  src={article.imageUrl}
                  alt={article.title}
                  width={400}
                  height={225}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {article.category}
                  </span>
                </div>
              </div>
            )}

            <div className="p-6">
              <div className="flex items-center text-sm text-gray-500 mb-2">
                <time dateTime={article.date}>{formatDate(article.date)}</time>
                {!showImages && (
                  <span className="ml-2 bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                    {article.category}
                  </span>
                )}
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2">
                {article.title}
              </h3>

              <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>

              <Link
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm"
              >
                Read Full Article
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
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
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
