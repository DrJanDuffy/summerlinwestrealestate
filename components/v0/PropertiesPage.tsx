/**
 * V0.app Generated: SEO-Optimized Properties Page
 * Keywords: Summerlin West homes for sale, luxury real estate listings, property search
 */
'use client';

import { useEffect, useRef, useState } from 'react';

export default function PropertiesPage() {
  const [widgetState, setWidgetState] = useState<'loading' | 'ready' | 'error'>('loading');
  const searchPlaceholderId = useRef('realscout-search-placeholder');

  useEffect(() => {
    // Add structured data for SEO
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'RealEstateAgent',
      name: 'Dr. Jan Duffy',
      jobTitle: 'REALTOR®',
      telephone: '+1-702-550-0112'
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);

    // Add widget styles
    const style = document.createElement('style');
    style.textContent = `
      realscout-advanced-search {
        --rs-as-button-text-color: #ffffff;
        --rs-as-background-color: #000000;
        --rs-as-button-color: #d0021b;
        --rs-as-widget-width: 100% !important;
      }
    `;
    document.head.appendChild(style);

    // Load RealScout widget with improved error handling
    const existingScript = document.getElementById('realscout-script');
    
    if (!existingScript) {
      const realscoutScript = document.createElement('script');
      realscoutScript.id = 'realscout-script';
      realscoutScript.src = 'https://em.realscout.com/widgets/realscout-web-components.umd.js';
      realscoutScript.type = 'module';
      
      realscoutScript.onload = () => {
        // Add longer delay to ensure widget is fully ready
        setTimeout(() => {
          const container = document.getElementById(searchPlaceholderId.current);
          if (container) {
            container.innerHTML = '<realscout-advanced-search agent-encoded-id="QWdlbnQtMjI1MDUw"></realscout-advanced-search>';
            setWidgetState('ready');
          }
        }, 1000);
      };
      
      realscoutScript.onerror = () => {
        console.error('Failed to load RealScout widget');
        setWidgetState('error');
      };
      
      document.head.appendChild(realscoutScript);
    } else {
      // Script already loaded, just inject widget
      setTimeout(() => {
        const container = document.getElementById('realscout-search-placeholder');
        if (container) {
          container.innerHTML = '<realscout-advanced-search agent-encoded-id="QWdlbnQtMjI1MDUw"></realscout-advanced-search>';
          setWidgetState('ready');
        }
      }, 100);
    }

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Summerlin West Homes for Sale
          </h1>
          <p className="text-xl text-gray-600 mb-2">
            Luxury Real Estate Listings by Dr. Jan Duffy, Top Summerlin West Agent
          </p>
          <p className="text-lg text-gray-500">
            Search Luxury Homes in The Vistas, San Marcos, Casa Rosa, and More
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-12">
        {/* RealScout Advanced Search Widget */}
        <section className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Find Your Dream Home</h2>
          <div id={searchPlaceholderId.current}>
            {widgetState === 'loading' && (
              <p className="text-center text-gray-600">Loading property search...</p>
            )}
            {widgetState === 'error' && (
              <p className="text-center text-red-600">Unable to load property search. Please contact us for assistance.</p>
            )}
          </div>
        </section>

        {/* Property Types */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Browse by Property Type</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 h-48"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Luxury Single-Family Homes</h3>
                <p className="text-gray-600 mb-4">
                  Explore luxury homes in Summerlin West's most prestigious communities
                </p>
                <a href="/properties" className="text-blue-600 font-semibold hover:text-blue-700">
                  View Listings →
                </a>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-r from-green-600 to-green-700 h-48"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Investment Properties</h3>
                <p className="text-gray-600 mb-4">
                  Income-producing properties in prime Summerlin West locations
                </p>
                <a href="/properties" className="text-green-600 font-semibold hover:text-green-700">
                  View Listings →
                </a>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-gradient-to-r from-purple-600 to-purple-700 h-48"></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Luxury Estates</h3>
                <p className="text-gray-600 mb-4">
                  Exclusive estates with premium amenities and Red Rock Canyon views
                </p>
                <a href="/properties" className="text-purple-600 font-semibold hover:text-purple-700">
                  View Listings →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl shadow-xl p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need Help Finding the Perfect Home?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Work with Dr. Jan Duffy, Summerlin West's top luxury real estate agent
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Schedule Consultation
            </a>
            <a
              href="tel:+17025500112"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Call (702) 550-0112
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
