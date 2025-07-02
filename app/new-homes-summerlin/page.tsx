import LeadCaptureForm from '../../components/ui/LeadCaptureForm';
import Head from 'next/head';
import styles from '../page.module.css';

export default function NewHomesSummerlin() {
  return (
    <div className={styles.page}>
      <Head>
        <title>New Homes in Summerlin Las Vegas | Summerlin West Real Estate</title>
        <meta name="description" content="Explore new construction homes, builder incentives, and the buying process for new homes in Summerlin, Las Vegas. Get alerts for new home opportunities!" />
        <meta property="og:title" content="New Homes in Summerlin Las Vegas" />
        <meta property="og:description" content="Explore new construction homes, builder incentives, and the buying process for new homes in Summerlin, Las Vegas. Get alerts for new home opportunities!" />
      </Head>
      <section className={styles.hero} style={{marginBottom: '2rem'}}>
        <h1>New Homes in Summerlin Las Vegas</h1>
        <p className={styles.subtitle}>Your guide to new construction communities, builder incentives, and the new home buying process in Summerlin</p>
      </section>

      {/* New Construction Communities */}
      <section style={{marginBottom: '2.5rem'}}>
        <h2>New Construction Communities</h2>
        <ul style={{color: '#0A2540', fontSize: '1.08rem', marginLeft: '1rem', listStyle: 'disc inside'}}>
          <li>Redpoint & Redpoint Square</li>
          <li>Stonebridge</li>
          <li>Reverence</li>
          <li>The Cliffs</li>
          <li>Summerlin Centre</li>
          <li>And more—contact us for the latest releases!</li>
        </ul>
      </section>

      {/* Builder Information */}
      <section style={{marginBottom: '2.5rem', background: '#F7F9FC', borderRadius: '8px', padding: '2rem 1rem'}}>
        <h2>Top Builders in Summerlin</h2>
        <ul style={{color: '#0A2540', fontSize: '1.08rem', marginLeft: '1rem', listStyle: 'disc inside'}}>
          <li>Pulte Homes</li>
          <li>Toll Brothers</li>
          <li>Lennar</li>
          <li>Woodside Homes</li>
          <li>Richmond American</li>
          <li>Tri Pointe Homes</li>
        </ul>
      </section>

      {/* Incentives Section */}
      <section style={{marginBottom: '2.5rem'}}>
        <h2>Builder Incentives & Special Offers</h2>
        <p style={{color: '#0A2540', fontSize: '1.08rem'}}>
          Many builders in Summerlin offer special incentives for new home buyers, including closing cost assistance, design center credits, and rate buydowns. Incentives change frequently—contact us for the latest offers and VIP access to new releases.
        </p>
      </section>

      {/* Process Section */}
      <section style={{marginBottom: '2.5rem', background: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.08)', padding: '2rem 1rem'}}>
        <h2>The New Home Buying Process</h2>
        <ol style={{color: '#0A2540', fontSize: '1.08rem', marginLeft: '1.5rem', listStyle: 'decimal inside'}}>
          <li>Consultation: Discuss your needs, budget, and timeline</li>
          <li>Community & Builder Selection: Tour model homes and compare options</li>
          <li>Lot & Floor Plan Choice: Reserve your preferred lot and design</li>
          <li>Contract & Customization: Sign contract and select finishes/upgrades</li>
          <li>Construction & Inspections: Monitor progress and attend walkthroughs</li>
          <li>Closing & Move-In: Finalize paperwork and get your keys!</li>
        </ol>
      </section>

      {/* FAQ Section */}
      <section style={{marginBottom: '2.5rem'}}>
        <h2>New Home Buying FAQ</h2>
        <div style={{color: '#0A2540', fontSize: '1.05rem', maxWidth: 700, margin: '0 auto'}}>
          <strong>Do I need a real estate agent for a new build?</strong>
          <p>Yes! Builders represent their own interests. Having an agent ensures you get the best deal, incentives, and guidance throughout the process—at no cost to you.</p>
          <strong>Can I negotiate with builders?</strong>
          <p>Absolutely. We help negotiate price, upgrades, and incentives to maximize your value.</p>
          <strong>How long does it take to build a new home?</strong>
          <p>Most new homes in Summerlin take 6–10 months from contract to completion, depending on builder and customization.</p>
          <strong>What are the benefits of buying new?</strong>
          <p>Enjoy modern layouts, energy efficiency, new warranties, and the ability to personalize your home from the start.</p>
        </div>
      </section>

      {/* Lead Capture for New Home Alerts */}
      <section style={{marginBottom: '2.5rem', background: '#F7F9FC', borderRadius: '8px', padding: '2rem 1rem'}}>
        <h2 style={{textAlign: 'center', marginBottom: '1.5rem'}}>Get New Home Alerts in Summerlin</h2>
        <LeadCaptureForm 
          variant="inline"
          title="Sign Up for New Home Alerts"
          subtitle="Be the first to know about new construction releases, incentives, and VIP tours."
          source="New Homes Summerlin Page"
        />
      </section>
    </div>
  );
} 