import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Script from "next/script";
import Footer from '../components/layout/Footer';
import { usePathname } from 'next/navigation';
import { useMemo } from 'react';

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Summerlin West Real Estate | The Vistas & Communities",
  description: "Market authority for Summerlin West and The Vistas community. Get listings, market reports, and expert guidance.",
  openGraph: {
    title: "Summerlin West Real Estate | The Vistas & Communities",
    description: "Market authority for Summerlin West and The Vistas community. Get listings, market reports, and expert guidance.",
    url: "https://summerlinwestrealestate.com",
    siteName: "Summerlin West Real Estate",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Summerlin West Real Estate Hero",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Summerlin West Real Estate | The Vistas & Communities",
    description: "Market authority for Summerlin West and The Vistas community. Get listings, market reports, and expert guidance.",
    images: ["/og-image.jpg"],
  },
};

const breadcrumbMap = [
  { path: "/", name: "Home" },
  { path: "/current-listing", name: "Vistas Listing" },
  { path: "/communities", name: "Communities" },
  { path: "/market", name: "Market" },
  { path: "/market-reports", name: "Market Reports" },
  { path: "/compare", name: "Compare" },
  { path: "/the-vistas", name: "The Vistas" },
  { path: "/sold", name: "Sold" },
  { path: "/about", name: "About" },
  { path: "/contact", name: "Contact" },
  { path: "/new-homes-summerlin", name: "New Homes" },
  { path: "/downtown-summerlin", name: "Downtown Summerlin" },
];

