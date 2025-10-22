import type { Metadata } from 'next';
import CurrentListingClient from './CurrentListingClient';
import { metadata as currentListingMetadata } from './metadata';

export const metadata: Metadata = currentListingMetadata;

// Disable SSR for this page to prevent prerendering issues
export const dynamic = 'force-dynamic';

export default function CurrentListing() {
  return <CurrentListingClient />;
}
