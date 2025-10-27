import type { Metadata } from 'next';
import ServiceAreaPage from '@/components/v0/ServiceAreaPage';

export const metadata: Metadata = {
  title: 'Service Area | Las Vegas & Summerlin West Real Estate Coverage',
  description:
    'Dr. Jan Duffy serves Summerlin West, Summerlin East, North Las Vegas, Henderson, and all Las Vegas Valley communities with expert luxury real estate services.',
  keywords: [
    'Summerlin West service area',
    'Las Vegas real estate coverage',
    'service locations',
    'Summerlin East',
    'North Las Vegas',
    'Henderson real estate',
    'Las Vegas Valley service area',
  ],
  alternates: {
    canonical: '/service-area',
  },
  openGraph: {
    title: 'Service Area | Las Vegas & Summerlin West Real Estate Coverage',
    description:
      'Dr. Jan Duffy serves all Las Vegas Valley communities with expert real estate services.',
    url: 'https://www.summerlinwestrealestate.com/service-area',
    siteName: 'Summerlin West Real Estate',
    images: [
      {
        url: '/images/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Service Area - Las Vegas Real Estate',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Service Area | Las Vegas & Summerlin West Real Estate Coverage',
    description: 'Dr. Jan Duffy serves all Las Vegas Valley communities.',
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

export default function ServiceArea() {
  return <ServiceAreaPage />;
}
