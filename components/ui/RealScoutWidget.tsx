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
  // Build attribute string for listings widget
  let listingAttrs = `agent-encoded-id="${agentEncodedId}" sort-order="${sortOrder}"`;
  if (listingStatus) listingAttrs += ` listing-status="${listingStatus}"`;
  if (propertyTypes) listingAttrs += ` property-types="${propertyTypes}"`;
  if (priceMin) listingAttrs += ` price-min="${priceMin}"`;
  if (priceMax) listingAttrs += ` price-max="${priceMax}"`;

  // Build attribute string for search widget
  const searchAttrs = `agent-encoded-id="${agentEncodedId}"`;

  // Render HTML for web components
  const listingHtml = `<realscout-office-listings ${listingAttrs}></realscout-office-listings>`;
  const searchHtml = `<realscout-advanced-search ${searchAttrs}></realscout-advanced-search>`;

  return (
    <div
      className={className}
      dangerouslySetInnerHTML={{
        __html: type === 'listings' ? listingHtml : searchHtml,
      }}
    />
  );
}
