'use client';

import { useCallback } from 'react';
import styles from './layout.module.css';

export default function StickyPhoneMenu() {
  const handlePhoneClick = useCallback(() => {
    // Track phone click event
    if (typeof window !== 'undefined' && typeof (window as any).gtag === 'function') {
      (window as any).gtag('event', 'phone_click', {
        event_category: 'Contact',
        event_label: 'Sticky Phone Menu',
      });
    }
  }, []);

  return (
    <div className={styles.stickyPhoneMenu}>
      <span className={styles.stickyPhoneMenuLabel}>Call Us</span>
      <a
        href="tel:7025500112"
        className={styles.stickyPhoneMenuCallButton}
        onClick={handlePhoneClick}
      >
        <svg
          width="20"
          height="20"
          fill="currentColor"
          viewBox="0 0 24 24"
          className={styles.stickyPhoneMenuIcon}
        >
          <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.24 1.01l-2.2 2.2z" />
        </svg>
        <span className={styles.stickyPhoneMenuText}>(702) 550-0112</span>
      </a>
    </div>
  );
}
