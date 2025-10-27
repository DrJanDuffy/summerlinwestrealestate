/**
 * RealScout Widget Component
 * Reusable component for RealScout listings and search widgets
 *
 * Note: The RealScout script is loaded globally in app/layout.tsx
 * This component uses useEffect to render web components after mount
 */
'use client';

import { useEffect, useRef } from 'react';

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
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Clear any existing content
    containerRef.current.innerHTML = '';

    // Create the web component element
    const element = document.createElement(
      type === 'listings' ? 'realscout-office-listings' : 'realscout-advanced-search'
    );

    // Set attributes
    element.setAttribute('agent-encoded-id', agentEncodedId);
    
    if (type === 'listings') {
      element.setAttribute('sort-order', sortOrder);
      if (listingStatus) element.setAttribute('listing-status', listingStatus);
      if (propertyTypes) element.setAttribute('property-types', propertyTypes);
      if (priceMin) element.setAttribute('price-min', priceMin);
      if (priceMax) element.setAttribute('price-max', priceMax);
    }

    // Append to container
    containerRef.current.appendChild(element);
  }, [type, agentEncodedId, sortOrder, listingStatus, propertyTypes, priceMin, priceMax]);

  return <div ref={containerRef} className={className} />;
}
