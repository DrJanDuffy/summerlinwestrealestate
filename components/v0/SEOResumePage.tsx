/**
 * V0.app Generated: SEO-Optimized Resume Page
 * Keywords: Dr. Jan Duffy, Summerlin West real estate agent, luxury homes
 */
'use client';

import { useEffect } from 'react';

export default function SEOResumePage() {
  useEffect(() => {
    // Add structured data for SEO
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'RealEstateAgent',
      name: 'Dr. Jan Duffy',
      jobTitle: 'REALTOR®',
      description: 'Licensed Summerlin West real estate agent specializing in luxury homes. $6+ billion in sales.',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Summerlin West',
        addressRegion: 'Nevada',
        addressCountry: 'United States'
      },
      telephone: '+1-702-550-0112',
      email: 'jan@summerlinwestrealestate.com',
      aggregatesaled: '6,000,000,000',
      memberOf: {
        '@type': 'Organization',
        name: 'Summerlin West Real Estate'
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);

    // Load RealScout widget
    const realscoutScript = document.createElement('script');
    realscoutScript.src = 'https://em.realscout.com/widgets/realscout-web-components.umd.js';
    realscoutScript.type = 'module';
    realscoutScript.onload = () => {
      const container = document.getElementById('realscout-listings-placeholder');
      if (container) {
        container.innerHTML = '<realscout-office-listings agent-encoded-id="QWdlbnQtMjI1MDUw" sort-order="NEWEST" listing-status="For Sale" property-types=",SFR" price-min="500000" price-max="600000"></realscout-office-listings>';
      }
    };
    document.head.appendChild(realscoutScript);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
      if (document.head.contains(realscoutScript)) {
        document.head.removeChild(realscoutScript);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* SEO Optimized Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-8">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Dr. Jan Duffy - Leading Summerlin West Real Estate Agent
          </h1>
          <p className="text-xl text-gray-600">
            Licensed REALTOR® | Luxury Home Specialist | $6+ Billion in Sales
          </p>
        </div>
      </header>

      {/* RealScout Listings Widget */}
      <section className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4" id="realscout-listings-container">
          <style dangerouslySetInnerHTML={{
            __html: `
              realscout-office-listings {
                --rs-listing-divider-color: #0e64c8;
                width: 100%;
              }
            `
          }} />
          <div id="realscout-listings-placeholder">
            <p className="text-center text-gray-600">Loading property listings...</p>
          </div>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Professional Summary with Keywords */}
        <section className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Professional Summary</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-4">
              <strong>Dr. Jan Duffy</strong> is a premier <strong>Summerlin West real estate agent</strong> 
              specializing in luxury properties and high-end real estate transactions. With over a decade 
              of experience as a <strong>licensed real estate agent</strong> in Las Vegas, Dr. Duffy has 
              established herself as one of the top agents in the Summerlin West luxury real estate market.
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              As a dedicated <strong>REALTOR®</strong>, Dr. Duffy's expertise encompasses luxury home sales, 
              investment real estate, and high-end property transactions. Her deep knowledge of the Summerlin West 
              luxury market, combined with exceptional client service, has resulted in over $6 billion in total 
              sales volume throughout her career.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Dr. Duffy is particularly renowned for her work with luxury properties in The Vistas, an exclusive 
              gated community in Summerlin West featuring luxury homes with spectacular Red Rock Canyon views and 
              resort-style amenities. Her commitment to excellence and personalized service has earned her a 
              reputation as a trusted <strong>Summerlin West real estate professional</strong>.
            </p>
          </div>
        </section>

        {/* Education Section */}
        <section className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Education & Credentials</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Doctoral Degree - Real Estate Expertise</h3>
              <p className="text-gray-700 mb-2 font-semibold">University of Arizona</p>
              <p className="text-gray-600">Advanced research in consumer behavior, market analysis, and luxury real estate dynamics</p>
              <p className="text-gray-600">Strong foundation in data-driven market insights and strategic property valuation</p>
            </div>
            <div className="border-l-4 border-green-600 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Nevada Real Estate License</h3>
              <p className="text-gray-700">Licensed to serve as a real estate agent in Nevada</p>
              <p className="text-gray-600">Commitment to ongoing professional development and continuing education</p>
            </div>
            <div className="border-l-4 border-yellow-600 pl-6">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Professional Certifications</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Certified Luxury Home Marketing Specialist</li>
                <li>Advanced Investment Property Specialist</li>
                <li>Relocation Specialist Certification</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Professional Experience */}
        <section className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Professional Experience</h2>
          <div className="space-y-8">
            <article className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                REALTOR® - Summerlin West Luxury Real Estate Agent
              </h3>
              <p className="text-lg text-blue-600 font-semibold mb-4">Las Vegas, Nevada | 2013 - Present</p>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Key Achievements:</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Consistently ranked in the <strong>top 1% of Las Vegas real estate agents</strong></li>
                    <li>Managed over <strong>$6 billion in total sales volume</strong> throughout career</li>
                    <li>Specialized in <strong>luxury properties in The Vistas</strong> and surrounding Summerlin West communities</li>
                    <li>Maintained <strong>95%+ client satisfaction rating</strong> across all transactions</li>
                    <li>Expert in <strong>luxury home marketing, staging, and virtual tours</strong></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Specializations:</h4>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li><strong>Luxury home sales</strong> in Summerlin West's most prestigious neighborhoods</li>
                    <li><strong>Investment real estate</strong> for high-net-worth clients and portfolio builders</li>
                    <li><strong>Luxury home marketing</strong> utilizing cutting-edge digital strategies</li>
                    <li><strong>Relocation services</strong> for corporate executives and luxury lifestyle clients</li>
                    <li><strong>Estate planning</strong> and wealth preservation through real estate</li>
                  </ul>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* Market Expertise */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl shadow-xl p-8 mb-8 text-white">
          <h2 className="text-3xl font-bold mb-6">Summerlin West Market Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 rounded-lg p-6">
              <div className="text-4xl font-bold mb-2">$6B+</div>
              <div className="text-blue-100">Total Sales Volume</div>
              <p className="text-sm mt-2">Throughout distinguished career</p>
            </div>
            <div className="bg-white/10 rounded-lg p-6">
              <div className="text-4xl font-bold mb-2">Top 1%</div>
              <div className="text-blue-100">Agent Ranking</div>
              <p className="text-sm mt-2">Among Las Vegas real estate professionals</p>
            </div>
            <div className="bg-white/10 rounded-lg p-6">
              <div className="text-4xl font-bold mb-2">95%+</div>
              <div className="text-blue-100">Client Satisfaction</div>
              <p className="text-sm mt-2">Consistently high ratings</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 text-center">
            Ready to Work with a Top Summerlin West Real Estate Agent?
          </h2>
          <p className="text-xl text-gray-600 mb-8 text-center">
            Experience the difference of working with an experienced luxury real estate professional
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center"
            >
              Schedule Free Consultation
            </a>
            <a
              href="tel:+17025500112"
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-center"
            >
              Call (702) 550-0112
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
