'use client';

import SEOAuditComponent from '../../../components/seo/SEOAuditComponent';

// Communities page audit data
const communitiesPageAuditData = {
  pageTitle: 'Summerlin West Communities | Luxury Neighborhoods & Homes for Sale',
  metaDescription:
    'Explore all Summerlin West communities including The Vistas, Redpoint, Stonebridge & more. Find neighborhood guides, amenities, and expert insights for Summerlin real estate.',
  structuredData: true,
  coreWebVitals: {
    lcp: 2.0, // Good
    cls: 0.06, // Good
    fid: 90, // Good
  },
  mobileResponsive: true,
  imageAltText: 95, // High percentage with alt text
  internalLinks: 20,
  keywordDensity: {
    primary: 3.5, // "Summerlin West" appears 3.5% of the time
    secondary: 2.8, // "communities" appears 2.8% of the time
  },
  locationKeywords: [
    'Summerlin West',
    'Las Vegas',
    'The Vistas',
    'Redpoint',
    'Stonebridge',
    'The Paseos',
    'Reverence',
    'Nevada',
  ],
  realEstateElements: [
    'community listings',
    'neighborhood guides',
    'amenities information',
    'price ranges',
    'home types',
    'school information',
    'market data',
    'community comparison',
    'agent information',
    'contact forms',
    'property search',
    'virtual tours',
  ],
};

export default function CommunitiesAuditPage() {
  const handleRecommendations = (recommendations: string[]) => {
    console.log('Communities Page SEO Recommendations:', recommendations);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Communities Page SEO Audit</h1>
          <p className="text-lg text-gray-600">
            Neighborhood content and community information analysis
          </p>
        </div>

        <SEOAuditComponent
          data={communitiesPageAuditData}
          onRecommendations={handleRecommendations}
        />

        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Communities Page Analysis</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Community Content Strengths
              </h3>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                <li>Comprehensive community listings with detailed information</li>
                <li>Rich structured data with ItemList schema</li>
                <li>Detailed community descriptions and amenities</li>
                <li>Price ranges and home types for each community</li>
                <li>School information and ratings</li>
                <li>Community comparison table</li>
                <li>Agent expertise highlighted (Dr. Jan Duffy)</li>
                <li>Strong internal linking structure</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Local SEO Opportunities</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                <li>Add more specific neighborhood keywords</li>
                <li>Include local business listings and services</li>
                <li>Add community-specific landing pages</li>
                <li>Include local events and activities</li>
                <li>Add more location-specific content</li>
                <li>Include transportation and commute information</li>
                <li>Add local market trends and data</li>
                <li>Include community reviews and testimonials</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 p-4 bg-purple-50 rounded-lg">
            <h4 className="font-semibold text-purple-900 mb-2">
              Key Recommendations for Communities Page:
            </h4>
            <ol className="list-decimal list-inside space-y-1 text-purple-800">
              <li>Create individual community landing pages for each neighborhood</li>
              <li>Add LocalBusiness schema for each community</li>
              <li>Include more specific location keywords (zip codes, street names)</li>
              <li>Add community-specific amenities and services</li>
              <li>Include local market data and trends</li>
              <li>Add community reviews and resident testimonials</li>
              <li>Include transportation and commute information</li>
              <li>Add local events and community activities</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
