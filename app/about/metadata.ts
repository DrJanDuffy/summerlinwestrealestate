import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Meet Dr. Jan Duffy | Top Summerlin REALTOR® with $6B+ Sales | Expert Guide',
  description:
    'Meet Dr. Jan Duffy, your trusted Summerlin West real estate expert! $6B+ in sales, 15+ years experience, insider market knowledge. Call (702) 550-0112 for personalized service!',
  keywords: [
    'Dr. Jan Duffy',
    'Summerlin West real estate agent',
    'Las Vegas luxury realtor',
    'The Vistas specialist',
    'Red Rock Canyon homes',
    'Berkshire Hathaway HomeServices',
    'luxury real estate expert',
    'Las Vegas REALTOR®',
    'Summerlin West homes for sale',
    'real estate team leader',
  ],
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'Meet Dr. Jan Duffy | Top Summerlin REALTOR® with $6B+ Sales | Expert Guide',
    description:
      'Meet Dr. Jan Duffy, your trusted Summerlin West real estate expert! $6B+ in sales, 15+ years experience, insider market knowledge. Call (702) 550-0112 for personalized service!',
    url: 'https://www.summerlinwestrealestate.com/about',
    siteName: 'Summerlin West Real Estate',
    images: [
      {
        url: '/images/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Dr. Jan Duffy - Top Summerlin West Real Estate Expert',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Meet Dr. Jan Duffy | Top Summerlin REALTOR® with $6B+ Sales',
    description:
      'Meet Dr. Jan Duffy, your trusted Summerlin West real estate expert! $6B+ in sales, 15+ years experience.',
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
