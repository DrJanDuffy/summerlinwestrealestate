'use client';

import { motion } from 'framer-motion';
import { MagnifyingGlassIcon, HomeIcon, MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

interface EnhancedPropertySearchPlaceholderProps {
  title?: string;
  subtitle?: string;
  showContactForm?: boolean;
  className?: string;
}

export default function EnhancedPropertySearchPlaceholder({
  title = "Find Your Dream Home",
  subtitle = "Discover the perfect property in Summerlin West with Dr. Jan Duffy's expert guidance",
  showContactForm = true,
  className = "",
}: EnhancedPropertySearchPlaceholderProps) {
  const searchFeatures = [
    {
      icon: MagnifyingGlassIcon,
      title: "Advanced Search",
      description: "Filter by price, bedrooms, bathrooms, and more"
    },
    {
      icon: HomeIcon,
      title: "Property Types",
      description: "Single-family homes, condos, townhomes, and luxury estates"
    },
    {
      icon: MapPinIcon,
      title: "Location Insights",
      description: "Detailed neighborhood information and local amenities"
    },
    {
      icon: CurrencyDollarIcon,
      title: "Market Analysis",
      description: "Real-time pricing and market trend data"
    }
  ];

  const quickActions = [
    {
      title: "Schedule a Showing",
      description: "Tour properties with Dr. Jan Duffy",
      href: "/contact",
      color: "from-blue-600 to-blue-700"
    },
    {
      title: "Get Market Analysis",
      description: "Free home valuation report",
      href: "/contact",
      color: "from-purple-600 to-purple-700"
    },
    {
      title: "View Communities",
      description: "Explore Summerlin West neighborhoods",
      href: "/communities",
      color: "from-green-600 to-green-700"
    },
    {
      title: "Investment Opportunities",
      description: "Discover real estate investments",
      href: "/contact",
      color: "from-orange-600 to-orange-700"
    }
  ];

  return (
    <div className={`bg-white rounded-2xl shadow-2xl overflow-hidden ${className}`}>
      {/* Header Section */}
      <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-purple-900 p-8 lg:p-12 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/10 rounded-full blur-2xl"></div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative z-10 text-center"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">{title}</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <MagnifyingGlassIcon className="w-8 h-8 text-blue-200" />
              <span className="text-lg font-semibold">Property Search Coming Soon</span>
            </div>
            <p className="text-blue-100 text-sm">
              We're building an advanced property search experience. In the meantime, 
              let Dr. Jan Duffy help you find your perfect home.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Search Features */}
      <div className="p-8 lg:p-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            What You'll Get When Search Launches
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {searchFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors duration-200"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{feature.title}</h4>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Get Started Today
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {quickActions.map((action, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
              >
                <Link
                  href={action.href}
                  className={`block bg-gradient-to-r ${action.color} text-white p-6 rounded-lg hover:shadow-lg transition-all duration-200 group`}
                >
                  <h4 className="font-semibold text-lg mb-2 group-hover:scale-105 transition-transform duration-200">
                    {action.title}
                  </h4>
                  <p className="text-white/90 text-sm">{action.description}</p>
                  <div className="mt-4 flex items-center text-white/80 text-sm">
                    <span>Get Started</span>
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact CTA */}
        {showContactForm && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-lg p-8 text-center"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Find Your Perfect Home?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Dr. Jan Duffy has helped hundreds of families find their dream homes in Summerlin West. 
              Let her expertise guide you to the perfect property.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-8 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Contact Dr. Jan Duffy
              </Link>
              <Link
                href="tel:+17025550123"
                className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg border-2 border-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-200"
              >
                Call (702) 555-0123
              </Link>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}