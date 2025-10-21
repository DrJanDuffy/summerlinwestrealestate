'use client';

import { useEffect } from 'react';
import { initializeLeadTracking, generateLeadTrackingSchema } from '../../lib/lead-tracking';
import Script from 'next/script';

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
