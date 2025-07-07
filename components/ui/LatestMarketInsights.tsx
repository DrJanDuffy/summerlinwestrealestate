"use client";
import React, { useEffect, useState } from "react";
import Parser from "rss-parser";

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
    <section
      style={{
        marginBottom: "2.5rem",
        background: "#fff",
        borderRadius: "8px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
        padding: "2rem 1rem",
      }}
    >
      <h2 style={{ color: "#3A8DDE", marginBottom: "1rem" }}>
        Latest Market Insights
      </h2>
      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {rssItems.map((item, idx) => (
          <li key={idx} style={{ marginBottom: "1.5rem" }}>
            <a
              href={item.link}
              target="_blank"
              rel="noopener"
              style={{
                fontWeight: 600,
                fontSize: "1.1rem",
                color: "#0A2540",
                textDecoration: "underline",
              }}
            >
              {item.title}
            </a>
            <div
              style={{
                color: "#888",
                fontSize: "0.95rem",
                marginBottom: "0.5rem",
              }}
            >
              {item.pubDate && new Date(item.pubDate).toLocaleDateString()}
            </div>
            <div style={{ color: "#444", fontSize: "1.02rem" }}>
              {item.contentSnippet}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
