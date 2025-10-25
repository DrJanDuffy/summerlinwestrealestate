'use client';

import SEOAuditComponent from '../../../components/seo/SEOAuditComponent';

// Properties page audit data
const propertiesPageAuditData = {
  pageTitle: 'Luxury Homes for Sale in Summerlin West | Dr. Jan Duffy REALTOR® | $6B+ Sales',
  metaDescription: 'Browse exclusive luxury homes for sale in Summerlin West! Dr. Jan Duffy, REALTOR® with $6B+ sales. The Vistas, Red Rock Canyon views, resort amenities. Call (702) 550-0112!',
  structuredData: true,
  coreWebVitals: {
    lcp: 2.3, // Good
    cls: 0.08, // Good
    fid: 95 // Good
  },
  mobileResponsive: true,
  imageAltText: 90, // High percentage with alt text
  internalLinks: 15,
  keywordDensity: {
    primary: 2.8, // "luxury homes" appears 2.8% of the time
    secondary: 2.2 // "Summerlin West" appears 2.2% of the time
  },
  locationKeywords: ['Summerlin West', 'Las Vegas', 'The Vistas', 'Red Rock Canyon', 'Stonebridge', 'Nevada'],
  realEstateElements: [
    'property listings',
    'search filters',
    'property details',
    'image galleries',
    'virtual tours',
    'market data',
    'contact forms',
    'agent information',
    'neighborhood information',
    'price ranges',
    'property types',
    'amenities'
  ]
};

export default function PropertiesAuditPage() {
  const handleRecommendations = (recommendations: string[]) => {
    console.log('Properties Page SEO Recommendations:', recommendations);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Properties Page SEO Audit
          </h1>
          <p className="text-lg text-gray-600">
            Property listings optimization and search functionality analysis
          </p>
        </div>
        
        <SEOAuditComponent 
          data={propertiesPageAuditData} 
          onRecommendations={handleRecommendations}
        />
        
        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Properties Page Analysis</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Property Listing Strengths</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                <li>Clear luxury positioning in title</li>
                <li>Specific location keywords included</li>
                <li>Agent branding with sales statistics</li>
                <li>Community names mentioned (The Vistas, Stonebridge)</li>
                <li>Amenities highlighted (Red Rock Canyon views)</li>
                <li>Strong call-to-action with phone number</li>
                <li>Comprehensive keyword targeting</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Search Optimization Opportunities</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                <li>Add more specific property type keywords</li>
                <li>Include price range information</li>
                <li>Add more neighborhood-specific terms</li>
                <li>Include property features and amenities</li>
                <li>Add more internal links to community pages</li>
                <li>Include recent sales data</li>
                <li>Add property search filters</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-green-50 rounded-lg">
            <h4 className="font-semibold text-green-900 mb-2">Key Recommendations for Properties Page:</h4>
            <ol className="list-decimal list-inside space-y-1 text-green-800">
              <li>Implement RealEstateListing schema markup for each property</li>
              <li>Add more specific property type keywords (condos, townhomes, single-family)</li>
              <li>Include price range filters and information</li>
              <li>Add neighborhood-specific landing pages</li>
              <li>Include property search functionality</li>
              <li>Add recent sales and market data</li>
              <li>Implement property comparison features</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
