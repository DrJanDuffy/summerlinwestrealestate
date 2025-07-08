import Image from "next/image";
import Link from "next/link";
import styles from "../page.module.css";
import SummerlinWestOverview from "@/components/ui/SummerlinWestOverview";
import LatestMarketInsightsClient from '../../components/ui/LatestMarketInsightsClient';
import LeadCaptureFormClient from '../../components/ui/LeadCaptureFormClient';

// Metadata export (replaces Head component)
export const metadata = {
  title: "Downtown Summerlin Real Estate Guide | Shopping, Dining, Homes & Market",
  description: "Explore Downtown Summerlin: shopping, dining, entertainment, and real estate market trends. Find homes for sale and get your free Summerlin market report.",
  openGraph: {
    title: "Downtown Summerlin Real Estate Guide | Shopping, Dining, Homes & Market",
    description: "Explore Downtown Summerlin: shopping, dining, entertainment, and real estate market trends. Find homes for sale and get your free Summerlin market report.",
  }
};

export default function DowntownSummerlin() {
  return (
    <div className={styles.page}>
      <main>
        <SummerlinWestOverview />
        <section className={styles.hero}>
          <h1>Downtown Summerlin Real Estate Guide</h1>
          <p className={styles.subtitle}>
            Your comprehensive resource for living, shopping, and investing in Downtown Summerlin
          </p>
        </section>
        <section className={styles.sectionCard}>
          <LatestMarketInsightsClient />
        </section>
        <section className={styles.sectionCard}>
          <h2>Shopping in Downtown Summerlin</h2>
          <div className={styles.contentGrid}>
            <Image
              src="https://placehold.co/320x200?text=Shopping"
              alt="Shopping in Downtown Summerlin"
              width={320}
              height={200}
              className={styles.contentImage}
              priority
            />
            <p className={styles.contentText}>
              Downtown Summerlin is home to over 125 stores, from luxury
              boutiques to popular national brands. Enjoy open-air shopping,
              seasonal events, and a vibrant atmosphere perfect for families and
              trendsetters alike. Whether you're looking for fashion, home
              goods, or unique gifts, you'll find it all in this premier Las
              Vegas shopping destination.
            </p>
          </div>
        </section>
        <section className={styles.sectionCard}>
          <h2>Dining in Downtown Summerlin</h2>
          <div className={styles.contentGrid}>
            <p className={styles.contentText}>
              Experience a culinary adventure with Downtown Summerlin's diverse
              dining options. From upscale steakhouses and trendy cafes to
              family-friendly eateries and quick bites, there's something for
              every palate. Enjoy al fresco dining, happy hours, and chef-driven
              menus in a lively, walkable environment.
            </p>
            <Image
              src="https://placehold.co/320x200?text=Dining"
              alt="Dining in Downtown Summerlin"
              width={320}
              height={200}
              className={styles.contentImage}
            />
          </div>
        </section>
        <section className={styles.sectionCard}>
          <h2>Entertainment & Lifestyle</h2>
          <div className={styles.contentGrid}>
            <Image
              src="https://placehold.co/320x200?text=Entertainment"
              alt="Entertainment in Downtown Summerlin"
              width={320}
              height={200}
              className={styles.contentImage}
            />
            <p className={styles.contentText}>
              Downtown Summerlin is more than shopping and dining—it's a
              lifestyle hub. Enjoy year-round events, live music, farmers
              markets, and the Las Vegas Ballpark. The area is also home to City
              National Arena, practice facility for the Vegas Golden Knights,
              making it a hotspot for sports fans and families.
            </p>
          </div>
        </section>
        <section className={styles.sectionCard}>
          <h2>Downtown Summerlin Real Estate Market</h2>
          <div className={styles.contentGrid}>
            <div className={styles.contentText}>
              <p>
                The Downtown Summerlin area offers a mix of luxury condos,
                modern townhomes, and single-family homes. With walkable access
                to shopping, dining, and entertainment, it's one of the most
                desirable places to live in Las Vegas. The real estate market
                here is competitive, with homes selling quickly and strong
                appreciation trends.
              </p>
              <ul className={styles.contentList}>
                <li>Median Home Price: $650,000</li>
                <li>Average Days on Market: 14</li>
                <li>Walkability Score: 9/10</li>
                <li>Top-rated schools nearby</li>
              </ul>
            </div>
            <Image
              src="https://placehold.co/320x200?text=Real+Estate"
              alt="Downtown Summerlin real estate market"
              width={320}
              height={200}
              className={styles.contentImage}
            />
          </div>
        </section>
        <section className={styles.sectionCard}>
          <h2>Get Your Downtown Summerlin Market Report</h2>
          <LeadCaptureFormClient
            variant="inline"
            title="Request Your Free Downtown Summerlin Market Report"
            subtitle="Stay ahead of the market with the latest trends and expert insights."
            source="Downtown Summerlin Page"
          />
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
              <Link href="/contact">
                Contact a Summerlin real estate expert
              </Link>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
