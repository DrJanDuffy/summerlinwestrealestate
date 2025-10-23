'use client';

import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';
import InternalLinking from '../components/ui/InternalLinking';
import ModernHeroSection from '../components/ui/ModernHeroSection';
import ModernPropertyCard from '../components/ui/ModernPropertyCard';
import ModernStatsSection from '../components/ui/ModernStatsSection';

// Dynamically import components for performance
const RealScoutAdvancedSearch = dynamic(
  () => import('../components/ui/RealScoutAdvancedSearchWidget'),
  {
    ssr: false,
  }
);
const RealScoutSimpleSearch = dynamic(() => import('../components/ui/RealScoutSimpleSearch'), {
  ssr: false,
});
const RealScoutLeadCapture = dynamic(() => import('../components/ui/RealScoutWidgetEnhanced'), {
  ssr: false,
});
// const RealScoutYourListings = dynamic(() => import('../components/ui/RealScoutYourListings'), {
//   ssr: false,
// });
const RealScoutOfficeListings = dynamic(() => import('../components/ui/RealScoutOfficeListings'), {
  ssr: false,
});
const RealScoutFeaturedListings = dynamic(
  () => import('../components/ui/RealScoutFeaturedListings'),
  {
    ssr: false,
  }
);
const RealScoutHomeValue = dynamic(() => import('../components/ui/RealScoutHomeValue'), {
  ssr: false,
});
// const HomebotWidget = dynamic(() => import('../components/ui/HomebotWidget'), {
//   ssr: false,
// });
const FeaturedHomeSlider = dynamic(() => import('../components/ui/FeaturedHomeSlider'), {
  ssr: false,
});
const SummerlinWestOverview = dynamic(() => import('../components/ui/SummerlinWestOverview'), {
  ssr: false,
});

// Sample property data for demonstration
const sampleProperties = [
  {
    id: '1',
    address: '123 Vista Ridge Drive',
    price: 1250000,
    bedrooms: 4,
    bathrooms: 3.5,
    squareFeet: 3200,
    lotSize: '0.25 acres',
    images: [
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80',
      'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80',
    ],
    community: 'The Vistas',
    features: ['Mountain Views', 'Gourmet Kitchen', 'Master Suite', 'Pool & Spa'],
    description:
      'Stunning luxury home in The Vistas with panoramic Red Rock Canyon views, featuring an open-concept design, premium finishes, and resort-style outdoor living.',
    mlsId: 'SW-2024-001',
    status: 'active' as const,
    yearBuilt: 2020,
    garageSpaces: 3,
    pool: true,
    view: 'Red Rock Canyon',
  },
  {
    id: '2',
    address: '456 Stonebridge Way',
    price: 980000,
    bedrooms: 3,
    bathrooms: 2.5,
    squareFeet: 2800,
    lotSize: '0.2 acres',
    images: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80',
      'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80',
    ],
    community: 'Stonebridge',
    features: ['Golf Course Views', 'Updated Kitchen', 'Hardwood Floors', 'Covered Patio'],
    description:
      'Beautiful home in Stonebridge with golf course views, featuring updated kitchen, hardwood floors throughout, and a covered patio perfect for entertaining.',
    mlsId: 'SW-2024-002',
    status: 'active' as const,
    yearBuilt: 2018,
    garageSpaces: 2,
    pool: false,
    view: 'Golf Course',
  },
  {
    id: '3',
    address: '789 Redpoint Circle',
    price: 1450000,
    bedrooms: 5,
    bathrooms: 4,
    squareFeet: 3800,
    lotSize: '0.3 acres',
    images: [
      'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80',
      'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80',
    ],
    community: 'Redpoint',
    features: ['Custom Built', 'Wine Cellar', 'Home Theater', 'Guest Suite'],
    description:
      'Custom-built estate in Redpoint featuring a wine cellar, home theater, guest suite, and expansive outdoor living spaces with mountain views.',
    mlsId: 'SW-2024-003',
    status: 'pending' as const,
    yearBuilt: 2021,
    garageSpaces: 4,
    pool: true,
    view: 'Mountain',
  },
];

