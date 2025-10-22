import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Dr. Jan Duffy | Top Summerlin West Real Estate Expert | Call (702) 550-0112',
  description:
    'Contact Dr. Jan Duffy, top Summerlin West real estate expert with $6B+ in sales! Get personalized help with luxury homes, market insights, and expert guidance. Call (702) 550-0112 today!',
  keywords: [
    'contact Dr. Jan Duffy',
    'Summerlin West real estate expert',
    'Las Vegas luxury realtor contact',
    'The Vistas real estate consultation',
    'Red Rock Canyon homes expert',
    'Berkshire Hathaway HomeServices',
    'real estate consultation',
    'luxury home buying help',
    'Summerlin West market insights',
    'real estate team contact',
  ],
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Dr. Jan Duffy | Top Summerlin West Real Estate Expert | Call (702) 550-0112',
    description:
      'Contact Dr. Jan Duffy, top Summerlin West real estate expert with $6B+ in sales! Get personalized help with luxury homes, market insights, and expert guidance.',
    url: 'https://www.summerlinwestrealestate.com/contact',
    siteName: 'Summerlin West Real Estate',
    images: [
      {
        url: '/images/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Contact Dr. Jan Duffy - Summerlin West Real Estate Expert',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Dr. Jan Duffy | Top Summerlin West Real Estate Expert',
    description:
      'Contact Dr. Jan Duffy, top Summerlin West real estate expert with $6B+ in sales! Get personalized help with luxury homes.',
    images: ['/images/og-image.svg'],
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
};
