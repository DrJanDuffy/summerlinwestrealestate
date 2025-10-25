'use client';

import SEOAuditComponent from '../../../components/seo/SEOAuditComponent';

// Contact page audit data
const contactPageAuditData = {
  pageTitle: 'Contact Dr. Jan Duffy | Top Summerlin West Real Estate Expert | Call (702) 550-0112',
  metaDescription: 'Contact Dr. Jan Duffy, top Summerlin West real estate expert with $6B+ in sales! Get personalized help with luxury homes, market insights, and expert guidance. Call (702) 550-0112 today!',
  structuredData: true,
  coreWebVitals: {
    lcp: 1.7, // Excellent
    cls: 0.02, // Excellent
    fid: 70 // Excellent
  },
  mobileResponsive: true,
  imageAltText: 92, // High percentage with alt text
  internalLinks: 10,
  keywordDensity: {
    primary: 3.1, // "contact" appears 3.1% of the time
    secondary: 2.7 // "Dr. Jan Duffy" appears 2.7% of the time
  },
  locationKeywords: ['Summerlin West', 'Las Vegas', 'The Vistas', 'Red Rock Canyon', 'Nevada'],
  realEstateElements: [
    'contact forms',
    'lead capture',
    'phone number',
    'email contact',
    'office information',
    'agent information',
    'service areas',
    'consultation booking',
    'market insights',
    'expert guidance',
    'personalized help',
    'real estate consultation'
  ]
};

export default function ContactAuditPage() {
  const handleRecommendations = (recommendations: string[]) => {
    console.log('Contact Page SEO Recommendations:', recommendations);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Contact Page SEO Audit
          </h1>
          <p className="text-lg text-gray-600">
            Lead capture optimization and contact form analysis
          </p>
        </div>
        
        <SEOAuditComponent 
          data={contactPageAuditData} 
          onRecommendations={handleRecommendations}
        />
        
        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Page Analysis</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Lead Capture Strengths</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                <li>Clear contact information with phone number</li>
                <li>Professional agent branding and credentials</li>
                <li>Strong call-to-action in title and description</li>
                <li>Multiple contact methods available</li>
                <li>Service areas clearly defined</li>
                <li>Expert positioning with sales statistics</li>
                <li>Personalized help messaging</li>
                <li>Market insights and guidance offered</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Conversion Optimization Opportunities</h3>
              <ul className="list-disc list-inside space-y-1 text-gray-600">
                <li>Add more specific service offerings</li>
                <li>Include response time expectations</li>
                <li>Add testimonials and reviews</li>
                <li>Include office hours and availability</li>
                <li>Add more contact form fields</li>
                <li>Include FAQ section</li>
                <li>Add video introduction or message</li>
                <li>Include social proof and credentials</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 p-4 bg-green-50 rounded-lg">
            <h4 className="font-semibold text-green-900 mb-2">Key Recommendations for Contact Page:</h4>
            <ol className="list-decimal list-inside space-y-1 text-green-800">
              <li>Implement ContactPage schema markup</li>
              <li>Add more specific service offerings and packages</li>
              <li>Include response time expectations and availability</li>
              <li>Add client testimonials and success stories</li>
              <li>Include office hours and contact preferences</li>
              <li>Add FAQ section addressing common questions</li>
              <li>Include video introduction or personalized message</li>
              <li>Add social proof and additional credentials</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
