"use client";
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../page.module.css';
const LatestMarketInsights = dynamic(() => import('../../components/ui/LatestMarketInsights'), { ssr: false });
const LeadCaptureForm = dynamic(() => import('../../components/ui/LeadCaptureForm'), { ssr: false });

export default function DowntownSummerlin() {
  return (
    <div className={styles.page}>
      <Head>
        <title>Downtown Summerlin Real Estate Guide | Shopping, Dining, Homes & Market</title>
        <meta name="description" content="Explore Downtown Summerlin: shopping, dining, entertainment, and real estate market trends. Find homes for sale and get your free Summerlin market report." />
        <meta property="og:title" content="Downtown Summerlin Real Estate Guide | Shopping, Dining, Homes & Market" />
        <meta property="og:description" content="Explore Downtown Summerlin: shopping, dining, entertainment, and real estate market trends. Find homes for sale and get your free Summerlin market report." />
      </Head>
      <section className={styles.hero} style={{marginBottom: '2rem'}}>
        <h1>Downtown Summerlin Real Estate Guide</h1>
        <p className={styles.subtitle}>Your comprehensive resource for living, shopping, and investing in Downtown Summerlin</p>
      </section>
      <LatestMarketInsights />

      {/* Shopping Section */}
      <section style={{marginBottom: '2.5rem'}}>
        <h2>Shopping in Downtown Summerlin</h2>
        <div style={{display: 'flex', gap: '2rem', alignItems: 'center', flexWrap: 'wrap'}}>
          <Image src="https://placehold.co/320x200?text=Shopping" alt="Shopping in Downtown Summerlin" width={320} height={200} style={{borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)'}} priority />
          <p style={{flex: 1, minWidth: 220, color: '#0A2540', fontSize: '1.08rem'}}>
            Downtown Summerlin is home to over 125 stores, from luxury boutiques to popular national brands. Enjoy open-air shopping, seasonal events, and a vibrant atmosphere perfect for families and trendsetters alike. Whether you're looking for fashion, home goods, or unique gifts, you'll find it all in this premier Las Vegas shopping destination.
          </p>
        </div>
      </section>

      {/* Dining Section */}
      <section style={{marginBottom: '2.5rem'}}>
        <h2>Dining in Downtown Summerlin</h2>
        <div style={{display: 'flex', gap: '2rem', alignItems: 'center', flexWrap: 'wrap', flexDirection: 'row-reverse'}}>
          <Image src="https://placehold.co/320x200?text=Dining" alt="Dining in Downtown Summerlin" width={320} height={200} style={{borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)'}} />
          <p style={{flex: 1, minWidth: 220, color: '#0A2540', fontSize: '1.08rem'}}>
            Experience a culinary adventure with Downtown Summerlin's diverse dining options. From upscale steakhouses and trendy cafes to family-friendly eateries and quick bites, there's something for every palate. Enjoy al fresco dining, happy hours, and chef-driven menus in a lively, walkable environment.
          </p>
        </div>
      </section>

      {/* Entertainment Section */}
      <section style={{marginBottom: '2.5rem'}}>
        <h2>Entertainment & Lifestyle</h2>
        <div style={{display: 'flex', gap: '2rem', alignItems: 'center', flexWrap: 'wrap'}}>
          <Image src="https://placehold.co/320x200?text=Entertainment" alt="Entertainment in Downtown Summerlin" width={320} height={200} style={{borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)'}} />
          <p style={{flex: 1, minWidth: 220, color: '#0A2540', fontSize: '1.08rem'}}>
            Downtown Summerlin is more than shopping and dining—it's a lifestyle hub. Enjoy year-round events, live music, farmers markets, and the Las Vegas Ballpark. The area is also home to City National Arena, practice facility for the Vegas Golden Knights, making it a hotspot for sports fans and families.
          </p>
        </div>
      </section>

      {/* Real Estate Market Section */}
      <section style={{marginBottom: '2.5rem'}}>
        <h2>Downtown Summerlin Real Estate Market</h2>
        <div style={{display: 'flex', gap: '2rem', alignItems: 'center', flexWrap: 'wrap', flexDirection: 'row-reverse'}}>
          <Image src="https://placehold.co/320x200?text=Real+Estate" alt="Downtown Summerlin real estate market" width={320} height={200} style={{borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)'}} />
          <div style={{flex: 1, minWidth: 220}}>
            <p style={{color: '#0A2540', fontSize: '1.08rem'}}>
              The Downtown Summerlin area offers a mix of luxury condos, modern townhomes, and single-family homes. With walkable access to shopping, dining, and entertainment, it's one of the most desirable places to live in Las Vegas. The real estate market here is competitive, with homes selling quickly and strong appreciation trends.
            </p>
            <ul style={{color: '#0A2540', fontSize: '1.05rem', margin: '1rem 0 0 1rem', listStyle: 'disc inside'}}>
              <li>Median Home Price: $650,000</li>
              <li>Average Days on Market: 14</li>
              <li>Walkability Score: 9/10</li>
              <li>Top-rated schools nearby</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section style={{marginBottom: '2.5rem', background: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', padding: '2rem 1rem'}}>
        <h2 style={{textAlign: 'center', marginBottom: '1.5rem'}}>Get Your Downtown Summerlin Market Report</h2>
        <LeadCaptureForm 
          variant="inline"
          title="Request Your Free Downtown Summerlin Market Report"
          subtitle="Stay ahead of the market with the latest trends and expert insights."
          source="Downtown Summerlin Page"
        />
      </section>

      {/* Internal Links Section */}
      <section style={{marginBottom: '2.5rem', background: '#F7F9FC', borderRadius: '8px', padding: '2rem 1rem'}}>
        <h2>Explore More Summerlin Real Estate Resources</h2>
        <ul style={{color: '#3A8DDE', fontWeight: 600, fontSize: '1.08rem', marginLeft: '1rem', listStyle: 'disc inside'}}>
          <li><Link href="/market-reports">See all Summerlin market reports</Link></li>
          <li><Link href="/communities">Explore Summerlin West communities</Link></li>
          <li><Link href="/current-listing">View our current listing in The Vistas</Link></li>
          <li><Link href="/contact">Contact a Summerlin real estate expert</Link></li>
        </ul>
      </section>
    </div>
  );
} 