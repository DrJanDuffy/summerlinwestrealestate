import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import Script from "next/script";
import Footer from '../components/layout/Footer';
import BreadcrumbsClient from '../components/layout/BreadcrumbsClient';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://summerlinwestrealestate.com"),
  title: "Summerlin West Real Estate | The Vistas & Communities",
  description: "Market authority for Summerlin West and The Vistas community. Get listings, market reports, and expert guidance.",
  keywords: ["Summerlin West", "Las Vegas real estate", "luxury homes", "master-planned community", "Red Rock Canyon", "The Vistas", "Stonebridge"],
  authors: [{ name: "Summerlin West Real Estate" }],
  creator: "Summerlin West Real Estate",
  publisher: "Summerlin West Real Estate",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: '/',
  },
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
    images: [
      {
        url: "/og-image.jpg",
        alt: "Summerlin West Real Estate Hero",
      },
    ],
    site: "@summerlinwestre",
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
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          src="https://em.realscout.com/widgets/realscout-web-components.umd.js"
          type="module"
          crossOrigin="anonymous"
          async
        ></script>
        <link rel="canonical" href="https://summerlinwestrealestate.com" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
