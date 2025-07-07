"use client";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./LeadCaptureForm.module.css";

interface LeadFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  propertyInterest: string;
  privacyConsent: boolean;
}

interface LeadCaptureFormProps {
  variant?: "inline" | "modal";
  title?: string;
  subtitle?: string;
  onSuccess?: () => void;
  onClose?: () => void;
  isOpen?: boolean;
  source?: string;
}

const propertyInterests = [
  { value: "", label: "Select your interest..." },
  { value: "buy", label: "Buy a Home" },
  { value: "sell", label: "Sell a Home" },
  { value: "rent", label: "Rent a Home" },
  { value: "invest", label: "Investment Property" },
  { value: "market-report", label: "Market Report" },
  { value: "valuation", label: "Property Valuation" },
  { value: "consultation", label: "Free Consultation" },
  { value: "the-vistas", label: "The Vistas Community" },
  { value: "other", label: "Other" },
];

export default function LeadCaptureForm({
  variant = "inline",
  title = "Get Your Free Summerlin West Market Report",
  subtitle = "Stay ahead of the market with our exclusive insights",
  onSuccess,
  onClose,
  isOpen = true,
  source = "Website",
}: LeadCaptureFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<LeadFormData>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      propertyInterest: "",
      privacyConsent: false,
    },
  });

  const privacyConsent = watch("privacyConsent");

  const onSubmit = async (data: LeadFormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setErrorMessage("");

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...data,
          page: source,
          timestamp: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      setSubmitStatus("success");
      reset();
      if (typeof window !== "undefined" && (window as any).gtag) {
        (window as any).gtag("event", "lead_form_submit", {
          event_category: "Lead",
          event_label: source,
        });
        (window as any).gtag("event", "generate_lead", {
          value: 1,
          currency: "USD",
          form_location: source || "unknown",
        });
      }
      onSuccess?.();
      if (variant === "modal") {
        setTimeout(() => {
          onClose?.();
        }, 3000);
      }
    } catch (error: any) {
      setSubmitStatus("error");
      setErrorMessage(
        error.message ||
          "There was a problem submitting your request. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const formContent = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={styles["lead-capture-form"]}
    >
      <div className={styles["form-header"]}>
        <h2>{title}</h2>
        {subtitle && <p className={styles["form-subtitle"]}>{subtitle}</p>}
      </div>

      {submitStatus === "success" ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className={styles["success-message"]}
        >
          <div className={styles["success-icon"]}>
            <svg width="48" height="48" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3>Thank You!</h3>
          <p>
            Your request has been submitted successfully. We'll be in touch
            within 24 hours.
          </p>
          {variant === "inline" && (
            <button
              onClick={() => setSubmitStatus("idle")}
              className={styles["submit-button"]}
            >
              Submit Another Request
            </button>
          )}
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className={styles["form-grid"]}>
            <div className={styles["form-group"]}>
              <label htmlFor="name">Full Name *</label>
              <Controller
                name="name"
                control={control}
                rules={{
                  required: "Name is required",
                  minLength: {
                    value: 2,
                    message: "Name must be at least 2 characters",
                  },
                }}
                render={({ field }) => (
                  <input
                    {...field}
                    type="text"
                    id="name"
                    placeholder="Enter your full name"
                    className={errors.name ? styles.error : ""}
                    disabled={isSubmitting}
                  />
                )}
              />
              {errors.name && (
                <span className={styles["error-message"]}>
                  {errors.name.message}
                </span>
              )}
            </div>

            <div className={styles["form-group"]}>
              <label htmlFor="email">Email Address *</label>
              <Controller
                name="email"
                control={control}
                rules={{
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Please enter a valid email address",
                  },
                }}
                render={({ field }) => (
                  <input
                    {...field}
                    type="email"
                    id="email"
                    placeholder="Enter your email address"
                    className={errors.email ? styles.error : ""}
                    disabled={isSubmitting}
                  />
                )}
              />
              {errors.email && (
                <span className={styles["error-message"]}>
                  {errors.email.message}
                </span>
              )}
            </div>

            <div className={styles["form-group"]}>
              <label htmlFor="phone">Phone Number *</label>
              <Controller
                name="phone"
                control={control}
                rules={{
                  required: "Phone number is required",
                  pattern: {
                    value: /^[\+]?[1-9][\d]{0,15}$/,
                    message: "Please enter a valid phone number",
                  },
                }}
                render={({ field }) => (
                  <input
                    {...field}
                    type="tel"
                    id="phone"
                    placeholder="Enter your phone number"
                    className={errors.phone ? styles.error : ""}
                    disabled={isSubmitting}
                  />
                )}
              />
              {errors.phone && (
                <span className={styles["error-message"]}>
                  {errors.phone.message}
                </span>
              )}
            </div>

            <div className={styles["form-group"]}>
              <label htmlFor="propertyInterest">Property Interest *</label>
              <Controller
                name="propertyInterest"
                control={control}
                rules={{ required: "Please select your property interest" }}
                render={({ field }) => (
                  <select
                    {...field}
                    id="propertyInterest"
                    className={errors.propertyInterest ? styles.error : ""}
                    disabled={isSubmitting}
                  >
                    {propertyInterests.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                )}
              />
              {errors.propertyInterest && (
                <span className={styles["error-message"]}>
                  {errors.propertyInterest.message}
                </span>
              )}
            </div>

            <div className={`${styles["form-group"]} ${styles["full-width"]}`}>
              <label htmlFor="message">Message (Optional)</label>
              <Controller
                name="message"
                control={control}
                render={({ field }) => (
                  <textarea
                    {...field}
                    id="message"
                    rows={4}
                    placeholder="Tell us about your real estate needs..."
                    disabled={isSubmitting}
                  />
                )}
              />
            </div>

            <div className={`${styles["form-group"]} ${styles["full-width"]}`}>
              <Controller
                name="privacyConsent"
                control={control}
                rules={{ required: "You must agree to our privacy policy" }}
                render={({ field }) => (
                  <label className={styles["checkbox-label"]}>
                    <input
                      {...(({ value, ...rest }) => rest)(field)}
                      type="checkbox"
                      checked={field.value}
                      disabled={isSubmitting}
                    />
                    <span className={styles["checkmark"]}></span>I agree to the{" "}
                    <a
                      href="/privacy-policy"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Privacy Policy
                    </a>{" "}
                    and consent to being contacted about real estate services. *
                  </label>
                )}
              />
              {errors.privacyConsent && (
                <span className={styles["error-message"]}>
                  {errors.privacyConsent.message}
                </span>
              )}
            </div>
          </div>

          {submitStatus === "error" && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className={styles["error-banner"]}
            >
              {errorMessage}
            </motion.div>
          )}

          <div className={styles["form-actions"]}>
            <button
              type="submit"
              disabled={isSubmitting || !privacyConsent}
              className={styles["submit-button"]}
            >
              {isSubmitting ? (
                <span className={styles["loading"]}>
                  <svg className={styles["spinner"]} viewBox="0 0 24 24">
                    <circle
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                      strokeDasharray="31.416"
                      strokeDashoffset="31.416"
                    >
                      <animate
                        attributeName="stroke-dasharray"
                        dur="2s"
                        values="0 31.416;15.708 15.708;0 31.416"
                        repeatCount="indefinite"
                      />
                      <animate
                        attributeName="stroke-dashoffset"
                        dur="2s"
                        values="0;-15.708;-31.416"
                        repeatCount="indefinite"
                      />
                    </circle>
                  </svg>
                  Submitting...
                </span>
              ) : (
                "Get Your Free Report"
              )}
            </button>
          </div>

          <div className={styles["form-footer"]}>
            <p className={styles["privacy-notice"]}>
              <small>
                By submitting this form, you agree to receive communications
                from Summerlin West Real Estate. We respect your privacy and
                will never share your information with third parties.
              </small>
            </p>
          </div>
        </form>
      )}
    </motion.div>
  );

  if (variant === "modal") {
    return (
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={styles["modal-overlay"]}
            onClick={onClose}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className={styles["modal-content"]}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className={styles["modal-close"]}
                onClick={onClose}
                aria-label="Close"
              >
                <svg
                  width="24"
                  height="24"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                </svg>
              </button>
              {formContent}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  }

  return formContent;
}
