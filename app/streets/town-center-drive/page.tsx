import type { Metadata } from 'next';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const RealScoutOfficeListingsWrapper = dynamic(
  () => import('../../../components/ui/RealScoutOfficeListingsWrapper'),
  {
    ssr: false,
  }
);

export const metadata: Metadata = {
  title: 'Homes for Sale on Town Center Drive | Summerlin West Real Estate',
  description:
    'Find homes for sale on Town Center Drive in Summerlin West. Major commercial corridor connecting Downtown Summerlin to The Vistas communities. Expert guidance from Dr. Jan Duffy.',
  keywords: [
    'homes for sale Town Center Drive',
    'Town Center Drive real estate',
    'Summerlin West Town Center Drive',
    'Las Vegas Town Center Drive homes',
    'Town Center Drive properties',
    'Summerlin West real estate',
    'Dr. Jan Duffy Town Center Drive',
    'Las Vegas Town Center Drive',
    'Summerlin West homes for sale',
    'Town Center Drive subdivisions'
  ],
  alternates: {
    canonical: '/streets/town-center-drive',
  },
  openGraph: {
    title: 'Homes for Sale on Town Center Drive | Summerlin West Real Estate',
    description:
      'Find homes for sale on Town Center Drive in Summerlin West. Major commercial corridor connecting Downtown Summerlin to The Vistas communities.',
    url: 'https://www.summerlinwestrealestate.com/streets/town-center-drive',
    siteName: 'Summerlin West Real Estate',
    images: [
      {
        url: '/images/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Town Center Drive - Summerlin West',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Homes for Sale on Town Center Drive | Summerlin West Real Estate',
    description:
      'Find homes for sale on Town Center Drive in Summerlin West. Major commercial corridor connecting Downtown Summerlin to The Vistas communities.',
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

const subdivisionsOnTownCenter = [
  { name: 'Downtown Summerlin', access: 'Direct access', distance: '0.0 mi', slug: 'downtown-summerlin' },
  { name: 'The Vistas', access: 'Main entrance', distance: '0.5 mi', slug: 'the-vistas' },
  { name: 'Stonebridge', access: 'Side entrance', distance: '1.0 mi', slug: 'stonebridge' },
  { name: 'Redpoint', access: 'Side entrance', distance: '1.2 mi', slug: 'redpoint' },
];

const landmarksOnTownCenter = [
  { name: 'Downtown Summerlin', distance: '0.0 mi', type: 'Shopping & Entertainment' },
  { name: 'Las Vegas Ballpark', distance: '0.2 mi', type: 'Sports Venue' },
  { name: 'Red Rock Casino', distance: '1.5 mi', type: 'Casino & Resort' },
  { name: 'Summerlin Hospital', distance: '2.1 mi', type: 'Medical Center' },
];

export default function TownCenterDrivePage() {
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
              Town Center Drive
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-purple-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Homes for Sale on Town Center Drive
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Major commercial corridor connecting Downtown Summerlin to The Vistas communities
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto">
              <h2 className="text-2xl font-semibold mb-4">Town Center Drive Overview</h2>
              <p className="text-lg mb-2">Major commercial corridor in Summerlin West</p>
              <p className="text-lg mb-2">Location: Summerlin West, Las Vegas, NV</p>
              <p className="text-lg">Connects Downtown Summerlin to The Vistas</p>
            </div>
          </div>
        </div>
      </section>

      {/* Street Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">About Town Center Drive</h2>
              <p className="text-lg text-gray-700 mb-6">
                Town Center Drive is a major commercial corridor running through Summerlin West, 
                providing direct access to Downtown Summerlin and connecting to The Vistas communities. 
                This well-maintained road offers convenient access to shopping, dining, and entertainment.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="text-green-600 text-xl mr-3">✓</span>
                  <span className="text-gray-700">Direct access to Downtown Summerlin shopping and dining</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-600 text-xl mr-3">✓</span>
                  <span className="text-gray-700">Convenient connection to The Vistas communities</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-600 text-xl mr-3">✓</span>
                  <span className="text-gray-700">Access to Las Vegas Ballpark and entertainment venues</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-600 text-xl mr-3">✓</span>
                  <span className="text-gray-700">Well-maintained with excellent street lighting</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6">Street Details</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-700">Length:</span>
                  <span className="font-semibold">~3.8 miles</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Speed Limit:</span>
                  <span className="font-semibold">40 mph</span>
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

      {/* Subdivisions Accessible from Town Center Drive */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Communities Accessible from Town Center Drive
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
            {subdivisionsOnTownCenter.map((subdivision) => (
              <div key={subdivision.slug} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
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

      {/* Landmarks on Town Center Drive */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Landmarks Accessible from Town Center Drive
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {landmarksOnTownCenter.map((landmark) => (
              <div key={landmark.name} className="bg-gray-50 rounded-lg p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">{landmark.name}</h3>
                <p className="text-gray-600 mb-2">{landmark.type}</p>
                <p className="text-blue-600 font-medium">{landmark.distance}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Properties on Town Center Drive */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Homes for Sale on Town Center Drive
          </h2>
          <p className="text-lg text-gray-700 text-center mb-8 max-w-3xl mx-auto">
            Discover homes for sale on Town Center Drive and in communities accessible from this major commercial corridor. 
            These properties offer convenient access to Downtown Summerlin and The Vistas communities.
          </p>
          <RealScoutOfficeListingsWrapper
            agentEncodedId="QWdlbnQtMjI1MDUw"
            sortOrder="PRICE_LOW"
            listingStatus="For Sale"
            propertyTypes=",SFR,MF,TC,LAL,MOBILE,OTHER"
            priceMin="400000"
            priceMax="2000000"
            maxListings={12}
            className="mt-6"
          />
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Find Your Home on Town Center Drive?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Dr. Jan Duffy specializes in Summerlin West communities accessible from Town Center Drive. 
            Get expert guidance on properties in this convenient location.
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
            name: 'Town Center Drive',
            description: 'Major commercial corridor connecting Downtown Summerlin to The Vistas communities',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Town Center Drive',
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
                value: '3.8 miles',
              },
              {
                '@type': 'PropertyValue',
                name: 'Speed Limit',
                value: '40 mph',
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
