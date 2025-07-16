"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import styles from "./page.module.css";

// RealScout shared search URL
const REAL_SCOUT_SEARCH_URL =
  "https://drjanduffy.realscout.com/homesearch/shared-searches/U2hhcmVhYmxlU2VhcmNoTGluay05NTMy";

export default function NotFound() {
  const _pathname = usePathname();

  useEffect(() => {
    // Redirect to RealScout search page after a brief delay
    const timer = setTimeout(() => {
      window.location.href = REAL_SCOUT_SEARCH_URL;
    }, 3000); // 3 second delay to show the message

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.page}>
      <div className={styles.mainContent}>
        <section className={styles.sectionCard}>
          <div className={styles.errorContent}>
            <h1 className={styles.errorCode}>404</h1>
            <h2 className={styles.errorTitle}>Page Not Found</h2>
            <p className={styles.errorMessage}>
              The page you&apos;re looking for doesn&apos;t exist, but we can help you find your dream home in Summerlin West!
            </p>

            <div className={styles.redirectMessage}>
              <h3>Redirecting you to our property search...</h3>
              <p>
                You&apos;ll be automatically redirected to browse our current listings in Summerlin West.
              </p>
            </div>

            <div className={styles.errorActions}>
              <Link
                href={REAL_SCOUT_SEARCH_URL}
                className={styles.cta}
                target="_blank"
                rel="noopener noreferrer"
              >
                Browse Properties Now
              </Link>
              <Link href="/" className={styles.secondaryCta}>
                Return to Homepage
              </Link>
            </div>

            <div className={styles.searchSection}>
              <h3>Looking for something specific?</h3>
              <p>
                Contact Dr. Jan Duffy for personalized assistance with your home search.
              </p>
              <div className={styles.searchActions}>
                <Link href="/contact" className={styles.searchLink}>
                  📞 Contact Dr. Duffy
                </Link>
                <Link href="/communities" className={styles.searchLink}>
                  🏘️ Explore Communities
                </Link>
                <Link href="/market-reports" className={styles.searchLink}>
                  📊 Get Market Report
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
