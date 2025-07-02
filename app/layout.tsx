import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Script from "next/script";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Google Analytics (replace G-XXXXXXXXXX with your GA4 ID) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
      </head>
      <body className={inter.variable} style={{background: '#F7F9FC', color: '#0A2540', fontFamily: 'Inter, Arial, sans-serif'}}>
        {/* Navigation Bar */}
        <nav className="nav">
          <div className="container" style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
            <Link href="/" style={{fontWeight: 700, fontSize: '1.3rem', color: '#3A8DDE', textDecoration: 'none'}}>Summerlin West Real Estate</Link>
            <div style={{display: 'flex', gap: '1.5rem', alignItems: 'center'}}>
              <Link href="/current-listing">Vistas Listing</Link>
              <Link href="/communities">Communities</Link>
              <Link href="/market">Market</Link>
              <Link href="/compare">Compare</Link>
              <Link href="/the-vistas">The Vistas</Link>
              <Link href="/sold">Sold</Link>
              <Link href="/about">About</Link>
            </div>
          </div>
        </nav>
        {children}
        {/* Footer */}
        <footer style={{
          background: '#fff',
          color: '#0A2540',
          textAlign: 'center',
          padding: '2rem 1rem 1rem 1rem',
          marginTop: '2rem',
          boxShadow: '0 -2px 8px rgba(0,0,0,0.04)',
        }}>
          <div style={{marginBottom: '1rem'}}>
            <strong>Summerlin West Real Estate</strong> &mdash; Your Market Authority
          </div>
          <div style={{marginBottom: '0.5rem'}}>
            <a href="mailto:info@summerlinwestrealestate.com" style={{color: '#3A8DDE', textDecoration: 'none'}}>info@summerlinwestrealestate.com</a> | (702) 555-1234
          </div>
          <div style={{fontSize: '0.95rem', color: '#888'}}>
            &copy; {new Date().getFullYear()} Summerlin West Real Estate. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
