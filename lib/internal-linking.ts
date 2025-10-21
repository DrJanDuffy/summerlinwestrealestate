/**
 * Internal Linking Strategy for SEO Optimization
 * Comprehensive internal linking system to improve page authority and user experience
 */

export interface InternalLink {
  href: string;
  text: string;
  description?: string;
  category: 'primary' | 'secondary' | 'contextual';
  keywords: string[];
}

// Main navigation links
export const primaryNavigationLinks: InternalLink[] = [
  {
    href: '/about',
    text: 'About Dr. Jan Duffy',
    description: 'Learn about Dr. Jan Duffy\'s expertise and $6B+ in sales',
    category: 'primary',
    keywords: ['about', 'agent', 'realtor', 'expertise', 'experience']
  },
  {
    href: '/properties',
    text: 'Properties',
    description: 'Browse luxury homes for sale in Summerlin West',
    category: 'primary',
    keywords: ['properties', 'homes', 'listings', 'for sale']
  },
  {
    href: '/communities',
    text: 'Communities',
    description: 'Explore The Vistas, Stonebridge, and other luxury communities',
    category: 'primary',
    keywords: ['communities', 'neighborhoods', 'the vistas', 'stonebridge']
  },
  {
    href: '/contact',
    text: 'Contact',
    description: 'Schedule a consultation with Dr. Jan Duffy',
    category: 'primary',
    keywords: ['contact', 'consultation', 'schedule', 'phone']
  }
];

// Service area links
export const serviceAreaLinks: InternalLink[] = [
  {
    href: '/service-area',
    text: 'The Vistas Service Area',
    description: 'Complete guide to all 26 subdivisions in The Vistas',
    category: 'secondary',
    keywords: ['the vistas', 'service area', 'subdivisions', 'communities']
  },
  {
    href: '/service-area/the-vistas',
    text: 'The Vistas Community',
    description: 'Luxury homes with Red Rock Canyon views',
    category: 'secondary',
    keywords: ['the vistas', 'luxury', 'red rock canyon', 'views']
  },
  {
    href: '/service-area/stonebridge',
    text: 'Stonebridge Community',
    description: 'Gated luxury community with resort-style amenities',
    category: 'secondary',
    keywords: ['stonebridge', 'gated', 'luxury', 'amenities']
  },
  {
    href: '/service-area/paradiso',
    text: 'Paradiso Subdivision',
    description: 'Custom luxury homes with mountain views',
    category: 'secondary',
    keywords: ['paradiso', 'custom', 'luxury', 'mountain views']
  },
  {
    href: '/service-area/palmilla',
    text: 'Palmilla Subdivision',
    description: 'Gated luxury with resort-style amenities',
    category: 'secondary',
    keywords: ['palmilla', 'gated', 'resort', 'amenities']
  },
  {
    href: '/service-area/casa-rosa',
    text: 'Casa Rosa Subdivision',
    description: 'Family-friendly community with excellent schools',
    category: 'secondary',
    keywords: ['casa rosa', 'family', 'schools', 'community']
  }
];

// Market and analysis links
export const marketAnalysisLinks: InternalLink[] = [
  {
    href: '/market-reports',
    text: 'Market Reports',
    description: 'Latest Summerlin West real estate market insights',
    category: 'secondary',
    keywords: ['market reports', 'market analysis', 'trends', 'insights']
  },
  {
    href: '/home-values',
    text: 'Home Values',
    description: 'Get accurate home valuations for Summerlin West properties',
    category: 'secondary',
    keywords: ['home values', 'valuation', 'property values', 'pricing']
  },
  {
    href: '/market',
    text: 'Market Insights',
    description: 'Current market conditions and trends',
    category: 'secondary',
    keywords: ['market insights', 'conditions', 'trends', 'analysis']
  },
  {
    href: '/blog',
    text: 'Blog',
    description: 'Real estate insights and community updates',
    category: 'secondary',
    keywords: ['blog', 'insights', 'updates', 'articles']
  }
];

