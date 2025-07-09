"use client";

import React, { useEffect, useState, useMemo } from "react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import styles from "../../app/page.module.css";
import Parser from "rss-parser";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  image?: string;
  tags?: string[];
}

interface BlogLayoutProps {
  posts: BlogPost[];
  currentPost?: BlogPost;
  relatedPosts?: BlogPost[];
  isPostPage?: boolean;
}

const RSS_FEED_URL =
  "https://www.simplifyingthemarket.com/en/feed?a=956758-ef2edda2f940e018328655620ea05f18";

// Shared cache with LatestMarketInsights
let rssCache: { data: any[] | null; timestamp: number } = { data: null, timestamp: 0 };
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

export default function BlogLayout({
  posts,
  currentPost,
  relatedPosts,
  isPostPage = false,
}: BlogLayoutProps) {
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
        
        const parser = new Parser();
        const feed = await parser.parseURL(RSS_FEED_URL);
        const items = feed.items.slice(0, 3);
        
        // Update cache
        rssCache = { data: items, timestamp: now };
        setRssItems(items);
      } catch (err) {
        // fallback: do nothing
      }
    }
    if (!isPostPage) fetchRSS();
  }, [isPostPage]);

  return (
    <div className={styles.page}>
      <Head>
        <title>
          {isPostPage && currentPost
            ? `${currentPost.title} | Summerlin West Blog`
            : "Summerlin West Real Estate Blog"}
        </title>
        <meta
          name="description"
          content={
            isPostPage && currentPost
              ? currentPost.excerpt
              : "Read the latest real estate news, tips, and market updates for Summerlin West."
          }
        />
        <meta
          property="og:title"
          content={
            isPostPage && currentPost
              ? currentPost.title
              : "Summerlin West Real Estate Blog"
          }
        />
        <meta
          property="og:description"
          content={
            isPostPage && currentPost
              ? currentPost.excerpt
              : "Read the latest real estate news, tips, and market updates for Summerlin West."
          }
        />
        {isPostPage && currentPost && (
          <script type="application/ld+json" suppressHydrationWarning>{`
            {
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              "headline": "${currentPost.title.replace(/"/g, '\"')}",
              "description": "${currentPost.excerpt.replace(/"/g, '\"')}",
              "datePublished": "${currentPost.date}",
              "image": "${currentPost.image || ""}",
              "author": {
                "@type": "Person",
                "name": "Summerlin West Real Estate"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Summerlin West Real Estate",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://summerlinwestrealestate.com/og-image.jpg"
                }
              }
            }
          `}</script>
        )}
      </Head>
      {!isPostPage && (
        <section className={`${styles.hero} ${styles.blogHeroMargin}`}>
          <h1>Summerlin West Real Estate Blog</h1>
          <p className={styles.subtitle}>
            Insights, tips, and market news for Summerlin homeowners and buyers
          </p>
        </section>
      )}
      {/* Latest Market Insights from RSS */}
      {!isPostPage && rssItems.length > 0 && (
        <section className={styles.rssSection}>
          <h2 className={styles.rssTitle}>
            Latest Market Insights
          </h2>
          <ul className={styles.rssList}>
            {rssItems.map((item, idx) => (
              <li key={idx} className={styles.rssItem}>
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener"
                  className={styles.rssLink}
                >
                  {item.title}
                </a>
                <div className={styles.rssDate}>
                  {item.pubDate && new Date(item.pubDate).toLocaleDateString()}
                </div>
                <div className={styles.rssSnippet}>
                  {item.contentSnippet}
                </div>
              </li>
            ))}
          </ul>
        </section>
      )}
      {/* Article Grid */}
      {!isPostPage && (
        <section className={styles.blogGrid}>
          {posts.map((post) => (
            <div key={post.slug} className={styles.blogCard}>
              {post.image && (
                <Image
                  src={post.image}
                  alt={post.title}
                  width={400}
                  height={180}
                  className={styles.blogImage}
                />
              )}
              <h2 className={styles.blogTitle}>
                {post.title}
              </h2>
              <p className={styles.blogExcerpt}>
                {post.excerpt}
              </p>
              <Link
                href={`/blog/${post.slug}`}
                className={`${styles.cta} ${styles.blogReadMore}`}
              >
                Read More
              </Link>
            </div>
          ))}
        </section>
      )}
      {/* Individual Blog Post Template */}
      {isPostPage && currentPost && (
        <article className={styles.blogPost}>
          <h1 className={styles.postTitle}>
            {currentPost.title}
          </h1>
          <div className={styles.postDate}>
            {new Date(currentPost.date).toLocaleDateString()}
          </div>
          {currentPost.image && (
            <Image
              src={currentPost.image}
              alt={currentPost.title}
              width={800}
              height={320}
              className={styles.postImage}
              priority
            />
          )}
          <div
            className={styles.postContent}
            dangerouslySetInnerHTML={{ __html: currentPost.content }}
          />
          {/* Social Sharing Buttons */}
          <div className={styles.socialSharing}>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(typeof window !== "undefined" ? window.location.href : "")}`}
              target="_blank"
              rel="noopener"
              aria-label="Share on Facebook"
              className={styles.socialLink}
            >
              Facebook
            </a>
            <a
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(typeof window !== "undefined" ? window.location.href : "")}&text=${encodeURIComponent(currentPost.title)}`}
              target="_blank"
              rel="noopener"
              aria-label="Share on Twitter"
              className={styles.socialLink}
            >
              Twitter
            </a>
            <a
              href={`mailto:?subject=${encodeURIComponent(currentPost.title)}&body=${encodeURIComponent(typeof window !== "undefined" ? window.location.href : "")}`}
              aria-label="Share by Email"
              className={styles.socialLink}
            >
              Email
            </a>
          </div>
        </article>
      )}
      {/* Related Posts Section */}
      {isPostPage && relatedPosts && relatedPosts.length > 0 && (
        <section className={styles.relatedPosts}>
          <h2>Related Posts</h2>
          <div className={styles.relatedGrid}>
            {relatedPosts.map((post) => (
              <div key={post.slug} className={styles.relatedCard}>
                <h3 className={styles.relatedTitle}>
                  {post.title}
                </h3>
                <p className={styles.relatedExcerpt}>
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className={styles.secondaryCta}
                >
                  Read More
                </Link>
              </div>
            ))}
          </div>
        </section>
      )}
      {/* RSS Feed Info */}
      <section className={styles.rssInfo}>
        <h2>Automate Your Real Estate Insights</h2>
        <p className={styles.rssInfoText}>
          Subscribe to our personalized RSS feed for the latest blog posts and
          market updates, or automate your email newsletter with our feed.
        </p>
        <a
          href="https://www.simplifyingthemarket.com/en/feed?a=956758-ef2edda2f940e018328655620ea05f18"
          target="_blank"
          rel="noopener"
          className={`${styles.cta} ${styles.rssFeedLink}`}
        >
          View RSS Feed
        </a>
      </section>
    </div>
  );
}
