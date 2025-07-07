import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Geist, Geist_Mono } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Summerlin West Real Estate | Luxury Homes & Communities",
    template: "%s | Summerlin West Real Estate"
  },
  description: "Discover luxury homes in Summerlin West, Las Vegas' most prestigious master-planned community. Expert real estate guidance, market insights, and premium properties.",
  keywords: ["Summerlin West", "Las Vegas real estate", "luxury homes", "master-planned community", "Red Rock Canyon", "The Vistas", "Stonebridge"],
  authors: [{ name: "Summerlin West Real Estate" }],
  creator: "Summerlin West Real Estate",
  publisher: "Summerlin West Real Estate",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://summerlinwestrealestate.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://summerlinwestrealestate.com',
    siteName: 'Summerlin West Real Estate',
    title: 'Summerlin West Real Estate | Luxury Homes & Communities',
    description: 'Discover luxury homes in Summerlin West, Las Vegas\' most prestigious master-planned community.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Summerlin West Real Estate',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Summerlin West Real Estate | Luxury Homes & Communities',
    description: 'Discover luxury homes in Summerlin West, Las Vegas\' most prestigious master-planned community.',
    images: ['/images/og-image.jpg'],
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
