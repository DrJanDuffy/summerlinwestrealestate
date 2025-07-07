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

export default function TheVistas() {
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
        body: JSON.stringify({ name, email, phone, page: "The Vistas" }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit");
      }

      setSubmitted(true);
      if (typeof window !== "undefined" && (window as any).gtag) {
        (window as any).gtag("event", "lead_form_submit", {
          event_category: "Lead",
          event_label: "The Vistas",
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

  return (
    <div className={styles.page}>
      <Head>
        <title>
          The Vistas Summerlin | Homes, Community & Real Estate Guide
        </title>
        <meta
          name="description"
          content="Explore The Vistas in Summerlin: community amenities, homes for sale, neighborhood map, and expert real estate insights for buyers and sellers."
        />
        <meta
          property="og:title"
          content="The Vistas Summerlin | Homes, Community & Real Estate Guide"
        />
        <meta
          property="og:description"
          content="Explore The Vistas in Summerlin: community amenities, homes for sale, neighborhood map, and expert real estate insights for buyers and sellers."
        />
      </Head>
      <section className={`${styles.hero} ${styles.heroMargin}`}>
        <h1>The Vistas in Summerlin</h1>
        <p className={styles.subtitle}>
          A premier master-planned neighborhood in Summerlin West
        </p>
      </section>
      <LatestMarketInsights />
      <section className={styles.sectionCard}>
        <h2>About The Vistas</h2>
        <Image
          src="https://placehold.co/800x300?text=The+Vistas+Park"
          alt="The Vistas Park in Summerlin"
          width={800}
          height={300}
          className={styles.featureImage}
        />
        <ul className={styles.featureList}>
          <li>Beautiful parks and walking trails</li>
          <li>Top-rated public and private schools</li>
          <li>Modern homes with mountain views</li>
          <li>Minutes from Downtown Summerlin</li>
        </ul>
      </section>
      <section className={`${styles.sectionCard} ${styles.lightBackground}`}>
        <h2>Homes for Sale in The Vistas</h2>
        <div className={styles.propertyGrid}>
          {[1, 2, 3].map((i) => (
            <div key={i} className={styles.propertyCard}>
              <Image
                src={`https://placehold.co/400x220?text=Vistas+Home+${i}`}
                alt={`Home for sale in The Vistas Summerlin ${i}`}
                width={400}
                height={220}
                className={styles.propertyImage}
              />
              <div className={styles.propertyInfo}>
                <h3 className={styles.propertyTitle}>Vistas Home #{i}</h3>
                <p className={styles.propertyDetails}>
                  4 bed &bull; 3 bath &bull; $900,000+
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className={`${styles.sectionCard} ${styles.whiteBackground}`}>
        <h2>Explore More</h2>
        <ul className={styles.linkList}>
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
      <section id="lead-capture" className={styles.leadCapture}>
        <h2>Request Your Free Community Guide</h2>
        {submitted ? (
          <div className={styles.successMessage}>
            Thank you! Your guide is on its way.
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
              {loading ? "Sending..." : "Send Guide"}
            </button>
            {error && (
              <div className={styles.errorMessage}>
                {error}
              </div>
            )}
          </form>
        )}
      </section>
    </div>
  );
}
