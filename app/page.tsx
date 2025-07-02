"use client";
import styles from "./page.module.css";
import LeadCaptureForm from "../components/ui/LeadCaptureForm";
import { useLeadCaptureModal } from "../hooks/useLeadCaptureModal";

export default function Home() {
  const { isOpen, source, openModal, closeModal } = useLeadCaptureModal();

  const handleFormSuccess = () => {
    // Track successful submission
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'lead_form_success', {
        event_category: 'Lead',
        event_label: source,
      });
    }
  };

  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <h1>Summerlin West Real Estate Specialist</h1>
        <p className={styles.subtitle}>Currently Listing & Selling in The Vistas - Your Hyperlocal Expert</p>
        <button 
          onClick={() => openModal('Hero CTA')}
          className={styles.cta}
        >
          Get Instant Access to Market Reports
        </button>
      </section>

      {/* Market Authority Section */}
      <section className={styles.marketAuthority}>
        <div className={styles.authorityContent}>
          <div className={styles.authorityText}>
            <h2>Why Choose Our Summerlin West Expertise</h2>
            
            <div className={styles.expertisePoints}>
              <div className={styles.expertisePoint}>
                <div className={styles.expertiseIcon}>
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <div>
                  <h3>Local Resident</h3>
                  <p>Living and breathing Summerlin West for over 15 years</p>
                </div>
              </div>
              
              <div className={styles.expertisePoint}>
                <div className={styles.expertiseIcon}>
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
                  </svg>
                </div>
                <div>
                  <h3>Active Listings</h3>
                  <p>Currently representing multiple properties in The Vistas</p>
                </div>
              </div>
              
              <div className={styles.expertisePoint}>
                <div className={styles.expertiseIcon}>
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
                  </svg>
                </div>
                <div>
                  <h3>Market Knowledge</h3>
                  <p>Deep understanding of local trends and property values</p>
                </div>
              </div>
              
              <div className={styles.expertisePoint}>
                <div className={styles.expertiseIcon}>
                  <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <div>
                  <h3>Proven Results</h3>
                  <p>Consistently exceeding client expectations with record sales</p>
                </div>
              </div>
            </div>
            
            <div className={styles.statsGrid}>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>15+</div>
                <div className={styles.statLabel}>Years Experience</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>500+</div>
                <div className={styles.statLabel}>Homes Sold</div>
              </div>
              <div className={styles.statItem}>
                <div className={styles.statNumber}>12</div>
                <div className={styles.statLabel}>Avg Days on Market</div>
              </div>
            </div>
          </div>
          
          <div className={styles.authorityProfile}>
            <div className={styles.profileImage}>
              <svg width="120" height="120" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
              </svg>
            </div>
            <h3>Your Summerlin West Expert</h3>
            <p>With over 15 years of experience in Summerlin West real estate, I've helped hundreds of families find their perfect home in The Vistas and surrounding communities. My deep local knowledge and proven track record make me your trusted partner in navigating the Summerlin West market.</p>
            <div className={styles.profileContact}>
              <div className={styles.contactItem}>
                <strong>Phone:</strong> (702) 555-1234
              </div>
              <div className={styles.contactItem}>
                <strong>Email:</strong> info@summerlinwestrealestate.com
              </div>
            </div>
          </div>
        </div>
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

      {/* Inline Lead Capture */}
      <section id="lead-capture" className={styles.leadCapture}>
        <LeadCaptureForm 
          variant="inline"
          title="Get Your Free Summerlin West Market Report"
          subtitle="Stay ahead of the market with our exclusive insights and expert analysis"
          source="Homepage Inline"
          onSuccess={handleFormSuccess}
        />
      </section>

      {/* Modal Lead Capture */}
      <LeadCaptureForm 
        variant="modal"
        isOpen={isOpen}
        onClose={closeModal}
        source={source}
        onSuccess={handleFormSuccess}
      />
    </div>
  );
}
