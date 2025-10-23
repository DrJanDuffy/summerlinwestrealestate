'use client';

import { motion } from 'framer-motion';

interface RealScoutFeaturedListingsCleanProps {
  agentEncodedId?: string;
  sortOrder?: string;
  listingStatus?: string;
  propertyTypes?: string;
  className?: string;
}

export default function RealScoutFeaturedListingsClean({
  agentEncodedId = 'QWdlbnQtMjI1MDUw',
  sortOrder = 'NEWEST',
  listingStatus = 'For Sale',
  propertyTypes = 'SFR',
  className = '',
}: RealScoutFeaturedListingsCleanProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`realscout-featured-listings-clean ${className}`}
    >
      {/* RealScout Your Listings - Clean Implementation */}
      <style jsx>{`
        realscout-your-listings {
          --rs-listing-divider-color: #0e64c8;
          width: 100%;
        }
      `}</style>
      
      {/* @ts-ignore - RealScout web component */}
      <realscout-your-listings
        agent-encoded-id={agentEncodedId}
        sort-order={sortOrder}
        listing-status={listingStatus}
        property-types={propertyTypes}
      />
    </motion.div>
  );
}
