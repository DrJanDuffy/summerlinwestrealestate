/**
 * RSS Feed Display Component
 * Displays blog posts from KCM RSS feed
 */
'use client';

import { useEffect, useState } from 'react';

interface RSSItem {
  title: string;
  link: string;
  description: string;
  pubDate: string;
  guid: string;
  content?: string;
}

export default function RSSFeedDisplay() {
  const [posts, setPosts] = useState<RSSItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch RSS feed
    const fetchRSS = async () => {
      try {
        const response = await fetch('/api/rss-feed');
        if (!response.ok) throw new Error('Failed to fetch RSS feed');
        const data = await response.json();
        setPosts(data.items || []);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching RSS feed:', err);
        setError('Failed to load blog posts');
        setLoading(false);
      }
    };

    fetchRSS();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        <p className="ml-4 text-gray-600">Loading latest insights...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-red-600">{error}</p>
        <p className="text-gray-600 mt-2">Please try again later</p>
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600">No blog posts available at this time</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.slice(0, 9).map((post) => (
        <article
          key={post.guid}
          className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
        >
          <div className="p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold">
                Market Insights
              </span>
              <time className="text-sm text-gray-500">
                {new Date(post.pubDate).toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </time>
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">{post.title}</h3>
            <p
              className="text-gray-600 mb-4 line-clamp-3"
              dangerouslySetInnerHTML={{ __html: post.description }}
            />
            <a
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-semibold hover:text-blue-700 inline-flex items-center gap-2"
            >
              Read More
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </a>
          </div>
        </article>
      ))}
    </div>
  );
}

