"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

const subdivisions = [
  // Luxury and Gated Communities
  {
    name: "Paradiso",
    builder: "Pulte Homes",
    years: "2003-2005",
    homeSizes: "3,000-3,800 sq ft",
    features: ["Gated", "Custom Homes", "3-5 Bedrooms", "Upscale Finishes"],
    type: "Luxury/Gated",
  },
  {
    name: "Palmilla",
    builder: "Woodside Homes",
    years: "2006-2007",
    homeSizes: "2,500-3,400 sq ft",
    features: ["Gated", "Luxury Area", "4-5 Bedrooms", "High-End Amenities"],
    type: "Luxury/Gated",
  },
  {
    name: "Estancia",
    builder: "Woodside Homes",
    years: "2003-2004",
    homeSizes: "2,700-3,900 sq ft",
    features: ["Gated", "Luxury Single-Family Homes"],
    type: "Luxury/Gated",
  },
  {
    name: "Talaverde",
    builder: "Woodside Homes",
    years: "2004",
    homeSizes: "2,058-2,537 sq ft",
    features: ["Gated", "All Single-Story", "Luxury Living"],
    type: "Luxury/Gated",
  },
  {
    name: "Casa Rosa",
    builder: "Kimball Hill Homes",
    years: "2005-2006",
    homeSizes: "1,800-2,400 sq ft",
    features: ["Gated", "Mid-Range Luxury Homes"],
    type: "Luxury/Gated",
  },
  {
    name: "San Marcos",
    builder: "Kimball Hill Homes",
    years: "2002-2004",
    homeSizes: "1,900-2,500 sq ft",
    features: ["Gated", "Established Luxury Neighborhood"],
    type: "Luxury/Gated",
  },
  {
    name: "Sonesta",
    builder: "Woodside Homes",
    years: "2005",
    homeSizes: "1,819-2,461 sq ft",
    features: ["Gated", "All Two-Story Homes"],
    type: "Luxury/Gated",
  },
  // Premium Non-Gated Communities
  {
    name: "Barrington",
    builder: "Custom",
    years: "-",
    homeSizes: "Varies",
    features: ["Custom Luxury Homes", "Premium Lots"],
    type: "Premium Non-Gated",
  },
  {
    name: "Monterossa",
    builder: "Toll Brothers",
    years: "-",
    homeSizes: "Varies",
    features: ["Upscale Homes", "Premium Amenities"],
    type: "Premium Non-Gated",
  },
  {
    name: "Kingwood",
    builder: "R/S, KB, Ryland, William Lyon",
    years: "-",
    homeSizes: "1,500-3,100 sq ft",
    features: ["322 Homes", "Multiple Sub-Areas"],
    type: "Premium Non-Gated",
  },
  // Mid-Range Family Communities
  {
    name: "Ashton Park",
    builder: "-",
    years: "2002-2004",
    homeSizes: "1,600-2,700 sq ft",
    features: ["118 Homes", "2-3 Car Garages", "Family-Oriented"],
    type: "Family",
  },
  {
    name: "Bella Vista",
    builder: "Pulte Homes",
    years: "2002-2003",
    homeSizes: "1,400-1,900 sq ft",
    features: ["106 Homes", "Compact Family Homes"],
    type: "Family",
  },
  {
    name: "Hillstone",
    builder: "Pulte Homes",
    years: "2003-2004",
    homeSizes: "1,500-1,900 sq ft",
    features: ["145 Homes", "Established Neighborhood"],
    type: "Family",
  },
  {
    name: "Portofino",
    builder: "KB Home",
    years: "c. 2003",
    homeSizes: "1,200-2,100 sq ft",
    features: ["213 Homes", "Affordable to Mid-Range"],
    type: "Family",
  },
  {
    name: "Encanto",
    builder: "William Lyon Homes",
    years: "c. 2003",
    homeSizes: "2,000-3,000 sq ft",
    features: ["One & Two-Story", "Varied Styles"],
    type: "Family",
  },
  {
    name: "Somerset",
    builder: "KB Homes",
    years: "2005",
    homeSizes: "1,255-2,027 sq ft",
    features: ["Entry to Mid-Range"],
    type: "Family",
  },
  {
    name: "Summerfield",
    builder: "Pulte Homes",
    years: "2004",
    homeSizes: "1,568-2,031 sq ft",
    features: ["Gated", "Compact Luxury"],
    type: "Family",
  },
  {
    name: "Vista Verde",
    builder: "William Lyon Homes",
    years: "2004-2005",
    homeSizes: "2,003-2,542 sq ft",
    features: ["Quality Construction", "Varied Floor Plans"],
    type: "Family",
  },
  {
    name: "Talega",
    builder: "-",
    years: "2004-2005",
    homeSizes: "1,555-1,923 sq ft",
    features: ["Established Community"],
    type: "Family",
  },
  // Additional Subdivisions
  { name: "Canterra", builder: "-", years: "-", homeSizes: "-", features: ["Single-Family"], type: "Additional" },
  { name: "Capri", builder: "-", years: "-", homeSizes: "-", features: ["Part of The Vistas"], type: "Additional" },
  { name: "Cara Vella", builder: "-", years: "-", homeSizes: "-", features: ["Residential"], type: "Additional" },
  { name: "Miraleste", builder: "-", years: "-", homeSizes: "-", features: ["Established"], type: "Additional" },
  { name: "Sage Hills", builder: "-", years: "-", homeSizes: "-", features: ["Residential"], type: "Additional" },
  { name: "Santalina", builder: "-", years: "-", homeSizes: "-", features: ["Single-Family"], type: "Additional" },
  { name: "Solano", builder: "-", years: "-", homeSizes: "-", features: ["Residential"], type: "Additional" },
  { name: "Sonesta", builder: "-", years: "-", homeSizes: "-", features: ["Neighborhood"], type: "Additional" },
];

