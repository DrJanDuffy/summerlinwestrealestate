"use client";
import dynamic from 'next/dynamic';
const LeadCaptureForm = dynamic(() => import('../../components/ui/LeadCaptureForm'), { ssr: false });
import Head from 'next/head';
import Link from 'next/link';
import styles from '../page.module.css';
import Image from 'next/image';
const LatestMarketInsights = dynamic(() => import('../../components/ui/LatestMarketInsights'), { ssr: false });

export default function Contact() {
  return (
    <div className={styles.page}>
      <Head>
        <title>Contact a Summerlin Real Estate Expert | Summerlin West Real Estate</title>
        <meta name="description" content="Contact a Summerlin real estate expert for buying, selling, or market questions. Get personalized help with Summerlin homes, communities, and market trends." />
        <meta property="og:title" content="Contact a Summerlin Real Estate Expert | Summerlin West Real Estate" />
        <meta property="og:description" content="Contact a Summerlin real estate expert for buying, selling, or market questions. Get personalized help with Summerlin homes, communities, and market trends." />
      </Head>
      <section className={styles.hero} style={{marginBottom: '2rem'}}>
        <h1>Contact a Summerlin Real Estate Expert</h1>
        <p className={styles.subtitle}>Get in touch for buying, selling, or market questions</p>
      </section>
      <LatestMarketInsights />
      <section style={{marginBottom: '2.5rem', background: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', padding: '2rem 1rem'}}>
        <h2>Send a Message</h2>
        <LeadCaptureForm 
          variant="inline"
          title="Contact a Summerlin Real Estate Expert"
          subtitle="Get personalized help with Summerlin homes, communities, and market trends."
          source="Contact Page"
        />
      </section>
      <section style={{marginBottom: '2.5rem', background: '#F7F9FC', borderRadius: '8px', padding: '2rem 1rem'}}>
        <h2>Quick Links</h2>
        <ul style={{color: '#3A8DDE', fontWeight: 600, fontSize: '1.08rem', marginLeft: '1rem', listStyle: 'disc inside'}}>
          <li><Link href="/market-reports">Summerlin Market Reports</Link></li>
          <li><Link href="/current-listing">Featured Home for Sale</Link></li>
          <li><Link href="/about">Meet Your Summerlin Expert</Link></li>
          <li><Link href="/communities">Explore Summerlin Communities</Link></li>
        </ul>
      </section>
      {/* Office Location & Contact Info */}
      <section style={{marginBottom: '2.5rem', display: 'flex', gap: '2rem', alignItems: 'flex-start', flexWrap: 'wrap'}}>
        <div style={{flex: 1, minWidth: 260}}>
          <h2>Our Office</h2>
          <Image src="https://placehold.co/400x220?text=Map+Placeholder" alt="Office Location Map" width={400} height={220} style={{borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', width: '100%', marginBottom: '1rem'}} priority />
          <div style={{color: '#0A2540', fontSize: '1.05rem', marginBottom: '0.5rem'}}>
            <strong>Address:</strong> 1234 Summerlin Centre Dr, Las Vegas, NV 89138
          </div>
          <div style={{color: '#0A2540', fontSize: '1.05rem', marginBottom: '0.5rem'}}>
            <strong>Phone:</strong> <a href="tel:7025551234" style={{color: '#3A8DDE', textDecoration: 'none'}}> (702) 555-1234</a>
          </div>
          <div style={{color: '#0A2540', fontSize: '1.05rem', marginBottom: '0.5rem'}}>
            <strong>Email:</strong> <a href="mailto:info@summerlinwestrealestate.com" style={{color: '#3A8DDE', textDecoration: 'none'}}>info@summerlinwestrealestate.com</a>
          </div>
          <div style={{display: 'flex', gap: '1rem', marginTop: '0.5rem'}}>
            <a href="https://facebook.com" target="_blank" rel="noopener" aria-label="Facebook" style={{color: '#3A8DDE', fontSize: '1.3rem'}}>Facebook</a>
            <a href="https://instagram.com" target="_blank" rel="noopener" aria-label="Instagram" style={{color: '#16B286', fontSize: '1.3rem'}}>Instagram</a>
            <a href="https://youtube.com" target="_blank" rel="noopener" aria-label="YouTube" style={{color: '#0A2540', fontSize: '1.3rem'}}>YouTube</a>
          </div>
        </div>
        <div style={{flex: 1, minWidth: 260}}>
          <h2>Areas We Serve</h2>
          <ul style={{color: '#0A2540', fontSize: '1.08rem', marginLeft: '1rem', listStyle: 'disc inside'}}>
            <li>Summerlin West</li>
            <li>The Vistas</li>
            <li>Stonebridge</li>
            <li>Redpoint</li>
            <li>The Cliffs</li>
            <li>Reverence</li>
            <li>Downtown Summerlin</li>
            <li>All Summerlin Villages</li>
          </ul>
          <div style={{marginTop: '2rem', color: '#888', fontSize: '0.98rem'}}>
            <strong>Response Time:</strong> We reply to all inquiries within 1 business day (often much faster!)
          </div>
        </div>
      </section>
    </div>
  );
} 