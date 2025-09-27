'use client';
import { useEffect } from 'react';
import GooglePlacesClient from './GooglePlacesClient';

export default function GooglePlaces() {
  // Set page metadata
  useEffect(() => {
    document.title = 'Google Places UI Kit for Real Estate | Summerlin West Real Estate';
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Integrate Google Places API for enhanced real estate search and property discovery. Autocomplete, place details, and location services for luxury real estate websites.');
    }
  }, []);

  return <GooglePlacesClient />;
}
