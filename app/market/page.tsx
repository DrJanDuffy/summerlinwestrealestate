"use client";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../page.module.css";
import dynamic from "next/dynamic";
import Header from "@/components/layout/Header";
import SummerlinWestOverview from "@/components/ui/SummerlinWestOverview";
const LatestMarketInsights = dynamic(
  () => import("../../components/ui/LatestMarketInsights"),
  { ssr: false },
);

export default function Market() {
  return (
    <div className={styles.mainContent}>
      <Head>
        <title>Summerlin Real Estate Market | Trends & Analysis</title>
        <meta
          name="description"
          content="Get the latest Summerlin real estate market trends, home values, and expert analysis. Stay informed about Summerlin West housing market conditions."
        />
        <meta
          property="og:title"
          content="Summerlin Real Estate Market | Trends & Analysis"
        />
        <meta
          property="og:description"
          content="Get the latest Summerlin real estate market trends, home values, and expert analysis. Stay informed about Summerlin West housing market conditions."
        />
      </Head>
      <Header />
      <main className={styles.luxuryMainContent}>
        <SummerlinWestOverview />
        <section className={styles.sectionCard}>
          <h1 className={styles.luxuryHeroTitle}>Summerlin Real Estate Market</h1>
          <p className={styles.luxurySubtitle}>
            Trends, home values, and expert analysis for Summerlin West
          </p>
        </section>
        <section className={styles.sectionCard}>
          <LatestMarketInsights />
        </section>
        <section className={styles.sectionCard}>
          <h2 className={styles.luxurySectionTitle}>Current Market Trends</h2>
          <Image
            src="https://placehold.co/800x300?text=Market+Trends"
            alt="Summerlin real estate market trends graph"
            width={800}
            height={300}
            className={styles.featureImage}
          />
          <ul className={styles.featureList}>
            <li>Median home price: $850,000</li>
            <li>Average days on market: 14</li>
            <li>Inventory: Low, with high buyer demand</li>
            <li>List-to-sale price ratio: 98%</li>
          </ul>
        </section>
        <section className={styles.sectionCard}>
          <h2 className={styles.luxurySectionTitle}>Expert Market Insights</h2>
          <ul className={styles.featureList}>
            <li>Summerlin West remains a top choice for families and professionals</li>
            <li>Strong appreciation and resale value</li>
            <li>New construction and resale opportunities</li>
            <li>Contact for a personalized market report</li>
          </ul>
        </section>
        <section className={styles.sectionCard}>
          <h2 className={styles.luxurySectionTitle}>Explore More</h2>
          <ul className={styles.linkList}>
            <li><Link href="/market-reports">Summerlin Market Reports</Link></li>
            <li><Link href="/current-listing">Featured Home for Sale</Link></li>
            <li><Link href="/about">Meet Your Summerlin Expert</Link></li>
            <li><Link href="/contact">Contact for Market Insights</Link></li>
          </ul>
        </section>
      </main>
    </div>
  );
}
