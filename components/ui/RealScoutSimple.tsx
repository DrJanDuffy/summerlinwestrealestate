'use client';

import { motion } from 'framer-motion';

interface RealScoutSimpleProps {
  agentEncodedId?: string;
  sortOrder?: string;
  listingStatus?: string;
  propertyTypes?: string;
  priceMin?: string;
  priceMax?: string;
  className?: string;
}

export default function RealScoutSimple({
  agentEncodedId = 'QWdlbnQtMjI1MDUw',
  sortOrder = 'NEWEST',
  listingStatus = 'For Sale',
  propertyTypes = 'SFR',
  priceMin = '500000',
  priceMax = '2000000',
  className = '',
}: RealScoutSimpleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`realscout-simple-container ${className}`}
    >
      {/* RealScout Office Listings - Simple Implementation */}
      <style jsx>{`
        realscout-office-listings {
          --rs-listing-divider-color: #0e64c8;
          width: 100%;
        }
      `}</style>
      
      {/* @ts-ignore - RealScout web component */}
      <realscout-office-listings
        agent-encoded-id={agentEncodedId}
        sort-order={sortOrder}
        listing-status={listingStatus}
        property-types={propertyTypes}
        price-min={priceMin}
        price-max={priceMax}
      />
    </motion.div>
  );
}
