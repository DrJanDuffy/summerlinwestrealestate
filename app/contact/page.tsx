import type { Metadata } from 'next';
import ContactPage from '@/components/v0/ContactPage';

export const metadata: Metadata = {
  title: 'Contact Dr. Jan Duffy | Summerlin West Real Estate | (702) 550-0112',
  description:
    'Contact Dr. Jan Duffy for expert Summerlin West real estate services. Licensed REALTOR® with $6+ billion in sales. Call (702) 550-0112 or schedule consultation.',
  keywords: [
    'contact Summerlin West real estate agent',
    'Dr. Jan Duffy contact',
    'Summerlin West real estate consultation',
    'Las Vegas luxury real estate agent',
    'real estate agent near me',
    'The Vistas real estate expert',
    'buy sell Summerlin West homes',
  ],
  alternates: {
    canonical: 'https://www.summerlinwestrealestate.com/contact',
  },
  openGraph: {
    title: 'Contact Dr. Jan Duffy | Summerlin West Real Estate Agent',
    description:
      'Contact Dr. Jan Duffy for expert Summerlin West real estate services. Licensed REALTOR® with $6+ billion in sales.',
    url: 'https://www.summerlinwestrealestate.com/contact',
    siteName: 'Summerlin West Real Estate',
    images: [
      {
        url: '/images/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Contact Dr. Jan Duffy - Summerlin West Real Estate',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact Dr. Jan Duffy | Summerlin West Real Estate Agent',
    description: 'Contact Dr. Jan Duffy for expert Summerlin West real estate services.',
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

export default function Contact() {
  return <ContactPage />;
}
