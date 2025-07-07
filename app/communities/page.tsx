"use client";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../page.module.css";
import LatestMarketInsightsClient from '../../components/ui/LatestMarketInsightsClient';

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
      <section className={styles.hero} style={{marginBottom: '2rem'}}>
        <h1>Summerlin West Communities</h1>
        <p className={styles.subtitle}>Discover the best neighborhoods in Summerlin for your next home</p>
      </section>
      <LatestMarketInsightsClient />
      <section style={{marginBottom: '2.5rem'}}>
        <h2>Featured Neighborhoods</h2>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem', maxWidth: '900px', margin: '0 auto'}}>
          {["The Vistas","The Paseos","Stonebridge","Redpoint","Redpoint Square","Reverence"].map((name, i) => (
            <div key={name} style={{borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', background: '#fff'}}>
              <Image src={`https://placehold.co/400x220?text=${encodeURIComponent(name)}`} alt={`${name} neighborhood in Summerlin`} width={400} height={220} style={{width: '100%', height: 'auto', display: 'block'}} />
              <div style={{padding: '1rem'}}>
                <h3 style={{margin: 0}}>{name}</h3>
                <p style={{fontSize: '0.98rem', color: '#0A2540'}}>Learn more about {name} and see available homes.</p>
                <Link href={`/communities#${name.toLowerCase().replace(/\s/g,'-')}`}>View Details</Link>
              </div>
            </div>
          ))}
        </div>
      </section>
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
      <section className={styles.sectionCard}>
        <h2>Featured Summerlin West Neighborhoods</h2>
        <ul className={styles.featureList}>
          <li><strong>The Vistas:</strong> Luxury homes with stunning mountain views and gated communities.</li>
          <li><strong>Redpoint:</strong> New construction, modern amenities, and walkable parks.</li>
          <li><strong>Stonebridge:</strong> Family-friendly, close to top-rated schools and Red Rock Canyon.</li>
          <li><strong>The Cliffs:</strong> Resort-style living, scenic desert landscapes, and exclusive amenities.</li>
          <li><strong>Reverence:</strong> Elevated living, private club access, and panoramic city views.</li>
        </ul>
      </section>
    </div>
  );
}
