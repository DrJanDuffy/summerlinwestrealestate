/**
 * V0.app Generated: San Marcos Community Page
 * Keywords: San Marcos Summerlin West homes, San Marcos luxury real estate, San Marcos neighborhood
 */
'use client';

import { useEffect } from 'react';

interface CommunityPageProps {
  name: string;
  description: string;
  locationKeywords: string[];
  homeTypes: string[];
  priceRange: string;
  amenities: string[];
  schools: string[];
  marketInsights: {
    averagePrice: string;
    daysOnMarket: string;
    priceAppreciation: string;
  };
  notableFeatures: string[];
  whyChoose: string[];
}

export default function CommunityPage({
  name,
  description,
  locationKeywords,
  homeTypes,
  priceRange,
  amenities,
  schools,
  marketInsights,
  notableFeatures,
  whyChoose
}: CommunityPageProps) {
  useEffect(() => {
    // Add structured data for SEO
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Residence',
      name: `${name} Community`,
      description: description,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Summerlin West',
        addressRegion: 'Nevada',
        addressCountry: 'United States'
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5',
        ratingCount: '50+'
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {name} Homes for Sale in Summerlin West
          </h1>
          <p className="text-xl text-gray-600 mb-2">{description}</p>
          <div className="flex flex-wrap gap-2 mt-4">
            {locationKeywords.map((keyword, i) => (
              <span key={i} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                {keyword}
              </span>
            ))}
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Community Overview */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">About {name}</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-4">
              {name} is one of the most sought-after communities in Summerlin West, Las Vegas. 
              This prestigious neighborhood offers {homeTypes.join(', ')} with luxury features 
              and resort-style amenities.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              Located in the heart of Summerlin West, {name} provides residents with exclusive 
              access to premium amenities, top-rated schools, and convenient access to major 
              shopping, dining, and entertainment destinations.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Whether you're looking for a luxury estate or an investment property, {name} 
              offers exceptional value in the Summerlin West luxury real estate market.
            </p>
          </div>
        </section>

        {/* Home Types */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Available Home Types</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {homeTypes.map((type, i) => (
              <div key={i} className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-lg border-2 border-blue-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{type}</h3>
                <p className="text-gray-600 text-sm">
                  {priceRange}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Market Insights */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl shadow-lg p-8 mb-8 text-white">
          <h2 className="text-3xl font-bold mb-6">Market Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 rounded-lg p-6">
              <div className="text-4xl font-bold mb-2">{marketInsights.averagePrice}</div>
              <div className="text-blue-100">Average Home Price</div>
            </div>
            <div className="bg-white/10 rounded-lg p-6">
              <div className="text-4xl font-bold mb-2">{marketInsights.daysOnMarket}</div>
              <div className="text-blue-100">Days on Market</div>
            </div>
            <div className="bg-white/10 rounded-lg p-6">
              <div className="text-4xl font-bold mb-2">{marketInsights.priceAppreciation}</div>
              <div className="text-blue-100">Price Appreciation</div>
            </div>
          </div>
        </section>

        {/* Amenities */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Community Amenities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {amenities.map((amenity, i) => (
              <div key={i} className="flex items-start">
                <svg className="w-6 h-6 text-blue-600 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-700">{amenity}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose This Community */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Why Choose {name}?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {whyChoose.map((reason, i) => (
              <div key={i} className="border-l-4 border-blue-600 pl-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{reason}</h3>
                <p className="text-gray-600">
                  Exceptional value in the Summerlin West luxury real estate market
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl shadow-xl p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Interested in {name} Homes?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact Dr. Jan Duffy, your Summerlin West real estate expert
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              View Available Properties
            </a>
            <a
              href="tel:+17025500112"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Call (702) 550-0112
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
