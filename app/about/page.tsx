"use client";
import Head from "next/head";
import Image from "next/image";
import dynamic from "next/dynamic";
import Link from "next/link";
import styles from "../page.module.css";
import Header from "@/components/layout/Header";
import SummerlinWestOverview from "@/components/ui/SummerlinWestOverview";
const LatestMarketInsights = dynamic(
  () => import("../../components/ui/LatestMarketInsights"),
  { ssr: false },
);
const LeadCaptureForm = dynamic(
  () => import("../../components/ui/LeadCaptureForm"),
  { ssr: false },
);

export default function About() {
  return (
    <div className={styles.page}>
      <Head>
        <title>
          About Your Summerlin Real Estate Expert | Summerlin West Real Estate
        </title>
        <meta
          name="description"
          content="Meet your Summerlin real estate expert. Learn about experience, local knowledge, and commitment to helping buyers and sellers in Summerlin West."
        />
        <meta
          property="og:title"
          content="About Your Summerlin Real Estate Expert | Summerlin West Real Estate"
        />
        <meta
          property="og:description"
          content="Meet your Summerlin real estate expert. Learn about experience, local knowledge, and commitment to helping buyers and sellers in Summerlin West."
        />
        <script type="application/ld+json" suppressHydrationWarning>{`
          {
            "@context": "https://schema.org",
            "@type": "Person",
            "name": "Summerlin Real Estate Expert",
            "jobTitle": "Real Estate Agent",
            "worksFor": {
              "@type": "RealEstateAgent",
              "name": "Summerlin West Real Estate"
            },
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Summerlin",
              "addressRegion": "NV",
              "addressCountry": "US"
            },
            "description": "Local Summerlin real estate expert with 15+ years of experience helping buyers and sellers in Summerlin West."
          }
        `}</script>
      </Head>

      <Header />
      <main className={styles.luxuryMainContent}>
        <SummerlinWestOverview />
        <section className={`${styles.hero} ${styles.luxuryHero}`}>
          <h1 className={styles.luxuryHeroTitle}>About Your Summerlin Real Estate Expert</h1>
          <p className={styles.luxurySubtitle}>
            Local knowledge. Proven results. Personalized service.
          </p>
        </section>
        <section className={styles.sectionCard}>
          <LatestMarketInsights />
        </section>
        {/* Agent Profile Section */}
        <section className={styles.sectionCard}>
          <div className={styles.contentGrid}>
            <Image
              src="https://placehold.co/280x280?text=Agent+Photo"
              alt="Summerlin real estate agent photo"
              width={280}
              height={280}
              className={styles.agentPhoto}
              priority
            />
            <div className={styles.agentInfo}>
              <h2 className={styles.luxurySectionTitle}>Meet Your Agent</h2>
              <p className={styles.agentIntro}>
                With over 15 years of dedicated experience in Summerlin real estate, I've helped hundreds of families find their perfect homes and achieve their real estate goals. As a local resident and community advocate, I bring deep market knowledge and personal commitment to every transaction.
              </p>
              <ul className={styles.agentHighlights}>
                <li>15+ years of Summerlin real estate experience</li>
                <li>Top producer in Summerlin West</li>
                <li>Local resident and community advocate</li>
                <li>Personalized service for buyers and sellers</li>
                <li>Certified Luxury Home Specialist</li>
                <li>Member of Las Vegas Realtors Association</li>
              </ul>
            </div>
          </div>
        </section>
        {/* Why Choose Section */}
        <section className={styles.sectionCard}>
          <h2 className={styles.luxurySectionTitle}>Why Work With a Local Expert?</h2>
          <div className={styles.expertiseGrid}>
            <div className={styles.expertiseCard}>
              <div className={styles.expertiseIcon}>🏠</div>
              <h3>Local Market Knowledge</h3>
              <p>
                In-depth understanding of Summerlin neighborhoods, schools,
                amenities, and market trends that only comes from living and
                working here for years.
              </p>
            </div>
            <div className={styles.expertiseCard}>
              <div className={styles.expertiseIcon}>💼</div>
              <h3>Proven Negotiation Skills</h3>
              <p>
                Expert negotiation and marketing strategies that consistently
                deliver results for both buyers and sellers in competitive
                markets.
              </p>
            </div>
            <div className={styles.expertiseCard}>
              <div className={styles.expertiseIcon}>🤝</div>
              <h3>Trusted by Hundreds</h3>
              <p>
                Built lasting relationships with hundreds of local families
                through honest advice, transparent communication, and
                exceptional service.
              </p>
            </div>
            <div className={styles.expertiseCard}>
              <div className={styles.expertiseIcon}>🎯</div>
              <h3>Goal-Focused Approach</h3>
              <p>
                Committed to understanding your unique needs and working
                tirelessly to achieve your specific real estate objectives.
              </p>
            </div>
          </div>
        </section>
        {/* Community Involvement */}
        <section className={styles.sectionCard}>
          <div className={styles.contentGrid}>
            <div className={styles.communityContent}>
              <h2 className={styles.luxurySectionTitle}>Giving Back to Summerlin</h2>
              <p className={styles.contentText}>
                I believe in supporting the community that has given me so much. From sponsoring local school events to volunteering at neighborhood cleanups and supporting youth sports, I'm committed to making Summerlin West a better place for everyone.
              </p>
              <div className={styles.communityActivities}>
                <h3>Community Involvement</h3>
                <ul className={styles.contentList}>
                  <li>Sponsor of Summerlin youth sports programs</li>
                  <li>Volunteer at local school events and fundraisers</li>
                  <li>Active member of Summerlin West Community Association</li>
                  <li>Supporter of local charities and non-profits</li>
                </ul>
              </div>
            </div>
            <Image
              src="https://placehold.co/240x240?text=Community"
              alt="Community involvement in Summerlin West"
              width={240}
              height={240}
              className={styles.communityImage}
              priority
            />
          </div>
        </section>
        {/* Client Testimonials */}
        <section className={styles.sectionCard}>
          <h2 className={styles.luxurySectionTitle}>What Our Clients Say</h2>
          <div className={styles.testimonialsGrid}>
            {[
              {
                name: "Sarah M.",
                review:
                  "Our experience was fantastic! We found our dream home in The Vistas and the process was smooth and stress-free.",
                rating: 5,
              },
              {
                name: "James R.",
                review:
                  "Professional, knowledgeable, and always available. Highly recommend for anyone buying in Summerlin.",
                rating: 5,
              },
              {
                name: "Linda & Tom",
                review:
                  "We sold our home above asking price thanks to expert marketing and negotiation. Couldn't be happier!",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <div key={index} className={styles.testimonialCard}>
                <div className={styles.testimonialStars}>
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={styles.star}>
                      {i < testimonial.rating ? "★" : "☆"}
                    </span>
                  ))}
                </div>
                <blockquote className={styles.testimonialText}>
                  "{testimonial.review}"
                </blockquote>
                <cite className={styles.testimonialAuthor}>
                  — {testimonial.name}
                </cite>
              </div>
            ))}
          </div>
        </section>
        {/* Lead Capture */}
        <section className={styles.sectionCard}>
          <h2 className={styles.centerTitle}>Ready to Work Together?</h2>
          <LeadCaptureForm
            variant="inline"
            title="Get Your Free Consultation"
            subtitle="Let's discuss your real estate goals and how I can help you achieve them."
            source="About Page"
          />
        </section>
        {/* Internal Links Section */}
        <section className={styles.sectionCard}>
          <h2>Explore More</h2>
          <ul className={styles.resourceLinks}>
            <li>
              <Link href="/market-reports">Summerlin Market Reports</Link>
            </li>
            <li>
              <Link href="/properties">Browse Current Listings</Link>
            </li>
            <li>
              <Link href="/current-listing">Featured Home for Sale</Link>
            </li>
            <li>
              <Link href="/communities">Explore Summerlin Communities</Link>
            </li>
            <li>
              <Link href="/contact">Contact for a Consultation</Link>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
