import styles from "../page.module.css";

export default function Sold() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <h1>Success Stories</h1>
        <p className={styles.subtitle}>Proven results across Summerlin West</p>
      </section>
      <section className={styles.credibility}>
        <h2>Recent Sales</h2>
        <ul>
          <li>1234 Vistas Park Dr - Sold above asking</li>
          <li>5678 Paseos Ridge - Sold in 5 days</li>
          <li>9101 Cliffs Edge - Record price for the community</li>
        </ul>
        <h2>Client Testimonial</h2>
        <blockquote style={{fontStyle: 'italic', color: '#3A8DDE', margin: '1rem 0'}}>
          "Our home sold above asking in just 4 days thanks to the expert marketing and local knowledge!"<br />
          <span style={{fontWeight: 600, color: '#16B286'}}>– The Smith Family</span>
        </blockquote>
        <h2>Downloadable Success Stories</h2>
        <a href="#" className={styles.cta} style={{marginTop: '1rem', display: 'inline-block'}}>Download Success Stories (PDF)</a>
      </section>
    </div>
  );
} 