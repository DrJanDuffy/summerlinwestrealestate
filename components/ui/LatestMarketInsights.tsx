"use client";
import React, { useEffect, useState } from "react";
import Parser from "rss-parser";
import styles from "../../app/page.module.css";

const RSS_FEED_URL =
  "https://www.simplifyingthemarket.com/en/feed?a=956758-ef2edda2f940e018328655620ea05f18";

export default function LatestMarketInsights() {
  const [rssItems, setRssItems] = useState<any[]>([]);

  useEffect(() => {
    async function fetchRSS() {
      try {
        const parser = new Parser();
        // Use a CORS proxy if needed for client-side fetch
        const feed = await parser.parseURL(RSS_FEED_URL);
        setRssItems(feed.items.slice(0, 3));
      } catch (err) {
        // fallback: do nothing
      }
    }
    fetchRSS();
  }, []);

  if (rssItems.length === 0) return null;

  return (
    <section className={styles.sectionCard}>
      <h2 className={styles.centerTitle}>Latest Market Insights</h2>
      <ul className={styles.insightsList}>
        {rssItems.map((item, idx) => (
          <li key={idx} className={styles.insightItem}>
            <a
              href={item.link}
              target="_blank"
              rel="noopener"
              className={styles.insightLink}
            >
              {item.title}
            </a>
            <div className={styles.insightDate}>
              {item.pubDate && new Date(item.pubDate).toLocaleDateString()}
            </div>
            <div className={styles.insightSnippet}>{item.contentSnippet}</div>
          </li>
        ))}
      </ul>
    </section>
  );
}
