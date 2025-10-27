import type { Metadata } from 'next';
import CommunitiesOverviewPage from '@/components/v0/CommunitiesOverviewPage';

export const metadata: Metadata = {
  title: 'Summerlin West Communities | Luxury Neighborhoods & The Vistas',
  description:
    'Explore luxury communities in Summerlin West including The Vistas, San Marcos, Casa Rosa, Solano, Encanto, Paradiso, and Palmilla. Amenities, schools, pricing.',
  keywords: [
    'Summerlin West communities',
    'The Vistas',
    'San Marcos',
    'Casa Rosa',
    'Solano',
    'Encanto',
    'Paradiso',
    'Palmilla',
    'luxury neighborhoods',
    'Summerlin West homes',
  ],
  alternates: {
    canonical: 'https://www.summerlinwestrealestate.com/communities',
  },
  openGraph: {
    title: 'Summerlin West Communities | Luxury Neighborhoods',
    description: 'Explore luxury communities in Summerlin West including The Vistas and more.',
    url: 'https://www.summerlinwestrealestate.com/communities',
    siteName: 'Summerlin West Real Estate',
    images: [
      {
        url: '/images/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Summerlin West Communities',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Summerlin West Communities | Luxury Neighborhoods',
    description: 'Explore luxury communities in Summerlin West.',
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

export default function Communities() {
  return <CommunitiesOverviewPage />;
}
