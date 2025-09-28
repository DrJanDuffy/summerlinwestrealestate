'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import ModernHeroSection from '../components/ui/ModernHeroSection';
import ModernPropertyCard from '../components/ui/ModernPropertyCard';
import ModernStatsSection from '../components/ui/ModernStatsSection';

// Dynamically import components for performance
const RealScoutAdvancedSearch = dynamic(() => import('../components/ui/RealScoutAdvancedSearchWidget'), {
  ssr: false,
});
const RealScoutLeadCapture = dynamic(() => import('../components/ui/RealScoutWidgetEnhanced'), {
  ssr: false,
});
const RealScoutYourListings = dynamic(() => import('../components/ui/RealScoutYourListings'), {
  ssr: false,
});
const RealScoutFeaturedListings = dynamic(() => import('../components/ui/RealScoutFeaturedListings'), {
  ssr: false,
});
const RealScoutHomeValue = dynamic(() => import('../components/ui/RealScoutHomeValue'), {
  ssr: false,
});
const HomebotWidget = dynamic(() => import('../components/ui/HomebotWidget'), {
  ssr: false,
});
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
      '/images/featured-homes/featured-home-1.jpg',
      '/images/featured-homes/02-DSC03093.jpg',
      '/images/featured-homes/03-DJI_20250707145902_0780_D.jpg',
    ],
    community: 'The Vistas',
    features: ['Mountain Views', 'Gourmet Kitchen', 'Master Suite', 'Pool & Spa'],
    description: 'Stunning luxury home in The Vistas with panoramic Red Rock Canyon views, featuring an open-concept design, premium finishes, and resort-style outdoor living.',
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
      '/images/featured-homes/04-DJI_20250707150132_0797_D.jpg',
      '/images/featured-homes/05-DSC03003.jpg',
      '/images/featured-homes/06-DSC03075.jpg',
    ],
    community: 'Stonebridge',
    features: ['Golf Course Views', 'Updated Kitchen', 'Hardwood Floors', 'Covered Patio'],
    description: 'Beautiful home in Stonebridge with golf course views, featuring updated kitchen, hardwood floors throughout, and a covered patio perfect for entertaining.',
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
      '/images/featured-homes/07-DSC03018.jpg',
      '/images/featured-homes/08-DSC03006.jpg',
      '/images/featured-homes/09-DSC03048.jpg',
    ],
    community: 'Redpoint',
    features: ['Custom Built', 'Wine Cellar', 'Home Theater', 'Guest Suite'],
    description: 'Custom-built estate in Redpoint featuring a wine cellar, home theater, guest suite, and expansive outdoor living spaces with mountain views.',
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
        const prompt = 'A luxury residential neighborhood in Summerlin West, Las Vegas, with modern homes and Red Rock Canyon views, blue sky, and desert landscaping.';
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
          setHeroImage('/images/featured-homes/featured-home-1.jpg');
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
      description: 'Summerlin West continues to show strong appreciation with median prices reflecting the premium location and amenities.',
      icon: '🏠',
      trend: {
        value: '+5.2%',
        direction: 'up' as const,
      },
    },
    {
      value: '287',
      label: 'Active Listings',
      description: 'Limited inventory creates competitive conditions for buyers, making expert guidance essential.',
      icon: '📋',
      trend: {
        value: '-12%',
        direction: 'down' as const,
      },
    },
    {
      value: '12',
      label: 'Avg Days on Market',
      description: 'Properties sell quickly in Summerlin West, with well-priced homes typically selling within two weeks.',
      icon: '⏱️',
      trend: {
        value: '-3 days',
        direction: 'down' as const,
      },
    },
    {
      value: '98%',
      label: 'List-to-Sale Ratio',
      description: 'Strong market conditions mean properties are selling very close to asking price.',
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
              Get an instant, accurate estimate of your home's value in today's competitive Summerlin West market. 
              Our advanced valuation tool uses real-time MLS data and local market trends.
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
              Browse our curated selection of the finest homes currently available in Summerlin West. 
              Each property has been personally selected by Dr. Jan Duffy for its exceptional quality and prime location.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sampleProperties.map((property, index) => (
              <ModernPropertyCard key={property.id} property={property} index={index} />
            ))}
          </div>

          <div className="text-center mt-12">
            <button type="button" className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-full hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105">
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
              Use our advanced search tool to find your ideal home. Search by neighborhood, price range, 
              home size, and special features. Our real-time MLS integration ensures you see the most current listings.
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
              Discover exceptional properties currently available in Summerlin West. These featured listings 
              showcase the finest in luxury real estate, updated in real-time from the MLS.
            </p>
          </div>
          
          <FeaturedHomeSlider
            images={[
              {
                src: '/images/featured-homes/featured-home-1.jpg',
                caption: 'Front Exterior',
              },
              {
                src: '/images/featured-homes/02-DSC03093.jpg',
                caption: 'Entryway',
              },
              {
                src: '/images/featured-homes/03-DJI_20250707145902_0780_D.jpg',
                caption: 'Living Room',
              },
              {
                src: '/images/featured-homes/04-DJI_20250707150132_0797_D.jpg',
                caption: 'Kitchen',
              },
              {
                src: '/images/featured-homes/05-DSC03003.jpg',
                caption: 'Dining Area',
              },
              {
                src: '/images/featured-homes/06-DSC03075.jpg',
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

      {/* RealScout Your Listings */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Current Summerlin West Listings
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Browse all current listings in Summerlin West. Updated in real-time with the latest market data
              and property information from the MLS.
            </p>
          </div>

          <RealScoutYourListings />
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
              Ready to buy or sell in Summerlin West? Dr. Jan Duffy provides personalized, expert guidance 
              tailored to your specific needs and goals. Contact us today for a confidential consultation.
            </p>
          </div>
          
          <RealScoutLeadCapture
            variant="lead-capture"
            agentId="QWdlbnQtMjI1MDUw"
          />
        </div>
      </section>
    </main>
  );
}
