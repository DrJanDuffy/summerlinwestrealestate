'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface Property {
  id: string;
  address: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  squareFeet: number;
  status: string;
  community?: string;
  description?: string;
  imageUrl?: string;
}

interface RealScoutProxyData {
  success: boolean;
  data?: any;
  fallbackData?: {
    listings: Property[];
    totalCount: number;
    message: string;
  };
  error?: string;
  endpoint?: string;
  agentId?: string;
  officeId?: string;
  timestamp?: string;
}

interface RealScoutProxyProps {
  officeId?: string;
  agentId?: string;
  priceMin?: string;
  priceMax?: string;
  propertyTypes?: string;
  className?: string;
}

export default function RealScoutProxy({
  officeId = process.env.NEXT_PUBLIC_REALSCOUT_OFFICE_ID || 'QWZmaWNlLTEyMzQ1',
  agentId = 'QWdlbnQtMjI1MDUw',
  priceMin = '500000',
  priceMax = '2000000',
  propertyTypes = 'SFR',
  className = '',
}: RealScoutProxyProps) {
  const [data, setData] = useState<RealScoutProxyData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRealScoutData = async () => {
      try {
        setLoading(true);
        setError(null);

        const params = new URLSearchParams({
          agentId: agentId,
          officeId: officeId,
          priceMin: priceMin,
          priceMax: priceMax,
          propertyTypes: propertyTypes
        });

        const response = await fetch(`/api/realscout-proxy?${params}`);
        const result = await response.json();

        console.log('RealScout proxy response:', result);
        setData(result);

        if (!result.success && !result.fallbackData) {
          setError(result.error || 'Failed to fetch RealScout data');
        }

      } catch (err) {
        console.error('RealScout proxy error:', err);
        setError(`Failed to fetch RealScout data: ${err}`);
      } finally {
        setLoading(false);
      }
    };

    fetchRealScoutData();
  }, [agentId, officeId, priceMin, priceMax, propertyTypes]);

  if (loading) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`realscout-proxy-container ${className}`}
      >
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <h3 className="text-lg font-semibold text-blue-900 mb-2">
            Loading RealScout Data
          </h3>
          <p className="text-blue-700 mb-4">Fetching MLS data via server proxy...</p>
          <p className="text-sm text-blue-600">CORS-Free Implementation</p>
        </div>
      </motion.div>
    );
  }

  if (error) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`realscout-proxy-container ${className}`}
      >
        <div className="bg-red-50 border border-red-200 rounded-lg p-8">
          <div className="text-center mb-6">
            <div className="text-red-600 mb-4">
              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-red-900 mb-2">
              RealScout Data Error
            </h3>
            <p className="text-red-700 mb-6">{error}</p>
          </div>
          
          <div className="text-center">
            <button
              onClick={() => window.location.reload()}
              className="inline-flex items-center px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-semibold"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
              </svg>
              Retry
            </button>
          </div>
        </div>
      </motion.div>
    );
  }

  const properties = data?.data?.listings || data?.fallbackData?.listings || [];
  const isFallback = !data?.success && data?.fallbackData;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`realscout-proxy-container ${className}`}
    >
      {/* Status Indicator */}
      <div className={`border rounded-lg p-4 mb-6 ${
        data?.success ? 'bg-green-50 border-green-200' : 
        isFallback ? 'bg-yellow-50 border-yellow-200' : 
        'bg-red-50 border-red-200'
      }`}>
        <div className="flex items-center">
          {data?.success ? (
            <>
              <svg className="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <h4 className="font-semibold text-green-900">RealScout API Connected</h4>
            </>
          ) : isFallback ? (
            <>
              <svg className="w-5 h-5 text-yellow-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
              <h4 className="font-semibold text-yellow-900">Using Fallback Data</h4>
            </>
          ) : (
            <>
              <svg className="w-5 h-5 text-red-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h4 className="font-semibold text-red-900">API Error</h4>
            </>
          )}
        </div>
        <p className={`text-sm mt-1 ${
          data?.success ? 'text-green-800' : 
          isFallback ? 'text-yellow-800' : 
          'text-red-800'
        }`}>
          {data?.success ? `Connected to: ${data.endpoint}` : 
           isFallback ? data?.fallbackData?.message : 
           data?.error}
        </p>
      </div>

      {/* Properties Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property: Property, index: number) => (
          <motion.div
            key={property.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
          >
            <div className="h-48 bg-gradient-to-r from-blue-100 to-blue-200 flex items-center justify-center">
              {property.imageUrl ? (
                <img 
                  src={property.imageUrl} 
                  alt={property.address}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-2">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                  <span className="text-blue-600 font-semibold text-sm">Property Image</span>
                </div>
              )}
            </div>
            
            <div className="p-4">
              <h4 className="font-semibold text-gray-900 mb-2 line-clamp-2">
                {property.address}
              </h4>
              
              {property.community && (
                <p className="text-sm text-blue-600 mb-2 font-medium">
                  {property.community}
                </p>
              )}
              
              {property.description && (
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                  {property.description}
                </p>
              )}
              
              <div className="flex items-center justify-between mb-3">
                <span className="text-2xl font-bold text-blue-600">
                  ${property.price.toLocaleString()}
                </span>
                <span className={`px-2 py-1 rounded text-xs font-medium ${
                  property.status === 'For Sale' ? 'bg-green-100 text-green-800' :
                  property.status === 'Sold' ? 'bg-red-100 text-red-800' :
                  'bg-blue-100 text-blue-800'
                }`}>
                  {property.status}
                </span>
              </div>
              
              <div className="flex items-center justify-between text-sm text-gray-600">
                <span>{property.bedrooms} bed</span>
                <span>{property.bathrooms} bath</span>
                <span>{property.squareFeet.toLocaleString()} sqft</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Contact CTA */}
      <div className="text-center mt-8">
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-lg p-6">
          <h4 className="text-xl font-semibold text-blue-900 mb-2">
            Ready to Find Your Dream Home?
          </h4>
          <p className="text-blue-700 mb-4">
            Dr. Jan Duffy has helped hundreds of families find their perfect home in Summerlin West.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Contact Dr. Jan Duffy
          </a>
          <p className="text-sm text-blue-600 mt-2">(702) 550-0112</p>
        </div>
      </div>
    </motion.div>
  );
}
