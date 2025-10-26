/**
 * V0.app Generated: San Marcos Community Page
 * SEO Optimized with unique content
 */
'use client';

import CommunityPageTemplate from './CommunityPageTemplate';

export default function SanMarcosCommunityPage() {
  const communityData = {
    name: 'San Marcos',
    description:
      'San Marcos is an exclusive luxury community in Summerlin West featuring stunning homes with Red Rock Canyon views and resort-style living.',
    locationKeywords: [
      'San Marcos Summerlin West',
      'San Marcos luxury homes',
      'San Marcos real estate',
      'The Vistas San Marcos',
    ],
    homeTypes: ['Luxury Single-Family Homes', 'Custom Estates', 'Luxury Townhomes'],
    priceRange: '$800,000 - $2,500,000',
    amenities: [
      'Private Gated Community',
      'Resort-Style Swimming Pools',
      'State-of-the-Art Fitness Center',
      'Entertainment Pavilions',
      'Walking Trails & Parks',
      'Red Rock Canyon Views',
      'Proximity to World-Class Golf',
      'Near Downtown Summerlin',
    ],
    schools: ['Faith Lutheran Middle School', 'Palo Verde High School', 'Sig Rogich Middle School'],
    marketInsights: {
      averagePrice: '$1.2M',
      daysOnMarket: '45 days',
      priceAppreciation: '+8% YoY',
    },
    notableFeatures: [
      'Exclusive gated community with 24/7 security',
      'Homes feature luxury finishes and modern design',
      'Close to Red Rock Canyon National Conservation Area',
      'Minutes from Downtown Summerlin shopping and dining',
      'Excellent schools in the Clark County School District',
    ],
    whyChoose: [
      'Prime Summerlin West Location',
      'Luxury Amenities Included',
      'Strong Community Foundation',
      'Excellent Resale Value',
      'Top-Rated Schools Nearby',
      'Convenient Shopping & Dining',
    ],
  };

  return <CommunityPageTemplate {...communityData} />;
}
