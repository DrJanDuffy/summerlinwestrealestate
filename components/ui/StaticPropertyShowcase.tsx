'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface Property {
  id: string;
  address: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  squareFeet: number;
  imageUrl: string;
  status: string;
  community: string;
  description: string;
  features: string[];
}

const sampleProperties: Property[] = [
  {
    id: '1',
    address: '123 Summerlin West Dr, Las Vegas, NV 89134',
    price: 1295000,
    bedrooms: 4,
    bathrooms: 3,
    squareFeet: 3200,
    imageUrl: '/images/properties/vistas-luxury-home.jpg',
    status: 'For Sale',
    community: 'The Vistas',
    description: 'Stunning single-story luxury home with Red Rock Canyon views',
    features: ['Red Rock Views', 'Gourmet Kitchen', 'Master Suite', '3-Car Garage']
  },
  {
    id: '2',
    address: '456 Stonebridge Way, Las Vegas, NV 89135',
    price: 975000,
    bedrooms: 3,
    bathrooms: 2,
    squareFeet: 2800,
    imageUrl: '/images/properties/stonebridge-home.jpg',
    status: 'For Sale',
    community: 'Stonebridge',
    description: 'Modern gated community home with premium finishes',
    features: ['Gated Community', 'Open Floor Plan', 'Updated Kitchen', 'Private Patio']
  },
  {
    id: '3',
    address: '789 Redpoint Circle, Las Vegas, NV 89144',
    price: 1595000,
    bedrooms: 5,
    bathrooms: 4,
    squareFeet: 4200,
    imageUrl: '/images/properties/redpoint-luxury.jpg',
    status: 'For Sale',
    community: 'Redpoint',
    description: 'Exceptional two-story residence with resort-style amenities',
    features: ['Resort Pool', 'Wine Cellar', 'Home Office', 'Solar Panels']
  },
  {
    id: '4',
    address: '321 Reverence Drive, Las Vegas, NV 89135',
    price: 1150000,
    bedrooms: 4,
    bathrooms: 3,
    squareFeet: 3500,
    imageUrl: '/images/properties/reverence-home.jpg',
    status: 'For Sale',
    community: 'Reverence',
    description: 'Elegant home with mountain views and premium location',
    features: ['Mountain Views', 'Granite Counters', 'Hardwood Floors', 'Smart Home']
  },
  {
    id: '5',
    address: '654 The Paseos Blvd, Las Vegas, NV 89134',
    price: 895000,
    bedrooms: 3,
    bathrooms: 2,
    squareFeet: 2600,
    imageUrl: '/images/properties/paseos-home.jpg',
    status: 'For Sale',
    community: 'The Paseos',
    description: 'Beautiful home in premier Summerlin West location',
    features: ['Prime Location', 'Updated Bathrooms', 'Large Lot', 'Energy Efficient']
  },
  {
    id: '6',
    address: '987 Redpoint Square, Las Vegas, NV 89144',
    price: 1425000,
    bedrooms: 4,
    bathrooms: 3,
    squareFeet: 3800,
    imageUrl: '/images/properties/redpoint-square.jpg',
    status: 'For Sale',
    community: 'Redpoint Square',
    description: 'Luxury home with designer finishes and resort amenities',
    features: ['Designer Finishes', 'Resort Amenities', '4-Car Garage', 'Pool Ready']
  }
];

export default function StaticPropertyShowcase() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-lg p-6"
    >
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold text-gray-900 mb-4">
          Featured Summerlin West Properties
        </h3>
        <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
          Discover luxury homes in Summerlin West's premier communities. 
          These exceptional properties showcase the finest in Las Vegas luxury living.
        </p>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <p className="text-blue-800 font-medium">
            💡 <strong>Live MLS Integration Coming Soon</strong> - Currently showing featured properties. 
            Contact Dr. Jan Duffy for real-time listings and market updates.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sampleProperties.map((property, index) => (
          <motion.div
            key={property.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group"
          >
            <div className="relative h-64 bg-gradient-to-r from-blue-100 to-blue-200">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-2">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  </div>
                  <span className="text-blue-600 font-semibold text-sm">Property Image</span>
                </div>
              </div>
              <div className="absolute top-3 left-3">
                <span className={`px-2 py-1 rounded text-xs font-medium ${
                  property.status === 'For Sale' ? 'bg-green-100 text-green-800' :
                  property.status === 'Sold' ? 'bg-red-100 text-red-800' :
                  'bg-blue-100 text-blue-800'
                }`}>
                  {property.status}
                </span>
              </div>
              <div className="absolute top-3 right-3">
                <span className="bg-white bg-opacity-90 px-2 py-1 rounded text-xs font-medium text-gray-700">
                  {property.community}
                </span>
              </div>
            </div>
            
            <div className="p-4">
              <h4 className="font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                {property.address}
              </h4>
              
              <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                {property.description}
              </p>
              
              <div className="flex items-center justify-between mb-3">
                <span className="text-2xl font-bold text-blue-600">
                  ${property.price.toLocaleString()}
                </span>
                <div className="text-right text-sm text-gray-600">
                  <div>{property.bedrooms} bed • {property.bathrooms} bath</div>
                  <div>{property.squareFeet.toLocaleString()} sqft</div>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-1 mb-4">
                {property.features.slice(0, 2).map((feature, idx) => (
                  <span key={idx} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                    {feature}
                  </span>
                ))}
                {property.features.length > 2 && (
                  <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded">
                    +{property.features.length - 2} more
                  </span>
                )}
              </div>
              
              <div className="flex gap-2">
                <button className="flex-1 bg-blue-600 text-white py-2 px-3 rounded text-sm font-medium hover:bg-blue-700 transition-colors">
                  View Details
                </button>
                <button className="flex-1 bg-gray-100 text-gray-700 py-2 px-3 rounded text-sm font-medium hover:bg-gray-200 transition-colors">
                  Save
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-8">
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-lg p-6 mb-6">
          <h4 className="text-xl font-semibold text-blue-900 mb-2">
            Ready to Find Your Dream Home?
          </h4>
          <p className="text-blue-700 mb-4">
            Dr. Jan Duffy has helped hundreds of families find their perfect home in Summerlin West. 
            Get personalized assistance with your home search.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a 
              href="/contact" 
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Contact Dr. Jan Duffy
            </a>
            <a 
              href="/properties" 
              className="inline-flex items-center px-6 py-3 bg-white text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-semibold"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              View All Properties
            </a>
          </div>
          <p className="text-sm text-blue-600 mt-3">(702) 550-0112</p>
        </div>
      </div>
    </motion.div>
  );
}
