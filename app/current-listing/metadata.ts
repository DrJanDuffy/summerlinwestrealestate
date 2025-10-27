import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Stunning Vistas Home for Sale | 4BR/3BA Luxury Property | Dr. Jan Duffy',
  description:
    'Tour this gorgeous 4BR/3BA home in The Vistas! Red Rock Canyon views, 2,800 sq ft, luxury finishes. Dr. Jan Duffy, REALTOR® - $6B+ in sales. Call (702) 550-0112 for private showing!',
  keywords:
    'The Vistas, Summerlin West, luxury home, 4 bedroom, Red Rock Canyon views, Dr. Jan Duffy',
  alternates: {
    canonical: 'https://www.summerlinwestrealestate.com/current-listing',
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
  openGraph: {
    title: 'Stunning Vistas Home for Sale | 4BR/3BA Luxury Property | Dr. Jan Duffy',
    description:
      'Tour this gorgeous 4BR/3BA home in The Vistas! Red Rock Canyon views, 2,800 sq ft, luxury finishes. Dr. Jan Duffy, REALTOR® - $6B+ in sales. Call (702) 550-0112 for private showing!',
    url: 'https://www.summerlinwestrealestate.com/current-listing',
    siteName: 'Summerlin West Real Estate',
    type: 'website',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80',
        width: 1200,
        height: 630,
        alt: 'Luxury home in The Vistas, Summerlin West',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stunning Vistas Home for Sale | 4BR/3BA Luxury Property',
    description:
      'Tour this gorgeous 4BR/3BA home in The Vistas! Red Rock Canyon views, 2,800 sq ft, luxury finishes.',
    images: [
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80',
    ],
  },
};
