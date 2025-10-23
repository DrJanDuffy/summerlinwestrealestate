'use client';

import Link from 'next/link';
import { FaMapMarkerAlt, FaSchool, FaHome, FaRoad, FaMailBulk } from 'react-icons/fa';

interface HyperlocalLinksProps {
  currentPage?: 'subdivision' | 'school' | 'zip' | 'street' | 'community' | 'homepage';
  currentLocation?: string;
  className?: string;
}

interface LinkItem {
  href: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
}

const subdivisions = [
  { slug: 'paradiso', name: 'Paradiso' },
  { slug: 'palmilla', name: 'Palmilla' },
  { slug: 'estancia', name: 'Estancia' },
  { slug: 'talaverde', name: 'Talaverde' },
  { slug: 'casa-rosa', name: 'Casa Rosa' },
  { slug: 'san-marcos', name: 'San Marcos' },
  { slug: 'sonesta', name: 'Sonesta' },
  { slug: 'barrington', name: 'Barrington' },
  { slug: 'monterossa', name: 'Monterossa' },
  { slug: 'kingwood', name: 'Kingwood' },
  { slug: 'ashton-park', name: 'Ashton Park' },
  { slug: 'bella-vista', name: 'Bella Vista' },
  { slug: 'hillstone', name: 'Hillstone' },
  { slug: 'portofino', name: 'Portofino' },
  { slug: 'encanto', name: 'Encanto' },
  { slug: 'somerset', name: 'Somerset' },
  { slug: 'summerfield', name: 'Summerfield' },
  { slug: 'vista-verde', name: 'Vista Verde' },
  { slug: 'talega', name: 'Talega' },
  { slug: 'canterra', name: 'Canterra' },
  { slug: 'capri', name: 'Capri' },
  { slug: 'cara-vella', name: 'Cara Vella' },
];

const schools = [
  { slug: 'red-rock-elementary', name: 'Red Rock Elementary', type: 'Elementary' },
  { slug: 'sig-rogich-middle', name: 'Sig Rogich Middle School', type: 'Middle' },
  { slug: 'palo-verde-high', name: 'Palo Verde High School', type: 'High' },
  { slug: 'faith-lutheran', name: 'Faith Lutheran School', type: 'Private' },
];

const zipCodes = [
  { code: '89135', name: '89135', description: 'The Vistas & Stonebridge' },
  { code: '89134', name: '89134', description: 'Downtown Summerlin' },
  { code: '89144', name: '89144', description: 'Red Rock Area' },
];

const streets = [
  { slug: 'sky-vista-drive', name: 'Sky Vista Drive' },
  { slug: 'desert-foothills-drive', name: 'Desert Foothills Drive' },
  { slug: 'town-center-drive', name: 'Town Center Drive' },
  { slug: 'hualapai-way', name: 'Hualapai Way' },
];

const communities = [
  { slug: 'the-vistas', name: 'The Vistas' },
  { slug: 'stonebridge', name: 'Stonebridge' },
  { slug: 'redpoint', name: 'Redpoint' },
  { slug: 'reverence', name: 'Reverence' },
];

