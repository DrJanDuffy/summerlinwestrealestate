import LeadCaptureForm from '../../components/ui/LeadCaptureForm';
import Head from 'next/head';
import styles from '../page.module.css';

export default function CurrentListing() {
  return (
    <div className={styles.page}>
      <Head>
        <title>The Vistas Summerlin Home for Sale | Summerlin West Real Estate</title>
        <meta name="description" content="Explore this stunning home for sale in The Vistas, Summerlin. View photos, property details, community benefits, and market analysis. Schedule a private showing today!" />
        <meta property="og:title" content="The Vistas Summerlin Home for Sale" />
        <meta property="og:description" content="Explore this stunning home for sale in The Vistas, Summerlin. View photos, property details, community benefits, and market analysis. Schedule a private showing today!" />
      </Head>
      {/* Hero Section */}
      <section className={styles.hero} style={{marginBottom: '2rem'}}>
        <h1>The Vistas Summerlin Home for Sale</h1>
        <p className={styles.subtitle}>Modern Luxury in the Heart of Summerlin West</p>
      </section>

      {/* Photo Gallery */}
      <section style={{marginBottom: '2.5rem'}}>
        <h2 style={{textAlign: 'center', marginBottom: '1.5rem'}}>Photo Gallery</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '1.5rem',
          maxWidth: '900px',
          margin: '0 auto',
        }}>
          {[1,2,3,4,5,6].map((i) => (
            <div key={i} style={{borderRadius: '8px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.08)'}}>
              <img src={`https://placehold.co/400x300?text=Photo+${i}`} alt={`The Vistas Home Photo ${i}`} style={{width: '100%', height: 'auto', display: 'block'}} />
            </div>
          ))}
        </div>
      </section>

      {/* Property Details */}
      <section style={{marginBottom: '2.5rem', background: '#F7F9FC', borderRadius: '8px', padding: '2rem 1rem'}}>
        <h2 style={{marginBottom: '1rem'}}>Property Details</h2>
        <ul style={{listStyle: 'none', padding: 0, margin: 0, fontSize: '1.1rem', color: '#0A2540'}}>
          <li><strong>Address:</strong> 1234 Vistas Edge Dr, Las Vegas, NV 89138</li>
          <li><strong>Price:</strong> $899,000</li>
          <li><strong>Beds:</strong> 4</li>
          <li><strong>Baths:</strong> 3.5</li>
          <li><strong>Sq Ft:</strong> 3,200</li>
          <li><strong>Lot Size:</strong> 7,200 sq ft</li>
          <li><strong>Garage:</strong> 3-car</li>
          <li><strong>Year Built:</strong> 2018</li>
          <li><strong>MLS#:</strong> 1234567</li>
        </ul>
      </section>

      {/* Community Benefits */}
      <section style={{marginBottom: '2.5rem'}}>
        <h2>Community Benefits</h2>
        <ul style={{listStyle: 'disc inside', color: '#0A2540', fontSize: '1.05rem', marginLeft: '1rem'}}>
          <li>Access to top-rated Summerlin schools</li>
          <li>Beautiful parks and walking trails</li>
          <li>Minutes from Downtown Summerlin shopping & dining</li>
          <li>Exclusive community events and amenities</li>
          <li>Low HOA fees</li>
        </ul>
      </section>

      {/* Market Analysis */}
      <section style={{marginBottom: '2.5rem', background: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', padding: '2rem 1rem'}}>
        <h2>Why This Home is Priced Right</h2>
        <ul style={{listStyle: 'disc inside', color: '#0A2540', fontSize: '1.05rem', marginLeft: '1rem'}}>
          <li>Comparable homes in The Vistas have sold for $875k–$950k in the last 6 months</li>
          <li>Upgraded kitchen, flooring, and energy-efficient features</li>
          <li>Move-in ready with modern finishes</li>
          <li>Low days on market for similar homes (avg. 12 days)</li>
          <li>Expert local pricing strategy based on current demand</li>
        </ul>
      </section>

      {/* Contact Form for Private Showings */}
      <section style={{marginBottom: '2.5rem', background: '#F7F9FC', borderRadius: '8px', padding: '2rem 1rem'}}>
        <h2 style={{textAlign: 'center', marginBottom: '1.5rem'}}>Request a Private Showing</h2>
        <LeadCaptureForm 
          variant="inline"
          title="Request a Private Showing"
          subtitle="Schedule your exclusive tour of this beautiful Vistas home."
          source="Current Listing Page"
        />
      </section>
    </div>
  );
} 