'use client';

import Script from 'next/script';
import { useEffect } from 'react';
import { generateLeadTrackingSchema, initializeLeadTracking } from '../../lib/lead-tracking';

interface LeadTrackingProviderProps {
  children: React.ReactNode;
}

export default function LeadTrackingProvider({ children }: LeadTrackingProviderProps) {
  useEffect(() => {
    // Initialize lead tracking when component mounts
    initializeLeadTracking();
  }, []);

  return (
    <>
      {/* Lead Tracking Schema */}
      <Script
        id="lead-tracking-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateLeadTrackingSchema()),
        }}
      />
      {children}
    </>
  );
}
