import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import LatestMarketInsightsClient from '../../components/ui/LatestMarketInsightsClient';
import styles from './market.module.css';

// Disable SSR for this page to prevent prerendering issues
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Summerlin Real Estate Market | Trends & Analysis | Dr. Jan Duffy',
  description:
    'Get the latest Summerlin real estate market trends, home values, and expert analysis. Stay informed about Summerlin West housing market conditions.',
  keywords: [
    'Summerlin real estate market',
    'Summerlin West market trends',
    'Las Vegas housing market',
    'The Vistas market analysis',
    'Stonebridge market trends',
    'luxury real estate market',
    'Dr. Jan Duffy market insights',
    'Summerlin West home values',
    'Las Vegas real estate trends',
    'Summerlin market conditions',
  ],
  alternates: {
    canonical: '/market',
  },
  openGraph: {
    title: 'Summerlin Real Estate Market | Trends & Analysis | Dr. Jan Duffy',
    description:
      'Get the latest Summerlin real estate market trends, home values, and expert analysis. Stay informed about Summerlin West housing market conditions.',
    url: 'https://www.summerlinwestrealestate.com/market',
    siteName: 'Summerlin West Real Estate',
    images: [
      {
        url: '/images/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Summerlin Real Estate Market Analysis',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Summerlin Real Estate Market | Trends & Analysis | Dr. Jan Duffy',
    description:
      'Get the latest Summerlin real estate market trends, home values, and expert analysis.',
    images: ['/images/og-image.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function Market() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <h1>Summerlin Real Estate Market</h1>
        <p className={styles.subtitle}>
          Trends, home values, and expert analysis for Summerlin West
        </p>
      </section>
      <LatestMarketInsightsClient />
      <section className={styles.sectionCard}>
        <h2>Current Market Trends</h2>
        <Image
          src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80"
          alt="Summerlin real estate market trends graph"
          width={800}
          height={300}
          className={styles.trendsGraphImage}
        />
        <ul className={styles.contentList}>
          <li>Median home price: $850,000</li>
          <li>Average days on market: 14</li>
          <li>Inventory: Low, with high buyer demand</li>
          <li>List-to-sale price ratio: 98%</li>
        </ul>
      </section>
      <section className={styles.sectionCard}>
        <h2>Expert Market Insights</h2>
        <ul className={styles.contentList}>
          <li>Summerlin West remains a top choice for families and professionals</li>
          <li>Strong appreciation and resale value</li>
          <li>New construction and resale opportunities</li>
          <li>Contact for a personalized market report</li>
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
            <Link href="/contact">Contact for Market Insights</Link>
          </li>
        </ul>
      </section>
    </div>
  );
}
