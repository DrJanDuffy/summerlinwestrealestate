"use client";
import styles from "./page.module.css";
import { useState } from "react";

export default function Home() {
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
        body: JSON.stringify({ name, email, phone, page: "Homepage" }),
      });
      
      if (!response.ok) {
        throw new Error("Failed to submit");
      }
      
      setSubmitted(true);
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'lead_form_submit', {
          event_category: 'Lead',
          event_label: 'Homepage',
        });
      }
    } catch (err: any) {
      setError("There was a problem submitting your request. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <h1>Summerlin West Real Estate Specialist</h1>
        <p className={styles.subtitle}>Currently Listing & Selling in The Vistas - Your Hyperlocal Expert</p>
        <a className={styles.cta} href="#lead-capture">Get Instant Access to Market Reports</a>
      </section>

      {/* Credibility Markers */}
      <section className={styles.credibility}>
        <h2>Proven Results in The Vistas</h2>
        <ul>
          <li>Active listings and recent sales in The Vistas</li>
          <li>Specializing in all Summerlin West communities</li>
          <li>Recognized market authority</li>
        </ul>
      </section>

      {/* Market Coverage */}
      <section className={styles.marketCoverage}>
        <h2>Explore Summerlin West Communities</h2>
        <a href="/communities" className={styles.secondaryCta}>View All Communities</a>
      </section>

      {/* Lead Capture */}
      <section id="lead-capture" className={styles.leadCapture}>
        <h2>Get Your Free Summerlin West Market Report</h2>
        {submitted ? (
          <div style={{color: '#16B286', fontWeight: 600, fontSize: '1.1rem'}}>Thank you! Your report is on its way.</div>
        ) : (
          <form onSubmit={handleSubmit} noValidate>
            <input
              type="text"
              placeholder="Your name"
              value={name}
              onChange={e => setName(e.target.value)}
              required
              disabled={loading}
            />
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              disabled={loading}
            />
            <input
              type="tel"
              placeholder="Your phone number"
              value={phone}
              onChange={e => setPhone(e.target.value)}
              required
              disabled={loading}
            />
            <button type="submit" disabled={loading}>{loading ? "Sending..." : "Send Me the Report"}</button>
            {error && <div style={{color: '#d32f2f', marginTop: '0.5rem'}}>{error}</div>}
          </form>
        )}
      </section>
    </div>
  );
}
