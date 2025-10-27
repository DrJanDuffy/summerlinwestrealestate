/**
 * V0.app Generated: SEO-Optimized Team Page
 * Keywords: Summerlin West real estate team, luxury real estate agents, The Vistas agents
 */
'use client';

import { useEffect } from 'react';
import RealScoutWidget from '@/components/ui/RealScoutWidget';

export default function SEOTeamPage() {
  useEffect(() => {
    // Add structured data for SEO
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Summerlin West Real Estate Team',
      description:
        'Professional team of luxury real estate agents specializing in Summerlin West properties',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Summerlin West',
        addressRegion: 'Nevada',
      },
      telephone: '+1-702-550-0112',
      member: {
        '@type': 'RealEstateAgent',
        name: 'Dr. Jan Duffy',
        jobTitle: 'REALTOR®',
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

  const teamMembers = [
    {
      name: 'Dr. Jan Duffy',
      title: 'REALTOR® | Principal Agent | Luxury Home Specialist',
      credentials: 'Doctoral Degree | Licensed Real Estate Agent | Certified Luxury Specialist',
      specialties: [
        'Summerlin West Luxury Properties',
        'Investment Real Estate',
        'Luxury Home Marketing',
        'The Vistas Expert',
        'Relocation Services',
        'Estate Planning',
      ],
      achievements: '$6+ Billion in Sales | Top 1% Agent | 95%+ Satisfaction',
      quote:
        'Dedicated to delivering exceptional results and personalized service for every luxury real estate client in Summerlin West.',
      experience: '10+ Years',
      image: '👩‍💼',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* SEO Optimized Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Meet Our Summerlin West Real Estate Team
          </h1>
          <p className="text-xl text-gray-600 mb-2">
            Expert Luxury Real Estate Agents Serving The Vistas and All of Summerlin West
          </p>
          <p className="text-lg text-gray-500">
            $6+ Billion in Combined Sales | Top 1% Performance | Trusted by Homebuyers and Sellers
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

      <main className="max-w-7xl mx-auto px-4 pb-12">
        {/* Team Member Cards */}
        <section className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <article
                key={index}
                className="bg-white rounded-xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow"
              >
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-8">
                  <div className="w-24 h-24 bg-white rounded-full mx-auto mb-4 flex items-center justify-center text-5xl">
                    {member.image}
                  </div>
                  <h2 className="text-2xl font-bold text-white text-center">{member.name}</h2>
                </div>
                <div className="p-6">
                  <p className="text-lg font-semibold text-gray-900 mb-2">{member.title}</p>
                  <p className="text-sm text-gray-600 mb-4">{member.credentials}</p>

                  {/* Specializations */}
                  <div className="mb-4">
                    <h3 className="text-sm font-semibold text-gray-900 mb-3">Specializations</h3>
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((spec, i) => (
                        <span
                          key={i}
                          className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-3 mb-4">
                    <p className="text-sm text-gray-700 font-semibold">{member.achievements}</p>
                  </div>

                  {/* Quote */}
                  <blockquote className="text-gray-700 italic border-l-4 border-blue-600 pl-4">
                    "{member.quote}"
                  </blockquote>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Why Work With Our Team */}
        <section className="bg-white rounded-xl shadow-xl p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Why Work With Our Summerlin West Real Estate Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Proven Results</h3>
              <p className="text-gray-600">
                Over $6 billion in sales volume across thousands of successful luxury real estate
                transactions in Summerlin West
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Market Expertise</h3>
              <p className="text-gray-600">
                Deep knowledge of The Vistas and all Summerlin West luxury communities, pricing
                trends, and market dynamics
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg
                  className="w-10 h-10 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Personalized Service</h3>
              <p className="text-gray-600">
                Tailored approach for each luxury real estate client, ensuring every transaction
                meets their unique needs
              </p>
            </div>
          </div>
        </section>

        {/* Team Statistics */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl shadow-xl p-8 mb-8 text-white">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Team Performance</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white/10 rounded-lg p-6 text-center">
              <div className="text-5xl font-bold mb-2">$6B+</div>
              <div className="text-blue-100 text-sm">Total Sales Volume</div>
            </div>
            <div className="bg-white/10 rounded-lg p-6 text-center">
              <div className="text-5xl font-bold mb-2">Top 1%</div>
              <div className="text-blue-100 text-sm">Agent Ranking</div>
            </div>
            <div className="bg-white/10 rounded-lg p-6 text-center">
              <div className="text-5xl font-bold mb-2">95%+</div>
              <div className="text-blue-100 text-sm">Client Satisfaction</div>
            </div>
            <div className="bg-white/10 rounded-lg p-6 text-center">
              <div className="text-5xl font-bold mb-2">10+</div>
              <div className="text-blue-100 text-sm">Years Experience</div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl shadow-xl p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Work with Top Summerlin West Real Estate Agents?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Experience exceptional luxury real estate service with our expert team
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Get Started Today
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
