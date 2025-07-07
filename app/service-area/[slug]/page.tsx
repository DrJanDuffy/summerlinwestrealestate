import subdivisions from "../subdivisions.json";
import styles from "../page.module.css";
import Link from "next/link";
import { notFound } from "next/navigation";
import Image from "next/image";

export default function SubdivisionPage({ params }) {
  const { slug } = params;
  const sub = subdivisions.find((s) => s.slug === slug);
  if (!sub) return notFound();

  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>{sub.name}</h1>
          <p className={styles.heroSubtitle}>
            {sub.type} subdivision in The Vistas, Summerlin West
          </p>
          <div className={styles.heroStats}>
            {sub.builder && sub.builder !== "-" && (
              <div className={styles.heroStat}><span>{sub.builder}</span> Builder</div>
            )}
            {sub.years && sub.years !== "-" && (
              <div className={styles.heroStat}><span>{sub.years}</span> Years Built</div>
            )}
            {sub.homeSizes && sub.homeSizes !== "-" && (
              <div className={styles.heroStat}><span>{sub.homeSizes}</span> Home Sizes</div>
            )}
          </div>
        </div>
        <div className={styles.heroMapAnchor}>
          <Image
            src={sub.image || "https://placehold.co/600x300?text=The+Vistas"}
            alt={sub.name}
            width={480}
            height={300}
            className={styles.heroMapImg}
            priority
          />
        </div>
      </section>

      {/* Features & Description */}
      <section className={styles.sectionCard}>
        <h2 className={styles.centerTitle}>About {sub.name}</h2>
        <div className={styles.communityMeta}>
          <span className={styles.featureTag}>{sub.type}</span>
          {sub.features.map((feature) => (
            <span key={feature} className={styles.featureTag}>{feature}</span>
          ))}
        </div>
        <div className={styles.communityDescription}>
          {sub.name} is a distinguished neighborhood in The Vistas, developed by {sub.builder !== "-" ? sub.builder : "various builders"}{sub.years && sub.years !== "-" ? ` between ${sub.years}` : ""}. Homes range from {sub.homeSizes !== "-" ? sub.homeSizes : "varied sizes"}. Features include {sub.features.join(", ")}. Enjoy the best of Summerlin West living in this {sub.type.toLowerCase()} community.
        </div>
      </section>

      {/* Amenities Section */}
      <section className={styles.sectionCard}>
        <h2 className={styles.centerTitle}>Community Amenities</h2>
        <ul className={styles.amenitiesList}>
          <li>Access to Vistas Community Park, sports fields, tennis, and pools</li>
          <li>Nearby shopping at Vista Commons and Downtown Summerlin</li>
          <li>Top-rated schools: Linda Rankin Givens Elementary, Sig Rogich Middle, Palo Verde High</li>
          <li>Guard-gated and non-gated options available</li>
          <li>Stunning views of Red Rock Canyon and the Las Vegas Strip</li>
        </ul>
      </section>

      {/* Contact CTA */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2>Interested in {sub.name}?</h2>
          <p>Contact Dr. Jan Duffy for private showings, market analysis, or exclusive access to off-market properties in {sub.name}.</p>
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

      <div style={{textAlign: 'center', margin: '2rem 0'}}>
        <Link href="/service-area" className={styles.ctaButtonSecondary}>
          ← Back to Service Area
        </Link>
      </div>
    </div>
  );
} 