'use client';

import React from 'react';

/**
 * RealScoutOfficeListings Component
 * Placeholder component for RealScout office listings integration
 */
export default function RealScoutOfficeListings() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">
        Office Listings
      </h3>
      <div className="text-center py-8">
        <div className="text-gray-500 mb-4">
          <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
          </svg>
        </div>
        <h4 className="text-lg font-medium text-gray-900 mb-2">
          Office Listings Coming Soon
        </h4>
        <p className="text-gray-600 mb-4">
          We're updating our office listings system. Contact Dr. Jan Duffy for personalized assistance.
        </p>
        <a
          href="tel:702-550-0112"
          className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
        >
          📞 Call (702) 550-0112
        </a>
      </div>
    </div>
  );
}

