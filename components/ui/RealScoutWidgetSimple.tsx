'use client';

import { useEffect, useState } from 'react';

interface RealScoutWidgetSimpleProps {
  variant?: 'search' | 'listings' | 'lead-capture';
  agentId?: string;
  priceMin?: number;
  priceMax?: number;
}

export default function RealScoutWidgetSimple({
  variant = 'search',
  agentId = 'QWdlbnQtMjI1MDUw',
  priceMin = 400000,
  priceMax = 2000000,
}: RealScoutWidgetSimpleProps) {
  const [widgetReady, setWidgetReady] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;

    const loadRealScoutWidget = async () => {
      try {
        // Check if RealScout script is already loaded
        const existingScript = document.querySelector('script[src*="realscout-web-components"]');
        
        if (!existingScript) {
          // Load RealScout script
          const script = document.createElement('script');
          script.src = 'https://em.realscout.com/widgets/realscout-web-components.umd.js';
          script.type = 'module';
          script.async = true;
          
          await new Promise((resolve, reject) => {
            script.onload = resolve;
            script.onerror = reject;
            document.head.appendChild(script);
          });
        }

        // Wait for custom elements to be defined
        const maxWaitTime = 5000; // 5 seconds
        const startTime = Date.now();
        
        const waitForCustomElements = () => {
          return new Promise<void>((resolve, reject) => {
            const checkElements = () => {
              const searchWidget = customElements.get('realscout-search-widget');
              const listingsWidget = customElements.get('realscout-office-listings');
              const leadWidget = customElements.get('realscout-lead-capture');
              
              if (searchWidget || listingsWidget || leadWidget) {
                resolve();
                return;
              }
              
              if (Date.now() - startTime > maxWaitTime) {
                reject(new Error('Custom elements not defined within timeout'));
                return;
              }
              
              setTimeout(checkElements, 100);
            };
            
            checkElements();
          });
        };

        await waitForCustomElements();
        
        if (mounted) {
          setWidgetReady(true);
        }
      } catch (err) {
        console.error('RealScout widget loading error:', err);
        if (mounted) {
          setError(err instanceof Error ? err.message : 'Unknown error');
        }
      }
    };

    loadRealScoutWidget();

    return () => {
      mounted = false;
    };
  }, []);

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-8 text-center">
        <h3 className="text-xl font-semibold text-red-900 mb-2">RealScout Widget Error</h3>
        <p className="text-red-700 mb-4">{error}</p>
        <p className="text-sm text-red-600">Please refresh the page or contact support.</p>
      </div>
    );
  }

  if (!widgetReady) {
    return (
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 text-center">
        <h3 className="text-xl font-semibold text-blue-900 mb-2">Loading RealScout Widget</h3>
        <p className="text-blue-700 mb-4">Please wait while we initialize the RealScout functionality...</p>
        <div className="flex justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        </div>
      </div>
    );
  }

  // Render the appropriate RealScout widget
  switch (variant) {
    case 'search':
      return (
        <div className="real-scout-search-container">
          {/* @ts-ignore - RealScout web component */}
          <realscout-search-widget
            agent-id={agentId}
            price-min={priceMin}
            price-max={priceMax}
            location="Summerlin West, Las Vegas, NV"
            show-features={true}
            show-communities={true}
          />
        </div>
      );
    
    case 'listings':
      return (
        <div className="real-scout-listings-container">
          {/* @ts-ignore - RealScout web component */}
          <realscout-office-listings
            agent-id={agentId}
            price-min={priceMin}
            price-max={priceMax}
            location="Summerlin West, Las Vegas, NV"
          />
        </div>
      );
    
    case 'lead-capture':
      return (
        <div className="real-scout-lead-container">
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
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-8 text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Invalid Widget Type</h3>
          <p className="text-gray-700">Please specify a valid widget variant.</p>
        </div>
      );
  }
}
