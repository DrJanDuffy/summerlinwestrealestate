"use client";
import Head from "next/head";
import styles from "./page.module.css";
import LeadCaptureForm from "../components/ui/LeadCaptureForm";
import { useLeadCaptureModal } from "../hooks/useLeadCaptureModal";
import Link from "next/link";
import Image from "next/image";
import LatestMarketInsights from "../components/ui/LatestMarketInsights";
import dynamic from "next/dynamic";
import HomebotWidget from "../components/ui/HomebotWidget";
import Header from "../components/layout/Header";

// Dynamically import RealScoutAdvancedSearch for performance
const RealScoutAdvancedSearch = dynamic(
  () => import("../components/ui/RealScoutAdvancedSearch"),
  { ssr: false },
);

type Faq = {
  question: string;
  answer: string;
};

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
        <meta property="og:image" content="/images/og-image.jpg" />
        <link rel="canonical" href="https://summerlinwestrealestate.com/" />
        <script type="application/ld+json" suppressHydrationWarning>
          {JSON.stringify(faqJsonLd)}
        </script>
      </Head>

      <Header />

      <div className={styles.mainContent}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <h1>Summerlin West Homes for Sale</h1>
          <p className={styles.subtitle}>
            Discover luxury living in Las Vegas' most prestigious master-planned
            community
          </p>
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

        {/* Property Search Widget */}
        <section className={styles.sectionCard}>
          <RealScoutAdvancedSearch
            title="Find Your Dream Home in Summerlin West"
            subtitle="Search by neighborhood, price, or features. Real-time MLS data."
            variant="page"
            showFeatures={true}
          />
        </section>

        {/* Featured Communities */}
        <section className={styles.sectionCard}>
          <h2 className={styles.centerTitle}>
            Featured Summerlin West Communities
          </h2>
          <div className={styles.communitiesGrid}>
            {[
              {
                name: "The Vistas",
                description: "Luxury homes with mountain views",
                price: "$950K - $2.5M",
                image: "https://placehold.co/400x220?text=The+Vistas",
              },
              {
                name: "Redpoint",
                description: "New construction & resort living",
                price: "$750K - $1.8M",
                image: "https://placehold.co/400x220?text=Redpoint",
              },
              {
                name: "Stonebridge",
                description: "Family-friendly with top schools",
                price: "$650K - $1.2M",
                image: "https://placehold.co/400x220?text=Stonebridge",
              },
              {
                name: "The Cliffs",
                description: "Luxury estates & privacy",
                price: "$1.2M - $3M+",
                image: "https://placehold.co/400x220?text=The+Cliffs",
              },
            ].map((community, index) => (
              <div key={index} className={styles.communityCard}>
                <Image
                  src={community.image}
                  alt={`${community.name} homes for sale`}
                  width={400}
                  height={220}
                  className={styles.communityImage}
                />
                <div className={styles.communityContent}>
                  <h3 className={styles.communityTitle}>{community.name}</h3>
                  <p className={styles.communityDescription}>
                    {community.description}
                  </p>
                  <p className={styles.communityPrice}>{community.price}</p>
                  <Link
                    href={`/communities#${community.name.toLowerCase().replace(/\s+/g, "-")}`}
                    className={styles.communityLink}
                  >
                    View Homes
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Market Overview */}
        <section className={styles.sectionCard}>
          <h2 className={styles.centerTitle}>Summerlin West Market Overview</h2>
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

        {/* Why Summerlin West */}
        <section className={styles.sectionCard}>
          <h2 className={styles.centerTitle}>Why Choose Summerlin West?</h2>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🏔️</div>
              <h3>Red Rock Views</h3>
              <p>
                Breathtaking mountain views and proximity to Red Rock Canyon
                National Conservation Area
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🎓</div>
              <h3>Top-Rated Schools</h3>
              <p>
                Exceptional public and private schools with high academic
                performance ratings
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🏊</div>
              <h3>Resort Amenities</h3>
              <p>
                Clubhouses, pools, fitness centers, and social activities in
                every community
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🛒</div>
              <h3>Shopping & Dining</h3>
              <p>
                Downtown Summerlin, Trader Joe's, and fine dining options just
                minutes away
              </p>
            </div>
          </div>
        </section>

        {/* Home Value Widget */}
        <section className={styles.sectionCard}>
          <h2 className={styles.centerTitle}>
            What's Your Summerlin West Home Worth?
          </h2>
          <p className={styles.widgetSubtitle}>
            Get an instant home value estimate for your Summerlin West property
          </p>
          <HomebotWidget />
        </section>

        {/* Latest Market Insights */}
        <section className={styles.sectionCard}>
          <LatestMarketInsights />
        </section>

        {/* Lead Capture */}
        <section className={styles.sectionCard}>
          <h2 className={styles.centerTitle}>
            Ready to Find Your Summerlin West Home?
          </h2>
          <LeadCaptureForm
            variant="inline"
            title="Get Your Free Summerlin West Consultation"
            subtitle="Let's discuss your home search and how I can help you find the perfect Summerlin West property."
            source="Homepage"
            onSuccess={closeModal}
          />
        </section>

        {/* FAQ Section */}
        <section className={styles.sectionCard}>
          <h2 className={styles.centerTitle}>Frequently Asked Questions</h2>
          <div className={styles.faqGrid}>
            {faqs.map((faq, index) => (
              <div key={index} className={styles.faqItem}>
                <h3 className={styles.faqQuestion}>{faq.question}</h3>
                <p className={styles.faqAnswer}>{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Links */}
        <section className={styles.sectionCard}>
          <h2 className={styles.centerTitle}>Explore More</h2>
          <ul className={styles.resourceLinks}>
            <li>
              <Link href="/properties">Browse All Summerlin West Homes</Link>
            </li>
            <li>
              <Link href="/communities">
                Explore Summerlin West Communities
              </Link>
            </li>
            <li>
              <Link href="/market-reports">Get Market Reports</Link>
            </li>
            <li>
              <Link href="/new-homes-summerlin">New Construction Homes</Link>
            </li>
            <li>
              <Link href="/about">Meet Your Summerlin West Expert</Link>
            </li>
            <li>
              <Link href="/contact">Schedule a Consultation</Link>
            </li>
          </ul>
        </section>
      </div>
    </>
  );
}
