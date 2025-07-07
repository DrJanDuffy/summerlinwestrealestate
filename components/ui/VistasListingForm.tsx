"use client";

import { useState, useId } from "react";
import styles from "../../app/page.module.css";

interface VistasListingFormProps {
  formId?: string;
}

export default function VistasListingForm({ formId }: VistasListingFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const reactId = useId();
  const idPrefix = formId || reactId;

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

  const nameInvalid = !!error && !name.trim() ? 'true' : 'false';
  const emailInvalid = !!error && !email.match(/^[^@\s]+@[^@\s]+\.[^@\s]+$/) ? 'true' : 'false';
  const phoneInvalid = !!error && !phone.match(/^[0-9\-\+\(\)\s]{7,}$/) ? 'true' : 'false';

  if (submitted) {
    return (
      <div className={styles.successMessage} role="status" tabIndex={-1}>
        Thank you! We'll be in touch soon.
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className={styles.leadForm}
      aria-describedby={error ? `${idPrefix}-error` : undefined}
      style={{
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
        background: "#fff",
        borderRadius: 8,
        padding: 24,
        minHeight: 240,
      }}
    >
      <div className={styles.formGroup}>
        <label htmlFor={`${idPrefix}-name`}>Name</label>
        <input
          id={`${idPrefix}-name`}
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          disabled={loading}
          aria-invalid={nameInvalid}
          autoComplete="name"
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor={`${idPrefix}-email`}>Email</label>
        <input
          id={`${idPrefix}-email`}
          type="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={loading}
          aria-invalid={emailInvalid}
          autoComplete="email"
        />
      </div>
      <div className={styles.formGroup}>
        <label htmlFor={`${idPrefix}-phone`}>Phone</label>
        <input
          id={`${idPrefix}-phone`}
          type="tel"
          placeholder="Your phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          disabled={loading}
          aria-invalid={phoneInvalid}
          autoComplete="tel"
        />
      </div>
      <button
        type="submit"
        disabled={loading}
        className={styles.submitButton}
        style={{
          background: "#3A8DDE",
          color: "#fff",
          borderRadius: 4,
          fontWeight: 600,
          boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
        }}
      >
        {loading ? "Sending..." : "Request Info"}
      </button>
      {error && (
        <div
          id={`${idPrefix}-error`}
          className={styles.errorMessage}
          role="alert"
          aria-live="assertive"
          style={{ color: "#D32F2F", marginTop: 8 }}
        >
          {error}
        </div>
      )}
    </form>
  );
} 