// Property-related links
export const propertyLinks: InternalLink[] = [
  {
    href: '/current-listing',
    text: 'Current Listings',
    description: 'Featured homes for sale in Summerlin West',
    category: 'secondary',
    keywords: ['current listings', 'homes for sale', 'featured', 'properties']
  },
  {
    href: '/sold',
    text: 'Recent Sales',
    description: 'Recently sold properties in Summerlin West',
    category: 'secondary',
    keywords: ['recent sales', 'sold properties', 'comparable sales']
  },
  {
    href: '/new-homes-summerlin',
    text: 'New Homes',
    description: 'New construction homes in Summerlin West',
    category: 'secondary',
    keywords: ['new homes', 'new construction', 'builders']
  },
  {
    href: '/the-vistas',
    text: 'The Vistas Properties',
    description: 'Exclusive homes in The Vistas community',
    category: 'secondary',
    keywords: ['the vistas', 'properties', 'homes', 'community']
  }
];

// Contextual links for specific topics
export const contextualLinks: InternalLink[] = [
  {
    href: '/team',
    text: 'Our Team',
    description: 'Meet Dr. Jan Duffy\'s expert real estate team',
    category: 'contextual',
    keywords: ['team', 'agents', 'staff', 'support']
  },
  {
    href: '/testimonials',
    text: 'Client Testimonials',
    description: 'Read reviews from satisfied clients',
    category: 'contextual',
    keywords: ['testimonials', 'reviews', 'clients', 'feedback']
  },
  {
    href: '/press',
    text: 'Press & Recognition',
    description: 'Media coverage and industry recognition',
    category: 'contextual',
    keywords: ['press', 'recognition', 'awards', 'media']
  },
  {
    href: '/downtown-summerlin',
    text: 'Downtown Summerlin',
    description: 'Explore the premier shopping and entertainment district',
    category: 'contextual',
    keywords: ['downtown summerlin', 'shopping', 'entertainment', 'amenities']
  }
];

// All links combined
export const allInternalLinks: InternalLink[] = [
  ...primaryNavigationLinks,
  ...serviceAreaLinks,
  ...marketAnalysisLinks,
  ...propertyLinks,
  ...contextualLinks
];

/**
 * Get links by category
 */
export function getLinksByCategory(category: 'primary' | 'secondary' | 'contextual'): InternalLink[] {
  return allInternalLinks.filter(link => link.category === category);
}

/**
 * Get related links based on keywords
 */
export function getRelatedLinks(keywords: string[], limit: number = 5): InternalLink[] {
  const keywordSet = new Set(keywords.map(k => k.toLowerCase()));
  
  return allInternalLinks
    .filter(link => 
      link.keywords.some(keyword => keywordSet.has(keyword.toLowerCase()))
    )
    .slice(0, limit);
}

/**
 * Get contextual links for a specific page
 */
export function getContextualLinksForPage(pageSlug: string, limit: number = 6): InternalLink[] {
  const pageKeywords: { [key: string]: string[] } = {
    'about': ['team', 'testimonials', 'press', 'contact'],
    'properties': ['current-listing', 'sold', 'new-homes-summerlin', 'home-values'],
    'communities': ['service-area', 'the-vistas', 'stonebridge', 'market-reports'],
    'contact': ['about', 'properties', 'communities', 'market-reports'],
    'market-reports': ['home-values', 'market', 'current-listing', 'communities'],
    'home-values': ['market-reports', 'current-listing', 'properties', 'contact'],
    'service-area': ['communities', 'the-vistas', 'current-listing', 'market-reports'],
    'the-vistas': ['service-area', 'communities', 'current-listing', 'market-reports'],
    'stonebridge': ['service-area', 'communities', 'current-listing', 'market-reports'],
    'current-listing': ['properties', 'home-values', 'communities', 'contact'],
    'sold': ['properties', 'current-listing', 'home-values', 'market-reports'],
    'blog': ['market-reports', 'home-values', 'communities', 'contact'],
    'team': ['about', 'testimonials', 'contact', 'press'],
    'testimonials': ['about', 'team', 'contact', 'properties'],
    'press': ['about', 'team', 'testimonials', 'contact']
  };

  const keywords = pageKeywords[pageSlug] || [];
  return getRelatedLinks(keywords, limit);
}

