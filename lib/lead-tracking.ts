/**
 * Lead Generation Tracking and Conversion Optimization
 * Enhanced tracking for real estate lead generation
 */

export interface LeadEvent {
  event_type:
    | 'form_submission'
    | 'phone_click'
    | 'email_click'
    | 'property_inquiry'
    | 'market_report_request'
    | 'valuation_request'
    | 'consultation_request';
  lead_source: 'organic' | 'paid' | 'social' | 'referral' | 'direct' | 'email';
  lead_type: 'buyer' | 'seller' | 'investor' | 'unknown';
  property_type?: 'single_family' | 'condo' | 'townhome' | 'luxury' | 'investment';
  price_range?: string;
  community?: string;
  property_id?: string;
  user_id?: string;
  session_id?: string;
  timestamp: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  referrer?: string;
  page_url: string;
  page_title: string;
}

export interface ConversionGoal {
  name: string;
  type:
    | 'lead_form'
    | 'phone_call'
    | 'email_contact'
    | 'property_inquiry'
    | 'market_report'
    | 'home_valuation';
  value: number;
  currency: 'USD';
  conversion_window: number; // days
}

export const conversionGoals: ConversionGoal[] = [
  {
    name: 'Lead Form Submission',
    type: 'lead_form',
    value: 150,
    currency: 'USD',
    conversion_window: 30,
  },
  {
    name: 'Phone Call Initiated',
    type: 'phone_call',
    value: 200,
    currency: 'USD',
    conversion_window: 7,
  },
  {
    name: 'Property Inquiry',
    type: 'property_inquiry',
    value: 300,
    currency: 'USD',
    conversion_window: 14,
  },
  {
    name: 'Market Report Request',
    type: 'market_report',
    value: 100,
    currency: 'USD',
    conversion_window: 30,
  },
  {
    name: 'Home Valuation Request',
    type: 'home_valuation',
    value: 250,
    currency: 'USD',
    conversion_window: 14,
  },
  {
    name: 'Email Contact',
    type: 'email_contact',
    value: 75,
    currency: 'USD',
    conversion_window: 30,
  },
];

/**
 * Track lead generation events
 */
export function trackLeadEvent(event: Partial<LeadEvent>) {
  if (typeof window === 'undefined') return;

  const fullEvent: LeadEvent = {
    event_type: 'form_submission',
    lead_source: 'organic',
    lead_type: 'unknown',
    timestamp: new Date().toISOString(),
    page_url: window.location.href,
    page_title: document.title,
    ...event,
  };

  // Enhanced dataLayer push for GTM
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({
      event: 'real_estate_lead',
      lead_event_type: fullEvent.event_type,
      lead_type: fullEvent.lead_type,
      lead_source: fullEvent.lead_source,
      property_type: fullEvent.property_type,
      price_range: fullEvent.price_range,
      community: fullEvent.community,
      property_id: fullEvent.property_id,
      page_title: fullEvent.page_title,
      page_location: fullEvent.page_url,
      utm_source: fullEvent.utm_source,
      utm_medium: fullEvent.utm_medium,
      utm_campaign: fullEvent.utm_campaign,
      business_type: 'real_estate',
      agent_name: 'Dr. Jan Duffy',
      market_area: 'Summerlin West',
      conversion_value: getConversionValue(fullEvent.event_type),
      currency: 'USD',
    });
  }

  // Google Analytics 4 Enhanced Ecommerce
  if (typeof window !== 'undefined' && typeof window.gtag !== 'undefined') {
    window.gtag('event', 'generate_lead', {
      currency: 'USD',
      value: getConversionValue(fullEvent.event_type),
      lead_type: fullEvent.lead_type,
      lead_source: fullEvent.lead_source,
      property_type: fullEvent.property_type,
      community: fullEvent.community,
      page_title: fullEvent.page_title,
      page_location: fullEvent.page_url,
      business_type: 'real_estate',
      agent_name: 'Dr. Jan Duffy',
      market_area: 'Summerlin West',
    });

    // Custom event for detailed tracking
    window.gtag('event', 'real_estate_lead', {
      event_type: fullEvent.event_type,
      lead_type: fullEvent.lead_type,
      lead_source: fullEvent.lead_source,
      property_type: fullEvent.property_type,
      price_range: fullEvent.price_range,
      community: fullEvent.community,
      property_id: fullEvent.property_id,
      page_title: fullEvent.page_title,
      page_location: fullEvent.page_url,
      utm_source: fullEvent.utm_source,
      utm_medium: fullEvent.utm_medium,
      utm_campaign: fullEvent.utm_campaign,
      business_type: 'real_estate',
      agent_name: 'Dr. Jan Duffy',
      market_area: 'Summerlin West',
    });
  }

  // Facebook Pixel Enhanced Events
  if (typeof window !== 'undefined' && typeof window.fbq !== 'undefined') {
    window.fbq('track', 'Lead', {
      content_name: fullEvent.page_title,
      content_category: 'Real Estate',
      value: getConversionValue(fullEvent.event_type),
      currency: 'USD',
    });

    // Custom event for detailed tracking
    window.fbq('trackCustom', 'RealEstateLead', {
      event_type: fullEvent.event_type,
      lead_type: fullEvent.lead_type,
      lead_source: fullEvent.lead_source,
      property_type: fullEvent.property_type,
      community: fullEvent.community,
    });
  }

  // RealScout integration removed - using alternative tracking

  // Console log for debugging
  console.log('Lead Event Tracked:', fullEvent);
}

