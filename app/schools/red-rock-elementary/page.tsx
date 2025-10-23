import type { Metadata } from 'next';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const RealScoutOfficeListingsWrapper = dynamic(
    () => import('../../../components/ui/RealScoutOfficeListingsWrapper')
  );

export const metadata: Metadata = {
  title: 'Homes for Sale Near Red Rock Elementary School | Summerlin West Real Estate',
  description:
    'Find homes for sale near Red Rock Elementary School in Summerlin West. Top-rated elementary school serving The Vistas communities. Expert guidance from Dr. Jan Duffy.',
  keywords: [
    'Red Rock Elementary School',
    'homes near Red Rock Elementary',
    'Summerlin West elementary school',
    'The Vistas school district',
    'Las Vegas elementary schools',
    'homes zoned to Red Rock Elementary',
    'Summerlin West real estate',
    'Dr. Jan Duffy school districts',
    'Las Vegas school zones',
    'Summerlin West homes for sale'
  ],
  alternates: {
    canonical: '/schools/red-rock-elementary',
  },
  openGraph: {
    title: 'Homes for Sale Near Red Rock Elementary School | Summerlin West Real Estate',
    description:
      'Find homes for sale near Red Rock Elementary School in Summerlin West. Top-rated elementary school serving The Vistas communities.',
    url: 'https://www.summerlinwestrealestate.com/schools/red-rock-elementary',
    siteName: 'Summerlin West Real Estate',
    images: [
      {
        url: '/images/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Red Rock Elementary School - Summerlin West',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Homes for Sale Near Red Rock Elementary School | Summerlin West Real Estate',
    description:
      'Find homes for sale near Red Rock Elementary School in Summerlin West. Top-rated elementary school serving The Vistas communities.',
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

const subdivisionsZonedToRedRock = [
  { name: 'Paradiso', distance: '0.8 mi', slug: 'paradiso' },
  { name: 'Palmilla', distance: '0.9 mi', slug: 'palmilla' },
  { name: 'Estancia', distance: '1.0 mi', slug: 'estancia' },
  { name: 'Talaverde', distance: '1.1 mi', slug: 'talaverde' },
  { name: 'Casa Rosa', distance: '1.2 mi', slug: 'casa-rosa' },
  { name: 'San Marcos', distance: '1.3 mi', slug: 'san-marcos' },
  { name: 'Sonesta', distance: '1.4 mi', slug: 'sonesta' },
  { name: 'Barrington', distance: '1.5 mi', slug: 'barrington' },
  { name: 'Monterossa', distance: '1.6 mi', slug: 'monterossa' },
  { name: 'Kingwood', distance: '1.7 mi', slug: 'kingwood' },
  { name: 'Ashton Park', distance: '1.8 mi', slug: 'ashton-park' },
  { name: 'Bella Vista', distance: '1.9 mi', slug: 'bella-vista' },
  { name: 'Hillstone', distance: '2.0 mi', slug: 'hillstone' },
  { name: 'Portofino', distance: '2.1 mi', slug: 'portofino' },
  { name: 'Encanto', distance: '2.2 mi', slug: 'encanto' },
  { name: 'Somerset', distance: '2.3 mi', slug: 'somerset' },
  { name: 'Summerfield', distance: '2.4 mi', slug: 'summerfield' },
  { name: 'Vista Verde', distance: '2.5 mi', slug: 'vista-verde' },
  { name: 'Talega', distance: '2.6 mi', slug: 'talega' },
  { name: 'Canterra', distance: '2.7 mi', slug: 'canterra' },
  { name: 'Capri', distance: '2.8 mi', slug: 'capri' },
  { name: 'Cara Vella', distance: '2.9 mi', slug: 'cara-vella' },
  { name: 'Miraleste', distance: '3.0 mi', slug: 'miraleste' },
  { name: 'Sage Hills', distance: '3.1 mi', slug: 'sage-hills' },
  { name: 'Santalina', distance: '3.2 mi', slug: 'santalina' },
  { name: 'Solano', distance: '3.3 mi', slug: 'solano' },
];

export default function RedRockElementaryPage() {
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
              <Link href="/schools" className="text-blue-600 hover:text-blue-800">
                Schools
              </Link>
            </li>
            <li className="text-gray-500">/</li>
            <li className="text-gray-900" aria-current="page">
              Red Rock Elementary
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-purple-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Homes for Sale Near Red Rock Elementary School
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Top-rated elementary school serving The Vistas communities in Summerlin West
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto">
              <h2 className="text-2xl font-semibold mb-4">Red Rock Elementary School</h2>
              <p className="text-lg mb-2">11501 Villa Hermosa Dr, Las Vegas, NV 89135</p>
              <p className="text-lg mb-2">Phone: (702) 799-4440</p>
              <p className="text-lg">Grades: K-5</p>
            </div>
          </div>
        </div>
      </section>

      {/* School Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">About Red Rock Elementary School</h2>
              <p className="text-lg text-gray-700 mb-6">
                Red Rock Elementary School is a highly-rated public elementary school serving students in grades K-5. 
                Located in the heart of Summerlin West, this school provides excellent education for children living 
                in The Vistas and surrounding communities.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="text-green-600 text-xl mr-3">✓</span>
                  <span className="text-gray-700">Highly rated by parents and students</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-600 text-xl mr-3">✓</span>
                  <span className="text-gray-700">Small class sizes for personalized attention</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-600 text-xl mr-3">✓</span>
                  <span className="text-gray-700">Strong academic programs and extracurricular activities</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-600 text-xl mr-3">✓</span>
                  <span className="text-gray-700">Convenient location in Summerlin West</span>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6">School Statistics</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-700">Student-Teacher Ratio:</span>
                  <span className="font-semibold">18:1</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Total Enrollment:</span>
                  <span className="font-semibold">~650 students</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">School Type:</span>
                  <span className="font-semibold">Public Elementary</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">District:</span>
                  <span className="font-semibold">Clark County School District</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">School Rating:</span>
                  <span className="font-semibold text-green-600">A+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subdivisions Zoned to Red Rock Elementary */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Subdivisions Zoned to Red Rock Elementary School
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subdivisionsZonedToRedRock.map((subdivision) => (
              <div key={subdivision.slug} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold mb-2">{subdivision.name}</h3>
                <p className="text-gray-600 mb-4">Distance: {subdivision.distance}</p>
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

      {/* Properties Near Red Rock Elementary */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Homes for Sale Near Red Rock Elementary School
          </h2>
          <p className="text-lg text-gray-700 text-center mb-8 max-w-3xl mx-auto">
            Discover homes for sale in subdivisions zoned to Red Rock Elementary School. 
            These properties offer excellent school access and are located in some of Summerlin West's 
            most desirable communities.
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
            Ready to Find Your Home Near Red Rock Elementary?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Dr. Jan Duffy specializes in helping families find homes in excellent school districts. 
            Get expert guidance on properties zoned to Red Rock Elementary School.
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
            '@type': 'School',
            name: 'Red Rock Elementary School',
            description: 'Top-rated elementary school serving The Vistas communities in Summerlin West',
            address: {
              '@type': 'PostalAddress',
              streetAddress: '11501 Villa Hermosa Dr',
              addressLocality: 'Las Vegas',
              addressRegion: 'NV',
              postalCode: '89135',
              addressCountry: 'US',
            },
            telephone: '+1-702-799-4440',
            url: 'https://www.summerlinwestrealestate.com/schools/red-rock-elementary',
            geo: {
              '@type': 'GeoCoordinates',
              latitude: 36.1865,
              longitude: -115.3432,
            },
            hasMap: 'https://maps.google.com/?q=11501+Villa+Hermosa+Dr,+Las+Vegas,+NV+89135',
            sameAs: [
              'https://www.ccsd.net/schools/red-rock-elementary',
            ],
            schoolType: 'Public Elementary School',
            grades: 'K-5',
            studentBody: {
              '@type': 'QuantitativeValue',
              value: 650,
              unitText: 'students',
            },
            studentTeacherRatio: '18:1',
          }),
        }}
      />
    </div>
  );
}
