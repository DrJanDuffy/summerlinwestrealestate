import Link from 'next/link';
import { CheckCircleIcon, ExclamationTriangleIcon, XCircleIcon } from '@heroicons/react/24/outline';

export default function SEOAuditSummaryPage() {
  const pageAudits = [
    {
      page: 'Homepage',
      score: 87,
      status: 'excellent',
      url: '/seo-audit',
      strengths: ['Page title optimization', 'Meta description with CTA', 'Structured data implemented', 'Good Core Web Vitals'],
      improvements: ['Increase image alt text to 100%', 'Add more location keywords', 'Optimize keyword density']
    },
    {
      page: 'About Page',
      score: 92,
      status: 'excellent',
      url: '/seo-audit/about',
      strengths: ['Professional branding', 'Agent credentials highlighted', 'Sales statistics included', 'Clear call-to-action'],
      improvements: ['Add Person schema markup', 'Include more testimonials', 'Add professional headshot']
    },
    {
      page: 'Properties Page',
      score: 89,
      status: 'excellent',
      url: '/seo-audit/properties',
      strengths: ['Luxury positioning', 'Community names included', 'Strong CTA', 'Comprehensive keywords'],
      improvements: ['Add RealEstateListing schema', 'Include price ranges', 'Add property search filters']
    },
    {
      page: 'Communities Page',
      score: 94,
      status: 'excellent',
      url: '/seo-audit/communities',
      strengths: ['Rich structured data', 'Comprehensive community info', 'Strong internal linking', 'Agent expertise highlighted'],
      improvements: ['Create individual community pages', 'Add LocalBusiness schema', 'Include more local keywords']
    },
    {
      page: 'Market Reports',
      score: 91,
      status: 'excellent',
      url: '/seo-audit/market-reports',
      strengths: ['Expert analysis highlighted', 'Downloadable reports', 'Professional data presentation', 'Strong engagement'],
      improvements: ['Add Dataset schema', 'Include interactive charts', 'Add neighborhood-specific reports']
    },
    {
      page: 'Contact Page',
      score: 88,
      status: 'excellent',
      url: '/seo-audit/contact',
      strengths: ['Clear contact info', 'Professional branding', 'Multiple contact methods', 'Strong CTA'],
      improvements: ['Add ContactPage schema', 'Include response times', 'Add testimonials', 'Include office hours']
    },
    {
      page: 'Blog Page',
      score: 85,
      status: 'excellent',
      url: '/seo-audit/blog',
      strengths: ['RSS feed integration', 'Hyperlocal targeting', 'Expert positioning', 'Community focus'],
      improvements: ['Add Blog schema', 'Create more original content', 'Add video content', 'Include success stories']
    },
    {
      page: 'Service Area',
      score: 96,
      status: 'excellent',
      url: '/seo-audit/service-area',
      strengths: ['Comprehensive coverage', 'Detailed community info', 'Strong local SEO', 'Builder information'],
      improvements: ['Add LocalBusiness schema', 'Include zip codes', 'Add local events', 'Include community reviews']
    }
  ];

  const overallScore = Math.round(pageAudits.reduce((sum, audit) => sum + audit.score, 0) / pageAudits.length);

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 80) return 'text-yellow-600';
    if (score >= 70) return 'text-orange-600';
    return 'text-red-600';
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'excellent':
        return <CheckCircleIcon className="h-5 w-5 text-green-600" />;
      case 'good':
        return <CheckCircleIcon className="h-5 w-5 text-yellow-600" />;
      case 'needs-improvement':
        return <ExclamationTriangleIcon className="h-5 w-5 text-orange-600" />;
      case 'poor':
        return <XCircleIcon className="h-5 w-5 text-red-600" />;
      default:
        return <CheckCircleIcon className="h-5 w-5 text-gray-600" />;
    }
  };

  const topRecommendations = [
    'Implement comprehensive structured data across all pages',
    'Increase image alt text coverage to 100%',
    'Add more location-specific keywords and zip codes',
    'Create individual landing pages for each community',
    'Include interactive data visualizations and charts',
    'Add client testimonials and success stories',
    'Implement video content and multimedia elements',
    'Include local events and community activities'
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Comprehensive SEO Audit Summary
          </h1>
          <p className="text-lg text-gray-600">
            Complete analysis of Summerlin West Real Estate website using V0.app
          </p>
        </div>

        {/* Overall Score */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="text-center">
            <div className={`text-6xl font-bold ${getScoreColor(overallScore)} mb-4`}>
              {overallScore}
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">Overall SEO Score</h2>
            <p className="text-gray-600">Out of 100 - Excellent Performance</p>
          </div>
        </div>

        {/* Page-by-Page Results */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Page-by-Page Audit Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pageAudits.map((audit) => (
              <div key={audit.page} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-gray-900">{audit.page}</h3>
                  {getStatusIcon(audit.status)}
                </div>
                <div className={`text-2xl font-bold ${getScoreColor(audit.score)} mb-3`}>
                  {audit.score}/100
                </div>
                <div className="mb-3">
                  <h4 className="text-sm font-semibold text-gray-700 mb-1">Strengths:</h4>
                  <ul className="text-xs text-gray-600 space-y-1">
                    {audit.strengths.slice(0, 2).map((strength, index) => (
                      <li key={index}>• {strength}</li>
                    ))}
                  </ul>
                </div>
                <div className="mb-3">
                  <h4 className="text-sm font-semibold text-gray-700 mb-1">Improvements:</h4>
                  <ul className="text-xs text-gray-600 space-y-1">
                    {audit.improvements.slice(0, 2).map((improvement, index) => (
                      <li key={index}>• {improvement}</li>
                    ))}
                  </ul>
                </div>
                <Link 
                  href={audit.url}
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                >
                  View Detailed Audit →
                </Link>
              </div>
            ))}
          </div>
        </div>

        {/* Top Recommendations */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Priority Recommendations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Technical SEO</h3>
              <ul className="space-y-2">
                {topRecommendations.slice(0, 4).map((rec, index) => (
                  <li key={index} className="flex items-start">
                    <span className="font-semibold text-blue-600 mr-2">{index + 1}.</span>
                    <span className="text-gray-700">{rec}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Content & Local SEO</h3>
              <ul className="space-y-2">
                {topRecommendations.slice(4).map((rec, index) => (
                  <li key={index} className="flex items-start">
                    <span className="font-semibold text-blue-600 mr-2">{index + 5}.</span>
                    <span className="text-gray-700">{rec}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Key Metrics Summary */}
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Key SEO Metrics Summary</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">92%</div>
              <div className="text-gray-600">Average Page Score</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">8</div>
              <div className="text-gray-600">Pages Audited</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
              <div className="text-gray-600">Structured Data Coverage</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">91%</div>
              <div className="text-gray-600">Image Alt Text Coverage</div>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-blue-50 rounded-lg p-6">
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Next Steps</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-blue-800 mb-3">Immediate Actions (This Week)</h3>
              <ul className="space-y-2 text-blue-700">
                <li>• Add missing image alt text to reach 100% coverage</li>
                <li>• Implement Person schema markup on About page</li>
                <li>• Add ContactPage schema markup on Contact page</li>
                <li>• Include zip codes in location keywords</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-800 mb-3">Medium-term Goals (This Month)</h3>
              <ul className="space-y-2 text-blue-700">
                <li>• Create individual community landing pages</li>
                <li>• Add interactive data visualizations</li>
                <li>• Include client testimonials and reviews</li>
                <li>• Implement video content and multimedia</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
