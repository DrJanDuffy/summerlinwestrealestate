import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import styles from "../page.module.css";
import dynamic from 'next/dynamic';
const LatestMarketInsights = dynamic(() => import('../../components/ui/LatestMarketInsights'), { ssr: false });

export default function Communities() {
  return (
    <div className={styles.page}>
      <Head>
        <title>Summerlin West Communities | Neighborhoods & Homes for Sale</title>
        <meta name="description" content="Explore all Summerlin West communities. Find neighborhood guides, homes for sale, amenities, and expert insights for Summerlin real estate buyers and sellers." />
        <meta property="og:title" content="Summerlin West Communities | Neighborhoods & Homes for Sale" />
        <meta property="og:description" content="Explore all Summerlin West communities. Find neighborhood guides, homes for sale, amenities, and expert insights for Summerlin real estate buyers and sellers." />
      </Head>
      <section className={styles.hero} style={{marginBottom: '2rem'}}>
        <h1>Summerlin West Communities</h1>
        <p className={styles.subtitle}>Discover the best neighborhoods in Summerlin for your next home</p>
      </section>
      <LatestMarketInsights />
      <section style={{marginBottom: '2.5rem'}}>
        <h2>Featured Neighborhoods</h2>
        <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem', maxWidth: '900px', margin: '0 auto'}}>
          {["The Vistas","The Paseos","Stonebridge","Redpoint","Redpoint Square","Reverence"].map((name, i) => (
            <div key={name} style={{borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', background: '#fff'}}>
              <Image src={`https://placehold.co/400x220?text=${encodeURIComponent(name)}`} alt={`${name} neighborhood in Summerlin`} width={400} height={220} style={{width: '100%', height: 'auto', display: 'block'}} />
              <div style={{padding: '1rem'}}>
                <h3 style={{margin: 0}}>{name}</h3>
                <p style={{fontSize: '0.98rem', color: '#0A2540'}}>Learn more about {name} and see available homes.</p>
                <Link href={`/communities#${name.toLowerCase().replace(/\s/g,'-')}`}>View Details</Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section style={{marginBottom: '2.5rem', background: '#F7F9FC', borderRadius: '8px', padding: '2rem 1rem'}}>
        <h2>Why Live in Summerlin West?</h2>
        <ul style={{color: '#0A2540', fontSize: '1.08rem', marginLeft: '1rem', listStyle: 'disc inside'}}>
          <li>Top-rated schools and family-friendly neighborhoods</li>
          <li>Access to parks, trails, and outdoor recreation</li>
          <li>Modern amenities and shopping at Downtown Summerlin</li>
          <li>Strong community spirit and safety</li>
        </ul>
      </section>
      <section style={{marginBottom: '2.5rem', background: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', padding: '2rem 1rem'}}>
        <h2>Explore More</h2>
        <ul style={{color: '#3A8DDE', fontWeight: 600, fontSize: '1.08rem', marginLeft: '1rem', listStyle: 'disc inside'}}>
          <li><Link href="/market-reports">Summerlin Market Reports</Link></li>
          <li><Link href="/current-listing">Featured Home for Sale</Link></li>
          <li><Link href="/about">Meet Your Summerlin Expert</Link></li>
          <li><Link href="/contact">Contact for Community Tours</Link></li>
        </ul>
      </section>
    </div>
  );
} 