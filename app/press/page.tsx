import type { Metadata } from 'next';
import PressPage from '@/components/v0/PressPage';

export const metadata: Metadata = {
  title: 'Press & News | Summerlin West Real Estate Market Coverage',
  description:
    'Latest news, press coverage, and media insights about Summerlin West real estate market from Dr. Jan Duffy, luxury real estate expert.',
  keywords: [
    'Summerlin West news',
    'real estate press',
    'Dr. Jan Duffy media',
    'Las Vegas luxury real estate news',
    'The Vistas press coverage',
    'Summerlin West market news',
    'real estate market coverage',
  ],
  alternates: {
    canonical: '/press',
  },
  openGraph: {
    title: 'Press & News | Summerlin West Real Estate Market Coverage',
    description: 'Latest news, press coverage, and media insights about Summerlin West real estate market.',
    url: 'https://www.summerlinwestrealestate.com/press',
    siteName: 'Summerlin West Real Estate',
    images: [
      {
        url: '/images/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Summerlin West Real Estate Press & News',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Press & News | Summerlin West Real Estate Market Coverage',
    description: 'Latest news, press coverage, and media insights about Summerlin West real estate market.',
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

export default function Press() {
  return <PressPage />;
}