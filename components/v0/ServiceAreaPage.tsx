/**
 * V0.app Generated: SEO-Optimized Service Area Page
 * Keywords: Summerlin West service area, Las Vegas real estate coverage, service locations
 */
'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import RealScoutWidget from '@/components/ui/RealScoutWidget';

export default function ServiceAreaPage() {
  useEffect(() => {
    // Add structured data for SEO
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'RealEstateAgent',
      name: 'Dr. Jan Duffy',
      serviceArea: {
        '@type': 'City',
        name: 'Las Vegas, Nevada',
      },
      areaServed: [
        { '@type': 'City', name: 'Summerlin West' },
        { '@type': 'City', name: 'Summerlin East' },
        { '@type': 'City', name: 'North Las Vegas' },
        { '@type': 'City', name: 'Henderson' },
      ],
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const serviceAreas = [
    {
      area: 'Summerlin West',
      communities: [
        'The Vistas',
        'San Marcos',
        'Casa Rosa',
        'Solano',
        'Encanto',
        'Paradiso',
        'Palmilla',
        'Stonebridge',
      ],
      description:
        'Premier luxury communities with Red Rock Canyon views and world-class amenities',
      homes: 'Luxury Estates',
      priceRange: '$750K - $10M+',
      icon: '🏔️',
      color: 'blue',
    },
    {
      area: 'Summerlin East',
      communities: ['The Cliffs', 'Redpoint', 'Reverence', 'Artavia'],
      description:
        'Established luxury neighborhoods with mature landscaping and community amenities',
      homes: 'Single-Family',
      priceRange: '$650K - $5M',
      icon: '🏡',
      color: 'green',
    },
    {
      area: 'North Las Vegas',
      communities: ['Aliante', 'Skye Canyon', 'Tule Springs'],
      description: 'Growing master-planned communities with new construction and established homes',
      homes: 'New Construction',
      priceRange: '$450K - $1.5M',
      icon: '🏗️',
      color: 'purple',
    },
    {
      area: 'Henderson',
      communities: ['Anthem', 'Seven Hills', 'McDonald Ranch'],
      description: 'Prestigious communities with resort-style amenities and top-rated schools',
      homes: 'Luxury Residences',
      priceRange: '$500K - $8M',
      icon: '🏖️',
      color: 'orange',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Service Area</h1>
          <p className="text-xl text-gray-600 mb-2">
            Serving All of Las Vegas Valley with Expert Real Estate Services
          </p>
          <p className="text-lg text-gray-500">
            Summerlin West, Summerlin East, North Las Vegas, Henderson, and More
          </p>
        </div>
      </header>

      {/* RealScout Listings */}
      <section className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <RealScoutWidget
            type="listings"
            agentEncodedId="QWdlbnQtMjI1MDUw"
            sortOrder="NEWEST"
          />
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 py-12">
        {/* Service Areas Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Areas We Serve</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {serviceAreas.map((area, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
              >
                <div
                  className={`bg-gradient-to-r from-${area.color}-600 to-${area.color}-700 p-8 text-white`}
                >
                  <div className="text-5xl mb-4">{area.icon}</div>
                  <h3 className="text-3xl font-bold mb-2">{area.area}</h3>
                  <p className="text-lg">{area.description}</p>
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Communities:</h4>
                    <div className="flex flex-wrap gap-2">
                      {area.communities.map((community, idx) => (
                        <span
                          key={idx}
                          className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                        >
                          {community}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-2 text-sm text-gray-600">
                    <div>
                      <span className="font-semibold">Homes:</span> {area.homes}
                    </div>
                    <div>
                      <span className="font-semibold">Price Range:</span> {area.priceRange}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Service: Summerlin West */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl shadow-xl p-12 text-white">
            <h2 className="text-3xl font-bold mb-4">Primary Focus: Summerlin West</h2>
            <p className="text-xl text-blue-100 mb-8">
              Specializing in luxury real estate in Summerlin West's most prestigious communities
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">🏔️</div>
                <h3 className="text-xl font-semibold mb-2">Red Rock Views</h3>
                <p className="text-blue-100">Properties with spectacular mountain vistas</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🏊</div>
                <h3 className="text-xl font-semibold mb-2">Resort Amenities</h3>
                <p className="text-blue-100">World-class pools, fitness, and entertainment</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🎓</div>
                <h3 className="text-xl font-semibold mb-2">Top Schools</h3>
                <p className="text-blue-100">Highly-rated schools in the Clark County District</p>
              </div>
            </div>
          </div>
        </section>

        {/* Service Highlights */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="text-5xl mb-4">🏠</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Home Buying</h3>
              <p className="text-gray-600 mb-4">
                Expert guidance through the luxury home buying process
              </p>
              <ul className="text-left text-gray-600 space-y-2">
                <li>✓ Market analysis & valuation</li>
                <li>✓ Property search & tours</li>
                <li>✓ Negotiation strategy</li>
                <li>✓ Closing assistance</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="text-5xl mb-4">💼</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Home Selling</h3>
              <p className="text-gray-600 mb-4">
                Maximize your property value with professional marketing
              </p>
              <ul className="text-left text-gray-600 space-y-2">
                <li>✓ Pricing strategy</li>
                <li>✓ Professional staging</li>
                <li>✓ Marketing & exposure</li>
                <li>✓ Negotiation & closing</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="text-5xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Market Analysis</h3>
              <p className="text-gray-600 mb-4">
                Data-driven insights for informed real estate decisions
              </p>
              <ul className="text-left text-gray-600 space-y-2">
                <li>✓ Comparative market analysis</li>
                <li>✓ Investment opportunity analysis</li>
                <li>✓ Neighborhood trends</li>
                <li>✓ Market predictions</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-white rounded-xl shadow-xl p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Contact Dr. Jan Duffy for expert real estate services in your area
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Schedule Consultation
            </Link>
            <a
              href="tel:+17025500112"
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Call (702) 550-0112
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