/**
 * Generate featured snippet content structure
 */
export interface FeaturedSnippetContent {
  question: string;
  answer: string;
  source: string;
  relatedLinks: InternalLink[];
}

export const featuredSnippetContent: FeaturedSnippetContent[] = [
  {
    question: "What are the best communities in Summerlin West?",
    answer: "The best communities in Summerlin West include The Vistas with its Red Rock Canyon views and 26 subdivisions, Stonebridge with gated luxury and resort amenities, and Paradiso with custom homes and mountain views. Each offers unique features from family-friendly neighborhoods to exclusive gated communities.",
    source: "/service-area",
    relatedLinks: [
      { href: "/service-area/the-vistas", text: "The Vistas Community", description: "Explore all 26 subdivisions", category: "secondary", keywords: ["the vistas"] },
      { href: "/service-area/stonebridge", text: "Stonebridge Community", description: "Gated luxury with amenities", category: "secondary", keywords: ["stonebridge"] },
      { href: "/service-area/paradiso", text: "Paradiso Subdivision", description: "Custom luxury homes", category: "secondary", keywords: ["paradiso"] }
    ]
  },
  {
    question: "How much do homes cost in Summerlin West?",
    answer: "Homes in Summerlin West range from $600,000 to over $2.5 million, with luxury properties in The Vistas and Stonebridge commanding premium prices. The area offers excellent value with master-planned amenities, top-rated schools, and proximity to Red Rock Canyon.",
    source: "/home-values",
    relatedLinks: [
      { href: "/home-values", text: "Home Values", description: "Get accurate valuations", category: "secondary", keywords: ["home values"] },
      { href: "/current-listing", text: "Current Listings", description: "Featured properties for sale", category: "secondary", keywords: ["current listings"] },
      { href: "/market-reports", text: "Market Reports", description: "Latest market insights", category: "secondary", keywords: ["market reports"] }
    ]
  },
  {
    question: "Who is the best real estate agent in Summerlin West?",
    answer: "Dr. Jan Duffy is recognized as one of the top real estate agents in Summerlin West, with over $6 billion in sales volume and 15+ years of experience. She specializes in luxury properties and provides expert guidance for The Vistas, Stonebridge, and other premier communities.",
    source: "/about",
    relatedLinks: [
      { href: "/about", text: "About Dr. Jan Duffy", description: "Learn about her expertise", category: "primary", keywords: ["about"] },
      { href: "/testimonials", text: "Client Testimonials", description: "Read client reviews", category: "contextual", keywords: ["testimonials"] },
      { href: "/contact", text: "Contact Dr. Jan Duffy", description: "Schedule consultation", category: "primary", keywords: ["contact"] }
    ]
  }
];

/**
 * Generate internal linking suggestions for content
 */
export function generateInternalLinkingSuggestions(content: string, targetKeywords: string[]): InternalLink[] {
  const suggestions: InternalLink[] = [];
  
  // Check for keyword matches in content
  targetKeywords.forEach(keyword => {
    const matchingLinks = allInternalLinks.filter(link => 
      link.keywords.some(k => k.toLowerCase().includes(keyword.toLowerCase()))
    );
    suggestions.push(...matchingLinks);
  });
  
  // Remove duplicates and return top suggestions
  const uniqueSuggestions = suggestions.filter((link, index, self) => 
    index === self.findIndex(l => l.href === link.href)
  );
  
  return uniqueSuggestions.slice(0, 8);
}
