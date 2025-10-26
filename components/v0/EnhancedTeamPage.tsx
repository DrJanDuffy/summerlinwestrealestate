/**
 * V0.app Enhanced Team Page
 * Modern team showcase for real estate professionals
 */

export default function EnhancedTeamPage() {
  const teamMembers = [
    {
      name: 'Dr. Jan Duffy',
      title: 'REALTOR® | Principal Agent',
      credentials: 'Doctoral Degree | Licensed Real Estate Agent',
      specialties: ['Luxury Properties', 'Investment Real Estate', 'Relocation Services'],
      achievements: '$6+ Billion in Sales | Top 1% Agent',
      quote: 'Dedicated to delivering exceptional results and personalized service for every client.',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Meet Our Expert Team</h1>
          <p className="text-xl text-gray-600">
            Real estate professionals dedicated to your success
          </p>
        </div>

        {/* Team Member Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-xl overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-8">
                <div className="w-24 h-24 bg-white rounded-full mx-auto mb-4 flex items-center justify-center text-blue-600 text-3xl font-bold">
                  {member.name.charAt(0)}
                </div>
                <h3 className="text-2xl font-bold text-white text-center">{member.name}</h3>
              </div>
              <div className="p-6">
                <p className="text-lg font-semibold text-gray-900 mb-2">{member.title}</p>
                <p className="text-sm text-gray-600 mb-4">{member.credentials}</p>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Specializations</h4>
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
                <p className="text-sm text-gray-600 mb-4 font-semibold">{member.achievements}</p>
                <p className="text-gray-700 italic">"{member.quote}"</p>
              </div>
            </div>
          ))}
        </div>

        {/* Why Work With Us */}
        <section className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Why Work With Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Proven Results</h3>
              <p className="text-gray-600">$6+ billion in sales volume across thousands of successful transactions</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Knowledge</h3>
              <p className="text-gray-600">Deep expertise in Summerlin West luxury real estate market</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Personalized Service</h3>
              <p className="text-gray-600">Dedicated to your success with custom-tailored approach</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg shadow-xl p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Experience the Difference?
          </h2>
          <p className="text-xl text-blue-100 mb-6">
            Let our expert team guide you through your real estate journey
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Get Started Today
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
