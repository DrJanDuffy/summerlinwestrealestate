"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "../page.module.css";
import dynamic from "next/dynamic";
import Header from "@/components/layout/Header";
import SummerlinWestOverview from "@/components/ui/SummerlinWestOverview";

// Dynamic import for client components
const LatestMarketInsights = dynamic(
  () => import("../../components/ui/LatestMarketInsights"),
  { ssr: false }
);

export default function Sold() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.luxuryMainContent}>
        <SummerlinWestOverview />
        <section className={styles.sectionCard}>
          <h1 className={styles.luxuryHeroTitle}>Recently Sold Homes in Summerlin</h1>
          <p className={styles.luxurySubtitle}>
            Track the latest sales and market activity in Summerlin West
          </p>
        </section>
        
        <section className={styles.sectionCard}>
          <LatestMarketInsights />
        </section>
        
        <section className={styles.sectionCard}>
          <h2 className={styles.luxurySectionTitle}>Sold Listings</h2>
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
          <h2 className={styles.luxurySectionTitle}>Summerlin Market Trends</h2>
          <ul className={styles.contentList}>
            <li>Median sale price: $850,000</li>
            <li>Average days on market: 14</li>
            <li>List-to-sale price ratio: 98%</li>
            <li>Low inventory, high demand in Summerlin West</li>
          </ul>
        </section>
        
        <section className={styles.sectionCard}>
          <h2 className={styles.luxurySectionTitle}>Explore More</h2>
          <ul className={styles.resourceLinks}>
            <li><Link href="/market-reports">Summerlin Market Reports</Link></li>
            <li><Link href="/current-listing">Featured Home for Sale</Link></li>
            <li><Link href="/about">Meet Your Summerlin Expert</Link></li>
            <li><Link href="/contact">Contact for a Home Value Report</Link></li>
          </ul>
        </section>
      </main>
    </div>
  );
}
