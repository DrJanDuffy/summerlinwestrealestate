"use client";
import Head from 'next/head';
import styles from "./page.module.css";
import LeadCaptureForm from "../components/ui/LeadCaptureForm";
import { useLeadCaptureModal } from "../hooks/useLeadCaptureModal";
import Link from 'next/link';
import Image from 'next/image';
import LatestMarketInsights from '../components/ui/LatestMarketInsights';
import dynamic from 'next/dynamic';
import HomebotWidget from '../components/ui/HomebotWidget';
import SectionCard from "../components/ui/SectionCard";
import { Inter } from "next/font/google";

// Dynamically import RealScoutAdvancedSearch for performance
const RealScoutAdvancedSearch = dynamic(() => import('../components/ui/RealScoutAdvancedSearch'), { ssr: false });

type Faq = {
  question: string;
  answer: string;
};

const inter = Inter({ subsets: ["latin"] });

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

  const faqs: Faq[] = [
    {
      question: "How do I schedule a home tour in Summerlin?",
      answer: "Contact us via the form or call (702) 555-1234 to schedule a private showing."
    },
    {
      question: "What are the best neighborhoods in Summerlin West?",
      answer: "Popular neighborhoods include The Vistas, The Paseos, Stonebridge, and Redpoint."
    },
    {
      question: "How can I get a free market report?",
      answer: "Fill out the form on this page or visit our Market Reports section to get your free report."
    },
    {
      question: "Are there new construction homes available?",
      answer: "Yes, Summerlin West offers a variety of new construction communities. Contact us for the latest releases."
    },
    {
      question: "What is the average home price in Summerlin West?",
      answer: "The median home price is around $850,000, but it varies by neighborhood and property type."
    },
    // Add more FAQs as needed
  ];

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <Head>
        <title>Summerlin West Real Estate | Homes for Sale & Community Guide</title>
        <meta name="description" content="Find homes for sale in Summerlin West. Explore communities, market trends, and connect with a local real estate expert for your Summerlin home journey." />
        <meta property="og:title" content="Summerlin West Real Estate | Homes for Sale & Community Guide" />
        <meta property="og:description" content="Find homes for sale in Summerlin West. Explore communities, market trends, and connect with a local real estate expert for your Summerlin home journey." />
        <meta property="og:image" content="/images/og-image.jpg" />
        <link rel="canonical" href="https://summerlinwestrealestate.com/" />
        {/* ...structured data scripts... */}
      </Head>
      <header>
        <SectionCard ariaLabel="Featured Property">
          <h1 style={{color: '#0A2540', marginBottom: 8}}>Del Webb North Ranch</h1>
          <h2 style={{color: '#3A8DDE', margin: 0, fontWeight: 700, fontSize: 22}}>2209 Beauty Vista Avenue</h2>
          <Image
            src="https://placehold.co/1200x420?text=Del+Webb+North+Ranch+2209+Beauty+Vista+Ave"
            alt="Del Webb North Ranch 2209 Beauty Vista Avenue"
            fill
            style={{objectFit: 'cover', borderRadius: 12, zIndex: 1}}
            priority
          />
          <p style={{color: '#16B286', fontWeight: 600, fontSize: 18, margin: '8px 0'}}>4 Bed &bull; 3 Bath &bull; 2,400 SqFt &bull; $899,000</p>
          <LeadCaptureForm onSuccess={closeModal} />
        </SectionCard>
      </header>
      <main className={styles.page}>
        <SectionCard ariaLabel="Home Value Widget">
          <h2 style={{color: '#0A2540'}}>What's Your Home Worth?</h2>
          <p style={{color: '#3A8DDE'}}>Get your Del Webb North Ranch home value instantly</p>
          <HomebotWidget />
        </SectionCard>
        <SectionCard ariaLabel="Featured Listings">
          <h2 style={{color: '#0A2540', textAlign: 'center'}}>Del Webb North Ranch Homes for Sale</h2>
          <div className={styles.featuredListingsGrid} style={{justifyContent: 'center'}}>
            {[1,2,3,4,5,6].map((i) => (
              <div key={i} className={styles.featuredListingCard}>
                <Image
                  src={`https://placehold.co/400x220?text=Home+${i}`}
                  alt={`Del Webb North Ranch home for sale ${i}`}
                  width={400}
                  height={220}
                  className={styles.featuredListingImage}
                  loading="lazy"
                  priority={i === 1}
                />
                <div style={{padding: '1rem'}}>
                  <h3 style={{margin: 0}}>Home #{i}</h3>
                  <p style={{fontSize: '0.98rem', color: '#0A2540'}}>4 bed &bull; 3 bath &bull; $900,000+</p>
                </div>
              </div>
            ))}
          </div>
        </SectionCard>
        <SectionCard ariaLabel="Local Insights">
          <h2 style={{color: '#0A2540', textAlign: 'center'}}>Local Insights: Living in Summerlin West</h2>
          <div style={{display: 'flex', flexWrap: 'wrap', gap: '2rem', justifyContent: 'center'}}>
            <div style={{flex: '1 1 220px', minWidth: 220}}>
              <h3 style={{color: '#3A8DDE'}}>Top-Rated Schools</h3>
              <p>Explore top public and private schools, including school ratings and boundaries.</p>
            </div>
            <div style={{flex: '1 1 220px', minWidth: 220}}>
              <h3 style={{color: '#16B286'}}>Parks & Recreation</h3>
              <p>Discover local parks, walking trails, and outdoor activities for all ages.</p>
            </div>
            <div style={{flex: '1 1 220px', minWidth: 220}}>
              <h3 style={{color: '#0A2540'}}>Dining & Shopping</h3>
              <p>Find the best restaurants, cafes, and shopping destinations in Summerlin West.</p>
            </div>
            <div style={{flex: '1 1 220px', minWidth: 220}}>
              <h3 style={{color: '#3A8DDE'}}>Market Trends</h3>
              <p>Stay up-to-date with the latest home price trends and market insights.</p>
            </div>
          </div>
        </SectionCard>
        <SectionCard ariaLabel="Advanced Home Search">
          <h2 style={{color: '#0A2540', textAlign: 'center'}}>Advanced Home Search</h2>
          <realscout-simple-search
            agent-encoded-id="QWdlbnQtMjI1MDUw"
            aria-label="Home search for Summerlin West"
          ></realscout-simple-search>
        </SectionCard>
        <SectionCard ariaLabel="Lifestyle/Amenities">
          <h2 style={{color: '#0A2540', textAlign: 'center'}}>Del Webb at North Ranch - Your Dream Lifestyle Awaits</h2>
          <ul style={{color: '#0A2540', fontSize: '1.08rem', margin: '1rem auto', maxWidth: 600, listStyle: 'disc inside'}}>
            <li>Gated community with resort-style amenities</li>
            <li>Clubhouse, pool, fitness center, and social events</li>
            <li>Walking trails and parks nearby</li>
            <li>Low-maintenance living for active adults</li>
          </ul>
        </SectionCard>
        <SectionCard ariaLabel="Community/Neighborhood Info">
          <h2 style={{color: '#0A2540', textAlign: 'center'}}>Del Webb North Ranch Private 55+ Active Adult Community in North Las Vegas</h2>
          <p style={{color: '#0A2540', maxWidth: 800, margin: '1rem auto', fontSize: '1.05rem'}}>
            Discover the vibrant lifestyle and amenities of Del Webb North Ranch, a premier 55+ active adult community in North Las Vegas. Enjoy modern homes, social clubs, and a welcoming neighborhood atmosphere.
          </p>
          {/* Placeholder for more detailed community info */}
        </SectionCard>
        <SectionCard ariaLabel="Gallery/Virtual Tour">
          <h2 style={{color: '#0A2540'}}>Gallery & Virtual Tour</h2>
          <div style={{margin: '1.5rem auto', maxWidth: 800, minHeight: 220, background: '#fff', borderRadius: 6, boxShadow: '0 2px 8px rgba(0,0,0,0.04)', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>Gallery/Virtual Tour Placeholder</div>
        </SectionCard>
        <SectionCard ariaLabel="Amenities/Features">
          <h2 style={{color: '#0A2540'}}>Amenities</h2>
          <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1.5rem', margin: '1.5rem 0'}}>
            {['Clubhouse', 'Pool', 'Fitness Center', 'Walking Trails', 'Parks', 'Social Events'].map((amenity) => (
              <div key={amenity} style={{background: '#F7F9FC', borderRadius: 6, padding: '1rem 2rem', minWidth: 120, boxShadow: '0 2px 8px rgba(0,0,0,0.04)'}}>{amenity}</div>
            ))}
          </div>
        </SectionCard>
        <SectionCard ariaLabel="Agent/Contact Info">
          <h2 style={{color: '#0A2540'}}>Meet Your Summerlin Expert</h2>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem'}}>
            <Image src="/images/agent-placeholder.jpg" alt="Agent" width={96} height={96} style={{borderRadius: '50%'}} />
            <div>
              <h3 style={{margin: 0}}>Jane Doe</h3>
              <p style={{margin: 0, color: '#3A8DDE'}}>Realtor® | Summerlin Specialist</p>
              <p style={{margin: 0, color: '#0A2540'}}>Call: (702) 555-1234</p>
            </div>
          </div>
        </SectionCard>
        <SectionCard ariaLabel="Mortgage Calculator">
          <h2 style={{color: '#0A2540'}}>Mortgage Calculator</h2>
          <div style={{margin: '1.5rem auto', maxWidth: 600, minHeight: 120, background: '#F7F9FC', borderRadius: 6, boxShadow: '0 2px 8px rgba(0,0,0,0.04)', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>Mortgage Calculator Widget</div>
        </SectionCard>
        <LatestMarketInsights />
      </main>
    </>
  );
}
