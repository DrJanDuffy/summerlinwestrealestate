import styles from "../page.module.css";
import Link from "next/link";
import Header from "@/components/layout/Header";
import SummerlinWestOverview from "@/components/ui/SummerlinWestOverview";
import LatestMarketInsightsClient from '../../components/ui/LatestMarketInsightsClient';
import LeadCaptureFormClient from '../../components/ui/LeadCaptureFormClient';

// Metadata for SEO (replaces Head component)
export const metadata = {
  title: "Contact a Summerlin Real Estate Expert | Summerlin West Real Estate",
  description: "Contact a Summerlin real estate expert for buying, selling, or market questions. Get personalized help with Summerlin homes, communities, and market trends.",
  openGraph: {
    title: "Contact a Summerlin Real Estate Expert | Summerlin West Real Estate",
    description: "Contact a Summerlin real estate expert for buying, selling, or market questions. Get personalized help with Summerlin homes, communities, and market trends.",
  }
};

export default function Contact() {
  const serviceAreas = [
    "Summerlin West",
    "The Vistas",
    "Stonebridge",
    "Redpoint",
    "The Cliffs",
    "Reverence",
    "Downtown Summerlin",
    "All Summerlin Villages",
  ];

  const socialLinks = [
    {
      name: "Facebook",
      url: "https://facebook.com",
      color: "#3A8DDE",
    },
    {
      name: "Instagram",
      url: "https://instagram.com",
      color: "#16B286",
    },
    {
      name: "YouTube",
      url: "https://youtube.com",
      color: "#0A2540",
    },
  ];

  return (
    <div className={styles.page}>
      <Header />
      <main>
        <SummerlinWestOverview />
        <section className={styles.hero}>
          <h1>Contact a Summerlin Real Estate Expert</h1>
          <p className={styles.subtitle}>
            Get in touch for buying, selling, or market questions
          </p>
        </section>
        <section className={styles.sectionCard} aria-label="Market Insights">
          <LatestMarketInsightsClient />
        </section>
        <section className={styles.sectionCard} aria-label="Send a Message">
          <h2>Send a Message</h2>
          <LeadCaptureFormClient
            variant="inline"
            title="Contact a Summerlin Real Estate Expert"
            subtitle="Get personalized help with Summerlin homes, communities, and market trends."
            source="Contact Page"
          />
        </section>
        <section className={styles.sectionCard} aria-label="Quick Links">
          <h2>Quick Links</h2>
          <ul className={styles.resourceLinks}>
            <li>
              <Link href="/market-reports">Summerlin Market Reports</Link>
            </li>
            <li>
              <Link href="/current-listing">Featured Home for Sale</Link>
            </li>
            <li>
              <Link href="/about">Meet Your Summerlin Expert</Link>
            </li>
            <li>
              <Link href="/communities">Explore Summerlin Communities</Link>
            </li>
          </ul>
        </section>
        <section className={styles.sectionCard} aria-label="Office & Service Areas">
          <h2>Our Office</h2>
          <img
            src="https://placehold.co/400x220?text=Office+Location+Map"
            alt="Map showing the office location at 1234 Summerlin Centre Dr, Las Vegas, NV 89138"
            width={400}
            height={220}
            className={styles.officeMap}
            loading="lazy"
          />
          <div className={styles.contactDetails}>
            <div className={styles.contactItem}>
              <strong>Address:</strong> 1234 Summerlin Centre Dr, Las Vegas,
              NV 89138
            </div>
            <div className={styles.contactItem}>
              <strong>Phone:</strong>{" "}
              <a href="tel:7025551234" className={styles.contactLink}>
                (702) 555-1234
              </a>
            </div>
            <div className={styles.contactItem}>
              <strong>Email:</strong>{" "}
              <a
                href="mailto:info@summerlinwestrealestate.com"
                className={styles.contactLink}
              >
                info@summerlinwestrealestate.com
              </a>
            </div>
          </div>
          <div className={styles.socialLinks}>
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener"
                aria-label={social.name}
                className={styles.socialLink}
              >
                {social.name}
              </a>
            ))}
          </div>
        </section>
        <section className={styles.sectionCard} aria-label="Areas We Serve">
          <h2>Areas We Serve</h2>
          <ul className={styles.areasList}>
            {serviceAreas.map((area) => (
              <li key={area} className={styles.areaItem}>
                {area}
              </li>
            ))}
          </ul>
          <div className={styles.responseTime}>
            <strong>Response Time:</strong> We reply to all inquiries within 1
            business day (often much faster!)
          </div>
        </section>
      </main>
    </div>
  );
}
