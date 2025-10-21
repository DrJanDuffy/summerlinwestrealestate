import type { Metadata } from 'next';
import { Bricolage_Grotesque, Inter, Outfit } from 'next/font/google';
import './globals.css';
import { Geist, Geist_Mono } from 'next/font/google';
import Head from 'next/head';
import StickyPhoneMenu from '../components/layout/StickyPhoneMenu';
import Script from 'next/script';
import Header from '../components/layout/Header';
import RealScoutOfficeListingsWrapper from '../components/ui/RealScoutOfficeListingsWrapper';
import styles from './page.module.css';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { generateComprehensiveSchema } from '../lib/structured-data';
import LeadTrackingProvider from '../components/ui/LeadTrackingProvider';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
});

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
});

const bricolageGrotesque = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-bricolage-grotesque',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.summerlinwestrealestate.com'),
  title: 'Summerlin West Homes for Sale | Dr. Jan Duffy REALTOR® | The Vistas',
  description:
    'Find your dream home in Summerlin West with Dr. Jan Duffy, REALTOR®. Expert guidance, luxury properties, and insider market knowledge. Schedule your consultation today!',
  keywords: [
    'Summerlin West',
    'Las Vegas real estate',
    'luxury homes',
    'master-planned community',
    'Red Rock Canyon',
    'The Vistas',
    'Stonebridge',
  ],
  authors: [{ name: 'Summerlin West Real Estate' }],
  creator: 'Summerlin West Real Estate',
  publisher: 'Summerlin West Real Estate',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Summerlin West Homes for Sale | Dr. Jan Duffy REALTOR® | The Vistas',
    description:
      'Find your dream home in Summerlin West with Dr. Jan Duffy, REALTOR®. Expert guidance, luxury properties, and insider market knowledge. Schedule your consultation today!',
    url: 'https://www.summerlinwestrealestate.com',
    siteName: 'Summerlin West Real Estate',
    images: [
      {
        url: '/images/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Summerlin West Real Estate Hero',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Summerlin West Homes for Sale | Dr. Jan Duffy REALTOR® | The Vistas',
    description:
      'Find your dream home in Summerlin West with Dr. Jan Duffy, REALTOR®. Expert guidance, luxury properties, and insider market knowledge. Schedule your consultation today!',
    images: [
      {
        url: '/images/og-image.svg',
        alt: 'Summerlin West Real Estate Hero',
      },
    ],
    site: '@summerlinwestre',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code-here',
  },
};

