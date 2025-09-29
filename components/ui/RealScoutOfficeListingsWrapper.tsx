'use client';

import { useEffect, useState } from 'react';
import { waitForRealScoutElements } from '../../lib/realscout-config';

interface RealScoutOfficeListingsProps {
  agentEncodedId?: string;
  sortOrder?: string;
  listingStatus?: string;
  propertyTypes?: string;
  priceMin?: string;
  priceMax?: string;
  maxListings?: number;
  className?: string;
}

export default function RealScoutOfficeListings({
  agentEncodedId = 'QWdlbnQtMjI1MDUw',
  sortOrder: _sortOrder = 'PRICE_LOW',
  listingStatus: _listingStatus = 'For Sale',
  propertyTypes: _propertyTypes = ',SFR,MF,TC,LAL,MOBILE,OTHER',
  priceMin = '400000',
  priceMax = '2000000',
  maxListings: _maxListings = 12,
  className = '',
}: RealScoutOfficeListingsProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadWidget = async () => {
      try {
        // Wait for RealScout elements to be defined
        const elementsReady = await waitForRealScoutElements(10000); // 10 second timeout
        
        if (elementsReady) {
          console.log('RealScout elements loaded successfully');
          console.log('Agent ID:', agentEncodedId);
          console.log('Price range:', priceMin, '-', priceMax);
          console.log('Property types:', propertyTypes);
          setIsLoaded(true);
        } else {
          console.error('RealScout elements failed to load within timeout');
          setError('RealScout widgets failed to load within timeout');
        }
      } catch (err) {
        console.error('RealScout widget loading error:', err);
        setError(err instanceof Error ? err.message : 'Unknown error loading RealScout widgets');
      }
    };

    loadWidget();
  }, [agentEncodedId, priceMin, priceMax, propertyTypes]);

  if (error) {
    return (
      <div className={`bg-red-50 border border-red-200 rounded-lg p-8 text-center ${className}`}>
        <div className="text-red-600 mb-4">
          <svg className="w-12 h-12 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-red-900 mb-2">Unable to Load Property Listings</h3>
        <p className="text-red-700 mb-4">We're experiencing technical difficulties with our property search system.</p>
        <p className="text-sm text-red-600">Please try refreshing the page or contact us directly for assistance.</p>
        <a 
          href="tel:7025500112" 
          className="inline-block mt-4 bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
        >
          Call (702) 550-0112
        </a>
      </div>
    );
  }

  if (!isLoaded) {
    return (
      <div className={`bg-blue-50 border border-blue-200 rounded-lg p-8 text-center ${className}`}>
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <h3 className="text-lg font-medium text-blue-900 mb-2">Loading Property Listings...</h3>
        <p className="text-sm text-blue-600">Preparing MLS data for Summerlin West</p>
        <p className="text-xs text-blue-500 mt-2">Powered by RealScout</p>
      </div>
    );
  }

  return (
    <div className={`real-scout-office-listings-container ${className}`}>
      {/* @ts-ignore - RealScout web component */}
      <realscout-office-listings
        agent-id={agentEncodedId}
        price-min={priceMin}
        price-max={priceMax}
        location="Summerlin West, Las Vegas, NV"
      />
    </div>
  );
}
