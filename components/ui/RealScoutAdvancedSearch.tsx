'use client';
import { useEffect, useState } from 'react';
import { waitForRealScoutElements } from '../../lib/realscout-config';

interface RealScoutAdvancedSearchProps {
  title?: string;
  subtitle?: string;
  variant?: 'page' | 'sidebar' | 'modal';
  showFeatures?: boolean;
  priceMin?: number;
  priceMax?: number;
  communities?: string[];
  agentId?: string;
}

export default function RealScoutAdvancedSearch({
  title = 'Find Your Dream Home in Summerlin West',
  subtitle = 'Search by neighborhood, price, or features. Real-time MLS data.',
  variant = 'page',
  showFeatures = true,
  priceMin = 400000,
  priceMax = 2000000,
  communities = ['The Vistas', 'Stonebridge', 'Redpoint', 'Reverence'],
  agentId = 'QWdlbnQtMjI1MDUw',
}: RealScoutAdvancedSearchProps) {
  const [widgetLoaded, setWidgetLoaded] = useState(false);

  useEffect(() => {
    const loadWidget = async () => {
      try {
        // Wait for RealScout elements to be defined
        const elementsLoaded = await waitForRealScoutElements(10000);
        
        if (elementsLoaded) {
          setWidgetLoaded(true);
        }
      } catch (error) {
        console.error('Error loading RealScout advanced search widget:', error);
      }
    };

    loadWidget();

    // Add custom styling for RealScout components
    if (!document.querySelector('style[data-realscout-search-styles]')) {
      const style = document.createElement('style');
      style.setAttribute('data-realscout-search-styles', 'true');
      style.textContent = `
        realscout-search-widget {
          --rs-primary-color: #3A8DDE;
          --rs-secondary-color: #0A2540;
          --rs-accent-color: #16B286;
          --rs-border-radius: 8px;
          --rs-font-family: 'Inter', system-ui, sans-serif;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
        }
        
        realscout-search-widget .rs-search-header {
          background: linear-gradient(135deg, #3A8DDE 0%, #0A2540 100%);
          color: white;
          padding: 2rem;
          border-radius: 12px 12px 0 0;
        }
        
        realscout-search-widget .rs-search-filters {
          background: white;
          padding: 1.5rem;
          border-radius: 0 0 12px 12px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
        }
        
        realscout-search-widget .rs-search-button {
          background: #3A8DDE;
          border: none;
          border-radius: 8px;
          padding: 12px 24px;
          color: white;
          font-weight: 600;
          transition: all 0.3s ease;
        }
        
        realscout-search-widget .rs-search-button:hover {
          background: #0A2540;
          transform: translateY(-2px);
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  return (
    <div className="real-scout-advanced-search">
      <div className="search-header mb-6">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">{title}</h2>
        <p className="text-lg text-gray-600">{subtitle}</p>
      </div>

      {/* RealScout Search Widget */}
      <div className="widget-container">
        {widgetLoaded ? (
          // @ts-ignore - RealScout web component
          <realscout-search-widget
            agent-id={agentId}
            price-min={priceMin}
            price-max={priceMax}
            location="Summerlin West, Las Vegas, NV"
            show-features={showFeatures}
            show-communities={true}
            communities={communities.join(',')}
            variant={variant}
          />
        ) : (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <h3 className="text-xl font-semibold text-blue-900 mb-2">Loading Advanced Search</h3>
            <p className="text-blue-700 mb-4">Preparing MLS search tools...</p>
            <p className="text-sm text-blue-600">Powered by RealScout</p>
          </div>
        )}
      </div>
    </div>
  );
}
