import styles from "../page.module.css";
import { useState } from "react";
import axios from "axios";

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
      await axios.post("/api/lead", { name, email, phone, page: "Vistas Listing" });
      setSubmitted(true);
      if (typeof window !== 'undefined' && (window as any).gtag) {
        (window as any).gtag('event', 'lead_form_submit', {
          event_category: 'Lead',
          event_label: 'Vistas Listing',
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
      <section className={styles.hero}>
        <h1>The Vistas - Featured Listing</h1>
        <p className={styles.subtitle}>See how we market Summerlin West properties professionally</p>
      </section>
      <section className={styles.credibility}>
        <h2>1234 Vistas Park Dr</h2>
        <ul>
          <li>4 Bed, 3 Bath, 2,800 sqft</li>
          <li>Modern kitchen, pool, 3-car garage</li>
          <li>Walk to parks and top-rated schools</li>
        </ul>
        <a href="#lead-capture" className={styles.cta}>Request a Private Tour</a>
      </section>
      <section id="lead-capture" className={styles.leadCapture}>
        <h2>Interested in this home?</h2>
        {submitted ? (
          <div style={{color: '#16B286', fontWeight: 600, fontSize: '1.1rem'}}>Thank you! We'll be in touch soon.</div>
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
            <button type="submit" disabled={loading}>{loading ? "Sending..." : "Request Info"}</button>
            {error && <div style={{color: '#d32f2f', marginTop: '0.5rem'}}>{error}</div>}
          </form>
        )}
      </section>
    </div>
  );
} 