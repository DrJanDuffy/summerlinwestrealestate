'use client';
import dynamic from 'next/dynamic';

const TestimonialsSection = dynamic(() => import('./TestimonialsSection'), {
  ssr: false,
});

interface TestimonialsSectionClientProps {
  [key: string]: any;
}

export default function TestimonialsSectionClient(props: TestimonialsSectionClientProps) {
  return <TestimonialsSection {...props} />;
}
