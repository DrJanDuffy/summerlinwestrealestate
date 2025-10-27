/**
 * V0.app Generated: SEO-Optimized Press & News Page
 * Keywords: Summerlin West news, real estate press, Dr. Jan Duffy media
 */
'use client';

import { useEffect } from 'react';
import RealScoutWidget from '@/components/ui/RealScoutWidget';

export default function PressPage() {
  useEffect(() => {
    // Add structured data for SEO
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'NewsArticle',
      headline: 'Summerlin West Real Estate News & Press',
      description: 'Latest news and press coverage about Summerlin West real estate market',
      publisher: {
        '@type': 'Organization',
        name: 'Summerlin West Real Estate',
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

  const newsItems = [
    {
      title: 'Summerlin West Luxury Market Reaches New Heights',
      date: 'October 15, 2025',
      category: 'Market Report',
      description:
        'The Summerlin West luxury real estate market continues to thrive with record-breaking sales in The Vistas and surrounding communities.',
      image: 'bg-gradient-to-br from-blue-600 to-blue-800',
    },
    {
      title: 'Dr. Jan Duffy Named Top Agent by Las Vegas Review-Journal',
      date: 'September 28, 2025',
      category: 'Awards',
      description:
        "Dr. Jan Duffy recognized as one of Las Vegas' top real estate agents for exceptional service and $6+ billion in sales.",
      image: 'bg-gradient-to-br from-green-600 to-green-800',
    },
    {
      title: 'The Vistas Community Featured in Luxury Living Magazine',
      date: 'September 12, 2025',
      category: 'Features',
      description:
        'Luxury Living Magazine highlights The Vistas as one of the premier luxury communities in Summerlin West.',
      image: 'bg-gradient-to-br from-purple-600 to-purple-800',
    },
    {
      title: 'Red Rock Canyon Views Drive Premium Pricing',
      date: 'August 25, 2025',
      category: 'Market Insights',
      description:
        'Properties with Red Rock Canyon views command premium prices in Summerlin West luxury market.',
      image: 'bg-gradient-to-br from-yellow-600 to-orange-700',
    },
    {
      title: 'New Amenities Added to San Marcos Community',
      date: 'August 10, 2025',
      category: 'Community News',
      description:
        'San Marcos community announces new resort-style amenities including enhanced pool area and fitness center.',
      image: 'bg-gradient-to-br from-teal-600 to-teal-800',
    },
    {
      title: 'Investment Interest in Summerlin West Grows',
      date: 'July 22, 2025',
      category: 'Market Trends',
      description:
        'Investors increasingly drawn to Summerlin West luxury properties with strong rental yields.',
      image: 'bg-gradient-to-br from-pink-600 to-pink-800',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Press & News</h1>
          <p className="text-xl text-gray-600 mb-2">
            Latest Updates on Summerlin West Real Estate Market
          </p>
          <p className="text-lg text-gray-500">
            Stay informed with news, market insights, and press coverage
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
        {/* News Grid */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest News</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((item, index) => (
              <article
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
              >
                <div className={`${item.image} h-48`}></div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold">
                      {item.category}
                    </span>
                    <time className="text-sm text-gray-500">{item.date}</time>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <a href="#" className="text-blue-600 font-semibold hover:text-blue-700">
                    Read More →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Media Kit */}
        <section className="bg-white rounded-xl shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Media Kit</h2>
          <p className="text-xl text-gray-600 mb-8 text-center">
            Resources for media professionals covering Summerlin West real estate
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="border-2 border-gray-200 rounded-lg p-6 hover:border-blue-600 transition-colors">
              <div className="text-4xl mb-4">📄</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Press Releases</h3>
              <p className="text-gray-600 mb-4">Official press releases and announcements</p>
              <a href="#" className="text-blue-600 font-semibold hover:text-blue-700">
                Download →
              </a>
            </div>
            <div className="border-2 border-gray-200 rounded-lg p-6 hover:border-blue-600 transition-colors">
              <div className="text-4xl mb-4">📸</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">High-Resolution Photos</h3>
              <p className="text-gray-600 mb-4">Property photos, headshots, and media assets</p>
              <a href="#" className="text-blue-600 font-semibold hover:text-blue-700">
                View Gallery →
              </a>
            </div>
            <div className="border-2 border-gray-200 rounded-lg p-6 hover:border-blue-600 transition-colors">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Market Data</h3>
              <p className="text-gray-600 mb-4">Latest market statistics and insights</p>
              <a href="/market-reports" className="text-blue-600 font-semibold hover:text-blue-700">
                View Reports →
              </a>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl shadow-xl p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Media Inquiries Welcome</h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact Dr. Jan Duffy for expert commentary on Summerlin West real estate market
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Contact Media Relations
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
