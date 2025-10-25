'use client';

import { motion } from 'framer-motion';
import { MapPinIcon, HomeIcon, StarIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

interface Community {
  id: string;
  name: string;
  description: string;
  image: string;
  priceRange: string;
  homeCount: string;
  amenities: string[];
  featured: boolean;
  slug: string;
}

interface EnhancedCommunityShowcaseProps {
  title?: string;
  subtitle?: string;
  communities?: Community[];
  className?: string;
}

const defaultCommunities: Community[] = [
  {
    id: '1',
    name: 'The Vistas',
    description: 'Luxury homes with stunning Red Rock Canyon views and world-class amenities',
    image: '/images/communities/the-vistas-hero.jpg',
    priceRange: '$800K - $2.5M',
    homeCount: '450+',
    amenities: ['Golf Course', 'Clubhouse', 'Pool', 'Tennis Courts'],
    featured: true,
    slug: 'the-vistas'
  },
  {
    id: '2',
    name: 'Red Rock Country Club',
    description: 'Premier golf community with custom estates and resort-style living',
    image: '/images/communities/red-rock-country-club-hero.jpg',
    priceRange: '$600K - $3M',
    homeCount: '300+',
    amenities: ['Golf Course', 'Spa', 'Fine Dining', 'Fitness Center'],
    featured: true,
    slug: 'red-rock-country-club'
  },
  {
    id: '3',
    name: 'Summerlin West',
    description: 'Master-planned community with parks, trails, and top-rated schools',
    image: '/images/communities/summerlin-west-hero.jpg',
    priceRange: '$400K - $1.5M',
    homeCount: '1200+',
    amenities: ['Parks', 'Trails', 'Schools', 'Shopping'],
    featured: false,
    slug: 'summerlin-west'
  },
  {
    id: '4',
    name: 'The Ridges',
    description: 'Exclusive gated community with custom homes and mountain views',
    image: '/images/communities/the-ridges-hero.jpg',
    priceRange: '$1M - $5M',
    homeCount: '200+',
    amenities: ['Gated', 'Mountain Views', 'Custom Homes', 'Privacy'],
    featured: true,
    slug: 'the-ridges'
  }
];

export default function EnhancedCommunityShowcase({
  title = "Discover Summerlin West Communities",
  subtitle = "Explore the finest master-planned communities in Las Vegas",
  communities = defaultCommunities,
  className = "",
}: EnhancedCommunityShowcaseProps) {
  const featuredCommunities = communities.filter(c => c.featured);
  const otherCommunities = communities.filter(c => !c.featured);

  return (
    <div className={`py-16 lg:py-24 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </motion.div>

        {/* Featured Communities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Featured Communities
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredCommunities.map((community, index) => (
              <motion.div
                key={community.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="relative h-64 overflow-hidden">
                  <div 
                    className="w-full h-full bg-cover bg-center bg-no-repeat group-hover:scale-105 transition-transform duration-300"
                    style={{ backgroundImage: `url(${community.image})` }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  {/* Featured Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Featured
                    </span>
                  </div>
                  
                  {/* Price Range */}
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-white/90 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                      {community.priceRange}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{community.name}</h4>
                  <p className="text-gray-600 mb-4 leading-relaxed">{community.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <HomeIcon className="w-4 h-4 mr-1" />
                      <span>{community.homeCount} homes</span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPinIcon className="w-4 h-4 mr-1" />
                      <span>Summerlin West</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {community.amenities.slice(0, 3).map((amenity, amenityIndex) => (
                      <span
                        key={amenityIndex}
                        className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs font-medium"
                      >
                        {amenity}
                      </span>
                    ))}
                    {community.amenities.length > 3 && (
                      <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs font-medium">
                        +{community.amenities.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  <Link
                    href={`/communities/${community.slug}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold group-hover:translate-x-1 transition-all duration-200"
                  >
                    Explore {community.name}
                    <ArrowRightIcon className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Other Communities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            More Communities
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherCommunities.map((community, index) => (
              <motion.div
                key={community.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              >
                <div className="relative h-48 overflow-hidden">
                  <div 
                    className="w-full h-full bg-cover bg-center bg-no-repeat group-hover:scale-105 transition-transform duration-300"
                    style={{ backgroundImage: `url(${community.image})` }}
                  ></div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                  
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-white/90 text-gray-900 px-2 py-1 rounded text-sm font-semibold">
                      {community.priceRange}
                    </span>
                  </div>
                </div>
                
                <div className="p-4">
                  <h4 className="text-lg font-bold text-gray-900 mb-2">{community.name}</h4>
                  <p className="text-gray-600 text-sm mb-3 leading-relaxed">{community.description}</p>
                  
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center text-xs text-gray-600">
                      <HomeIcon className="w-3 h-3 mr-1" />
                      <span>{community.homeCount}</span>
                    </div>
                    <div className="flex items-center text-xs text-gray-600">
                      <MapPinIcon className="w-3 h-3 mr-1" />
                      <span>Summerlin West</span>
                    </div>
                  </div>
                  
                  <Link
                    href={`/communities/${community.slug}`}
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold text-sm group-hover:translate-x-1 transition-all duration-200"
                  >
                    Learn More
                    <ArrowRightIcon className="w-3 h-3 ml-1" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Community Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gradient-to-r from-blue-900 via-blue-800 to-purple-900 rounded-2xl p-8 lg:p-12 text-white relative overflow-hidden mb-16"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/10 rounded-full blur-2xl"></div>
          
          <div className="relative z-10">
            <h3 className="text-2xl lg:text-3xl font-bold text-center mb-8">
              Why Choose Summerlin West?
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-200 mb-2">15+</div>
                <div className="text-blue-100">Master-Planned Communities</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-200 mb-2">50+</div>
                <div className="text-blue-100">Parks & Recreation Areas</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-200 mb-2">A+</div>
                <div className="text-blue-100">Rated Schools</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-200 mb-2">24/7</div>
                <div className="text-blue-100">Security & Safety</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Find Your Perfect Community
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Dr. Jan Duffy knows every community in Summerlin West. Let her help you 
              find the perfect neighborhood that matches your lifestyle and budget.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/communities"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-8 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Explore All Communities
              </Link>
              <Link
                href="/contact"
                className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg border-2 border-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-200"
              >
                Get Community Guide
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}



