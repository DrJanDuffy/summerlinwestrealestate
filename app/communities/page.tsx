"use client";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../page.module.css";
import LatestMarketInsightsClient from '../../components/ui/LatestMarketInsightsClient';
import RealScoutWidget from '../../components/ui/RealScoutWidget';

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
      <main className={styles.mainContent} aria-label="Summerlin West Communities">
        <section className={styles.hero}>
          <h1>Summerlin West Communities</h1>
          <p className={styles.subtitle}>Discover the best neighborhoods in Summerlin for your next home</p>
        </section>
        <LatestMarketInsightsClient />
        <section className={styles.sectionCard} aria-label="Featured Neighborhoods">
          <h2 className={styles.centerTitle}>Featured Neighborhoods</h2>
          <div className={styles.communitiesGrid}>
            {["The Vistas","The Paseos","Stonebridge","Redpoint","Redpoint Square","Reverence"].map((name) => (
              <div key={name} className={styles.communityCard}>
                <Image src={`https://placehold.co/400x220?text=${encodeURIComponent(name)}`} alt={`${name} neighborhood in Summerlin`} width={400} height={220} className={styles.communityImage} />
                <div className={styles.communityContent}>
                  <h3 className={styles.communityTitle}>{name}</h3>
                  <p className={styles.communityDescription}>Learn more about {name} and see available homes.</p>
                  <Link href={`/communities#${name.toLowerCase().replace(/\s/g,'-')}`} className={styles.communityLink}>View Details</Link>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className={styles.sectionCard} aria-label="Why Live in Summerlin West?">
          <h2 className={styles.centerTitle}>Why Live in Summerlin West?</h2>
          <div className={styles.featuresGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🎓</div>
              <h3 className={styles.featureTitle}>Top-Rated Schools</h3>
              <p className={styles.featureDescription}>
                Exceptional public and private schools with high academic performance and excellent extracurricular programs.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🏞️</div>
              <h3 className={styles.featureTitle}>Parks & Recreation</h3>
              <p className={styles.featureDescription}>
                Access to Red Rock Canyon, walking trails, parks, and outdoor recreation for all ages and interests.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🛒</div>
              <h3 className={styles.featureTitle}>Modern Amenities</h3>
              <p className={styles.featureDescription}>
                Shopping at Downtown Summerlin, Trader Joe's, fine dining, and all the conveniences you need.
              </p>
            </div>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🤝</div>
              <h3 className={styles.featureTitle}>Strong Community</h3>
              <p className={styles.featureDescription}>
                Family-friendly neighborhoods with a strong sense of community, safety, and social activities.
              </p>
            </div>
          </div>
        </section>
        <section className={styles.sectionCard} aria-label="Community Comparison">
          <h2 className={styles.centerTitle}>Community Comparison</h2>
          <div className={styles.comparisonTable} role="table">
            <div className={styles.tableHeader} role="row">
              <div className={styles.tableCell} role="columnheader">Community</div>
              <div className={styles.tableCell} role="columnheader">Price Range</div>
              <div className={styles.tableCell} role="columnheader">Home Types</div>
              <div className={styles.tableCell} role="columnheader">Special Features</div>
            </div>
            {communities.slice(0, 4).map((community, index) => (
              <div key={index} className={styles.tableRow} role="row">
                <div className={styles.tableCell} role="cell">
                  <strong>{community.name}</strong>
                </div>
                <div className={styles.tableCell} role="cell">{community.priceRange}</div>
                <div className={styles.tableCell} role="cell">Single Family</div>
                <div className={styles.tableCell} role="cell">{community.features[0]}</div>
              </div>
            ))}
          </div>
        </section>
        <section className={styles.sectionCard} aria-label="Explore All Summerlin West Communities">
          <h2 className={styles.centerTitle}>Explore All Summerlin West Communities</h2>
          <div className={styles.communitiesGrid}>
            {communities.map((community) => (
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
          <div style={{marginTop: '2.5rem'}}>
            <RealScoutWidget priceMin={600000} />
          </div>
        </section>
        <section className={styles.sectionCard} aria-label="Summerlin West Market Overview">
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
        <section className={styles.sectionCard} aria-label="Explore More">
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
        <section className={styles.sectionCard} aria-label="Featured Summerlin West Neighborhoods">
          <h2 className={styles.centerTitle}>Featured Summerlin West Neighborhoods</h2>
          <ul className={styles.featureList}>
            <li><strong>The Vistas:</strong> Luxury homes with stunning mountain views and gated communities.</li>
            <li><strong>Redpoint:</strong> New construction, modern amenities, and walkable parks.</li>
            <li><strong>Stonebridge:</strong> Family-friendly, close to top-rated schools and Red Rock Canyon.</li>
            <li><strong>The Cliffs:</strong> Resort-style living, scenic desert landscapes, and exclusive amenities.</li>
            <li><strong>Reverence:</strong> Elevated living, private club access, and panoramic city views.</li>
          </ul>
        </section>
      </main>
    </div>
  );
}
