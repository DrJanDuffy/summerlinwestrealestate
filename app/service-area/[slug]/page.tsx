import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ServiceAreaStructuredData from '../../../components/ui/ServiceAreaStructuredData';
import type { CommunityData } from '../../../lib/structured-data';
import subdivisions from '../subdivisions.json';
import ClientSubdivisionPage from './ClientSubdivisionPage';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const subdivision = subdivisions.find((s) => s.slug === slug);

  if (!subdivision) {
    return {
      title: 'Subdivision Not Found | Summerlin West Real Estate',
      description: 'The requested subdivision could not be found.',
    };
  }

  const title = `${subdivision.name} Homes for Sale | The Vistas Summerlin West`;
  const description = `Explore ${subdivision.name} in The Vistas, Summerlin West. ${subdivision.type} homes ${subdivision.builder && subdivision.builder !== '-' ? `by ${subdivision.builder}` : ''} with ${subdivision.homeSizes && subdivision.homeSizes !== '-' ? subdivision.homeSizes : 'luxury features'}. Contact Dr. Jan Duffy for exclusive access.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://www.summerlinwestrealestate.com/service-area/${slug}`,
      siteName: 'Summerlin West Real Estate',
      images: [
        {
          url: '/images/og-image.svg',
          width: 1200,
          height: 630,
          alt: `${subdivision.name} - The Vistas Summerlin West`,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/images/og-image.svg'],
    },
    alternates: {
      canonical: `/service-area/${slug}`,
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
}

export default async function SubdivisionPage({ params }: PageProps) {
  const { slug } = await params;
  const subdivision = subdivisions.find((s) => s.slug === slug);
  if (!subdivision) {
    return notFound();
  }

  // Generate community data for structured data
  const communityData: CommunityData = {
    name: subdivision.name,
    description: `Explore ${subdivision.name} in The Vistas, Summerlin West. ${subdivision.type} homes ${subdivision.builder && subdivision.builder !== '-' ? `by ${subdivision.builder}` : ''} with ${subdivision.homeSizes && subdivision.homeSizes !== '-' ? subdivision.homeSizes : 'luxury features'}.`,
    builder: subdivision.builder && subdivision.builder !== '-' ? subdivision.builder : undefined,
    yearEstablished: subdivision.years && subdivision.years !== '-' ? subdivision.years : undefined,
    homeSizes: subdivision.homeSizes || 'Various sizes',
    features: subdivision.features || [],
    coordinates: {
      latitude: 36.1865,
      longitude: -115.3432,
    },
  };

  return (
    <>
      <ServiceAreaStructuredData communityData={communityData} />
      <ClientSubdivisionPage subdivision={subdivision} />
    </>
  );
}
