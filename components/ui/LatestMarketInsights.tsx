"use client";
import React, { useEffect, useState, useMemo } from "react";
import Parser from "rss-parser";
import Image from "next/image";
import styles from "../../app/page.module.css";

const RSS_FEED_URL =
  "https://www.simplifyingthemarket.com/en/feed?a=956758-ef2edda2f940e018328655620ea05f18";

// Cache for RSS data
let rssCache: { data: any[] | null; timestamp: number } = { data: null, timestamp: 0 };
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

const LatestMarketInsights = React.memo(function LatestMarketInsights() {
  const [rssItems, setRssItems] = useState<any[]>([]);

  useEffect(() => {
    async function fetchRSS() {
      try {
        const now = Date.now();
        
        // Check cache first
        if (rssCache.data && (now - rssCache.timestamp) < CACHE_DURATION) {
          setRssItems(rssCache.data);
          return;
        }
        
        const parser = new Parser({
          customFields: {
            item: ["media:content", "enclosure"],
          },
        });
        const feed = await parser.parseURL(RSS_FEED_URL);
        const items = feed.items.slice(0, 3);
        
        // Update cache
        rssCache = { data: items, timestamp: now };
        setRssItems(items);
      } catch (err) {
        // fallback: do nothing
      }
    }
    fetchRSS();
  }, []);

  const getImageUrl = useMemo(() => {
    return (item: any) => {
      // Handle media:content as array or object
      let mediaContent = item["media:content"];
      if (Array.isArray(mediaContent)) {
        // Find first with url
        const found = mediaContent.find((mc) => mc.url);
        if (found) return found.url;
      } else if (mediaContent && mediaContent.url) {
        return mediaContent.url;
      }
      if (item.enclosure && item.enclosure.url) {
        return item.enclosure.url;
      }
      return "https://placehold.co/120x80?text=News";
    };
  }, []);

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
                rel="noopener"
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
                    {item.pubDate && new Date(item.pubDate).toLocaleDateString()}
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
