"use client";
import dynamic from 'next/dynamic';
import Head from 'next/head';
import styles from '../page.module.css';
import Image from 'next/image';
import Link from 'next/link';
import RealScoutAdvancedSearch from '../../components/ui/RealScoutAdvancedSearch';
const LatestMarketInsights = dynamic(() => import('../../components/ui/LatestMarketInsights'), { ssr: false });

const LeadCaptureForm = dynamic(() => import('../../components/ui/LeadCaptureForm'), { ssr: false });

export default function MarketReports() {
  return (
    <div className={styles.page}>
      <Head>
        <title>Summerlin Market Reports & Trends | Summerlin West Real Estate</title>
        <meta name="description" content="Get the latest Summerlin real estate market reports, trends, and expert analysis. Download detailed reports and sign up for the Summerlin market newsletter." />
        <meta property="og:title" content="Summerlin Market Reports & Trends | Summerlin West Real Estate" />
        <meta property="og:description" content="Get the latest Summerlin real estate market reports, trends, and expert analysis. Download detailed reports and sign up for the Summerlin market newsletter." />
      </Head>
      <section className={styles.hero} style={{marginBottom: '2rem'}}>
        <h1>Summerlin Market Reports</h1>
        <p className={styles.subtitle}>Get the latest insights, trends, and data for the Summerlin real estate market</p>
      </section>
      <LatestMarketInsights />

      {/* Current Market Statistics */}
      <section style={{marginBottom: '2.5rem', background: '#F7F9FC', borderRadius: '8px', padding: '2rem 1rem'}}>
        <h2>Current Market Statistics</h2>
        <div style={{display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center'}}>
          <div style={{background: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', padding: '1.5rem 2rem', minWidth: 180, textAlign: 'center'}}>
            <div style={{fontSize: '2rem', fontWeight: 700, color: '#3A8DDE'}}>312</div>
            <div style={{color: '#0A2540', fontWeight: 500}}>Active Listings</div>
          </div>
          <div style={{background: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', padding: '1.5rem 2rem', minWidth: 180, textAlign: 'center'}}>
            <div style={{fontSize: '2rem', fontWeight: 700, color: '#16B286'}}>28</div>
            <div style={{color: '#0A2540', fontWeight: 500}}>Median Days on Market</div>
          </div>
          <div style={{background: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', padding: '1.5rem 2rem', minWidth: 180, textAlign: 'center'}}>
            <div style={{fontSize: '2rem', fontWeight: 700, color: '#0A2540'}}>$675K</div>
            <div style={{color: '#0A2540', fontWeight: 500}}>Median Sale Price</div>
          </div>
          <div style={{background: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', padding: '1.5rem 2rem', minWidth: 180, textAlign: 'center'}}>
            <div style={{fontSize: '2rem', fontWeight: 700, color: '#3A8DDE'}}>97%</div>
            <div style={{color: '#0A2540', fontWeight: 500}}>List-to-Sale Ratio</div>
          </div>
        </div>
      </section>

      {/* Monthly Market Trends Charts */}
      <section style={{marginBottom: '2.5rem'}}>
        <h2>Monthly Market Trends</h2>
        <div style={{display: 'flex', gap: '2rem', flexWrap: 'wrap', justifyContent: 'center'}}>
          <Image src="https://placehold.co/400x220?text=Price+Trends" alt="Summerlin home price trends chart" width={400} height={220} style={{borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)'}} priority />
          <Image src="https://placehold.co/400x220?text=Inventory+Trends" alt="Summerlin housing inventory trends chart" width={400} height={220} style={{borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)'}} />
        </div>
      </section>

      {/* Download Form for Detailed Reports */}
      <section style={{marginBottom: '2.5rem', background: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', padding: '2rem 1rem'}}>
        <h2 style={{textAlign: 'center', marginBottom: '1.5rem'}}>Download the Full Summerlin Market Report</h2>
        <LeadCaptureForm 
          variant="inline"
          title="Download the Full Market Report"
          subtitle="Get a detailed PDF with neighborhood breakdowns, price trends, and expert analysis."
          source="Market Reports Download"
        />
      </section>

      {/* Market Analysis Sections */}
      <section style={{marginBottom: '2.5rem'}}>
        <h2>Summerlin Market Analysis</h2>
        <div style={{color: '#0A2540', fontSize: '1.08rem', maxWidth: 800, margin: '0 auto'}}>
          <strong>What's driving the market?</strong>
          <p>Low inventory, high demand, and continued migration to Las Vegas are keeping prices strong. New construction is helping, but resale homes remain in high demand.</p>
          <strong>Which neighborhoods are hottest?</strong>
          <p>Redpoint, Stonebridge, and The Cliffs are seeing the fastest sales and highest appreciation. Luxury segments in The Ridges and Reverence are also performing well.</p>
          <strong>What's the outlook?</strong>
          <p>Experts predict continued growth, especially in walkable, amenity-rich communities. Mortgage rates and new builder incentives will shape the market in the coming months.</p>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section style={{marginBottom: '2.5rem', background: '#F7F9FC', borderRadius: '8px', padding: '2rem 1rem'}}>
        <h2 style={{textAlign: 'center', marginBottom: '1.5rem'}}>Sign Up for the Summerlin Market Newsletter</h2>
        <LeadCaptureForm 
          variant="inline"
          title="Subscribe to the Summerlin Market Newsletter"
          subtitle="Monthly updates, expert insights, and exclusive market data—straight to your inbox."
          source="Market Reports Newsletter"
        />
      </section>

      {/* Internal Links Section */}
      <section style={{marginBottom: '2.5rem', background: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', padding: '2rem 1rem'}}>
        <h2>Explore More Summerlin Real Estate Resources</h2>
        <ul style={{color: '#3A8DDE', fontWeight: 600, fontSize: '1.08rem', marginLeft: '1rem', listStyle: 'disc inside'}}>
          <li><Link href="/current-listing">See our current listing in The Vistas</Link></li>
          <li><Link href="/communities">Explore all Summerlin West communities</Link></li>
          <li><Link href="/about">Meet your Summerlin real estate expert</Link></li>
          <li><Link href="/contact">Contact for a custom market analysis</Link></li>
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