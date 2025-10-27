/**
 * Comprehensive Structured Data for Summerlin West Real Estate
 * Optimized for Google's Rich Results and Local SEO
 */

export interface RealEstateAgentData {
  name: string;
  email: string;
  phone: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
    country: string;
  };
  coordinates: {
    latitude: number;
    longitude: number;
  };
}

export interface PropertyData {
  name: string;
  description: string;
  address: string;
  price: number;
  currency: string;
  bedrooms: number;
  bathrooms: number;
  squareFeet: number;
  lotSize?: number;
  yearBuilt?: number;
  images: string[];
  features: string[];
}

export interface CommunityData {
  name: string;
  description: string;
  builder?: string;
  yearEstablished?: string;
  homeSizes: string;
  features: string[];
  coordinates: {
    latitude: number;
    longitude: number;
  };
  location?: {
    mainStreets?: string[];
    gateAccess?: string;
    crossStreets?: string;
    zipCode?: string;
  };
  schools?: {
    elementary?: { name: string; address: string; distance: string };
    middle?: { name: string; address: string; distance: string };
    high?: { name: string; address: string; distance: string };
  };
  hoa?: {
    monthly?: number;
    additional?: string;
  };
  landmarks?: {
    vistaPark?: string;
    vistaCommunityCenter?: string;
    downtownSummerlin?: string;
    redRockCanyon?: string;
  };
}

// Default agent data for Dr. Jan Duffy
export const defaultAgentData: RealEstateAgentData = {
  name: 'Dr. Jan Duffy',
  email: 'DrJanSells@SummerlinWestRealEstate.com',
  phone: '+1-702-550-0112',
  address: {
    street: '1980 Festival Plaza Dr (One Summerlin)',
    city: 'Las Vegas',
    state: 'NV',
    zip: '89135',
    country: 'US',
  },
  coordinates: {
    latitude: 36.1865,
    longitude: -115.3432,
  },
};

/**
 * Generate RealEstateAgent structured data
 */
export function generateRealEstateAgentSchema(agentData: RealEstateAgentData = defaultAgentData) {
  return {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    '@id': 'https://www.summerlinwestrealestate.com/#agent',
    name: agentData.name,
    jobTitle: 'REALTOR®, Team Leader',
    description:
      'Team Leader of Summerlin West Team at Berkshire Hathaway HomeServices. 15+ years of experience and over $6 billion in sales.',
    url: 'https://www.summerlinwestrealestate.com',
    telephone: agentData.phone,
    email: agentData.email,
    image: 'https://www.summerlinwestrealestate.com/images/agent-photos/dr-jan-duffy.jpg',
    priceRange: '$400,000 - $2,500,000',
    worksFor: {
      '@type': 'RealEstateAgent',
      name: 'Berkshire Hathaway HomeServices',
      url: 'https://www.berkshirehathawayhs.com',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: agentData.address.street,
      addressLocality: agentData.address.city,
      addressRegion: agentData.address.state,
      postalCode: agentData.address.zip,
      addressCountry: agentData.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: agentData.coordinates.latitude,
      longitude: agentData.coordinates.longitude,
    },
    areaServed: [
      {
        '@type': 'Place',
        name: 'Summerlin West',
        geo: {
          '@type': 'GeoCoordinates',
          latitude: 36.1865,
          longitude: -115.3432,
        },
      },
      {
        '@type': 'Place',
        name: 'The Vistas',
      },
      {
        '@type': 'Place',
        name: 'Stonebridge',
      },
      {
        '@type': 'Place',
        name: 'Red Rock Canyon',
      },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Summerlin West Homes for Sale',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'SingleFamilyResidence',
            name: 'The Vistas Luxury Homes',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'SingleFamilyResidence',
            name: 'Stonebridge Homes',
          },
        },
      ],
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '127',
      bestRating: '5',
      worstRating: '1',
    },
  };
}

/**
 * Generate LocalBusiness structured data
 */
