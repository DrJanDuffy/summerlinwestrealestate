"use client";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../page.module.css";
import LatestMarketInsightsClient from '../../components/ui/LatestMarketInsightsClient';

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
      <section className={styles.hero}>
        <h1>Compare Summerlin Homes</h1>
        <p className={styles.subtitle}>Analyze features, prices, and neighborhoods side by side</p>
      </section>
      <LatestMarketInsightsClient />
      <section className={styles.sectionCard}>
        <h2 className={styles.centerTitle}>Featured Comparisons</h2>
        <div className={styles.comparisonGrid} aria-label="Featured home comparisons">
          {[1,2,3].map((i) => (
            <article key={i} className={styles.comparisonCard}>
              <Image src={`https://placehold.co/400x220?text=Home+${i}`} alt={`Compare Summerlin home ${i}`} width={400} height={220} className={styles.comparisonImage} />
              <div className={styles.comparisonContent}>
                <h3 className={styles.comparisonTitle}>Home #{i}</h3>
                <p className={styles.comparisonDetails}>4 bed &bull; 3 bath &bull; $900,000+</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className={styles.sectionCard}>
        <h2 className={styles.centerTitle}>How to Choose the Right Home</h2>
        <ul className={styles.featureList}>
          <li>Compare by price, size, and features</li>
          <li>Evaluate neighborhood amenities and schools</li>
          <li>Consider resale value and market trends</li>
          <li>Get expert advice for your unique needs</li>
        </ul>
      </section>
      <section className={styles.sectionCard}>
        <h2 className={styles.centerTitle}>Explore More</h2>
        <ul className={styles.linkList} aria-label="Explore more links">
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
    </div>
  );
}
