import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import InternalLinking from '../../../components/ui/InternalLinking';

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Neighborhood data
const neighborhoods = [
  {
    slug: 'red-rock-canyon',
    name: 'Red Rock Canyon Area',
    description: 'Luxury homes with breathtaking Red Rock Canyon views and direct access to hiking trails',
    priceRange: '$800K - $3M+',
    minPrice: 800000,
    maxPrice: 3000000,
    features: ['Mountain Views', 'Hiking Trails', 'Luxury Homes', 'Privacy'],
    homeTypes: 'Custom Estates, Luxury Single Family',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80',
    schools: ['Top-Rated Elementary', 'Award-Winning High School'],
    amenities: ['Red Rock Canyon Access', 'Hiking Trails', 'Scenic Overlooks'],
    yearBuilt: '2015-Present',
    marketInsights: 'Premium location with limited inventory and high demand',
  },
  {
    slug: 'downtown-summerlin',
    name: 'Downtown Summerlin',
    description: 'Urban living with walkable access to premier shopping, dining, and entertainment',
    priceRange: '$500K - $1.5M',
    minPrice: 500000,
    maxPrice: 1500000,
    features: ['Walkable', 'Shopping', 'Entertainment', 'Transit Access'],
    homeTypes: 'Condos, Townhomes, Lofts',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80',
    schools: ['Urban Elementary', 'Arts-Focused Middle School'],
    amenities: ['Shopping Centers', 'Restaurants', 'Entertainment Venues'],
    yearBuilt: '2018-Present',
    marketInsights: 'Growing urban core with increasing property values',
  },
  {
    slug: 'summerlin-west-golf',
    name: 'Summerlin West Golf Communities',
    description: 'Golf course communities with resort-style amenities and championship courses',
    priceRange: '$700K - $2.2M',
    minPrice: 700000,
    maxPrice: 2200000,
    features: ['Golf Course Views', 'Resort Amenities', 'Gated Communities', 'Luxury Living'],
    homeTypes: 'Single Family, Patio Homes, Custom Estates',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80',
    schools: ['Golf Academy Elementary', 'Sports-Focused High School'],
    amenities: ['Championship Golf Courses', 'Clubhouses', 'Tennis Courts', 'Swimming Pools'],
    yearBuilt: '2010-Present',
    marketInsights: 'Stable market with strong appreciation and luxury amenities',
  },
  {
    slug: 'family-neighborhoods',
    name: 'Family-Friendly Neighborhoods',
    description: 'Perfect for families with excellent schools, parks, and community amenities',
    priceRange: '$600K - $1.8M',
    minPrice: 600000,
    maxPrice: 1800000,
    features: ['Top Schools', 'Family Amenities', 'Parks', 'Safe Communities'],
    homeTypes: 'Single Family, Townhomes',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80',
    schools: ['Highly Rated Elementary', 'Award-Winning Middle School', 'Top High School'],
    amenities: ['Community Pools', 'Playgrounds', 'Sports Courts', 'Walking Trails'],
    yearBuilt: '2015-Present',
    marketInsights: 'High demand from families seeking quality schools and amenities',
  },
  {
    slug: 'new-construction',
    name: 'New Construction Communities',
    description: 'Brand new homes with modern designs and the latest in smart home technology',
    priceRange: '$650K - $2.5M',
    minPrice: 650000,
    maxPrice: 2500000,
    features: ['New Construction', 'Modern Design', 'Smart Homes', 'Builder Incentives'],
    homeTypes: 'Single Family, Modern Design, Custom Homes',
    image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80',
    schools: ['Modern Elementary', 'STEM-Focused High School'],
    amenities: ['Modern Clubhouses', 'Co-working Spaces', 'Dog Parks', 'Fitness Centers'],
    yearBuilt: '2020-Present',
    marketInsights: 'Growing market with builder incentives and modern amenities',
  }
];

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const neighborhood = neighborhoods.find((n) => n.slug === slug);

  if (!neighborhood) {
    return {
      title: 'Neighborhood Not Found | Summerlin West Real Estate',
      description: 'The requested neighborhood could not be found.',
    };
  }

  const title = `${neighborhood.name} Homes for Sale | Summerlin West Real Estate`;
  const description = `Discover ${neighborhood.name} in Summerlin West. ${neighborhood.description}. Price range ${neighborhood.priceRange}. Contact Dr. Jan Duffy for expert guidance.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://www.summerlinwestrealestate.com/neighborhoods/${slug}`,
      siteName: 'Summerlin West Real Estate',
      images: [
        {
          url: neighborhood.image,
          width: 800,
          height: 600,
          alt: `${neighborhood.name} - Summerlin West Real Estate`,
        },
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [neighborhood.image],
    },
    alternates: {
      canonical: `/neighborhoods/${slug}`,
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

export async function generateStaticParams() {
  return neighborhoods.map((neighborhood) => ({
    slug: neighborhood.slug,
  }));
}

import NeighborhoodClient from './NeighborhoodClient';

export default async function NeighborhoodPage({ params }: PageProps) {
  const { slug } = await params;
  const neighborhood = neighborhoods.find((n) => n.slug === slug);

  if (!neighborhood) {
    return notFound();
  }

  return <NeighborhoodClient neighborhood={neighborhood} />;
}
