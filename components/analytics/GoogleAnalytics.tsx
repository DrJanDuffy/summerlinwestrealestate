'use client';

import Script from 'next/script';
import { useId } from 'react';

interface GoogleAnalyticsProps {
  measurementId: string;
}

export default function GoogleAnalytics({ measurementId }: GoogleAnalyticsProps) {
  const scriptId = useId();

  return (
    <>
      {/* Google Analytics 4 */}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
      />
      <Script
        id={scriptId}
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${measurementId}', {
              page_title: document.title,
              page_location: window.location.href,
              custom_map: {
                'custom_parameter_1': 'property_type',
                'custom_parameter_2': 'subdivision',
                'custom_parameter_3': 'price_range'
              }
            });

            // Enhanced Ecommerce for Real Estate
            gtag('config', '${measurementId}', {
              send_page_view: true,
              enhanced_ecommerce: true,
              custom_map: {
                'dimension1': 'agent_name',
                'dimension2': 'property_id',
                'dimension3': 'subdivision',
                'dimension4': 'price_range',
                'dimension5': 'property_type'
              }
            });

            // Track page views with custom parameters
            function trackPageView(url, title) {
              gtag('event', 'page_view', {
                page_title: title,
                page_location: url,
                custom_parameter_1: 'real_estate',
                custom_parameter_2: 'summerlin_west',
                custom_parameter_3: 'luxury_homes'
              });
            }

            // Track property views
            function trackPropertyView(propertyId, subdivision, price) {
              gtag('event', 'view_item', {
                item_id: propertyId,
                item_name: subdivision + ' Property',
                item_category: 'Real Estate',
                item_category2: subdivision,
                value: price,
                currency: 'USD',
                custom_parameter_1: subdivision,
                custom_parameter_2: price_range(price),
                custom_parameter_3: 'luxury'
              });
            }

            // Track lead generation
            function trackLeadGeneration(source, type) {
              gtag('event', 'generate_lead', {
                event_category: 'Lead Generation',
                event_label: source,
                value: 1,
                custom_parameter_1: type,
                custom_parameter_2: 'summerlin_west',
                custom_parameter_3: 'dr_jan_duffy'
              });
            }

            // Track phone calls
            function trackPhoneCall() {
              gtag('event', 'phone_call', {
                event_category: 'Contact',
                event_label: 'Phone Call',
                value: 1
              });
            }

            // Track email contact
            function trackEmailContact() {
              gtag('event', 'email_contact', {
                event_category: 'Contact',
                event_label: 'Email Contact',
                value: 1
              });
            }

            // Track market report downloads
            function trackMarketReportDownload(reportType) {
              gtag('event', 'download', {
                event_category: 'Market Report',
                event_label: reportType,
                value: 1
              });
            }

            // Helper function to determine price range
            function price_range(price) {
              if (price < 500000) return 'Under 500K';
              if (price < 750000) return '500K-750K';
              if (price < 1000000) return '750K-1M';
              if (price < 1500000) return '1M-1.5M';
              if (price < 2000000) return '1.5M-2M';
              return 'Over 2M';
            }

            // Make functions globally available
            window.trackPropertyView = trackPropertyView;
            window.trackLeadGeneration = trackLeadGeneration;
            window.trackPhoneCall = trackPhoneCall;
            window.trackEmailContact = trackEmailContact;
            window.trackMarketReportDownload = trackMarketReportDownload;
          `,
        }}
      />
    </>
  );
}
