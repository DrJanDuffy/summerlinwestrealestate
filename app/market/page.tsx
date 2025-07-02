import styles from "../page.module.css";

export default function Market() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <h1>Summerlin West Market Report</h1>
        <p className={styles.subtitle}>Comprehensive data and trends for all communities</p>
      </section>
      <section className={styles.credibility}>
        <h2>Market Data</h2>
        <p>[Market charts and data will appear here]</p>
        <h2>Market Chart</h2>
        <div style={{background: '#F7F9FC', border: '1px solid #3A8DDE', borderRadius: 8, minHeight: 180, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '1rem 0'}}>
          [Market chart widget will be embedded here]
        </div>
        <h2>Downloadable Market Report</h2>
        <a href="#" className={styles.cta} style={{marginTop: '1rem', display: 'inline-block'}}>Download Full Market Report (PDF)</a>
      </section>
    </div>
  );
} 