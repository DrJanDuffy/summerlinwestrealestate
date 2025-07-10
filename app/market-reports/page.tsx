"use client";
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import LatestMarketInsightsClient from '../../components/ui/LatestMarketInsightsClient';
import dynamic from 'next/dynamic';
import RealScoutAdvancedSearch from "../../components/ui/RealScoutAdvancedSearch";
import styles from "../page.module.css";
const LeadCaptureForm = dynamic(() => import("../../components/ui/LeadCaptureForm"), { ssr: false });

export default function MarketReports() {
  return (
    <div className={styles.page}>
      <Head>
        <title>
          Summerlin Market Reports & Trends | Summerlin West Real Estate
        </title>
        <meta
          name="description"
          content="Get the latest Summerlin real estate market reports, trends, and expert analysis. Download detailed reports and sign up for the Summerlin market newsletter."
        />
        <meta
          property="og:title"
          content="Summerlin Market Reports & Trends | Summerlin West Real Estate"
        />
        <meta
          property="og:description"
          content="Get the latest Summerlin real estate market reports, trends, and expert analysis. Download detailed reports and sign up for the Summerlin market newsletter."
        />
        <link rel="canonical" href="https://summerlinwestrealestate.com/market-reports" />
        <meta name="robots" content="index, follow" />
      </Head>
      <section className={styles.hero}>
        <h1>Summerlin Market Reports</h1>
        <p className={styles.subtitle}>Get the latest insights, trends, and data for the Summerlin real estate market</p>
      </section>
      {/* Dr. Jan Duffy Callout Section */}
      <section className={`${styles.sectionCard} ${styles.calloutSection}`}>
        <h2>Meet Your Summerlin West Real Estate Expert</h2>
        <p><strong>Dr. Jan Duffy, REALTOR®</strong> has helped families discover luxury living at the gateway to Red Rock Canyon since 2015. As a longtime resident and doctorate-level educator, she brings analytical precision and deep local knowledge to every transaction.</p>
        <p>Specializing in <strong>The Ridges, Red Rock Country Club, The Vistas, and The Paseos</strong>, Dr. Duffy is your go-to resource for buying or selling in Summerlin West.</p>
        <p><Link href="/about">Learn more about Dr. Duffy &rarr;</Link></p>
      </section>
      <LatestMarketInsightsClient />
      <section className={styles.sectionCard}>
        <h2>Current Market Statistics</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
          <div className="card p-6 text-center">
            <div className="text-3xl font-extrabold text-brand-600">312</div>
            <div className="text-sm text-text-secondary mt-1">Active Listings</div>
          </div>
          <div className="card p-6 text-center">
            <div className="text-3xl font-extrabold text-brand-600">14</div>
            <div className="text-sm text-text-secondary mt-1">Avg Days on Market</div>
          </div>
          <div className="card p-6 text-center">
            <div className="text-3xl font-extrabold text-brand-600">$850K</div>
            <div className="text-sm text-text-secondary mt-1">Median Home Price</div>
          </div>
          <div className="card p-6 text-center">
            <div className="text-3xl font-extrabold text-brand-600">98%</div>
            <div className="text-sm text-text-secondary mt-1">List-to-Sale Ratio</div>
          </div>
        </div>
      </section>
      <section className={styles.sectionCard}>
        <h2>Frequently Asked Questions</h2>
        <ul className={styles.contentList}>
          <li><strong>What are the best neighborhoods in Summerlin West?</strong><br/>Popular neighborhoods include The Vistas, Redpoint, Stonebridge, The Cliffs, and Reverence. Each offers unique amenities and lifestyle options.</li>
          <li><strong>What is the average home price in Summerlin West?</strong><br/>The median home price is around $850,000, with luxury homes reaching $2M+.</li>
          <li><strong>Are there new construction homes available?</strong><br/>Yes! New construction is available in Redpoint, Stonebridge, and The Cliffs. Contact us for the latest releases and builder incentives.</li>
          <li><strong>How do I schedule a home tour?</strong><br/>Contact us via the form or call to schedule a private showing of any property.</li>
          <li><strong>What makes Summerlin West special?</strong><br/>Master-planned communities, top-rated schools, Red Rock Canyon access, and a family-friendly lifestyle with excellent amenities.</li>
          <li><strong>How can I get a free market report?</strong><br/>Fill out the form on this page or visit our Market Reports section for a free analysis and insights.</li>
        </ul>
      </section>
      <section className={styles.sectionCard}>
        <h2>Monthly Market Trends</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Image
            src="https://placehold.co/400x220?text=Price+Trends"
            alt="Summerlin home price trends chart"
            width={400}
            height={220}
            className={styles.chartImage}
            priority
          />
          <Image
            src="https://placehold.co/400x220?text=Inventory+Trends"
            alt="Summerlin housing inventory trends chart"
            width={400}
            height={220}
            className={styles.chartImage}
          />
        </div>
      </section>
      <section className={styles.sectionCard}>
        <h2>Download the Full Summerlin Market Report</h2>
        <LeadCaptureForm
          variant="inline"
          title="Download the Full Market Report"
          subtitle="Get a detailed PDF with neighborhood breakdowns, price trends, and expert analysis."
          source="Market Reports Download"
          formId="download"
        />
      </section>
      <section className={styles.sectionCard}>
        <h2>Summerlin Market Analysis</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card p-6">
            <strong className="block mb-2">What's driving the market?</strong>
            <p className="text-text-secondary">
              Low inventory, high demand, and continued migration to Las Vegas
              are keeping prices strong. New construction is helping, but
              resale homes remain in high demand.
            </p>
          </div>
          <div className="card p-6">
            <strong className="block mb-2">Which neighborhoods are hottest?</strong>
            <p className="text-text-secondary">
              Redpoint, Stonebridge, and The Cliffs are seeing the fastest
              sales and highest appreciation. Luxury segments in The Ridges
              and Reverence are also performing well.
            </p>
          </div>
          <div className="card p-6">
            <strong className="block mb-2">What's the outlook?</strong>
            <p className="text-text-secondary">
              Experts predict continued growth, especially in walkable,
              amenity-rich communities. Mortgage rates and new builder
              incentives will shape the market in the coming months.
            </p>
          </div>
        </div>
      </section>
      <section className={styles.sectionCard}>
        <h2>Sign Up for the Summerlin Market Newsletter</h2>
        <LeadCaptureForm
          variant="inline"
          title="Subscribe to the Summerlin Market Newsletter"
          subtitle="Monthly updates, expert insights, and exclusive market data—straight to your inbox."
          source="Market Reports Newsletter"
          formId="newsletter"
        />
      </section>
      <section className={styles.sectionCard}>
        <h2>Explore More Summerlin Real Estate Resources</h2>
        <ul className={styles.resourceLinks}>
          <li>
            <Link href="/current-listing">See our current listing in The Vistas</Link>
          </li>
          <li>
            <Link href="/communities">Explore all Summerlin West communities</Link>
          </li>
          <li>
            <Link href="/about">Meet your Summerlin real estate expert</Link>
          </li>
          <li>
            <Link href="/contact">Contact for a custom market analysis</Link>
          </li>
        </ul>
      </section>
      <RealScoutAdvancedSearch
        title="Search Current Market Listings"
        subtitle="Find properties matching your criteria"
        variant="page"
        showFeatures={true}
      />
    </div>
  );
}
