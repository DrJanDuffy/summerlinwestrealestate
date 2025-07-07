"use client";

import styles from "../page.module.css";
import Link from "next/link";
import dynamic from "next/dynamic";
const LatestMarketInsights = dynamic(
  () => import("../../components/ui/LatestMarketInsights"),
  { ssr: false },
);
import LeadCaptureForm from "../../components/ui/LeadCaptureForm";
import Head from "next/head";
import Header from "@/components/layout/Header";
import SummerlinWestOverview from "@/components/ui/SummerlinWestOverview";

export default function NewHomesSummerlin() {
  return (
    <div className={styles.page}>
      <Head>
        <title>
          New Homes in Summerlin Las Vegas | Builders, Incentives & Buying Guide
        </title>
        <meta
          name="description"
          content="Explore new homes in Summerlin Las Vegas. See builder incentives, new construction communities, and the home buying process. Get alerts for new homes!"
        />
        <meta
          property="og:title"
          content="New Homes in Summerlin Las Vegas | Builders, Incentives & Buying Guide"
        />
        <meta
          property="og:description"
          content="Explore new homes in Summerlin Las Vegas. See builder incentives, new construction communities, and the home buying process. Get alerts for new homes!"
        />
      </Head>

      <Header />
      <SummerlinWestOverview />

      <div className={styles.mainContent}>
        <section className={styles.hero}>
          <h1>New Homes in Summerlin Las Vegas</h1>
          <p className={styles.subtitle}>
            Your guide to new construction communities, builder incentives, and
            the new home buying process in Summerlin
          </p>
        </section>

        <LatestMarketInsights />

        {/* New Construction Communities */}
        <section className={styles.sectionCard}>
          <h2>New Construction Communities</h2>
          <ul className={styles.contentList}>
            <li>Redpoint &amp; Redpoint Square</li>
            <li>Stonebridge</li>
            <li>Reverence</li>
            <li>The Cliffs</li>
            <li>Summerlin Centre</li>
            <li>And more—contact us for the latest releases!</li>
          </ul>
        </section>

        {/* Builder Information */}
        <section className={styles.sectionCard}>
          <h2>Top Builders in Summerlin</h2>
          <ul className={styles.contentList}>
            <li>Pulte Homes</li>
            <li>Toll Brothers</li>
            <li>Lennar</li>
            <li>Woodside Homes</li>
            <li>Richmond American</li>
            <li>Tri Pointe Homes</li>
          </ul>
        </section>

        {/* Incentives Section */}
        <section className={styles.sectionCard}>
          <h2>Builder Incentives &amp; Special Offers</h2>
          <p className={styles.contentText}>
            Many builders in Summerlin offer special incentives for new home
            buyers, including closing cost assistance, design center credits,
            and rate buydowns. Incentives change frequently—contact us for the
            latest offers and VIP access to new releases.
          </p>
        </section>

        {/* Process Section */}
        <section className={styles.sectionCard}>
          <h2>The New Home Buying Process</h2>
          <ol className={styles.processList}>
            <li>Consultation: Discuss your needs, budget, and timeline</li>
            <li>
              Community &amp; Builder Selection: Tour model homes and compare
              options
            </li>
            <li>
              Lot &amp; Floor Plan Choice: Reserve your preferred lot and design
            </li>
            <li>
              Contract &amp; Customization: Sign contract and select
              finishes/upgrades
            </li>
            <li>
              Construction &amp; Inspections: Monitor progress and attend
              walkthroughs
            </li>
            <li>
              Closing &amp; Move-In: Finalize paperwork and get your keys!
            </li>
          </ol>
        </section>

        {/* FAQ Section */}
        <section className={styles.sectionCard}>
          <h2>New Home Buyer FAQ</h2>
          <ul className={styles.contentList}>
            <li>How do I get notified about new home releases in Summerlin?</li>
            <li>What incentives are available for new construction buyers?</li>
            <li>How does the builder contract process work?</li>
            <li>Can I use my own agent for a new home purchase?</li>
          </ul>
        </section>

        {/* Internal Links Section */}
        <section className={styles.sectionCard}>
          <h2>Explore More Summerlin Real Estate Resources</h2>
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
              <Link href="/current-listing">
                View our current listing in The Vistas
              </Link>
            </li>
            <li>
              <Link href="/contact">Contact a Summerlin new home expert</Link>
            </li>
          </ul>
        </section>

        {/* Lead Capture */}
        <section className={styles.sectionCard}>
          <h2 className={styles.centerTitle}>
            Get Alerts for New Homes in Summerlin
          </h2>
          <LeadCaptureForm
            variant="inline"
            title="Get New Home Alerts"
            subtitle="Be the first to know about new construction releases and builder incentives."
            source="New Homes Summerlin Page"
          />
        </section>
      </div>
    </div>
  );
}
