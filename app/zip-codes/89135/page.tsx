import type { Metadata } from 'next';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const RealScoutOfficeListings = dynamic(
    () => import('../../../components/ui/RealScoutOfficeListings')
  );

export const metadata: Metadata = {
  title: 'Homes for Sale in 89135 | The Vistas Summerlin West Real Estate',
  description:
    'Find homes for sale in zip code 89135, The Vistas Summerlin West. Luxury subdivisions with top-rated schools and premium amenities. Expert guidance from Dr. Jan Duffy.',
  keywords: [
    'homes for sale 89135',
    '89135 real estate',
    'The Vistas zip code 89135',
    'Summerlin West 89135',
    'Las Vegas 89135 homes',
    'zip code 89135 real estate',
    'Summerlin West real estate',
    'Dr. Jan Duffy 89135',
    'Las Vegas zip code 89135',
    'Summerlin West homes for sale'
  ],
  alternates: {
    canonical: '/zip-codes/89135',
  },
  openGraph: {
    title: 'Homes for Sale in 89135 | The Vistas Summerlin West Real Estate',
    description:
      'Find homes for sale in zip code 89135, The Vistas Summerlin West. Luxury subdivisions with top-rated schools and premium amenities.',
    url: 'https://www.summerlinwestrealestate.com/zip-codes/89135',
    siteName: 'Summerlin West Real Estate',
    images: [
      {
        url: '/images/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Zip Code 89135 - The Vistas Summerlin West',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Homes for Sale in 89135 | The Vistas Summerlin West Real Estate',
    description:
      'Find homes for sale in zip code 89135, The Vistas Summerlin West. Luxury subdivisions with top-rated schools and premium amenities.',
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

const subdivisionsIn89135 = [
  { name: 'Paradiso', type: 'Luxury/Gated', priceRange: '$1.4M-$1.8M', slug: 'paradiso' },
  { name: 'Palmilla', type: 'Luxury/Gated', priceRange: '$1.2M-$1.6M', slug: 'palmilla' },
  { name: 'Estancia', type: 'Luxury/Gated', priceRange: '$1.1M-$1.5M', slug: 'estancia' },
  { name: 'Talaverde', type: 'Luxury/Gated', priceRange: '$1.0M-$1.4M', slug: 'talaverde' },
  { name: 'Casa Rosa', type: 'Luxury/Gated', priceRange: '$900K-$1.3M', slug: 'casa-rosa' },
  { name: 'San Marcos', type: 'Luxury/Gated', priceRange: '$850K-$1.2M', slug: 'san-marcos' },
  { name: 'Sonesta', type: 'Luxury/Gated', priceRange: '$800K-$1.1M', slug: 'sonesta' },
  { name: 'Barrington', type: 'Premium Non-Gated', priceRange: '$750K-$1.0M', slug: 'barrington' },
  { name: 'Monterossa', type: 'Premium Non-Gated', priceRange: '$700K-$950K', slug: 'monterossa' },
  { name: 'Kingwood', type: 'Premium Non-Gated', priceRange: '$650K-$900K', slug: 'kingwood' },
  { name: 'Ashton Park', type: 'Family', priceRange: '$600K-$850K', slug: 'ashton-park' },
  { name: 'Bella Vista', type: 'Family', priceRange: '$550K-$800K', slug: 'bella-vista' },
  { name: 'Hillstone', type: 'Family', priceRange: '$500K-$750K', slug: 'hillstone' },
  { name: 'Portofino', type: 'Family', priceRange: '$450K-$700K', slug: 'portofino' },
  { name: 'Encanto', type: 'Family', priceRange: '$500K-$750K', slug: 'encanto' },
  { name: 'Somerset', type: 'Family', priceRange: '$400K-$650K', slug: 'somerset' },
  { name: 'Summerfield', type: 'Family', priceRange: '$450K-$700K', slug: 'summerfield' },
  { name: 'Vista Verde', type: 'Family', priceRange: '$500K-$750K', slug: 'vista-verde' },
  { name: 'Talega', type: 'Family', priceRange: '$450K-$700K', slug: 'talega' },
  { name: 'Canterra', type: 'Additional', priceRange: '$500K-$750K', slug: 'canterra' },
  { name: 'Capri', type: 'Additional', priceRange: '$500K-$750K', slug: 'capri' },
  { name: 'Cara Vella', type: 'Additional', priceRange: '$500K-$750K', slug: 'cara-vella' },
  { name: 'Miraleste', type: 'Additional', priceRange: '$500K-$750K', slug: 'miraleste' },
  { name: 'Sage Hills', type: 'Additional', priceRange: '$500K-$750K', slug: 'sage-hills' },
  { name: 'Santalina', type: 'Additional', priceRange: '$500K-$750K', slug: 'santalina' },
  { name: 'Solano', type: 'Family', priceRange: '$500K-$750K', slug: 'solano' },
];

const schoolsIn89135 = [
  { name: 'Red Rock Elementary', address: '11501 Villa Hermosa Dr', type: 'Elementary' },
  { name: 'Sig Rogich Middle School', address: '9855 Villa Ridge Dr', type: 'Middle' },
  { name: 'Palo Verde High School', address: '333 S Pavilion Center Dr', type: 'High' },
];

export default function ZipCode89135Page() {
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
              89135
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-purple-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Homes for Sale in Zip Code 89135
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              The Vistas Summerlin West - Luxury Living at the Gateway to Red Rock Canyon
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto">
              <h2 className="text-2xl font-semibold mb-4">Zip Code 89135 Overview</h2>
              <p className="text-lg mb-2">Primary zip code for The Vistas communities</p>
              <p className="text-lg mb-2">Location: Summerlin West, Las Vegas, NV</p>
              <p className="text-lg">Subdivisions: 26+ luxury communities</p>
            </div>
          </div>
        </div>
      </section>

      {/* Market Statistics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Market Statistics for Zip Code 89135</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">$675K</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Median Home Price</h3>
              <p className="text-gray-600">+5.2% from last year</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">23</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Days on Market</h3>
              <p className="text-gray-600">-8 days from last year</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">156</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Active Listings</h3>
              <p className="text-gray-600">+12% from last month</p>
            </div>
            <div className="text-center">
              <div className="bg-orange-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">$312</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Price per Sq Ft</h3>
              <p className="text-gray-600">+3.2% from last month</p>
            </div>
          </div>
        </div>
      </section>

      {/* Subdivisions in 89135 */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Subdivisions in Zip Code 89135
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subdivisionsIn89135.map((subdivision) => (
              <div key={subdivision.slug} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-2">{subdivision.name}</h3>
                <p className="text-gray-600 mb-2">{subdivision.type}</p>
                <p className="text-blue-600 font-medium mb-4">{subdivision.priceRange}</p>
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

      {/* Schools in 89135 */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Schools Serving Zip Code 89135
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {schoolsIn89135.map((school) => (
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

      {/* Properties in 89135 */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Homes for Sale in Zip Code 89135
          </h2>
          <p className="text-lg text-gray-700 text-center mb-8 max-w-3xl mx-auto">
            Discover homes for sale in zip code 89135, home to The Vistas communities in Summerlin West. 
            These properties offer luxury living with access to top-rated schools and premium amenities.
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
          <h2 className="text-3xl font-bold mb-6">
            Ready to Find Your Home in Zip Code 89135?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Dr. Jan Duffy specializes in The Vistas communities in zip code 89135. 
            Get expert guidance on properties in this premier Summerlin West location.
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
            postalCode: '89135',
            addressLocality: 'Las Vegas',
            addressRegion: 'NV',
            addressCountry: 'US',
            description: 'Zip code 89135 covers The Vistas communities in Summerlin West, Las Vegas',
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
                value: '$675,000',
              },
              {
                '@type': 'PropertyValue',
                name: 'Days on Market',
                value: '23',
              },
              {
                '@type': 'PropertyValue',
                name: 'Active Listings',
                value: '156',
              },
            ],
          }),
        }}
      />
    </div>
  );
}
