import type { Metadata } from 'next';
import MarketInsightsFeed from '../../components/ui/MarketInsightsFeed';
import RealScoutMarketInsights from '../../components/ui/RealScoutMarketInsights';

export const metadata: Metadata = {
  title: 'Market Insights & Real Estate News | Summerlin West Real Estate',
  description:
    'Stay informed with the latest market insights, real estate news, and trends affecting Summerlin West. Expert analysis from Dr. Jan Duffy and Simplifying the Market.',
  keywords: [
    'market insights',
    'real estate news',
    'Summerlin West market trends',
    'housing market analysis',
    'real estate data',
    'Dr. Jan Duffy market insights',
    'Las Vegas real estate news',
    'luxury real estate trends',
    'Summerlin West market data',
    'real estate market analysis',
  ],
  alternates: {
    canonical: '/market-insights',
  },
  openGraph: {
    title: 'Market Insights & Real Estate News | Summerlin West Real Estate',
    description:
      'Stay informed with the latest market insights, real estate news, and trends affecting Summerlin West.',
    url: 'https://www.summerlinwestrealestate.com/market-insights',
    siteName: 'Summerlin West Real Estate',
    images: [
      {
        url: '/images/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Market Insights & Real Estate News',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Market Insights & Real Estate News | Summerlin West Real Estate',
    description:
      'Stay informed with the latest market insights, real estate news, and trends affecting Summerlin West.',
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

export default function MarketInsightsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Market Insights & Real Estate News
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Stay ahead of the market with expert analysis, real-time data, and the latest trends
              affecting Summerlin West real estate
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#market-data"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                View Market Data
              </a>
              <a
                href="#latest-insights"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Read Latest Insights
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* RealScout Market Data */}
      <section id="market-data" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RealScoutMarketInsights
            title="Live Summerlin West Market Data"
            subtitle="Real-time MLS data, price trends, and market analytics"
            variant="full"
            showCharts={true}
            showTrends={true}
            showComparisons={true}
          />
        </div>
      </section>

      {/* Latest Market Insights */}
      <section id="latest-insights" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <MarketInsightsFeed
            maxArticles={8}
            showImages={true}
            title="Latest Market Insights from Simplifying the Market"
          />
        </div>
      </section>

      {/* Featured Insights by Category */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Insights by Category
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Selling Tips */}
            <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-blue-600">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Selling Tips</h3>
              <MarketInsightsFeed
                maxArticles={2}
                showImages={false}
                category="Selling Tips"
                title=""
              />
            </div>

            {/* Market Analysis */}
            <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-green-600">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Market Analysis</h3>
              <MarketInsightsFeed
                maxArticles={2}
                showImages={false}
                category="Market Analysis"
                title=""
              />
            </div>

            {/* Affordability */}
            <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-purple-600">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Affordability</h3>
              <MarketInsightsFeed
                maxArticles={2}
                showImages={false}
                category="Affordability"
                title=""
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Make Your Move?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get personalized market analysis and expert guidance from Dr. Jan Duffy. Whether you're
            buying or selling in Summerlin West, we're here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get Free Consultation
            </a>
            <a
              href="/properties"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              View Properties
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
