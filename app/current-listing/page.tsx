import LeadCaptureForm from "../../components/ui/LeadCaptureForm";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../page.module.css";
import LatestMarketInsights from "../../components/ui/LatestMarketInsights";

export default function CurrentListing() {
  const propertyDetails = [
    "4 bedrooms, 3 bathrooms, 2,800 sq ft",
    "Upgraded kitchen, modern flooring, energy-efficient features",
    "Spacious backyard with mountain views",
    "Move-in ready with smart home technology",
  ];

  const communityBenefits = [
    "Access to top-rated Summerlin schools",
    "Beautiful parks and walking trails",
    "Minutes from Downtown Summerlin shopping & dining",
    "Exclusive community events and amenities",
    "Low HOA fees",
  ];

  const marketAnalysis = [
    "Comparable homes in The Vistas have sold for $875k–$950k in the last 6 months",
    "Upgraded kitchen, flooring, and energy-efficient features",
    "Move-in ready with modern finishes",
    "Low days on market for similar homes (avg. 12 days)",
    "Expert local pricing strategy based on current demand",
  ];

  const photoGallery = [1, 2, 3, 4, 5, 6];

  return (
    <div className={styles.page}>
      <Head>
        <title>
          The Vistas Summerlin Home for Sale | Summerlin West Real Estate
        </title>
        <meta
          name="description"
          content="Tour this stunning home for sale in The Vistas, Summerlin. View photos, property details, market analysis, and schedule a private showing with a Summerlin expert."
        />
        <meta
          property="og:title"
          content="The Vistas Summerlin Home for Sale | Summerlin West Real Estate"
        />
        <meta
          property="og:description"
          content="Tour this stunning home for sale in The Vistas, Summerlin. View photos, property details, market analysis, and schedule a private showing with a Summerlin expert."
        />
        <script type="application/ld+json" suppressHydrationWarning>{`
          {
            "@context": "https://schema.org",
            "@type": "Residence",
            "name": "The Vistas Summerlin Home for Sale",
            "description": "Modern 4 bed, 3 bath home in The Vistas, Summerlin. Upgraded kitchen, smart home tech, mountain views.",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "1234 Vistas Edge Dr",
              "addressLocality": "Las Vegas",
              "addressRegion": "NV",
              "postalCode": "89138",
              "addressCountry": "US"
            },
            "image": [
              "https://placehold.co/400x300?text=Photo+1",
              "https://placehold.co/400x300?text=Photo+2"
            ],
            "numberOfRooms": 8,
            "floorSize": {
              "@type": "QuantitativeValue",
              "value": 2800,
              "unitCode": "SQF"
            },
            "offers": {
              "@type": "Offer",
              "price": "899000",
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock"
            }
          }
        `}</script>
      </Head>

      <div className={styles.mainContent}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <h1>The Vistas Summerlin Home for Sale</h1>
          <p className={styles.subtitle}>
            Modern Luxury in the Heart of Summerlin West
          </p>
        </section>

        <LatestMarketInsights />

        {/* Photo Gallery */}
        <section className={styles.sectionCard}>
          <h2 className={styles.centerTitle}>Photo Gallery</h2>
          <div className={styles.photoGallery}>
            {photoGallery.map((i) => (
              <div key={i} className={styles.photoCard}>
                <Image
                  src={`https://placehold.co/400x300?text=Photo+${i}`}
                  alt={`The Vistas Summerlin home photo ${i}`}
                  width={400}
                  height={300}
                  className={styles.photoImage}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Property Details */}
        <section className={styles.sectionCard}>
          <h2 className={styles.centerTitle}>Property Details</h2>
          <ul className={styles.propertyList}>
            {propertyDetails.map((detail, index) => (
              <li key={index} className={styles.propertyItem}>
                {detail}
              </li>
            ))}
          </ul>
        </section>

        {/* Community Benefits */}
        <section className={styles.sectionCard}>
          <h2 className={styles.centerTitle}>Community Benefits</h2>
          <ul className={styles.benefitsList}>
            {communityBenefits.map((benefit, index) => (
              <li key={index} className={styles.benefitItem}>
                {benefit}
              </li>
            ))}
          </ul>
        </section>

        {/* Market Analysis */}
        <section className={styles.sectionCard}>
          <h2 className={styles.centerTitle}>Why This Home is Priced Right</h2>
          <ul className={styles.analysisList}>
            {marketAnalysis.map((analysis, index) => (
              <li key={index} className={styles.analysisItem}>
                {analysis}
              </li>
            ))}
          </ul>
        </section>

        {/* Internal Links Section */}
        <section className={styles.sectionCard}>
          <h2 className={styles.centerTitle}>
            Explore More Summerlin Real Estate
          </h2>
          <ul className={styles.resourceLinks}>
            <li>
              <Link href="/market-reports">
                See all Summerlin market reports
              </Link>
            </li>
            <li>
              <Link href="/communities">
                Explore Summerlin West communities
              </Link>
            </li>
            <li>
              <Link href="/about">Meet your Summerlin real estate expert</Link>
            </li>
            <li>
              <Link href="/contact">Contact for a private showing</Link>
            </li>
          </ul>
        </section>

        {/* Contact Form for Private Showings */}
        <section className={styles.sectionCard}>
          <h2 className={styles.centerTitle}>Request a Private Showing</h2>
          <LeadCaptureForm
            variant="inline"
            title="Request a Private Showing"
            subtitle="Schedule your exclusive tour of this beautiful Vistas home."
            source="Current Listing Page"
          />
        </section>
      </div>
    </div>
  );
}
