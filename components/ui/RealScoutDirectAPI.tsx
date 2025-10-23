'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Property {
  id: string;
  address: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  squareFeet: number;
  imageUrl?: string;
  status: string;
  community?: string;
}

interface RealScoutAPIData {
  properties: Property[];
  totalCount: number;
  error?: string;
}

export default function RealScoutDirectAPI() {
  const [data, setData] = useState<RealScoutAPIData>({ properties: [], totalCount: 0 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRealScoutData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Try multiple RealScout API endpoints
        const endpoints = [
          'https://em.realscout.com/api/v1/agents/QWdlbnQtMjI1MDUw/listings',
          'https://api.realscout.com/v1/agents/QWdlbnQtMjI1MDUw/listings',
          'https://em.realscout.com/api/v1/listings?agentId=QWdlbnQtMjI1MDUw'
        ];

        let success = false;
        let lastError = '';

        for (const endpoint of endpoints) {
          try {
            console.log(`Trying RealScout API: ${endpoint}`);
            
            const response = await fetch(endpoint, {
              method: 'GET',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },
              mode: 'cors'
            });

            if (response.ok) {
              const result = await response.json();
              console.log('RealScout API Success:', result);
              
              // Transform the data to our format
              const properties: Property[] = result.listings?.map((listing: any) => ({
                id: listing.id || listing.listingId,
                address: listing.address || listing.fullAddress,
                price: listing.price || listing.listPrice,
                bedrooms: listing.bedrooms || listing.beds,
                bathrooms: listing.bathrooms || listing.baths,
                squareFeet: listing.squareFeet || listing.sqft,
                imageUrl: listing.imageUrl || listing.primaryImage,
                status: listing.status || 'For Sale',
                community: listing.community || listing.subdivision
              })) || [];

              setData({
                properties,
                totalCount: result.totalCount || properties.length
              });
              
              success = true;
              break;
            } else {
              lastError = `HTTP ${response.status}: ${response.statusText}`;
              console.log(`API Error for ${endpoint}:`, lastError);
            }
          } catch (apiError) {
            lastError = `Network Error: ${apiError}`;
            console.log(`Network Error for ${endpoint}:`, apiError);
          }
        }

        if (!success) {
          // Fallback to sample data
          console.log('Using fallback data due to API failures');
          setData({
            properties: [
              {
                id: '1',
                address: '123 Summerlin West Dr, Las Vegas, NV 89134',
                price: 1200000,
                bedrooms: 4,
                bathrooms: 3,
                squareFeet: 3200,
                status: 'For Sale',
                community: 'The Vistas'
              },
              {
                id: '2',
                address: '456 Red Rock Canyon Rd, Las Vegas, NV 89135',
                price: 950000,
                bedrooms: 3,
                bathrooms: 2,
                squareFeet: 2800,
                status: 'For Sale',
                community: 'Stonebridge'
              },
              {
                id: '3',
                address: '789 Sky Vista Dr, Las Vegas, NV 89144',
                price: 1500000,
                bedrooms: 5,
                bathrooms: 4,
                squareFeet: 4200,
                status: 'For Sale',
                community: 'Redpoint'
              }
            ],
            totalCount: 3
          });
          setError(`API Unavailable - Showing Sample Data. Last Error: ${lastError}`);
        }

      } catch (err) {
        console.error('RealScout API Error:', err);
        setError(`Failed to load RealScout data: ${err}`);
      } finally {
        setLoading(false);
      }
    };

    fetchRealScoutData();
  }, []);

  if (loading) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-blue-50 border border-blue-200 rounded-lg p-8 text-center"
      >
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <h3 className="text-lg font-semibold text-blue-900 mb-2">
          Loading Real Estate Listings
        </h3>
        <p className="text-blue-700 mb-4">Fetching MLS data directly from RealScout API...</p>
        <p className="text-sm text-blue-600">Direct API Integration</p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-lg p-6"
    >
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          Summerlin West Properties
        </h3>
        <p className="text-gray-600 mb-4">
          Direct MLS Integration - {data.totalCount} Properties Found
        </p>
        {error && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3 mb-4">
            <p className="text-yellow-800 text-sm">{error}</p>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.properties.map((property) => (
          <motion.div
            key={property.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="h-48 bg-gradient-to-r from-blue-100 to-blue-200 flex items-center justify-center">
              {property.imageUrl ? (
                <img 
                  src={property.imageUrl} 
                  alt={property.address}
                  className="w-full h-full object-cover"
                />
              ) : (
                <span className="text-blue-600 font-semibold">Property Image</span>
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

      <div className="text-center mt-6">
        <a 
          href="/contact" 
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          Contact Dr. Jan Duffy for More Information
        </a>
        <p className="text-sm text-gray-600 mt-2">(702) 550-0112</p>
      </div>
    </motion.div>
  );
}
