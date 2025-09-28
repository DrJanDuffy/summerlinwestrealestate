'use client';

import { motion } from 'framer-motion';

interface RealScoutOfficeListingsProps {
  agentEncodedId?: string;
  sortOrder?: string;
  listingStatus?: string;
  propertyTypes?: string;
  priceMin?: number;
  priceMax?: number;
  className?: string;
}

export default function RealScoutOfficeListings({
  agentEncodedId = 'QWdlbnQtMjI1MDUw', // Dr. Jan Duffy's Agent ID
  sortOrder = 'NEWEST',
  listingStatus = 'For Sale,For Rent,In Contract,Sold,Rented',
  propertyTypes = 'SFR,MF,TC,LAL,MOBILE,OTHER',
  priceMin = 500000,
  priceMax = 600000,
  className = '',
}: RealScoutOfficeListingsProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`realscout-office-listings-container ${className}`}
    >
      {/* RealScout Office Listings Web Component - Primary Lead Generator */}
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
