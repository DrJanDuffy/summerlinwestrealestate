import type { Metadata } from 'next';
import MapsClient from './MapsClient';

export const metadata: Metadata = {
  title: 'Interactive Maps & Property Search | Summerlin West Real Estate',
  description:
    'Explore Summerlin West properties with our advanced mapping tools. Find homes for sale, neighborhoods, schools, and market insights with interactive maps.',
  keywords: [
    'Summerlin West interactive maps',
    'property search maps',
    'Las Vegas real estate maps',
    'The Vistas map',
    'Stonebridge neighborhood map',
    'Summerlin West neighborhoods',
    'property search tool',
    'real estate mapping',
    'Dr. Jan Duffy property search',
    'Las Vegas luxury home maps',
  ],
  alternates: {
    canonical: 'https://www.summerlinwestrealestate.com/maps',
  },
  openGraph: {
    title: 'Interactive Maps & Property Search | Summerlin West Real Estate',
    description:
      'Explore Summerlin West properties with our advanced mapping tools. Find homes for sale, neighborhoods, schools, and market insights.',
    url: 'https://www.summerlinwestrealestate.com/maps',
    siteName: 'Summerlin West Real Estate',
    images: [
      {
        url: '/images/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Interactive Maps & Property Search - Summerlin West',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Interactive Maps & Property Search | Summerlin West Real Estate',
    description:
      'Explore Summerlin West properties with our advanced mapping tools. Find homes for sale, neighborhoods, schools, and market insights.',
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

export default function MapsPage() {
  return <MapsClient />;
}
