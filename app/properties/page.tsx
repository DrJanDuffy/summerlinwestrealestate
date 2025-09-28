import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import styles from './Properties.module.css';

// Import RealScout components
const RealScoutOfficeListings = dynamic(
  () => import('../../components/ui/RealScoutOfficeListings'),
  {
    ssr: false,
    loading: () => (
      <div className="flex items-center justify-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    ),
  }
);

const RealScoutAdvancedSearchWidget = dynamic(
  () => import('../../components/ui/RealScoutAdvancedSearchWidget'),
  {
    ssr: false,
    loading: () => (
      <div className="flex items-center justify-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    ),
  }
);

export const metadata: Metadata = {
  title: 'Luxury Homes for Sale in Summerlin West | Dr. Jan Duffy REALTOR®',
  description:
    'Browse exclusive luxury homes for sale in Summerlin West! Dr. Jan Duffy, REALTOR® with $6B+ sales. The Vistas, Red Rock Canyon views, resort amenities. Call (702) 550-0112!',
  keywords: 'luxury properties, Summerlin West, Las Vegas real estate, The Vistas, luxury homes',
  openGraph: {
    title: 'Luxury Homes for Sale in Summerlin West | Dr. Jan Duffy REALTOR®',
    description:
      'Browse exclusive luxury homes for sale in Summerlin West! Dr. Jan Duffy, REALTOR® with $6B+ sales. The Vistas, Red Rock Canyon views, resort amenities. Call (702) 550-0112!',
    type: 'website',
  },
};

export default function Properties() {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Luxury Properties in Summerlin West</h1>
          <p className={styles.heroSubtitle}>
            Discover exclusive residences in Las Vegas's most prestigious master-planned community
          </p>
        </div>
      </section>

      {/* Real-Time Properties from MLS */}
      <section className={styles.propertiesOverview}>
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>Current Luxury Properties in Summerlin West</h2>
          <p className={styles.sectionSubtitle}>
            Discover real-time listings from the MLS. From contemporary estates to traditional masterpieces, 
            find your perfect home in Summerlin West with up-to-date inventory and pricing.
          </p>

          <RealScoutOfficeListings />
        </div>
      </section>

      {/* Property Search Options */}
      <section className={styles.searchOptions}>
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>Find Your Perfect Home</h2>
          <div className={styles.searchGrid}>
            <div className={styles.searchCard}>
              <h3 className={styles.searchTitle}>Current Listings</h3>
              <p className={styles.searchDescription}>
                Browse our exclusive collection of luxury properties currently on the market
              </p>
              <Link href="/current-listing" className={styles.searchButton}>
                View Current Listings
              </Link>
            </div>

            <div className={styles.searchCard}>
              <h3 className={styles.searchTitle}>Recent Sales</h3>
              <p className={styles.searchDescription}>
                Explore recently sold properties to understand market trends and pricing
              </p>
              <Link href="/sold" className={styles.searchButton}>
                View Recent Sales
              </Link>
            </div>

            <div className={styles.searchCard}>
              <h3 className={styles.searchTitle}>Advanced Search</h3>
              <p className={styles.searchDescription}>
                Use our comprehensive search tool to find properties matching your exact criteria
              </p>
              <div className={styles.realscoutWidget}>
                <RealScoutAdvancedSearchWidget />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Market Insights */}
      <section className={styles.marketInsights}>
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>Market Insights</h2>
          <div className={styles.insightsGrid}>
            <div className={styles.insightCard}>
              <h3 className={styles.insightTitle}>Average Sale Price</h3>
              <p className={styles.insightValue}>$1,850,000</p>
              <p className={styles.insightChange}>+12% vs. last year</p>
            </div>
            <div className={styles.insightCard}>
              <h3 className={styles.insightTitle}>Days on Market</h3>
              <p className={styles.insightValue}>45 days</p>
              <p className={styles.insightChange}>-8% vs. last year</p>
            </div>
            <div className={styles.insightCard}>
              <h3 className={styles.insightTitle}>Active Listings</h3>
              <p className={styles.insightValue}>127 homes</p>
              <p className={styles.insightChange}>+15% inventory</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className={styles.newsletterSection}>
        <div className={styles.sectionContainer}>
          <div className={styles.newsletterContent}>
            <h2 className={styles.newsletterTitle}>Stay Updated on New Listings</h2>
            <p className={styles.newsletterSubtitle}>
              Get exclusive access to new luxury properties before they hit the market
            </p>
            <div className={styles.newsletterForm}>
              <input
                type="email"
                placeholder="Enter your email address"
                className={styles.newsletterInput}
              />
              <button type="button" className={styles.newsletterButton}>
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
