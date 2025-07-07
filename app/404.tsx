"use client";

import Link from "next/link";
import styles from "./page.module.css";

export default function NotFound() {
  return (
    <div className={styles.page}>
      <div className={styles.mainContent}>
        <section className={styles.sectionCard}>
          <div className={styles.errorContent}>
            <h1 className={styles.errorCode}>404</h1>
            <h2 className={styles.errorTitle}>This page could not be found.</h2>
            <p className={styles.errorMessage}>
              The page you are looking for does not exist or has been moved.
            </p>
            <div className={styles.errorActions}>
              <Link href="/" className={styles.cta}>
                Go to Homepage
              </Link>
              <Link href="/communities" className={styles.secondaryCta}>
                View Communities
              </Link>
              <Link href="/current-listing" className={styles.secondaryCta}>
                See Current Listing
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
