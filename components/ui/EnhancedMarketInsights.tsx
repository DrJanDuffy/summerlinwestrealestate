'use client';

import { motion } from 'framer-motion';
import { ChartBarIcon, HomeIcon, ArrowTrendingUpIcon, ClockIcon } from '@heroicons/react/24/outline';

interface MarketData {
  averagePrice: string;
  priceChange: string;
  daysOnMarket: string;
  inventoryCount: string;
  pricePerSqFt: string;
  yearOverYearChange: string;
}

interface EnhancedMarketInsightsProps {
  title?: string;
  subtitle?: string;
  marketData?: MarketData;
  className?: string;
}

const defaultMarketData: MarketData = {
  averagePrice: '$875,000',
  priceChange: '+3.2%',
  daysOnMarket: '28',
  inventoryCount: '45',
  pricePerSqFt: '$285',
  yearOverYearChange: '+8.5%'
};

export default function EnhancedMarketInsights({
  title = "Summerlin West Market Insights",
  subtitle = "Current market trends and data to help you make informed real estate decisions",
  marketData = defaultMarketData,
  className = "",
}: EnhancedMarketInsightsProps) {
  const insights = [
    {
      icon: HomeIcon,
      title: "Average Home Price",
      value: marketData.averagePrice,
      change: marketData.priceChange,
      trend: "up",
      description: "Median home price in Summerlin West"
    },
    {
      icon: ClockIcon,
      title: "Days on Market",
      value: `${marketData.daysOnMarket} days`,
      change: "-12%",
      trend: "down",
      description: "Average time to sell"
    },
    {
      icon: ChartBarIcon,
      title: "Active Listings",
      value: marketData.inventoryCount,
      change: "+5",
      trend: "up",
      description: "Homes currently for sale"
    },
    {
      icon: ArrowTrendingUpIcon,
      title: "Price per Sq Ft",
      value: marketData.pricePerSqFt,
      change: marketData.yearOverYearChange,
      trend: "up",
      description: "Year-over-year growth"
    }
  ];

  const marketTrends = [
    {
      title: "Luxury Market Growth",
      description: "High-end properties ($1M+) showing strong appreciation",
      percentage: "12%",
      trend: "up"
    },
    {
      title: "First-Time Buyers",
      description: "Increased activity in entry-level homes",
      percentage: "8%",
      trend: "up"
    },
    {
      title: "Investment Properties",
      description: "Growing interest in rental properties",
      percentage: "15%",
      trend: "up"
    },
    {
      title: "New Construction",
      description: "Limited inventory driving up prices",
      percentage: "6%",
      trend: "up"
    }
  ];

  return (
    <div className={`py-16 lg:py-24 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </motion.div>

        {/* Market Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {insights.map((insight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 relative overflow-hidden group"
            >
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-50 to-purple-50 rounded-full blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <insight.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className={`flex items-center text-sm font-medium ${
                    insight.trend === 'up' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    <span className="mr-1">{insight.change}</span>
                    {insight.trend === 'up' ? (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l9.2-9.2M17 17V7H7" />
                      </svg>
                    ) : (
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 7l-9.2 9.2M7 7v10h10" />
                      </svg>
                    )}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{insight.value}</h3>
                <h4 className="font-semibold text-gray-700 mb-1">{insight.title}</h4>
                <p className="text-sm text-gray-600">{insight.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Market Trends */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Current Market Trends
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {marketTrends.map((trend, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 relative overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-50 to-blue-50 rounded-full blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-semibold text-gray-900 text-lg">{trend.title}</h4>
                    <div className="flex items-center text-green-600 font-semibold">
                      <span className="mr-1">{trend.percentage}</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17l9.2-9.2M17 17V7H7" />
                      </svg>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{trend.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Expert Analysis */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="bg-gradient-to-r from-blue-900 via-blue-800 to-purple-900 rounded-2xl p-8 lg:p-12 text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/10 rounded-full blur-2xl"></div>
          
          <div className="relative z-10">
            <div className="text-center mb-8">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                Dr. Jan Duffy's Market Analysis
              </h3>
              <p className="text-blue-100 text-lg max-w-3xl mx-auto">
                "Summerlin West continues to be one of Las Vegas's most desirable areas. 
                With limited inventory and strong demand, we're seeing healthy price appreciation 
                across all property types."
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-200 mb-2">Strong</div>
                <div className="text-blue-100">Market Fundamentals</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-200 mb-2">Limited</div>
                <div className="text-blue-100">New Construction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-200 mb-2">High</div>
                <div className="text-blue-100">Quality of Life</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Get Your Personalized Market Report
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Dr. Jan Duffy provides detailed market analysis for your specific property 
              or area of interest. Get insights that help you make informed decisions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-8 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Request Market Report
              </a>
              <a
                href="tel:+17025550123"
                className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg border-2 border-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-200"
              >
                Call (702) 555-0123
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}



