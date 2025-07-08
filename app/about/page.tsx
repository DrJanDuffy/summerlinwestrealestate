"use client";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../page.module.css";
import LatestMarketInsightsClient from '../../components/ui/LatestMarketInsightsClient';
import TestimonialsSectionClient from '../../components/ui/TestimonialsSectionClient';
import { FaMapMarkerAlt, FaUserTie } from 'react-icons/fa';

export default function About() {
  return (
    <div className={styles.page}>
      <Head>
        <title>
          About Your Summerlin Real Estate Expert | Summerlin West Real Estate
        </title>
        <meta
          name="description"
          content="Meet your Summerlin real estate expert. Learn about experience, local knowledge, and commitment to helping buyers and sellers in Summerlin West."
        />
        <meta
          property="og:title"
          content="About Your Summerlin Real Estate Expert | Summerlin West Real Estate"
        />
        <meta
          property="og:description"
          content="Meet your Summerlin real estate expert. Learn about experience, local knowledge, and commitment to helping buyers and sellers in Summerlin West."
        />
        <script type="application/ld+json" suppressHydrationWarning>{`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Summerlin West Real Estate",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "11312 Parkside Way",
              "addressLocality": "Las Vegas",
              "addressRegion": "NV",
              "postalCode": "89138",
              "addressCountry": "US"
            },
            "description": "Local Summerlin real estate expert with 15+ years of experience helping buyers and sellers in Summerlin West.",
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 36.1865,
              "longitude": -115.3432
            },
            "url": "https://www.summerlinwestrealestate.com/about"
          }
        `}</script>
      </Head>
      <section className={styles.hero}>
        <h1>About Your Summerlin Real Estate Expert</h1>
        <p className={styles.subtitle}>Local knowledge. Proven results. Personalized service.</p>
      </section>
      <div className={styles.container}>
        <div className={styles.sectionCard}>
          <h2 className={styles.centerTitle}>Meet Dr. Jan Duffy</h2>
          <div className={styles.agentProfile}>
            <FaUserTie className={styles.agentIcon} />
            <div>
              <h3>Dr. Jan Duffy, REALTOR®</h3>
              <p>
                Licensed Real Estate Agent (License# S.0197614)<br />
                Berkshire Hathaway HomeServices Nevada Properties<br />
                Background in psychology, business, and marketing strategies.<br />
                Keynote speaker, relocation specialist, and more.
              </p>
              <div className={styles.badges}>
                <span className={styles.badge}>Veteran-Owned</span>
                <span className={styles.badge}>Women-Owned</span>
                <span className={styles.badge}>LGBTQ+ Friendly</span>
                <span className={styles.badge}>Se Habla Español</span>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.sectionCard}>
          <h2 className={styles.centerTitle}>Specializations & Services</h2>
          <ul className={styles.servicesList}>
            <li>Summerlin Vistas Homes Neighborhoods Specialist</li>
            <li>Luxury real estate transactions</li>
            <li>First-time home buyer support</li>
            <li>Foreclosed property deals</li>
            <li>Las Vegas real estate investment insights</li>
            <li>New construction sales and consulting</li>
            <li>Relocation services</li>
            <li>Expired listing consultant</li>
            <li>Divorce real estate specialist</li>
            <li>55+ Community Specialist</li>
          </ul>
        </div>
        <div className={styles.sectionCard}>
          <h2 className={styles.centerTitle}>Summerlin Vistas Neighborhoods Served</h2>
          <div className={styles.areasGrid}>
            <span>The Vistas</span>
            <span>The Paseos</span>
            <span>Stonebridge</span>
            <span>Redpoint</span>
            <span>Redpoint Square</span>
            <span>Reverence</span>
          </div>
        </div>
        <div className={styles.newsList}>
          <div className={styles.newsCard}>
            <span className={styles.newsBadge}>News</span>
            <div className={styles.newsContent}>
              <h3>What You Should Know About Getting a Mortgage Today</h3>
              <div className={styles.newsDate}>7/7/2025</div>
              <p>If you've been putting off buying a home because you thought getting approved would be too hard, know this: qualifying for a mortgage is starting to get a bit more achievable, but lending standards are still strong.</p>
            </div>
          </div>
          <div className={styles.newsCard}>
            <span className={styles.newsBadge}>News</span>
            <div className={styles.newsContent}>
              <h3>Think No One's Buying Homes Right Now? Think Again.</h3>
              <div className={styles.newsDate}>7/3/2025</div>
              <p>If you've seen headlines saying home sales are down compared to last year, you might be thinking – is it even a good time to sell?</p>
            </div>
          </div>
          <div className={styles.newsCard}>
            <span className={styles.newsBadge}>News</span>
            <div className={styles.newsContent}>
              <h3>Why Big Investors Aren't a Challenge for Today's Homebuyer</h3>
              <div className={styles.newsDate}>7/2/2025</div>
              <p>Remember the chatter in the headlines about all the homes big institutional investors were buying? If you were thinking about buying a home yourself, you may have wondered how you'd ever be able to compete with that.</p>
            </div>
          </div>
        </div>
        <div className={styles.sectionCard}>
          <h2 className={styles.centerTitle}>What Our Clients Say</h2>
          <p className={styles.sectionSubtitle}>Real stories from real buyers and sellers</p>
          <TestimonialsSectionClient />
        </div>
        <div className={styles.sectionCard}>
          <h2 className={styles.centerTitle}>Our Office Location</h2>
          <div className={styles.officeCard}>
            <div className={styles.officeInfo}>
              <FaMapMarkerAlt className={styles.officeIcon} />
              <div>
                <div className={styles.officeAddress}>11312 Parkside Way<br />Summerlin, Las Vegas, NV 89138</div>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=11312+Parkside+Way,+Las+Vegas,+NV+89138"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.directionsBtn}
                >
                  Get Directions
                </a>
              </div>
            </div>
            <div className={styles.officeMapWrapper}>
              <iframe
                title="Office Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3237.019282073839!2d-115.3454!3d36.1865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8c1e2e2e2e2e2%3A0x0!2zMzHCsDExJzExLjQiTiAxMTXCsDIwJzQzLjIiVw!!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus"
                width="100%"
                height="220"
                style={{ border: 0, borderRadius: '12px', marginTop: '1rem' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
        <div className={styles.sectionCard} style={{marginTop: '2.5rem'}}>
          <h2 className={styles.centerTitle}>Featured Summerlin Listings</h2>
          {/* The RealScoutWidget is rendered globally in layout, so this is just a heading for context */}
        </div>
      </div>
    </div>
  );
}
