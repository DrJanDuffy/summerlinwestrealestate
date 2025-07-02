import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
      <body className={`${geistSans.variable} ${geistMono.variable}`}
        style={{background: '#F7F9FC', color: '#0A2540', fontFamily: 'Inter, Arial, sans-serif'}}>
        {/* Navigation Bar */}
        <nav style={{
          background: '#fff',
          boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
          zIndex: 1000,
          position: 'sticky',
          top: 0,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0.75rem 1.5rem',
        }}>
          <Link href="/" style={{fontWeight: 700, fontSize: '1.2rem', color: '#3A8DDE', textDecoration: 'none'}}>
            Summerlin West Real Estate
          </Link>
          <div style={{display: 'flex', gap: '1.2rem', alignItems: 'center'}}>
            <Link href="/vistas-listing">Vistas Listing</Link>
            <Link href="/communities">Communities</Link>
            <Link href="/market">Market</Link>
            <Link href="/compare">Compare</Link>
            <Link href="/the-vistas">The Vistas</Link>
            <Link href="/sold">Sold</Link>
            <Link href="/about">About</Link>
          </div>
          <div style={{display: 'flex', gap: '0.7rem'}}>
            <a href="https://facebook.com" target="_blank" rel="noopener" aria-label="Facebook" style={{color: '#3A8DDE'}}>
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.326 24h11.495v-9.294H9.691v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener" aria-label="Instagram" style={{color: '#16B286'}}>
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.515 2.497 5.782 2.225 7.148 2.163 8.414 2.105 8.794 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.771.131 4.659.363 3.678 1.344 2.697 2.325 2.465 3.437 2.406 4.718 2.347 5.999 2.334 6.408 2.334 12c0 5.592.013 6.001.072 7.282.059 1.281.291 2.393 1.272 3.374.981.981 2.093 1.213 3.374 1.272C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.281-.059 2.393-.291 3.374-1.272.981-.981 1.213-2.093 1.272-3.374.059-1.281.072-1.69.072-7.282 0-5.592-.013-6.001-.072-7.282-.059-1.281-.291-2.393-1.272-3.374-.981-.981-2.093-1.213-3.374-1.272C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/></svg>
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener" aria-label="YouTube" style={{color: '#0A2540'}}>
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a2.994 2.994 0 0 0-2.112-2.112C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.386.574A2.994 2.994 0 0 0 .502 6.186C0 8.072 0 12 0 12s0 3.928.502 5.814a2.994 2.994 0 0 0 2.112 2.112C4.5 20.5 12 20.5 12 20.5s7.5 0 9.386-.574a2.994 2.994 0 0 0 2.112-2.112C24 15.928 24 12 24 12s0-3.928-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
            <a href="https://nextdoor.com" target="_blank" rel="noopener" aria-label="Nextdoor" style={{color: '#16B286'}}>
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M21.6 0H2.4C1.08 0 0 1.08 0 2.4v19.2C0 22.92 1.08 24 2.4 24h19.2c1.32 0 2.4-1.08 2.4-2.4V2.4C24 1.08 22.92 0 21.6 0zM12 22.08c-5.568 0-10.08-4.512-10.08-10.08S6.432 1.92 12 1.92s10.08 4.512 10.08 10.08-4.512 10.08-10.08 10.08z"/></svg>
            </a>
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
