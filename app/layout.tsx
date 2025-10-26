import type { Metadata } from 'next';
import { Bricolage_Grotesque, Inter, Outfit } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Geist, Geist_Mono } from 'next/font/google';
import Script from 'next/script';
import GoogleOptimization, {
  GoogleTagManagerNoScript,
} from '../components/analytics/GoogleOptimization';
import Header from '../components/layout/Header';
import StickyPhoneMenu from '../components/layout/StickyPhoneMenu';
import LeadTrackingProvider from '../components/ui/LeadTrackingProvider';
import { generateComprehensiveSchema } from '../lib/structured-data';

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
      <head>
        {/* RealScout Widget Styles */}
        <style>{`
          realscout-office-listings {
            --rs-listing-divider-color: #0e64c8;
            width: 100%;
          }
          realscout-advanced-search {
            --rs-as-button-text-color: #ffffff;
            --rs-as-background-color: #000000;
            --rs-as-button-color: #d0021b;
            --rs-as-widget-width: 100% !important;
          }
        `}</style>
      </head>
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

          {/* RealScout Script */}
          <Script
            id="realscout-loader"
            src="https://em.realscout.com/widgets/realscout-web-components.umd.js"
            strategy="afterInteractive"
          />

          <Header />
          <main className="pt-16">{children}</main>
          <Analytics />
          <SpeedInsights />
        </LeadTrackingProvider>
      </body>
    </html>
  );
}
