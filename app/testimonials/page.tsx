import type { Metadata } from 'next';
import TestimonialsPage from '@/components/v0/TestimonialsPage';

export const metadata: Metadata = {
  title: 'Client Testimonials & Reviews | Dr. Jan Duffy | Summerlin West',
  description:
    'Read testimonials from satisfied clients of Dr. Jan Duffy, luxury real estate expert in Summerlin West with $6+ billion in sales.',
  keywords: [
    'Dr. Jan Duffy testimonials',
    'luxury real estate reviews',
    'Summerlin West client feedback',
    'Las Vegas realtor reviews',
    'The Vistas testimonials',
    'real estate agent reviews',
    'client success stories',
  ],
  alternates: {
    canonical: '/testimonials',
  },
  openGraph: {
    title: 'Client Testimonials & Reviews | Dr. Jan Duffy | Summerlin West',
    description: 'Read testimonials from satisfied clients of Dr. Jan Duffy.',
    url: 'https://www.summerlinwestrealestate.com/testimonials',
    siteName: 'Summerlin West Real Estate',
    images: [
      {
        url: '/images/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Dr. Jan Duffy Client Testimonials',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Client Testimonials & Reviews | Dr. Jan Duffy | Summerlin West',
    description: 'Read testimonials from satisfied clients of Dr. Jan Duffy.',
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

export default function Testimonials() {
  return <TestimonialsPage />;
}