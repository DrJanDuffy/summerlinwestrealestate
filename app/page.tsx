"use client";
import Head from "next/head";
import styles from '@/styles/pages/home.module.css';
import { useLeadCaptureModal } from "../hooks/useLeadCaptureModal";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import Header from "@/components/layout/Header";
import SummerlinWestOverview from "@/components/ui/SummerlinWestOverview";
import { useState, useEffect } from "react";

// Dynamically import RealScoutAdvancedSearch for performance
const RealScoutAdvancedSearch = dynamic(
  () => import("../components/ui/RealScoutAdvancedSearch"),
  { ssr: false },
);

// Dynamically import LeadCaptureForm for performance
const LeadCaptureForm = dynamic(
  () => import("../components/ui/LeadCaptureForm"),
  { ssr: false },
);

// Dynamically import HomebotWidget for performance
const HomebotWidget = dynamic(
  () => import("../components/ui/HomebotWidget"),
  { ssr: false },
);

// Dynamically import LatestMarketInsights for performance
const LatestMarketInsights = dynamic(
  () => import("../components/ui/LatestMarketInsights"),
  { ssr: false },
);

// Dynamically import RealScoutListings for performance
const RealScoutListings = dynamic(
  () => import("../components/ui/RealScoutListings"),
  { ssr: false },
);

type Faq = {
  question: string;
  answer: string;
};

function HomeHeroImage() {
  const [src, setSrc] = useState("/images/og-image.svg");
  useEffect(() => {
    const prompt = "A luxury residential neighborhood in Summerlin West, Las Vegas, with modern homes and Red Rock Canyon views, blue sky, and desert landscaping.";
    fetch('/api/generate-image', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt }),
    })
      .then(res => res.json())
      .then(data => {
        if (data.base64) setSrc(`data:image/png;base64,${data.base64}`);
      })
              .catch(() => setSrc("/images/og-image.svg"));
  }, []);
  return (
    <Image
      src={src}
      alt="Luxury homes in Summerlin West with Red Rock Canyon views"
      width={600}
      height={300}
      className={styles.heroImage}
      priority
    />
  );
}

