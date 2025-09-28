'use client';

import { useEffect } from 'react';

type RealScoutWidgetProps = {
  priceMin?: number;
  priceMax?: number;
  agentId?: string;
  variant?: 'search' | 'listings' | 'lead-capture';
};

export default function RealScoutWidget({
  priceMin = 400000,
  priceMax = 2000000,
  agentId = 'QWdlbnQtMjI1MDUw', // Dr. Jan Duffy's RealScout Agent ID
  variant = 'search',
}: RealScoutWidgetProps) {
  useEffect(() => {
    // Load RealScout widget script if not already loaded
    if (!document.querySelector('script[src*="realscout-web-components"]')) {
      const script = document.createElement('script');
      script.src = 'https://em.realscout.com/widgets/realscout-web-components.umd.js';
      script.type = 'module';
      script.async = true;
      document.head.appendChild(script);
    }

    // Add RealScout-specific styling
    if (!document.querySelector('style[data-realscout-widget-styles]')) {
      const style = document.createElement('style');
      style.setAttribute('data-realscout-widget-styles', 'true');
      style.textContent = `
        realscout-search-widget,
        realscout-office-listings,
        realscout-lead-capture {
          --rs-primary-color: #3A8DDE;
          --rs-secondary-color: #0A2540;
          --rs-accent-color: #16B286;
          --rs-border-radius: 12px;
          --rs-font-family: 'Inter', system-ui, sans-serif;
          width: 100%;
          margin: 0 auto;
        }
        
        realscout-search-widget {
          max-width: 1200px;
        }
        
        realscout-office-listings {
          max-width: 1400px;
        }
        
        realscout-lead-capture {
          max-width: 500px;
        }
        
        /* Custom styling for better integration */
        realscout-search-widget .rs-search-header,
        realscout-office-listings .rs-listings-header,
        realscout-lead-capture .rs-lead-header {
          background: linear-gradient(135deg, #3A8DDE 0%, #0A2540 100%);
          color: white;
          padding: 2rem;
          border-radius: 12px 12px 0 0;
        }
        
        realscout-search-widget .rs-search-filters,
        realscout-office-listings .rs-listings-content,
        realscout-lead-capture .rs-lead-form {
          background: white;
          padding: 1.5rem;
          border-radius: 0 0 12px 12px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
        }
        
        realscout-search-widget button,
        realscout-lead-capture button {
          background: #3A8DDE;
          border: none;
          border-radius: 8px;
          padding: 12px 24px;
          color: white;
          font-weight: 600;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        
        realscout-search-widget button:hover,
        realscout-lead-capture button:hover {
          background: #0A2540;
          transform: translateY(-2px);
        }
        
        realscout-search-widget input,
        realscout-search-widget select,
        realscout-lead-capture input,
        realscout-lead-capture select {
          border: 2px solid #e5e7eb;
          border-radius: 8px;
          padding: 0.75rem;
          font-size: 1rem;
          transition: border-color 0.3s ease;
        }
        
        realscout-search-widget input:focus,
        realscout-search-widget select:focus,
        realscout-lead-capture input:focus,
        realscout-lead-capture select:focus {
          outline: none;
          border-color: #3A8DDE;
          box-shadow: 0 0 0 3px rgba(58, 141, 222, 0.1);
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  const renderWidget = () => {
    switch (variant) {
      case 'search':
        return (
          // @ts-ignore - RealScout web component
          <realscout-search-widget
            agent-id={agentId}
            price-min={priceMin}
            price-max={priceMax}
            location="Summerlin West, Las Vegas, NV"
            show-features={true}
            show-communities={true}
          />
        );
      case 'listings':
        return (
          // @ts-ignore - RealScout web component
          <realscout-office-listings
            agent-id={agentId}
            price-min={priceMin}
            price-max={priceMax}
            location="Summerlin West, Las Vegas, NV"
          />
        );
      case 'lead-capture':
        return (
          // @ts-ignore - RealScout web component
          <realscout-lead-capture
            agent-id={agentId}
            source="Website"
            community="Summerlin West"
            show-market-report={true}
            show-valuation={true}
          />
        );
      default:
        return (
          // @ts-ignore - RealScout web component
          <realscout-search-widget
            agent-id={agentId}
            price-min={priceMin}
            price-max={priceMax}
            location="Summerlin West, Las Vegas, NV"
          />
        );
    }
  };

  return (
    <div className="real-scout-widget-container">
      {renderWidget()}
      
      {/* Fallback content for when RealScout widgets fail to load */}
      <div className="realscout-fallback hidden">
        <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-8 text-center">
          <h3 className="text-xl font-semibold text-indigo-900 mb-2">
            {variant === 'search' && 'Property Search'}
            {variant === 'listings' && 'Property Listings'}
            {variant === 'lead-capture' && 'Get Your Free Market Report'}
          </h3>
          <p className="text-indigo-700 mb-4">
            {variant === 'search' && 'Search for your dream home in Summerlin West'}
            {variant === 'listings' && 'Browse available properties in Summerlin West'}
            {variant === 'lead-capture' && 'Get expert market insights from Dr. Jan Duffy'}
          </p>
          <a
            href={variant === 'search' ? '/properties' : variant === 'listings' ? '/properties' : '/contact'}
            className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-medium rounded-lg hover:bg-indigo-700 transition-colors"
          >
            {variant === 'search' && 'Search Properties'}
            {variant === 'listings' && 'View All Properties'}
            {variant === 'lead-capture' && 'Contact Dr. Jan Duffy'}
          </a>
        </div>
      </div>
    </div>
  );
}