/**
 * Get conversion value based on event type
 */
function getConversionValue(eventType: string): number {
  const goal = conversionGoals.find((g) => g.type === eventType);
  return goal ? goal.value : 100; // Default value
}

/**
 * Track form submissions
 */
export function trackFormSubmission(formType: string, formData: Record<string, any>) {
  trackLeadEvent({
    event_type: 'form_submission',
    lead_type: determineLeadType(formData),
    property_type: formData.property_type,
    price_range: formData.price_range,
    community: formData.community,
    utm_source: getUrlParameter('utm_source'),
    utm_medium: getUrlParameter('utm_medium'),
    utm_campaign: getUrlParameter('utm_campaign'),
  });
}

/**
 * Track phone clicks
 */
export function trackPhoneClick(phoneNumber: string, context: string) {
  trackLeadEvent({
    event_type: 'phone_click',
    lead_source: determineLeadSource(),
    lead_type: 'unknown',
    utm_source: getUrlParameter('utm_source'),
    utm_medium: getUrlParameter('utm_medium'),
    utm_campaign: getUrlParameter('utm_campaign'),
  });
}

/**
 * Track email clicks
 */
export function trackEmailClick(email: string, context: string) {
  trackLeadEvent({
    event_type: 'email_click',
    lead_source: determineLeadSource(),
    lead_type: 'unknown',
    utm_source: getUrlParameter('utm_source'),
    utm_medium: getUrlParameter('utm_medium'),
    utm_campaign: getUrlParameter('utm_campaign'),
  });
}

/**
 * Track property inquiries
 */
export function trackPropertyInquiry(propertyId: string, propertyData: Record<string, any>) {
  trackLeadEvent({
    event_type: 'property_inquiry',
    lead_type: 'buyer',
    property_id: propertyId,
    property_type: propertyData.type,
    price_range: propertyData.price_range,
    community: propertyData.community,
    utm_source: getUrlParameter('utm_source'),
    utm_medium: getUrlParameter('utm_medium'),
    utm_campaign: getUrlParameter('utm_campaign'),
  });
}

/**
 * Track market report requests
 */
export function trackMarketReportRequest(community: string, reportType: string) {
  trackLeadEvent({
    event_type: 'market_report_request',
    lead_type: 'buyer',
    community: community,
    utm_source: getUrlParameter('utm_source'),
    utm_medium: getUrlParameter('utm_medium'),
    utm_campaign: getUrlParameter('utm_campaign'),
  });
}

/**
 * Track home valuation requests
 */
export function trackHomeValuationRequest(address: string, propertyData: Record<string, any>) {
  trackLeadEvent({
    event_type: 'valuation_request',
    lead_type: 'seller',
    utm_source: getUrlParameter('utm_source'),
    utm_medium: getUrlParameter('utm_medium'),
    utm_campaign: getUrlParameter('utm_campaign'),
  });
}

/**
 * Track consultation requests
 */
export function trackConsultationRequest(consultationType: string, leadData: Record<string, any>) {
  trackLeadEvent({
    event_type: 'consultation_request',
    lead_type: determineLeadType(leadData),
    utm_source: getUrlParameter('utm_source'),
    utm_medium: getUrlParameter('utm_medium'),
    utm_campaign: getUrlParameter('utm_campaign'),
  });
}

