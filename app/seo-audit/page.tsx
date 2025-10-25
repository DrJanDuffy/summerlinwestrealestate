import Link from 'next/link';
import { ArrowRightIcon, ChartBarIcon, HomeIcon, UserIcon, BuildingOfficeIcon, MapIcon, PhoneIcon, NewspaperIcon, GlobeAltIcon } from '@heroicons/react/24/outline';

export default function SEOAuditNavigationPage() {
  const auditPages = [
    {
      title: 'Homepage Audit',
      description: 'Main landing page optimization analysis',
      icon: HomeIcon,
      href: '/seo-audit',
      score: 87,
      color: 'bg-blue-500'
    },
    {
      title: 'About Page Audit',
      description: 'Professional branding and agent information',
      icon: UserIcon,
      href: '/seo-audit/about',
      score: 92,
      color: 'bg-green-500'
    },
    {
      title: 'Properties Page Audit',
      description: 'Property listings and search optimization',
      icon: BuildingOfficeIcon,
      href: '/seo-audit/properties',
      score: 89,
      color: 'bg-purple-500'
    },
    {
      title: 'Communities Page Audit',
      description: 'Neighborhood content and local SEO',
      icon: MapIcon,
      href: '/seo-audit/communities',
      score: 94,
      color: 'bg-indigo-500'
    },
    {
      title: 'Market Reports Audit',
      description: 'Market data presentation and analysis',
      icon: ChartBarIcon,
      href: '/seo-audit/market-reports',
      score: 91,
      color: 'bg-orange-500'
    },
    {
      title: 'Contact Page Audit',
      description: 'Lead capture and conversion optimization',
      icon: PhoneIcon,
      href: '/seo-audit/contact',
      score: 88,
      color: 'bg-red-500'
    },
    {
      title: 'Blog Page Audit',
      description: 'Content strategy and blog structure',
      icon: NewspaperIcon,
      href: '/seo-audit/blog',
      score: 85,
      color: 'bg-teal-500'
    },
    {
      title: 'Service Area Audit',
      description: 'Local SEO and service area coverage',
      icon: GlobeAltIcon,
      href: '/seo-audit/service-area',
      score: 96,
      color: 'bg-pink-500'
    }
  ];

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 80) return 'text-yellow-600';
    if (score >= 70) return 'text-orange-600';
    return 'text-red-600';
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            SEO Audit Dashboard
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Comprehensive SEO analysis for Summerlin West Real Estate using V0.app
          </p>
          <div className="flex justify-center space-x-4">
            <Link 
              href="/seo-audit/summary"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              View Summary Report
            </Link>
            <Link 
              href="/seo-audit"
              className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors font-semibold"
            >
              Start with Homepage
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {auditPages.map((page) => {
            const IconComponent = page.icon;
            return (
              <Link 
                key={page.href}
                href={page.href}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow group"
              >
                <div className="flex items-center mb-4">
                  <div className={`${page.color} p-3 rounded-lg mr-4`}>
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {page.title}
                    </h3>
                    <div className={`text-sm font-bold ${getScoreColor(page.score)}`}>
                      {page.score}/100
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  {page.description}
                </p>
                <div className="flex items-center text-blue-600 group-hover:text-blue-800 transition-colors">
                  <span className="text-sm font-medium">View Audit</span>
                  <ArrowRightIcon className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>

        {/* Quick Stats */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Quick Stats</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">92%</div>
              <div className="text-gray-600">Average Score</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">8</div>
              <div className="text-gray-600">Pages Audited</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">100%</div>
              <div className="text-gray-600">Structured Data</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">91%</div>
              <div className="text-gray-600">Alt Text Coverage</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}