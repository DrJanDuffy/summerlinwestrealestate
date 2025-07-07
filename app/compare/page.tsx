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
      <section className={styles.hero} style={{marginBottom: '2rem'}}>
        <h1>Compare Summerlin Homes</h1>
        <p className={styles.subtitle}>Analyze features, prices, and neighborhoods side by side</p>
      </section>
      <LatestMarketInsightsClient />
      <section style={{marginBottom: '2.5rem'}}>
        <h2>Featured Comparisons</h2>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem', maxWidth: '900px', margin: '0 auto'}}>
          {[1,2,3].map((i) => (
            <div key={i} style={{borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', background: '#fff'}}>
              <Image src={`https://placehold.co/400x220?text=Home+${i}`} alt={`Compare Summerlin home ${i}`} width={400} height={220} style={{width: '100%', height: 'auto', display: 'block'}} />
              <div style={{padding: '1rem'}}>
                <h3 style={{margin: 0}}>Home #{i}</h3>
                <p style={{fontSize: '0.98rem', color: '#0A2540'}}>4 bed &bull; 3 bath &bull; $900,000+</p>
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
    </div>
  );
}
