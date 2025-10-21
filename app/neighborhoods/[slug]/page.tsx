import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import dynamic from 'next/dynamic';
import InternalLinking from '../../../components/ui/InternalLinking';

// Dynamic imports for better performance
const NeighborhoodHero = dynamic(() => import('../../../components/ui/NeighborhoodHero'), {
  ssr: false,
});

const RealScoutOfficeListingsWrapper = dynamic(() => import('../../../components/ui/RealScoutOfficeListingsWrapper'), {
  ssr: false,
});

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

export default async function NeighborhoodPage({ params }: PageProps) {
  const { slug } = await params;
  const neighborhood = neighborhoods.find((n) => n.slug === slug);

  if (!neighborhood) {
    return notFound();
  }

  return (
    <main className="neighborhood-page">
      {/* Hero Section */}
      <NeighborhoodHero
        title={`${neighborhood.name} - Summerlin West`}
        subtitle={neighborhood.description}
        backgroundImage={neighborhood.image}
        priceRange={neighborhood.priceRange}
        features={neighborhood.features}
      />

      {/* Neighborhood Details */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                About {neighborhood.name}
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                {neighborhood.description}
              </p>
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Price Range</h3>
                  <p className="text-blue-600 font-medium">{neighborhood.priceRange}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Home Types</h3>
                  <p className="text-gray-600">{neighborhood.homeTypes}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Year Built</h3>
                  <p className="text-gray-600">{neighborhood.yearBuilt}</p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Market Insight</h3>
                  <p className="text-gray-600">{neighborhood.marketInsights}</p>
                </div>
              </div>
            </div>
            <div>
              <img
                src={neighborhood.image}
                alt={`${neighborhood.name} neighborhood`}
                className="rounded-lg shadow-lg w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features & Amenities */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Key Features
              </h2>
              <ul className="space-y-3">
                {neighborhood.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <svg className="w-5 h-5 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Community Amenities
              </h2>
              <ul className="space-y-3">
                {neighborhood.amenities.map((amenity, index) => (
                  <li key={index} className="flex items-center">
                    <svg className="w-5 h-5 text-blue-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{amenity}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Schools */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Nearby Schools
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {neighborhood.schools.map((school, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">{school}</h3>
                <p className="text-gray-600">Highly Rated</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Property Listings */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Homes for Sale in {neighborhood.name}
          </h2>
          <RealScoutOfficeListingsWrapper
            agentEncodedId="QWdlbnQtMjI1MDUw"
            sortOrder="PRICE_LOW"
            listingStatus="For Sale"
            propertyTypes=",SFR,MF,TC,LAL,MOBILE,OTHER"
            priceMin={neighborhood.minPrice.toString()}
            priceMax={neighborhood.maxPrice.toString()}
            maxListings={12}
            className="mt-6"
          />
        </div>
      </section>

      {/* Internal Linking Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <InternalLinking
            currentPage={`neighborhoods/${slug}`}
            title={`Explore More ${neighborhood.name} Resources`}
            description={`Discover additional resources and services for ${neighborhood.name}. From market insights to property valuations, access comprehensive real estate information for this premier Summerlin West neighborhood.`}
            showFeaturedSnippets={true}
            maxLinks={6}
          />
        </div>
      </section>
    </main>
  );
}
