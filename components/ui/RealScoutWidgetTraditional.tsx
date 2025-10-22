'use client';

import { useEffect, useRef } from 'react';

interface RealScoutWidgetTraditionalProps {
  variant?: 'search' | 'listings' | 'lead-capture';
  agentId?: string;
  priceMin?: number;
  priceMax?: number;
}

export default function RealScoutWidgetTraditional({
  variant = 'search',
  agentId = 'QWdlbnQtMjI1MDUw',
  priceMin = 400000,
  priceMax = 2000000,
}: RealScoutWidgetTraditionalProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Clear any existing content
    containerRef.current.innerHTML = '';

    // Create the appropriate widget based on variant
    let widgetHTML = '';

    switch (variant) {
      case 'search':
        widgetHTML = `
          <div style="width: 100%; max-width: 1200px; margin: 0 auto;">
            <iframe 
              src="https://drjanduffy.realscout.com/homesearch/shared-searches/U2hhcmVhYmxlU2VhcmNoTGluay05NTMy"
              width="100%" 
              height="600" 
              frameborder="0"
              title="RealScout Property Search"
              style="border-radius: 12px; box-shadow: 0 10px 25px rgba(0,0,0,0.1);"
            ></iframe>
          </div>
        `;
        break;

      case 'listings':
        widgetHTML = `
          <div style="width: 100%; max-width: 1400px; margin: 0 auto;">
            <iframe 
              src="https://drjanduffy.realscout.com/homesearch/shared-searches/U2hhcmVhYmxlU2VhcmNoTGluay05NTMy"
              width="100%" 
              height="800" 
              frameborder="0"
              title="RealScout Property Listings"
              style="border-radius: 12px; box-shadow: 0 10px 25px rgba(0,0,0,0.1);"
            ></iframe>
          </div>
        `;
        break;

      case 'lead-capture':
        widgetHTML = `
          <div style="width: 100%; max-width: 500px; margin: 0 auto;">
            <div style="background: linear-gradient(135deg, #3A8DDE 0%, #0A2540 100%); color: white; padding: 1.5rem; border-radius: 12px 12px 0 0; text-align: center;">
              <h3 style="margin: 0; font-size: 1.25rem; font-weight: 600;">Get Your Free Market Report</h3>
              <p style="margin: 0.5rem 0 0 0; opacity: 0.9;">Stay ahead of the Summerlin West market</p>
            </div>
            <div style="background: white; padding: 1.5rem; border-radius: 0 0 12px 12px; box-shadow: 0 10px 25px rgba(0,0,0,0.1);">
              <form action="https://drjanduffy.realscout.com/contact" method="POST" style="display: flex; flex-direction: column; gap: 1rem;">
                <div>
                  <label style="display: block; font-weight: 600; color: #0A2540; margin-bottom: 0.5rem;">Name</label>
                  <input 
                    type="text" 
                    name="name" 
                    required
                    style="width: 100%; padding: 0.75rem; border: 2px solid #e5e7eb; border-radius: 8px; font-size: 1rem; transition: border-color 0.3s ease;"
                    onFocus={(e) => e.target.style.borderColor = '#3A8DDE'}
                    onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                  />
                </div>
                <div>
                  <label style="display: block; font-weight: 600; color: #0A2540; margin-bottom: 0.5rem;">Email</label>
                  <input 
                    type="email" 
                    name="email" 
                    required
                    style="width: 100%; padding: 0.75rem; border: 2px solid #e5e7eb; border-radius: 8px; font-size: 1rem; transition: border-color 0.3s ease;"
                    onFocus={(e) => e.target.style.borderColor = '#3A8DDE'}
                    onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                  />
                </div>
                <div>
                  <label style="display: block; font-weight: 600; color: #0A2540; margin-bottom: 0.5rem;">Phone</label>
                  <input 
                    type="tel" 
                    name="phone"
                    style="width: 100%; padding: 0.75rem; border: 2px solid #e5e7eb; border-radius: 8px; font-size: 1rem; transition: border-color 0.3s ease;"
                    onFocus={(e) => e.target.style.borderColor = '#3A8DDE'}
                    onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                  />
                </div>
                <div style="display: flex; flex-direction: column; gap: 0.5rem; margin: 1rem 0;">
                  <label style="display: flex; align-items: center; gap: 0.5rem;">
                    <input type="checkbox" name="market_report" value="true" style="accent-color: #3A8DDE;" />
                    <span style="font-size: 0.875rem;">Get monthly market report</span>
                  </label>
                  <label style="display: flex; align-items: center; gap: 0.5rem;">
                    <input type="checkbox" name="valuation" value="true" style="accent-color: #3A8DDE;" />
                    <span style="font-size: 0.875rem;">Get property valuation</span>
                  </label>
                </div>
                <button 
                  type="submit"
                  style="width: 100%; background: #3A8DDE; color: white; border: none; border-radius: 8px; padding: 1rem; font-size: 1.1rem; font-weight: 600; cursor: pointer; transition: all 0.3s ease;"
                  onMouseOver={(e) => e.target.style.background = '#0A2540'}
                  onMouseOut={(e) => e.target.style.background = '#3A8DDE'}
                >
                  Get My Free Report
                </button>
                <p style="font-size: 0.875rem; color: #6b7280; margin-top: 1rem; text-align: center;">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </form>
            </div>
          </div>
        `;
        break;

      default:
        widgetHTML = `
          <div style="background: #f3f4f6; border: 2px dashed #d1d5db; border-radius: 8px; padding: 2rem; text-align: center;">
            <h3 style="color: #374151; margin-bottom: 1rem;">Invalid Widget Type</h3>
            <p style="color: #6b7280;">Please specify a valid widget variant.</p>
          </div>
        `;
    }

    // Insert the widget HTML
    containerRef.current.innerHTML = widgetHTML;
  }, [variant, agentId, priceMin, priceMax]);

  return (
    <div className="real-scout-widget-traditional">
      <div ref={containerRef} className="widget-container" />
    </div>
  );
}
