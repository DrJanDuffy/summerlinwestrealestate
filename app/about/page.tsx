"use client";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../page.module.css";
import LatestMarketInsightsClient from '../../components/ui/LatestMarketInsightsClient';
import TestimonialsSectionClient from '../../components/ui/TestimonialsSectionClient';

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
      <section className={styles.hero} style={{marginBottom: '2rem'}}>
        <h1>About Your Summerlin Real Estate Expert</h1>
        <p className={styles.subtitle}>Local knowledge. Proven results. Personalized service.</p>
      </section>
      <LatestMarketInsightsClient />
      <TestimonialsSectionClient />
    </div>
  );
}
