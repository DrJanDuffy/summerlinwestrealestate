'use client';
import { useEffect } from 'react';

interface RealScoutPropertyValuationProps {
  title?: string;
  subtitle?: string;
  variant?: 'full' | 'compact' | 'modal';
  showComparables?: boolean;
  showMarketAnalysis?: boolean;
  showInvestmentMetrics?: boolean;
  agentId?: string;
  defaultAddress?: string;
  showLeadCapture?: boolean;
}

export default function RealScoutPropertyValuation({
  title = 'Get Your Free Property Valuation',
  subtitle = "Discover your home's current market value with our advanced analysis",
  variant = 'full',
  showComparables: _showComparables = true,
  showMarketAnalysis: _showMarketAnalysis = true,
  showInvestmentMetrics: _showInvestmentMetrics = true,
  agentId: _agentId = 'QWdlbnQtMjI1MDUw',
  defaultAddress: _defaultAddress = '',
  showLeadCapture: _showLeadCapture = true,
}: RealScoutPropertyValuationProps) {
  useEffect(() => {
    // Load RealScout property valuation widget script
    if (!document.querySelector('script[src*="realscout-web-components"]')) {
      const script = document.createElement('script');
      script.src = 'https://em.realscout.com/widgets/realscout-web-components.umd.js';
      script.type = 'module';
      document.head.appendChild(script);
    }

    // Add custom styling for RealScout property valuation
    if (!document.querySelector('style[data-realscout-valuation-styles]')) {
      const style = document.createElement('style');
      style.setAttribute('data-realscout-valuation-styles', 'true');
      style.textContent = `
        realscout-property-valuation {
          --rs-primary-color: #3A8DDE;
          --rs-secondary-color: #0A2540;
          --rs-accent-color: #16B286;
          --rs-border-radius: 12px;
          --rs-font-family: 'Inter', system-ui, sans-serif;
          width: 100%;
          max-width: 800px;
          margin: 0 auto;
        }
        
        realscout-property-valuation .rs-valuation-header {
          background: linear-gradient(135deg, #3A8DDE 0%, #0A2540 100%);
          color: white;
          padding: 2rem;
          border-radius: 12px 12px 0 0;
          text-align: center;
        }
        
        realscout-property-valuation .rs-valuation-form {
          background: white;
          padding: 1.5rem;
          border-radius: 0 0 12px 12px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
        }
        
        realscout-property-valuation .rs-address-input {
          width: 100%;
          padding: 1rem;
          border: 2px solid #e5e7eb;
          border-radius: 8px;
          font-size: 1rem;
          margin-bottom: 1rem;
          transition: border-color 0.3s ease;
        }
        
        realscout-property-valuation .rs-address-input:focus {
          outline: none;
          border-color: #3A8DDE;
          box-shadow: 0 0 0 3px rgba(58, 141, 222, 0.1);
        }
        
        realscout-property-valuation .rs-valuation-button {
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
        
        realscout-property-valuation .rs-valuation-button:hover {
          background: #0A2540;
          transform: translateY(-2px);
        }
        
        realscout-property-valuation .rs-valuation-results {
          background: #f8fafc;
          border-radius: 8px;
          padding: 1.5rem;
          margin-top: 1rem;
        }
        
        realscout-property-valuation .rs-valuation-range {
          font-size: 2rem;
          font-weight: 700;
          color: #3A8DDE;
          text-align: center;
          margin-bottom: 1rem;
        }
        
        realscout-property-valuation .rs-confidence-score {
          text-align: center;
          color: #6b7280;
          font-size: 0.875rem;
          margin-bottom: 1rem;
        }
        
        realscout-property-valuation .rs-comparables-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1rem;
          margin: 1rem 0;
        }
        
        realscout-property-valuation .rs-comparable-item {
          background: white;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          padding: 1rem;
          text-align: center;
        }
        
        realscout-property-valuation .rs-comparable-price {
          font-weight: 600;
          color: #0A2540;
          margin-bottom: 0.5rem;
        }
        
        realscout-property-valuation .rs-comparable-details {
          font-size: 0.875rem;
          color: #6b7280;
        }
        
        realscout-property-valuation .rs-market-insights {
          background: white;
          border-radius: 8px;
          padding: 1rem;
          margin: 1rem 0;
        }
        
        realscout-property-valuation .rs-insight-title {
          font-weight: 600;
          color: #0A2540;
          margin-bottom: 0.5rem;
        }
        
        realscout-property-valuation .rs-insight-text {
          color: #6b7280;
          font-size: 0.875rem;
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  return (
    <div className="real-scout-property-valuation">
      {/* RealScout Property Valuation Widget - Temporarily disabled for build */}
      <div className="bg-teal-50 border border-teal-200 rounded-lg p-8 text-center">
        <h3 className="text-xl font-semibold text-teal-900 mb-2">Property Valuation</h3>
        <p className="text-teal-700 mb-4">
          RealScout property valuation widget will be integrated here
        </p>
        <a
          href="/contact"
          className="inline-flex items-center px-6 py-3 bg-teal-600 text-white font-medium rounded-lg hover:bg-teal-700 transition-colors"
        >
          Get Valuation
        </a>
      </div>
    </div>
  );
}
