import type { Metadata } from 'next';
import RealScoutTestClient from './RealScoutTestClient';

export const metadata: Metadata = {
  title: 'RealScout Widget Test Page',
  description: 'Testing RealScout widget integration and debugging issues.',
};

export default function RealScoutTestPage() {
  return <RealScoutTestClient />;
}
