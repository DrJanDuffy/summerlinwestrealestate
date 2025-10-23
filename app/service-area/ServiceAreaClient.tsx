'use client';
import dynamicImport from 'next/dynamic';
import styles from '../../styles/pages/service-area.module.css';

const RealScoutOfficeListings = dynamicImport(
  () => import('../../components/ui/RealScoutOfficeListings'),
  {
    ssr: false,
  }
);

// Disable SSR for this page to prevent prerendering issues
export const dynamic = 'force-dynamic';

const subdivisions = [
  // Luxury and Gated Communities
  {
    name: 'Paradiso',
    builder: 'Pulte Homes',
    years: '2003-2005',
    homeSizes: '3,000-3,800 sq ft',
    features: ['Gated', 'Custom Homes', '3-5 Bedrooms', 'Upscale Finishes'],
    type: 'Luxury/Gated',
  },
  {
    name: 'Palmilla',
    builder: 'Woodside Homes',
    years: '2006-2007',
    homeSizes: '2,500-3,400 sq ft',
    features: ['Gated', 'Luxury Area', '4-5 Bedrooms', 'High-End Amenities'],
    type: 'Luxury/Gated',
  },
  {
    name: 'Estancia',
    builder: 'Woodside Homes',
    years: '2003-2004',
    homeSizes: '2,700-3,900 sq ft',
    features: ['Gated', 'Luxury Single-Family Homes'],
    type: 'Luxury/Gated',
  },
  {
    name: 'Talaverde',
    builder: 'Woodside Homes',
    years: '2004',
    homeSizes: '2,058-2,537 sq ft',
    features: ['Gated', 'All Single-Story', 'Luxury Living'],
    type: 'Luxury/Gated',
  },
  {
    name: 'Casa Rosa',
    builder: 'Kimball Hill Homes',
    years: '2005-2006',
    homeSizes: '1,800-2,400 sq ft',
    features: ['Gated', 'Mid-Range Luxury Homes'],
    type: 'Luxury/Gated',
  },
  {
    name: 'San Marcos',
    builder: 'Kimball Hill Homes',
    years: '2002-2004',
    homeSizes: '1,900-2,500 sq ft',
    features: ['Gated', 'Established Luxury Neighborhood'],
    type: 'Luxury/Gated',
  },
  {
    name: 'Sonesta',
    builder: 'Woodside Homes',
    years: '2005',
    homeSizes: '1,819-2,461 sq ft',
    features: ['Gated', 'All Two-Story Homes'],
    type: 'Luxury/Gated',
  },
  // Premium Non-Gated Communities
  {
    name: 'Barrington',
    builder: 'Custom',
    years: '-',
    homeSizes: 'Varies',
    features: ['Custom Luxury Homes', 'Premium Lots'],
    type: 'Premium Non-Gated',
  },
  {
    name: 'Monterossa',
    builder: 'Toll Brothers',
    years: '-',
    homeSizes: 'Varies',
    features: ['Upscale Homes', 'Premium Amenities'],
    type: 'Premium Non-Gated',
  },
  {
    name: 'Kingwood',
    builder: 'R/S, KB, Ryland, William Lyon',
    years: '-',
    homeSizes: '1,500-3,100 sq ft',
    features: ['322 Homes', 'Multiple Sub-Areas'],
    type: 'Premium Non-Gated',
  },
  // Mid-Range Family Communities
  {
    name: 'Ashton Park',
    builder: '-',
    years: '2002-2004',
    homeSizes: '1,600-2,700 sq ft',
    features: ['118 Homes', '2-3 Car Garages', 'Family-Oriented'],
    type: 'Family',
  },
  {
    name: 'Bella Vista',
    builder: 'Pulte Homes',
    years: '2002-2003',
    homeSizes: '1,400-1,900 sq ft',
    features: ['106 Homes', 'Compact Family Homes'],
    type: 'Family',
  },
  {
    name: 'Hillstone',
    builder: 'Pulte Homes',
    years: '2003-2004',
    homeSizes: '1,500-1,900 sq ft',
    features: ['145 Homes', 'Established Neighborhood'],
    type: 'Family',
  },
  {
    name: 'Portofino',
    builder: 'KB Home',
    years: 'c. 2003',
    homeSizes: '1,200-2,100 sq ft',
    features: ['213 Homes', 'Affordable to Mid-Range'],
    type: 'Family',
  },
  {
    name: 'Encanto',
    builder: 'William Lyon Homes',
    years: 'c. 2003',
    homeSizes: '2,000-3,000 sq ft',
    features: ['One & Two-Story', 'Varied Styles'],
    type: 'Family',
  },
  {
    name: 'Somerset',
    builder: 'KB Homes',
    years: '2005',
    homeSizes: '1,255-2,027 sq ft',
    features: ['Entry to Mid-Range'],
    type: 'Family',
  },
  {
    name: 'Summerfield',
    builder: 'Pulte Homes',
    years: '2004',
    homeSizes: '1,568-2,031 sq ft',
    features: ['Gated', 'Compact Luxury'],
    type: 'Family',
  },
  {
    name: 'Vista Verde',
    builder: 'William Lyon Homes',
    years: '2004-2005',
    homeSizes: '2,003-2,542 sq ft',
    features: ['Quality Construction', 'Varied Floor Plans'],
    type: 'Family',
  },
  {
    name: 'Talega',
    builder: '-',
    years: '2004-2005',
    homeSizes: '1,555-1,923 sq ft',
    features: ['Established Community'],
    type: 'Family',
  },
  // Additional Subdivisions
  {
    name: 'Canterra',
    builder: '-',
    years: '-',
    homeSizes: '-',
    features: ['Single-Family'],
    type: 'Additional',
  },
  {
    name: 'Capri',
    builder: '-',
    years: '-',
    homeSizes: '-',
    features: ['Part of The Vistas'],
    type: 'Additional',
  },
  {
    name: 'Cara Vella',
    builder: '-',
    years: '-',
    homeSizes: '-',
    features: ['Residential'],
    type: 'Additional',
  },
  {
    name: 'Miraleste',
    builder: '-',
    years: '-',
    homeSizes: '-',
    features: ['Established'],
    type: 'Additional',
  },
  {
    name: 'Sage Hills',
    builder: '-',
    years: '-',
    homeSizes: '-',
    features: ['Residential'],
    type: 'Additional',
  },
  {
    name: 'Santalina',
    builder: '-',
    years: '-',
    homeSizes: '-',
    features: ['Single-Family'],
    type: 'Additional',
  },
  {
    name: 'Solano',
    builder: '-',
    years: '-',
    homeSizes: '-',
    features: ['Residential'],
    type: 'Additional',
  },
  {
    name: 'Sonesta',
    builder: '-',
    years: '-',
    homeSizes: '-',
    features: ['Neighborhood'],
    type: 'Additional',
  },
];

