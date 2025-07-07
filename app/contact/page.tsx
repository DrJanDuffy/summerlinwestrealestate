"use client";
import dynamic from "next/dynamic";
const LeadCaptureForm = dynamic(
  () => import("../../components/ui/LeadCaptureForm"),
  { ssr: false },
);
import Head from "next/head";
import Link from "next/link";
import styles from "../page.module.css";
import Image from "next/image";
const LatestMarketInsights = dynamic(
  () => import("../../components/ui/LatestMarketInsights"),
  { ssr: false },
);

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
      <Head>
        <title>
          Contact a Summerlin Real Estate Expert | Summerlin West Real Estate
        </title>
        <meta
          name="description"
          content="Contact a Summerlin real estate expert for buying, selling, or market questions. Get personalized help with Summerlin homes, communities, and market trends."
        />
        <meta
          property="og:title"
          content="Contact a Summerlin Real Estate Expert | Summerlin West Real Estate"
        />
        <meta
          property="og:description"
          content="Contact a Summerlin real estate expert for buying, selling, or market questions. Get personalized help with Summerlin homes, communities, and market trends."
        />
      </Head>

      <div className={styles.mainContent}>
        <section className={styles.hero}>
          <h1>Contact a Summerlin Real Estate Expert</h1>
          <p className={styles.subtitle}>
            Get in touch for buying, selling, or market questions
          </p>
        </section>

        <LatestMarketInsights />

        {/* Contact Form Section */}
        <section className={styles.sectionCard}>
          <h2 className={styles.centerTitle}>Send a Message</h2>
          <LeadCaptureForm
            variant="inline"
            title="Contact a Summerlin Real Estate Expert"
            subtitle="Get personalized help with Summerlin homes, communities, and market trends."
            source="Contact Page"
          />
        </section>

        {/* Quick Links Section */}
        <section className={styles.sectionCard}>
          <h2 className={styles.centerTitle}>Quick Links</h2>
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

        {/* Office Location & Contact Info */}
        <section className={styles.contactGrid}>
          <div className={styles.officeInfo}>
            <h2 className={styles.centerTitle}>Our Office</h2>
            <Image
              src="https://placehold.co/400x220?text=Office+Location+Map"
              alt="Office Location Map"
              width={400}
              height={220}
              className={styles.officeMap}
              priority
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
                  style={{ color: social.color }}
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>

          <div className={styles.serviceAreas}>
            <h2 className={styles.centerTitle}>Areas We Serve</h2>
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
          </div>
        </section>
      </div>
    </div>
  );
}
