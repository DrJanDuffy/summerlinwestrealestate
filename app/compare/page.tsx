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

export default function Compare() {
  return (
    <div className={styles.page}>
      <Head>
        <title>Compare Summerlin Homes | Summerlin West Real Estate</title>
        <meta
          name="description"
          content="Compare homes for sale in Summerlin West. Analyze features, prices, and neighborhoods to find your perfect Summerlin home with expert guidance."
        />
        <meta
          property="og:title"
          content="Compare Summerlin Homes | Summerlin West Real Estate"
        />
        <meta
          property="og:description"
          content="Compare homes for sale in Summerlin West. Analyze features, prices, and neighborhoods to find your perfect Summerlin home with expert guidance."
        />
      </Head>
      <Header />
      <main className={styles.luxuryMainContent}>
        <SummerlinWestOverview />
        <section className={`${styles.hero} ${styles.luxuryHero} ${styles.heroMargin}`}>
          <h1 className={styles.luxuryHeroTitle}>Compare Summerlin Homes</h1>
          <p className={styles.luxurySubtitle}>
            Analyze features, prices, and neighborhoods side by side
          </p>
        </section>
        <section className={styles.sectionCard}>
          <LatestMarketInsights />
        </section>
        <section className={styles.sectionCard}>
          <h2 className={styles.luxurySectionTitle}>Featured Comparisons</h2>
          <div className={styles.propertyGrid}>
            {[1, 2, 3].map((i) => (
              <div key={i} className={styles.propertyCard}>
                <Image
                  src={`https://placehold.co/400x220?text=Home+${i}`}
                  alt={`Compare Summerlin home ${i}`}
                  width={400}
                  height={220}
                  className={styles.propertyImage}
                />
                <div className={styles.propertyInfo}>
                  <h3 className={styles.propertyTitle}>Home #{i}</h3>
                  <p className={styles.propertyDetails}>
                    4 bed &bull; 3 bath &bull; $900,000+
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className={`${styles.sectionCard} ${styles.lightBackground}`}>
          <h2 className={styles.luxurySectionTitle}>How to Choose the Right Home</h2>
          <ul className={styles.featureList}>
            <li>Compare by price, size, and features</li>
            <li>Evaluate neighborhood amenities and schools</li>
            <li>Consider resale value and market trends</li>
            <li>Get expert advice for your unique needs</li>
          </ul>
        </section>
        <section className={`${styles.sectionCard} ${styles.whiteBackground}`}>
          <h2 className={styles.luxurySectionTitle}>Explore More</h2>
          <ul className={styles.linkList}>
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
              <Link href="/contact">Contact for Home Advice</Link>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
