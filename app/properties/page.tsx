import type { Metadata } from 'next';
import { metadata as propertiesMetadata } from './metadata';
import PropertiesClient from './PropertiesClient';

export const metadata: Metadata = propertiesMetadata;

export default function Properties() {
  return <PropertiesClient />;
}
