'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface RealScoutExpertProps {
  officeId?: string;
  agentId?: string;
  priceMin?: string;
  priceMax?: string;
  propertyTypes?: string;
  className?: string;
}

export default function RealScoutExpert({
  officeId = process.env.NEXT_PUBLIC_REALSCOUT_OFFICE_ID || 'QWZmaWNlLTEyMzQ1', // Default office ID
  agentId = 'QWdlbnQtMjI1MDUw', // Dr. Jan Duffy's Agent ID
  priceMin = '500000',
  priceMax = '2000000',
  propertyTypes = 'SFR',
  className = '',
}: RealScoutExpertProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [debugInfo, setDebugInfo] = useState<any>(null);

  useEffect(() => {
    const checkRealScoutExpert = () => {
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
        console.error('RealScout expert check error:', error);
        setHasError(true);
      }
    };

    // Check immediately
    checkRealScoutExpert();
    
    // Also check after a delay
    const timeoutId = setTimeout(checkRealScoutExpert, 2000);
    
    return () => clearTimeout(timeoutId);
  }, [officeId, agentId]);

  if (hasError) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`realscout-expert-container ${className}`}
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
              Expert diagnosis: RealScout components not loading properly
            </p>
          </div>
          
          <div className="bg-white rounded-lg p-4 mb-6">
            <h4 className="font-semibold text-gray-900 mb-3">Expert Analysis</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Script Status:</span>
                <span className="text-red-600">Not Loaded</span>
              </div>
              <div className="flex justify-between">
                <span>Office ID:</span>
                <code className="text-xs bg-gray-200 px-2 py-1 rounded">{officeId}</code>
              </div>
              <div className="flex justify-between">
                <span>Agent ID:</span>
                <code className="text-xs bg-gray-200 px-2 py-1 rounded">{agentId}</code>
              </div>
            </div>
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
        className={`realscout-expert-container ${className}`}
      >
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <h3 className="text-lg font-semibold text-blue-900 mb-2">
            Loading RealScout Components
          </h3>
          <p className="text-blue-700 mb-4">Expert initialization in progress...</p>
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
      className={`realscout-expert-container ${className}`}
    >
      {/* RealScout Expert Implementation */}
      <style jsx>{`
        realscout-office-listings {
          --rs-listing-divider-color: #0e64c8;
          width: 100%;
        }
        realscout-your-listings {
          --rs-listing-divider-color: #0e64c8;
          width: 100%;
        }
      `}</style>
      
      {/* Expert Debug Info */}
      {debugInfo && (
        <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
          <h4 className="font-semibold text-green-900 mb-2">✅ Expert Status: Ready</h4>
          <div className="text-sm text-green-800">
            <p>Script: Loaded ✓ | Elements: Available ✓ | Office ID: {officeId}</p>
          </div>
        </div>
      )}
      
      {/* Try Office Listings First */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Office Listings (Primary)</h3>
        {/* @ts-ignore - RealScout web component */}
        <realscout-office-listings
          office-id={officeId}
          price-min={priceMin}
          price-max={priceMax}
          property-types={propertyTypes}
        />
      </div>
      
      {/* Fallback to Agent Listings */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Agent Listings (Fallback)</h3>
        {/* @ts-ignore - RealScout web component */}
        <realscout-your-listings
          agent-encoded-id={agentId}
          sort-order="NEWEST"
          listing-status="For Sale"
          property-types={propertyTypes}
        />
      </div>
      
      {/* Search Widget */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-3">Search Widget</h3>
        {/* @ts-ignore - RealScout web component */}
        <realscout-search-widget
          agent-encoded-id={agentId}
          price-min={priceMin}
          price-max={priceMax}
        />
      </div>
    </motion.div>
  );
}
