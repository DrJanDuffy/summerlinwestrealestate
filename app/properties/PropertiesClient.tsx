'use client';
// import Image from 'next/image';
import Link from 'next/link';
import styles from './Properties.module.css';

// Import RealScout components
// Import SEO Optimizer
// Import additional RealScout components
export default function PropertiesClient() {
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
            Discover real-time listings from the MLS. From contemporary estates to traditional
            masterpieces, find your perfect home in Summerlin West with up-to-date inventory and
            pricing.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 text-center">
            <h3 className="text-xl font-semibold text-blue-900 mb-4">
              Property Search Coming Soon
            </h3>
            <p className="text-blue-700 mb-6">
              We're updating our property search system. In the meantime, contact Dr. Jan Duffy for
              personalized assistance.
            </p>
            <a
              href="tel:702-550-0112"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              📞 Call (702) 550-0112
            </a>
          </div>
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
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 text-center">
                  <h3 className="text-xl font-semibold text-blue-900 mb-4">
                    Property Search Coming Soon
                  </h3>
                  <p className="text-blue-700 mb-6">
                    We're updating our property search system. In the meantime, contact Dr. Jan
                    Duffy for personalized assistance.
                  </p>
                  <a
                    href="tel:702-550-0112"
                    className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
                  >
                    📞 Call (702) 550-0112
                  </a>
                </div>
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

            <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 text-center">
              <h3 className="text-xl font-semibold text-blue-900 mb-4">
                Property Search Coming Soon
              </h3>
              <p className="text-blue-700 mb-6">
                We're updating our property search system. In the meantime, contact Dr. Jan Duffy
                for personalized assistance.
              </p>
              <a
                href="tel:702-550-0112"
                className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
              >
                📞 Call (702) 550-0112
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Property Valuation Section */}
      <section className={styles.marketInsights}>
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>Get Your Home Valuation</h2>
          <p className={styles.sectionSubtitle}>
            Discover your home's current market value with our advanced analysis
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 text-center">
            <h3 className="text-xl font-semibold text-blue-900 mb-4">
              Property Search Coming Soon
            </h3>
            <p className="text-blue-700 mb-6">
              We're updating our property search system. In the meantime, contact Dr. Jan Duffy for
              personalized assistance.
            </p>
            <a
              href="tel:702-550-0112"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              📞 Call (702) 550-0112
            </a>
          </div>
        </div>
      </section>

      {/* SEO Optimized RealScout Widgets */}
      <section className={styles.marketInsights}>
        <div className={styles.sectionContainer}>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 text-center">
            <h3 className="text-xl font-semibold text-blue-900 mb-4">
              Property Search Coming Soon
            </h3>
            <p className="text-blue-700 mb-6">
              We're updating our property search system. In the meantime, contact Dr. Jan Duffy for
              personalized assistance.
            </p>
            <a
              href="tel:702-550-0112"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              📞 Call (702) 550-0112
            </a>
          </div>
        </div>
      </section>

      {/* Comprehensive Property Listings */}
      <section className={styles.marketInsights}>
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>All Summerlin West Properties</h2>
          <p className={styles.sectionSubtitle}>
            Browse our complete inventory of Summerlin West properties. From entry-level homes to
            luxury estates, find the perfect property that matches your budget and lifestyle
            requirements.
          </p>
          {/* @ts-ignore - RealScout web component */}

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 text-center">
            <h3 className="text-xl font-semibold text-blue-900 mb-4">
              Property Search Coming Soon
            </h3>
            <p className="text-blue-700 mb-6">
              We're updating our property search system. In the meantime, contact Dr. Jan Duffy for
              personalized assistance.
            </p>
            <a
              href="tel:702-550-0112"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              📞 Call (702) 550-0112
            </a>
          </div>
        </div>
      </section>

      {/* Advanced Property Search */}
      <section className={styles.marketInsights}>
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>Advanced Property Search</h2>
          <p className={styles.sectionSubtitle}>
            Use our comprehensive search tool to find properties that match your specific criteria.
            Filter by price, location, features, and more to discover your perfect home.
          </p>
          {/* @ts-ignore - RealScout web component */}

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 text-center">
            <h3 className="text-xl font-semibold text-blue-900 mb-4">
              Property Search Coming Soon
            </h3>
            <p className="text-blue-700 mb-6">
              We're updating our property search system. In the meantime, contact Dr. Jan Duffy for
              personalized assistance.
            </p>
            <a
              href="tel:702-550-0112"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              📞 Call (702) 550-0112
            </a>
          </div>
        </div>
      </section>

      {/* Simple Property Search */}
      <section className={styles.marketInsights}>
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>Quick Property Search</h2>
          <p className={styles.sectionSubtitle}>
            Start your property search with our simple, user-friendly search tool. Perfect for quick
            browsing of available properties in Summerlin West.
          </p>
          {/* @ts-ignore - RealScout web component */}

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 text-center">
            <h3 className="text-xl font-semibold text-blue-900 mb-4">
              Property Search Coming Soon
            </h3>
            <p className="text-blue-700 mb-6">
              We're updating our property search system. In the meantime, contact Dr. Jan Duffy for
              personalized assistance.
            </p>
            <a
              href="tel:702-550-0112"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              📞 Call (702) 550-0112
            </a>
          </div>
        </div>
      </section>

      {/* Additional Property Search Options */}
      <section className={styles.marketInsights}>
        <div className={styles.sectionContainer}>
          <h2 className={styles.sectionTitle}>Broader Market Options in Summerlin West</h2>
          <p className={styles.sectionSubtitle}>
            Explore additional residential properties across Summerlin West communities. From
            entry-level homes to luxury estates, discover all available options in this premier
            master-planned community.
          </p>
          {/* @ts-ignore - RealScout web component */}

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 text-center">
            <h3 className="text-xl font-semibold text-blue-900 mb-4">
              Property Search Coming Soon
            </h3>
            <p className="text-blue-700 mb-6">
              We're updating our property search system. In the meantime, contact Dr. Jan Duffy for
              personalized assistance.
            </p>
            <a
              href="tel:702-550-0112"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              📞 Call (702) 550-0112
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
