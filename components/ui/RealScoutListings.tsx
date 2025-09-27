'use client';
import { useEffect } from 'react';

export default function RealScoutListings() {
  useEffect(() => {
    // Add the script to the head if it doesn't exist
    if (
      !document.querySelector(
        'script[src="https://em.realscout.com/widgets/realscout-web-components.umd.js"]'
      )
    ) {
      const script = document.createElement('script');
      script.src = 'https://em.realscout.com/widgets/realscout-web-components.umd.js';
      script.type = 'module';
      document.head.appendChild(script);
    }

    // Add the styles if they don't exist
    if (!document.querySelector('style[data-realscout-styles]')) {
      const style = document.createElement('style');
      style.setAttribute('data-realscout-styles', 'true');
      style.textContent = `
        realscout-office-listings {
          --rs-listing-divider-color: rgb(101, 141, 172);
          width: 100%;
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  return (
    <>
      {/* Remove <Head> <script> and <style> tags, rely on useEffect for script and style injection */}
      {/* RealScout Listings Widget - Temporarily disabled for build */}
      <div className="bg-orange-50 border border-orange-200 rounded-lg p-8 text-center">
        <h3 className="text-xl font-semibold text-orange-900 mb-2">Featured Properties</h3>
        <p className="text-orange-700 mb-4">RealScout listings widget will be integrated here</p>
        <a 
          href="/properties" 
          className="inline-flex items-center px-6 py-3 bg-orange-600 text-white font-medium rounded-lg hover:bg-orange-700 transition-colors"
        >
          View All Properties
        </a>
      </div>
      {/* <realscout-office-listings
        agent-encoded-id="QWdlbnQtMjI1MDUw"
        sort-order="STATUS_AND_SIGNIFICANT_CHANGE"
        listing-status="For Sale"
        property-types="SFR,MF,TC"
        price-min="500000"
        price-max="1200000"
      /> */}
    </>
  );
}
