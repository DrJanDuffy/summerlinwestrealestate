import type { Metadata } from 'next';
import { metadata as currentListingMetadata } from './metadata';
import CurrentListingClient from './CurrentListingClient';

export const metadata: Metadata = currentListingMetadata;

// Disable SSR for this page to prevent prerendering issues
export const dynamic = 'force-dynamic';

export default function CurrentListing() {
  return <CurrentListingClient />;
}
