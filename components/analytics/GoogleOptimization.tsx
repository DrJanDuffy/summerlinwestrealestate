'use client';

import { useEffect } from 'react';
import GoogleAnalytics from './GoogleAnalytics';
import GoogleTagManager, { GoogleTagManagerNoScript } from './GoogleTagManager';
import CoreWebVitals from './CoreWebVitals';
import GoogleMyBusiness from './GoogleMyBusiness';
import GoogleAds from './GoogleAds';
import GooglePageSpeedOptimization from './GooglePageSpeedOptimization';
import GoogleRichResults from './GoogleRichResults';

interface GoogleOptimizationProps {
  // Google Analytics
  gaMeasurementId?: string;
  
  // Google Tag Manager
  gtmId?: string;
  
  // Google Ads
  adsConversionId?: string;
  adsConversionLabel?: string;
  
  // Google My Business
  gmbBusinessId?: string;
  
  // Google Maps
  mapsApiKey?: string;
}

export default function GoogleOptimization({
  gaMeasurementId,
  gtmId,
  adsConversionId,
  adsConversionLabel,
  gmbBusinessId,
  mapsApiKey,
}: GoogleOptimizationProps) {
  
  useEffect(() => {
    // Set up Google optimization
    const initializeGoogleOptimization = () => {
      // Add Google verification meta tag
      const verificationMeta = document.createElement('meta');
      verificationMeta.name = 'google-site-verification';
      verificationMeta.content = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || '';
      document.head.appendChild(verificationMeta);

      // Add Google Search Console verification
      const searchConsoleMeta = document.createElement('meta');
      searchConsoleMeta.name = 'google-site-verification';
      searchConsoleMeta.content = process.env.NEXT_PUBLIC_GOOGLE_SEARCH_CONSOLE || '';
      document.head.appendChild(searchConsoleMeta);

      // Optimize for Google PageSpeed
      const optimizePageSpeed = () => {
        // Add preload hints for critical resources
        const criticalResources = [
          '/images/og-image.svg',
          '/images/logo.png',
          'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'
        ];

        criticalResources.forEach((resource) => {
          const link = document.createElement('link');
          link.rel = 'preload';
          link.as = resource.endsWith('.css') ? 'style' : 'image';
          link.href = resource;
          document.head.appendChild(link);
        });

        // Optimize images
        const images = document.querySelectorAll('img');
        images.forEach((img) => {
          if (!img.getAttribute('loading')) {
            img.setAttribute('loading', 'lazy');
          }
          if (!img.getAttribute('decoding')) {
            img.setAttribute('decoding', 'async');
          }
        });

        // Add resource hints
        const resourceHints = [
          { rel: 'dns-prefetch', href: 'https://www.google-analytics.com' },
          { rel: 'dns-prefetch', href: 'https://www.googletagmanager.com' },
          { rel: 'dns-prefetch', href: 'https://fonts.googleapis.com' },
          { rel: 'dns-prefetch', href: 'https://fonts.gstatic.com' },
          { rel: 'preconnect', href: 'https://www.google-analytics.com' },
          { rel: 'preconnect', href: 'https://www.googletagmanager.com' },
        ];

        resourceHints.forEach((hint) => {
          const link = document.createElement('link');
          link.rel = hint.rel;
          link.href = hint.href;
          document.head.appendChild(link);
        });
      };

      optimizePageSpeed();

      // Add Google Rich Results validation
      const addRichResultsValidation = () => {
        // Add structured data for the website
        const websiteSchema = {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'Summerlin West Real Estate',
          url: 'https://www.summerlinwestrealestate.com',
          description: 'Premier luxury real estate services in Summerlin West, Las Vegas. Expert guidance from Dr. Jan Duffy, REALTOR®.',
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
        };

        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.textContent = JSON.stringify(websiteSchema);
        document.head.appendChild(script);
      };

      addRichResultsValidation();

      // Add Google Search Console sitemap notification
      const notifySitemap = () => {
        if ((window as any).gtag) {
          (window as any).gtag('event', 'sitemap_submitted', {
            event_category: 'SEO',
            event_label: 'Google Search Console',
            value: 1,
          });
        }
      };

      // Notify sitemap submission after page load
      setTimeout(notifySitemap, 2000);

    };

    initializeGoogleOptimization();

  }, []);

  return (
    <>
      {/* Google Tag Manager */}
      {gtmId && <GoogleTagManager gtmId={gtmId} />}
      
      {/* Google Analytics */}
      {gaMeasurementId && <GoogleAnalytics measurementId={gaMeasurementId} />}
      
      {/* Core Web Vitals */}
      {gaMeasurementId && <CoreWebVitals measurementId={gaMeasurementId} />}
      
      {/* Google My Business */}
      {gmbBusinessId && <GoogleMyBusiness businessId={gmbBusinessId} />}
      
      {/* Google Ads */}
      {adsConversionId && adsConversionLabel && (
        <GoogleAds 
          conversionId={adsConversionId} 
          conversionLabel={adsConversionLabel} 
        />
      )}
      
      {/* Google PageSpeed Optimization */}
      <GooglePageSpeedOptimization />
      
      {/* Google Rich Results */}
      <GoogleRichResults pageType="homepage" />
    </>
  );
}

// Export the NoScript component for body placement
export { GoogleTagManagerNoScript };