// Enhanced Schema Markup
const schemaMarkup = generateComprehensiveSchema();

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <style>{`
          realscout-office-listings {
            --rs-listing-divider-color: rgb(101, 141, 172);
            width: 100%;
          }
        `}</style>
      </Head>
      <body
        className={`${inter.variable} ${outfit.variable} ${geistSans.variable} ${geistMono.variable} ${bricolageGrotesque.variable} antialiased`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe 
            src="https://www.googletagmanager.com/ns.html?id=GT-T5656DJ6"
            height="0" 
            width="0" 
            style={{display: 'none', visibility: 'hidden'}}
          ></iframe>
        </noscript>
        
        <LeadTrackingProvider>
          <StickyPhoneMenu />
        <Script
          src={process.env.REALSCOUT_SCRIPT_URL || "https://em.realscout.com/widgets/realscout-web-components.umd.js"}
          type="module"
          strategy="lazyOnload"
          id="realscout-web-components"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
        />

        {/* Facebook Pixel */}
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '1415682742567480');
            fbq('track', 'PageView');
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=1415682742567480&ev=PageView&noscript=1"
            alt="Facebook Pixel"
          />
        </noscript>

        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GT-T5656DJ6');
          `}
        </Script>

        {/* Google Analytics - Enhanced Configuration */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-X9SYVKNK8H"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            
            // Enhanced dataLayer for GTM and GA4 integration
            window.dataLayer.push({
              'gtm.start': new Date().getTime(),
              'event': 'gtm.js',
              'business_type': 'real_estate',
              'agent_name': 'Dr. Jan Duffy',
              'market_area': 'Summerlin West',
              'service_area': 'Las Vegas',
              'website_type': 'real_estate_agent',
              'page_category': 'real_estate',
              'user_type': 'prospect'
            });
            
            // Enhanced GA4 configuration
            gtag('config', 'G-X9SYVKNK8H', {
              page_title: document.title,
              page_location: window.location.href,
              page_path: window.location.pathname,
              send_page_view: true,
              custom_map: {
                'custom_parameter_1': 'lead_source',
                'custom_parameter_2': 'property_type',
                'custom_parameter_3': 'community'
              },
              // Enhanced measurement settings
              enhanced_measurements: {
                scrolls: true,
                outbound_clicks: true,
                site_search: true,
                video_engagement: true,
                file_downloads: true,
                page_changes: true
              },
              // Consent mode configuration
              analytics_storage: 'granted',
              ad_storage: 'granted',
              ad_user_data: 'granted',
              ad_personalization: 'granted',
              functionality_storage: 'granted',
              personalization_storage: 'granted',
              security_storage: 'granted',
              // Cross-domain tracking
              linker: {
                domains: ['summerlinwestrealestate.com', 'www.summerlinwestrealestate.com']
              },
              // Real estate specific configuration
              custom_parameters: {
                business_type: 'real_estate',
                agent_name: 'Dr. Jan Duffy',
                market_area: 'Summerlin West',
                service_area: 'Las Vegas'
              }
            });
            
            // Enhanced measurement events for real estate
            gtag('event', 'page_view', {
              page_title: document.title,
              page_location: window.location.href,
              page_path: window.location.pathname,
              content_group1: 'Real Estate',
              content_group2: getContentGroup2(),
              content_group3: getContentGroup3(),
              custom_parameter_1: getLeadSource(),
              custom_parameter_2: getPropertyType(),
              custom_parameter_3: getCommunity()
            });
            
            // Helper functions for enhanced tracking
            function getContentGroup2() {
              const path = window.location.pathname;
              if (path.includes('/properties') || path.includes('/current-listing')) return 'Property Listings';
              if (path.includes('/service-area')) return 'Community Pages';
              if (path.includes('/about')) return 'About Page';
              if (path.includes('/contact')) return 'Contact Page';
              if (path.includes('/blog')) return 'Blog';
              if (path.includes('/market-reports')) return 'Market Reports';
              return 'General';
            }
            
            function getContentGroup3() {
              const path = window.location.pathname;
              if (path.includes('/the-vistas')) return 'The Vistas';
              if (path.includes('/stonebridge')) return 'Stonebridge';
              if (path.includes('/redpoint')) return 'Redpoint';
              if (path.includes('/summerlin')) return 'Summerlin West';
              return 'Las Vegas';
            }
            
            function getLeadSource() {
              const urlParams = new URLSearchParams(window.location.search);
              return urlParams.get('utm_source') || document.referrer || 'direct';
            }
            
            function getPropertyType() {
              const path = window.location.pathname;
              if (path.includes('/luxury')) return 'luxury';
              if (path.includes('/condo')) return 'condo';
              if (path.includes('/townhome')) return 'townhome';
              return 'single_family';
            }
            
            function getCommunity() {
              const path = window.location.pathname;
              if (path.includes('/the-vistas')) return 'The Vistas';
              if (path.includes('/stonebridge')) return 'Stonebridge';
              if (path.includes('/redpoint')) return 'Redpoint';
              return 'Summerlin West';
            }
            
            // Track real estate specific interactions
            gtag('event', 'real_estate_engagement', {
              event_category: 'Real Estate',
              event_label: 'Page View',
              value: 1,
              custom_parameter_1: getLeadSource(),
              custom_parameter_2: getPropertyType(),
              custom_parameter_3: getCommunity()
            });
          `}
        </Script>

        {/* Core Web Vitals Monitoring */}
        <Script id="web-vitals" strategy="afterInteractive">
          {`
            function sendToAnalytics(metric) {
              if (typeof gtag !== 'undefined') {
                gtag('event', metric.name, {
                  event_category: 'Web Vitals',
                  event_label: metric.id,
                  value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
                  non_interaction: true,
                });
              }
            }
            
            // Load web-vitals library and send metrics
            import('https://unpkg.com/web-vitals@3/dist/web-vitals.js').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
              getCLS(sendToAnalytics);
              getFID(sendToAnalytics);
              getFCP(sendToAnalytics);
              getLCP(sendToAnalytics);
              getTTFB(sendToAnalytics);
            });
          `}
        </Script>
        <Header />
        <main className="pt-16">{children}</main>
        <div className={styles.sectionCard}>
          <h2 className={styles.centerTitle}>Featured Summerlin Listings</h2>
          <RealScoutOfficeListingsWrapper 
            agentEncodedId="QWdlbnQtMjI1MDUw" 
            sortOrder="PRICE_LOW" 
            listingStatus="For Sale" 
            propertyTypes=",SFR,MF,TC,LAL,MOBILE,OTHER" 
            priceMin="600000" 
            priceMax="2000000"
            maxListings={12}
            className="mt-6"
          />
        </div>
          <Analytics />
          <SpeedInsights />
        </LeadTrackingProvider>
      </body>
    </html>
  );
}
