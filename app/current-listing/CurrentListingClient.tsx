'use client';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useEffect } from 'react';
import LatestMarketInsights from '../../components/ui/LatestMarketInsights';
import LeadCaptureForm from '../../components/ui/LeadCaptureForm';
import SummerlinWestOverview from '../../components/ui/SummerlinWestOverview';
import styles from '../page.module.css';

const RealScoutOfficeListings = dynamic(
  () => import('../../components/ui/RealScoutOfficeListings'),
  {
    ssr: false,
  }
);

// Import RealScout components
const RealScoutFeaturedListings = dynamic(
  () => import('../../components/ui/RealScoutFeaturedListings'),
  {
    ssr: false,
    loading: () => (
      <div className="flex items-center justify-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    ),
  }
);

// SSR handling moved to parent Server Component

export default function CurrentListingClient() {
  // Set page metadata
  useEffect(() => {
    document.title = 'Stunning Vistas Home for Sale | 4BR/3BA Luxury Property | Dr. Jan Duffy';

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        'content',
        'Tour this gorgeous 4BR/3BA home in The Vistas! Red Rock Canyon views, 2,800 sq ft, luxury finishes. Dr. Jan Duffy, REALTOR® - $6B+ in sales. Call (702) 550-0112 for private showing!'
      );
    }
  }, []);

  const propertyDetails = [
    '4 bedrooms, 3 bathrooms, 2,800 sq ft',
    'Upgraded kitchen, modern flooring, energy-efficient features',
    'Spacious backyard with mountain views',
    'Move-in ready with smart home technology',
  ];

  const communityBenefits = [
    'Access to top-rated Summerlin schools',
    'Beautiful parks and walking trails',
    'Minutes from Downtown Summerlin shopping & dining',
    'Exclusive community events and amenities',
    'Low HOA fees',
  ];

  const marketAnalysis = [
    'Comparable homes in The Vistas have sold for $875k–$950k in the last 6 months',
    'Upgraded kitchen, flooring, and energy-efficient features',
    'Move-in ready with modern finishes',
    'Low days on market for similar homes (avg. 12 days)',
    'Expert local pricing strategy based on current demand',
  ];

  const photoGallery = [1, 2, 3, 4, 5, 6];

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Residence',
    name: 'The Vistas Summerlin Home for Sale',
    description:
      'Modern 4 bed, 3 bath home in The Vistas, Summerlin. Upgraded kitchen, smart home tech, mountain views.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '1980 Festival Plaza Dr (One Summerlin)',
      addressLocality: 'Las Vegas',
      addressRegion: 'NV',
      postalCode: '89135',
      addressCountry: 'US',
    },
    image: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80',
    ],
    numberOfRooms: 8,
    floorSize: {
      '@type': 'QuantitativeValue',
      value: 2800,
      unitCode: 'SQF',
    },
    offers: {
      '@type': 'Offer',
      price: '899000',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
    telephone: '+1-702-550-0112',
  };

  return (
    <div className={styles.page}>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData, null, 2),
        }}
      />

      <main className={`${styles.luxuryMainContent} ${styles.currentListingContainer}`}>
        <SummerlinWestOverview />
        <section className={styles.gallerySection}>
          <h2>Photo Gallery</h2>
          <div className={styles.photoGallery}>
            {photoGallery.map((num, index) => {
              const imageFiles = [
                'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80',
                'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80',
                'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80',
                'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80',
                'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80',
                'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80',
                'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80',
                'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80',
                'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80',
                'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80',
                'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80',
                'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80',
              ];
              const imageSrc = imageFiles[index % imageFiles.length];
              return (
                <Image
                  key={num}
                  src={imageSrc}
                  alt={`Luxury home in Summerlin West - Photo ${num}`}
                  width={400}
                  height={300}
                  className={styles.galleryImage}
                />
              );
            })}
          </div>
        </section>
        <section className={styles.propertyDetailsSection}>
          <h2>Property Details</h2>
          <ul>
            {propertyDetails.map((detail, idx) => (
              <li key={`detail-${idx}-${detail.slice(0, 20)}`}>{detail}</li>
            ))}
          </ul>
        </section>
        <section className={styles.communityBenefitsSection}>
          <h2>Community Benefits</h2>
          <ul>
            {communityBenefits.map((benefit, idx) => (
              <li key={`benefit-${idx}-${benefit.slice(0, 20)}`}>{benefit}</li>
            ))}
          </ul>
        </section>
        <section className={styles.marketAnalysisSection}>
          <h2>Market Analysis</h2>
          <ul>
            {marketAnalysis.map((item, idx) => (
              <li key={`market-${idx}-${item.slice(0, 20)}`}>{item}</li>
            ))}
          </ul>
        </section>
        <section className={styles.ctaSection}>
          <h2>Schedule a Private Showing</h2>
          <LeadCaptureForm
            variant="inline"
            title="Request a Private Tour"
            subtitle="Get in touch to schedule a private showing or request more information."
            source="Current Listing CTA"
            formId="current-listing"
          />
        </section>

        <section className={styles.featuredListingsSection}>
          <h2>More Featured Properties in Summerlin West</h2>
          <p className={styles.sectionSubtitle}>
            Explore additional luxury properties currently available in Summerlin West. Each
            property is hand-selected to showcase the finest in luxury real estate.
          </p>
          <RealScoutFeaturedListings />
        </section>

        {/* Advanced Property Search */}
        <section className={styles.featuredListingsSection}>
          <h2>Advanced Property Search</h2>
          <p className={styles.sectionSubtitle}>
            Use our advanced search tool to find similar luxury properties in Summerlin West. Filter
            by price, features, and more to discover your perfect home.
          </p>
          {/* @ts-ignore - RealScout web component */}
          <realscout-advanced-search agent-encoded-id="QWdlbnQtMjI1MDUw"></realscout-advanced-search>
        </section>

        {/* Simple Property Search */}
        <section className={styles.featuredListingsSection}>
          <h2>Quick Property Search</h2>
          <p className={styles.sectionSubtitle}>
            Browse available luxury properties with our simple search tool. Perfect for quick
            property browsing of similar homes in Summerlin West.
          </p>
          {/* @ts-ignore - RealScout web component */}
          <realscout-simple-search agent-encoded-id="QWdlbnQtMjI1MDUw"></realscout-simple-search>
        </section>

        {/* Additional Property Search Options */}
        <section className={styles.featuredListingsSection}>
          <h2>Broader Market Options in Summerlin West</h2>
          <p className={styles.sectionSubtitle}>
            Explore a comprehensive range of residential properties across Summerlin West
            communities. From entry-level homes to luxury estates, discover all available options
            while viewing our featured listing.
          </p>
          {/* @ts-ignore - RealScout web component */}
          <RealScoutOfficeListings
            agentEncodedId="QWdlbnQtMjI1MDUw"
            sortOrder="PRICE_LOW"
            listingStatus="For Sale"
            propertyTypes=",SFR,MF,TC,LAL,MOBILE,OTHER"
            priceMin="400000"
            priceMax="2000000"
            className="mt-6"
          />
        </section>
      </main>
      <LatestMarketInsights />
    </div>
  );
}
