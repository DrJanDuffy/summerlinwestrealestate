import LeadCaptureForm from "../../components/ui/LeadCaptureForm";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../page.module.css";
import LatestMarketInsights from "../../components/ui/LatestMarketInsights";

export default function CurrentListing() {
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
      {/* Hero Section */}
      <section className={styles.hero} style={{ marginBottom: "2rem" }}>
        <h1>The Vistas Summerlin Home for Sale</h1>
        <p className={styles.subtitle}>
          Modern Luxury in the Heart of Summerlin West
        </p>
      </section>
      <LatestMarketInsights />

      {/* Photo Gallery */}
      <section style={{ marginBottom: "2.5rem" }}>
        <h2 style={{ textAlign: "center", marginBottom: "1.5rem" }}>
          Photo Gallery
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "1.5rem",
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              style={{
                borderRadius: "8px",
                overflow: "hidden",
                boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
              }}
            >
              <Image
                src={`https://placehold.co/400x300?text=Photo+${i}`}
                alt={`The Vistas Summerlin home photo ${i}`}
                width={400}
                height={300}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* Property Details */}
      <section
        style={{
          marginBottom: "2.5rem",
          background: "#fff",
          borderRadius: "8px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          padding: "2rem 1rem",
        }}
      >
        <h2>Property Details</h2>
        <ul
          style={{
            color: "#0A2540",
            fontSize: "1.08rem",
            marginLeft: "1rem",
            listStyle: "disc inside",
          }}
        >
          <li>4 bedrooms, 3 bathrooms, 2,800 sq ft</li>
          <li>Upgraded kitchen, modern flooring, energy-efficient features</li>
          <li>Spacious backyard with mountain views</li>
          <li>Move-in ready with smart home technology</li>
        </ul>
      </section>

      {/* Community Benefits */}
      <section style={{ marginBottom: "2.5rem" }}>
        <h2>Community Benefits</h2>
        <ul
          style={{
            listStyle: "disc inside",
            color: "#0A2540",
            fontSize: "1.05rem",
            marginLeft: "1rem",
          }}
        >
          <li>Access to top-rated Summerlin schools</li>
          <li>Beautiful parks and walking trails</li>
          <li>Minutes from Downtown Summerlin shopping & dining</li>
          <li>Exclusive community events and amenities</li>
          <li>Low HOA fees</li>
        </ul>
      </section>

      {/* Market Analysis */}
      <section
        style={{
          marginBottom: "2.5rem",
          background: "#fff",
          borderRadius: "8px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          padding: "2rem 1rem",
        }}
      >
        <h2>Why This Home is Priced Right</h2>
        <ul
          style={{
            listStyle: "disc inside",
            color: "#0A2540",
            fontSize: "1.05rem",
            marginLeft: "1rem",
          }}
        >
          <li>
            Comparable homes in The Vistas have sold for $875k–$950k in the last
            6 months
          </li>
          <li>Upgraded kitchen, flooring, and energy-efficient features</li>
          <li>Move-in ready with modern finishes</li>
          <li>Low days on market for similar homes (avg. 12 days)</li>
          <li>Expert local pricing strategy based on current demand</li>
        </ul>
      </section>

      {/* Internal Links Section */}
      <section
        style={{
          marginBottom: "2.5rem",
          background: "#F7F9FC",
          borderRadius: "8px",
          padding: "2rem 1rem",
        }}
      >
        <h2>Explore More Summerlin Real Estate</h2>
        <ul
          style={{
            color: "#3A8DDE",
            fontWeight: 600,
            fontSize: "1.08rem",
            marginLeft: "1rem",
            listStyle: "disc inside",
          }}
        >
          <li>
            <Link href="/market-reports">See all Summerlin market reports</Link>
          </li>
          <li>
            <Link href="/communities">Explore Summerlin West communities</Link>
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
      <section
        style={{
          marginBottom: "2.5rem",
          background: "#fff",
          borderRadius: "8px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          padding: "2rem 1rem",
        }}
      >
        <h2 style={{ textAlign: "center", marginBottom: "1.5rem" }}>
          Request a Private Showing
        </h2>
        <LeadCaptureForm
          variant="inline"
          title="Request a Private Showing"
          subtitle="Schedule your exclusive tour of this beautiful Vistas home."
          source="Current Listing Page"
        />
      </section>
    </div>
  );
}
