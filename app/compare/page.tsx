import styles from "../page.module.css";

export default function Compare() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <h1>Compare Summerlin West Communities</h1>
        <p className={styles.subtitle}>Side-by-side analysis to help you choose the right neighborhood</p>
      </section>
      <section className={styles.credibility}>
        <h2>Community Comparison</h2>
        <table style={{width: '100%', borderCollapse: 'collapse', marginTop: '1rem'}}>
          <thead>
            <tr style={{background: '#F7F9FC'}}>
              <th style={{padding: '0.5rem', border: '1px solid #3A8DDE'}}>Community</th>
              <th style={{padding: '0.5rem', border: '1px solid #3A8DDE'}}>Price Range</th>
              <th style={{padding: '0.5rem', border: '1px solid #3A8DDE'}}>Amenities</th>
              <th style={{padding: '0.5rem', border: '1px solid #3A8DDE'}}>Schools</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{padding: '0.5rem', border: '1px solid #3A8DDE'}}>The Vistas</td>
              <td style={{padding: '0.5rem', border: '1px solid #3A8DDE'}}>$600K-$1.2M</td>
              <td style={{padding: '0.5rem', border: '1px solid #3A8DDE'}}>Parks, Pools</td>
              <td style={{padding: '0.5rem', border: '1px solid #3A8DDE'}}>A-rated</td>
            </tr>
            <tr>
              <td style={{padding: '0.5rem', border: '1px solid #3A8DDE'}}>The Paseos</td>
              <td style={{padding: '0.5rem', border: '1px solid #3A8DDE'}}>$700K-$1.5M</td>
              <td style={{padding: '0.5rem', border: '1px solid #3A8DDE'}}>Trails, Parks</td>
              <td style={{padding: '0.5rem', border: '1px solid #3A8DDE'}}>A-rated</td>
            </tr>
            <tr>
              <td style={{padding: '0.5rem', border: '1px solid #3A8DDE'}}>The Cliffs</td>
              <td style={{padding: '0.5rem', border: '1px solid #3A8DDE'}}>$800K-$2M</td>
              <td style={{padding: '0.5rem', border: '1px solid #3A8DDE'}}>Mountain Views</td>
              <td style={{padding: '0.5rem', border: '1px solid #3A8DDE'}}>A-rated</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
} 