export function generateLocalBusinessSchema(agentData: RealEstateAgentData = defaultAgentData) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://www.summerlinwestrealestate.com/#localbusiness',
    name: 'Summerlin West Team - Berkshire Hathaway HomeServices',
    alternateName: 'Dr. Jan Duffy Team',
    image: 'https://www.summerlinwestrealestate.com/images/logo.png',
    url: 'https://www.summerlinwestrealestate.com',
    telephone: agentData.phone,
    email: agentData.email,
    priceRange: '$400,000 - $2,500,000',
    parentOrganization: {
      '@type': 'Organization',
      name: 'Berkshire Hathaway HomeServices',
      url: 'https://www.berkshirehathawayhs.com',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: agentData.address.street,
      addressLocality: agentData.address.city,
      addressRegion: agentData.address.state,
      postalCode: agentData.address.zip,
      addressCountry: agentData.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: agentData.coordinates.latitude,
      longitude: agentData.coordinates.longitude,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '10:00',
        closes: '17:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Sunday',
        opens: '12:00',
        closes: '16:00',
      },
    ],
    sameAs: [
      'https://www.facebook.com/summerlinwestrealestate',
      'https://www.linkedin.com/company/summerlin-west-real-estate',
    ],
    hasMap: 'https://www.google.com/maps/place/1980+Festival+Plaza+Dr,+Las+Vegas,+NV+89135',
  };
}

/**
 * Generate Organization structured data
 */
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': 'https://www.summerlinwestrealestate.com/#organization',
    name: 'Summerlin West Team - Berkshire Hathaway HomeServices',
    alternateName: 'Dr. Jan Duffy Team',
    url: 'https://www.summerlinwestrealestate.com',
    logo: {
      '@type': 'ImageObject',
      url: 'https://www.summerlinwestrealestate.com/images/logo.png',
      width: 250,
      height: 100,
    },
    parentOrganization: {
      '@type': 'Organization',
      name: 'Berkshire Hathaway HomeServices',
      url: 'https://www.berkshirehathawayhs.com',
    },
    employee: {
      '@type': 'Person',
      name: 'Dr. Jan Duffy',
      jobTitle: 'Team Leader, REALTOR®',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-702-550-0112',
      contactType: 'Customer Service',
      email: 'DrJanSells@SummerlinWestRealEstate.com',
      areaServed: 'US',
      availableLanguage: ['English'],
    },
    sameAs: [
      'https://www.facebook.com/summerlinwestrealestate',
      'https://www.linkedin.com/company/summerlin-west-real-estate',
    ],
  };
}

/**
 * Generate Place structured data for Summerlin West
 */
export function generatePlaceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Place',
    '@id': 'https://www.summerlinwestrealestate.com/#place',
    name: 'Summerlin West',
    description:
      'Luxury master-planned community in Las Vegas with Red Rock Canyon views, featuring The Vistas, Stonebridge, and other prestigious neighborhoods',
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 36.1865,
      longitude: -115.3432,
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Las Vegas',
      addressRegion: 'NV',
      addressCountry: 'US',
    },
    containsPlace: [
      {
        '@type': 'Place',
        name: 'The Vistas',
      },
      {
        '@type': 'Place',
        name: 'Stonebridge',
      },
      {
        '@type': 'Place',
        name: 'Red Rock Canyon',
      },
      {
        '@type': 'Place',
        name: 'Downtown Summerlin',
      },
    ],
  };
}

/**
 * Generate WebSite structured data
 */
export function generateWebSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': 'https://www.summerlinwestrealestate.com/#website',
    url: 'https://www.summerlinwestrealestate.com',
    name: 'Summerlin West Real Estate',
    description:
      'Luxury homes for sale in Summerlin West, Las Vegas - Expert guidance from Dr. Jan Duffy, REALTOR®',
    publisher: {
      '@id': 'https://www.summerlinwestrealestate.com/#organization',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate:
          'https://www.summerlinwestrealestate.com/properties?search={search_term_string}',
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

/**
 * Generate Property/Residence structured data
 */
export function generatePropertySchema(propertyData: PropertyData) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Residence',
    name: propertyData.name,
    description: propertyData.description,
    address: {
      '@type': 'PostalAddress',
      streetAddress: propertyData.address,
      addressLocality: 'Las Vegas',
      addressRegion: 'NV',
      addressCountry: 'US',
    },
    image: propertyData.images,
    numberOfRooms: propertyData.bedrooms + propertyData.bathrooms,
    floorSize: {
      '@type': 'QuantitativeValue',
      value: propertyData.squareFeet,
      unitCode: 'SQF',
    },
    offers: {
      '@type': 'Offer',
      price: propertyData.price.toString(),
      priceCurrency: propertyData.currency,
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'RealEstateAgent',
        name: 'Dr. Jan Duffy',
        telephone: '+1-702-550-0112',
      },
    },
    telephone: '+1-702-550-0112',
    additionalProperty: propertyData.features,
    ...(propertyData.yearBuilt && { dateBuilt: propertyData.yearBuilt }),
    ...(propertyData.lotSize && {
      lotSize: {
        '@type': 'QuantitativeValue',
        value: propertyData.lotSize,
        unitCode: 'SQF',
      },
    }),
  };
}

