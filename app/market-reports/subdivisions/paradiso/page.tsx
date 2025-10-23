import type { Metadata } from 'next';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const RealScoutOfficeListings = dynamic(
    () => import('../../../../components/ui/RealScoutOfficeListingsWrapper')
  );

export const metadata: Metadata = {
  title: 'Paradiso Market Report | January 2025 | Summerlin West Real Estate',
  description:
    'Get the latest market insights for Paradiso subdivision in Summerlin West. January 2025 market trends, sales data, and expert analysis from Dr. Jan Duffy.',
  keywords: [
    'Paradiso market report',
    'Paradiso subdivision market',
    'Summerlin West market trends',
    'Paradiso real estate market',
    'January 2025 market report',
    'Dr. Jan Duffy market analysis',
    'Paradiso home values',
    'Summerlin West market data',
    'Paradiso sales trends',
    'Las Vegas luxury real estate market'
  ],
  alternates: {
    canonical: '/market-reports/subdivisions/paradiso',
  },
  openGraph: {
    title: 'Paradiso Market Report | January 2025 | Summerlin West Real Estate',
    description:
      'Get the latest market insights for Paradiso subdivision in Summerlin West. January 2025 market trends, sales data, and expert analysis.',
    url: 'https://www.summerlinwestrealestate.com/market-reports/subdivisions/paradiso',
    siteName: 'Summerlin West Real Estate',
    images: [
      {
        url: '/images/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Paradiso Market Report - January 2025',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Paradiso Market Report | January 2025 | Summerlin West Real Estate',
    description:
      'Get the latest market insights for Paradiso subdivision in Summerlin West. January 2025 market trends, sales data, and expert analysis.',
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

const marketData = {
  subdivision: 'Paradiso',
  reportDate: 'January 2025',
  totalHomes: 45,
  activeListings: 3,
  soldLastMonth: 2,
  avgDaysOnMarket: 18,
  avgSalePrice: 1250000,
  pricePerSqFt: 385,
  priceChangeYoY: '+8.5%',
  inventoryChange: '-12%',
  marketTrend: 'Seller\'s Market',
  medianHomeSize: 3250,
  avgLotSize: '0.28 acres',
  hoaFee: '$185/month',
  yearBuilt: '2003-2005',
  builder: 'Pulte Homes'
};

const recentSales = [
  {
    address: '123 Paradise View Ave',
    salePrice: 1325000,
    saleDate: '2024-12-15',
    bedrooms: 4,
    bathrooms: 3.5,
    squareFeet: 3400,
    daysOnMarket: 12,
    pricePerSqFt: 390
  },
  {
    address: '456 Brent Lane',
    salePrice: 1180000,
    saleDate: '2024-12-08',
    bedrooms: 3,
    bathrooms: 2.5,
    squareFeet: 3100,
    daysOnMarket: 24,
    pricePerSqFt: 381
  }
];

const marketInsights = [
  {
    title: 'Strong Demand Continues',
    description: 'Paradiso continues to see strong buyer demand with properties selling quickly in the current market.',
    trend: 'positive'
  },
  {
    title: 'Price Appreciation',
    description: 'Home values in Paradiso have increased 8.5% year-over-year, outpacing the broader Summerlin West market.',
    trend: 'positive'
  },
  {
    title: 'Limited Inventory',
    description: 'With only 3 active listings, inventory remains tight, creating competitive conditions for buyers.',
    trend: 'neutral'
  }
];

export default function ParadisoMarketReportPage() {
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
              <Link href="/market-reports" className="text-blue-600 hover:text-blue-800">
                Market Reports
              </Link>
            </li>
            <li className="text-gray-500">/</li>
            <li>
              <Link href="/market-reports/subdivisions" className="text-blue-600 hover:text-blue-800">
                Subdivisions
              </Link>
            </li>
            <li className="text-gray-500">/</li>
            <li className="text-gray-900" aria-current="page">
              Paradiso
            </li>
          </ol>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 via-blue-800 to-purple-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Paradiso Market Report
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              January 2025 Market Analysis & Trends
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto">
              <h2 className="text-2xl font-semibold mb-4">Market Overview</h2>
              <p className="text-lg mb-2">Subdivision: {marketData.subdivision}</p>
              <p className="text-lg mb-2">Report Period: {marketData.reportDate}</p>
              <p className="text-lg">Market Trend: {marketData.marketTrend}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Market Metrics */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Key Market Metrics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-blue-50 rounded-lg p-6 text-center">
              <h3 className="text-2xl font-bold text-blue-600 mb-2">${marketData.avgSalePrice.toLocaleString()}</h3>
              <p className="text-gray-700 font-semibold">Average Sale Price</p>
              <p className="text-sm text-gray-600 mt-1">{marketData.priceChangeYoY} vs last year</p>
            </div>
            <div className="bg-green-50 rounded-lg p-6 text-center">
              <h3 className="text-2xl font-bold text-green-600 mb-2">{marketData.avgDaysOnMarket}</h3>
              <p className="text-gray-700 font-semibold">Days on Market</p>
              <p className="text-sm text-gray-600 mt-1">Average time to sell</p>
            </div>
            <div className="bg-purple-50 rounded-lg p-6 text-center">
              <h3 className="text-2xl font-bold text-purple-600 mb-2">{marketData.activeListings}</h3>
              <p className="text-gray-700 font-semibold">Active Listings</p>
              <p className="text-sm text-gray-600 mt-1">Currently for sale</p>
            </div>
            <div className="bg-orange-50 rounded-lg p-6 text-center">
              <h3 className="text-2xl font-bold text-orange-600 mb-2">${marketData.pricePerSqFt}</h3>
              <p className="text-gray-700 font-semibold">Price per Sq Ft</p>
              <p className="text-sm text-gray-600 mt-1">Average price per square foot</p>
            </div>
          </div>
        </div>
      </section>

      {/* Market Insights */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Market Insights & Analysis</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {marketInsights.map((insight, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{insight.title}</h3>
                <p className="text-gray-700">{insight.description}</p>
                <div className={`mt-4 inline-block px-3 py-1 rounded-full text-sm font-medium ${
                  insight.trend === 'positive' ? 'bg-green-100 text-green-800' :
                  insight.trend === 'negative' ? 'bg-red-100 text-red-800' :
                  'bg-gray-100 text-gray-800'
                }`}>
                  {insight.trend === 'positive' ? 'Positive Trend' :
                   insight.trend === 'negative' ? 'Negative Trend' :
                   'Neutral Trend'}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Sales */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">Recent Sales in Paradiso</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-lg shadow-md">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Address</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sale Price</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sale Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Beds/Baths</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Sq Ft</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Days on Market</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {recentSales.map((sale, index) => (
                  <tr key={index} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{sale.address}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">${sale.salePrice.toLocaleString()}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{new Date(sale.saleDate).toLocaleDateString()}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{sale.bedrooms}/{sale.bathrooms}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{sale.squareFeet.toLocaleString()}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{sale.daysOnMarket}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Expert Analysis */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-6">Expert Market Analysis</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Dr. Jan Duffy provides expert insights on the current Paradiso market conditions and what they mean for buyers and sellers.
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 max-w-4xl mx-auto">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mr-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold">Dr. Jan Duffy's Market Insight</h3>
            </div>
            <p className="text-lg leading-relaxed">
              "Paradiso continues to be one of the most sought-after subdivisions in Summerlin West. The combination of Pulte Homes' quality construction, 
              gated community security, and proximity to Red Rock Canyon creates exceptional value for luxury homebuyers. With only 3 active listings 
              and an average of 18 days on market, we're seeing a very competitive seller's market. The 8.5% year-over-year price appreciation 
              demonstrates strong demand and limited supply. For buyers, this means acting quickly when properties come to market. For sellers, 
              it's an excellent time to list with proper pricing and presentation."
            </p>
          </div>
        </div>
      </section>

      {/* Current Listings */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12">
            Current Homes for Sale in Paradiso
          </h2>
          <p className="text-lg text-gray-700 text-center mb-8 max-w-3xl mx-auto">
            Browse the latest homes for sale in Paradiso subdivision. These properties offer luxury living with mountain views and gated community access.
          </p>
          <RealScoutOfficeListings
            agentEncodedId="QWdlbnQtMjI1MDUw"
            sortOrder="PRICE_LOW"
            listingStatus="For Sale"
            propertyTypes=",SFR,MF,TC,LAL,MOBILE,OTHER"
            priceMin={800000}
            priceMax={2000000}
            className="mt-6"
          />
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Buy or Sell in Paradiso?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Dr. Jan Duffy specializes in Paradiso subdivision and can provide expert guidance on market conditions, 
            pricing strategies, and the buying/selling process.
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
            '@type': 'Report',
            name: 'Paradiso Market Report - January 2025',
            description: 'Comprehensive market analysis for Paradiso subdivision in Summerlin West',
            datePublished: '2025-01-01',
            author: {
              '@type': 'Person',
              name: 'Dr. Jan Duffy',
              jobTitle: 'REALTOR®',
            },
            publisher: {
              '@type': 'Organization',
              name: 'Summerlin West Real Estate',
            },
            about: {
              '@type': 'Place',
              name: 'Paradiso',
              containedInPlace: {
                '@type': 'Place',
                name: 'Summerlin West',
                containedInPlace: {
                  '@type': 'City',
                  name: 'Las Vegas',
                  addressRegion: 'NV',
                },
              },
            },
            additionalProperty: [
              {
                '@type': 'PropertyValue',
                name: 'Average Sale Price',
                value: `$${marketData.avgSalePrice.toLocaleString()}`,
              },
              {
                '@type': 'PropertyValue',
                name: 'Days on Market',
                value: marketData.avgDaysOnMarket.toString(),
              },
              {
                '@type': 'PropertyValue',
                name: 'Active Listings',
                value: marketData.activeListings.toString(),
              },
              {
                '@type': 'PropertyValue',
                name: 'Price per Square Foot',
                value: `$${marketData.pricePerSqFt}`,
              },
            ],
          }),
        }}
      />
    </div>
  );
}
