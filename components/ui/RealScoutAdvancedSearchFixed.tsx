'use client';

import { useEffect, useState } from 'react';

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
  agentId = 'QWdlbnQtMjI1MDUw', // Dr. Jan Duffy's RealScout Agent ID
}: RealScoutAdvancedSearchProps) {
  const [widgetLoaded, setWidgetLoaded] = useState(false);

  useEffect(() => {
    // Load RealScout search widget script
    const loadRealScoutWidget = async () => {
      try {
        if (!document.querySelector('script[src*="realscout-web-components"]')) {
          const script = document.createElement('script');
          script.src = 'https://em.realscout.com/widgets/realscout-web-components.umd.js';
          script.type = 'module';
          script.async = true;
          
          script.onload = () => {
            setWidgetLoaded(true);
          };
          
          script.onerror = () => {
            console.warn('RealScout widget failed to load, showing fallback');
            setWidgetLoaded(false);
          };
          
          document.head.appendChild(script);
        } else {
          setWidgetLoaded(true);
        }
      } catch (error) {
        console.warn('Error loading RealScout widget:', error);
        setWidgetLoaded(false);
      }
    };

    loadRealScoutWidget();

    // Add custom styling for RealScout components
    if (!document.querySelector('style[data-realscout-search-styles]')) {
      const style = document.createElement('style');
      style.setAttribute('data-realscout-search-styles', 'true');
      style.textContent = `
        realscout-search-widget {
          --rs-primary-color: #3A8DDE;
          --rs-secondary-color: #0A2540;
          --rs-accent-color: #16B286;
          --rs-border-radius: 12px;
          --rs-font-family: 'Inter', system-ui, sans-serif;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          display: block;
        }
        
        realscout-search-widget .rs-search-header {
          background: linear-gradient(135deg, #3A8DDE 0%, #0A2540 100%);
          color: white;
          padding: 2rem;
          border-radius: 12px 12px 0 0;
          text-align: center;
        }
        
        realscout-search-widget .rs-search-filters {
          background: white;
          padding: 1.5rem;
          border-radius: 0 0 12px 12px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
        }
        
        realscout-search-widget input,
        realscout-search-widget select {
          border: 2px solid #e5e7eb;
          border-radius: 8px;
          padding: 0.75rem;
          font-size: 1rem;
          transition: border-color 0.3s ease;
          width: 100%;
        }
        
        realscout-search-widget input:focus,
        realscout-search-widget select:focus {
          outline: none;
          border-color: #3A8DDE;
          box-shadow: 0 0 0 3px rgba(58, 141, 222, 0.1);
        }
        
        realscout-search-widget button {
          background: #3A8DDE;
          border: none;
          border-radius: 8px;
          padding: 12px 24px;
          color: white;
          font-weight: 600;
          transition: all 0.3s ease;
          cursor: pointer;
          width: 100%;
        }
        
        realscout-search-widget button:hover {
          background: #0A2540;
          transform: translateY(-2px);
        }
        
        realscout-search-widget .rs-search-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1rem;
          margin-bottom: 1.5rem;
        }
        
        realscout-search-widget .rs-search-row {
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        
        realscout-search-widget .rs-search-label {
          font-weight: 600;
          color: #0A2540;
          margin-bottom: 0.5rem;
        }
        
        /* Responsive adjustments */
        @media (max-width: 768px) {
          realscout-search-widget .rs-search-grid {
            grid-template-columns: 1fr;
          }
          
          realscout-search-widget .rs-search-header {
            padding: 1.5rem 1rem;
          }
          
          realscout-search-widget .rs-search-filters {
            padding: 1rem;
          }
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
            <h3 className="text-xl font-semibold text-blue-900 mb-2">Advanced Property Search</h3>
            <p className="text-blue-700 mb-4">RealScout search widget is loading...</p>
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
            <p className="text-sm text-blue-600">Loading MLS search functionality</p>
          </div>
        )}
      </div>
    </div>
  );
}
