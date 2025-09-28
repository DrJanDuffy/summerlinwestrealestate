'use client';

import { motion } from 'framer-motion';

interface RealScoutYourListingsProps {
  agentEncodedId?: string;
  sortOrder?: 'STATUS_AND_SIGNIFICANT_CHANGE' | 'PRICE_HIGH_TO_LOW' | 'PRICE_LOW_TO_HIGH' | 'LIST_DATE_NEW_TO_OLD' | 'LIST_DATE_OLD_TO_NEW';
  listingStatus?: string;
  propertyTypes?: string;
  className?: string;
}

export default function RealScoutYourListings({
  agentEncodedId = 'QWdlbnQtMjI1MDUw', // Dr. Jan Duffy's Agent ID
  sortOrder = 'STATUS_AND_SIGNIFICANT_CHANGE',
  listingStatus = 'For Sale,For Rent,In Contract,Sold,Rented',
  propertyTypes = 'SFR,MF,TC,LAL,MOBILE,OTHER',
  className = '',
}: RealScoutYourListingsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`realscout-your-listings-container ${className}`}
    >
      {/* RealScout Your Listings Web Component */}
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
