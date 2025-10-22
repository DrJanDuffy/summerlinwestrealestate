'use client';

import ModernAboutPage from '../../components/ui/ModernAboutPage';

export default function ModernAboutClient() {
  return (
    <>
      <ModernAboutPage />

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'RealEstateAgent',
            name: 'Dr. Jan Duffy',
            description:
              'Top Summerlin West real estate expert with 15+ years of experience and $6B+ in sales volume',
            address: {
              '@type': 'PostalAddress',
              streetAddress: '1980 Festival Plaza Dr (One Summerlin)',
              addressLocality: 'Las Vegas',
              addressRegion: 'NV',
              postalCode: '89135',
              addressCountry: 'US',
            },
            telephone: '+1-702-550-0112',
            email: 'DrJanSells@SummerlinWestRealEstate.com',
            url: 'https://summerlinwestrealestate.com/about',
            geo: {
              '@type': 'GeoCoordinates',
              latitude: 36.154,
              longitude: -115.3336,
            },
            priceRange: '$500K-$2M+',
            areaServed: {
              '@type': 'GeoCircle',
              geoMidpoint: {
                '@type': 'GeoCoordinates',
                latitude: 36.154,
                longitude: -115.3336,
              },
              geoRadius: '15000',
            },
            knowsAbout: [
              'Summerlin West Real Estate',
              'The Vistas',
              'The Paseos',
              'Stonebridge',
              'Redpoint',
              'Reverence',
              'Luxury Homes',
              'New Construction',
              'Investment Properties',
            ],
            hasCredential: [
              'Licensed REALTOR® (S.0197614)',
              'Certified Luxury Home Marketing Specialist',
              'Graduate REALTOR® Institute (GRI)',
              'Certified Residential Specialist (CRS)',
              "Accredited Buyer's Representative (ABR)",
            ],
            worksFor: {
              '@type': 'RealEstateAgent',
              name: 'Berkshire Hathaway HomeServices Nevada Properties',
            },
            sameAs: [
              'https://www.facebook.com/summerlinwestrealestate',
              'https://www.instagram.com/summerlinwestrealestate',
              'https://www.linkedin.com/in/jan-duffy-realestate',
            ],
          }),
        }}
      />
    </>
  );
}
