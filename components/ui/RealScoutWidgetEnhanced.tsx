'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { REAL_SCOUT_CONFIG, isRealScoutLoaded, waitForRealScoutElements } from '../../lib/realscout-config';

interface RealScoutWidgetEnhancedProps {
  variant?: 'search' | 'listings' | 'lead-capture' | 'market-insights' | 'property-valuation';
  agentId?: string;
  priceMin?: number;
  priceMax?: number;
  location?: string;
  community?: string;
  source?: string;
  className?: string;
  fallbackComponent?: React.ReactNode;
}

export default function RealScoutWidgetEnhanced({
  variant = 'search',
  agentId = REAL_SCOUT_CONFIG.AGENT_ID,
  priceMin = REAL_SCOUT_CONFIG.DEFAULT_PRICE_MIN,
  priceMax = REAL_SCOUT_CONFIG.DEFAULT_PRICE_MAX,
  location = REAL_SCOUT_CONFIG.DEFAULT_LOCATION,
  community = 'Summerlin West',
  source = 'Website',
  className = '',
  fallbackComponent,
}: RealScoutWidgetEnhancedProps) {
  const [widgetReady, setWidgetReady] = useState(false);
  const [loadingState, setLoadingState] = useState<'loading' | 'ready' | 'error'>('loading');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const initializeWidget = async () => {
      try {
        setLoadingState('loading');
        
        // Check if RealScout is already loaded
        if (isRealScoutLoaded()) {
          setWidgetReady(true);
          setLoadingState('ready');
          return;
        }

        // Wait for RealScout elements to be defined (with Cloudflare Worker support)
        const elementsReady = await waitForRealScoutElements(8000); // Extended timeout for Cloudflare Worker
        
        if (elementsReady) {
          setWidgetReady(true);
          setLoadingState('ready');
        } else {
          throw new Error('RealScout elements not available after timeout');
        }
      } catch (err) {
        console.error('RealScout widget initialization failed:', err);
        setError(err instanceof Error ? err.message : 'Failed to load RealScout widget');
        setLoadingState('error');
      }
    };

    initializeWidget();
  }, [variant]);

  const renderRealScoutComponent = () => {
    if (!widgetReady) return null;

    const commonProps = {
      'agent-id': agentId,
      'price-min': priceMin,
      'price-max': priceMax,
      location,
      'show-features': true,
      'show-communities': true,
    };

    switch (variant) {
      case 'search':
        return (
          // @ts-ignore - RealScout web component
          <realscout-search-widget
            {...commonProps}
            communities={`${community}, Las Vegas, NV`}
          />
        );
      
      case 'listings':
        return (
          // @ts-ignore - RealScout web component
          <realscout-office-listings
            {...commonProps}
          />
        );
      
      case 'lead-capture':
        return (
          // @ts-ignore - RealScout web component
          <realscout-lead-capture
            agent-id={agentId}
            source={source}
            community={community}
            'show-market-report': true
            'show-valuation': true
            'show-consultation': true
          />
        );
      
      case 'market-insights':
        return (
          // @ts-ignore - RealScout web component
          <realscout-market-insights
            agent-id={agentId}
            community={community}
          />
        );
      
      case 'property-valuation':
        return (
          // @ts-ignore - RealScout web component
          <realscout-property-valuation
            agent-id={agentId}
            location={location}
          />
        );
      
      default:
        return null;
    }
  };

  const renderFallback = () => {
    if (fallbackComponent) return fallbackComponent;

    return (
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100 border border-blue-200 rounded-lg p-8 text-center">
        <div className="max-w-md mx-auto">
          <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5a2 2 0 012-2h4a2 2 0 012 2v2H8V5z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            {variant === 'search' && 'Advanced Property Search'}
            {variant === 'listings' && 'Property Listings'}
            {variant === 'lead-capture' && 'Get Your Market Report'}
            {variant === 'market-insights' && 'Market Insights'}
            {variant === 'property-valuation' && 'Property Valuation'}
          </h3>
          <p className="text-gray-600 mb-4">
            {variant === 'search' && 'Search for your perfect home in Summerlin West'}
            {variant === 'listings' && 'Browse current listings in the area'}
            {variant === 'lead-capture' && 'Receive personalized market insights'}
            {variant === 'market-insights' && 'Stay informed about market trends'}
            {variant === 'property-valuation' && 'Get an instant property valuation'}
          </p>
          <a
            href="/contact"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contact Dr. Jan Duffy
          </a>
        </div>
      </div>
    );
  };

  if (loadingState === 'loading') {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className={`realscout-widget-loading ${className}`}
      >
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">Loading RealScout Widget...</h3>
          <p className="text-sm text-gray-600">
            {variant === 'search' && 'Preparing advanced search tools'}
            {variant === 'listings' && 'Loading property listings'}
            {variant === 'lead-capture' && 'Setting up lead capture form'}
            {variant === 'market-insights' && 'Fetching market data'}
            {variant === 'property-valuation' && 'Initializing valuation tools'}
          </p>
          <p className="text-xs text-gray-500 mt-2">
            Powered by RealScout • Cloudflare Worker Optimized
          </p>
        </div>
      </motion.div>
    );
  }

  if (loadingState === 'error') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className={`realscout-widget-error ${className}`}
      >
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
          <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
            <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-lg font-medium text-red-900 mb-2">Widget Loading Error</h3>
          <p className="text-sm text-red-700 mb-4">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="inline-flex items-center px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-lg hover:bg-red-700 transition-colors"
          >
            Retry
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`realscout-widget-enhanced ${className}`}
    >
      {renderRealScoutComponent() || renderFallback()}
    </motion.div>
  );
}
