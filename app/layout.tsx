import type { Metadata } from 'next';
import { Bricolage_Grotesque, Inter, Outfit } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Geist, Geist_Mono } from 'next/font/google';
import Head from 'next/head';
import Script from 'next/script';
import GoogleOptimization, {
  GoogleTagManagerNoScript,
} from '../components/analytics/GoogleOptimization';
import Header from '../components/layout/Header';
import StickyPhoneMenu from '../components/layout/StickyPhoneMenu';
import LeadTrackingProvider from '../components/ui/LeadTrackingProvider';
import { generateComprehensiveSchema } from '../lib/structured-data';
import styles from './page.module.css';

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
    google:
      process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || 'google-site-verification-code-here',
  },
  manifest: '/manifest.json',
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
        <GoogleTagManagerNoScript gtmId="GT-T5656DJ6" />

        <LeadTrackingProvider>
          {/* Comprehensive Google Optimization */}
          <GoogleOptimization
            gaMeasurementId="G-X9SYVKNK8H"
            gtmId="GT-T5656DJ6"
            adsConversionId="AW-123456789"
            adsConversionLabel="abc123def456"
            gmbBusinessId="gmb-business-id"
            mapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
          />
          <StickyPhoneMenu />
          <Script
            src="https://em.realscout.com/widgets/realscout-web-components.umd.js"
            strategy="afterInteractive"
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
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              height="1"
              width="1"
              style={{ display: 'none' }}
              src="https://www.facebook.com/tr?id=1415682742567480&ev=PageView&noscript=1"
              alt="Facebook Pixel"
            />
          </noscript>

          <Header />
          <main className="pt-16">{children}</main>
          <div className={styles.sectionCard}>
            <h2 className={styles.centerTitle}>Featured Summerlin Listings</h2>
            
            {/* RealScout Widget */}
            <div id="realscout-container">
              <style dangerouslySetInnerHTML={{
                __html: `
                  realscout-office-listings {
                    --rs-listing-divider-color: #0e64c8;
                    width: 100%;
                    min-height: 300px;
                  }
                  .realscout-loading {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    min-height: 300px;
                    background: #f8f9fa;
                    border: 2px solid #e9ecef;
                    border-radius: 8px;
                  }
                  .realscout-error {
                    background: #fff3cd;
                    border: 1px solid #ffeaa7;
                    border-radius: 8px;
                    padding: 20px;
                    text-align: center;
                  }
                `
              }} />
              
              {/* Loading State */}
              <div className="realscout-loading" id="realscout-loading">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
                  <p className="text-gray-600">Loading property listings...</p>
                </div>
              </div>
              
              {/* RealScout Widget */}
              <div id="realscout-widget" style={{ display: 'none' }}>
                {/* @ts-ignore - RealScout web component */}
                <realscout-office-listings
                  agent-encoded-id="QWdlbnQtMjI1MDUw"
                  sort-order="NEWEST"
                  listing-status="For Sale"
                  property-types=",SFR"
                  price-min="500000"
                  price-max="600000"
                />
              </div>
              
              {/* Error State */}
              <div className="realscout-error" id="realscout-error" style={{ display: 'none' }}>
                <h3 className="text-lg font-semibold text-yellow-800 mb-2">Property Listings Temporarily Unavailable</h3>
                <p className="text-yellow-700 mb-4">We're experiencing technical difficulties with our property listings. Please contact us directly for current listings.</p>
                <a href="/contact" className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Contact Dr. Jan Duffy
                </a>
              </div>
            </div>
          </div>
          <Analytics />
          <SpeedInsights />
          
          <script dangerouslySetInnerHTML={{
            __html: `
              document.addEventListener('DOMContentLoaded', function() {
                const loadingEl = document.getElementById('realscout-loading');
                const widgetEl = document.getElementById('realscout-widget');
                const errorEl = document.getElementById('realscout-error');
                
                // Check if RealScout script loaded
                const script = document.querySelector('script[src*="realscout-web-components"]');
                if (!script) {
                  console.log('RealScout script not found');
                  showError();
                  return;
                }
                
                // Wait for RealScout to load
                let attempts = 0;
                const maxAttempts = 30; // 15 seconds
                
                const checkRealScout = setInterval(function() {
                  attempts++;
                  
                  console.log('Attempt ' + attempts + ': Checking RealScout...');
                  
                  // Check if custom element is available
                  if (customElements.get('realscout-office-listings')) {
                    console.log('RealScout custom element found');
                    showWidget();
                    clearInterval(checkRealScout);
                    return;
                  }
                  
                  // Check if widget has content
                  const widget = document.querySelector('realscout-office-listings');
                  if (widget && widget.children.length > 0) {
                    console.log('RealScout widget has content');
                    showWidget();
                    clearInterval(checkRealScout);
                    return;
                  }
                  
                  // Check if script loaded
                  const script = document.querySelector('script[src*="realscout-web-components"]');
                  if (script) {
                    console.log('Script element found:', script.src);
                  } else {
                    console.log('Script element not found');
                  }
                  
                  // Check window.RealScout
                  if (window.RealScout) {
                    console.log('window.RealScout found:', window.RealScout);
                  } else {
                    console.log('window.RealScout not found');
                  }
                  
                  // Timeout after max attempts
                  if (attempts >= maxAttempts) {
                    console.log('RealScout timeout - showing error');
                    showError();
                    clearInterval(checkRealScout);
                  }
                }, 500);
                
                function showWidget() {
                  loadingEl.style.display = 'none';
                  widgetEl.style.display = 'block';
                  errorEl.style.display = 'none';
                }
                
                function showError() {
                  loadingEl.style.display = 'none';
                  widgetEl.style.display = 'none';
                  errorEl.style.display = 'block';
                }
              });
            `
          }} />
        </LeadTrackingProvider>
      </body>
    </html>
  );
}
