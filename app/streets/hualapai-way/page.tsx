import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Homes for Sale on Hualapai Way | Summerlin West Real Estate',
  description:
    'Find homes for sale on Hualapai Way in Summerlin West. Major arterial road connecting Summerlin West to Red Rock Canyon. Expert guidance from Dr. Jan Duffy.',
  keywords: [
    'homes for sale Hualapai Way',
    'Hualapai Way real estate',
    'Summerlin West Hualapai Way',
    'Las Vegas Hualapai Way homes',
    'Hualapai Way properties',
    'Summerlin West real estate',
    'Dr. Jan Duffy Hualapai Way',
    'Las Vegas Hualapai Way',
    'Summerlin West homes for sale',
    'Hualapai Way subdivisions',
  ],
  alternates: {
    canonical: '/streets/hualapai-way',
  },
  openGraph: {
    title: 'Homes for Sale on Hualapai Way | Summerlin West Real Estate',
    description:
      'Find homes for sale on Hualapai Way in Summerlin West. Major arterial road connecting Summerlin West to Red Rock Canyon.',
    url: 'https://www.summerlinwestrealestate.com/streets/hualapai-way',
    siteName: 'Summerlin West Real Estate',
    images: [
      {
        url: '/images/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Hualapai Way - Summerlin West',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Homes for Sale on Hualapai Way | Summerlin West Real Estate',
    description:
      'Find homes for sale on Hualapai Way in Summerlin West. Major arterial road connecting Summerlin West to Red Rock Canyon.',
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

const subdivisionsOnHualapai = [
  { name: 'The Vistas', access: 'Main entrance', distance: '0.3 mi', slug: 'the-vistas' },
  { name: 'Stonebridge', access: 'Side entrance', distance: '0.8 mi', slug: 'stonebridge' },
  { name: 'Redpoint', access: 'Side entrance', distance: '1.0 mi', slug: 'redpoint' },
  { name: 'Reverence', access: 'Side entrance', distance: '1.2 mi', slug: 'reverence' },
];

const landmarksOnHualapai = [
  { name: 'Red Rock Canyon', distance: '2.5 mi', type: 'National Conservation Area' },
  { name: 'The Vistas Park', distance: '0.3 mi', type: 'Community Park' },
  { name: 'Downtown Summerlin', distance: '3.2 mi', type: 'Shopping & Entertainment' },
  { name: 'Las Vegas Ballpark', distance: '3.4 mi', type: 'Sports Venue' },
];

export default function HualapaiWayPage() {
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
              <Link href="/streets" className="text-blue-600 hover:text-blue-800">
                Streets
              </Link>
            </li>
            <li className="text-gray-500">/</li>
            <li className="text-gray-900" aria-current="page">
              Hualapai Way
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-purple-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Homes for Sale on Hualapai Way</h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Major arterial road connecting Summerlin West to Red Rock Canyon
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto">
              <h2 className="text-2xl font-semibold mb-4">Hualapai Way Overview</h2>
              <p className="text-lg mb-2">Major arterial road in Summerlin West</p>
              <p className="text-lg mb-2">Location: Summerlin West, Las Vegas, NV</p>
              <p className="text-lg">Connects to Red Rock Canyon National Conservation Area</p>
            </div>
          </div>
        </div>
      </section>

      {/* Street Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">About Hualapai Way</h2>
              <p className="text-lg text-gray-700 mb-6">
                Hualapai Way is a major arterial road running through Summerlin West, providing
                direct access to Red Rock Canyon National Conservation Area and connecting to The
                Vistas communities. This scenic road offers beautiful mountain views and convenient
                access to outdoor recreation.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="text-green-600 text-xl mr-3">✓</span>
                  <span className="text-gray-700">
                    Direct access to Red Rock Canyon National Conservation Area
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-600 text-xl mr-3">✓</span>
                  <span className="text-gray-700">
                    Convenient connection to The Vistas communities
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-600 text-xl mr-3">✓</span>
                  <span className="text-gray-700">Scenic mountain views and desert landscape</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-600 text-xl mr-3">✓</span>
                  <span className="text-gray-700">
                    Well-maintained with excellent street lighting
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6">Street Details</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-700">Length:</span>
                  <span className="font-semibold">~4.2 miles</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Speed Limit:</span>
                  <span className="font-semibold">45 mph</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Lanes:</span>
                  <span className="font-semibold">2 lanes each direction</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Street Lighting:</span>
                  <span className="font-semibold">Full coverage</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Sidewalks:</span>
                  <span className="font-semibold">Both sides</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subdivisions Accessible from Hualapai Way */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Communities Accessible from Hualapai Way
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {subdivisionsOnHualapai.map((subdivision) => (
              <div
                key={subdivision.slug}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold mb-2">{subdivision.name}</h3>
                <p className="text-gray-600 mb-2">{subdivision.access}</p>
                <p className="text-blue-600 font-medium mb-4">Distance: {subdivision.distance}</p>
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

      {/* Landmarks on Hualapai Way */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Landmarks Accessible from Hualapai Way
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {landmarksOnHualapai.map((landmark) => (
              <div key={landmark.name} className="bg-gray-50 rounded-lg p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">{landmark.name}</h3>
                <p className="text-gray-600 mb-2">{landmark.type}</p>
                <p className="text-blue-600 font-medium">{landmark.distance}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Properties on Hualapai Way */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Homes for Sale on Hualapai Way</h2>
          <p className="text-lg text-gray-700 text-center mb-8 max-w-3xl mx-auto">
            Discover homes for sale on Hualapai Way and in communities accessible from this major
            arterial road. These properties offer convenient access to Red Rock Canyon and The
            Vistas communities.
          </p>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 text-center">
            <h3 className="text-xl font-semibold text-blue-900 mb-4">Property Search Coming Soon</h3>
            <p className="text-blue-700 mb-6">
              We're updating our property search system. In the meantime, contact Dr. Jan Duffy for personalized assistance.
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
          <h2 className="text-3xl font-bold mb-6">Ready to Find Your Home on Hualapai Way?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Dr. Jan Duffy specializes in Summerlin West communities accessible from Hualapai Way.
            Get expert guidance on properties in this scenic location.
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
            '@type': 'Street',
            name: 'Hualapai Way',
            description:
              'Major arterial road connecting Summerlin West to Red Rock Canyon National Conservation Area',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Hualapai Way',
              addressLocality: 'Las Vegas',
              addressRegion: 'NV',
              addressCountry: 'US',
            },
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
                name: 'Length',
                value: '4.2 miles',
              },
              {
                '@type': 'PropertyValue',
                name: 'Speed Limit',
                value: '45 mph',
              },
              {
                '@type': 'PropertyValue',
                name: 'Lanes',
                value: '2 lanes each direction',
              },
            ],
          }),
        }}
      />
    </div>
  );
}
