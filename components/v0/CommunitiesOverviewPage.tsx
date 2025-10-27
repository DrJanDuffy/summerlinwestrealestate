/**
 * V0.app Generated: SEO-Optimized Communities Overview Page
 * Keywords: Summerlin West communities, The Vistas, luxury neighborhoods
 */
'use client';

import Link from 'next/link';
import { useEffect } from 'react';
import RealScoutWidget from '@/components/ui/RealScoutWidget';

export default function CommunitiesOverviewPage() {
  useEffect(() => {
    // Add structured data for SEO
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      name: 'Summerlin West Communities',
      description:
        'Explore luxury communities in Summerlin West with amenities, schools, and market data',
      itemListElement: [
        { '@type': 'ListItem', name: 'The Vistas' },
        { '@type': 'ListItem', name: 'San Marcos' },
        { '@type': 'ListItem', name: 'Casa Rosa' },
        { '@type': 'ListItem', name: 'Solano' },
        { '@type': 'ListItem', name: 'Encanto' },
        { '@type': 'ListItem', name: 'Paradiso' },
        { '@type': 'ListItem', name: 'Palmilla' },
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

  const communities = [
    {
      name: 'The Vistas',
      description:
        'Exclusive gated community with Red Rock Canyon views and resort-style amenities',
      image: 'bg-gradient-to-br from-blue-600 to-blue-800',
      href: '/the-vistas',
      homes: 'Luxury Estates',
      priceRange: '$1M - $5M+',
      featured: true,
    },
    {
      name: 'San Marcos',
      description: 'Prestigious community with luxury homes and modern amenities',
      image: 'bg-gradient-to-br from-green-600 to-green-800',
      href: '/communities/san-marcos',
      homes: 'Luxury Single-Family',
      priceRange: '$800K - $2.5M',
      featured: false,
    },
    {
      name: 'Casa Rosa',
      description: 'Beautiful community featuring elegant homes and family-friendly amenities',
      image: 'bg-gradient-to-br from-purple-600 to-purple-800',
      href: '/communities/casa-rosa',
      homes: 'Single-Family Homes',
      priceRange: '$750K - $2M',
      featured: false,
    },
    {
      name: 'Solano',
      description: 'Contemporary living with luxury features and community amenities',
      image: 'bg-gradient-to-br from-yellow-600 to-orange-700',
      href: '/communities/solano',
      homes: 'Modern Estates',
      priceRange: '$850K - $2.2M',
      featured: false,
    },
    {
      name: 'Encanto',
      description: 'Charming community with Spanish-inspired architecture and resort amenities',
      image: 'bg-gradient-to-br from-pink-600 to-pink-800',
      href: '/communities/encanto',
      homes: 'Luxury Villas',
      priceRange: '$700K - $1.8M',
      featured: false,
    },
    {
      name: 'Paradiso',
      description: 'Upscale living with Mediterranean influences and premium amenities',
      image: 'bg-gradient-to-br from-teal-600 to-teal-800',
      href: '/communities/paradiso',
      homes: 'Mediterranean Estates',
      priceRange: '$900K - $3M',
      featured: false,
    },
    {
      name: 'Palmilla',
      description: 'Resort-style living with luxury amenities and beautiful landscaping',
      image: 'bg-gradient-to-br from-indigo-600 to-indigo-800',
      href: '/communities/palmilla',
      homes: 'Luxury Residences',
      priceRange: '$950K - $2.8M',
      featured: false,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Summerlin West Luxury Communities
          </h1>
          <p className="text-xl text-gray-600 mb-2">
            Explore The Vistas, San Marcos, and Other Premier Neighborhoods
          </p>
          <p className="text-lg text-gray-500">
            Discover luxury homes, world-class amenities, and exceptional living in Las Vegas
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
        {/* Featured Community */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Community</h2>
          {communities.find((c) => c.featured) && (
            <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 opacity-5"></div>
              <div className="relative p-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-4xl font-bold text-gray-900 mb-4">
                      {communities.find((c) => c.featured)?.name}
                    </h3>
                    <p className="text-xl text-gray-700 mb-6">
                      {communities.find((c) => c.featured)?.description}
                    </p>
                    <div className="space-y-4 mb-8">
                      <div className="flex items-center">
                        <svg
                          className="w-6 h-6 text-blue-600 mr-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                          />
                        </svg>
                        <span className="text-gray-700 font-semibold">
                          {communities.find((c) => c.featured)?.homes}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <svg
                          className="w-6 h-6 text-blue-600 mr-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span className="text-gray-700 font-semibold">
                          {communities.find((c) => c.featured)?.priceRange}
                        </span>
                      </div>
                    </div>
                    <Link
                      href={communities.find((c) => c.featured)?.href || '#'}
                      className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    >
                      Explore The Vistas
                    </Link>
                  </div>
                  <div
                    className={`${communities.find((c) => c.featured)?.image} rounded-lg h-64`}
                  ></div>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* All Communities Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">All Summerlin West Communities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {communities
              .filter((c) => !c.featured)
              .map((community) => (
                <Link key={community.name} href={community.href}>
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
                    <div className={`${community.image} h-48`}></div>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{community.name}</h3>
                      <p className="text-gray-600 mb-4">{community.description}</p>
                      <div className="space-y-2 mb-4">
                        <div className="text-sm">
                          <span className="font-semibold">Homes:</span> {community.homes}
                        </div>
                        <div className="text-sm">
                          <span className="font-semibold">Price Range:</span> {community.priceRange}
                        </div>
                      </div>
                      <div className="text-blue-600 font-semibold hover:text-blue-700">
                        Learn More →
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </section>

        {/* Why Summerlin West */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl shadow-xl p-12 text-white mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Summerlin West?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl mb-4">🏡</div>
              <h3 className="text-xl font-semibold mb-3">Luxury Living</h3>
              <p className="text-blue-100">
                Exceptional homes in master-planned communities with resort-style amenities
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🎓</div>
              <h3 className="text-xl font-semibold mb-3">Top Schools</h3>
              <p className="text-blue-100">
                Highly-rated schools in the Clark County School District
              </p>
            </div>
            <div className="text-center">
              <div className="text-5xl mb-4">🏔️</div>
              <h3 className="text-xl font-semibold mb-3">Natural Beauty</h3>
              <p className="text-blue-100">
                Spectacular Red Rock Canyon views and natural surroundings
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-white rounded-xl shadow-xl p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Find Your Perfect Community?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Work with Dr. Jan Duffy to explore Summerlin West luxury communities
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
