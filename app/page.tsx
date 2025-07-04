"use client";
import Head from 'next/head';
import styles from "./page.module.css";
import LeadCaptureForm from "../components/ui/LeadCaptureForm";
import { useLeadCaptureModal } from "../hooks/useLeadCaptureModal";
import Link from 'next/link';
import Image from 'next/image';
import LatestMarketInsights from '../components/ui/LatestMarketInsights';
import RealScoutAdvancedSearch from '../components/ui/RealScoutAdvancedSearch';
import RealScoutListings from '../components/ui/RealScoutListings';

export default function Home() {
  const { isOpen, source, openModal, closeModal } = useLeadCaptureModal();

  const handleFormSuccess = () => {
    // Track successful submission
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'lead_form_success', {
        event_category: 'Lead',
        event_label: source,
      });
    }
  };

  const faqs = [
    {
      question: "How do I schedule a home tour in Summerlin?",
      answer: "Contact us via the form or call (702) 555-1234 to schedule a private showing."
    },
    {
      question: "What are the best neighborhoods in Summerlin West?",
      answer: "Popular neighborhoods include The Vistas, The Paseos, Stonebridge, and Redpoint."
    },
    {
      question: "How can I get a free market report?",
      answer: "Fill out the form on this page or visit our Market Reports section to get your free report."
    },
    {
      question: "Are there new construction homes available?",
      answer: "Yes, Summerlin West offers a variety of new construction communities. Contact us for the latest releases."
    },
    {
      question: "What is the average home price in Summerlin West?",
      answer: "The median home price is around $850,000, but it varies by neighborhood and property type."
    },
    // Add more FAQs as needed
  ];

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <div className={styles.page}>
      <Head>
        <title>Summerlin West Real Estate | Homes for Sale & Community Guide</title>
        <meta name="description" content="Find homes for sale in Summerlin West. Explore communities, market trends, and connect with a local real estate expert for your Summerlin home journey." />
        <meta property="og:title" content="Summerlin West Real Estate | Homes for Sale & Community Guide" />
        <meta property="og:description" content="Find homes for sale in Summerlin West. Explore communities, market trends, and connect with a local real estate expert for your Summerlin home journey." />
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
              "name": "Jane Doe"
            },
            "reviewRating": {
              "@type": "Rating",
              "ratingValue": "5",
              "bestRating": "5"
            },
            "reviewBody": "Fantastic service and local expertise! Highly recommended for Summerlin buyers."
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
        <script type="application/ld+json" suppressHydrationWarning>{JSON.stringify(faqJsonLd)}</script>
      </Head>
      {/* Hero Section with Advanced Search */}
      <section className={styles.hero} role="banner" style={{marginBottom: '2rem'}}>
        <div className={styles.heroContent}>
          <h1>Summerlin West Real Estate</h1>
          <p className={styles.subtitle}>Your guide to homes, communities, and market trends in Summerlin</p>
        </div>
      </section>
      
      <RealScoutAdvancedSearch 
        title="Find Your Dream Home in Summerlin"
        subtitle="Search by neighborhood, city, school, beds, baths, and price range"
        variant="hero"
        showFeatures={true}
      />
      <LatestMarketInsights />
      <section style={{marginBottom: '2.5rem'}}>
        <h2>Featured Listings</h2>
        <a
          href="/compare"
          className={styles.cta}
          aria-label="View Listings"
          style={{margin: '1rem auto 2rem auto', display: 'block', maxWidth: 220}}
        >
          View Listings
        </a>
        <div className={styles.featuredListingsGrid}>
          {[1,2,3].map((i) => (
            <div key={i} className={styles.featuredListingCard}>
              <img src={`https://placehold.co/400x220?text=Home+${i}`} alt={`Summerlin home for sale ${i}`} className={styles.featuredListingImage} />
              <div style={{padding: '1rem'}}>
                <h3 style={{margin: 0}}>Home #{i}</h3>
                <p style={{fontSize: '0.98rem', color: '#0A2540'}}>4 bed &bull; 3 bath &bull; $900,000+</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section style={{marginBottom: '2.5rem', background: '#F7F9FC', borderRadius: '8px', padding: '2rem 1rem'}}>
        <h2>Why Live in Summerlin West?</h2>
        <ul style={{color: '#0A2540', fontSize: '1.08rem', marginLeft: '1rem', listStyle: 'disc inside'}}>
          <li>Top-rated schools and family-friendly neighborhoods</li>
          <li>Access to parks, trails, and outdoor recreation</li>
          <li>Modern amenities and shopping at Downtown Summerlin</li>
          <li>Strong community spirit and safety</li>
        </ul>
      </section>
      <section style={{marginBottom: '2.5rem', background: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', padding: '2rem 1rem'}}>
        <h2>Explore More</h2>
        <ul style={{color: '#3A8DDE', fontWeight: 600, fontSize: '1.08rem', marginLeft: '1rem', listStyle: 'disc inside'}}>
          <li><Link href="/market-reports">Summerlin Market Reports</Link></li>
          <li><Link href="/current-listing">Featured Home for Sale</Link></li>
          <li><Link href="/about">Meet Your Summerlin Expert</Link></li>
          <li><Link href="/communities">Explore Summerlin Communities</Link></li>
          <li><Link href="/contact">Contact for a Consultation</Link></li>
        </ul>
      </section>

      {/* Market Authority Section */}
      <section className={styles.marketAuthority}>
        <div className={styles.authorityContent}>
          <div className={styles.authorityText}>
            <h2>Why Choose Our Summerlin West Expertise</h2>
            
            <div className={styles.expertisePoints}>
              <div className={styles.expertisePoint}>
                <div className={styles.expertiseIcon}>
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <title>Summerlin Local Resident</title>
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <div>
                  <h3>Local Resident</h3>
                  <p>Living and breathing Summerlin West for over 15 years</p>
                </div>
              </div>
              
              <div className={styles.expertisePoint}>
                <div className={styles.expertiseIcon}>
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <title>Active Listings in The Vistas</title>
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                  </svg>
                </div>
                <div>
                  <h3>Active Listings</h3>
                  <p>Currently representing multiple properties in The Vistas</p>
                </div>
              </div>
              
              <div className={styles.expertisePoint}>
                <div className={styles.expertiseIcon}>
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <title>Summerlin Market Knowledge</title>
                    <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
                  </svg>
                </div>
                <div>
                  <h3>Market Knowledge</h3>
                  <p>Deep understanding of local trends and property values</p>
                </div>
              </div>
              
              <div className={styles.expertisePoint}>
                <div className={styles.expertiseIcon}>
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <title>Proven Results in Summerlin</title>
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <div>
                  <h3>Proven Results</h3>
                  <p>Consistently exceeding client expectations with record sales</p>
                </div>
              </div>
            </div>
            
            <div className={styles.statsGrid}>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>15+</div>
                <div className={styles.statLabel}>Years Experience</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>500+</div>
                <div className={styles.statLabel}>Homes Sold</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>12</div>
                <div className={styles.statLabel}>Avg Days on Market</div>
              </div>
            </div>
          </div>
          
          <div className={styles.authorityProfile}>
            <div className={styles.profileImage}>
              <svg width="120" height="120" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <title>Summerlin Real Estate Agent</title>
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
            </div>
            <h3>Your Summerlin West Expert</h3>
            <p>With over 15 years of experience in Summerlin West real estate, I've helped hundreds of families find their perfect home in The Vistas and surrounding communities. My deep local knowledge and proven track record make me your trusted partner in navigating the Summerlin West market.</p>
            <div className={styles.profileContact}>
              <div className={styles.contactItem}>
                <strong>Phone:</strong> (702) 555-1234
              </div>
              <div className={styles.contactItem}>
                <strong>Email:</strong> info@summerlinwestrealestate.com
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Credibility Markers */}
      <section className={styles.credibility}>
        <h2>Proven Results in The Vistas</h2>
        <ul>
          <li>Active listings and recent sales in <Link href="/the-vistas">The Vistas</Link></li>
          <li>Specializing in all <Link href="/communities">Summerlin West communities</Link></li>
          <li>Recognized <Link href="/market-reports">market authority</Link></li>
        </ul>
      </section>

      {/* Market Coverage */}
      <section className={styles.marketCoverage}>
        <h2>Explore Summerlin West Communities</h2>
        <Link href="/communities" className={styles.secondaryCta}>View All Communities</Link>
      </section>

      {/* Inline Lead Capture */}
      <section id="lead-capture" className={styles.leadCapture}>
        <LeadCaptureForm 
          variant="inline"
          title="Get Your Free Summerlin West Market Report"
          subtitle="Stay ahead of the market with our exclusive insights and expert analysis"
          source="Homepage Inline"
          onSuccess={handleFormSuccess}
        />
      </section>

      {/* Modal Lead Capture */}
      <LeadCaptureForm 
        variant="modal"
        isOpen={isOpen}
        onClose={closeModal}
        source={source}
        onSuccess={handleFormSuccess}
      />

      <RealScoutListings
        title="Current Market Listings"
        subtitle="Browse our latest properties in Summerlin West and surrounding areas"
        variant="full"
        showFilters={true}
      />
    </div>
  );
}
