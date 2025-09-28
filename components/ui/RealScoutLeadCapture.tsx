'use client';
import { useEffect } from 'react';

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
  title = 'Get Your Free Summerlin West Market Report',
  subtitle = 'Stay ahead of the market with our exclusive insights',
  variant = 'inline',
  source = 'Website',
  community: _community = 'Summerlin West',
  propertyType = 'Any',
  priceRange = 'Any',
  agentId: _agentId = 'QWdlbnQtMjI1MDUw',
  showMarketReport: _showMarketReport = true,
  showValuation: _showValuation = true,
  showConsultation: _showConsultation = true,
}: RealScoutLeadCaptureProps) {
  useEffect(() => {
    // Load RealScout lead capture widget script
    if (!document.querySelector('script[src*="realscout-web-components"]')) {
      const script = document.createElement('script');
      script.src = 'https://em.realscout.com/widgets/realscout-web-components.umd.js';
      script.type = 'module';
      document.head.appendChild(script);
    }

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
        
        realscout-lead-capture .rs-form-input {
          width: 100%;
          padding: 0.75rem;
          border: 2px solid #e5e7eb;
          border-radius: 8px;
          font-size: 1rem;
          transition: border-color 0.3s ease;
        }
        
        realscout-lead-capture .rs-form-input:focus {
          outline: none;
          border-color: #3A8DDE;
          box-shadow: 0 0 0 3px rgba(58, 141, 222, 0.1);
        }
        
        realscout-lead-capture .rs-form-select {
          width: 100%;
          padding: 0.75rem;
          border: 2px solid #e5e7eb;
          border-radius: 8px;
          font-size: 1rem;
          background: white;
          transition: border-color 0.3s ease;
        }
        
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
      `;
      document.head.appendChild(style);
    }
  }, []);

  return (
    <div className="real-scout-lead-capture">
      {/* RealScout Lead Capture Widget - Temporarily disabled for build */}
      <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
        <h3 className="text-xl font-semibold text-green-900 mb-2">Get Your Free Market Report</h3>
        <p className="text-green-700 mb-4">RealScout lead capture widget will be integrated here</p>
        <a
          href="/contact"
          className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
}