export default function ServiceArea() {
  return (
    <div className={styles.page}>
      {/* Hero Section with Map/Visual Anchor */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>The Vistas Service Area</h1>
          <p className={styles.heroSubtitle}>
            Explore all 26 subdivisions of The Vistas village in Summerlin West—luxury, family, and custom homes by top builders, with world-class amenities and breathtaking views.
          </p>
          <div className={styles.heroStats}>
            <div className={styles.heroStat}><span>26</span> Subdivisions</div>
            <div className={styles.heroStat}><span>$550K–$1M+</span> Price Range</div>
            <div className={styles.heroStat}><span>1,200–4,400+ sq ft</span> Home Sizes</div>
          </div>
        </div>
        <div className={styles.heroMapAnchor}>
          <Image src="/images/vistas-map.jpg" alt="The Vistas Map" width={480} height={320} priority className={styles.heroMapImg} />
        </div>
      </section>

      {/* Subdivisions Grid */}
      <section className={styles.sectionCard}>
        <h2 className={styles.centerTitle}>All Vistas Subdivisions</h2>
        <div className={styles.communitiesGrid}>
          {subdivisions.map((sub, idx) => (
            <Link href={`/service-area/${sub.slug}`} key={sub.slug} className={styles.communityCard} style={{ textDecoration: 'none', color: 'inherit', position: 'relative', overflow: 'hidden' }}>
              <div className={styles.cardImageWrap}>
                <Image
                  src={sub.image || "https://placehold.co/600x300?text=The+Vistas"}
                  alt={sub.name}
                  className={styles.cardImage}
                  width={600}
                  height={300}
                  loading="lazy"
                />
                <div className={styles.cardOverlay}>View Details</div>
              </div>
              <div className={styles.communityContent}>
                <h3 className={styles.communityTitle}>{sub.name}</h3>
                <div className={styles.communityMeta}>
                  <span className={styles.featureTag}>{sub.type}</span>
                  {sub.builder !== "-" && <span className={styles.featureTag}>Builder: {sub.builder}</span>}
                  {sub.years !== "-" && <span className={styles.featureTag}>Years: {sub.years}</span>}
                </div>
                <div className={styles.communityDescription}>{sub.features.join(", ")}</div>
                <div className={styles.communityPrice}>{sub.homeSizes}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Amenities Section */}
      <section className={styles.sectionCard}>
        <h2 className={styles.centerTitle}>Village Amenities & Infrastructure</h2>
        <ul className={styles.amenitiesList}>
          <li><strong>Parks:</strong> 3 major parks, 48-foot clock towers, 24-acre Vistas Community Park, sports fields, tennis, pool, and children's lagoon.</li>
          <li><strong>Shopping:</strong> Vista Commons (100,000 sq ft), anchored by Albertsons, banking, fitness, dining.</li>
          <li><strong>Schools:</strong> Linda Rankin Givens Elementary (in-village), zoned to Sig Rogich Middle & Palo Verde High.</li>
          <li><strong>Governance:</strong> Summerlin West Community Association (Howard Hughes Corp), sub-HOAs, strict CC&Rs.</li>
          <li><strong>Views:</strong> Red Rock Canyon to the west, Las Vegas Strip to the east.</li>
        </ul>
      </section>

      {/* Contact CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2>Ready to Tour The Vistas?</h2>
          <p>Contact Dr. Jan Duffy for private showings, market analysis, or exclusive access to off-market properties in Summerlin West.</p>
          <a href="tel:7028420410" className={styles.ctaButton}>Call (702) 842-0410</a>
          <a href="mailto:jan@lasvegashomeexpert.com" className={styles.ctaButtonSecondary}>Email Dr. Jan Duffy</a>
          <div className={styles.ctaSocials}>
            <a href="https://www.youtube.com/@DrDuffy" target="_blank" rel="noopener" aria-label="YouTube"><img src="/images/youtube.svg" alt="YouTube" /></a>
            <a href="https://www.linkedin.com/showcase/berkshire-hathaway-homeservices-summerlin/" target="_blank" rel="noopener" aria-label="LinkedIn"><img src="/images/linkedin.svg" alt="LinkedIn" /></a>
            <a href="https://www.pinterest.com/DrJanDuffy/" target="_blank" rel="noopener" aria-label="Pinterest"><img src="/images/pinterest.svg" alt="Pinterest" /></a>
            <a href="https://www.facebook.com/RealtorDrJanDuffySummerlin" target="_blank" rel="noopener" aria-label="Facebook"><img src="/images/facebook.svg" alt="Facebook" /></a>
          </div>
        </div>
      </section>
    </div>
  );
} 