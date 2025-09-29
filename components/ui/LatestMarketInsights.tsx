'use client';
import Image from 'next/image';
import React, { useEffect, useMemo, useState } from 'react';
import { fetchRSSFeed, getImageUrlFromRSSItem, formatDate, type RSSFeedItem } from '../../lib/rss-parser';
import styles from '../../app/page.module.css';

const LatestMarketInsights = React.memo(function LatestMarketInsights() {
  const [rssItems, setRssItems] = useState<RSSFeedItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRSS() {
      try {
        setLoading(true);
        const feed = await fetchRSSFeed();
        if (feed) {
          setRssItems(feed.items.slice(0, 3));
        }
      } catch (error) {
        console.error('Error fetching RSS feed:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchRSS();
  }, []);

  const getImageUrl = useMemo(() => {
    return (item: RSSFeedItem) => {
      // Try to get image from RSS feed first
      const rssImage = getImageUrlFromRSSItem(item);
      if (rssImage) {
        return rssImage;
      }
      
      // Fallback to placeholder
      return 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=120&h=80&fit=crop&crop=entropy&auto=format&q=80';
    };
  }, []);

  if (loading) {
    return (
      <section className={styles.sectionCard}>
        <h2 className={styles.centerTitle}>Latest Market Insights</h2>
        <div className="flex items-center justify-center p-8">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        </div>
      </section>
    );
  }

  if (rssItems.length === 0) return null;

  return (
    <section className={styles.sectionCard}>
      <h2 className={styles.centerTitle}>Latest Market Insights</h2>
      <ul className={styles.insightsList}>
        {rssItems.map((item, idx) => {
          const imageUrl = getImageUrl(item);
          return (
            <li key={idx} className={styles.insightItem}>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.insightLink}
              >
                <Image
                  src={imageUrl}
                  alt={item.title}
                  width={120}
                  height={80}
                  className={styles.insightImage}
                />
                <div>
                  <div className={styles.insightTitle}>{item.title}</div>
                  <div className={styles.insightDate}>
                    {formatDate(item.pubDate)}
                  </div>
                  <div className={styles.insightSnippet}>{item.contentSnippet}</div>
                </div>
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
});

export default LatestMarketInsights;