export default function ImprovedHomeClient() {
  const [heroImage, setHeroImage] = useState('/images/og-image.svg');

  useEffect(() => {
    // Try to generate a hero image, fallback to default
    const generateHeroImage = async () => {
      try {
        const prompt =
          'A luxury residential neighborhood in Summerlin West, Las Vegas, with modern homes and Red Rock Canyon views, blue sky, and desert landscaping.';
        const response = await fetch('/api/generate-image', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ prompt }),
          cache: 'force-cache',
        });

        const data = await response.json();
        if (data.success && data.imagePath) {
          setHeroImage(data.imagePath);
        } else if (data.fallback) {
          setHeroImage(data.fallback);
        }
      } catch {
        console.log('Using fallback hero image');
        setHeroImage(
          'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80'
        );
      }
    };

    generateHeroImage();
  }, []);

  const heroStats = [
    {
      value: '$920K',
      label: 'Median Price',
      description: 'Current market median',
    },
    {
      value: '287',
      label: 'Active Listings',
      description: 'Available now',
    },
    {
      value: '12',
      label: 'Avg Days on Market',
      description: 'Fast-moving market',
    },
  ];

  const marketStats = [
    {
      value: '$920K',
      label: 'Median Home Price',
      description:
        'Summerlin West continues to show strong appreciation with median prices reflecting the premium location and amenities.',
      icon: '🏠',
      trend: {
        value: '+5.2%',
        direction: 'up' as const,
      },
    },
    {
      value: '287',
      label: 'Active Listings',
      description:
        'Limited inventory creates competitive conditions for buyers, making expert guidance essential.',
      icon: '📋',
      trend: {
        value: '-12%',
        direction: 'down' as const,
      },
    },
    {
      value: '12',
      label: 'Avg Days on Market',
      description:
        'Properties sell quickly in Summerlin West, with well-priced homes typically selling within two weeks.',
      icon: '⏱️',
      trend: {
        value: '-3 days',
        direction: 'down' as const,
      },
    },
    {
      value: '98%',
      label: 'List-to-Sale Ratio',
      description:
        'Strong market conditions mean properties are selling very close to asking price.',
      icon: '💰',
      trend: {
        value: '+2%',
        direction: 'up' as const,
      },
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Modern Hero Section */}
      <ModernHeroSection
        title="Find Your Dream Home in The Vistas, Summerlin West"
        subtitle="Discover luxury living in Las Vegas's most prestigious master-planned community. Expert guidance from Dr. Jan Duffy, REALTOR® with 15+ years of experience helping families find their perfect home."
        heroImage={heroImage}
        stats={heroStats}
        primaryCTA={{
          text: 'Search Properties',
          href: '/properties',
        }}
        secondaryCTA={{
          text: 'Get Market Report',
          href: '/market-report',
        }}
      />

      {/* Quick Search Section */}
      <section className="py-12 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Quick Property Search
            </h2>
            <p className="text-lg text-white/90">
              Start your home search right here. Find properties in Summerlin West with our simple
              search tool.
            </p>
          </div>

          <RealScoutSimpleSearch />
        </div>
      </section>

      {/* Summerlin West Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SummerlinWestOverview />
        </div>
      </section>

      {/* Home Valuation Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Discover Your Home's Current Market Value
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get an instant, accurate estimate of your home's value in today's competitive
              Summerlin West market. Our advanced valuation tool uses real-time MLS data and local
              market trends.
            </p>
          </div>

          <RealScoutHomeValue />
        </div>
      </section>

      {/* Featured Properties Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Featured Luxury Homes in Summerlin West
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Browse our curated selection of the finest homes currently available in Summerlin
              West. Each property has been personally selected by Dr. Jan Duffy for its exceptional
              quality and prime location.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sampleProperties.map((property, index) => (
              <ModernPropertyCard key={property.id} property={property} index={index} />
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              type="button"
              className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105"
            >
              View All Properties
            </button>
          </div>
        </div>
      </section>

      {/* Market Statistics Section */}
      <ModernStatsSection
        title="Current Summerlin West Real Estate Market Overview"
        subtitle="Stay informed about the latest market conditions in Summerlin West with our comprehensive market overview. Understanding these key metrics helps you make informed decisions."
        stats={marketStats}
        className="bg-white"
      />

      {/* Advanced Search Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Find Your Perfect Home in Summerlin West
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Use our advanced search tool to find your ideal home. Search by neighborhood, price
              range, home size, and special features. Our real-time MLS integration ensures you see
              the most current listings.
            </p>
          </div>

          <RealScoutAdvancedSearch />
        </div>
      </section>

      {/* Featured Home Showcase */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Featured Properties for Sale in Summerlin West
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover exceptional properties currently available in Summerlin West. These featured
              listings showcase the finest in luxury real estate, updated in real-time from the MLS.
            </p>
          </div>

          <FeaturedHomeSlider
            images={[
              {
                src: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80',
                caption: 'Front Exterior',
              },
              {
                src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80',
                caption: 'Entryway',
              },
              {
                src: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80',
                caption: 'Living Room',
              },
              {
                src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80',
                caption: 'Kitchen',
              },
              {
                src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80',
                caption: 'Dining Area',
              },
              {
                src: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80',
                caption: 'Primary Bedroom',
              },
            ]}
          />

          {/* Featured Listings from MLS */}
          <div className="mt-16">
            <RealScoutFeaturedListings />
          </div>
        </div>
      </section>

      {/* Primary Lead Generator - Premium Office Listings */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Premium Properties in Summerlin West
            </h1>
            <h2 className="text-2xl sm:text-3xl font-semibold text-gray-700 mb-6">
              Discover Your Dream Home in Las Vegas's Most Prestigious Community
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-8">
              Explore our curated selection of premium properties in Summerlin West. From luxury
              single-family homes to modern condos, find your perfect match in our comprehensive MLS
              database. Updated in real-time with the latest market data and property information.
            </p>

            {/* Expert Insight */}
            <div className="bg-white rounded-2xl shadow-lg p-8 max-w-4xl mx-auto border-l-4 border-blue-600">
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                  <svg
                    className="w-8 h-8 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Expert Market Insight</h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                <strong>
                  "Summerlin West represents the pinnacle of luxury living in Las Vegas,"
                </strong>{' '}
                says Dr. Jan Duffy, REALTOR® with 15+ years of experience.
                <em>
                  "With properties ranging from $800K to $2M+, this master-planned community offers
                  unparalleled amenities including world-class golf courses, top-rated schools, and
                  proximity to Red Rock Canyon. The current market shows strong appreciation with
                  median home values increasing 12% year-over-year. Premium properties in this range
                  offer exceptional value with luxury finishes, expansive layouts, and prime
                  locations within walking distance to the community's finest amenities."
                </em>
              </p>
            </div>
          </div>

          <RealScoutOfficeListings />
        </div>
      </section>

      {/* Lead Capture Section */}
      <section className="py-16 bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Get Expert Guidance from Dr. Jan Duffy
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Ready to buy or sell in Summerlin West? Dr. Jan Duffy provides personalized, expert
              guidance tailored to your specific needs and goals. Contact us today for a
              confidential consultation.
            </p>
          </div>

          <RealScoutLeadCapture variant="lead-capture" agentId="QWdlbnQtMjI1MDUw" />
        </div>
      </section>

      {/* Hyperlocal Search Sections */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Explore Summerlin West by Location
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find your perfect home by exploring specific subdivisions, schools, zip codes, and streets in Summerlin West.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Explore by Subdivision */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Explore by Subdivision</h3>
                <p className="text-gray-600 mb-4">Browse homes in specific subdivisions like The Vistas, Stonebridge, and more.</p>
                <a
                  href="/service-area"
                  className="inline-block bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition-colors"
                >
                  View Subdivisions
                </a>
              </div>
            </div>

            {/* Search by School */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Search by School</h3>
                <p className="text-gray-600 mb-4">Find homes near top-rated schools serving Summerlin West.</p>
                <a
                  href="/schools"
                  className="inline-block bg-green-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-green-700 transition-colors"
                >
                  View Schools
                </a>
              </div>
            </div>

            {/* Browse by Zip Code */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Browse by Zip Code</h3>
                <p className="text-gray-600 mb-4">Explore homes by zip code areas in Summerlin West.</p>
                <a
                  href="/zip-codes"
                  className="inline-block bg-purple-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-purple-700 transition-colors"
                >
                  View Zip Codes
                </a>
              </div>
            </div>

            {/* Search by Street */}
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Search by Street</h3>
                <p className="text-gray-600 mb-4">Find homes on specific streets in Summerlin West.</p>
                <a
                  href="/streets"
                  className="inline-block bg-orange-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-orange-700 transition-colors"
                >
                  View Streets
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Subdivisions Quick Access */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Popular Subdivisions in Summerlin West
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore the most sought-after subdivisions in Summerlin West, each offering unique amenities and lifestyle options.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <a href="/service-area/paradiso" className="group">
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Paradiso</h3>
                <p className="text-gray-600 mb-3">Gated luxury community with custom homes and mountain views</p>
                <div className="flex items-center text-blue-600 font-medium">
                  <span>Explore Paradiso</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </a>

            <a href="/service-area/palmilla" className="group">
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Palmilla</h3>
                <p className="text-gray-600 mb-3">Upscale gated community with luxury amenities</p>
                <div className="flex items-center text-blue-600 font-medium">
                  <span>Explore Palmilla</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </a>

            <a href="/service-area/estancia" className="group">
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Estancia</h3>
                <p className="text-gray-600 mb-3">Luxury single-family homes with premium finishes</p>
                <div className="flex items-center text-blue-600 font-medium">
                  <span>Explore Estancia</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </a>

            <a href="/service-area/talaverde" className="group">
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Talaverde</h3>
                <p className="text-gray-600 mb-3">All single-story luxury homes with modern designs</p>
                <div className="flex items-center text-blue-600 font-medium">
                  <span>Explore Talaverde</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </a>

            <a href="/service-area/casa-rosa" className="group">
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Casa Rosa</h3>
                <p className="text-gray-600 mb-3">Mid-range luxury homes with gated community access</p>
                <div className="flex items-center text-blue-600 font-medium">
                  <span>Explore Casa Rosa</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </a>

            <a href="/service-area/san-marcos" className="group">
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">San Marcos</h3>
                <p className="text-gray-600 mb-3">Established luxury neighborhood with mature landscaping</p>
                <div className="flex items-center text-blue-600 font-medium">
                  <span>Explore San Marcos</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </a>
          </div>

          <div className="text-center mt-8">
            <a
              href="/service-area"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
            >
              View All Subdivisions
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
