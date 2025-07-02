import styles from "../page.module.css";

export default function Communities() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <h1>Summerlin West Communities</h1>
        <p className={styles.subtitle}>Explore all neighborhoods in Summerlin West</p>
      </section>
      <section style={{padding: '2rem 1rem'}}>
        <div style={{display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem'}}>
          <div className={styles.credibility}>
            <h2>The Vistas</h2>
            <p>Family-friendly, parks, and top schools.</p>
            <a href="/the-vistas" className={styles.secondaryCta}>View Community</a>
          </div>
          <div className={styles.credibility}>
            <h2>The Paseos</h2>
            <p>Scenic trails and modern amenities.</p>
            <a href="#" className={styles.secondaryCta}>View Community</a>
          </div>
          <div className={styles.credibility}>
            <h2>The Cliffs</h2>
            <p>Luxury homes with mountain views.</p>
            <a href="#" className={styles.secondaryCta}>View Community</a>
          </div>
        </div>
      </section>
    </div>
  );
} 