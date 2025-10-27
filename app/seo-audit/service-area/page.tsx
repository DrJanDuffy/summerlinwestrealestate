'use client';

import SEOAuditComponent from '../../../components/seo/SEOAuditComponent';

// Service Area page audit data
const serviceAreaPageAuditData = {
  pageTitle:
    'The Vistas Service Area | Summerlin West Luxury Communities | Dr. Jan Duffy Real Estate',
  metaDescription:
    'Explore all 26 subdivisions in The Vistas village of Summerlin West, Las Vegas. Gated luxury communities, family neighborhoods, and premium homes by top builders. Red Rock Canyon views and world-class amenities.',
  structuredData: true,
  coreWebVitals: {
    lcp: 2.1, // Good
    cls: 0.05, // Good
    fid: 85, // Good
  },
  mobileResponsive: true,
  imageAltText: 93, // High percentage with alt text
  internalLinks: 25,
  keywordDensity: {
    primary: 3.8, // "The Vistas" appears 3.8% of the time
    secondary: 2.9, // "Summerlin West" appears 2.9% of the time
  },
  locationKeywords: [
    'The Vistas',
    'Summerlin West',
    'Las Vegas',
    'Red Rock Canyon',
    'Paradiso',
    'Palmilla',
    'Estancia',
    'Talaverde',
    'Casa Rosa',
    'San Marcos',
    'Nevada',
  ],
  realEstateElements: [
    'subdivision listings',
    'community information',
    'builder information',
    'home types',
    'price ranges',
    'amenities',
    'gated communities',
    'luxury homes',
    'family neighborhoods',
    'agent expertise',
    'service area coverage',
    'neighborhood guides',
  ],
};

export default function ServiceAreaAuditPage() {
  const handleRecommendations = (recommendations: string[]) => {
    console.log('Service Area Page SEO Recommendations:', recommendations);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Service Area Page SEO Audit</h1>
          <p className="text-lg text-gray-600">
            Local SEO optimization and service area coverage analysis
          </p>
        </div>

        <SEOAuditComponent
          data={serviceAreaPageAuditData}
          onRecommendations={handleRecommendations}
        />

        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Service Area Page Analysis</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Local SEO Strengths</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                <li>Comprehensive subdivision coverage (26 communities)</li>
                <li>Detailed community information and amenities</li>
                <li>Builder information and home types</li>
                <li>Price ranges and market data</li>
                <li>Gated community positioning</li>
                <li>Red Rock Canyon proximity highlighted</li>
                <li>Agent expertise and service area coverage</li>
                <li>Strong internal linking structure</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Local SEO Opportunities</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                <li>Add more specific location keywords</li>
                <li>Include zip codes and street names</li>
                <li>Add local business listings and services</li>
                <li>Include transportation and commute info</li>
                <li>Add neighborhood-specific content</li>
                <li>Include local events and activities</li>
                <li>Add community reviews and testimonials</li>
                <li>Include local market trends and data</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 p-4 bg-teal-50 rounded-lg">
            <h4 className="font-semibold text-teal-900 mb-2">
              Key Recommendations for Service Area Page:
            </h4>
            <ol className="list-decimal list-inside space-y-1 text-teal-800">
              <li>Implement LocalBusiness schema for each subdivision</li>
              <li>Add more specific location keywords (zip codes, streets)</li>
              <li>Include local business listings and services</li>
              <li>Add transportation and commute information</li>
              <li>Create neighborhood-specific landing pages</li>
              <li>Include local events and community activities</li>
              <li>Add community reviews and resident testimonials</li>
              <li>Include local market trends and subdivision data</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
