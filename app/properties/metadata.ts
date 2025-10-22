import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Luxury Homes for Sale in Summerlin West | Dr. Jan Duffy REALTOR® | $6B+ Sales',
  description:
    'Browse exclusive luxury homes for sale in Summerlin West! Dr. Jan Duffy, REALTOR® with $6B+ sales. The Vistas, Red Rock Canyon views, resort amenities. Call (702) 550-0112!',
  keywords: [
    'luxury homes for sale Summerlin West',
    'Las Vegas luxury real estate',
    'The Vistas homes for sale',
    'Red Rock Canyon luxury homes',
    'Stonebridge luxury properties',
    'Summerlin West real estate listings',
    'Dr. Jan Duffy luxury homes',
    'Berkshire Hathaway HomeServices',
    'Las Vegas luxury communities',
    'Summerlin West property search',
  ],
  alternates: {
    canonical: '/properties',
  },
  openGraph: {
    title: 'Luxury Homes for Sale in Summerlin West | Dr. Jan Duffy REALTOR® | $6B+ Sales',
    description:
      'Browse exclusive luxury homes for sale in Summerlin West! Dr. Jan Duffy, REALTOR® with $6B+ sales. The Vistas, Red Rock Canyon views, resort amenities.',
    url: 'https://www.summerlinwestrealestate.com/properties',
    siteName: 'Summerlin West Real Estate',
    images: [
      {
        url: '/images/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Luxury Homes for Sale in Summerlin West - Dr. Jan Duffy Real Estate',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Luxury Homes for Sale in Summerlin West | Dr. Jan Duffy REALTOR®',
    description:
      'Browse exclusive luxury homes for sale in Summerlin West! Dr. Jan Duffy, REALTOR® with $6B+ sales.',
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
