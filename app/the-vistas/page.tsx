'use client';

// Dynamic imports for client components
import dynamicImport from 'next/dynamic';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import LatestMarketInsightsClient from '../../components/ui/LatestMarketInsightsClient';
import SummerlinWestOverview from '../../components/ui/SummerlinWestOverview';
import styles from '../page.module.css';

// RealScout components removed - using alternative solutions

// Disable SSR for this page to prevent prerendering issues
export const dynamic = 'force-dynamic';

const VistasLeadForm = dynamicImport(() => import('../../components/ui/VistasLeadForm'), {
  ssr: false,
});

export default function TheVistas() {
  return (
    <div className={styles.page}>
      <Head>
        <title>The Vistas Summerlin Homes for Sale | Luxury Community Guide | Dr. Jan Duffy</title>
        <meta
          name="description"
          content="Discover The Vistas luxury homes for sale! Red Rock Canyon views, resort-style amenities, top-rated schools. Dr. Jan Duffy, REALTOR® with insider knowledge. Schedule tour today!"
        />
        <meta
          property="og:title"
          content="The Vistas Summerlin Homes for Sale | Luxury Community Guide | Dr. Jan Duffy"
        />
        <meta
          property="og:description"
          content="Discover The Vistas luxury homes for sale! Red Rock Canyon views, resort-style amenities, top-rated schools. Dr. Jan Duffy, REALTOR® with insider knowledge. Schedule tour today!"
        />
      </Head>
      <main>
        <SummerlinWestOverview />
        <section className={styles.hero}>
          <h1>The Vistas in Summerlin</h1>
          <p className={styles.subtitle}>A premier master-planned neighborhood in Summerlin West</p>
        </section>
        {/* Dr. Jan Duffy Callout Section */}
        <section className={`${styles.sectionCard} ${styles.calloutSection}`}>
          <h2>Meet Your Summerlin West Real Estate Expert</h2>
          <p>
            <strong>Dr. Jan Duffy, REALTOR®</strong> has helped families discover luxury living at
            the gateway to Red Rock Canyon since 2015. As a longtime resident and doctorate-level
            educator, she brings analytical precision and deep local knowledge to every transaction.
            Specializing in{' '}
            <strong>The Ridges, Red Rock Country Club, The Vistas, and The Paseos</strong>, Dr.
            Duffy is your go-to resource for buying or selling in Summerlin West.
          </p>
          <p className={styles.calloutHighlight}>Ready to make your move in Summerlin West?</p>
          <p>
            <strong>
              Contact Dr. Jan Duffy today for your complimentary market consultation and discover
              your dream home or get top dollar for your property.
            </strong>
          </p>
          <p>
            <Link href="/contact">Contact Dr. Jan Duffy &rarr;</Link>
          </p>
        </section>
        <section className={styles.sectionCard}>
          <LatestMarketInsightsClient />
        </section>
        <section className={styles.sectionCard}>
          <h2>About The Vistas</h2>
          <Image
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80"
            alt="The Vistas Park in Summerlin with Red Rock Canyon views"
            width={800}
            height={300}
            className={styles.featureImage}
          />
          <ul className={styles.featureList}>
            <li>Beautiful parks and walking trails</li>
            <li>Top-rated public and private schools</li>
            <li>Modern homes with mountain views</li>
            <li>Minutes from Downtown Summerlin</li>
          </ul>
        </section>
        <section className={styles.sectionCard}>
          <h2>Homes for Sale in The Vistas</h2>
          <div className={styles.propertyGrid}>
            {[
              {
                id: 1,
                image:
                  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80',
                title: 'Luxury Estate',
                details: '5 bed • 4 bath • $1,200,000+',
              },
              {
                id: 2,
                image:
                  'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80',
                title: 'Modern Home',
                details: '4 bed • 3 bath • $950,000+',
              },
              {
                id: 3,
                image:
                  'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80',
                title: 'Desert Oasis',
                details: '3 bed • 2 bath • $800,000+',
              },
            ].map((home) => (
              <div key={home.id} className={styles.propertyCard}>
                <Image
                  src={home.image}
                  alt={`${home.title} for sale in The Vistas Summerlin`}
                  width={400}
                  height={220}
                  className={styles.propertyImage}
                />
                <div className={styles.propertyInfo}>
                  <h3 className={styles.propertyTitle}>{home.title}</h3>
                  <p className={styles.propertyDetails}>{home.details}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* The Vistas Properties */}
        <section className={styles.sectionCard}>
          <h2>Luxury Properties in The Vistas</h2>
          <p>
            Discover luxury homes available in The Vistas community. These properties offer stunning
            Red Rock Canyon views, resort-style amenities, and access to top-rated schools. The
            Vistas represents the pinnacle of Summerlin West luxury living.
          </p>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 text-center">
            <h3 className="text-xl font-semibold text-blue-900 mb-4">Property Search Coming Soon</h3>
            <p className="text-blue-700 mb-6">
              We're updating our property search system. In the meantime, contact Dr. Jan Duffy for personalized assistance.
            </p>
            <a
              href="tel:702-550-0112"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              📞 Call (702) 550-0112
            </a>
          </div>
        </section>
        <section className={styles.sectionCard}>
          <h2>Explore More</h2>
          <ul className={styles.linkList}>
            <li>
              <Link href="/market-reports">Summerlin Market Reports</Link>
            </li>
            <li>
              <Link href="/current-listing">Featured Home for Sale</Link>
            </li>
            <li>
              <Link href="/about">Meet Your Summerlin Expert</Link>
            </li>
            <li>
              <Link href="/contact">Contact for a Private Tour</Link>
            </li>
          </ul>
        </section>
        <section id="lead-capture" className={styles.leadCapture}>
          <h2>Request Your Free Community Guide</h2>
          <VistasLeadForm />
        </section>

        {/* Advanced Property Search */}
        <section className={styles.sectionCard}>
          <h2>Advanced Property Search in The Vistas</h2>
          <p>
            Use our advanced search tool to find luxury properties in The Vistas. Filter by price,
            features, and more to discover your perfect home with Red Rock Canyon views.
          </p>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 text-center">
            <h3 className="text-xl font-semibold text-blue-900 mb-4">Property Search Coming Soon</h3>
            <p className="text-blue-700 mb-6">
              We're updating our property search system. In the meantime, contact Dr. Jan Duffy for personalized assistance.
            </p>
            <a
              href="tel:702-550-0112"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              📞 Call (702) 550-0112
            </a>
          </div>
        </section>

        {/* Simple Property Search */}
        <section className={styles.sectionCard}>
          <h2>Quick Property Search in The Vistas</h2>
          <p>
            Browse available luxury properties in The Vistas with our simple search tool. Perfect
            for quick property browsing in this premier community.
          </p>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 text-center">
            <h3 className="text-xl font-semibold text-blue-900 mb-4">Property Search Coming Soon</h3>
            <p className="text-blue-700 mb-6">
              We're updating our property search system. In the meantime, contact Dr. Jan Duffy for personalized assistance.
            </p>
            <a
              href="tel:702-550-0112"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              📞 Call (702) 550-0112
            </a>
          </div>
        </section>

        {/* Office Listings Widget */}
        <section className={styles.sectionCard}>
          <h2>Office Properties in The Vistas</h2>
          <p>
            Explore office properties and commercial real estate opportunities in The Vistas. From
            professional office spaces to commercial buildings, find the perfect location for your
            business.
          </p>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 text-center">
            <h3 className="text-xl font-semibold text-blue-900 mb-4">Property Search Coming Soon</h3>
            <p className="text-blue-700 mb-6">
              We're updating our property search system. In the meantime, contact Dr. Jan Duffy for personalized assistance.
            </p>
            <a
              href="tel:702-550-0112"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              📞 Call (702) 550-0112
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
