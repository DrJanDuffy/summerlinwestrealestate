'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import InternalLinking from '../../../components/ui/InternalLinking';

// Dynamic imports for better performance
const RealScoutOfficeListingsWrapper = dynamic(
  () => import('../../../components/ui/RealScoutOfficeListingsWrapper'),
  {
    ssr: false,
  }
);

interface NeighborhoodClientProps {
  neighborhood: {
    slug: string;
    name: string;
    description: string;
    priceRange: string;
    minPrice: number;
    maxPrice: number;
    features: string[];
    homeTypes: string;
    image: string;
    schools: string[];
    amenities: string[];
    yearBuilt: string;
    marketInsights: string;
  };
}

export default function NeighborhoodClient({ neighborhood }: NeighborhoodClientProps) {
  return (
    <main className="neighborhood-page">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-indigo-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {neighborhood.name} - Summerlin West
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-8">{neighborhood.description}</p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {neighborhood.features.map((feature, index) => (
              <span key={index} className="bg-white/20 text-white px-4 py-2 rounded-full text-sm">
                {feature}
              </span>
            ))}
          </div>
          <div className="text-2xl font-bold text-white">{neighborhood.priceRange}</div>
        </div>
      </section>

      {/* Neighborhood Details */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">About {neighborhood.name}</h2>
              <p className="text-lg text-gray-600 mb-6">{neighborhood.description}</p>
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
              <Image
                src={neighborhood.image}
                alt={`${neighborhood.name} neighborhood`}
                width={800}
                height={384}
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Features</h2>
              <ul className="space-y-3">
                {neighborhood.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <svg
                      className="w-5 h-5 text-green-500 mr-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Community Amenities</h2>
              <ul className="space-y-3">
                {neighborhood.amenities.map((amenity) => (
                  <li key={amenity} className="flex items-center">
                    <svg
                      className="w-5 h-5 text-blue-500 mr-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
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
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Nearby Schools</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {neighborhood.schools.map((school) => (
              <div key={school} className="text-center p-6 bg-gray-50 rounded-lg">
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
            currentPage={`neighborhoods/${neighborhood.slug}`}
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
