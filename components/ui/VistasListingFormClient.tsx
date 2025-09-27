'use client';
import dynamic from 'next/dynamic';

const VistasListingForm = dynamic(() => import('./VistasListingForm'), {
  ssr: false,
});
interface VistasListingFormClientProps {
  formId?: string;
}

export default function VistasListingFormClient(props: VistasListingFormClientProps) {
  return <VistasListingForm {...props} />;
}
