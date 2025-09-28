'use client';

import dynamic from 'next/dynamic';

// Dynamic imports for RealScout widgets
const RealScoutOfficeListings = dynamic(
  () => import('./RealScoutOfficeListings'),
  {
    ssr: false,
    loading: () => (
      <div className="flex items-center justify-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        <span className="ml-3 text-gray-600">Loading properties...</span>
      </div>
    ),
  }
);

const RealScoutLeadCapture = dynamic(
  () => import('./RealScoutWidgetEnhanced'),
  {
    ssr: false,
    loading: () => (
      <div className="flex items-center justify-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
        <span className="ml-3 text-gray-600">Loading form...</span>
      </div>
    ),
  }
);

interface RealScoutIntegrationProps {
  type: 'listings' | 'lead-capture';
  className?: string;
}

export default function RealScoutIntegration({ type, className = '' }: RealScoutIntegrationProps) {
  if (type === 'listings') {
    return (
      <div className={className}>
        <RealScoutOfficeListings />
      </div>
    );
  }

  if (type === 'lead-capture') {
    return (
      <div className={className}>
        <RealScoutLeadCapture
          variant="lead-capture"
          agentId="QWdlbnQtMjI1MDUw"
          source="About Page"
          community="Summerlin West"
        />
      </div>
    );
  }

  return null;
}
