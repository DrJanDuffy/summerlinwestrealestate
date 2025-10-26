/**
 * RealScout Widget Component
 * Reusable component for RealScout listings and search widgets
 *
 * Note: The RealScout script is loaded globally in app/layout.tsx
 * This component only renders the web component tags
 */
'use client';

interface RealScoutWidgetProps {
  type: 'listings' | 'search';
  agentEncodedId: string;
  className?: string;
  sortOrder?: 'NEWEST' | 'OLDEST' | 'PRICE_ASC' | 'PRICE_DESC';
  listingStatus?: string;
  propertyTypes?: string;
  priceMin?: string;
  priceMax?: string;
}

export default function RealScoutWidget({
  type,
  agentEncodedId,
  className = '',
  sortOrder = 'NEWEST',
  listingStatus,
  propertyTypes,
  priceMin,
  priceMax,
}: RealScoutWidgetProps) {
  return (
    <div className={className}>
      {type === 'listings' && (
        <div
          dangerouslySetInnerHTML={{
            __html: `<realscout-office-listings 
              agent-encoded-id="${agentEncodedId}" 
              sort-order="${sortOrder}" 
              ${listingStatus ? `listing-status="${listingStatus}"` : ''} 
              ${propertyTypes ? `property-types="${propertyTypes}"` : ''} 
              ${priceMin ? `price-min="${priceMin}"` : ''} 
              ${priceMax ? `price-max="${priceMax}"` : ''}
            ></realscout-office-listings>`,
          }}
        />
      )}
      {type === 'search' && (
        <div
          dangerouslySetInnerHTML={{
            __html: `<realscout-advanced-search agent-encoded-id="${agentEncodedId}"></realscout-advanced-search>`,
          }}
        />
      )}
    </div>
  );
}
