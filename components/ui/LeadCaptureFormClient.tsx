'use client';
import dynamic from 'next/dynamic';

const LeadCaptureForm = dynamic(() => import('./LeadCaptureForm'), {
  ssr: false,
});

interface LeadCaptureFormClientProps {
  variant?: 'inline' | 'modal';
  title?: string;
  subtitle?: string;
  onSuccess?: () => void;
  onClose?: () => void;
  isOpen?: boolean;
  source?: string;
  formId?: string;
}

export default function LeadCaptureFormClient(props: LeadCaptureFormClientProps) {
  return <LeadCaptureForm {...props} />;
}
