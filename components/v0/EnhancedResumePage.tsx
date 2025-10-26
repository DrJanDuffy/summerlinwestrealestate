import React from 'react';

/**
 * V0.app Enhanced Resume Page Component
 * Professional real estate agent resume with modern design
 */
export default function EnhancedResumePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Dr. Jan Duffy, REALTOR®</h1>
          <p className="text-2xl text-gray-600 mb-2">
            Licensed Real Estate Agent | Summerlin West Expert
          </p>
          <p className="text-lg text-gray-500">Proven Track Record of $6+ Billion in Sales</p>
        </div>

        {/* Professional Summary */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Professional Summary</h2>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 leading-relaxed mb-4">
              Dr. Jan Duffy is a highly accomplished REALTOR® specializing in luxury real estate in
              Summerlin West, Las Vegas. With over a decade of experience and $6+ billion in total
              sales, Dr. Duffy combines exceptional market knowledge, personalized service, and
              cutting-edge digital marketing to deliver outstanding results for clients.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Her expertise spans luxury properties, investment real estate, luxury home marketing,
              relocation services, and luxury estate planning. Dr. Duffy is particularly known for
              her work in The Vistas, a gated community featuring luxury homes with Red Rock Canyon
              views and resort-style amenities.
            </p>
          </div>
        </section>

        {/* Education */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Education</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-bold text-gray-900">Doctoral Degree</h3>
              <p className="text-gray-600 mb-2">University of Arizona</p>
              <p className="text-gray-500 text-sm">
                Relevant research in consumer behavior and market analysis
              </p>
            </div>
          </div>
        </section>

        {/* Professional Experience */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Professional Experience</h2>
          <div className="space-y-8">
            <div className="border-l-4 border-blue-600 pl-6">
              <h3 className="text-xl font-bold text-gray-900">REALTOR® - Summerlin West</h3>
              <p className="text-gray-600 mb-2">Las Vegas, NV | 2013 - Present</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>Consistently ranked in top 1% of Las Vegas real estate agents</li>
                <li>Managed $6+ billion in total sales volume throughout career</li>
                <li>Specialized in luxury properties in The Vistas and surrounding areas</li>
                <li>Maintained 95%+ client satisfaction rating</li>
                <li>Expert in luxury marketing, staging, and virtual tours</li>
                <li>Professional network of high-net-worth clients and investors</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Specializations */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Specializations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Luxury Real Estate</h3>
              <p className="text-gray-700">
                Expertise in high-end properties, luxury home marketing, and premium client service
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Investment Properties</h3>
              <p className="text-gray-700">
                Strategic investment analysis and portfolio building for sophisticated investors
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Relocation Services</h3>
              <p className="text-gray-700">
                Comprehensive relocation assistance for corporate and individual clients
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Market Analysis</h3>
              <p className="text-gray-700">
                In-depth market knowledge and trend analysis for optimal pricing strategies
              </p>
            </div>
          </div>
        </section>

        {/* Achievements & Awards */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Achievements & Awards</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg text-white">
              <div className="text-4xl font-bold mb-2">$6B+</div>
              <div className="text-sm">Total Sales Volume</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg text-white">
              <div className="text-4xl font-bold mb-2">Top 1%</div>
              <div className="text-sm">Agent Ranking</div>
            </div>
            <div className="text-center p-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg text-white">
              <div className="text-4xl font-bold mb-2">95%+</div>
              <div className="text-sm">Client Satisfaction</div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg shadow-xl p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Work with a Top Agent?</h2>
          <p className="text-xl text-blue-100 mb-6">Let Dr. Jan Duffy's expertise work for you</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Schedule Consultation
            </a>
            <a
              href="tel:+17025500112"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Call (702) 550-0112
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
