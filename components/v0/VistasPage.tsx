/**
 * V0.app Generated: SEO-Optimized The Vistas Featured Community Page
 * Keywords: The Vistas, Summerlin West, luxury homes, Red Rock Canyon, Dr. Jan Duffy
 */
'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import RealScoutWidget from '@/components/ui/RealScoutWidget';

export default function VistasPage() {
  useEffect(() => {
    // Add structured data for SEO
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Residence',
      name: 'The Vistas',
      description: 'Luxury master-planned community in Summerlin West with Red Rock Canyon views',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Summerlin West',
        addressRegion: 'NV',
        postalCode: '89138',
      },
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const communities = [
    {
      name: 'Paradiso',
      description: 'Mediterranean-inspired homes with resort amenities',
      price: '$900K - $3M',
      image: 'bg-gradient-to-br from-teal-600 to-teal-800',
    },
    {
      name: 'Palmilla',
      description: 'Resort-style living with luxury amenities',
      price: '$950K - $2.8M',
      image: 'bg-gradient-to-br from-indigo-600 to-indigo-800',
    },
    {
      name: 'San Marcos',
      description: 'Spanish-inspired architecture with modern luxury',
      price: '$800K - $2.5M',
      image: 'bg-gradient-to-br from-green-600 to-green-800',
    },
    {
      name: 'Casa Rosa',
      description: 'Elegant homes in family-friendly community',
      price: '$750K - $2M',
      image: 'bg-gradient-to-br from-purple-600 to-purple-800',
    },
    {
      name: 'Solano',
      description: 'Contemporary luxury with mountain views',
      price: '$850K - $2.2M',
      image: 'bg-gradient-to-br from-yellow-600 to-orange-700',
    },
    {
      name: 'Encanto',
      description: 'Spanish-inspired villas with resort amenities',
      price: '$700K - $1.8M',
      image: 'bg-gradient-to-br from-pink-600 to-pink-800',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">The Vistas in Summerlin West</h1>
          <p className="text-2xl mb-2">Premier Luxury Living with Red Rock Canyon Views</p>
          <p className="text-xl text-blue-100">
            Master-planned community featuring resort-style amenities and world-class homes
          </p>
        </div>
      </section>

      {/* RealScout Listings */}
      <section className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <RealScoutWidget
            type="listings"
            agentEncodedId="QWdlbnQtMjI1MDUw"
            sortOrder="NEWEST"
            listingStatus="For Sale,In Contract"
            propertyTypes=",SFR"
            priceMin="500000"
            priceMax="600000"
          />
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 py-12">
        {/* About Section */}
        <section className="mb-16">
          <div className="bg-white rounded-xl shadow-xl p-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About The Vistas</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-lg text-gray-700 mb-4">
                  The Vistas represents the pinnacle of luxury living in Summerlin West, Las Vegas.
                  This master-planned community offers stunning Red Rock Canyon views, resort-style
                  amenities, and world-class homes designed for the most discerning buyers.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  As a gated community with 26 distinct subdivisions, The Vistas provides an
                  unparalleled living experience with top-rated schools, premium shopping at
                  Downtown Summerlin, and proximity to outdoor recreation.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="bg-blue-100 px-4 py-2 rounded-lg text-blue-800 font-semibold">
                    🏔️ Red Rock Views
                  </div>
                  <div className="bg-blue-100 px-4 py-2 rounded-lg text-blue-800 font-semibold">
                    🏊 Resort Amenities
                  </div>
                  <div className="bg-blue-100 px-4 py-2 rounded-lg text-blue-800 font-semibold">
                    🎓 Top Schools
                  </div>
                  <div className="bg-blue-100 px-4 py-2 rounded-lg text-blue-800 font-semibold">
                    🏡 Gated Security
                  </div>
                </div>
              </div>
              <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg h-64 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-6xl mb-4">🏔️</div>
                  <p className="text-2xl font-bold">26 Subdivisions</p>
                  <p className="text-blue-100">Each with unique character</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Communities Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Explore Our Communities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {communities.map((community, index) => (
              <Link
                key={index}
                href={`/communities/${community.name.toLowerCase().replace(/\s+/g, '-')}`}
              >
                <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
                  <div className={`${community.image} h-48`}></div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{community.name}</h3>
                    <p className="text-gray-600 mb-4">{community.description}</p>
                    <div className="text-blue-600 font-semibold">Price: {community.price}</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Expert Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl shadow-xl p-12 text-white mb-16">
          <h2 className="text-3xl font-bold mb-6">Meet Dr. Jan Duffy</h2>
          <p className="text-xl text-blue-100 mb-6">
            Your Luxury Real Estate Expert for The Vistas
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="text-4xl font-bold mb-2">$6B+</div>
              <div className="text-blue-100">Total Sales Volume</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">40+</div>
              <div className="text-blue-100">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">Top 1%</div>
              <div className="text-blue-100">Nationwide</div>
            </div>
          </div>
          <Link
            href="/contact"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-block"
          >
            Schedule Consultation
          </Link>
        </section>

        {/* Features Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Community Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="text-5xl mb-4">🏊</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Resort Amenities</h3>
              <p className="text-gray-600 mb-4">Pools, fitness centers, and luxury clubhouses</p>
              <ul className="text-left text-gray-600 space-y-2">
                <li>• Swimming pools & spas</li>
                <li>• Fitness centers</li>
                <li>• Tennis courts</li>
                <li>• Clubhouse facilities</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="text-5xl mb-4">🎓</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Top Schools</h3>
              <p className="text-gray-600 mb-4">Highly-rated public and private schools</p>
              <ul className="text-left text-gray-600 space-y-2">
                <li>• Clark County School District</li>
                <li>• Private school options</li>
                <li>• College preparatory programs</li>
                <li>• Excellent test scores</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <div className="text-5xl mb-4">🏞️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Outdoor Recreation</h3>
              <p className="text-gray-600 mb-4">Beautiful parks and natural attractions</p>
              <ul className="text-left text-gray-600 space-y-2">
                <li>• Red Rock Canyon views</li>
                <li>• Walking trails</li>
                <li>• Parks and playgrounds</li>
                <li>• Nature preserves</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-white rounded-xl shadow-xl p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Explore The Vistas?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Contact Dr. Jan Duffy for a personalized tour and market insights
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Schedule Tour
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
