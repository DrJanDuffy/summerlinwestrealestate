"use client";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../page.module.css";
import dynamic from "next/dynamic";
import Header from "@/components/layout/Header";
import SummerlinWestOverview from "@/components/ui/SummerlinWestOverview";
const LatestMarketInsights = dynamic(
  () => import("../../components/ui/LatestMarketInsights"),
  { ssr: false },
);
const RealScoutAdvancedSearch = dynamic(
  () => import("../../components/ui/RealScoutAdvancedSearch"),
  { ssr: false },
);
const RealScoutListings = dynamic(
  () => import("../../components/ui/RealScoutListings"),
  { ssr: false },
);

export default function Communities() {
  const communities = [
    {
      name: "The Vistas",
      description: "Luxury homes with stunning mountain views",
      priceRange: "$950K - $2.5M",
      features: ["Mountain Views", "Luxury Homes", "Gated Community"],
      image: "https://placehold.co/400x220?text=The+Vistas",
    },
    {
      name: "The Paseos",
      description: "Family-friendly neighborhood with top schools",
      priceRange: "$750K - $1.5M",
      features: ["Top Schools", "Family-Friendly", "Parks Nearby"],
      image: "https://placehold.co/400x220?text=The+Paseos",
    },
    {
      name: "Stonebridge",
      description: "Modern homes with resort-style amenities",
      priceRange: "$650K - $1.2M",
      features: ["Resort Amenities", "New Construction", "Walking Trails"],
      image: "https://placehold.co/400x220?text=Stonebridge",
    },
    {
      name: "Redpoint",
      description: "New construction with contemporary design",
      priceRange: "$750K - $1.8M",
      features: ["New Construction", "Contemporary", "Builder Incentives"],
      image: "https://placehold.co/400x220?text=Redpoint",
    },
    {
      name: "Redpoint Square",
      description: "Urban-style living in Summerlin West",
      priceRange: "$600K - $1.1M",
      features: ["Urban Style", "Walkable", "Downtown Access"],
      image: "https://placehold.co/400x220?text=Redpoint+Square",
    },
    {
      name: "Reverence",
      description: "Luxury estates with privacy and elegance",
      priceRange: "$1.2M - $3M+",
      features: ["Luxury Estates", "Privacy", "Elegant Design"],
      image: "https://placehold.co/400x220?text=Reverence",
    },
  ];

  return (
    <div className={styles.page}>
      <Head>
        <title>
          Summerlin West Communities | Luxury Neighborhoods & Homes for Sale
        </title>
        <meta
          name="description"
          content="Explore all Summerlin West communities including The Vistas, Redpoint, Stonebridge & more. Find neighborhood guides, amenities, and expert insights for Summerlin real estate."
        />
        <meta
          property="og:title"
          content="Summerlin West Communities | Luxury Neighborhoods & Homes for Sale"
        />
        <meta
          property="og:description"
          content="Explore all Summerlin West communities including The Vistas, Redpoint, Stonebridge & more. Find neighborhood guides, amenities, and expert insights for Summerlin real estate."
        />
      </Head>

      <Header />
      <SummerlinWestOverview />

      <div className={styles.mainContent}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <h1>Summerlin West Communities</h1>
          <p className={styles.subtitle}>
            Discover the best neighborhoods in Summerlin West for your next home
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

        <LatestMarketInsights />

        {/* Property Search Widget */}
        <section className={styles.sectionCard}>
          <RealScoutAdvancedSearch
            title="Find Your Perfect Summerlin West Home"
            subtitle="Search by community, price, or features. Real-time MLS data."
            variant="page"
            showFeatures={true}
          />
        </section>

        {/* RealScout Listings Widget */}
        <section className={styles.sectionCard}>
          <h2 className={styles.centerTitle}>
            Featured Summerlin West Homes
          </h2>
          <p className={styles.widgetSubtitle}>
            Browse the latest homes for sale in Summerlin West communities
          </p>
          <RealScoutListings />
        </section>

        {/* Why Summerlin West */}
        <section className={styles.sectionCard}>
          <h2 className={styles.centerTitle}>Why Live in Summerlin West?</h2>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🎓</div>
              <h3>Top-Rated Schools</h3>
              <p>
                Exceptional public and private schools with high academic
                performance and excellent extracurricular programs.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🏞️</div>
              <h3>Parks & Recreation</h3>
              <p>
                Access to Red Rock Canyon, walking trails, parks, and outdoor
                recreation for all ages and interests.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🛒</div>
              <h3>Modern Amenities</h3>
              <p>
                Shopping at Downtown Summerlin, Trader Joe's, fine dining, and
                all the conveniences you need.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🤝</div>
              <h3>Strong Community</h3>
              <p>
                Family-friendly neighborhoods with a strong sense of community,
                safety, and social activities.
              </p>
            </div>
          </div>
        </section>

        {/* Community Comparison */}
        <section className={styles.sectionCard}>
          <h2 className={styles.centerTitle}>Community Comparison</h2>
          <div className={styles.comparisonTable}>
            <div className={styles.tableHeader}>
              <div className={styles.tableCell}>Community</div>
              <div className={styles.tableCell}>Price Range</div>
              <div className={styles.tableCell}>Home Types</div>
              <div className={styles.tableCell}>Special Features</div>
            </div>
            {communities.slice(0, 4).map((community, index) => (
              <div key={index} className={styles.tableRow}>
                <div className={styles.tableCell}>
                  <strong>{community.name}</strong>
                </div>
                <div className={styles.tableCell}>{community.priceRange}</div>
                <div className={styles.tableCell}>Single Family</div>
                <div className={styles.tableCell}>{community.features[0]}</div>
              </div>
            ))}
          </div>
        </section>

        {/* All Communities Grid */}
        <section className={styles.sectionCard}>
          <h2 className={styles.centerTitle}>Explore All Summerlin West Communities</h2>
          <div className={styles.communitiesGrid}>
            {communities.map((community, idx) => (
              <div className={styles.communityCard} key={community.name}>
                <img
                  src={community.image}
                  alt={community.name}
                  className={styles.communityImage}
                  width={400}
                  height={220}
                  loading="lazy"
                />
                <div className={styles.communityContent}>
                  <h3 className={styles.communityTitle}>{community.name}</h3>
                  <p className={styles.communityDescription}>{community.description}</p>
                  <div className={styles.communityPrice}>{community.priceRange}</div>
                  <div>
                    {community.features.map((feature) => (
                      <span
                        key={feature}
                        className={styles.featureTag}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
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
              <div className={styles.statNumber}>6</div>
              <div className={styles.statLabel}>Communities</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>$850K</div>
              <div className={styles.statLabel}>Median Price</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>312</div>
              <div className={styles.statLabel}>Active Listings</div>
            </div>
            <div className={styles.statCard}>
              <div className={styles.statNumber}>98%</div>
              <div className={styles.statLabel}>List-to-Sale Ratio</div>
            </div>
          </div>
        </section>

        {/* Explore More */}
        <section className={styles.sectionCard}>
          <h2 className={styles.centerTitle}>Explore More</h2>
          <ul className={styles.resourceLinks}>
            <li>
              <Link href="/properties">Browse All Summerlin West Homes</Link>
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
              <Link href="/contact">Schedule Community Tours</Link>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
