"use client";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../page.module.css";
import dynamic from "next/dynamic";
const LatestMarketInsights = dynamic(
  () => import("../../components/ui/LatestMarketInsights"),
  { ssr: false },
);

export default function Sold() {
  return (
    <div className={styles.page}>
      <Head>
        <title>
          Recently Sold Homes in Summerlin | Summerlin West Real Estate
        </title>
        <meta
          name="description"
          content="See recently sold homes in Summerlin West. View sale prices, days on market, and market trends for buyers and sellers in Summerlin real estate."
        />
        <meta
          property="og:title"
          content="Recently Sold Homes in Summerlin | Summerlin West Real Estate"
        />
        <meta
          property="og:description"
          content="See recently sold homes in Summerlin West. View sale prices, days on market, and market trends for buyers and sellers in Summerlin real estate."
        />
      </Head>

      <div className={styles.mainContent}>
        <section className={styles.sectionCard}>
          <h1>Recently Sold Homes in Summerlin</h1>
          <p className={styles.subtitle}>
            Track the latest sales and market activity in Summerlin West
          </p>
        </section>

        <section className={styles.sectionCard}>
          <LatestMarketInsights />
        </section>

        <section className={styles.sectionCard}>
          <h2>Sold Listings</h2>
          <div className={styles.featuredListingsGrid}>
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className={styles.featuredListingCard}>
                <Image
                  src={`https://placehold.co/400x220?text=Sold+Home+${i}`}
                  alt={`Recently sold home in Summerlin ${i}`}
                  width={400}
                  height={220}
                  className={styles.featuredListingImage}
                />
                <div className={styles.listingContent}>
                  <h3 className={styles.listingTitle}>Sold Home #{i}</h3>
                  <p className={styles.listingDetails}>
                    Sold for $${800000 + i * 10000} &bull; 4 bed &bull; 3 bath
                  </p>
                  <span className={styles.listingDate}>
                    Closed: {2024 - i}-04-0{i + 1}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.sectionCard}>
          <h2>Summerlin Market Trends</h2>
          <ul className={styles.contentList}>
            <li>Median sale price: $850,000</li>
            <li>Average days on market: 14</li>
            <li>List-to-sale price ratio: 98%</li>
            <li>Low inventory, high demand in Summerlin West</li>
          </ul>
        </section>

        <section className={styles.sectionCard}>
          <h2>Explore More</h2>
          <ul className={styles.resourceLinks}>
            <li>
              <Link href="/market-reports">Summerlin Market Reports</Link>
            </li>
            <li>
              <Link href="/current-listing">Featured Home for Sale</Link>
            </li>
            <li>
              <Link href="/about">Meet Your Summerlin Expert</Link>
            </li>
            <li>
              <Link href="/contact">Contact for a Home Value Report</Link>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
