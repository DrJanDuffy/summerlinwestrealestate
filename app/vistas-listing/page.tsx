"use client";
import styles from "../page.module.css";
import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
const LatestMarketInsights = dynamic(
  () => import("../../components/ui/LatestMarketInsights"),
  { ssr: false },
);

export default function VistasListing() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) {
      setError("Please enter your name.");
      return;
    }
    if (!email.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (!phone.match(/^[0-9\-\+\(\)\s]{7,}$/)) {
      setError("Please enter a valid phone number.");
      return;
    }
    setError("");
    setLoading(true);
    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, phone, page: "Vistas Listing" }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit");
      }

      setSubmitted(true);
      if (typeof window !== "undefined" && (window as any).gtag) {
        (window as any).gtag("event", "lead_form_submit", {
          event_category: "Lead",
          event_label: "Vistas Listing",
        });
      }
    } catch (err: any) {
      setError(
        "There was a problem submitting your request. Please try again later.",
      );
    } finally {
      setLoading(false);
    }
  };

  const listings = [
    { id: 1, beds: 4, baths: 3, price: "$900,000+" },
    { id: 2, beds: 4, baths: 3, price: "$925,000+" },
    { id: 3, beds: 4, baths: 3, price: "$950,000+" },
  ];

  const vistaBenefits = [
    "Modern homes with mountain views",
    "Access to top-rated schools and parks",
    "Minutes from Downtown Summerlin",
    "Strong resale value and community amenities",
  ];

  return (
    <div className={styles.page}>
      <Head>
        <title>
          Vistas Summerlin Home Listings | Summerlin West Real Estate
        </title>
        <meta
          name="description"
          content="Browse Vistas Summerlin home listings. See photos, property details, and connect with a Summerlin real estate expert for private tours and market insights."
        />
        <meta
          property="og:title"
          content="Vistas Summerlin Home Listings | Summerlin West Real Estate"
        />
        <meta
          property="og:description"
          content="Browse Vistas Summerlin home listings. See photos, property details, and connect with a Summerlin real estate expert for private tours and market insights."
        />
      </Head>

      <div className={styles.mainContent}>
        <section className={styles.hero}>
          <h1>Vistas Summerlin Home Listings</h1>
          <p className={styles.subtitle}>
            Find your dream home in The Vistas, Summerlin West
          </p>
        </section>

        <LatestMarketInsights />

        {/* Available Listings */}
        <section className={styles.sectionCard}>
          <h2 className={styles.centerTitle}>Available Listings</h2>
          <div className={styles.listingsGrid}>
            {listings.map((listing) => (
              <div key={listing.id} className={styles.listingCard}>
                <Image
                  src={`https://placehold.co/400x220?text=Vistas+Listing+${listing.id}`}
                  alt={`Vistas Summerlin home listing ${listing.id}`}
                  width={400}
                  height={220}
                  className={styles.listingImage}
                />
                <div className={styles.listingContent}>
                  <h3 className={styles.listingTitle}>Listing #{listing.id}</h3>
                  <p className={styles.listingDetails}>
                    {listing.beds} bed &bull; {listing.baths} bath &bull;{" "}
                    {listing.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Buy in The Vistas */}
        <section className={styles.sectionCard}>
          <h2 className={styles.centerTitle}>Why Buy in The Vistas?</h2>
          <ul className={styles.benefitsList}>
            {vistaBenefits.map((benefit, index) => (
              <li key={index} className={styles.benefitItem}>
                {benefit}
              </li>
            ))}
          </ul>
        </section>

        {/* Explore More */}
        <section className={styles.sectionCard}>
          <h2 className={styles.centerTitle}>Explore More</h2>
          <ul className={styles.resourceLinks}>
            <li>
              <Link href="/market-reports">Summerlin Market Reports</Link>
            </li>
            <li>
              <Link href="/current-listing">Featured Home for Sale</Link>
            </li>
            <li>
              <Link href="/about">Meet Your Summerlin Expert</Link>
            </li>
            <li>
              <Link href="/contact">Contact for a Private Tour</Link>
            </li>
          </ul>
        </section>

        {/* Lead Capture Form */}
        <section id="lead-capture" className={styles.leadCapture}>
          <h2>Interested in this home?</h2>
          {submitted ? (
            <div className={styles.successMessage}>
              Thank you! We'll be in touch soon.
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate>
              <input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                disabled={loading}
              />
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={loading}
              />
              <input
                type="tel"
                placeholder="Your phone number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                disabled={loading}
              />
              <button type="submit" disabled={loading}>
                {loading ? "Sending..." : "Request Info"}
              </button>
              {error && <div className={styles.errorMessage}>{error}</div>}
            </form>
          )}
        </section>
      </div>
    </div>
  );
}
