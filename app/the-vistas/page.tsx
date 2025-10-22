'use client';

// Dynamic imports for client components
import dynamicImport from 'next/dynamic';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import LatestMarketInsightsClient from '../../components/ui/LatestMarketInsightsClient';
import SummerlinWestOverview from '../../components/ui/SummerlinWestOverview';
import styles from '../page.module.css';

const RealScoutOfficeListingsWrapper = dynamicImport(
  () => import('../../components/ui/RealScoutOfficeListingsWrapper'),
  {
    ssr: false,
  }
);

// Disable SSR for this page to prevent prerendering issues
export const dynamic = 'force-dynamic';
const _LatestMarketInsights = dynamicImport(
  () => import('../../components/ui/LatestMarketInsights'),
  {
    ssr: false,
  }
);

const VistasLeadForm = dynamicImport(() => import('../../components/ui/VistasLeadForm'), {
  ssr: false,
});

export default function TheVistas() {
  const [name, _setName] = useState('');
  const [email, _setEmail] = useState('');
  const [phone, _setPhone] = useState('');
  const [_submitted, setSubmitted] = useState(false);
  const [_error, setError] = useState('');
  const [_loading, setLoading] = useState(false);

  const _handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError('Please enter your name.');
      return;
    }
    if (!email.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)) {
      setError('Please enter a valid email address.');
      return;
    }
    if (!phone.match(/^[0-9\-+()\s]{7,}$/)) {
      setError('Please enter a valid phone number.');
      return;
    }
    setError('');
    setLoading(true);
    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, phone, page: 'The Vistas' }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit');
      }

      setSubmitted(true);
      if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
        (window as any).gtag('event', 'lead_form_submit', {
          event_category: 'Lead',
          event_label: 'The Vistas',
        });
      }
    } catch (_err: unknown) {
      setError('There was a problem submitting your request. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

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
          {/* @ts-ignore - RealScout web component */}
          <RealScoutOfficeListingsWrapper
            agentEncodedId="QWdlbnQtMjI1MDUw"
            sortOrder="PRICE_LOW"
            listingStatus="For Sale"
            propertyTypes=",SFR,MF,TC,LAL,MOBILE,OTHER"
            priceMin="800000"
            priceMax="2500000"
            maxListings={12}
            className="mt-6"
          />
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
          {/* @ts-ignore - RealScout web component */}
          <realscout-advanced-search agent-encoded-id="QWdlbnQtMjI1MDUw"></realscout-advanced-search>
        </section>

        {/* Simple Property Search */}
        <section className={styles.sectionCard}>
          <h2>Quick Property Search in The Vistas</h2>
          <p>
            Browse available luxury properties in The Vistas with our simple search tool. Perfect
            for quick property browsing in this premier community.
          </p>
          {/* @ts-ignore - RealScout web component */}
          <realscout-simple-search agent-encoded-id="QWdlbnQtMjI1MDUw"></realscout-simple-search>
        </section>

        {/* Office Listings Widget */}
        <section className={styles.sectionCard}>
          <h2>Office Properties in The Vistas</h2>
          <p>
            Explore office properties and commercial real estate opportunities in The Vistas. From
            professional office spaces to commercial buildings, find the perfect location for your
            business.
          </p>
          {/* @ts-ignore - RealScout web component */}
          <RealScoutOfficeListingsWrapper
            agentEncodedId="QWdlbnQtMjI1MDUw"
            sortOrder="PRICE_LOW"
            listingStatus="For Sale"
            propertyTypes=",SFR,OTHER"
            priceMin="500000"
            priceMax="600000"
            maxListings={12}
            className="mt-6"
          />
        </section>
      </main>
    </div>
  );
}
