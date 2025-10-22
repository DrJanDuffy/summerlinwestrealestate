import type { Metadata } from 'next';
import ContactClient from './ContactClient';
import { metadata as contactMetadata } from './metadata';

export const metadata: Metadata = contactMetadata;

export default function Contact() {
  return <ContactClient />;
}
