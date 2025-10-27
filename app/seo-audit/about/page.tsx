'use client';

import SEOAuditComponent from '../../../components/seo/SEOAuditComponent';

// About page audit data
const aboutPageAuditData = {
  pageTitle: 'Meet Dr. Jan Duffy | Top Summerlin REALTOR® with $6B+ Sales | Expert Guide',
  metaDescription:
    'Meet Dr. Jan Duffy, your trusted Summerlin West real estate expert! $6B+ in sales, 15+ years experience, insider market knowledge. Call (702) 550-0112 for personalized service!',
  structuredData: true,
  coreWebVitals: {
    lcp: 1.8, // Excellent
    cls: 0.03, // Excellent
    fid: 75, // Excellent
  },
  mobileResponsive: true,
  imageAltText: 95, // High percentage with alt text
  internalLinks: 8,
  keywordDensity: {
    primary: 3.2, // "Dr. Jan Duffy" appears 3.2% of the time
    secondary: 2.1, // "Summerlin West" appears 2.1% of the time
  },
  locationKeywords: ['Summerlin West', 'Las Vegas', 'The Vistas', 'Red Rock Canyon', 'Nevada'],
  realEstateElements: [
    'agent information',
    'professional credentials',
    'sales statistics',
    'experience details',
    'contact information',
    'testimonials',
    'team information',
    'service areas',
  ],
};

export default function AboutAuditPage() {
  const handleRecommendations = (recommendations: string[]) => {
    console.log('About Page SEO Recommendations:', recommendations);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Page SEO Audit</h1>
          <p className="text-lg text-gray-600">
            Professional branding and content analysis for Dr. Jan Duffy's About page
          </p>
        </div>

        <SEOAuditComponent data={aboutPageAuditData} onRecommendations={handleRecommendations} />

        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">About Page Analysis</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Professional Branding Strengths
              </h3>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                <li>Clear agent identification with "Dr. Jan Duffy"</li>
                <li>Impressive sales statistics ($6B+ sales)</li>
                <li>Professional credentials highlighted</li>
                <li>Experience timeframe specified (15+ years)</li>
                <li>Clear call-to-action with phone number</li>
                <li>Location-specific expertise mentioned</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                SEO Optimization Opportunities
              </h3>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                <li>Add more location-specific keywords</li>
                <li>Include Berkshire Hathaway HomeServices branding</li>
                <li>Add more internal links to property pages</li>
                <li>Include client testimonials with structured data</li>
                <li>Add professional headshot with descriptive alt text</li>
                <li>Include awards and recognition</li>
              </ul>
            </div>
          </div>

          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <h4 className="font-semibold text-blue-900 mb-2">
              Key Recommendations for About Page:
            </h4>
            <ol className="list-decimal list-inside space-y-1 text-blue-800">
              <li>Add structured data for Person schema (Dr. Jan Duffy)</li>
              <li>Include more specific location keywords (The Vistas, Stonebridge, etc.)</li>
              <li>Add client testimonials with review schema markup</li>
              <li>Include professional headshot with descriptive alt text</li>
              <li>Add links to specific community pages</li>
              <li>Include awards, certifications, and recognition</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