function getBreadcrumbList(pathname: string) {
  const urlBase = "https://summerlinwestrealestate.com";
  const crumbs = [];
  let pathAccumulator = "";
  for (const { path, name } of breadcrumbMap) {
    if (pathname === path || (path !== "/" && pathname.startsWith(path))) {
      pathAccumulator = path;
      crumbs.push({ name, url: urlBase + path });
      if (pathname === path) break;
    }
    if (path === "/") {
      crumbs.push({ name, url: urlBase + path });
    }
  }
  // Remove duplicates
  return crumbs.filter((v, i, arr) => arr.findIndex(x => x.url === v.url) === i);
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname() || '/';
  const breadcrumbs = useMemo(() => getBreadcrumbList(pathname), [pathname]);
  const breadcrumbJsonLd = useMemo(() => {
    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbs.map((crumb, idx) => ({
        "@type": "ListItem",
        "position": idx + 1,
        "name": crumb.name,
        "item": crumb.url
      }))
    };
  }, [breadcrumbs]);

  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Script
          src="https://em.realscout.com/widgets/realscout-web-components.umd.js"
          type="module"
          strategy="afterInteractive"
        />
        {/* Google Analytics 4 (GA4) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-HYMN4311JH"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-HYMN4311JH');
          `}
        </Script>
        {/* Google Tag Manager (GTM) */}
        <Script id="gtm-head" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-P5FX6JGL');
          `}
        </Script>
        {/* JSON-LD Structured Data */}
        <script type="application/ld+json" suppressHydrationWarning>
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "RealEstateAgent",
            "name": "Summerlin West Real Estate",
            "image": "https://summerlinwestrealestate.com/og-image.jpg",
            "url": "https://summerlinwestrealestate.com",
            "telephone": "+1-702-555-1234",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "123 Summerlin Pkwy",
              "addressLocality": "Las Vegas",
              "addressRegion": "NV",
              "postalCode": "89138",
              "addressCountry": "US"
            },
            "priceRange": "$$$",
            "areaServed": ["Summerlin", "Las Vegas", "Nevada"],
            "openingHours": "Mo,Tu,We,Th,Fr,Sa,Su 08:00-20:00",
            "sameAs": [
              "https://www.facebook.com/summerlinwestrealestate",
              "https://www.instagram.com/summerlinwestrealestate"
            ]
          })}
        </script>
        <script type="application/ld+json" suppressHydrationWarning>
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Summerlin West Real Estate",
            "image": "https://summerlinwestrealestate.com/og-image.jpg",
            "@id": "https://summerlinwestrealestate.com#localbusiness",
            "url": "https://summerlinwestrealestate.com",
            "telephone": "+1-702-555-1234",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "123 Summerlin Pkwy",
              "addressLocality": "Las Vegas",
              "addressRegion": "NV",
              "postalCode": "89138",
              "addressCountry": "US"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 36.1699,
              "longitude": -115.3331
            },
            "sameAs": [
              "https://www.facebook.com/summerlinwestrealestate",
              "https://www.instagram.com/summerlinwestrealestate"
            ]
          })}
        </script>
        <script type="application/ld+json" suppressHydrationWarning>
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Summerlin West Real Estate",
            "url": "https://summerlinwestrealestate.com",
            "logo": "https://summerlinwestrealestate.com/og-image.jpg",
            "sameAs": [
              "https://www.facebook.com/summerlinwestrealestate",
              "https://www.instagram.com/summerlinwestrealestate"
            ]
          })}
        </script>
        <script type="application/ld+json" suppressHydrationWarning>
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Summerlin West Real Estate",
            "url": "https://summerlinwestrealestate.com",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "https://summerlinwestrealestate.com/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })}
        </script>
        <script type="application/ld+json" suppressHydrationWarning>
          {JSON.stringify(breadcrumbJsonLd)}
        </script>
        {/* RealScout Office Listings Widget Styles */}
        <style jsx global>{`
          realscout-office-listings {
            --rs-listing-divider-color: rgb(101, 141, 172);
            width: 100%;
          }
        `}</style>
      </head>
      <body className={inter.variable} style={{background: '#F7F9FC', color: '#0A2540', fontFamily: 'Inter, Arial, sans-serif'}}>
        {/* Google Tag Manager (noscript fallback) */}
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-P5FX6JGL" height="0" width="0" style={{display:'none',visibility:'hidden'}}></iframe>
        </noscript>
        {/* Cookie Consent Banner Placeholder - implement with your preferred library for privacy compliance */}
        <div id="cookie-consent-banner" style={{position:'fixed',bottom:0,left:0,right:0,zIndex:2000,background:'#fff',boxShadow:'0 -2px 8px rgba(0,0,0,0.08)',padding:'1rem',display:'none'}}>
          {/* Cookie consent UI goes here. Use a library like Cookiebot, Osano, or your own implementation. */}
        </div>
        {/* Navigation Bar */}
        <nav
          style={{
            position: 'sticky',
            top: 0,
            zIndex: 1100,
            background: '#fff',
            boxShadow: '0 2px 8px rgba(10,37,64,0.08)',
            padding: '1rem 0',
            marginBottom: 0,
            fontWeight: 700
          }}
        >
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', maxWidth: '1200px', margin: '0 auto'}}>
            <Link href="/" style={{fontWeight: 800, fontSize: '1.3rem', color: '#3A8DDE', textDecoration: 'none'}}>Summerlin West Real Estate</Link>
            <div style={{display: 'flex', gap: '1.5rem', alignItems: 'center'}}>
              <Link href="/current-listing">Vistas Listing</Link>
              <Link href="/communities">Communities</Link>
              <Link href="/market">Market</Link>
              <Link href="/compare">Compare</Link>
              <Link href="/the-vistas">The Vistas</Link>
              <Link href="/sold">Sold</Link>
              <Link href="/about">About</Link>
              <a href="#search" style={{color: '#16B286', fontWeight: 700}}>Search Homes</a>
            </div>
          </div>
        </nav>
        {children}
        {/* RealScout Office Listings Widget - appears on every page */}
        <section style={{ margin: "3rem 0" }}>
          <h2 style={{textAlign: "center", color: "#0A2540", fontWeight: 700}}>Current Office Listings</h2>
          <div
            dangerouslySetInnerHTML={{
              __html: `<realscout-office-listings
                agent-encoded-id="QWdlbnQtMjI1MDUw"
                sort-order="STATUS_AND_SIGNIFICANT_CHANGE"
                listing-status="For Sale"
                property-types="SFR,MF,TC"
                price-min="500000"
              ></realscout-office-listings>`
            }}
          />
        </section>
        <Footer />
      </body>
    </html>
  );
}
