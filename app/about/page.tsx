"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../page.module.css";
import LatestMarketInsightsClient from "../../components/ui/LatestMarketInsightsClient";
import TestimonialsSectionClient from "../../components/ui/TestimonialsSectionClient";
import { FaMapMarkerAlt, FaUserTie } from "react-icons/fa";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Summerlin West Real Estate",
  address: {
    "@type": "PostalAddress",
    streetAddress: "1980 Festival Plaza Dr (One Summerlin)",
    addressLocality: "Las Vegas",
    addressRegion: "NV",
    postalCode: "89135",
    addressCountry: "US",
  },
  description:
    "Local Summerlin real estate expert with 15+ years of experience helping buyers and sellers in Summerlin West.",
  geo: {
    "@type": "GeoCoordinates",
    latitude: 36.154,
    longitude: -115.3336,
  },
  url: "https://www.summerlinwestrealestate.com/about",
  telephone: "+1-702-550-0112",
};

export default function About() {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <h1 className={styles.heroTitle}>
            Dr. Jan Duffy, REALTOR® - Your Summerlin West Real Estate Expert
          </h1>
          <p className={styles.heroSubtitle}>
            Helping families discover luxury living at the gateway to Red Rock Canyon since 2015
          </p>
        </section>

        {/* Main Content */}
        <section className={`${styles.section} ${styles.calloutSection}`}>
          <p>
            As a dedicated <strong>Summerlin West REALTOR®</strong> and longtime Las Vegas resident, Dr. Jan Duffy brings unparalleled expertise to one of Nevada&apos;s most sought-after master-planned communities. With her unique background as both a licensed real estate professional and doctorate-level educator, Dr. Duffy combines analytical precision with deep local market knowledge to deliver exceptional results for <strong>Summerlin West home buyers and sellers</strong>.
          </p>
          
          <h2>Your Summerlin West Market Specialist</h2>
          <p>
            Dr. Duffy specializes exclusively in <strong>Summerlin West real estate</strong>, including the prestigious communities of <strong>The Ridges, Red Rock Country Club, The Vistas, and The Paseos</strong>. She understands what makes this area special: the breathtaking <strong>Red Rock Canyon views</strong>, world-class amenities, and the perfect blend of luxury living with outdoor adventure that draws families from across the country to call Summerlin West home.
          </p>
          
          <h3>Recent Market Results:</h3>
          <ul className="space-y-2 mb-6">
            <li>Successfully guided clients through Summerlin West&apos;s competitive market where 50% of homes sell within 30 days</li>
            <li>Expert navigation of the area&apos;s premium price points, with median home values reaching $680,000+</li>
            <li>Specialized knowledge of new construction opportunities from premier builders like KB Homes, Toll Brothers, and Taylor Morrison</li>
          </ul>
          
          <h3>Comprehensive Summerlin West Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div>
              <h4><strong>For Home Sellers:</strong></h4>
              <ul className="space-y-2">
                <li>Strategic pricing analysis leveraging Summerlin West&apos;s 8.8% year-over-year appreciation</li>
                <li>Professional staging consultation to highlight Red Rock Canyon views and luxury features</li>
                <li>Targeted marketing to qualified buyers seeking Summerlin&apos;s lifestyle amenities</li>
                <li>Expert positioning for quick sales in this fast-moving market</li>
              </ul>
            </div>
            <div>
              <h4><strong>For Home Buyers:</strong></h4>
              <ul className="space-y-2">
                <li>Exclusive access to new construction in Grand Park District and Kestrel Commons Village</li>
                <li>In-depth neighborhood guidance across Summerlin West&apos;s distinct villages</li>
                <li>School district expertise for families prioritizing top-rated Clark County schools</li>
                <li>Investment analysis for luxury properties and custom home opportunities</li>
              </ul>
            </div>
          </div>
          
          <h3>Deep Community Connections</h3>
          <p>
            Living in Summerlin West for over a decade, Dr. Duffy knows every trail in the <strong>150-mile trail system</strong>, the best tee times at <strong>TPC Summerlin</strong>, and which neighborhoods offer the most spectacular <strong>Red Rock Canyon sunset views</strong>. She&apos;s an active member of the Summerlin community, regularly participating in <strong>Tour de Summerlin</strong> and volunteering at local schools.
          </p>
          
          <p>
            Dr. Duffy&apos;s clients consistently praise her responsiveness, market expertise, and ability to simplify complex transactions. Whether you&apos;re relocating from out-of-state, seeking a luxury retirement home, or ready to sell your Summerlin West property, her commitment to excellence ensures a smooth, successful real estate experience.
          </p>
          
          <p className="text-center">
            <strong>
              Ready to explore Summerlin West&apos;s luxury lifestyle? Contact Dr. Jan Duffy today for your complimentary market consultation and discover why Summerlin West continues to rank among America&apos;s top master-planned communities.
            </strong>
          </p>
          
          <hr className="my-8" />
          
          <p className="text-center text-sm text-gray-600">
            <em>
              Dr. Jan Duffy, REALTOR® | Summerlin West Specialist | Licensed in Nevada | Serving The Ridges, Red Rock Country Club, The Vistas, The Paseos, and all Summerlin West communities
            </em>
          </p>
        </section>

        {/* Agent Profile Section */}
        <section className={styles.section}>
          <h2 className={styles.centerTitle}>Meet Dr. Jan Duffy</h2>
          <div className={styles.card}>
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="flex-shrink-0">
                <FaUserTie className="text-6xl text-brand-600" aria-hidden="true" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Dr. Jan Duffy, REALTOR®</h3>
                <div className="space-y-2 text-gray-600 mb-6">
                  <p>Licensed Real Estate Agent (License# S.0197614)</p>
                  <p>Berkshire Hathaway HomeServices Nevada Properties</p>
                  <p>Background in psychology, business, and marketing strategies.</p>
                  <p>Keynote speaker, relocation specialist, and more.</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-brand-100 text-brand-700 rounded-full text-sm font-medium">
                    Veteran-Owned
                  </span>
                  <span className="px-3 py-1 bg-brand-100 text-brand-700 rounded-full text-sm font-medium">
                    Women-Owned
                  </span>
                  <span className="px-3 py-1 bg-brand-100 text-brand-700 rounded-full text-sm font-medium">
                    LGBTQ+ Friendly
                  </span>
                  <span className="px-3 py-1 bg-brand-100 text-brand-700 rounded-full text-sm font-medium">
                    Se Habla Español
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Specializations & Services */}
        <section className={styles.section}>
          <h2 className={styles.centerTitle}>Specializations & Services</h2>
          <div className={styles.grid}>
            <div className={styles.card}>
              <h3 className="text-xl font-semibold mb-4">Real Estate Services</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Summerlin Vistas Homes Neighborhoods Specialist</li>
                <li>Luxury real estate transactions</li>
                <li>First-time home buyer support</li>
                <li>Foreclosed property deals</li>
                <li>Las Vegas real estate investment insights</li>
                <li>New construction sales and consulting</li>
                <li>Relocation services</li>
                <li>Expired listing consultant</li>
                <li>Divorce real estate specialist</li>
                <li>55+ Community Specialist</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Neighborhoods Served */}
        <section className={styles.section}>
          <h2 className={styles.centerTitle}>Summerlin Vistas Neighborhoods Served</h2>
          <div className={styles.grid}>
            <div className={styles.card}>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-center">The Vistas</span>
                <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-center">The Paseos</span>
                <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-center">Stonebridge</span>
                <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-center">Redpoint</span>
                <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-center">Redpoint Square</span>
                <span className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-center">Reverence</span>
              </div>
            </div>
          </div>
        </section>

        {/* Latest News */}
        <section className={styles.section}>
          <h2 className={styles.centerTitle}>Latest News</h2>
          <div className={styles.grid}>
            <article className={styles.card}>
              <div className="flex items-start gap-4">
                <span className="px-2 py-1 bg-brand-100 text-brand-700 rounded text-xs font-medium">
                  News
                </span>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2">
                    What You Should Know About Getting a Mortgage Today
                  </h3>
                  <time className="text-sm text-gray-500 mb-3 block" dateTime="2025-07-07">
                    7/7/2025
                  </time>
                  <p className="text-gray-600">
                    If you&apos;ve been putting off buying a home because you thought
                    getting approved would be too hard, know this: qualifying for
                    a mortgage is starting to get a bit more achievable, but
                    lending standards are still strong.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* Market Insights */}
        <section className={styles.section}>
          <LatestMarketInsightsClient />
        </section>

        {/* Testimonials */}
        <section className={styles.section}>
          <TestimonialsSectionClient />
        </section>
      </div>
    </div>
  );
}
