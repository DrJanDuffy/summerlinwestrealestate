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
  // Create props object for web components
  const listingProps: Record<string, string> = {
    'agent-encoded-id': agentEncodedId,
    'sort-order': sortOrder,
  };
  
  if (listingStatus) listingProps['listing-status'] = listingStatus;
  if (propertyTypes) listingProps['property-types'] = propertyTypes;
  if (priceMin) listingProps['price-min'] = priceMin;
  if (priceMax) listingProps['price-max'] = priceMax;

  const searchProps: Record<string, string> = {
    'agent-encoded-id': agentEncodedId,
  };

  return (
    <div className={className}>
      {type === 'listings' && (
        <>
          {/* @ts-expect-error - Web component from RealScout */}
          <realscout-office-listings {...listingProps} />
        </>
      )}
      {type === 'search' && (
        <>
          {/* @ts-expect-error - Web component from RealScout */}
          <realscout-advanced-search {...searchProps} />
        </>
      )}
    </div>
  );
}