/**
 * Determine lead type from form data
 */
function determineLeadType(
  formData: Record<string, any>
): 'buyer' | 'seller' | 'investor' | 'unknown' {
  if (formData.intent === 'buy' || formData.buying) return 'buyer';
  if (formData.intent === 'sell' || formData.selling) return 'seller';
  if (formData.intent === 'invest' || formData.investing) return 'investor';
  return 'unknown';
}

/**
 * Determine lead source from referrer and UTM parameters
 */
function determineLeadSource(): 'organic' | 'paid' | 'social' | 'referral' | 'direct' | 'email' {
  const referrer = document.referrer;
  const utmSource = getUrlParameter('utm_source');
  const utmMedium = getUrlParameter('utm_medium');

  if (utmSource) {
    if (utmMedium === 'cpc' || utmMedium === 'ppc') return 'paid';
    if (utmMedium === 'social') return 'social';
    if (utmMedium === 'email') return 'email';
    if (utmMedium === 'referral') return 'referral';
    return 'organic';
  }

  if (!referrer) return 'direct';

  if (referrer.includes('google') || referrer.includes('bing') || referrer.includes('yahoo')) {
    return 'organic';
  }

  if (
    referrer.includes('facebook') ||
    referrer.includes('instagram') ||
    referrer.includes('linkedin') ||
    referrer.includes('twitter')
  ) {
    return 'social';
  }

  return 'referral';
}

/**
 * Get URL parameter value
 */
function getUrlParameter(name: string): string | undefined {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name) || undefined;
}

/**
 * Enhanced Real Estate Schema Markup for Lead Tracking
 */
export function generateLeadTrackingSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: 'Real Estate Services - Summerlin West',
    description:
      'Professional real estate services for buying, selling, and investing in Summerlin West luxury homes',
    provider: {
      '@type': 'RealEstateAgent',
      name: 'Dr. Jan Duffy',
      telephone: '+1-702-550-0112',
      email: 'DrJanSells@SummerlinWestRealEstate.com',
    },
    serviceType: [
      'Real Estate Buying',
      'Real Estate Selling',
      'Property Investment',
      'Market Analysis',
      'Home Valuation',
      'Luxury Home Marketing',
    ],
    areaServed: [
      {
        '@type': 'Place',
        name: 'Summerlin West',
      },
      {
        '@type': 'Place',
        name: 'The Vistas',
      },
      {
        '@type': 'Place',
        name: 'Stonebridge',
      },
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Real Estate Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Home Buying Consultation',
            description: 'Expert guidance for purchasing luxury homes in Summerlin West',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Home Selling Strategy',
            description: 'Professional marketing and selling strategies for luxury properties',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Market Analysis Report',
            description: 'Comprehensive market analysis for Summerlin West real estate',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Home Valuation Service',
            description: 'Professional home valuation and pricing analysis',
          },
        },
      ],
    },
  };
}

/**
 * Initialize lead tracking on page load
 */
export function initializeLeadTracking() {
  if (typeof window === 'undefined') return;

  // Track page view with enhanced parameters
  trackLeadEvent({
    event_type: 'form_submission', // This will be overridden by actual events
    lead_source: determineLeadSource(),
    lead_type: 'unknown',
    utm_source: getUrlParameter('utm_source'),
    utm_medium: getUrlParameter('utm_medium'),
    utm_campaign: getUrlParameter('utm_campaign'),
    utm_term: getUrlParameter('utm_term'),
    utm_content: getUrlParameter('utm_content'),
  });

  // Set up automatic phone click tracking
  const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
  phoneLinks.forEach((link) => {
    link.addEventListener('click', () => {
      const phoneNumber = (link as HTMLAnchorElement).href.replace('tel:', '');
      trackPhoneClick(phoneNumber, 'phone_link_click');
    });
  });

  // Set up automatic email click tracking
  const emailLinks = document.querySelectorAll('a[href^="mailto:"]');
  emailLinks.forEach((link) => {
    link.addEventListener('click', () => {
      const email = (link as HTMLAnchorElement).href.replace('mailto:', '');
      trackEmailClick(email, 'email_link_click');
    });
  });

  console.log('Lead tracking initialized');
}
