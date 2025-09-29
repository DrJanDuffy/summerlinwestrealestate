'use client';

import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { waitForRealScoutElements } from '../../lib/realscout-config';

// Dynamically import RealScout components for better performance
const RealScoutWidget = dynamic(() => import('./RealScoutWidget'), { ssr: false });
const RealScoutAdvancedSearch = dynamic(() => import('./RealScoutAdvancedSearch'), { ssr: false });
const RealScoutLeadCapture = dynamic(() => import('./RealScoutLeadCapture'), { ssr: false });
const RealScoutPropertyValuation = dynamic(() => import('./RealScoutPropertyValuation'), { ssr: false });
const RealScoutMarketInsights = dynamic(() => import('./RealScoutMarketInsights'), { ssr: false });
const RealScoutListings = dynamic(() => import('./RealScoutListings'), { ssr: false });

interface RealScoutSEOOptimizerProps {
  pageType: 'homepage' | 'properties' | 'communities' | 'about' | 'contact' | 'market-reports' | 'blog';
  location?: string;
  community?: string;
  className?: string;
}

export default function RealScoutSEOOptimizer({
  pageType,
  location: _location = 'Summerlin West, Las Vegas, NV',
  community = 'Summerlin West',
  className = '',
}: RealScoutSEOOptimizerProps) {
  const [widgetsLoaded, setWidgetsLoaded] = useState(false);

  useEffect(() => {
    const loadWidgets = async () => {
      try {
        const elementsLoaded = await waitForRealScoutElements(10000);
        if (elementsLoaded) {
          setWidgetsLoaded(true);
        }
      } catch (error) {
        console.error('Error loading RealScout widgets for SEO optimization:', error);
      }
    };

    loadWidgets();
  }, []);

  // Add structured data for RealScout widgets
  useEffect(() => {
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'RealEstateAgent',
      name: 'Dr. Jan Duffy',
      description: 'Premier real estate agent specializing in Summerlin West luxury properties',
      url: 'https://summerlinwestrealestate.com',
      telephone: '+1-702-550-0112',
      email: 'DrJanSells@SummerlinWestRealEstate.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '1980 Festival Plaza Dr',
        addressLocality: 'Las Vegas',
        addressRegion: 'NV',
        postalCode: '89135',
        addressCountry: 'US'
      },
      areaServed: {
        '@type': 'City',
        name: 'Las Vegas',
        containedInPlace: {
          '@type': 'State',
          name: 'Nevada'
        }
      },
      knowsAbout: [
        'Summerlin West Real Estate',
        'Luxury Homes',
        'Property Valuation',
        'Market Analysis',
        'Real Estate Investment'
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Real Estate Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Property Search',
              description: 'Advanced MLS search for Summerlin West properties'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Property Valuation',
              description: 'Free home valuation and market analysis'
            }
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Market Insights',
              description: 'Real-time market data and trends'
            }
          }
        ]
      }
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(structuredData);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  // Render widgets based on page type for optimal SEO
  const renderPageSpecificWidgets = () => {
    switch (pageType) {
      case 'homepage':
        return (
          <div className={`real-scout-seo-homepage ${className}`}>
            {/* Hero Search Widget */}
            <section className="mb-12" aria-label="Property Search">
              <RealScoutAdvancedSearch
                title="Find Your Dream Home in Summerlin West"
                subtitle="Search by neighborhood, price, or features. Real-time MLS data."
                variant="page"
                showFeatures={true}
                priceMin={400000}
                priceMax={2000000}
                communities={['The Vistas', 'Stonebridge', 'Redpoint', 'Reverence']}
              />
            </section>

            {/* Featured Listings */}
            <section className="mb-12" aria-label="Featured Properties">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                Featured Luxury Homes in Summerlin West
              </h2>
              <RealScoutWidget
                variant="office-listings"
                priceMin={600000}
                priceMax={2000000}
                className="mt-6"
              />
            </section>

            {/* Market Insights */}
            <section className="mb-12" aria-label="Market Insights">
              <RealScoutMarketInsights
                title="Summerlin West Market Insights"
                subtitle="Real-time market data and trends for informed decisions"
                variant="full"
                showCharts={true}
                showTrends={true}
                showComparisons={true}
              />
            </section>

            {/* Lead Capture */}
            <section className="mb-12" aria-label="Get Market Report">
              <RealScoutLeadCapture
                variant="inline"
                title="Get Your Free Summerlin West Market Report"
                subtitle="Stay ahead of the market with our exclusive insights"
                source="Homepage"
                community={community}
              />
            </section>
          </div>
        );

      case 'properties':
        return (
          <div className={`real-scout-seo-properties ${className}`}>
            {/* Advanced Search */}
            <section className="mb-12" aria-label="Property Search">
              <RealScoutAdvancedSearch
                title="Search All Summerlin West Properties"
                subtitle="Use our comprehensive search tool to find properties matching your exact criteria"
                variant="page"
                showFeatures={true}
                priceMin={400000}
                priceMax={2000000}
              />
            </section>

            {/* All Listings */}
            <section className="mb-12" aria-label="All Properties">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                All Luxury Properties in Summerlin West
              </h2>
              <RealScoutListings
                agentId="QWdlbnQtMjI1MDUw"
                priceMin={400000}
                priceMax={2000000}
                maxListings={24}
              />
            </section>

            {/* Lead Capture */}
            <section className="mb-12" aria-label="Contact Agent">
              <RealScoutLeadCapture
                variant="inline"
                title="Schedule a Property Tour"
                subtitle="Contact Dr. Jan Duffy to schedule a private showing"
                source="Properties Page"
                community={community}
              />
            </section>
          </div>
        );

      case 'communities':
        return (
          <div className={`real-scout-seo-communities ${className}`}>
            {/* Community-Specific Search */}
            <section className="mb-12" aria-label="Community Search">
              <RealScoutAdvancedSearch
                title={`Find Homes in ${community}`}
                subtitle={`Discover luxury properties in ${community} with real-time MLS data`}
                variant="page"
                showFeatures={true}
                communities={[community]}
              />
            </section>

            {/* Community Listings */}
            <section className="mb-12" aria-label="Community Properties">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                Luxury Homes in {community}
              </h2>
              <RealScoutWidget
                variant="office-listings"
                priceMin={500000}
                priceMax={1500000}
                className="mt-6"
              />
            </section>

            {/* Property Valuation */}
            <section className="mb-12" aria-label="Property Valuation">
              <RealScoutPropertyValuation
                title={`Get Your ${community} Home Valuation`}
                subtitle="Discover your home's current market value with our advanced analysis"
                variant="full"
                showComparables={true}
                showMarketAnalysis={true}
                showLeadCapture={true}
              />
            </section>

            {/* Lead Capture */}
            <section className="mb-12" aria-label="Community Information">
              <RealScoutLeadCapture
                variant="inline"
                title={`Get ${community} Market Report`}
                subtitle="Stay informed about your community's real estate market"
                source="Community Page"
                community={community}
              />
            </section>
          </div>
        );

      case 'about':
        return (
          <div className={`real-scout-seo-about ${className}`}>
            {/* Property Valuation */}
            <section className="mb-12" aria-label="Property Valuation">
              <RealScoutPropertyValuation
                title="Get Your Free Property Valuation"
                subtitle="Discover your home's current market value with Dr. Jan Duffy's expert analysis"
                variant="full"
                showComparables={true}
                showMarketAnalysis={true}
                showLeadCapture={true}
              />
            </section>

            {/* Featured Listings */}
            <section className="mb-12" aria-label="Featured Properties">
              <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
                Featured Summerlin West Properties
              </h2>
              <RealScoutWidget
                variant="office-listings"
                priceMin={600000}
                priceMax={2000000}
                className="mt-6"
              />
            </section>

            {/* Lead Capture */}
            <section className="mb-12" aria-label="Contact Dr. Jan Duffy">
              <RealScoutLeadCapture
                variant="inline"
                title="Schedule a Consultation"
                subtitle="Contact Dr. Jan Duffy for personalized real estate guidance"
                source="About Page"
                community={community}
              />
            </section>
          </div>
        );

      case 'contact':
        return (
          <div className={`real-scout-seo-contact ${className}`}>
            {/* Lead Capture */}
            <section className="mb-12" aria-label="Contact Form">
            <RealScoutLeadCapture
              variant="inline"
              title="Get Your Free Summerlin West Market Report"
              subtitle="Stay ahead of the market with our exclusive insights and expert guidance"
              source="Contact Page"
              community={community}
              showMarketReport={true}
              showValuation={true}
              showConsultation={true}
            />
            </section>

            {/* Property Valuation */}
            <section className="mb-12" aria-label="Property Valuation">
              <RealScoutPropertyValuation
                title="Get Your Home Valuation"
                subtitle="Discover your home's current market value with our advanced analysis"
                variant="full"
                showComparables={true}
                showMarketAnalysis={true}
                showLeadCapture={true}
              />
            </section>

            {/* Quick Search */}
            <section className="mb-12" aria-label="Quick Property Search">
              <RealScoutAdvancedSearch
                title="Quick Property Search"
                subtitle="Search for properties while you're here"
                variant="sidebar"
                showFeatures={true}
                priceMin={400000}
                priceMax={2000000}
              />
            </section>
          </div>
        );

      case 'market-reports':
        return (
          <div className={`real-scout-seo-market-reports ${className}`}>
            {/* Market Insights */}
            <section className="mb-12" aria-label="Market Insights">
              <RealScoutMarketInsights
                title="Summerlin West Market Insights"
                subtitle="Real-time market data and trends for informed decisions"
                variant="full"
                showCharts={true}
                showTrends={true}
                showComparisons={true}
                communities={['The Vistas', 'Stonebridge', 'Redpoint', 'Reverence']}
              />
            </section>

            {/* Property Search */}
            <section className="mb-12" aria-label="Property Search">
              <RealScoutAdvancedSearch
                title="Find Properties in Current Market"
                subtitle="Search for properties based on current market conditions"
                variant="page"
                showFeatures={true}
                priceMin={400000}
                priceMax={2000000}
              />
            </section>

            {/* Lead Capture */}
            <section className="mb-12" aria-label="Market Report Subscription">
              <RealScoutLeadCapture
                variant="inline"
                title="Subscribe to Monthly Market Reports"
                subtitle="Get exclusive market insights delivered to your inbox"
                source="Market Reports Page"
                community={community}
                showMarketReport={true}
              />
            </section>
          </div>
        );

      case 'blog':
        return (
          <div className={`real-scout-seo-blog ${className}`}>
            {/* Lead Capture */}
            <section className="mb-12" aria-label="Newsletter Signup">
              <RealScoutLeadCapture
                variant="inline"
                title="Subscribe to Our Newsletter"
                subtitle="Get the latest market insights and property updates"
                source="Blog Page"
                community={community}
                showMarketReport={true}
              />
            </section>

            {/* Property Search */}
            <section className="mb-12" aria-label="Property Search">
              <RealScoutAdvancedSearch
                title="Search Properties Mentioned in Our Blog"
                subtitle="Find properties related to our latest market insights"
                variant="sidebar"
                showFeatures={true}
                priceMin={400000}
                priceMax={2000000}
              />
            </section>
          </div>
        );

      default:
        return (
          <div className={`real-scout-seo-default ${className}`}>
            <RealScoutWidget
              variant="office-listings"
              priceMin={600000}
              priceMax={2000000}
              className="mt-6"
            />
          </div>
        );
    }
  };

  if (!widgetsLoaded) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        <span className="ml-3 text-gray-600">Loading RealScout widgets...</span>
      </div>
    );
  }

  return (
    <div className="real-scout-seo-optimizer">
      {renderPageSpecificWidgets()}
    </div>
  );
}
