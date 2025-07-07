"use client";
import { useEffect, useRef } from "react";
import styles from "./RealScoutAdvancedSearch.module.css";

// TypeScript declaration for custom element
declare global {
  namespace JSX {
    interface IntrinsicElements {
      "realscout-advanced-search": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        "agent-encoded-id"?: string;
      };
      "realscout-simple-search": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        "agent-encoded-id"?: string;
        "aria-label"?: string;
      };
    }
  }
}

interface RealScoutAdvancedSearchProps {
  title?: string;
  subtitle?: string;
  showFeatures?: boolean;
  variant?: "hero" | "sidebar" | "page";
}

export default function RealScoutAdvancedSearch({
  title = "Find Your Dream Home in Summerlin",
  subtitle = "Search by neighborhood, city, or school",
  showFeatures = true,
  variant = "hero",
}: RealScoutAdvancedSearchProps) {
  const widgetRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Track widget interactions for analytics and handle search event
    const currentRef = widgetRef.current;
    if (currentRef) {
      console.log("RealScout Advanced Search widget loaded");

      // Add event listeners for tracking and search
      const handleSearch = (event: any) => {
        // Analytics
        if (typeof window !== "undefined" && (window as any).gtag) {
          (window as any).gtag("event", "real_scout_search", {
            event_category: "Search",
            event_label: "Advanced Search Widget",
            cd1: (window as any).userType || 'unknown',
            cd2: 'RealScoutAdvancedSearch',
            cd3: 'search',
            cd4: 1,
          });
        }
        // Redirect to results page with filters
        if (event && event.detail) {
          const params = new URLSearchParams(event.detail).toString();
          window.location.href = `/search?${params}`;
        }
      };

      // Listen for search events
      currentRef.addEventListener("search", handleSearch);

      return () => {
        currentRef.removeEventListener("search", handleSearch);
      };
    }
  }, []);

  return (
    <section className={`${styles.searchSection} ${styles[variant]}`}>
      <div className={styles.searchContainer}>
        {(title || subtitle) && (
          <div className={styles.searchHeader}>
            {title && <h2>{title}</h2>}
            {subtitle && <p>{subtitle}</p>}
          </div>
        )}

        <div className={styles.widgetContainer}>
          <realscout-advanced-search
            agent-encoded-id="QWdlbnQtMjI1MDUw"
            ref={widgetRef}
          />
        </div>

        {showFeatures && (
          <div className={styles.searchFeatures}>
            <div className={styles.feature}>
              <svg
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              <span>Real-time MLS data</span>
            </div>
            <div className={styles.feature}>
              <svg
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg>
              <span>Local market expertise</span>
            </div>
            <div className={styles.feature}>
              <svg
                width="20"
                height="20"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Advanced filters</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
