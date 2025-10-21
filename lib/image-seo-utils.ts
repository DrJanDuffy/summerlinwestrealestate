/**
 * Image SEO Optimization Utilities for Summerlin West Real Estate
 * Provides optimized alt text generation and image metadata for better SEO
 */

export interface ImageSEOData {
  location: string;
  propertyType: string;
  features: string[];
  community: string;
  viewType?: string;
  price?: number;
  bedrooms?: number;
  bathrooms?: number;
}

/**
 * Generate SEO-optimized alt text for property images
 */
export function generatePropertyAltText(data: ImageSEOData, imageType: 'exterior' | 'interior' | 'view' | 'amenity'): string {
  const { location, propertyType, features, community, viewType, price, bedrooms, bathrooms } = data;
  
  const baseLocation = `Summerlin West, Las Vegas`;
  const communityName = community || 'luxury community';
  
  switch (imageType) {
    case 'exterior':
      const priceText = price ? ` priced at $${price.toLocaleString()}` : '';
      const bedBathText = bedrooms && bathrooms ? ` with ${bedrooms} bedrooms and ${bathrooms} bathrooms` : '';
      const featureText = features.length > 0 ? ` featuring ${features.slice(0, 2).join(' and ')}` : '';
      return `${propertyType} home in ${communityName}, ${baseLocation}${priceText}${bedBathText}${featureText} - Dr. Jan Duffy Real Estate`;
    
    case 'interior':
      const interiorFeatures = features.filter(f => 
        ['granite countertops', 'stainless steel appliances', 'hardwood floors', 'open floor plan', 'vaulted ceilings'].includes(f.toLowerCase())
      );
      const featureDescription = interiorFeatures.length > 0 ? ` with ${interiorFeatures[0]}` : '';
      return `Interior view of ${propertyType} in ${communityName}, ${baseLocation}${featureDescription} - Luxury real estate by Dr. Jan Duffy`;
    
    case 'view':
      const viewDescription = viewType || 'mountain and desert views';
      return `${viewDescription} from ${propertyType} in ${communityName}, ${baseLocation} - Summerlin West luxury homes`;
    
    case 'amenity':
      return `${communityName} community amenities in ${baseLocation} - Premier Summerlin West real estate community`;
    
    default:
      return `${propertyType} in ${communityName}, ${baseLocation} - Summerlin West luxury homes by Dr. Jan Duffy`;
  }
}

/**
 * Generate SEO-optimized alt text for community images
 */
export function generateCommunityAltText(community: string, imageType: 'entrance' | 'amenity' | 'landscape' | 'home'): string {
  const baseLocation = 'Summerlin West, Las Vegas';
  
  switch (imageType) {
    case 'entrance':
      return `${community} community entrance in ${baseLocation} - Premier luxury real estate community by Dr. Jan Duffy`;
    
    case 'amenity':
      return `${community} community amenities and facilities in ${baseLocation} - Summerlin West luxury living`;
    
    case 'landscape':
      return `${community} community landscaping and natural beauty in ${baseLocation} - Red Rock Canyon views`;
    
    case 'home':
      return `Luxury homes in ${community} community, ${baseLocation} - Summerlin West real estate by Dr. Jan Duffy`;
    
    default:
      return `${community} community in ${baseLocation} - Summerlin West luxury real estate`;
  }
}

/**
 * Generate SEO-optimized alt text for market insight images
 */
export function generateMarketInsightAltText(topic: string, location: string = 'Summerlin West'): string {
  const baseLocation = 'Las Vegas, Nevada';
  return `${topic} market analysis for ${location}, ${baseLocation} - Real estate insights by Dr. Jan Duffy, REALTOR®`;
}

/**
 * Generate SEO-optimized alt text for agent and team images
 */
export function generateAgentAltText(agentName: string, context: 'profile' | 'team' | 'action'): string {
  const baseLocation = 'Summerlin West, Las Vegas';
  
  switch (context) {
    case 'profile':
      return `Dr. Jan Duffy, REALTOR® - Top Summerlin West real estate agent in ${baseLocation}`;
    
    case 'team':
      return `Dr. Jan Duffy real estate team serving ${baseLocation} - Professional luxury home specialists`;
    
    case 'action':
      return `Dr. Jan Duffy helping clients with luxury real estate in ${baseLocation} - Expert Summerlin West REALTOR®`;
    
    default:
      return `Dr. Jan Duffy, REALTOR® - Premier luxury real estate agent in ${baseLocation}`;
  }
}

/**
 * Generate SEO-optimized alt text for lifestyle images
 */
export function generateLifestyleAltText(activity: string, location: string = 'Summerlin West'): string {
  const baseLocation = 'Las Vegas, Nevada';
  return `${activity} in ${location}, ${baseLocation} - Luxury lifestyle amenities and activities - Dr. Jan Duffy Real Estate`;
}

/**
 * Generate SEO-optimized alt text for blog post images
 */
export function generateBlogAltText(title: string, category: string): string {
  const baseLocation = 'Summerlin West, Las Vegas';
  return `${title} - ${category} insights for ${baseLocation} real estate by Dr. Jan Duffy, REALTOR®`;
}

/**
 * Generate image filename for SEO
 */
export function generateSEOImageFilename(description: string, extension: string = 'jpg'): string {
  return description
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '')
    .substring(0, 100) + `.${extension}`;
}

/**
 * Image optimization configuration for different use cases
 */
export const imageOptimizationConfig = {
  hero: {
    quality: 90,
    sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw',
    priority: true,
  },
  property: {
    quality: 85,
    sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
    priority: false,
  },
  community: {
    quality: 80,
    sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 60vw, 40vw',
    priority: false,
  },
  blog: {
    quality: 75,
    sizes: '(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 60vw',
    priority: false,
  },
  thumbnail: {
    quality: 70,
    sizes: '(max-width: 768px) 50vw, 25vw',
    priority: false,
  },
};

/**
 * Default image placeholder for loading states
 */
export const imagePlaceholders = {
  property: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzZjNzI4MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkxvYWRpbmcuLi48L3RleHQ+PC9zdmc+',
  community: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzZjNzI4MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkNvbW11bml0eSBMb2FkaW5nLi4uPC90ZXh0Pjwvc3ZnPg==',
  blog: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZjNmNGY2Ii8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxNiIgZmlsbD0iIzZjNzI4MCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkJsb2cgSW1hZ2UgTG9hZGluZy4uLjwvdGV4dD48L3N2Zz4=',
};

/**
 * Generate structured data for images
 */
export function generateImageStructuredData(images: Array<{
  url: string;
  alt: string;
  caption?: string;
  width: number;
  height: number;
}>) {
  return {
    '@type': 'ImageObject',
    contentUrl: images[0]?.url,
    description: images[0]?.alt,
    caption: images[0]?.caption || images[0]?.alt,
    width: images[0]?.width,
    height: images[0]?.height,
    ...(images.length > 1 && {
      additionalProperty: images.slice(1).map(img => ({
        '@type': 'ImageObject',
        contentUrl: img.url,
        description: img.alt,
        caption: img.caption || img.alt,
        width: img.width,
        height: img.height,
      }))
    })
  };
}
