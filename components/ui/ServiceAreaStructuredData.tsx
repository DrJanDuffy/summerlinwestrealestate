'use client';

import {
  type CommunityData,
  generateBreadcrumbSchema,
  generateCommunitySchema,
  generateLocalBusinessSchema,
  generateRealEstateAgentSchema,
} from '../../lib/structured-data';

interface ServiceAreaStructuredDataProps {
  communityData: CommunityData;
  breadcrumbs?: Array<{ name: string; url: string }>;
  includeAgentSchema?: boolean;
}

export default function ServiceAreaStructuredData({
  communityData,
  breadcrumbs = [
    { name: 'Home', url: 'https://www.summerlinwestrealestate.com/' },
    { name: 'Service Areas', url: 'https://www.summerlinwestrealestate.com/service-area' },
    {
      name: communityData.name,
      url: `https://www.summerlinwestrealestate.com/service-area/${communityData.name.toLowerCase().replace(/\s+/g, '-')}`,
    },
  ],
  includeAgentSchema = true,
}: ServiceAreaStructuredDataProps) {
  const communitySchema = generateCommunitySchema(communityData);
  const breadcrumbSchema = generateBreadcrumbSchema(breadcrumbs);
  const agentSchema = includeAgentSchema ? generateRealEstateAgentSchema() : null;
  const businessSchema = includeAgentSchema ? generateLocalBusinessSchema() : null;

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

      {/* Agent Schema */}
      {agentSchema && (
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(agentSchema),
          }}
        />
      )}

      {/* Business Schema */}
      {businessSchema && (
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(businessSchema),
          }}
        />
      )}
    </>
  );
}
