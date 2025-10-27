import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Homes for Sale in 89134 | Summerlin West Real Estate',
  description:
    'Find homes for sale in zip code 89134, Summerlin West. Established communities with excellent schools and convenient access to amenities. Expert guidance from Dr. Jan Duffy.',
  keywords: [
    'homes for sale 89134',
    '89134 real estate',
    'Summerlin West 89134',
    'Las Vegas 89134 homes',
    'zip code 89134 real estate',
    'Summerlin West real estate',
    'Dr. Jan Duffy 89134',
    'Las Vegas zip code 89134',
    'Summerlin West homes for sale',
    '89134 subdivisions',
  ],
  alternates: {
    canonical: '/zip-codes/89134',
  },
  openGraph: {
    title: 'Homes for Sale in 89134 | Summerlin West Real Estate',
    description:
      'Find homes for sale in zip code 89134, Summerlin West. Established communities with excellent schools and convenient access to amenities.',
    url: 'https://www.summerlinwestrealestate.com/zip-codes/89134',
    siteName: 'Summerlin West Real Estate',
    images: [
      {
        url: '/images/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Zip Code 89134 - Summerlin West',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Homes for Sale in 89134 | Summerlin West Real Estate',
    description:
      'Find homes for sale in zip code 89134, Summerlin West. Established communities with excellent schools and convenient access to amenities.',
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

const subdivisionsIn89134 = [
  {
    name: 'Stonebridge Communities',
    type: 'Luxury/Gated',
    priceRange: '$850K-$2.0M',
    slug: 'stonebridge',
  },
  {
    name: 'Redpoint Communities',
    type: 'Luxury/Gated',
    priceRange: '$750K-$1.8M',
    slug: 'redpoint',
  },
  { name: 'The Paseos', type: 'Family', priceRange: '$600K-$1.2M', slug: 'the-paseos' },
  { name: 'Reverence', type: 'Luxury/Gated', priceRange: '$900K-$2.5M', slug: 'reverence' },
];

const schoolsIn89134 = [
  { name: 'Sig Rogich Middle School', address: '9855 Villa Ridge Dr', type: 'Middle' },
  { name: 'Palo Verde High School', address: '333 S Pavilion Center Dr', type: 'High' },
  { name: 'Faith Lutheran School', address: '2015 S Hualapai Way', type: 'Private K-12' },
];

export default function ZipCode89134Page() {
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
              89134
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-purple-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Homes for Sale in Zip Code 89134
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Summerlin West - Established Communities with Modern Amenities
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto">
              <h2 className="text-2xl font-semibold mb-4">Zip Code 89134 Overview</h2>
              <p className="text-lg mb-2">Established Summerlin West communities</p>
              <p className="text-lg mb-2">Location: Summerlin West, Las Vegas, NV</p>
              <p className="text-lg">Communities: Stonebridge, Redpoint, The Paseos</p>
            </div>
          </div>
        </div>
      </section>

      {/* Market Statistics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Market Statistics for Zip Code 89134
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">$925K</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Median Home Price</h3>
              <p className="text-gray-600">+4.8% from last year</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">18</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Days on Market</h3>
              <p className="text-gray-600">-5 days from last year</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">89</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Active Listings</h3>
              <p className="text-gray-600">+8% from last month</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">$285</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Price per Sq Ft</h3>
              <p className="text-gray-600">+2.8% from last month</p>
            </div>
          </div>
        </div>
      </section>

      {/* Subdivisions in 89134 */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Communities in Zip Code 89134</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {subdivisionsIn89134.map((subdivision) => (
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

      {/* Schools in 89134 */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Schools Serving Zip Code 89134</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {schoolsIn89134.map((school) => (
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

      {/* Properties in 89134 */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Homes for Sale in Zip Code 89134</h2>
          <p className="text-lg text-gray-700 text-center mb-8 max-w-3xl mx-auto">
            Discover homes for sale in zip code 89134, featuring established Summerlin West
            communities with modern amenities and excellent school access.
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 text-center">
            <h3 className="text-xl font-semibold text-blue-900 mb-4">
              Property Search Coming Soon
            </h3>
            <p className="text-blue-700 mb-6">
              We're updating our property search system. In the meantime, contact Dr. Jan Duffy for
              personalized assistance finding homes in zip code 89134.
            </p>
            <a
              href="tel:702-550-0112"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
            >
              📞 Call (702) 550-0112
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Find Your Home in Zip Code 89134?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Dr. Jan Duffy specializes in Summerlin West communities in zip code 89134. Get expert
            guidance on properties in this established area.
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
            postalCode: '89134',
            addressLocality: 'Las Vegas',
            addressRegion: 'NV',
            addressCountry: 'US',
            description:
              'Zip code 89134 covers established Summerlin West communities in Las Vegas',
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
                value: '$925,000',
              },
              {
                '@type': 'PropertyValue',
                name: 'Days on Market',
                value: '18',
              },
              {
                '@type': 'PropertyValue',
                name: 'Active Listings',
                value: '89',
              },
            ],
          }),
        }}
      />
    </div>
  );
}
