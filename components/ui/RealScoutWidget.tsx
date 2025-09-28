'use client';

import { useEffect, useState } from 'react';
import { REAL_SCOUT_CONFIG, waitForRealScoutElements } from '../../lib/realscout-config';

type RealScoutWidgetProps = {
  priceMin?: number;
  priceMax?: number;
  agentId?: string;
  variant?: 'office-listings' | 'search' | 'lead-capture';
  className?: string;
};

export default function RealScoutWidget({
  priceMin = REAL_SCOUT_CONFIG.DEFAULT_PRICE_MIN,
  priceMax = REAL_SCOUT_CONFIG.DEFAULT_PRICE_MAX,
  agentId = REAL_SCOUT_CONFIG.AGENT_ID,
  variant = 'office-listings',
  className = '',
}: RealScoutWidgetProps) {
  const [loadingState, setLoadingState] = useState<'loading' | 'loaded' | 'error'>('loading');

  useEffect(() => {
    const loadWidget = async () => {
      try {
        // Wait for RealScout elements to be defined
        const elementsLoaded = await waitForRealScoutElements(10000);
        
        if (elementsLoaded) {
          setLoadingState('loaded');
        } else {
          setLoadingState('error');
        }
      } catch (error) {
        console.error('Error loading RealScout widget:', error);
        setLoadingState('error');
      }
    };

    loadWidget();
  }, []);

  // Loading state
  if (loadingState === 'loading') {
    return (
      <div className={`bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center ${className}`}>
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <h3 className="text-lg font-medium text-gray-900 mb-2">Loading Property Listings...</h3>
        <p className="text-sm text-gray-600">Preparing MLS data for Summerlin West</p>
      </div>
    );
  }

  // Error state
  if (loadingState === 'error') {
    return (
      <div className={`bg-red-50 border border-red-200 rounded-lg p-8 text-center ${className}`}>
        <h3 className="text-xl font-semibold text-red-900 mb-2">Property Search Temporarily Unavailable</h3>
        <p className="text-red-700 mb-4">We're experiencing technical difficulties with our property search.</p>
        <a
          href="/contact"
          className="inline-flex items-center px-6 py-3 bg-red-600 text-white font-medium rounded-lg hover:bg-red-700 transition-colors"
        >
          Contact Dr. Jan Duffy
        </a>
      </div>
    );
  }

  // Render the appropriate RealScout widget
  switch (variant) {
    case 'office-listings':
      return (
        <div className={`real-scout-office-listings-container ${className}`}>
          {/* @ts-ignore - RealScout web component */}
          <realscout-office-listings
            agent-id={agentId}
            price-min={priceMin}
            price-max={priceMax}
            location={REAL_SCOUT_CONFIG.DEFAULT_LOCATION}
            show-features={true}
            show-communities={true}
            communities="The Vistas,Stonebridge,Redpoint,Reverence"
            max-listings={12}
            show-price-changes={true}
            show-new-listings={true}
            show-sold-listings={false}
          />
        </div>
      );
    
    case 'search':
      return (
        <div className={`real-scout-search-container ${className}`}>
          {/* @ts-ignore - RealScout web component */}
          <realscout-search-widget
            agent-id={agentId}
            price-min={priceMin}
            price-max={priceMax}
            location={REAL_SCOUT_CONFIG.DEFAULT_LOCATION}
            show-features={true}
            show-communities={true}
            communities="The Vistas,Stonebridge,Redpoint,Reverence"
          />
        </div>
      );
    
    case 'lead-capture':
      return (
        <div className={`real-scout-lead-container ${className}`}>
          {/* @ts-ignore - RealScout web component */}
          <realscout-lead-capture
            agent-id={agentId}
            source="Website"
            community="Summerlin West"
            show-market-report={true}
            show-valuation={true}
          />
        </div>
      );
    
    default:
      return (
        <div className={`bg-gray-50 border border-gray-200 rounded-lg p-8 text-center ${className}`}>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Invalid Widget Type</h3>
          <p className="text-gray-700">Please specify a valid widget variant.</p>
        </div>
      );
  }
}
