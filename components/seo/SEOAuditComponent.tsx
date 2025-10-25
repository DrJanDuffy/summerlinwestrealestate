'use client';

import { useState } from 'react';
import { ChevronDownIcon, ChevronRightIcon, CheckCircleIcon, ExclamationTriangleIcon, XCircleIcon } from '@heroicons/react/24/outline';

interface SEOAuditData {
  pageTitle: string;
  metaDescription: string;
  structuredData: boolean;
  coreWebVitals: {
    lcp: number;
    cls: number;
    fid: number;
  };
  mobileResponsive: boolean;
  imageAltText: number; // percentage with alt text
  internalLinks: number;
  keywordDensity: {
    primary: number;
    secondary: number;
  };
  locationKeywords: string[];
  realEstateElements: string[];
}

interface AuditResult {
  score: number;
  status: 'excellent' | 'good' | 'needs-improvement' | 'poor';
  recommendations: string[];
}

interface SEOAuditComponentProps {
  data: SEOAuditData;
  onRecommendations?: (recommendations: string[]) => void;
}

export default function SEOAuditComponent({ data, onRecommendations }: SEOAuditComponentProps) {
  const [expandedSections, setExpandedSections] = useState<Set<string>>(new Set());

  const toggleSection = (section: string) => {
    const newExpanded = new Set(expandedSections);
    if (newExpanded.has(section)) {
      newExpanded.delete(section);
    } else {
      newExpanded.add(section);
    }
    setExpandedSections(newExpanded);
  };

  const getScoreColor = (score: number) => {
    if (score >= 90) return 'text-green-600';
    if (score >= 70) return 'text-yellow-600';
    if (score >= 50) return 'text-orange-600';
    return 'text-red-600';
  };

  const getStatusIcon = (status: 'excellent' | 'good' | 'needs-improvement' | 'poor') => {
    switch (status) {
      case 'excellent':
        return <CheckCircleIcon className="h-5 w-5 text-green-600" />;
      case 'good':
        return <CheckCircleIcon className="h-5 w-5 text-yellow-600" />;
      case 'needs-improvement':
        return <ExclamationTriangleIcon className="h-5 w-5 text-orange-600" />;
      case 'poor':
        return <XCircleIcon className="h-5 w-5 text-red-600" />;
    }
  };

  const auditPageTitle = (title: string): AuditResult => {
    const length = title.length;
    const hasLocation = title.toLowerCase().includes('summerlin') || title.toLowerCase().includes('las vegas');
    const hasService = title.toLowerCase().includes('homes for sale') || title.toLowerCase().includes('real estate');
    const hasAgent = title.toLowerCase().includes('dr. jan duffy') || title.toLowerCase().includes('realtor');

    let score = 0;
    const recommendations: string[] = [];

    if (length >= 50 && length <= 60) {
      score += 30;
    } else {
      recommendations.push(`Page title should be 50-60 characters (currently ${length})`);
    }

    if (hasLocation) score += 25;
    else recommendations.push('Include location keywords (Summerlin West, Las Vegas)');

    if (hasService) score += 25;
    else recommendations.push('Include service keywords (homes for sale, real estate)');

    if (hasAgent) score += 20;
    else recommendations.push('Include agent branding (Dr. Jan Duffy, REALTOR®)');

    const status = score >= 80 ? 'excellent' : score >= 60 ? 'good' : score >= 40 ? 'needs-improvement' : 'poor';

    return { score, status, recommendations };
  };

  const auditMetaDescription = (description: string): AuditResult => {
    const length = description.length;
    const hasLocation = description.toLowerCase().includes('summerlin') || description.toLowerCase().includes('las vegas');
    const hasCTA = description.includes('Call') || description.includes('Contact') || description.includes('Schedule');
    const hasAgent = description.toLowerCase().includes('dr. jan duffy') || description.toLowerCase().includes('realtor');

    let score = 0;
    const recommendations: string[] = [];

    if (length >= 150 && length <= 160) {
      score += 30;
    } else {
      recommendations.push(`Meta description should be 150-160 characters (currently ${length})`);
    }

    if (hasLocation) score += 25;
    else recommendations.push('Include location keywords for local SEO');

    if (hasCTA) score += 25;
    else recommendations.push('Include a clear call-to-action');

    if (hasAgent) score += 20;
    else recommendations.push('Include agent branding and credentials');

    const status = score >= 80 ? 'excellent' : score >= 60 ? 'good' : score >= 40 ? 'needs-improvement' : 'poor';

    return { score, status, recommendations };
  };

  const auditCoreWebVitals = (vitals: SEOAuditData['coreWebVitals']): AuditResult => {
    let score = 0;
    const recommendations: string[] = [];

    if (vitals.lcp <= 2.5) {
      score += 35;
    } else {
      recommendations.push(`LCP should be ≤2.5s (currently ${vitals.lcp}s)`);
    }

    if (vitals.cls <= 0.1) {
      score += 35;
    } else {
      recommendations.push(`CLS should be ≤0.1 (currently ${vitals.cls})`);
    }

    if (vitals.fid <= 100) {
      score += 30;
    } else {
      recommendations.push(`FID should be ≤100ms (currently ${vitals.fid}ms)`);
    }

    const status = score >= 80 ? 'excellent' : score >= 60 ? 'good' : score >= 40 ? 'needs-improvement' : 'poor';

    return { score, status, recommendations };
  };

  const auditLocationSEO = (keywords: string[]): AuditResult => {
    const requiredKeywords = ['summerlin west', 'las vegas', 'nevada'];
    const foundKeywords = requiredKeywords.filter(keyword => 
      keywords.some(k => k.toLowerCase().includes(keyword))
    );

    const score = (foundKeywords.length / requiredKeywords.length) * 100;
    const recommendations: string[] = [];

    if (foundKeywords.length < requiredKeywords.length) {
      recommendations.push('Include all required location keywords: Summerlin West, Las Vegas, Nevada');
    }

    const status = score >= 80 ? 'excellent' : score >= 60 ? 'good' : score >= 40 ? 'needs-improvement' : 'poor';

    return { score, status, recommendations };
  };

  const auditRealEstateElements = (elements: string[]): AuditResult => {
    const requiredElements = [
      'property listings',
      'market data',
      'community information',
      'contact forms',
      'agent information',
      'neighborhood details'
    ];

    const foundElements = requiredElements.filter(element =>
      elements.some(e => e.toLowerCase().includes(element))
    );

    const score = (foundElements.length / requiredElements.length) * 100;
    const recommendations: string[] = [];

    if (foundElements.length < requiredElements.length) {
      recommendations.push('Include all essential real estate elements for better user experience');
    }

    const status = score >= 80 ? 'excellent' : score >= 60 ? 'good' : score >= 40 ? 'needs-improvement' : 'poor';

    return { score, status, recommendations };
  };

  const pageTitleAudit = auditPageTitle(data.pageTitle);
  const metaDescriptionAudit = auditMetaDescription(data.metaDescription);
  const coreWebVitalsAudit = auditCoreWebVitals(data.coreWebVitals);
  const locationSEOAudit = auditLocationSEO(data.locationKeywords);
  const realEstateElementsAudit = auditRealEstateElements(data.realEstateElements);

  const overallScore = Math.round(
    (pageTitleAudit.score + metaDescriptionAudit.score + coreWebVitalsAudit.score + 
     locationSEOAudit.score + realEstateElementsAudit.score) / 5
  );

  const allRecommendations = [
    ...pageTitleAudit.recommendations,
    ...metaDescriptionAudit.recommendations,
    ...coreWebVitalsAudit.recommendations,
    ...locationSEOAudit.recommendations,
    ...realEstateElementsAudit.recommendations
  ];

  // Call onRecommendations callback if provided
  if (onRecommendations) {
    onRecommendations(allRecommendations);
  }

  const auditSections = [
    {
      id: 'page-title',
      title: 'Page Title Optimization',
      score: pageTitleAudit.score,
      status: pageTitleAudit.status,
      recommendations: pageTitleAudit.recommendations,
      details: `Current title: "${data.pageTitle}" (${data.pageTitle.length} characters)`
    },
    {
      id: 'meta-description',
      title: 'Meta Description',
      score: metaDescriptionAudit.score,
      status: metaDescriptionAudit.status,
      recommendations: metaDescriptionAudit.recommendations,
      details: `Current description: "${data.metaDescription}" (${data.metaDescription.length} characters)`
    },
    {
      id: 'structured-data',
      title: 'Structured Data',
      score: data.structuredData ? 100 : 0,
      status: data.structuredData ? 'excellent' : 'poor',
      recommendations: data.structuredData ? [] : ['Implement JSON-LD structured data for real estate'],
      details: data.structuredData ? 'Structured data implemented' : 'No structured data found'
    },
    {
      id: 'core-web-vitals',
      title: 'Core Web Vitals',
      score: coreWebVitalsAudit.score,
      status: coreWebVitalsAudit.status,
      recommendations: coreWebVitalsAudit.recommendations,
      details: `LCP: ${data.coreWebVitals.lcp}s, CLS: ${data.coreWebVitals.cls}, FID: ${data.coreWebVitals.fid}ms`
    },
    {
      id: 'mobile-responsive',
      title: 'Mobile Responsiveness',
      score: data.mobileResponsive ? 100 : 0,
      status: data.mobileResponsive ? 'excellent' : 'poor',
      recommendations: data.mobileResponsive ? [] : ['Ensure mobile-first responsive design'],
      details: data.mobileResponsive ? 'Mobile responsive' : 'Not mobile responsive'
    },
    {
      id: 'image-alt-text',
      title: 'Image Alt Text',
      score: data.imageAltText,
      status: data.imageAltText >= 90 ? 'excellent' : data.imageAltText >= 70 ? 'good' : data.imageAltText >= 50 ? 'needs-improvement' : 'poor',
      recommendations: data.imageAltText < 90 ? [`Only ${data.imageAltText}% of images have alt text. Aim for 100%.`] : [],
      details: `${data.imageAltText}% of images have alt text`
    },
    {
      id: 'internal-linking',
      title: 'Internal Linking',
      score: data.internalLinks >= 10 ? 100 : (data.internalLinks / 10) * 100,
      status: data.internalLinks >= 10 ? 'excellent' : data.internalLinks >= 5 ? 'good' : data.internalLinks >= 3 ? 'needs-improvement' : 'poor',
      recommendations: data.internalLinks < 10 ? [`Add more internal links (currently ${data.internalLinks}). Aim for 10+ relevant internal links.`] : [],
      details: `${data.internalLinks} internal links found`
    },
    {
      id: 'location-seo',
      title: 'Location-Based SEO',
      score: locationSEOAudit.score,
      status: locationSEOAudit.status,
      recommendations: locationSEOAudit.recommendations,
      details: `Location keywords: ${data.locationKeywords.join(', ')}`
    },
    {
      id: 'real-estate-elements',
      title: 'Real Estate Elements',
      score: realEstateElementsAudit.score,
      status: realEstateElementsAudit.status,
      recommendations: realEstateElementsAudit.recommendations,
      details: `Elements found: ${data.realEstateElements.join(', ')}`
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">SEO Audit Report</h1>
        <div className="flex items-center space-x-4">
          <div className={`text-4xl font-bold ${getScoreColor(overallScore)}`}>
            {overallScore}
          </div>
          <div>
            <div className="text-lg font-semibold text-gray-700">Overall Score</div>
            <div className="text-sm text-gray-500">Out of 100</div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {auditSections.map((section) => (
          <div key={section.id} className="border border-gray-200 rounded-lg">
            <button
              type="button"
              onClick={() => toggleSection(section.id)}
              className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center space-x-3">
                {getStatusIcon(section.status as 'excellent' | 'good' | 'needs-improvement' | 'poor')}
                <span className="font-semibold text-gray-900">{section.title}</span>
                <span className={`text-sm font-medium ${getScoreColor(section.score)}`}>
                  {section.score}/100
                </span>
              </div>
              {expandedSections.has(section.id) ? (
                <ChevronDownIcon className="h-5 w-5 text-gray-500" />
              ) : (
                <ChevronRightIcon className="h-5 w-5 text-gray-500" />
              )}
            </button>

            {expandedSections.has(section.id) && (
              <div className="px-6 pb-4 border-t border-gray-200">
                <div className="pt-4">
                  <div className="text-sm text-gray-600 mb-3">{section.details}</div>
                  
                  {section.recommendations.length > 0 && (
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Recommendations:</h4>
                      <ul className="list-disc list-inside space-y-1">
                        {section.recommendations.map((rec) => (
                          <li key={rec} className="text-sm text-gray-700">{rec}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {allRecommendations.length > 0 && (
        <div className="mt-8 p-6 bg-blue-50 rounded-lg">
          <h3 className="text-lg font-semibold text-blue-900 mb-4">Priority Actions</h3>
          <ul className="space-y-2">
            {allRecommendations.slice(0, 5).map((rec) => (
              <li key={rec} className="text-sm text-blue-800 flex items-start">
                <span className="font-semibold mr-2">{allRecommendations.indexOf(rec) + 1}.</span>
                {rec}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
