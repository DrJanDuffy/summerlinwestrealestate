import type { Metadata } from 'next';
import { metadata as contactMetadata } from './metadata';
import ContactClient from './ContactClient';

export const metadata: Metadata = contactMetadata;

export default function Contact() {
  return <ContactClient />;
}
