"use client";
import dynamic from 'next/dynamic';
import Head from 'next/head';
import styles from '../page.module.css';
import Image from 'next/image';
import Link from 'next/link';
import RealScoutAdvancedSearch from '../../components/ui/RealScoutAdvancedSearch';
const LatestMarketInsights = dynamic(() => import('../../components/ui/LatestMarketInsights'), { ssr: false });

const LeadCaptureForm = dynamic(() => import('../../components/ui/LeadCaptureForm'), { ssr: false });

export default function MarketReport() {
  return (
    <div className={styles.page}>
      <Head>
        <title>Summerlin Market Report | Current Trends & Analysis | Summerlin West Real Estate</title>
        <meta name="description" content="Get the latest Summerlin real estate market report with current trends, pricing data, and expert analysis. Download your free market report today." />
        <meta property="og:title" content="Summerlin Market Report | Current Trends & Analysis | Summerlin West Real Estate" />
        <meta property="og:description" content="Get the latest Summerlin real estate market report with current trends, pricing data, and expert analysis. Download your free market report today." />
      </Head>
      
      <div className={styles.mainContent}>
        <section className={styles.hero}>
          <h1>Summerlin Market Report</h1>
          <p className={styles.subtitle}>Your comprehensive guide to the current Summerlin real estate market</p>
        </section>
        
        <LatestMarketInsights />

        {/* Current Market Statistics */}
        <section className={styles.sectionCard}>
          <h2>Current Market Statistics</h2>
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>312</div>
              <div className={styles.statLabel}>Active Listings</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>28</div>
              <div className={styles.statLabel}>Median Days on Market</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>$675K</div>
              <div className={styles.statLabel}>Median Sale Price</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>97%</div>
              <div className={styles.statLabel}>List-to-Sale Ratio</div>
            </div>
          </div>
        </section>

        {/* Market Trends Summary */}
        <section className={styles.sectionCard}>
          <h2>Key Market Trends</h2>
          <div className={styles.marketAnalysis}>
            <div className={styles.analysisSection}>
              <strong>Market Overview</strong>
              <p>The Summerlin real estate market continues to show strong fundamentals with low inventory and high demand driving competitive pricing. New construction is helping to meet demand, but resale homes remain highly sought after.</p>
            </div>
            <div className={styles.analysisSection}>
              <strong>Price Trends</strong>
              <p>Median home prices have increased 8.5% year-over-year, with luxury segments ($1M+) showing the strongest appreciation. Entry-level homes are experiencing the most competition with multiple offers common.</p>
            </div>
            <div className={styles.analysisSection}>
              <strong>Inventory Status</strong>
              <p>Active listings are down 15% compared to last year, creating a seller's market. New construction communities like Redpoint and Stonebridge are helping to increase supply, but demand continues to outpace availability.</p>
            </div>
          </div>
        </section>

        {/* Download Full Report */}
        <section className={styles.sectionCard}>
          <h2 className={styles.centerTitle}>Download Your Complete Market Report</h2>
          <LeadCaptureForm 
            variant="inline"
            title="Get Your Free Summerlin Market Report"
            subtitle="Receive a detailed PDF with neighborhood breakdowns, price trends, and expert analysis."
            source="Market Report Download"
          />
        </section>

        {/* Neighborhood Highlights */}
        <section className={styles.sectionCard}>
          <h2>Top Performing Neighborhoods</h2>
          <div className={styles.featuredListingsGrid}>
            {[
              { name: "Redpoint", price: "$850K", change: "+12%", status: "Hot Market" },
              { name: "Stonebridge", price: "$725K", change: "+9%", status: "Active" },
              { name: "The Cliffs", price: "$1.2M", change: "+15%", status: "Luxury" },
              { name: "The Vistas", price: "$950K", change: "+8%", status: "Established" }
            ].map((neighborhood, index) => (
              <div key={index} className={styles.featuredListingCard}>
                <div className={styles.listingContent}>
                  <h3 className={styles.listingTitle}>{neighborhood.name}</h3>
                  <p className={styles.listingPrice}>{neighborhood.price}</p>
                  <p className={styles.listingDetails}>Median Price • {neighborhood.change} YoY</p>
                  <span className={styles.listingStatus}>{neighborhood.status}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className={styles.sectionCard}>
          <h2 className={styles.centerTitle}>Stay Updated with Monthly Reports</h2>
          <LeadCaptureForm 
            variant="inline"
            title="Subscribe to Monthly Market Updates"
            subtitle="Get the latest market trends, new listings, and expert insights delivered to your inbox."
            source="Market Report Newsletter"
          />
        </section>

        {/* Related Resources */}
        <section className={styles.sectionCard}>
          <h2>Explore More Market Resources</h2>
          <ul className={styles.resourceLinks}>
            <li><Link href="/market-reports">View All Market Reports</Link></li>
            <li><Link href="/properties">Browse Current Listings</Link></li>
            <li><Link href="/sold">See Recently Sold Homes</Link></li>
            <li><Link href="/communities">Explore Summerlin Communities</Link></li>
            <li><Link href="/contact">Get a Custom Market Analysis</Link></li>
          </ul>
        </section>

        <RealScoutAdvancedSearch 
          title="Search Current Market Listings"
          subtitle="Find properties matching your criteria"
          variant="page"
          showFeatures={true}
        />
      </div>
    </div>
  );
} 