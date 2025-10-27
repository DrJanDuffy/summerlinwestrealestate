import type { Metadata } from 'next';
import PressPage from '@/components/v0/PressPage';

export const metadata: Metadata = {
  title: 'Press & News - Real Estate Market Insights by Dr. Jan Duffy | Summerlin West',
  description:
    'Expert real estate market analysis, press coverage, and industry insights from Dr. Jan Duffy. Stay informed on Summerlin West luxury properties, market trends, and The Vistas community updates.',
  keywords: [
    'Summerlin West real estate news',
    'Las Vegas luxury real estate press',
    'Dr. Jan Duffy media coverage',
    'Summerlin West market insights',
    'The Vistas community news',
    'Luxury real estate market analysis',
    'Las Vegas property trends',
    'Summerlin West press releases',
    'real estate expert commentary',
    'luxury home market updates',
    'Red Rock Canyon real estate',
    'Summerlin West investment news',
    'real estate media kit',
    'property market trends Las Vegas',
    'REALTOR® press coverage',
  ],
  authors: [{ name: 'Dr. Jan Duffy', url: 'https://www.summerlinwestrealestate.com' }],
  alternates: {
    canonical: 'https://www.summerlinwestrealestate.com/press',
  },
  openGraph: {
    title: 'Press & News - Market Insights by Dr. Jan Duffy | Summerlin West Real Estate',
    description:
      'Expert real estate market analysis, luxury property insights, and press coverage from Dr. Jan Duffy. Top 1% REALTOR® with $6+ billion in sales.',
    url: 'https://www.summerlinwestrealestate.com/press',
    siteName: 'Summerlin West Real Estate',
    images: [
      {
        url: '/images/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Dr. Jan Duffy - Summerlin West Real Estate Press & Market Insights',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Press & News - Market Insights by Dr. Jan Duffy',
    description:
      'Expert real estate market analysis and luxury property insights from Summerlin West\'s top REALTOR®',
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
  other: {
    'article:author': 'Dr. Jan Duffy',
    'article:published_time': '2024-01-01',
  },
};

export default function Press() {
  return <PressPage />;
}
