import type { Metadata } from 'next';
import TailwindTest from '../../components/ui/TailwindTest';

export const metadata: Metadata = {
  title: 'Tailwind CSS Test - Summerlin West Real Estate',
  description: 'Test page to verify Tailwind CSS v4 is working correctly',
};

export default function TestTailwindPage() {
  return <TailwindTest />;
}