/**
 * Generate Community/ResidentialComplex structured data
 */
export function generateCommunitySchema(communityData: CommunityData) {
  const schema: any = {
    '@context': 'https://schema.org',
    '@type': 'ResidentialComplex',
    name: communityData.name,
    description: communityData.description,
    url: `https://www.summerlinwestrealestate.com/service-area/${communityData.name.toLowerCase().replace(/\s+/g, '-')}`,
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Las Vegas',
      addressRegion: 'NV',
      addressCountry: 'US',
      ...(communityData.location?.zipCode && { postalCode: communityData.location.zipCode }),
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: communityData.coordinates.latitude,
      longitude: communityData.coordinates.longitude,
    },
    amenityFeature: communityData.features.map((feature) => ({
      '@type': 'LocationFeatureSpecification',
      name: feature,
    })),
    containedInPlace: {
      '@type': 'City',
      name: 'Summerlin West',
    },
    ...(communityData.builder && { developer: communityData.builder }),
    ...(communityData.yearEstablished && { foundingDate: communityData.yearEstablished }),
  };

  // Add hyperlocal location data
  if (communityData.location) {
    schema.additionalProperty = [];

    if (communityData.location.mainStreets) {
      schema.additionalProperty.push({
        '@type': 'PropertyValue',
        name: 'Main Streets',
        value: communityData.location.mainStreets.join(', '),
      });
    }

    if (communityData.location.gateAccess) {
      schema.additionalProperty.push({
        '@type': 'PropertyValue',
        name: 'Gate Access',
        value: communityData.location.gateAccess,
      });
    }

    if (communityData.location.crossStreets) {
      schema.additionalProperty.push({
        '@type': 'PropertyValue',
        name: 'Cross Streets',
        value: communityData.location.crossStreets,
      });
    }
  }

  // Add school information
  if (communityData.schools) {
    schema.nearbySchool = [];

    if (communityData.schools.elementary) {
      schema.nearbySchool.push({
        '@type': 'School',
        name: communityData.schools.elementary.name,
        address: {
          '@type': 'PostalAddress',
          streetAddress: communityData.schools.elementary.address,
          addressLocality: 'Las Vegas',
          addressRegion: 'NV',
        },
        additionalProperty: {
          '@type': 'PropertyValue',
          name: 'Distance',
          value: communityData.schools.elementary.distance,
        },
      });
    }

    if (communityData.schools.middle) {
      schema.nearbySchool.push({
        '@type': 'School',
        name: communityData.schools.middle.name,
        address: {
          '@type': 'PostalAddress',
          streetAddress: communityData.schools.middle.address,
          addressLocality: 'Las Vegas',
          addressRegion: 'NV',
        },
        additionalProperty: {
          '@type': 'PropertyValue',
          name: 'Distance',
          value: communityData.schools.middle.distance,
        },
      });
    }

    if (communityData.schools.high) {
      schema.nearbySchool.push({
        '@type': 'School',
        name: communityData.schools.high.name,
        address: {
          '@type': 'PostalAddress',
          streetAddress: communityData.schools.high.address,
          addressLocality: 'Las Vegas',
          addressRegion: 'NV',
        },
        additionalProperty: {
          '@type': 'PropertyValue',
          name: 'Distance',
          value: communityData.schools.high.distance,
        },
      });
    }
  }

  // Add HOA information
  if (communityData.hoa) {
    if (!schema.additionalProperty) schema.additionalProperty = [];

    if (communityData.hoa.monthly) {
      schema.additionalProperty.push({
        '@type': 'PropertyValue',
        name: 'Monthly HOA Fee',
        value: `$${communityData.hoa.monthly}`,
      });
    }

    if (communityData.hoa.additional) {
      schema.additionalProperty.push({
        '@type': 'PropertyValue',
        name: 'Additional HOA Fees',
        value: communityData.hoa.additional,
      });
    }
  }

  // Add landmark distances
  if (communityData.landmarks) {
    if (!schema.additionalProperty) schema.additionalProperty = [];

    Object.entries(communityData.landmarks).forEach(([landmark, distance]) => {
      schema.additionalProperty.push({
        '@type': 'PropertyValue',
        name: landmark.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase()),
        value: distance,
      });
    });
  }

  return schema;
}

