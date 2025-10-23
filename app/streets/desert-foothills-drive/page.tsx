import type { Metadata } from 'next';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const RealScoutOfficeListings = dynamic(
    () => import('../../../components/ui/RealScoutOfficeListings')
  );

export const metadata: Metadata = {
  title: 'Homes for Sale on Desert Foothills Drive | Summerlin West Real Estate',
  description:
    'Find homes for sale on Desert Foothills Drive in Summerlin West. Major arterial road providing access to The Vistas communities and Red Rock Canyon. Expert guidance from Dr. Jan Duffy.',
  keywords: [
    'homes for sale Desert Foothills Drive',
    'Desert Foothills Drive real estate',
    'Summerlin West Desert Foothills Drive',
    'Las Vegas Desert Foothills Drive homes',
    'Desert Foothills Drive properties',
    'Summerlin West real estate',
    'Dr. Jan Duffy Desert Foothills Drive',
    'Las Vegas Desert Foothills Drive',
    'Summerlin West homes for sale',
    'Desert Foothills Drive subdivisions'
  ],
  alternates: {
    canonical: '/streets/desert-foothills-drive',
  },
  openGraph: {
    title: 'Homes for Sale on Desert Foothills Drive | Summerlin West Real Estate',
    description:
      'Find homes for sale on Desert Foothills Drive in Summerlin West. Major arterial road providing access to The Vistas communities and Red Rock Canyon.',
    url: 'https://www.summerlinwestrealestate.com/streets/desert-foothills-drive',
    siteName: 'Summerlin West Real Estate',
    images: [
      {
        url: '/images/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Desert Foothills Drive - Summerlin West',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Homes for Sale on Desert Foothills Drive | Summerlin West Real Estate',
    description:
      'Find homes for sale on Desert Foothills Drive in Summerlin West. Major arterial road providing access to The Vistas communities and Red Rock Canyon.',
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

const subdivisionsOnDesertFoothills = [
  { name: 'Paradiso', access: 'Main gate entrance', distance: '0.0 mi', slug: 'paradiso' },
  { name: 'Palmilla', access: 'Main gate entrance', distance: '0.1 mi', slug: 'palmilla' },
  { name: 'Estancia', access: 'Main gate entrance', distance: '0.2 mi', slug: 'estancia' },
  { name: 'Talaverde', access: 'Main gate entrance', distance: '0.3 mi', slug: 'talaverde' },
  { name: 'Casa Rosa', access: 'Main gate entrance', distance: '0.4 mi', slug: 'casa-rosa' },
  { name: 'San Marcos', access: 'Main gate entrance', distance: '0.5 mi', slug: 'san-marcos' },
  { name: 'Sonesta', access: 'Main gate entrance', distance: '0.6 mi', slug: 'sonesta' },
];

const landmarksOnDesertFoothills = [
  { name: 'Red Rock Canyon', distance: '3.8 mi', type: 'National Conservation Area' },
  { name: 'Downtown Summerlin', distance: '2.1 mi', type: 'Shopping & Entertainment' },
  { name: 'Vistas Park', distance: '0.8 mi', type: 'Community Park' },
  { name: 'Vistas Community Center', distance: '0.9 mi', type: 'Community Center' },
];

export default function DesertFoothillsDrivePage() {
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
              Desert Foothills Drive
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-purple-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Homes for Sale on Desert Foothills Drive
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Major arterial road providing access to The Vistas communities and Red Rock Canyon
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto">
              <h2 className="text-2xl font-semibold mb-4">Desert Foothills Drive Overview</h2>
              <p className="text-lg mb-2">Major arterial road through Summerlin West</p>
              <p className="text-lg mb-2">Location: Summerlin West, Las Vegas, NV</p>
              <p className="text-lg">Connects to Red Rock Canyon and Downtown Summerlin</p>
            </div>
          </div>
        </div>
      </section>

      {/* Street Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">About Desert Foothills Drive</h2>
              <p className="text-lg text-gray-700 mb-6">
                Desert Foothills Drive is a major arterial road running through Summerlin West, providing 
                direct access to The Vistas communities and serving as a gateway to Red Rock Canyon. 
                This well-maintained road offers convenient access to luxury subdivisions and natural attractions.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="text-green-600 text-xl mr-3">✓</span>
                  <span className="text-gray-700">Direct access to Red Rock Canyon National Conservation Area</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-600 text-xl mr-3">✓</span>
                  <span className="text-gray-700">Main entrance for The Vistas guard-gated communities</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-600 text-xl mr-3">✓</span>
                  <span className="text-gray-700">Convenient connection to Downtown Summerlin</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-600 text-xl mr-3">✓</span>
                  <span className="text-gray-700">Scenic mountain views and desert landscape</span>
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
                  <span className="text-gray-700">Bike Lanes:</span>
                  <span className="font-semibold">Designated bike lanes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subdivisions Accessible from Desert Foothills Drive */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Subdivisions Accessible from Desert Foothills Drive
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subdivisionsOnDesertFoothills.map((subdivision) => (
              <div key={subdivision.slug} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-2">{subdivision.name}</h3>
                <p className="text-gray-600 mb-2">{subdivision.access}</p>
                <p className="text-blue-600 font-medium mb-4">Distance: {subdivision.distance}</p>
                <Link
                  href={`/service-area/${subdivision.slug}`}
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  View Homes in {subdivision.name} →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Landmarks on Desert Foothills Drive */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Landmarks Accessible from Desert Foothills Drive
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {landmarksOnDesertFoothills.map((landmark) => (
              <div key={landmark.name} className="bg-gray-50 rounded-lg p-6 text-center">
                <h3 className="text-xl font-semibold mb-2">{landmark.name}</h3>
                <p className="text-gray-600 mb-2">{landmark.type}</p>
                <p className="text-blue-600 font-medium">{landmark.distance}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Properties on Desert Foothills Drive */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Homes for Sale on Desert Foothills Drive
          </h2>
          <p className="text-lg text-gray-700 text-center mb-8 max-w-3xl mx-auto">
            Discover homes for sale on Desert Foothills Drive and in subdivisions accessible from this major arterial road. 
            These properties offer convenient access to The Vistas communities and Red Rock Canyon.
          </p>
          <RealScoutOfficeListings
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
            Ready to Find Your Home on Desert Foothills Drive?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Dr. Jan Duffy specializes in The Vistas communities accessible from Desert Foothills Drive. 
            Get expert guidance on properties in this prime Summerlin West location.
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
            name: 'Desert Foothills Drive',
            description: 'Major arterial road providing access to The Vistas communities and Red Rock Canyon',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Desert Foothills Drive',
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