export default function Home() {
  const { isOpen, source, openModal, closeModal } = useLeadCaptureModal();

  const handleFormSuccess = () => {
    // Track successful submission
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("event", "lead_form_success", {
        event_category: "Lead",
        event_label: source,
      });
    }
  };

  const faqs: Faq[] = [
    {
      question: "What are the best neighborhoods in Summerlin West?",
      answer:
        "Popular Summerlin West neighborhoods include The Vistas, Redpoint, Stonebridge, The Cliffs, and Reverence. Each offers unique amenities and lifestyle options.",
    },
    {
      question: "What is the average home price in Summerlin West?",
      answer:
        "The median home price in Summerlin West is around $850,000, with luxury homes reaching $2M+. Prices vary by neighborhood and property type.",
    },
    {
      question: "Are there new construction homes available in Summerlin West?",
      answer:
        "Yes! Summerlin West offers new construction in communities like Redpoint, Stonebridge, and The Cliffs. Contact us for the latest releases and builder incentives.",
    },
    {
      question: "How do I schedule a home tour in Summerlin West?",
      answer:
        "Contact us via the form or call (702) 555-1234 to schedule a private showing of any Summerlin West property.",
    },
    {
      question: "What makes Summerlin West special?",
      answer:
        "Summerlin West offers master-planned communities, top-rated schools, proximity to Red Rock Canyon, and a family-friendly lifestyle with excellent amenities.",
    },
    {
      question: "How can I get a free Summerlin West market report?",
      answer:
        "Fill out the form on this page or visit our Market Reports section to get your free Summerlin West market analysis and neighborhood insights.",
    },
  ];

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <Head>
        <title>
          Summerlin West Homes for Sale | Luxury Real Estate & Communities
        </title>
        <meta
          name="description"
          content="Discover luxury homes for sale in Summerlin West. Explore The Vistas, Redpoint, Stonebridge & more. Get expert guidance from your local Summerlin West real estate specialist."
        />
        <meta
          property="og:title"
          content="Summerlin West Homes for Sale | Luxury Real Estate & Communities"
        />
        <meta
          property="og:description"
          content="Discover luxury homes for sale in Summerlin West. Explore The Vistas, Redpoint, Stonebridge & more. Get expert guidance from your local Summerlin West real estate specialist."
        />
        <meta property="og:image" content="/images/og-image.svg" />
        <link rel="canonical" href="https://summerlinwestrealestate.com/" />
        <script type="application/ld+json" suppressHydrationWarning>
          {JSON.stringify(faqJsonLd)}
        </script>
      </Head>

      <main className={styles.luxuryMainContent}>
        <SummerlinWestOverview />
        {/* Hero Section */}
        <section className={`${styles.hero} ${styles.luxuryHero}`}>
          <h1 className={styles.luxuryHeroTitle}>Summerlin West Homes for Sale</h1>
          <p className={styles.luxurySubtitle}>
            Discover luxury living in Las Vegas' most prestigious master-planned community
          </p>
          {/* AI-generated hero image */}
          <HomeHeroImage />
          <div className={styles.heroStats}>
            <div className={styles.heroStat}>
              <span className={styles.heroStatNumber}>$850K</span>
              <span className={styles.heroStatLabel}>Median Price</span>
            </div>
            <div className={styles.heroStat}>
              <span className={styles.heroStatNumber}>312</span>
              <span className={styles.heroStatLabel}>Active Listings</span>
            </div>
            <div className={styles.heroStat}>
              <span className={styles.heroStatNumber}>14</span>
              <span className={styles.heroStatLabel}>Avg Days on Market</span>
            </div>
          </div>
        </section>
        {/* Dr. Jan Duffy Callout Section */}
        <section className={`${styles.sectionCard} ${styles.calloutSection}`}>
          <h2>Meet Your Summerlin West Real Estate Expert</h2>
          <p><strong>Dr. Jan Duffy, REALTOR®</strong> has helped families discover luxury living at the gateway to Red Rock Canyon since 2015. As a longtime resident and doctorate-level educator, she brings analytical precision and deep local knowledge to every transaction.</p>
          <p>Specializing in <strong>The Ridges, Red Rock Country Club, The Vistas, and The Paseos</strong>, Dr. Duffy is your go-to resource for buying or selling in Summerlin West.</p>
          <p><Link href="/about">Learn more about Dr. Duffy &rarr;</Link></p>
        </section>
        {/* Map of Summerlin West Section */}
        <section
          className={styles.sectionCard}
          aria-label="Map of Summerlin West"
        >
          <div className={styles.sectionCardHeader}>
            <h2 className={styles.luxurySectionTitle}>Map of Summerlin West</h2>
            <p className={styles.luxuryWidgetSubtitle}>Explore neighborhoods, listings, and amenities on the interactive map below.</p>
          </div>
          <div className={styles.sectionCardContent}>
            <div className={styles.mapContainer}>
              <iframe
                title="Summerlin West Map"
                src="https://drjanduffy.realscout.com/homesearch/shared-searches/U2hhcmVhYmxlU2VhcmNoTGluay05NTMy"
                width="100%"
                height="450"
                className={styles.mapIframe}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>
        {/* Property Search Widget */}
        <section className={styles.sectionCard} aria-label="Property Search">
          <RealScoutAdvancedSearch
            title="Find Your Dream Home in Summerlin West"
            subtitle="Search by neighborhood, price, or features. Real-time MLS data."
            variant="page"
            showFeatures={true}
          />
        </section>
        {/* RealScout Listings Widget */}
        <section className={styles.sectionCard} aria-label="Featured Summerlin West Homes">
          <h2 className={styles.luxurySectionTitle}>Featured Summerlin West Homes</h2>
          <p className={styles.luxuryWidgetSubtitle}>
            Browse the latest homes for sale in Summerlin West communities
          </p>
          <RealScoutListings />
        </section>
        {/* Market Overview */}
        <section className={styles.sectionCard} aria-label="Market Overview">
          <h2 className={styles.luxurySectionTitle}>Summerlin West Market Overview</h2>
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>$850K</div>
              <div className={styles.statLabel}>Median Home Price</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>312</div>
              <div className={styles.statLabel}>Active Listings</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>14</div>
              <div className={styles.statLabel}>Avg Days on Market</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>98%</div>
              <div className={styles.statLabel}>List-to-Sale Ratio</div>
            </div>
          </div>
        </section>
        {/* Market Insights */}
        <section className={styles.sectionCard} aria-label="Market Insights">
          <LatestMarketInsights />
        </section>
        {/* Lead Capture/FAQ/CTA */}
        <section className={styles.sectionCard} aria-label="Contact & FAQ">
          <LeadCaptureForm
            variant="inline"
            onSuccess={handleFormSuccess}
          />
          <div className={styles.faqSection}>
            <h2 className={styles.luxurySectionTitle}>Frequently Asked Questions</h2>
            <ul className={styles.faqList}>
              {faqs.map((faq, idx) => (
                <li key={idx} className={styles.faqItem}>
                  <h3 className={styles.faqQuestion}>{faq.question}</h3>
                  <p className={styles.faqAnswer}>{faq.answer}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}