/**
 * Generate comprehensive schema markup for the entire site
 */
export function generateComprehensiveSchema() {
  // Return just the graph array for proper JSON-LD @graph structure
  return {
    '@context': 'https://schema.org',
    '@graph': [
      generateRealEstateAgentSchema(),
      generateLocalBusinessSchema(),
      generateOrganizationSchema(),
      generatePlaceSchema(),
      generateWebSiteSchema(),
    ],
  };
}

/**
 * Generate BreadcrumbList structured data
 */
export function generateBreadcrumbSchema(breadcrumbs: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.url,
    })),
  };
}

/**
 * Generate FAQ structured data
 */
export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * Generate School structured data
 */
export function generateSchoolSchema(schoolData: {
  name: string;
  type: 'Elementary' | 'Middle' | 'High' | 'Private';
  address: string;
  description?: string;
  coordinates?: { latitude: number; longitude: number };
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'School',
    name: schoolData.name,
    description: schoolData.description || `${schoolData.type} school serving Summerlin West`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: schoolData.address,
      addressLocality: 'Las Vegas',
      addressRegion: 'NV',
      addressCountry: 'US',
    },
    ...(schoolData.coordinates && {
      geo: {
        '@type': 'GeoCoordinates',
        latitude: schoolData.coordinates.latitude,
        longitude: schoolData.coordinates.longitude,
      },
    }),
    additionalProperty: [
      {
        '@type': 'PropertyValue',
        name: 'School Type',
        value: schoolData.type,
      },
      {
        '@type': 'PropertyValue',
        name: 'Serves',
        value: 'Summerlin West',
      },
    ],
  };
}

/**
 * Generate Zip Code structured data
 */
export function generateZipCodeSchema(zipData: {
  code: string;
  name: string;
  description: string;
  subdivisions: string[];
  coordinates?: { latitude: number; longitude: number };
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'PostalCode',
    postalCode: zipData.code,
    address: {
      '@type': 'PostalAddress',
      postalCode: zipData.code,
      addressLocality: 'Las Vegas',
      addressRegion: 'NV',
      addressCountry: 'US',
    },
    ...(zipData.coordinates && {
      geo: {
        '@type': 'GeoCoordinates',
        latitude: zipData.coordinates.latitude,
        longitude: zipData.coordinates.longitude,
      },
    }),
    additionalProperty: [
      {
        '@type': 'PropertyValue',
        name: 'Area Name',
        value: zipData.name,
      },
      {
        '@type': 'PropertyValue',
        name: 'Description',
        value: zipData.description,
      },
      {
        '@type': 'PropertyValue',
        name: 'Subdivisions',
        value: zipData.subdivisions.join(', '),
      },
    ],
  };
}

/**
 * Generate Street structured data
 */
export function generateStreetSchema(streetData: {
  name: string;
  description: string;
  coordinates?: { latitude: number; longitude: number };
  length?: string;
  speedLimit?: string;
  lanes?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Street',
    name: streetData.name,
    description: streetData.description,
    address: {
      '@type': 'PostalAddress',
      streetAddress: streetData.name,
      addressLocality: 'Las Vegas',
      addressRegion: 'NV',
      addressCountry: 'US',
    },
    ...(streetData.coordinates && {
      geo: {
        '@type': 'GeoCoordinates',
        latitude: streetData.coordinates.latitude,
        longitude: streetData.coordinates.longitude,
      },
    }),
    additionalProperty: [
      ...(streetData.length
        ? [
            {
              '@type': 'PropertyValue',
              name: 'Length',
              value: streetData.length,
            },
          ]
        : []),
      ...(streetData.speedLimit
        ? [
            {
              '@type': 'PropertyValue',
              name: 'Speed Limit',
              value: streetData.speedLimit,
            },
          ]
        : []),
      ...(streetData.lanes
        ? [
            {
              '@type': 'PropertyValue',
              name: 'Lanes',
              value: streetData.lanes,
            },
          ]
        : []),
    ],
  };
}
