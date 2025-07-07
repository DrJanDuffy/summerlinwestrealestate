import React, { useEffect, useState } from "react";
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
        const parser = new Parser();
        const feed = await parser.parseURL(RSS_FEED_URL);
        setRssItems(feed.items.slice(0, 3));
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
        <section className={styles.hero} style={{ marginBottom: "2rem" }}>
          <h1>Summerlin West Real Estate Blog</h1>
          <p className={styles.subtitle}>
            Insights, tips, and market news for Summerlin homeowners and buyers
          </p>
        </section>
      )}
      {/* Latest Market Insights from RSS */}
      {!isPostPage && rssItems.length > 0 && (
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
      )}
      {/* Article Grid */}
      {!isPostPage && (
        <section style={{ marginBottom: "2.5rem" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "2rem",
            }}
          >
            {posts.map((post) => (
              <div
                key={post.slug}
                style={{
                  background: "#fff",
                  borderRadius: "8px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                  padding: "1.5rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                {post.image && (
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={400}
                    height={180}
                    style={{
                      borderRadius: "8px",
                      marginBottom: "1rem",
                      width: "100%",
                      height: 180,
                      objectFit: "cover",
                    }}
                  />
                )}
                <h2
                  style={{
                    fontSize: "1.3rem",
                    color: "#3A8DDE",
                    marginBottom: "0.5rem",
                  }}
                >
                  {post.title}
                </h2>
                <p
                  style={{
                    color: "#0A2540",
                    fontSize: "1.05rem",
                    marginBottom: "1rem",
                  }}
                >
                  {post.excerpt}
                </p>
                <Link
                  href={`/blog/${post.slug}`}
                  className={styles.cta}
                  style={{ alignSelf: "flex-start" }}
                >
                  Read More
                </Link>
              </div>
            ))}
          </div>
        </section>
      )}
      {/* Individual Blog Post Template */}
      {isPostPage && currentPost && (
        <article
          style={{
            marginBottom: "2.5rem",
            background: "#fff",
            borderRadius: "8px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            padding: "2rem 1rem",
            maxWidth: 800,
            margin: "0 auto",
          }}
        >
          <h1
            style={{ color: "#3A8DDE", fontSize: "2rem", marginBottom: "1rem" }}
          >
            {currentPost.title}
          </h1>
          <div
            style={{
              color: "#888",
              fontSize: "0.95rem",
              marginBottom: "1.5rem",
            }}
          >
            {new Date(currentPost.date).toLocaleDateString()}
          </div>
          {currentPost.image && (
            <Image
              src={currentPost.image}
              alt={currentPost.title}
              width={800}
              height={320}
              style={{
                borderRadius: "8px",
                marginBottom: "1.5rem",
                width: "100%",
                maxHeight: 320,
                objectFit: "cover",
              }}
              priority
            />
          )}
          <div
            style={{
              color: "#0A2540",
              fontSize: "1.08rem",
              marginBottom: "2rem",
            }}
            dangerouslySetInnerHTML={{ __html: currentPost.content }}
          />
          {/* Social Sharing Buttons */}
          <div style={{ display: "flex", gap: "1rem", marginBottom: "2rem" }}>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(typeof window !== "undefined" ? window.location.href : "")}`}
              target="_blank"
              rel="noopener"
              aria-label="Share on Facebook"
              style={{ color: "#3A8DDE" }}
            >
              Facebook
            </a>
            <a
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(typeof window !== "undefined" ? window.location.href : "")}&text=${encodeURIComponent(currentPost.title)}`}
              target="_blank"
              rel="noopener"
              aria-label="Share on Twitter"
              style={{ color: "#3A8DDE" }}
            >
              Twitter
            </a>
            <a
              href={`mailto:?subject=${encodeURIComponent(currentPost.title)}&body=${encodeURIComponent(typeof window !== "undefined" ? window.location.href : "")}`}
              aria-label="Share by Email"
              style={{ color: "#3A8DDE" }}
            >
              Email
            </a>
          </div>
        </article>
      )}
      {/* Related Posts Section */}
      {isPostPage && relatedPosts && relatedPosts.length > 0 && (
        <section style={{ marginBottom: "2.5rem" }}>
          <h2>Related Posts</h2>
          <div style={{ display: "flex", gap: "2rem", flexWrap: "wrap" }}>
            {relatedPosts.map((post) => (
              <div
                key={post.slug}
                style={{
                  background: "#F7F9FC",
                  borderRadius: "8px",
                  padding: "1rem",
                  minWidth: 220,
                  maxWidth: 340,
                }}
              >
                <h3
                  style={{
                    fontSize: "1.1rem",
                    color: "#0A2540",
                    marginBottom: "0.5rem",
                  }}
                >
                  {post.title}
                </h3>
                <p
                  style={{
                    color: "#666",
                    fontSize: "0.98rem",
                    marginBottom: "0.5rem",
                  }}
                >
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
      <section
        style={{
          marginBottom: "2.5rem",
          background: "#F7F9FC",
          borderRadius: "8px",
          padding: "2rem 1rem",
          textAlign: "center",
        }}
      >
        <h2>Automate Your Real Estate Insights</h2>
        <p
          style={{
            color: "#0A2540",
            fontSize: "1.08rem",
            marginBottom: "1rem",
          }}
        >
          Subscribe to our personalized RSS feed for the latest blog posts and
          market updates, or automate your email newsletter with our feed.
        </p>
        <a
          href="https://www.simplifyingthemarket.com/en/feed?a=956758-ef2edda2f940e018328655620ea05f18"
          target="_blank"
          rel="noopener"
          className={styles.cta}
          style={{ display: "inline-block", marginTop: "0.5rem" }}
        >
          View RSS Feed
        </a>
      </section>
    </div>
  );
}
