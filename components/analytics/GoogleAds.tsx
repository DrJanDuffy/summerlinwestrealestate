'use client';

import { useEffect } from 'react';

interface GoogleAdsProps {
  conversionId?: string;
  conversionLabel?: string;
}

export default function GoogleAds({ conversionId, conversionLabel }: GoogleAdsProps) {
  useEffect(() => {
    // Google Ads conversion tracking
    const initializeGoogleAds = () => {
      // Track conversions
      const trackConversion = (conversionType: string, value?: number) => {
        if ((window as any).gtag && conversionId && conversionLabel) {
          (window as any).gtag('event', 'conversion', {
            send_to: `${conversionId}/${conversionLabel}`,
            event_category: 'Conversion',
            event_label: conversionType,
            value: value || 1,
            currency: 'USD',
          });
        }
      };

      // Track lead generation conversions
      const trackLeadConversion = (source: string, value: number = 100) => {
        trackConversion(`lead_${source}`, value);
      };

      // Track phone call conversions
      const trackPhoneConversion = () => {
        trackConversion('phone_call', 50);
      };

      // Track email contact conversions
      const trackEmailConversion = () => {
        trackConversion('email_contact', 25);
      };

      // Track property inquiry conversions
      const trackPropertyInquiry = (propertyValue: number) => {
        trackConversion('property_inquiry', propertyValue * 0.01);
      };

      // Track market report downloads
      const trackReportDownload = () => {
        trackConversion('market_report_download', 10);
      };

      // Track contact form submissions
      const trackFormSubmission = () => {
        trackConversion('contact_form', 75);
      };

      // Make tracking functions globally available
      (window as any).trackLeadConversion = trackLeadConversion;
      (window as any).trackPhoneConversion = trackPhoneConversion;
      (window as any).trackEmailConversion = trackEmailConversion;
      (window as any).trackPropertyInquiry = trackPropertyInquiry;
      (window as any).trackReportDownload = trackReportDownload;
      (window as any).trackFormSubmission = trackFormSubmission;

      // Auto-track phone calls
      const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
      phoneLinks.forEach((link) => {
        link.addEventListener('click', () => {
          trackPhoneConversion();
        });
      });

      // Auto-track email contacts
      const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
      emailLinks.forEach((link) => {
        link.addEventListener('click', () => {
          trackEmailConversion();
        });
      });

      // Auto-track contact forms
      const contactForms = document.querySelectorAll('form');
      contactForms.forEach((form) => {
        form.addEventListener('submit', () => {
          trackFormSubmission();
        });
      });

      // Track page engagement
      let engagementStartTime = Date.now();
      let maxScrollDepth = 0;

      const trackEngagement = () => {
        const scrollDepth = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
        maxScrollDepth = Math.max(maxScrollDepth, scrollDepth);

        // Track high engagement (75% scroll depth)
        if (scrollDepth >= 75 && maxScrollDepth < 75) {
          trackConversion('high_engagement', 5);
        }
      };

      // Track time on page
      const trackTimeOnPage = () => {
        const timeOnPage = Date.now() - engagementStartTime;
        
        // Track significant time on page (2+ minutes)
        if (timeOnPage >= 120000) {
          trackConversion('long_engagement', 10);
        }
      };

      // Add scroll listener
      window.addEventListener('scroll', trackEngagement);

      // Track time on page after 2 minutes
      setTimeout(trackTimeOnPage, 120000);

      // Track exit intent
      document.addEventListener('mouseleave', (e) => {
        if (e.clientY <= 0) {
          trackConversion('exit_intent', 2);
        }
      });

      // Track property views
      const trackPropertyView = (propertyId: string, subdivision: string, price: number) => {
        trackConversion(`property_view_${subdivision}`, price * 0.001);
      };

      (window as any).trackPropertyView = trackPropertyView;

      // Track market report downloads
      const reportLinks = document.querySelectorAll('a[href*="market-report"], a[href*="market-reports"]');
      reportLinks.forEach((link) => {
        link.addEventListener('click', () => {
          trackReportDownload();
        });
      });

    };

    initializeGoogleAds();

  }, [conversionId, conversionLabel]);

  return null; // This component doesn't render anything
}
