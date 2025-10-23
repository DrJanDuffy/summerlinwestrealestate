'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface RealScoutOfficeWidgetProps {
  agentEncodedId?: string;
  sortOrder?: string;
  listingStatus?: string;
  propertyTypes?: string;
  priceMin?: string;
  priceMax?: string;
  className?: string;
}

export default function RealScoutOfficeWidget({
  agentEncodedId = 'QWdlbnQtMjI1MDUw',
  sortOrder = 'NEWEST',
  listingStatus = 'For Sale',
  propertyTypes = ',SFR',
  priceMin = '500000',
  priceMax = '600000',
  className = '',
}: RealScoutOfficeWidgetProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const checkRealScout = async () => {
      try {
        // Check if the script is loaded
        const scriptLoaded = typeof window !== 'undefined' && 
          !!document.querySelector('script[src*="realscout-web-components"]');
        
        if (!scriptLoaded) {
          console.log('RealScout script not loaded yet');
          setHasError(true);
          return;
        }

        // Wait for custom elements to be defined
        const checkCustomElements = () => {
          return typeof window !== 'undefined' && 
            !!customElements.get('realscout-office-listings');
        };

        if (checkCustomElements()) {
          setIsLoaded(true);
          setHasError(false);
        } else {
          // Wait up to 10 seconds for custom elements to load
          let attempts = 0;
          const maxAttempts = 20; // 10 seconds with 500ms intervals
          
          const interval = setInterval(() => {
            attempts++;
            if (checkCustomElements()) {
              setIsLoaded(true);
              setHasError(false);
              clearInterval(interval);
            } else if (attempts >= maxAttempts) {
              console.log('RealScout custom elements not available after timeout');
              setHasError(true);
              clearInterval(interval);
            }
          }, 500);

          return () => clearInterval(interval);
        }
      } catch (error) {
        console.error('RealScout loading error:', error);
        setHasError(true);
      }
    };

    checkRealScout();
  }, []);

  if (hasError) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`realscout-office-widget-container ${className}`}
      >
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-lg p-8">
          <div className="text-center mb-6">
            <div className="text-blue-600 mb-4">
              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-blue-900 mb-2">
              Featured Summerlin West Properties
            </h3>
            <p className="text-blue-700 mb-6">
              Discover luxury homes in Summerlin West's premier communities
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            <div className="bg-white rounded-lg p-4 shadow-sm border border-blue-200">
              <div className="h-32 bg-gradient-to-r from-blue-100 to-blue-200 rounded mb-3 flex items-center justify-center">
                <span className="text-blue-600 font-semibold">Property Image</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-1">The Vistas</h4>
              <p className="text-sm text-gray-600 mb-2">Luxury single-story homes</p>
              <p className="text-lg font-bold text-blue-600">$1,200,000+</p>
            </div>
            
            <div className="bg-white rounded-lg p-4 shadow-sm border border-blue-200">
              <div className="h-32 bg-gradient-to-r from-green-100 to-green-200 rounded mb-3 flex items-center justify-center">
                <span className="text-green-600 font-semibold">Property Image</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-1">Stonebridge</h4>
              <p className="text-sm text-gray-600 mb-2">Gated community homes</p>
              <p className="text-lg font-bold text-blue-600">$950,000+</p>
            </div>
            
            <div className="bg-white rounded-lg p-4 shadow-sm border border-blue-200">
              <div className="h-32 bg-gradient-to-r from-purple-100 to-purple-200 rounded mb-3 flex items-center justify-center">
                <span className="text-purple-600 font-semibold">Property Image</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-1">Redpoint</h4>
              <p className="text-sm text-gray-600 mb-2">Modern luxury residences</p>
              <p className="text-lg font-bold text-blue-600">$1,500,000+</p>
            </div>
          </div>
          
          <div className="text-center">
            <a 
              href="/contact" 
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Contact Dr. Jan Duffy for Current Listings
            </a>
            <p className="text-sm text-blue-600 mt-2">(702) 550-0112</p>
          </div>
        </div>
      </motion.div>
    );
  }

  if (!isLoaded) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`realscout-office-widget-container ${className}`}
      >
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <h3 className="text-lg font-semibold text-blue-900 mb-2">
            Loading Office Listings
          </h3>
          <p className="text-blue-700 mb-4">Preparing MLS data for Summerlin West...</p>
          <p className="text-sm text-blue-600">Powered by RealScout</p>
          <div className="mt-4 text-xs text-gray-500">
            <p>Debug: Script loaded: {typeof window !== 'undefined' && document.querySelector('script[src*="realscout-web-components"]') ? 'Yes' : 'No'}</p>
            <p>Custom elements: {typeof window !== 'undefined' && customElements.get('realscout-office-listings') ? 'Available' : 'Not available'}</p>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`realscout-office-widget-container ${className}`}
    >
      {/* RealScout Office Listings Widget - Exact Configuration */}
      <style jsx>{`
        realscout-office-listings {
          --rs-listing-divider-color: #0e64c8;
          width: 100%;
        }
      `}</style>
      
      {/* @ts-ignore - RealScout web component */}
      <realscout-office-listings
        agent-encoded-id={agentEncodedId}
        sort-order={sortOrder}
        listing-status={listingStatus}
        property-types={propertyTypes}
        price-min={priceMin}
        price-max={priceMax}
      />
    </motion.div>
  );
}
