'use client';

import { generateCommunitySchema, generateBreadcrumbSchema, CommunityData } from '../../lib/structured-data';

interface ServiceAreaStructuredDataProps {
  communityData: CommunityData;
  breadcrumbs?: Array<{ name: string; url: string }>;
}

export default function ServiceAreaStructuredData({ 
  communityData, 
  breadcrumbs = [
    { name: 'Home', url: 'https://www.summerlinwestrealestate.com/' },
    { name: 'Service Areas', url: 'https://www.summerlinwestrealestate.com/service-area' },
    { name: communityData.name, url: `https://www.summerlinwestrealestate.com/service-area/${communityData.name.toLowerCase().replace(/\s+/g, '-')}` }
  ]
}: ServiceAreaStructuredDataProps) {
  const communitySchema = generateCommunitySchema(communityData);
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs);

  return (
    <>
      {/* Community Schema */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(communitySchema),
        }}
      />
      
      {/* Breadcrumb Schema */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
    </>
  );
}
