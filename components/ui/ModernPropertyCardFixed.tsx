'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface Property {
  id: string;
  address: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  squareFeet: number;
  lotSize?: string;
  images: string[];
  community: string;
  features: string[];
  description: string;
  mlsId: string;
  status: 'active' | 'pending' | 'sold';
  yearBuilt?: number;
  garageSpaces?: number;
  pool?: boolean;
  view?: string;
}

interface ModernPropertyCardProps {
  property: Property;
  index?: number;
}

export default function ModernPropertyCard({ property, index = 0 }: ModernPropertyCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageLoaded, setImageLoaded] = useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'sold':
        return 'bg-gray-100 text-gray-800 border-gray-200';
      default:
        return 'bg-blue-100 text-blue-800 border-blue-200';
    }
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % property.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + property.images.length) % property.images.length);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
    >
      {/* Image Section */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={property.images[currentImageIndex]}
          alt={`${property.address} - ${property.community}`}
          fill
          className={`object-cover transition-all duration-500 group-hover:scale-105 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setImageLoaded(true)}
        />
        
        {/* Status Badge */}
        <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(property.status)}`}>
          {property.status.toUpperCase()}
        </div>

        {/* Price Badge */}
        <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-3 py-2 rounded-lg shadow-lg">
          <div className="text-lg font-bold text-gray-900">
            {formatPrice(property.price)}
          </div>
        </div>

        {/* Image Navigation */}
        {property.images.length > 1 && (
          <>
            <button
              type="button"
              onClick={prevImage}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              aria-label="Previous image"
            >
              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              type="button"
              onClick={nextImage}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              aria-label="Next image"
            >
              <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}

        {/* Image Indicators */}
        {property.images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
            {property.images.map((_, idx) => (
              <button
                key={`indicator-${idx}`}
                type="button"
                onClick={() => setCurrentImageIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  idx === currentImageIndex ? 'bg-white scale-125' : 'bg-white/50'
                }`}
                aria-label={`Go to image ${idx + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-6">
        {/* Address and Community */}
        <div className="mb-3">
          <h3 className="text-lg font-semibold text-gray-900 mb-1 line-clamp-1">
            {property.address}
          </h3>
          <p className="text-sm text-gray-600">{property.community}</p>
        </div>

        {/* Property Details */}
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="text-center">
            <div className="text-lg font-semibold text-gray-900">{property.bedrooms}</div>
            <div className="text-xs text-gray-600">Bedrooms</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-semibold text-gray-900">{property.bathrooms}</div>
            <div className="text-xs text-gray-600">Bathrooms</div>
          </div>
          <div className="text-center">
            <div className="text-lg font-semibold text-gray-900">
              {property.squareFeet.toLocaleString()}
            </div>
            <div className="text-xs text-gray-600">Sq Ft</div>
          </div>
        </div>

        {/* Additional Details */}
        <div className="flex flex-wrap gap-2 mb-4">
          {property.yearBuilt && (
            <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
              Built {property.yearBuilt}
            </span>
          )}
          {property.garageSpaces && (
            <span className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
              {property.garageSpaces} Car Garage
            </span>
          )}
          {property.pool && (
            <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
              Pool
            </span>
          )}
          {property.view && (
            <span className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full">
              {property.view} View
            </span>
          )}
        </div>

        {/* Key Features */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-1">
            {property.features.slice(0, 3).map((feature, featureIdx) => (
              <span
                key={`feature-${featureIdx}`}
                className="px-2 py-1 bg-indigo-50 text-indigo-700 text-xs rounded-md"
              >
                {feature}
              </span>
            ))}
            {property.features.length > 3 && (
              <span className="px-2 py-1 bg-gray-50 text-gray-600 text-xs rounded-md">
                +{property.features.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-600 mb-6 line-clamp-2">
          {property.description}
        </p>

        {/* Actions */}
        <div className="flex space-x-3">
          <Link
            href={`/properties/${property.id}`}
            className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 px-4 rounded-lg font-semibold text-center hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105"
          >
            View Details
          </Link>
          <button 
            type="button" 
            className="px-4 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-300" 
            aria-label="Save to favorites"
          >
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
        </div>

        {/* MLS ID */}
        <div className="mt-4 pt-4 border-t border-gray-100">
          <p className="text-xs text-gray-500 text-center">
            MLS #{property.mlsId}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
