'use client';

import { motion } from 'framer-motion';

interface RealScoutOfficeListingsProps {
  agentEncodedId?: string;
  sortOrder?: string;
  listingStatus?: string;
  propertyTypes?: string;
  priceMin?: string;
  priceMax?: string;
  className?: string;
}

export default function RealScoutOfficeListings({
  agentEncodedId = 'QWdlbnQtMjI1MDUw', // Dr. Jan Duffy's Agent ID
  sortOrder = 'STATUS_AND_SIGNIFICANT_CHANGE', // Premium properties with significant changes first
  listingStatus = 'For Sale,For Rent,In Contract,Sold,Rented', // All statuses for comprehensive view
  propertyTypes = 'SFR,MF,TC,LAL', // Premium property types (removed MOBILE,OTHER for luxury focus)
  priceMin = '800000', // Premium price range starting at $800K
  priceMax = '2000000', // Up to $2M+ for luxury properties
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