export default function ServiceAreaClient() {
  return (
    <div className={styles.serviceArea}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>
          The Vistas Service Area: Premier Luxury Communities in Summerlin West
        </h1>
        <p className={styles.heroDescription}>
          Discover all 26 exclusive subdivisions within The Vistas village in Summerlin West, Las
          Vegas. From gated luxury communities to family-friendly neighborhoods, explore world-class
          amenities, breathtaking Red Rock Canyon views, and homes built by the most prestigious
          builders in the Las Vegas Valley.
        </p>

        {/* Enhanced Hero Content */}
        <div className={styles.heroStats}>
          <div className={styles.heroStat}>
            <div className={styles.statValue}>26</div>
            <div className={styles.statLabel}>Subdivisions</div>
          </div>
          <div className={styles.heroStat}>
            <div className={styles.statValue}>$600K-$2M+</div>
            <div className={styles.statLabel}>Price Range</div>
          </div>
          <div className={styles.heroStat}>
            <div className={styles.statValue}>15+</div>
            <div className={styles.statLabel}>Top Builders</div>
          </div>
        </div>
      </section>

      {/* Community Overview Section */}
      <section className={styles.communityOverview}>
        <h2 className={styles.sectionTitle}>Why Choose The Vistas in Summerlin West?</h2>
        <div className={styles.overviewGrid}>
          <div className={styles.overviewCard}>
            <h3>Prime Location & Natural Beauty</h3>
            <p>
              The Vistas offers unparalleled access to Red Rock Canyon National Conservation Area,
              providing residents with over 150 miles of hiking trails, stunning mountain views, and
              a connection to nature that's rare in urban Las Vegas.
            </p>
          </div>
          <div className={styles.overviewCard}>
            <h3>World-Class Amenities</h3>
            <p>
              From championship golf courses and resort-style pools to state-of-the-art fitness
              centers and community parks, The Vistas provides amenities that rival luxury resorts
              while maintaining the comfort of home.
            </p>
          </div>
          <div className={styles.overviewCard}>
            <h3>Top-Tier Builders</h3>
            <p>
              Our communities feature homes built by the most respected builders in Las Vegas,
              including Toll Brothers, Pulte Homes, Woodside Homes, and many others, ensuring
              quality construction and modern design.
            </p>
          </div>
          <div className={styles.overviewCard}>
            <h3>Excellent Schools & Services</h3>
            <p>
              The Vistas is served by top-rated schools in the Clark County School District, with
              easy access to medical facilities, shopping centers, and professional services
              throughout Summerlin West.
            </p>
          </div>
        </div>
      </section>

      {/* Community Types Section */}
      <section className={styles.communityTypes}>
        <h2 className={styles.sectionTitle}>Community Types in The Vistas</h2>
        <div className={styles.typesGrid}>
          <div className={styles.typeCard}>
            <h3>Gated Luxury Communities</h3>
            <p>
              Exclusive gated neighborhoods offering the highest level of privacy, security, and
              luxury amenities. These communities feature custom and semi-custom homes with premium
              finishes and larger lot sizes.
            </p>
            <ul>
              <li>Paradiso - Custom luxury homes with mountain views</li>
              <li>Palmilla - Gated luxury with resort-style amenities</li>
              <li>Estancia - Single-family luxury homes</li>
              <li>Talaverde - All single-story luxury living</li>
            </ul>
          </div>
          <div className={styles.typeCard}>
            <h3>Family-Friendly Neighborhoods</h3>
            <p>
              Well-established communities perfect for families, featuring excellent schools, parks,
              and recreational facilities. These neighborhoods offer a variety of home styles and
              price points.
            </p>
            <ul>
              <li>Kingwood - Established family community</li>
              <li>Solano - Family-friendly with great amenities</li>
              <li>Encanto - Modern family homes</li>
              <li>Miraleste - Upscale family living</li>
            </ul>
          </div>
          <div className={styles.typeCard}>
            <h3>Premium Non-Gated Communities</h3>
            <p>
              High-quality neighborhoods that offer luxury living without the restrictions of gated
              communities, providing easy access to amenities and services while maintaining privacy
              and exclusivity.
            </p>
            <ul>
              <li>Barrington - Custom luxury homes</li>
              <li>Monterossa - Toll Brothers upscale homes</li>
              <li>Canterra - Modern luxury living</li>
              <li>Portofino - Mediterranean-style homes</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Subdivisions Grid */}
      <section className={styles.subdivisions}>
        <h2 className={styles.subdivisionsTitle}>Complete Directory of Vistas Subdivisions</h2>
        <p className={styles.subdivisionsDescription}>
          Explore all 26 subdivisions within The Vistas village. Each community offers unique
          features, amenities, and architectural styles, allowing you to find the perfect
          neighborhood that matches your lifestyle and preferences.
        </p>
        <div className={styles.subdivisionsGrid}>
          {subdivisions.map((sub, _idx) => (
            <div key={sub.name} className={styles.subdivisionCard}>
              <div className={styles.subdivisionImage}>Image</div>
              <div className={styles.subdivisionInfo}>
                <div className={styles.subdivisionName}>{sub.name}</div>
                <div className={styles.subdivisionType}>{sub.type}</div>
                <div className={styles.subdivisionDescription}>{sub.features.join(', ')}</div>
                <div className={styles.subdivisionStats}>
                  <div className={styles.stat}>
                    <div className={styles.statValue}>{sub.homeSizes}</div>
                    <div className={styles.statLabel}>Home Sizes</div>
                  </div>
                  <div className={styles.stat}>
                    <div className={styles.statValue}>{sub.builder}</div>
                    <div className={styles.statLabel}>Builder</div>
                  </div>
                  {sub.years && sub.years !== '-' && (
                    <div className={styles.stat}>
                      <div className={styles.statValue}>{sub.years}</div>
                      <div className={styles.statLabel}>Years Built</div>
                    </div>
                  )}
                </div>
                <button className={styles.viewButton}>View Listings</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Amenities Section */}
      <section className={styles.subdivisions}>
        <h2 className={styles.subdivisionsTitle}>Village Amenities & Infrastructure</h2>
        <ul>
          <li>
            <strong>Parks:</strong> 3 major parks, 48-foot clock towers, 24-acre Vistas Community
            Park, sports fields, tennis, pool, and children&apos;s lagoon.
          </li>
          <li>
            <strong>Shopping:</strong> Vista Commons (100,000 sq ft), anchored by Albertsons,
            banking, fitness, dining.
          </li>
          <li>
            <strong>Schools:</strong> Linda Rankin Givens Elementary (in-village), zoned to Sig
            Rogich Middle & Palo Verde High.
          </li>
          <li>
            <strong>Governance:</strong> Summerlin West Community Association (Howard Hughes Corp),
            sub-HOAs, strict CC&Rs.
          </li>
          <li>
            <strong>Views:</strong> Red Rock Canyon to the west, Las Vegas Strip to the east.
          </li>
        </ul>
      </section>

      {/* Contact CTA */}
      <section className={styles.subdivisions}>
        <div>
          <h2 className={styles.subdivisionsTitle}>Ready to Tour The Vistas?</h2>
          <p>
            Contact Dr. Jan Duffy for private showings, market analysis, or exclusive access to
            off-market properties in Summerlin West.
          </p>
          <a href="tel:7025500112" className={styles.viewButton}>
            Call (702) 550-0112
          </a>
          <a href="mailto:DrJanSells@SummerlinWestRealEstate.com" className={styles.viewButton}>
            Email Dr. Jan Duffy
          </a>
        </div>
      </section>

      {/* Advanced Property Search */}
      <section className={styles.subdivisions}>
        <h2 className={styles.subdivisionsTitle}>Advanced Property Search in The Vistas</h2>
        <p>
          Use our advanced search tool to find properties in The Vistas subdivisions. Filter by
          price, features, and more to discover your perfect home in this premier community.
        </p>
        {/* @ts-ignore - RealScout web component */}
        <realscout-advanced-search agent-encoded-id="QWdlbnQtMjI1MDUw"></realscout-advanced-search>
      </section>

      {/* Simple Property Search */}
      <section className={styles.subdivisions}>
        <h2 className={styles.subdivisionsTitle}>Quick Property Search in The Vistas</h2>
        <p>
          Browse available properties in The Vistas subdivisions with our simple search tool.
          Perfect for quick property browsing in this premier community.
        </p>
        {/* @ts-ignore - RealScout web component */}
        <realscout-simple-search agent-encoded-id="QWdlbnQtMjI1MDUw"></realscout-simple-search>
      </section>

      {/* Office Listings Widget */}
      <section className={styles.subdivisions}>
        <h2 className={styles.subdivisionsTitle}>Office Properties in The Vistas</h2>
        <p>
          Explore office properties and commercial real estate opportunities in The Vistas
          subdivisions. From professional office spaces to commercial buildings, find the perfect
          location for your business.
        </p>
        {/* @ts-ignore - RealScout web component */}
        <RealScoutOfficeListings
          agentEncodedId="QWdlbnQtMjI1MDUw"
          sortOrder="PRICE_LOW"
          listingStatus="For Sale"
          propertyTypes=",SFR,OTHER"
          priceMin={500000}
          priceMax={600000}
          className="mt-6"
        />
      </section>
    </div>
  );
}
