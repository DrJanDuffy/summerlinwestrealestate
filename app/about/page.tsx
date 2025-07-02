import styles from "../page.module.css";

export default function About() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <h1>About Your Summerlin West Specialist</h1>
        <p className={styles.subtitle}>Resident, market expert, and community advocate</p>
      </section>
      <section className={styles.credibility}>
        <h2>My Story</h2>
        <p>I live, work, and specialize in Summerlin West. My passion is helping families find their perfect home and achieve their real estate goals in this incredible community.</p>
        <h2>Why Work With Me?</h2>
        <ul>
          <li>Local expertise and proven results</li>
          <li>Personalized service and attention</li>
          <li>Trusted by Summerlin West families</li>
        </ul>
        <h2>Client Testimonial</h2>
        <blockquote style={{fontStyle: 'italic', color: '#3A8DDE', margin: '1rem 0'}}>
          "Working with this team was the best decision for our family's move to Summerlin West. Their expertise and care made all the difference!"<br />
          <span style={{fontWeight: 600, color: '#16B286'}}>– The Johnson Family</span>
        </blockquote>
        <h2>Downloadable Guide</h2>
        <a href="#" className={styles.cta} style={{marginTop: '1rem', display: 'inline-block'}}>Download the Complete Summerlin West Guide (PDF)</a>
      </section>
    </div>
  );
} 