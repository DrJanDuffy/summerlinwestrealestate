import type { Metadata } from 'next';
import dynamic from 'next/dynamic';
import Link from 'next/link';

const RealScoutOfficeListings = dynamic(
  () => import('../../../components/ui/RealScoutOfficeListings')
);

export const metadata: Metadata = {
  title: 'Homes for Sale in 89144 | Summerlin West Real Estate',
  description:
    'Find homes for sale in zip code 89144, Summerlin West. Convenient location with access to Palo Verde High School and major amenities. Expert guidance from Dr. Jan Duffy.',
  keywords: [
    'homes for sale 89144',
    '89144 real estate',
    'Summerlin West 89144',
    'Las Vegas 89144 homes',
    'zip code 89144 real estate',
    'Summerlin West real estate',
    'Dr. Jan Duffy 89144',
    'Las Vegas zip code 89144',
    'Summerlin West homes for sale',
    '89144 subdivisions',
  ],
  alternates: {
    canonical: '/zip-codes/89144',
  },
  openGraph: {
    title: 'Homes for Sale in 89144 | Summerlin West Real Estate',
    description:
      'Find homes for sale in zip code 89144, Summerlin West. Convenient location with access to Palo Verde High School and major amenities.',
    url: 'https://www.summerlinwestrealestate.com/zip-codes/89144',
    siteName: 'Summerlin West Real Estate',
    images: [
      {
        url: '/images/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Zip Code 89144 - Summerlin West',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Homes for Sale in 89144 | Summerlin West Real Estate',
    description:
      'Find homes for sale in zip code 89144, Summerlin West. Convenient location with access to Palo Verde High School and major amenities.',
    images: ['/images/og-image.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

const subdivisionsIn89144 = [
  {
    name: 'Downtown Summerlin Area',
    type: 'Mixed Use',
    priceRange: '$500K-$1.5M',
    slug: 'downtown-summerlin',
  },
  {
    name: 'Palo Verde High School Area',
    type: 'Established',
    priceRange: '$600K-$1.2M',
    slug: 'palo-verde-area',
  },
  {
    name: 'Summerlin West Estates',
    type: 'Luxury',
    priceRange: '$800K-$2.0M',
    slug: 'summerlin-west-estates',
  },
];

const schoolsIn89144 = [
  { name: 'Palo Verde High School', address: '333 S Pavilion Center Dr', type: 'High' },
  { name: 'Faith Lutheran School', address: '2015 S Hualapai Way', type: 'Private K-12' },
];

export default function ZipCode89144Page() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Breadcrumb Navigation */}
      <nav className="bg-white shadow-sm" aria-label="Breadcrumb">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <ol className="flex items-center space-x-2 text-sm">
            <li>
              <Link href="/" className="text-blue-600 hover:text-blue-800">
                Home
              </Link>
            </li>
            <li className="text-gray-500">/</li>
            <li>
              <Link href="/zip-codes" className="text-blue-600 hover:text-blue-800">
                Zip Codes
              </Link>
            </li>
            <li className="text-gray-500">/</li>
            <li className="text-gray-900" aria-current="page">
              89144
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-purple-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Homes for Sale in Zip Code 89144
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Summerlin West - Convenient Location with Excellent School Access
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto">
              <h2 className="text-2xl font-semibold mb-4">Zip Code 89144 Overview</h2>
              <p className="text-lg mb-2">Convenient Summerlin West location</p>
              <p className="text-lg mb-2">Location: Summerlin West, Las Vegas, NV</p>
              <p className="text-lg">Access to Palo Verde High School</p>
            </div>
          </div>
        </div>
      </section>

      {/* Market Statistics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Market Statistics for Zip Code 89144
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">$750K</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Median Home Price</h3>
              <p className="text-gray-600">+3.5% from last year</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">21</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Days on Market</h3>
              <p className="text-gray-600">-3 days from last year</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">67</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Active Listings</h3>
              <p className="text-gray-600">+6% from last month</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">$275</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Price per Sq Ft</h3>
              <p className="text-gray-600">+2.1% from last month</p>
            </div>
          </div>
        </div>
      </section>

      {/* Subdivisions in 89144 */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Areas in Zip Code 89144</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subdivisionsIn89144.map((subdivision) => (
              <div
                key={subdivision.slug}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-2">{subdivision.name}</h3>
                <p className="text-gray-600 mb-2">{subdivision.type}</p>
                <p className="text-blue-600 font-medium mb-4">{subdivision.priceRange}</p>
                <Link
                  href={`/communities/${subdivision.slug}`}
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  View Homes in {subdivision.name} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schools in 89144 */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Schools Serving Zip Code 89144</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {schoolsIn89144.map((school) => (
              <div key={school.name} className="bg-gray-50 rounded-lg p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">{school.name}</h3>
                <p className="text-gray-600 mb-2">{school.type} School</p>
                <p className="text-sm text-gray-500 mb-4">{school.address}</p>
                <Link
                  href={`/schools/${school.name.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  View School Details →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Properties in 89144 */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Homes for Sale in Zip Code 89144</h2>
          <p className="text-lg text-gray-700 text-center mb-8 max-w-3xl mx-auto">
            Discover homes for sale in zip code 89144, featuring convenient Summerlin West locations
            with excellent school access and modern amenities.
          </p>
          <RealScoutOfficeListings
            agentEncodedId="QWdlbnQtMjI1MDUw"
            sortOrder="PRICE_LOW"
            listingStatus="For Sale"
            propertyTypes=",SFR,MF,TC,LAL,MOBILE,OTHER"
            priceMin="400000"
            priceMax="2000000"
            className="mt-6"
          />
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Find Your Home in Zip Code 89144?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Dr. Jan Duffy specializes in Summerlin West communities in zip code 89144. Get expert
            guidance on properties in this convenient location.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:702-550-0112"
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors"
            >
              📞 Call (702) 550-0112
            </a>
            <a
              href="mailto:DrJanSells@SummerlinWestRealEstate.com"
              className="bg-blue-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-400 transition-colors"
            >
              📧 Email Dr. Jan Duffy
            </a>
          </div>
        </div>
      </section>

      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'PostalAddress',
            postalCode: '89144',
            addressLocality: 'Las Vegas',
            addressRegion: 'NV',
            addressCountry: 'US',
            description: 'Zip code 89144 covers convenient Summerlin West locations in Las Vegas',
            geo: {
              '@type': 'GeoCoordinates',
              latitude: 36.1865,
              longitude: -115.3432,
            },
            containedInPlace: {
              '@type': 'City',
              name: 'Las Vegas',
              addressRegion: 'NV',
            },
            additionalProperty: [
              {
                '@type': 'PropertyValue',
                name: 'Median Home Price',
                value: '$750,000',
              },
              {
                '@type': 'PropertyValue',
                name: 'Days on Market',
                value: '21',
              },
              {
                '@type': 'PropertyValue',
                name: 'Active Listings',
                value: '67',
              },
            ],
          }),
        }}
      />
    </div>
  );
}
