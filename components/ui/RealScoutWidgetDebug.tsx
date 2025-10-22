'use client';

import { useEffect, useState } from 'react';

interface RealScoutWidgetDebugProps {
  variant?: 'search' | 'listings' | 'lead-capture';
  agentId?: string;
  priceMin?: number;
  priceMax?: number;
}

export default function RealScoutWidgetDebug({
  variant = 'search',
  agentId = 'QWdlbnQtMjI1MDUw',
  priceMin = 400000,
  priceMax = 2000000,
}: RealScoutWidgetDebugProps) {
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [scriptError, _setScriptError] = useState<string | null>(null);
  const [debugInfo, setDebugInfo] = useState<string[]>([]);

  const addDebugInfo = (info: string) => {
    setDebugInfo((prev) => [...prev, `${new Date().toISOString()}: ${info}`]);
    console.log(`RealScout Debug: ${info}`);
  };

  useEffect(() => {
    addDebugInfo('Component mounted');

    // RealScout script is already loaded globally in layout.tsx
    addDebugInfo('RealScout script loaded globally');
    setScriptLoaded(true);

    // Wait a bit for the custom elements to be defined
    setTimeout(() => {
      const isDefined =
        customElements.get('realscout-search-widget') ||
        customElements.get('realscout-office-listings') ||
        customElements.get('realscout-lead-capture');

      if (isDefined) {
        addDebugInfo('RealScout custom elements are defined');
      } else {
        addDebugInfo('RealScout custom elements are NOT defined');
      }
    }, 1000);

    // Add custom styling
    if (!document.querySelector('style[data-realscout-debug-styles]')) {
      const style = document.createElement('style');
      style.setAttribute('data-realscout-debug-styles', 'true');
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
          display: block;
          min-height: 200px;
          border: 2px dashed #3A8DDE;
          padding: 1rem;
        }
        
        .realscout-debug-info {
          background: #f8f9fa;
          border: 1px solid #dee2e6;
          border-radius: 8px;
          padding: 1rem;
          margin: 1rem 0;
          font-family: monospace;
          font-size: 12px;
          max-height: 200px;
          overflow-y: auto;
        }
        
        .realscout-debug-info h4 {
          margin: 0 0 0.5rem 0;
          color: #495057;
        }
        
        .realscout-debug-info ul {
          margin: 0;
          padding-left: 1rem;
        }
        
        .realscout-debug-info li {
          margin: 0.25rem 0;
          color: #6c757d;
        }
      `;
      document.head.appendChild(style);
      addDebugInfo('Custom styles added');
    }

    return () => {
      addDebugInfo('Component unmounting');
    };
  }, []);

  const renderWidget = () => {
    if (!scriptLoaded) {
      return (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-8 text-center">
          <h3 className="text-xl font-semibold text-yellow-900 mb-2">
            Loading RealScout Widget...
          </h3>
          <p className="text-yellow-700 mb-4">
            Please wait while we load the RealScout functionality.
          </p>
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-yellow-600 mx-auto"></div>
        </div>
      );
    }

    if (scriptError) {
      return (
        <div className="bg-red-50 border border-red-200 rounded-lg p-8 text-center">
          <h3 className="text-xl font-semibold text-red-900 mb-2">RealScout Widget Error</h3>
          <p className="text-red-700 mb-4">{scriptError}</p>
          <p className="text-sm text-red-600">Please refresh the page or try again later.</p>
        </div>
      );
    }

    switch (variant) {
      case 'search':
        return (
          <div>
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
          <div>
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
          <div>
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
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Unknown Widget Type</h3>
            <p className="text-gray-700">Please specify a valid widget variant.</p>
          </div>
        );
    }
  };

  return (
    <div className="real-scout-widget-debug">
      <div className="realscout-debug-info">
        <h4>RealScout Widget Debug Info</h4>
        <ul>
          <li>Variant: {variant}</li>
          <li>Agent ID: {agentId}</li>
          <li>
            Price Range: ${priceMin.toLocaleString()} - ${priceMax.toLocaleString()}
          </li>
          <li>Script Loaded: {scriptLoaded ? 'Yes' : 'No'}</li>
          <li>Script Error: {scriptError || 'None'}</li>
          <li>
            Custom Elements Available:{' '}
            {typeof customElements !== 'undefined'
              ? customElements.get('realscout-search-widget')
                ? 'Yes'
                : 'No'
              : 'Unknown'}
          </li>
        </ul>
        <h4>Debug Log:</h4>
        <ul>
          {debugInfo.map((info, index) => (
            <li key={index}>{info}</li>
          ))}
        </ul>
      </div>

      {renderWidget()}
    </div>
  );
}
