'use client';
import { useEffect } from 'react';

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
  useEffect(() => {
    // Load RealScout search widget script
    if (!document.querySelector('script[src*="realscout-web-components"]')) {
      const script = document.createElement('script');
      script.src = 'https://em.realscout.com/widgets/realscout-web-components.umd.js';
      script.type = 'module';
      document.head.appendChild(script);
    }

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

      {/* RealScout Search Widget - Temporarily disabled for build */}
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 text-center">
        <h3 className="text-xl font-semibold text-blue-900 mb-2">Advanced Property Search</h3>
        <p className="text-blue-700 mb-4">RealScout search widget will be integrated here</p>
        <a
          href="/properties"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
        >
          Search Properties
        </a>
      </div>
    </div>
  );
}
