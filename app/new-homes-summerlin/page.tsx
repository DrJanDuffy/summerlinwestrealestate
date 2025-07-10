"use client";

import styles from "../page.module.css";
import Link from "next/link";
import dynamic from "next/dynamic";
import SummerlinWestOverview from "@/components/ui/SummerlinWestOverview";

// Dynamic imports for client components
const LatestMarketInsights = dynamic(
  () => import("../../components/ui/LatestMarketInsights"),
  { ssr: false }
);

const LeadCaptureForm = dynamic(
  () => import("../../components/ui/LeadCaptureForm"),
  { ssr: false }
);

export default function NewHomesSummerlin() {
  return (
    <div className={styles.page}>
      <main>
        <SummerlinWestOverview />
        <section className={styles.hero}>
          <h1>New Homes in Summerlin Las Vegas</h1>
          <p className={styles.subtitle}>
            Your guide to new construction communities, builder incentives, and the new home buying process in Summerlin
          </p>
        </section>
        {/* Dr. Jan Duffy Callout Section */}
        <section className={styles.sectionCard} style={{marginBottom: '2rem'}}>
          <h2>Meet Your Summerlin West Real Estate Expert</h2>
          <p><strong>Dr. Jan Duffy, REALTOR®</strong> has helped families discover luxury living at the gateway to Red Rock Canyon since 2015. As a longtime resident and doctorate-level educator, she brings analytical precision and deep local knowledge to every transaction. Specializing in <strong>The Ridges, Red Rock Country Club, The Vistas, and The Paseos</strong>, Dr. Duffy is your go-to resource for buying or selling in Summerlin West.</p>
          <p style={{fontWeight: 'bold', fontSize: '1.1em', marginTop: '1em'}}>Ready to make your move in Summerlin West?</p>
          <p><strong>Contact Dr. Jan Duffy today for your complimentary market consultation and discover your dream home or get top dollar for your property.</strong></p>
          <p><Link href="/contact">Contact Dr. Jan Duffy &rarr;</Link></p>
        </section>
        <section className={styles.sectionCard}>
          <LatestMarketInsights />
        </section>
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
        <section className={styles.sectionCard}>
          <h2>Builder Incentives & Special Offers</h2>
          <p className={styles.contentText}>
            Many builders in Summerlin offer special incentives for new home
            buyers, including closing cost assistance, design center credits,
            and rate buydowns. Incentives change frequently—contact us for the
            latest offers and VIP access to new releases.
          </p>
        </section>
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
        <section className={styles.sectionCard}>
          <h2>New Home Buyer FAQ</h2>
          <ul className={styles.contentList}>
            <li>How do I get notified about new home releases in Summerlin?</li>
            <li>What incentives are available for new construction buyers?</li>
            <li>How does the builder contract process work?</li>
            <li>Can I use my own agent for a new home purchase?</li>
          </ul>
        </section>
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
        <section className={styles.sectionCard}>
          <h2>Get Alerts for New Homes in Summerlin</h2>
          <LeadCaptureForm
            variant="inline"
            title="Get New Home Alerts"
            subtitle="Be the first to know about new construction releases and builder incentives."
            source="New Homes Summerlin Page"
          />
        </section>
      </main>
    </div>
  );
}
