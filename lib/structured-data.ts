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
    description: 'Team Leader of Summerlin West Team at Berkshire Hathaway HomeServices. 15+ years of experience and over $6 billion in sales.',
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
    description: 'Luxury master-planned community in Las Vegas with Red Rock Canyon views, featuring The Vistas, Stonebridge, and other prestigious neighborhoods',
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
    description: 'Luxury homes for sale in Summerlin West, Las Vegas - Expert guidance from Dr. Jan Duffy, REALTOR®',
    publisher: {
      '@id': 'https://www.summerlinwestrealestate.com/#organization',
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: 'https://www.summerlinwestrealestate.com/properties?search={search_term_string}',
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
  return {
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
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: communityData.coordinates.latitude,
      longitude: communityData.coordinates.longitude,
    },
    amenityFeature: communityData.features.map(feature => ({
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
}

/**
 * Generate comprehensive schema markup for the entire site
 */
export function generateComprehensiveSchema() {
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
    mainEntity: faqs.map(faq => ({
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
 * Generate Review structured data
 */
export function generateReviewSchema(reviews: Array<{
  author: string;
  rating: number;
  reviewBody: string;
  datePublished: string;
}>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'AggregateRating',
    itemReviewed: {
      '@type': 'RealEstateAgent',
      name: 'Dr. Jan Duffy',
    },
    ratingValue: reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length,
    reviewCount: reviews.length,
    bestRating: 5,
    worstRating: 1,
    review: reviews.map(review => ({
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: review.author,
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: review.rating,
        bestRating: 5,
        worstRating: 1,
      },
      reviewBody: review.reviewBody,
      datePublished: review.datePublished,
    })),
  };
}
