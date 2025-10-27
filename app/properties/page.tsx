import type { Metadata } from 'next';
import PropertiesPage from '@/components/v0/PropertiesPage';

export const metadata: Metadata = {
  title: 'Summerlin West Homes for Sale | Luxury Real Estate Listings',
  description:
    'Browse luxury homes for sale in Summerlin West. Expert real estate agent Dr. Jan Duffy helps you find luxury properties in The Vistas, San Marcos, and all Summerlin West communities.',
  keywords: [
    'Summerlin West homes for sale',
    'luxury real estate listings',
    'The Vistas homes',
    'San Marcos properties',
    'luxury homes Las Vegas',
    'Summerlin West real estate',
    'luxury property search',
  ],
  alternates: {
    canonical: 'https://www.summerlinwestrealestate.com/properties',
  },
  openGraph: {
    title: 'Summerlin West Homes for Sale | Luxury Real Estate Listings',
    description:
      'Browse luxury homes for sale in Summerlin West with expert real estate agent Dr. Jan Duffy.',
    url: 'https://www.summerlinwestrealestate.com/properties',
    siteName: 'Summerlin West Real Estate',
    images: [
      {
        url: '/images/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Summerlin West Luxury Homes',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Summerlin West Homes for Sale | Luxury Real Estate Listings',
    description: 'Browse luxury homes for sale in Summerlin West.',
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

export default function Properties() {
  return <PropertiesPage />;
}
