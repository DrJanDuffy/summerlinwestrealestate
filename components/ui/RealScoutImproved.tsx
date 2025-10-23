'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface RealScoutImprovedProps {
  officeId?: string;
  agentId?: string;
  priceMin?: string;
  priceMax?: string;
  propertyTypes?: string;
  listingStatus?: string;
  sortOrder?: string;
  className?: string;
}

export default function RealScoutImproved({
  officeId = process.env.NEXT_PUBLIC_REALSCOUT_OFFICE_ID || 'QWZmaWNlLTEyMzQ1',
  agentId = 'QWdlbnQtMjI1MDUw',
  priceMin = '500000',
  priceMax = '2000000',
  propertyTypes = 'SFR',
  listingStatus = 'For Sale',
  sortOrder = 'NEWEST',
  className = '',
}: RealScoutImprovedProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [debugInfo, setDebugInfo] = useState<any>(null);

  useEffect(() => {
    const checkRealScoutImproved = () => {
      try {
        // Check if script is loaded
        const scriptLoaded = typeof window !== 'undefined' && 
          !!document.querySelector('script[src*="realscout-web-components"]');
        
        if (!scriptLoaded) {
          console.log('RealScout script not loaded');
          setHasError(true);
          return;
        }

        // Check if custom elements are available
        const customElementsAvailable = typeof window !== 'undefined' && 
          (!!customElements.get('realscout-office-listings') ||
           !!customElements.get('realscout-your-listings') ||
           !!customElements.get('realscout-search-widget'));
        
        if (customElementsAvailable) {
          setIsLoaded(true);
          setHasError(false);
          
          // Set debug info
          setDebugInfo({
            scriptLoaded: true,
            customElementsAvailable: true,
            officeId: officeId,
            agentId: agentId,
            timestamp: new Date().toISOString()
          });
        } else {
          // Wait a bit more for custom elements to load
          setTimeout(() => {
            const elementsAvailable = typeof window !== 'undefined' && 
              (!!customElements.get('realscout-office-listings') ||
               !!customElements.get('realscout-your-listings') ||
               !!customElements.get('realscout-search-widget'));
            setIsLoaded(elementsAvailable);
            if (!elementsAvailable) {
              setHasError(true);
            }
          }, 3000);
        }
      } catch (error) {
        console.error('RealScout improved check error:', error);
        setHasError(true);
      }
    };

    // Check immediately
    checkRealScoutImproved();
    
    // Also check after a delay
    const timeoutId = setTimeout(checkRealScoutImproved, 2000);
    
    return () => clearTimeout(timeoutId);
  }, [officeId, agentId]);

  if (hasError) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`realscout-improved-container ${className}`}
      >
        <div className="bg-gradient-to-r from-red-50 to-red-100 border border-red-200 rounded-lg p-8">
          <div className="text-center mb-6">
            <div className="text-red-600 mb-4">
              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-red-900 mb-2">
              RealScout Integration Issue
            </h3>
            <p className="text-red-700 mb-6">
              Script not loaded or custom elements not available
            </p>
          </div>
          
          <div className="text-center">
            <button
              onClick={() => window.location.reload()}
              className="inline-flex items-center px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-semibold"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Reload Page
            </button>
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
        className={`realscout-improved-container ${className}`}
      >
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <h3 className="text-lg font-semibold text-blue-900 mb-2">
            Loading RealScout Components
          </h3>
          <p className="text-blue-700 mb-4">Initializing MLS integration...</p>
          <p className="text-sm text-blue-600">Powered by RealScout</p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`realscout-improved-container ${className}`}
    >
      {/* Enhanced RealScout CSS Styling */}
      <style jsx global>{`
        realscout-office-listings {
          --rs-listing-divider-color: #0e64c8;
          --rs-primary-color: #0e64c8;
          --rs-secondary-color: #1e40af;
          --rs-accent-color: #3b82f6;
          --rs-text-color: #1f2937;
          --rs-background-color: #ffffff;
          --rs-border-color: #e5e7eb;
          --rs-hover-color: #f3f4f6;
          width: 100%;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }
        
        realscout-your-listings {
          --rs-listing-divider-color: #0e64c8;
          --rs-primary-color: #0e64c8;
          --rs-secondary-color: #1e40af;
          --rs-accent-color: #3b82f6;
          --rs-text-color: #1f2937;
          --rs-background-color: #ffffff;
          --rs-border-color: #e5e7eb;
          --rs-hover-color: #f3f4f6;
          width: 100%;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }
        
        realscout-search-widget {
          --rs-listing-divider-color: #0e64c8;
          --rs-primary-color: #0e64c8;
          --rs-secondary-color: #1e40af;
          --rs-accent-color: #3b82f6;
          --rs-text-color: #1f2937;
          --rs-background-color: #ffffff;
          --rs-border-color: #e5e7eb;
          --rs-hover-color: #f3f4f6;
          width: 100%;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        }
        
        /* Enhanced styling for RealScout components */
        realscout-office-listings,
        realscout-your-listings,
        realscout-search-widget {
          border-radius: 0.5rem;
          box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
          overflow: hidden;
        }
        
        /* Custom styling for RealScout elements */
        realscout-office-listings::part(listing-card),
        realscout-your-listings::part(listing-card) {
          border-radius: 0.5rem;
          border: 1px solid var(--rs-border-color);
          transition: all 0.2s ease-in-out;
        }
        
        realscout-office-listings::part(listing-card):hover,
        realscout-your-listings::part(listing-card):hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }
        
        realscout-office-listings::part(price),
        realscout-your-listings::part(price) {
          color: var(--rs-primary-color);
          font-weight: 600;
          font-size: 1.25rem;
        }
        
        realscout-office-listings::part(address),
        realscout-your-listings::part(address) {
          color: var(--rs-text-color);
          font-weight: 500;
        }
        
        realscout-office-listings::part(button),
        realscout-your-listings::part(button),
        realscout-search-widget::part(button) {
          background-color: var(--rs-primary-color);
          color: white;
          border-radius: 0.375rem;
          padding: 0.5rem 1rem;
          font-weight: 500;
          transition: background-color 0.2s ease-in-out;
        }
        
        realscout-office-listings::part(button):hover,
        realscout-your-listings::part(button):hover,
        realscout-search-widget::part(button):hover {
          background-color: var(--rs-secondary-color);
        }
      `}</style>
      
      {/* Status Indicator */}
      {debugInfo && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
          <div className="flex items-center">
            <svg className="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <h4 className="font-semibold text-green-900">RealScout Ready</h4>
          </div>
          <p className="text-sm text-green-800 mt-1">
            Script loaded ✓ | Elements available ✓ | Office ID: {officeId}
          </p>
        </div>
      )}
      
      {/* Primary: Office Listings */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold text-gray-900">Featured Office Listings</h3>
          <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full font-medium">
            Primary
          </span>
        </div>
        {/* @ts-ignore - RealScout web component */}
        <realscout-office-listings
          office-id={officeId}
          price-min={priceMin}
          price-max={priceMax}
          property-types={propertyTypes}
          listing-status={listingStatus}
          sort-order={sortOrder}
        />
      </div>
      
      {/* Secondary: Agent Listings */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold text-gray-900">Agent Listings</h3>
          <span className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full font-medium">
            Fallback
          </span>
        </div>
        {/* @ts-ignore - RealScout web component */}
        <realscout-your-listings
          agent-encoded-id={agentId}
          sort-order={sortOrder}
          listing-status={listingStatus}
          property-types={propertyTypes}
          price-min={priceMin}
          price-max={priceMax}
        />
      </div>
      
      {/* Search Widget */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold text-gray-900">Property Search</h3>
          <span className="px-3 py-1 bg-purple-100 text-purple-800 text-sm rounded-full font-medium">
            Search
          </span>
        </div>
        {/* @ts-ignore - RealScout web component */}
        <realscout-search-widget
          agent-encoded-id={agentId}
          price-min={priceMin}
          price-max={priceMax}
          property-types={propertyTypes}
        />
      </div>
      
      {/* Configuration Summary */}
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
        <h4 className="font-semibold text-gray-900 mb-2">Configuration Summary</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
          <div>
            <span className="text-gray-600">Office ID:</span>
            <code className="block text-xs bg-gray-200 px-2 py-1 rounded mt-1">{officeId}</code>
          </div>
          <div>
            <span className="text-gray-600">Agent ID:</span>
            <code className="block text-xs bg-gray-200 px-2 py-1 rounded mt-1">{agentId}</code>
          </div>
          <div>
            <span className="text-gray-600">Price Range:</span>
            <span className="block font-medium">${parseInt(priceMin).toLocaleString()} - ${parseInt(priceMax).toLocaleString()}</span>
          </div>
          <div>
            <span className="text-gray-600">Property Types:</span>
            <span className="block font-medium">{propertyTypes}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
