import type { Metadata } from 'next';
import SEOResumePage from '@/components/v0/SEOResumePage';

export const metadata: Metadata = {
  title: 'Dr. Jan Duffy - Professional Resume | Summerlin West Real Estate Agent',
  description:
    'Dr. Jan Duffy REALTOR® - Licensed Summerlin West real estate agent with $6+ billion in sales. Doctoral degree, luxury home specialist, top 1% agent.',
  keywords: [
    'Dr. Jan Duffy resume',
    'Summerlin West real estate agent',
    'licensed real estate agent',
    'luxury homes Summerlin',
    'REALTOR® Dr. Jan Duffy',
    'Las Vegas luxury real estate',
    'top real estate agent',
    'The Vistas specialist',
  ],
  alternates: {
    canonical: 'https://www.summerlinwestrealestate.com/resume',
  },
  openGraph: {
    title: 'Dr. Jan Duffy - Professional Resume | Summerlin West Real Estate Agent',
    description:
      'Dr. Jan Duffy REALTOR® with $6+ billion in sales specializing in Summerlin West luxury homes.',
    url: 'https://www.summerlinwestrealestate.com/resume',
    siteName: 'Summerlin West Real Estate',
    images: [
      {
        url: '/images/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Dr. Jan Duffy - Luxury Real Estate Expert',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr. Jan Duffy - Professional Resume | Summerlin West Real Estate Agent',
    description:
      'Dr. Jan Duffy REALTOR® with $6+ billion in sales specializing in Summerlin West luxury homes.',
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

export default function Resume() {
  return <SEOResumePage />;
}
