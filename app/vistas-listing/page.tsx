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
      <section className={styles.hero} style={{ marginBottom: "2rem" }}>
        <h1>Vistas Summerlin Home Listings</h1>
        <p className={styles.subtitle}>
          Find your dream home in The Vistas, Summerlin West
        </p>
      </section>
      <LatestMarketInsights />
      <section style={{ marginBottom: "2.5rem" }}>
        <h2>Available Listings</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "1.5rem",
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              style={{
                borderRadius: "8px",
                overflow: "hidden",
                boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
                background: "#fff",
              }}
            >
              <Image
                src={`https://placehold.co/400x220?text=Vistas+Listing+${i}`}
                alt={`Vistas Summerlin home listing ${i}`}
                width={400}
                height={220}
                style={{ width: "100%", height: "auto", display: "block" }}
              />
              <div style={{ padding: "1rem" }}>
                <h3 style={{ margin: 0 }}>Listing #{i}</h3>
                <p style={{ fontSize: "0.98rem", color: "#0A2540" }}>
                  4 bed &bull; 3 bath &bull; $900,000+
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section
        style={{
          marginBottom: "2.5rem",
          background: "#F7F9FC",
          borderRadius: "8px",
          padding: "2rem 1rem",
        }}
      >
        <h2>Why Buy in The Vistas?</h2>
        <ul
          style={{
            color: "#0A2540",
            fontSize: "1.08rem",
            marginLeft: "1rem",
            listStyle: "disc inside",
          }}
        >
          <li>Modern homes with mountain views</li>
          <li>Access to top-rated schools and parks</li>
          <li>Minutes from Downtown Summerlin</li>
          <li>Strong resale value and community amenities</li>
        </ul>
      </section>
      <section
        style={{
          marginBottom: "2.5rem",
          background: "#fff",
          borderRadius: "8px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
          padding: "2rem 1rem",
        }}
      >
        <h2>Explore More</h2>
        <ul
          style={{
            color: "#3A8DDE",
            fontWeight: 600,
            fontSize: "1.08rem",
            marginLeft: "1rem",
            listStyle: "disc inside",
          }}
        >
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
        <h2>Interested in this home?</h2>
        {submitted ? (
          <div
            style={{ color: "#16B286", fontWeight: 600, fontSize: "1.1rem" }}
          >
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
            {error && (
              <div style={{ color: "#d32f2f", marginTop: "0.5rem" }}>
                {error}
              </div>
            )}
          </form>
        )}
      </section>
    </div>
  );
}
