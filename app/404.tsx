import Link from 'next/link';
import styles from './page.module.css';

export default function NotFound() {
  return (
    <div className={styles.page} style={{textAlign: 'center', padding: '4rem 1rem'}}>
      <h1 style={{fontSize: '3rem', color: '#3A8DDE', marginBottom: '1rem'}}>404</h1>
      <h2 style={{fontSize: '1.5rem', color: '#0A2540', marginBottom: '1.5rem'}}>This page could not be found.</h2>
      <p style={{color: '#666', marginBottom: '2rem'}}>The page you are looking for does not exist or has been moved.</p>
      <div style={{display: 'flex', flexDirection: 'column', gap: '1rem', alignItems: 'center'}}>
        <Link href="/" className={styles.cta} style={{background: '#3A8DDE', color: '#fff', padding: '0.75rem 2rem', borderRadius: '6px', textDecoration: 'none', fontWeight: 600}}>Go to Homepage</Link>
        <Link href="/communities" className={styles.secondaryCta} style={{color: '#3A8DDE', textDecoration: 'underline'}}>View Communities</Link>
        <Link href="/current-listing" className={styles.secondaryCta} style={{color: '#16B286', textDecoration: 'underline'}}>See Current Listing</Link>
      </div>
    </div>
  );
} 