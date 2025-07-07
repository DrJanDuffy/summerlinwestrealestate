"use client";
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
      
      <div className={styles.mainContent}>
        <section className={styles.hero}>
          <h1>About Your Summerlin Real Estate Expert</h1>
          <p className={styles.subtitle}>Local knowledge. Proven results. Personalized service.</p>
        </section>
        
        <LatestMarketInsights />

        {/* Personal Story & Branding */}
        <section className={styles.sectionCard}>
          <div className={styles.contentGrid}>
            <Image 
              src="https://placehold.co/220x220?text=Agent+Photo" 
              alt="Summerlin real estate agent photo" 
              width={220} 
              height={220} 
              className={styles.agentPhoto}
            />
            <div>
              <h2>Meet Your Agent</h2>
              <ul className={styles.contentList}>
                <li>15+ years of Summerlin real estate experience</li>
                <li>Top producer in Summerlin West</li>
                <li>Local resident and community advocate</li>
                <li>Personalized service for buyers and sellers</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Credentials & Experience */}
        <section className={styles.sectionCard}>
          <h2>Why Work With a Local Expert?</h2>
          <ul className={styles.contentList}>
            <li>In-depth knowledge of Summerlin neighborhoods</li>
            <li>Proven negotiation and marketing skills</li>
            <li>Trusted by hundreds of local families</li>
            <li>Committed to your real estate goals</li>
          </ul>
        </section>

        {/* Community Involvement */}
        <section className={styles.sectionCard}>
          <div className={styles.contentGrid}>
            <div>
              <h2>Giving Back to Summerlin</h2>
              <p className={styles.contentText}>
                I believe in supporting the community that has given me so much. From sponsoring local school events to volunteering at neighborhood cleanups and supporting youth sports, I'm committed to making Summerlin West a better place for everyone.
              </p>
            </div>
            <Image 
              src="https://placehold.co/180x180?text=Community" 
              alt="Community involvement in Summerlin West" 
              width={180} 
              height={180} 
              className={styles.communityImage}
              priority 
            />
          </div>
        </section>

        {/* Internal Links Section */}
        <section className={styles.sectionCard}>
          <h2>Explore More</h2>
          <ul className={styles.resourceLinks}>
            <li><Link href="/market-reports">Summerlin Market Reports</Link></li>
            <li><Link href="/current-listing">Featured Home for Sale</Link></li>
            <li><Link href="/communities">Explore Summerlin Communities</Link></li>
            <li><Link href="/contact">Contact for a Consultation</Link></li>
          </ul>
        </section>

        {/* Client Testimonials */}
        <TestimonialsSection />
      </div>
    </div>
  );
} 