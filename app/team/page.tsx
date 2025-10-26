import type { Metadata } from 'next';
import SEOTeamPage from '@/components/v0/SEOTeamPage';

export const metadata: Metadata = {
  title: 'Meet Our Summerlin West Real Estate Team | Expert Luxury Agents',
  description:
    'Meet our expert Summerlin West real estate team led by Dr. Jan Duffy. Top 1% luxury agents with $6+ billion in sales serving The Vistas and all of Summerlin West.',
  keywords: [
    'Summerlin West real estate team',
    'luxury real estate agents',
    'Dr. Jan Duffy team',
    'The Vistas agents',
    'Summerlin West professionals',
    'Las Vegas real estate team',
    'luxury home experts',
  ],
  alternates: {
    canonical: '/team',
  },
  openGraph: {
    title: 'Meet Our Summerlin West Real Estate Team | Expert Luxury Agents',
    description: 'Meet our expert Summerlin West real estate team led by Dr. Jan Duffy.',
    url: 'https://www.summerlinwestrealestate.com/team',
    siteName: 'Summerlin West Real Estate',
    images: [
      {
        url: '/images/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Summerlin West Real Estate Team',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Meet Our Summerlin West Real Estate Team | Expert Luxury Agents',
    description: 'Meet our expert Summerlin West real estate team led by Dr. Jan Duffy.',
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

export default function Team() {
  return <SEOTeamPage />;
}