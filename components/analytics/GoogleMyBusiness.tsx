'use client';

import { useEffect } from 'react';
import { trackLeadEvent } from '../../lib/lead-tracking';

interface GoogleMyBusinessProps {
  businessId?: string;
}

export default function GoogleMyBusiness({ businessId }: GoogleMyBusinessProps) {
  useEffect(() => {
    // Google My Business integration
    const initializeGoogleMyBusiness = () => {
      // Add Google My Business structured data
      const gmbSchema = {
        '@context': 'https://schema.org',
        '@type': 'RealEstateAgent',
        name: 'Dr. Jan Duffy',
        description: 'Top Summerlin West real estate expert with 15+ years of experience and $6B+ in sales volume',
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
        openingHoursSpecification: [
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            opens: '09:00',
            closes: '18:00',
          },
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: 'Saturday',
            opens: '10:00',
            closes: '17:00',
          },
          {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: 'Sunday',
            opens: '12:00',
            closes: '16:00',
          },
        ],
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          reviewCount: '127',
          bestRating: '5',
          worstRating: '1',
        },
      };

      // Add schema to page
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(gmbSchema);
      document.head.appendChild(script);

      // Track Google My Business interactions
      const trackGMBInteraction = (action: string) => {
        if ((window as any).gtag) {
          (window as any).gtag('event', 'gmb_interaction', {
            event_category: 'Google My Business',
            event_label: action,
            value: 1,
          });
        }
      };

      // Track phone calls from GMB
      const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
      phoneLinks.forEach((link) => {
        link.addEventListener('click', () => {
          trackGMBInteraction('phone_call');
        });
      });

      // Track directions requests
      const directionLinks = document.querySelectorAll('a[href*="maps.google.com"]');
      directionLinks.forEach((link) => {
        link.addEventListener('click', () => {
          trackGMBInteraction('directions');
        });
      });

      // Track website visits from GMB
      trackGMBInteraction('website_visit');
    };

    initializeGoogleMyBusiness();

    // Google Maps integration for location
    const initializeGoogleMaps = () => {
      const mapContainer = document.getElementById('google-maps-container');
      if (mapContainer && (window as any).google) {
        const map = new (window as any).google.maps.Map(mapContainer, {
          center: { lat: 36.1865, lng: -115.3432 },
          zoom: 15,
          mapTypeId: 'roadmap',
        });

        const marker = new (window as any).google.maps.Marker({
          position: { lat: 36.1865, lng: -115.3432 },
          map: map,
          title: 'Dr. Jan Duffy - Summerlin West Real Estate',
        });

        const infoWindow = new (window as any).google.maps.InfoWindow({
          content: `
            <div style="padding: 10px;">
              <h3>Dr. Jan Duffy</h3>
              <p>Summerlin West Real Estate Expert</p>
              <p>1980 Festival Plaza Dr (One Summerlin)</p>
              <p>Las Vegas, NV 89135</p>
              <p>Phone: (702) 550-0112</p>
            </div>
          `,
        });

        marker.addListener('click', () => {
          infoWindow.open(map, marker);
          trackLeadEvent({
            event_type: 'consultation_request',
            lead_source: 'organic',
            lead_type: 'unknown'
          });
        });
      }
    };

    // Load Google Maps API if not already loaded
    if (!(window as any).google) {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&libraries=places`;
      script.async = true;
      script.defer = true;
      script.onload = initializeGoogleMaps;
      document.head.appendChild(script);
    } else {
      initializeGoogleMaps();
    }

  }, [businessId]);

  return null; // This component doesn't render anything
}
