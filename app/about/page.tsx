"use client";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../page.module.css";
import LatestMarketInsightsClient from '../../components/ui/LatestMarketInsightsClient';
import TestimonialsSectionClient from '../../components/ui/TestimonialsSectionClient';

export default function About() {
  return (
    <div className={styles.page}>
      <Head>
        <title>
          About Your Summerlin Real Estate Expert | Summerlin West Real Estate
        </title>
        <meta
          name="description"
          content="Meet your Summerlin real estate expert. Learn about experience, local knowledge, and commitment to helping buyers and sellers in Summerlin West."
        />
        <meta
          property="og:title"
          content="About Your Summerlin Real Estate Expert | Summerlin West Real Estate"
        />
        <meta
          property="og:description"
          content="Meet your Summerlin real estate expert. Learn about experience, local knowledge, and commitment to helping buyers and sellers in Summerlin West."
        />
        <script type="application/ld+json" suppressHydrationWarning>{`
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Summerlin Real Estate Expert",
            "jobTitle": "Real Estate Agent",
            "worksFor": {
              "@type": "RealEstateAgent",
              "name": "Summerlin West Real Estate"
            },
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Summerlin",
              "addressRegion": "NV",
              "addressCountry": "US"
            },
            "description": "Local Summerlin real estate expert with 15+ years of experience helping buyers and sellers in Summerlin West."
          }
        `}</script>
      </Head>
      <section className={styles.hero}>
        <h1>About Your Summerlin Real Estate Expert</h1>
        <p className={styles.subtitle}>Local knowledge. Proven results. Personalized service.</p>
      </section>
      <div className={styles.container}>
        <div className={styles.newsList}>
          <div className={styles.newsCard}>
            <span className={styles.newsBadge}>News</span>
            <div className={styles.newsContent}>
              <h3>What You Should Know About Getting a Mortgage Today</h3>
              <div className={styles.newsDate}>7/7/2025</div>
              <p>If you've been putting off buying a home because you thought getting approved would be too hard, know this: qualifying for a mortgage is starting to get a bit more achievable, but lending standards are still strong.</p>
            </div>
          </div>
          <div className={styles.newsCard}>
            <span className={styles.newsBadge}>News</span>
            <div className={styles.newsContent}>
              <h3>Think No One's Buying Homes Right Now? Think Again.</h3>
              <div className={styles.newsDate}>7/3/2025</div>
              <p>If you've seen headlines saying home sales are down compared to last year, you might be thinking – is it even a good time to sell?</p>
            </div>
          </div>
          <div className={styles.newsCard}>
            <span className={styles.newsBadge}>News</span>
            <div className={styles.newsContent}>
              <h3>Why Big Investors Aren't a Challenge for Today's Homebuyer</h3>
              <div className={styles.newsDate}>7/2/2025</div>
              <p>Remember the chatter in the headlines about all the homes big institutional investors were buying? If you were thinking about buying a home yourself, you may have wondered how you'd ever be able to compete with that.</p>
            </div>
          </div>
        </div>
        <div className={styles.sectionCard}>
          <h2 className={styles.centerTitle}>What Our Clients Say</h2>
          <p className={styles.sectionSubtitle}>Real stories from real buyers and sellers</p>
          <TestimonialsSectionClient />
        </div>
        <div className={styles.sectionCard} style={{marginTop: '2.5rem'}}>
          <h2 className={styles.centerTitle}>Featured Summerlin Listings</h2>
          {/* The RealScoutWidget is rendered globally in layout, so this is just a heading for context */}
        </div>
      </div>
    </div>
  );
}
