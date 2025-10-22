import type { Metadata } from 'next';
import ServiceAreaClient from './ServiceAreaClient';

export const metadata: Metadata = {
  title: 'The Vistas Service Area | Summerlin West Luxury Communities | Dr. Jan Duffy Real Estate',
  description:
    'Explore all 26 subdivisions in The Vistas village of Summerlin West, Las Vegas. Gated luxury communities, family neighborhoods, and premium homes by top builders. Red Rock Canyon views and world-class amenities.',
  keywords: [
    'The Vistas',
    'Summerlin West',
    'Las Vegas luxury homes',
    'gated communities',
    'Red Rock Canyon',
    'Paradiso',
    'Palmilla',
    'Estancia',
    'Talaverde',
    'Casa Rosa',
    'San Marcos',
    'Sonesta',
    'Barrington',
    'Monterossa',
    'Kingwood',
    'Solano',
    'Encanto',
    'Miraleste',
    'Canterra',
    'Portofino',
    'Hillstone',
    'Capri',
    'Dr. Jan Duffy',
  ],
  openGraph: {
    title: 'The Vistas Service Area | Summerlin West Luxury Communities',
    description:
      'Discover all 26 exclusive subdivisions in The Vistas village of Summerlin West, Las Vegas. From gated luxury communities to family-friendly neighborhoods.',
    url: 'https://www.summerlinwestrealestate.com/service-area',
    siteName: 'Summerlin West Real Estate',
    images: [
      {
        url: '/images/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'The Vistas Service Area - Summerlin West Luxury Communities',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Vistas Service Area | Summerlin West Luxury Communities',
    description: 'Explore all 26 subdivisions in The Vistas village of Summerlin West, Las Vegas.',
    images: ['/images/og-image.svg'],
  },
  alternates: {
    canonical: '/service-area',
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

export default function ServiceAreaPage() {
  return <ServiceAreaClient />;
}
