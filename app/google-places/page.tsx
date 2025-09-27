import { Metadata } from 'next';
import GooglePlacesClient from './GooglePlacesClient';

export const metadata: Metadata = {
  title: 'Google Places UI Kit for Real Estate | Summerlin West Real Estate',
  description: 'Integrate Google Places API for enhanced real estate search and property discovery. Autocomplete, place details, and location services for luxury real estate websites.',
  keywords: 'Google Places API, real estate search, property discovery, autocomplete, location services, Summerlin West',
  openGraph: {
    title: 'Google Places UI Kit for Real Estate | Summerlin West Real Estate',
    description: 'Integrate Google Places API for enhanced real estate search and property discovery.',
    type: 'website',
  },
};

export default function GooglePlaces() {
  return <GooglePlacesClient />;
}
