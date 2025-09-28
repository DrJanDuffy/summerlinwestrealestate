'use client';

import { useEffect, useState } from 'react';

interface RealScoutLeadCaptureProps {
  title?: string;
  subtitle?: string;
  variant?: 'inline' | 'modal' | 'sidebar';
  source?: string;
  community?: string;
  propertyType?: string;
  priceRange?: string;
  agentId?: string;
  showMarketReport?: boolean;
  showValuation?: boolean;
  showConsultation?: boolean;
}

export default function RealScoutLeadCapture({
  title: _title = 'Get Your Free Summerlin West Market Report',
  subtitle: _subtitle = 'Stay ahead of the market with our exclusive insights',
  variant = 'inline',
  source = 'Website',
  community = 'Summerlin West',
  propertyType = 'Any',
  priceRange = 'Any',
  agentId = 'QWdlbnQtMjI1MDUw', // Dr. Jan Duffy's RealScout Agent ID
  showMarketReport = true,
  showValuation = true,
  showConsultation = true,
}: RealScoutLeadCaptureProps) {
  const [widgetLoaded, setWidgetLoaded] = useState(false);

  useEffect(() => {
    // Load RealScout lead capture widget script
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
            console.warn('RealScout lead capture widget failed to load, showing fallback');
            setWidgetLoaded(false);
          };
          
          document.head.appendChild(script);
        } else {
          setWidgetLoaded(true);
        }
      } catch (error) {
        console.warn('Error loading RealScout lead capture widget:', error);
        setWidgetLoaded(false);
      }
    };

    loadRealScoutWidget();

    // Add custom styling for RealScout lead capture
    if (!document.querySelector('style[data-realscout-lead-styles]')) {
      const style = document.createElement('style');
      style.setAttribute('data-realscout-lead-styles', 'true');
      style.textContent = `
        realscout-lead-capture {
          --rs-primary-color: #3A8DDE;
          --rs-secondary-color: #0A2540;
          --rs-accent-color: #16B286;
          --rs-border-radius: 12px;
          --rs-font-family: 'Inter', system-ui, sans-serif;
          width: 100%;
          max-width: 500px;
          margin: 0 auto;
          display: block;
        }
        
        realscout-lead-capture .rs-lead-header {
          background: linear-gradient(135deg, #3A8DDE 0%, #0A2540 100%);
          color: white;
          padding: 1.5rem;
          border-radius: 12px 12px 0 0;
          text-align: center;
        }
        
        realscout-lead-capture .rs-lead-form {
          background: white;
          padding: 1.5rem;
          border-radius: 0 0 12px 12px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
        }
        
        realscout-lead-capture .rs-form-group {
          margin-bottom: 1rem;
        }
        
        realscout-lead-capture .rs-form-label {
          display: block;
          font-weight: 600;
          color: #0A2540;
          margin-bottom: 0.5rem;
        }
        
        realscout-lead-capture .rs-form-input,
        realscout-lead-capture .rs-form-select {
          width: 100%;
          padding: 0.75rem;
          border: 2px solid #e5e7eb;
          border-radius: 8px;
          font-size: 1rem;
          transition: border-color 0.3s ease;
        }
        
        realscout-lead-capture .rs-form-input:focus,
        realscout-lead-capture .rs-form-select:focus {
          outline: none;
          border-color: #3A8DDE;
          box-shadow: 0 0 0 3px rgba(58, 141, 222, 0.1);
        }
        
        realscout-lead-capture .rs-form-checkbox {
          margin-right: 0.5rem;
          accent-color: #3A8DDE;
        }
        
        realscout-lead-capture .rs-submit-button {
          width: 100%;
          background: #3A8DDE;
          color: white;
          border: none;
          border-radius: 8px;
          padding: 1rem;
          font-size: 1.1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        realscout-lead-capture .rs-submit-button:hover {
          background: #0A2540;
          transform: translateY(-2px);
        }
        
        realscout-lead-capture .rs-submit-button:disabled {
          background: #9ca3af;
          cursor: not-allowed;
          transform: none;
        }
        
        realscout-lead-capture .rs-privacy-text {
          font-size: 0.875rem;
          color: #6b7280;
          margin-top: 1rem;
          text-align: center;
        }
        
        realscout-lead-capture .rs-privacy-link {
          color: #3A8DDE;
          text-decoration: underline;
        }
        
        /* Checkbox group styling */
        realscout-lead-capture .rs-checkbox-group {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
          margin: 1rem 0;
        }
        
        realscout-lead-capture .rs-checkbox-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        
        /* Responsive adjustments */
        @media (max-width: 768px) {
          realscout-lead-capture {
            max-width: 100%;
          }
          
          realscout-lead-capture .rs-lead-header {
            padding: 1rem;
          }
          
          realscout-lead-capture .rs-lead-form {
            padding: 1rem;
          }
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  return (
    <div className="real-scout-lead-capture">
      {/* RealScout Lead Capture Widget */}
      <div className="widget-container">
        {widgetLoaded ? (
          // @ts-ignore - RealScout web component
          <realscout-lead-capture
            agent-id={agentId}
            source={source}
            community={community}
            property-type={propertyType}
            price-range={priceRange}
            show-market-report={showMarketReport}
            show-valuation={showValuation}
            show-consultation={showConsultation}
            variant={variant}
          />
        ) : (
          <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
            <h3 className="text-xl font-semibold text-green-900 mb-2">Get Your Free Market Report</h3>
            <p className="text-green-700 mb-4">RealScout lead capture widget is loading...</p>
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600 mx-auto mb-4"></div>
            <p className="text-sm text-green-600">Loading lead capture form</p>
          </div>
        )}
      </div>
    </div>
  );
}
