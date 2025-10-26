import type { Metadata } from 'next';
import VistasPage from '@/components/v0/VistasPage';

export const metadata: Metadata = {
  title: 'The Vistas | Luxury Homes in Summerlin West | Dr. Jan Duffy',
  description:
    'Discover The Vistas luxury homes for sale in Summerlin West with Red Rock Canyon views, resort amenities, and top schools. Expert guidance from Dr. Jan Duffy.',
  keywords: [
    'The Vistas',
    'Summerlin West homes',
    'luxury real estate',
    'Red Rock Canyon views',
    'Dr. Jan Duffy',
    'The Vistas homes for sale',
    'Summerlin West community',
  ],
  alternates: {
    canonical: '/the-vistas',
  },
  openGraph: {
    title: 'The Vistas | Luxury Homes in Summerlin West | Dr. Jan Duffy',
    description: 'Discover The Vistas luxury homes for sale in Summerlin West.',
    url: 'https://www.summerlinwestrealestate.com/the-vistas',
    siteName: 'Summerlin West Real Estate',
    images: [
      {
        url: '/images/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'The Vistas - Summerlin West Luxury Homes',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Vistas | Luxury Homes in Summerlin West | Dr. Jan Duffy',
    description: 'Discover The Vistas luxury homes for sale in Summerlin West.',
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

export default function TheVistas() {
  return <VistasPage />;
}