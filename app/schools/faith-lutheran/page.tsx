import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Homes for Sale Near Faith Lutheran School | Summerlin West Real Estate',
  description:
    'Find homes for sale near Faith Lutheran School in Summerlin West. Private Christian school serving The Vistas communities. Expert guidance from Dr. Jan Duffy.',
  keywords: [
    'Faith Lutheran School',
    'homes near Faith Lutheran',
    'Summerlin West private school',
    'The Vistas school district',
    'Las Vegas private schools',
    'homes near Faith Lutheran School',
    'Summerlin West real estate',
    'Dr. Jan Duffy school districts',
    'Las Vegas school zones',
    'Summerlin West homes for sale',
  ],
  alternates: {
    canonical: '/schools/faith-lutheran',
  },
  openGraph: {
    title: 'Homes for Sale Near Faith Lutheran School | Summerlin West Real Estate',
    description:
      'Find homes for sale near Faith Lutheran School in Summerlin West. Private Christian school serving The Vistas communities.',
    url: 'https://www.summerlinwestrealestate.com/schools/faith-lutheran',
    siteName: 'Summerlin West Real Estate',
    images: [
      {
        url: '/images/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Faith Lutheran School - Summerlin West',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Homes for Sale Near Faith Lutheran School | Summerlin West Real Estate',
    description:
      'Find homes for sale near Faith Lutheran School in Summerlin West. Private Christian school serving The Vistas communities.',
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

const subdivisionsNearFaithLutheran = [
  { name: 'Paradiso', distance: '1.5 mi', slug: 'paradiso' },
  { name: 'Palmilla', distance: '1.4 mi', slug: 'palmilla' },
  { name: 'Estancia', distance: '1.3 mi', slug: 'estancia' },
  { name: 'Talaverde', distance: '1.2 mi', slug: 'talaverde' },
  { name: 'Casa Rosa', distance: '1.1 mi', slug: 'casa-rosa' },
  { name: 'San Marcos', distance: '1.0 mi', slug: 'san-marcos' },
  { name: 'Sonesta', distance: '0.9 mi', slug: 'sonesta' },
  { name: 'Barrington', distance: '0.8 mi', slug: 'barrington' },
  { name: 'Monterossa', distance: '0.7 mi', slug: 'monterossa' },
  { name: 'Kingwood', distance: '0.6 mi', slug: 'kingwood' },
  { name: 'Ashton Park', distance: '0.5 mi', slug: 'ashton-park' },
  { name: 'Bella Vista', distance: '0.4 mi', slug: 'bella-vista' },
  { name: 'Hillstone', distance: '0.3 mi', slug: 'hillstone' },
  { name: 'Portofino', distance: '0.2 mi', slug: 'portofino' },
  { name: 'Encanto', distance: '0.1 mi', slug: 'encanto' },
  { name: 'Somerset', distance: '0.0 mi', slug: 'somerset' },
  { name: 'Summerfield', distance: '0.1 mi', slug: 'summerfield' },
  { name: 'Vista Verde', distance: '0.2 mi', slug: 'vista-verde' },
  { name: 'Talega', distance: '0.3 mi', slug: 'talega' },
  { name: 'Canterra', distance: '0.4 mi', slug: 'canterra' },
  { name: 'Capri', distance: '0.5 mi', slug: 'capri' },
  { name: 'Cara Vella', distance: '0.6 mi', slug: 'cara-vella' },
  { name: 'Miraleste', distance: '0.7 mi', slug: 'miraleste' },
  { name: 'Sage Hills', distance: '0.8 mi', slug: 'sage-hills' },
  { name: 'Santalina', distance: '0.9 mi', slug: 'santalina' },
  { name: 'Solano', distance: '1.0 mi', slug: 'solano' },
];

export default function FaithLutheranPage() {
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
              Faith Lutheran School
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-purple-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Homes for Sale Near Faith Lutheran School
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Private Christian school serving The Vistas communities in Summerlin West
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto">
              <h2 className="text-2xl font-semibold mb-4">Faith Lutheran School</h2>
              <p className="text-lg mb-2">2015 S Hualapai Way, Las Vegas, NV 89117</p>
              <p className="text-lg mb-2">Phone: (702) 804-4400</p>
              <p className="text-lg">Grades: Pre-K-12</p>
            </div>
          </div>
        </div>
      </section>

      {/* School Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">About Faith Lutheran School</h2>
              <p className="text-lg text-gray-700 mb-6">
                Faith Lutheran School is a private Christian school serving students from Pre-K
                through 12th grade. Located in Summerlin West, this school provides excellent
                education for children living in The Vistas and surrounding communities.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="text-green-600 text-xl mr-3">✓</span>
                  <span className="text-gray-700">
                    Private Christian education with small class sizes
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-600 text-xl mr-3">✓</span>
                  <span className="text-gray-700">
                    Strong academic programs and college preparation
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-600 text-xl mr-3">✓</span>
                  <span className="text-gray-700">
                    Comprehensive athletics and extracurricular activities
                  </span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-600 text-xl mr-3">✓</span>
                  <span className="text-gray-700">
                    Values-based education in a supportive environment
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg p-8">
              <h3 className="text-2xl font-bold mb-6">School Statistics</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-700">Student-Teacher Ratio:</span>
                  <span className="font-semibold">12:1</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Total Enrollment:</span>
                  <span className="font-semibold">~800 students</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">School Type:</span>
                  <span className="font-semibold">Private Christian School</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Grades:</span>
                  <span className="font-semibold">Pre-K through 12th</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">School Rating:</span>
                  <span className="font-semibold text-green-600">A+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">College Acceptance:</span>
                  <span className="font-semibold text-green-600">100%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subdivisions Near Faith Lutheran */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Subdivisions Near Faith Lutheran School
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subdivisionsNearFaithLutheran.map((subdivision) => (
              <div
                key={subdivision.slug}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
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

      {/* Properties Near Faith Lutheran */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Homes for Sale Near Faith Lutheran School
          </h2>
          <p className="text-lg text-gray-700 text-center mb-8 max-w-3xl mx-auto">
            Discover homes for sale in subdivisions near Faith Lutheran School. These properties
            offer convenient access to this excellent private school and are located in some of
            Summerlin West's most desirable communities.
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
          <h2 className="text-3xl font-bold mb-6">
            Ready to Find Your Home Near Faith Lutheran School?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Dr. Jan Duffy specializes in helping families find homes near excellent schools. Get
            expert guidance on properties near Faith Lutheran School.
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
            name: 'Faith Lutheran School',
            description:
              'Private Christian school serving The Vistas communities in Summerlin West',
            address: {
              '@type': 'PostalAddress',
              streetAddress: '2015 S Hualapai Way',
              addressLocality: 'Las Vegas',
              addressRegion: 'NV',
              postalCode: '89117',
              addressCountry: 'US',
            },
            telephone: '+1-702-804-4400',
            url: 'https://www.summerlinwestrealestate.com/schools/faith-lutheran',
            geo: {
              '@type': 'GeoCoordinates',
              latitude: 36.1865,
              longitude: -115.3432,
            },
            hasMap: 'https://maps.google.com/?q=2015+S+Hualapai+Way,+Las+Vegas,+NV+89117',
            sameAs: ['https://www.faithlutheranlv.org'],
            schoolType: 'Private Christian School',
            grades: 'Pre-K-12',
            studentBody: {
              '@type': 'QuantitativeValue',
              value: 800,
              unitText: 'students',
            },
            studentTeacherRatio: '12:1',
          }),
        }}
      />
    </div>
  );
}
