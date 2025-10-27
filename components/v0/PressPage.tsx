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

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Press & News</h1>
          <p className="text-2xl mb-2">Summerlin West Real Estate Market Insights</p>
          <p className="text-xl text-blue-100">
            Expert commentary, market analysis, and industry news from Dr. Jan Duffy
          </p>
        </div>
      </section>

      {/* RealScout Listings */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Featured Properties</h2>
          <RealScoutWidget
            type="listings"
            agentEncodedId="QWdlbnQtMjI1MDUw"
            sortOrder="NEWEST"
          />
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-16">
        {/* Market Insights & Blog Posts */}
        <section className="mb-16">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Market Insights & Blog Posts</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest real estate market insights, trends, and industry news 
              from Dr. Jan Duffy's expert perspective
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            <iframe
              src="https://www.simplifyingthemarket.com/en/?a=956758-ef2edda2f940e018328655620ea05f18"
              scrolling="yes"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              height="900px"
              width="100%"
              allowFullScreen
              className="w-full border-0"
              title="Real Estate Market Insights Blog Posts"
            />
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl shadow-2xl p-12 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Media Inquiries Welcome</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Contact Dr. Jan Duffy for expert commentary on Summerlin West real estate market trends, 
            luxury property insights, and investment opportunities
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-blue-600 px-10 py-4 rounded-lg font-bold text-lg hover:bg-blue-50 transition-all hover:scale-105 shadow-lg"
            >
              Contact Media Relations
            </a>
            <a
              href="tel:+17025500112"
              className="border-2 border-white text-white px-10 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-blue-600 transition-all hover:scale-105"
            >
              Call (702) 550-0112
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
