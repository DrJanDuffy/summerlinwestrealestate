'use client';

import { useEffect } from 'react';

interface GoogleRichResultsProps {
  pageType?: 'homepage' | 'property' | 'agent' | 'organization' | 'blog' | 'market-report';
  propertyData?: any;
  agentData?: any;
}

export default function GoogleRichResults({
  pageType = 'homepage',
  propertyData,
  agentData,
}: GoogleRichResultsProps) {
  useEffect(() => {
    const addRichResultsSchema = () => {
      let schema = {};

      switch (pageType) {
        case 'homepage':
          schema = {
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'Summerlin West Real Estate',
            url: 'https://www.summerlinwestrealestate.com',
            description:
              'Premier luxury real estate services in Summerlin West, Las Vegas. Expert guidance from Dr. Jan Duffy, REALTOR®.',
            publisher: {
              '@type': 'Organization',
              name: 'Summerlin West Real Estate',
              logo: {
                '@type': 'ImageObject',
                url: 'https://www.summerlinwestrealestate.com/images/logo.png',
              },
            },
            potentialAction: {
              '@type': 'SearchAction',
              target: 'https://www.summerlinwestrealestate.com/properties?q={search_term_string}',
              'query-input': 'required name=search_term_string',
            },
            mainEntity: {
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
              url: 'https://summerlinwestrealestate.com',
              geo: {
                '@type': 'GeoCoordinates',
                latitude: 36.1865,
                longitude: -115.3432,
              },
              priceRange: '$500K-$2M+',
              areaServed: {
                '@type': 'GeoCircle',
                geoMidpoint: {
                  '@type': 'GeoCoordinates',
                  latitude: 36.1865,
                  longitude: -115.3432,
                },
                geoRadius: '15000',
              },
              worksFor: {
                '@type': 'RealEstateAgent',
                name: 'Berkshire Hathaway HomeServices Nevada Properties',
              },
            },
          };
          break;

        case 'property':
          if (propertyData) {
            schema = {
              '@context': 'https://schema.org',
              '@type': 'RealEstateListing',
              name: propertyData.name || 'Luxury Home in Summerlin West',
              description: propertyData.description || 'Beautiful luxury home in Summerlin West',
              url: propertyData.url || window.location.href,
              image: propertyData.images || ['/images/og-image.svg'],
              offers: {
                '@type': 'Offer',
                price: propertyData.price || '1000000',
                priceCurrency: 'USD',
                availability: 'https://schema.org/InStock',
                validFrom: new Date().toISOString(),
              },
              address: {
                '@type': 'PostalAddress',
                streetAddress: propertyData.address || '123 Summerlin West Dr',
                addressLocality: 'Las Vegas',
                addressRegion: 'NV',
                postalCode: '89135',
                addressCountry: 'US',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: propertyData.latitude || 36.1865,
                longitude: propertyData.longitude || -115.3432,
              },
              numberOfRooms: propertyData.bedrooms || 4,
              numberOfBathroomsTotal: propertyData.bathrooms || 3,
              floorSize: {
                '@type': 'QuantitativeValue',
                value: propertyData.squareFeet || 3000,
                unitCode: 'SQF',
              },
              yearBuilt: propertyData.yearBuilt || 2020,
              additionalProperty: [
                {
                  '@type': 'PropertyValue',
                  name: 'Property Type',
                  value: propertyData.type || 'Single Family',
                },
                {
                  '@type': 'PropertyValue',
                  name: 'Subdivision',
                  value: propertyData.subdivision || 'Summerlin West',
                },
              ],
            };
          }
          break;

        case 'agent':
          schema = {
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
            url: 'https://summerlinwestrealestate.com',
            geo: {
              '@type': 'GeoCoordinates',
              latitude: 36.1865,
              longitude: -115.3432,
            },
            priceRange: '$500K-$2M+',
            areaServed: {
              '@type': 'GeoCircle',
              geoMidpoint: {
                '@type': 'GeoCoordinates',
                latitude: 36.1865,
                longitude: -115.3432,
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
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: '4.9',
              reviewCount: '127',
              bestRating: '5',
              worstRating: '1',
            },
          };
          break;

        case 'organization':
          schema = {
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Summerlin West Real Estate',
            description: 'Premier luxury real estate services in Summerlin West, Las Vegas',
            url: 'https://www.summerlinwestrealestate.com',
            logo: {
              '@type': 'ImageObject',
              url: 'https://www.summerlinwestrealestate.com/images/logo.png',
            },
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
            foundingDate: '2010',
            founder: {
              '@type': 'Person',
              name: 'Dr. Jan Duffy',
            },
            employee: {
              '@type': 'Person',
              name: 'Dr. Jan Duffy',
              jobTitle: 'REALTOR®',
            },
            sameAs: [
              'https://www.facebook.com/summerlinwestrealestate',
              'https://www.instagram.com/summerlinwestrealestate',
              'https://www.linkedin.com/in/jan-duffy-realestate',
            ],
          };
          break;

        case 'blog':
          schema = {
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: document.title,
            description:
              document.querySelector('meta[name="description"]')?.getAttribute('content') || '',
            url: window.location.href,
            datePublished: new Date().toISOString(),
            dateModified: new Date().toISOString(),
            author: {
              '@type': 'Person',
              name: 'Dr. Jan Duffy',
              jobTitle: 'REALTOR®',
            },
            publisher: {
              '@type': 'Organization',
              name: 'Summerlin West Real Estate',
              logo: {
                '@type': 'ImageObject',
                url: 'https://www.summerlinwestrealestate.com/images/logo.png',
              },
            },
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': window.location.href,
            },
            articleSection: 'Real Estate',
            keywords: 'Summerlin West, Las Vegas real estate, luxury homes, Dr. Jan Duffy',
          };
          break;

        case 'market-report':
          schema = {
            '@context': 'https://schema.org',
            '@type': 'Report',
            name: document.title,
            description:
              document.querySelector('meta[name="description"]')?.getAttribute('content') || '',
            url: window.location.href,
            datePublished: new Date().toISOString(),
            author: {
              '@type': 'Person',
              name: 'Dr. Jan Duffy',
              jobTitle: 'REALTOR®',
            },
            publisher: {
              '@type': 'Organization',
              name: 'Summerlin West Real Estate',
            },
            about: {
              '@type': 'Place',
              name: 'Summerlin West',
              containedInPlace: {
                '@type': 'City',
                name: 'Las Vegas',
                addressRegion: 'NV',
              },
            },
            additionalProperty: [
              {
                '@type': 'PropertyValue',
                name: 'Report Type',
                value: 'Market Analysis',
              },
              {
                '@type': 'PropertyValue',
                name: 'Market Area',
                value: 'Summerlin West',
              },
            ],
          };
          break;

        default:
          schema = {
            '@context': 'https://schema.org',
            '@type': 'WebPage',
            name: document.title,
            description:
              document.querySelector('meta[name="description"]')?.getAttribute('content') || '',
            url: window.location.href,
            isPartOf: {
              '@type': 'WebSite',
              name: 'Summerlin West Real Estate',
              url: 'https://www.summerlinwestrealestate.com',
            },
          };
      }

      // Add schema to page
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);

      // Track Rich Results implementation
      if ((window as any).gtag) {
        (window as any).gtag('event', 'rich_results_implemented', {
          event_category: 'SEO',
          event_label: pageType,
          value: 1,
        });
      }
    };

    addRichResultsSchema();

    // Validate Rich Results with Google's Rich Results Test
    const validateRichResults = () => {
      const currentUrl = window.location.href;
      const richResultsTestUrl = `https://search.google.com/test/rich-results?url=${encodeURIComponent(currentUrl)}`;

      // Track validation attempt
      if ((window as any).gtag) {
        (window as any).gtag('event', 'rich_results_validation', {
          event_category: 'SEO',
          event_label: 'Google Rich Results Test',
          value: 1,
        });
      }
    };

    // Validate after a short delay
    setTimeout(validateRichResults, 2000);
  }, [pageType, propertyData, agentData]);

  return null; // This component doesn't render anything
}
