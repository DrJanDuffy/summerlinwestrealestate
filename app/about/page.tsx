import Head from 'next/head';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import styles from "../page.module.css";
const LatestMarketInsights = dynamic(() => import('../../components/ui/LatestMarketInsights'), { ssr: false });
const TestimonialsSection = dynamic(() => import('../../components/ui/TestimonialsSection'), { ssr: false });

export default function About() {
  return (
    <div className={styles.page}>
      <Head>
        <title>About Your Summerlin Real Estate Expert | Summerlin West Real Estate</title>
        <meta name="description" content="Meet your Summerlin real estate expert. Learn about experience, local knowledge, and commitment to helping buyers and sellers in Summerlin West." />
        <meta property="og:title" content="About Your Summerlin Real Estate Expert | Summerlin West Real Estate" />
        <meta property="og:description" content="Meet your Summerlin real estate expert. Learn about experience, local knowledge, and commitment to helping buyers and sellers in Summerlin West." />
        <script type="application/ld+json" suppressHydrationWarning>{`
          {
            "@context": "https://schema.org",
            "@type": "Review",
            "itemReviewed": {
              "@type": "RealEstateAgent",
              "name": "Summerlin West Real Estate"
            },
            "author": {
              "@type": "Person",
              "name": "John Smith"
            },
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5",
              "bestRating": "5"
            },
            "reviewBody": "The most knowledgeable agent in Summerlin! Helped us find our dream home."
          }
        `}</script>
        <script type="application/ld+json" suppressHydrationWarning>{`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Summerlin West Real Estate",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.9",
              "reviewCount": "87"
            }
          }
        `}</script>
      </Head>
      <section className={styles.hero} style={{marginBottom: '2rem'}}>
        <h1>About Your Summerlin Real Estate Expert</h1>
        <p className={styles.subtitle}>Local knowledge. Proven results. Personalized service.</p>
      </section>
      <LatestMarketInsights />

      {/* Personal Story & Branding */}
      <section style={{marginBottom: '2.5rem', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '2rem', background: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', padding: '2rem 1rem'}}>
        <Image src="https://placehold.co/220x220?text=Agent+Photo" alt="Summerlin real estate agent photo" width={220} height={220} style={{borderRadius: '50%', boxShadow: '0 2px 8px rgba(0,0,0,0.08)'}} />
        <div style={{flex: 1}}>
          <h2>Meet Your Agent</h2>
          <ul style={{color: '#0A2540', fontSize: '1.08rem', marginLeft: '1rem', listStyle: 'disc inside'}}>
            <li>15+ years of Summerlin real estate experience</li>
            <li>Top producer in Summerlin West</li>
            <li>Local resident and community advocate</li>
            <li>Personalized service for buyers and sellers</li>
          </ul>
        </div>
      </section>

      {/* Credentials & Experience */}
      <section style={{marginBottom: '2.5rem', background: '#F7F9FC', borderRadius: '8px', padding: '2rem 1rem'}}>
        <h2>Why Work With a Local Expert?</h2>
        <ul style={{color: '#0A2540', fontSize: '1.08rem', marginLeft: '1rem', listStyle: 'disc inside'}}>
          <li>In-depth knowledge of Summerlin neighborhoods</li>
          <li>Proven negotiation and marketing skills</li>
          <li>Trusted by hundreds of local families</li>
          <li>Committed to your real estate goals</li>
        </ul>
      </section>

      {/* Community Involvement */}
      <section style={{marginBottom: '2.5rem', display: 'flex', gap: '2rem', alignItems: 'center', flexWrap: 'wrap', flexDirection: 'row-reverse'}}>
        <Image src="https://placehold.co/180x180?text=Community" alt="Community involvement in Summerlin West" width={180} height={180} style={{borderRadius: '12px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', width: 180, height: 180}} priority />
        <div style={{flex: 1, minWidth: 220}}>
          <h2 style={{marginBottom: '0.5rem'}}>Giving Back to Summerlin</h2>
          <p style={{color: '#0A2540', fontSize: '1.08rem'}}>
            I believe in supporting the community that has given me so much. From sponsoring local school events to volunteering at neighborhood cleanups and supporting youth sports, I'm committed to making Summerlin West a better place for everyone.
          </p>
        </div>
      </section>

      {/* Internal Links Section */}
      <section style={{marginBottom: '2.5rem', background: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', padding: '2rem 1rem'}}>
        <h2>Explore More</h2>
        <ul style={{color: '#3A8DDE', fontWeight: 600, fontSize: '1.08rem', marginLeft: '1rem', listStyle: 'disc inside'}}>
          <li><Link href="/market-reports">Summerlin Market Reports</Link></li>
          <li><Link href="/current-listing">Featured Home for Sale</Link></li>
          <li><Link href="/communities">Explore Summerlin Communities</Link></li>
          <li><Link href="/contact">Contact for a Consultation</Link></li>
        </ul>
      </section>

      {/* Client Testimonials */}
      <TestimonialsSection />
    </div>
  );
} 