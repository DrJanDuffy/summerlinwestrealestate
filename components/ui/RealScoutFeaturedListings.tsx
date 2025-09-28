'use client';

import { motion } from 'framer-motion';

interface RealScoutFeaturedListingsProps {
  agentEncodedId?: string;
  sortOrder?: string;
  listingStatus?: string;
  propertyTypes?: string;
  className?: string;
}

export default function RealScoutFeaturedListings({
  agentEncodedId = 'QWdlbnQtMjI1MDUw', // Dr. Jan Duffy's Agent ID
  sortOrder = 'STATUS_AND_SIGNIFICANT_CHANGE',
  listingStatus = 'For Sale',
  propertyTypes = 'SFR,MF,TC,LAL,MOBILE,OTHER',
  className = '',
}: RealScoutFeaturedListingsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`realscout-featured-listings-container ${className}`}
    >
      {/* RealScout Your Listings Web Component - Featured Properties */}
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