export default function HyperlocalLinks({ 
  currentPage, 
  currentLocation, 
  className = '' 
}: HyperlocalLinksProps) {
  
  const getContextualLinks = (): LinkItem[] => {
    const links: LinkItem[] = [];

    // Add subdivision links for most page types
    if (currentPage !== 'subdivision') {
      links.push({
        href: '/service-area',
        label: 'Browse by Subdivision',
        icon: FaHome,
        description: 'Explore all Summerlin West subdivisions'
      });
    }

    // Add school links
    if (currentPage !== 'school') {
      links.push({
        href: '/schools',
        label: 'Search by School',
        icon: FaSchool,
        description: 'Find homes near top-rated schools'
      });
    }

    // Add zip code links
    if (currentPage !== 'zip') {
      links.push({
        href: '/zip-codes',
        label: 'Browse by Zip Code',
        icon: FaMailBulk,
        description: 'Explore homes by zip code area'
      });
    }

    // Add street links
    if (currentPage !== 'street') {
      links.push({
        href: '/streets',
        label: 'Search by Street',
        icon: FaRoad,
        description: 'Find homes on specific streets'
      });
    }

    // Add community links
    if (currentPage !== 'community') {
      links.push({
        href: '/communities',
        label: 'Explore Communities',
        icon: FaMapMarkerAlt,
        description: 'Discover luxury communities'
      });
    }

    return links;
  };

  const getRelatedSubdivisions = () => {
    if (currentPage === 'subdivision' || currentPage === 'community') {
      return subdivisions.slice(0, 6); // Show top 6 related subdivisions
    }
    return subdivisions.slice(0, 4); // Show top 4 for other pages
  };

  const getRelatedSchools = () => {
    return schools.slice(0, 3); // Show top 3 schools
  };

  const getRelatedZipCodes = () => {
    return zipCodes.slice(0, 3); // Show all zip codes
  };

  const getRelatedStreets = () => {
    return streets.slice(0, 3); // Show top 3 streets
  };

  const contextualLinks = getContextualLinks();

  return (
    <div className={`bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg p-6 ${className}`}>
      <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
        Explore Summerlin West
      </h3>
      
      {/* Main Navigation Links */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {contextualLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 group"
          >
            <div className="flex items-center mb-2">
              <link.icon className="text-blue-600 text-xl mr-3 group-hover:text-blue-800" />
              <h4 className="font-semibold text-gray-900 group-hover:text-blue-800">
                {link.label}
              </h4>
            </div>
            <p className="text-sm text-gray-600 group-hover:text-gray-700">
              {link.description}
            </p>
          </Link>
        ))}
      </div>

      {/* Quick Access Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Popular Subdivisions */}
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
            <FaHome className="text-blue-600 mr-2" />
            Popular Subdivisions
          </h4>
          <div className="space-y-2">
            {getRelatedSubdivisions().map((subdivision) => (
              <Link
                key={subdivision.slug}
                href={`/service-area/${subdivision.slug}`}
                className="block text-sm text-blue-600 hover:text-blue-800 hover:underline"
              >
                {subdivision.name}
              </Link>
            ))}
            <Link
              href="/service-area"
              className="block text-sm font-medium text-blue-600 hover:text-blue-800 hover:underline mt-2"
            >
              View All Subdivisions →
            </Link>
          </div>
        </div>

        {/* Top Schools */}
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
            <FaSchool className="text-green-600 mr-2" />
            Top Schools
          </h4>
          <div className="space-y-2">
            {getRelatedSchools().map((school) => (
              <Link
                key={school.slug}
                href={`/schools/${school.slug}`}
                className="block text-sm text-blue-600 hover:text-blue-800 hover:underline"
              >
                {school.name}
              </Link>
            ))}
            <Link
              href="/schools"
              className="block text-sm font-medium text-blue-600 hover:text-blue-800 hover:underline mt-2"
            >
              View All Schools →
            </Link>
          </div>
        </div>

        {/* Zip Codes */}
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
            <FaMailBulk className="text-purple-600 mr-2" />
            Zip Code Areas
          </h4>
          <div className="space-y-2">
            {getRelatedZipCodes().map((zip) => (
              <Link
                key={zip.code}
                href={`/zip-codes/${zip.code}`}
                className="block text-sm text-blue-600 hover:text-blue-800 hover:underline"
              >
                {zip.name} - {zip.description}
              </Link>
            ))}
            <Link
              href="/zip-codes"
              className="block text-sm font-medium text-blue-600 hover:text-blue-800 hover:underline mt-2"
            >
              View All Zip Codes →
            </Link>
          </div>
        </div>

        {/* Major Streets */}
        <div className="bg-white rounded-lg p-4 shadow-sm">
          <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
            <FaRoad className="text-orange-600 mr-2" />
            Major Streets
          </h4>
          <div className="space-y-2">
            {getRelatedStreets().map((street) => (
              <Link
                key={street.slug}
                href={`/streets/${street.slug}`}
                className="block text-sm text-blue-600 hover:text-blue-800 hover:underline"
              >
                {street.name}
              </Link>
            ))}
            <Link
              href="/streets"
              className="block text-sm font-medium text-blue-600 hover:text-blue-800 hover:underline mt-2"
            >
              View All Streets →
            </Link>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-6 text-center">
        <p className="text-gray-600 mb-4">
          Need help finding the perfect home in Summerlin West?
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a
            href="tel:702-550-0112"
            className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-colors"
          >
            📞 Call (702) 550-0112
          </a>
          <a
            href="mailto:DrJanSells@SummerlinWestRealEstate.com"
            className="bg-green-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors"
          >
            📧 Email Dr. Jan Duffy
          </a>
        </div>
      </div>
    </div>
  );
}
