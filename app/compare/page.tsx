import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import LatestMarketInsightsClient from '../../components/ui/LatestMarketInsightsClient';
import styles from '../page.module.css';

export const metadata: Metadata = {
  title: 'Compare Summerlin Homes | Summerlin West Real Estate',
  description:
    'Compare homes for sale in Summerlin West. Analyze features, prices, and neighborhoods to find your perfect Summerlin home with expert guidance.',
  keywords: [
    'compare Summerlin homes',
    'Summerlin West home comparison',
    'luxury home comparison',
    'The Vistas vs Stonebridge',
    'Summerlin West neighborhoods',
    'home comparison tool',
    'luxury real estate comparison',
    'Dr. Jan Duffy home comparison',
    'Summerlin West communities',
    'Las Vegas luxury home comparison'
  ],
  alternates: {
    canonical: '/compare',
  },
  openGraph: {
    title: 'Compare Summerlin Homes | Summerlin West Real Estate',
    description:
      'Compare homes for sale in Summerlin West. Analyze features, prices, and neighborhoods to find your perfect Summerlin home with expert guidance.',
    url: 'https://www.summerlinwestrealestate.com/compare',
    siteName: 'Summerlin West Real Estate',
    images: [
      {
        url: '/images/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Compare Summerlin Homes',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compare Summerlin Homes | Summerlin West Real Estate',
    description:
      'Compare homes for sale in Summerlin West. Analyze features, prices, and neighborhoods to find your perfect Summerlin home with expert guidance.',
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

export default function Compare() {
  return (
    <div className={styles.page}>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            {
              '@context': 'https://schema.org',
              '@type': 'CollectionPage',
              name: 'Compare Summerlin Homes',
              description:
                'Compare homes for sale in Summerlin West. Analyze features, prices, and neighborhoods to find your perfect Summerlin home with expert guidance.',
              url: 'https://summerlinwestrealestate.com/compare',
            },
            null,
            2
          ),
        }}
      />
      <section className={styles.hero}>
        <h1>Compare Summerlin Homes</h1>
        <p className={styles.subtitle}>Analyze features, prices, and neighborhoods side by side</p>
      </section>
      {/* Dr. Jan Duffy Callout Section */}
      <section className={`${styles.sectionCard} ${styles.calloutSection}`}>
        <h2>Meet Your Summerlin West Real Estate Expert</h2>
        <p>
          <strong>Dr. Jan Duffy, REALTOR®</strong> has helped families discover luxury living at the
          gateway to Red Rock Canyon since 2015. As a longtime resident and doctorate-level
          educator, she brings analytical precision and deep local knowledge to every transaction.
          Specializing in{' '}
          <strong>The Ridges, Red Rock Country Club, The Vistas, and The Paseos</strong>, Dr. Duffy
          is your go-to resource for buying or selling in Summerlin West.
        </p>
        <p className={styles.calloutHighlight}>Ready to make your move in Summerlin West?</p>
        <p>
          <strong>
            Contact Dr. Jan Duffy today for your complimentary market consultation and discover your
            dream home or get top dollar for your property.
          </strong>
        </p>
        <p>
          <Link href="/contact">Contact Dr. Jan Duffy &rarr;</Link>
        </p>
      </section>
      <LatestMarketInsightsClient />
      <section className={styles.sectionCard}>
        <h2 className={styles.centerTitle}>Featured Comparisons</h2>
        <div className={styles.comparisonGrid} aria-label="Featured home comparisons">
          {[1, 2, 3].map((i) => (
            <article key={i} className={styles.comparisonCard}>
              <Image
                src={i === 1 ? 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80' : i === 2 ? 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80' : 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80'}
                alt={`Compare Summerlin home ${i}`}
                width={400}
                height={220}
                className={styles.comparisonImage}
              />
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
