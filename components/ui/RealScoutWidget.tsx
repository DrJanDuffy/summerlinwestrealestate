/**
 * RealScout Widget Component
 * Reusable component for RealScout listings and search widgets
 */
'use client';

import Script from 'next/script';

interface RealScoutWidgetProps {
  type: 'listings' | 'search';
  agentEncodedId: string;
  className?: string;
  sortOrder?: 'NEWEST' | 'OLDEST' | 'PRICE_ASC' | 'PRICE_DESC';
}

export default function RealScoutWidget({
  type,
  agentEncodedId,
  className = '',
  sortOrder = 'NEWEST',
}: RealScoutWidgetProps) {
  return (
    <>
      {/* RealScout Script */}
      <Script
        src="https://em.realscout.com/widgets/realscout-web-components.umd.js"
        strategy="afterInteractive"
      />

      {/* Widget Styles */}
      <style jsx>{`
        realscout-office-listings,
        realscout-advanced-search {
          --rs-listing-divider-color: #0e64c8;
          --rs-as-button-text-color: #ffffff;
          --rs-as-background-color: #000000;
          --rs-as-button-color: #d0021b;
          --rs-as-widget-width: 100% !important;
          width: 100%;
        }
      `}</style>

      {/* Widget Container */}
      <div className={className}>
        {type === 'listings' && (
          <>
            {/* @ts-expect-error - Web component from RealScout */}
            <realscout-office-listings
              agent-encoded-id={agentEncodedId}
              sort-order={sortOrder}
            />
          </>
        )}
        {type === 'search' && (
          <>
            {/* @ts-expect-error - Web component from RealScout */}
            <realscout-advanced-search agent-encoded-id={agentEncodedId} />
          </>
        )}
      </div>
    </>
  );
}

