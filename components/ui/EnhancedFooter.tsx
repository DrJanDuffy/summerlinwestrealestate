'use client';

import { motion } from 'framer-motion';
import { PhoneIcon, EnvelopeIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

interface EnhancedFooterProps {
  className?: string;
}

export default function EnhancedFooter({ className = "" }: EnhancedFooterProps) {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Dr. Jan Duffy', href: '/about' },
    { name: 'Communities', href: '/communities' },
    { name: 'Current Listings', href: '/current-listing' },
    { name: 'Market Reports', href: '/market-reports' },
    { name: 'Contact', href: '/contact' }
  ];

  const services = [
    { name: 'Buying a Home', href: '/services/buying' },
    { name: 'Selling a Home', href: '/services/selling' },
    { name: 'Market Analysis', href: '/services/market-analysis' },
    { name: 'Investment Properties', href: '/services/investment' },
    { name: 'Relocation Services', href: '/services/relocation' },
    { name: 'Luxury Homes', href: '/services/luxury' }
  ];

  const communities = [
    { name: 'The Vistas', href: '/communities/the-vistas' },
    { name: 'Red Rock Country Club', href: '/communities/red-rock-country-club' },
    { name: 'The Ridges', href: '/communities/the-ridges' },
    { name: 'Summerlin West', href: '/communities/summerlin-west' },
    { name: 'View All Communities', href: '/communities' }
  ];

  const contactInfo = [
    {
      icon: PhoneIcon,
      title: 'Phone',
      value: '(702) 555-0123',
      href: 'tel:+17025550123'
    },
    {
      icon: EnvelopeIcon,
      title: 'Email',
      value: 'jan@summerlinwestrealestate.com',
      href: 'mailto:jan@summerlinwestrealestate.com'
    },
    {
      icon: MapPinIcon,
      title: 'Office',
      value: '123 Summerlin Center Dr, Las Vegas, NV 89134',
      href: 'https://maps.google.com/?q=123+Summerlin+Center+Dr+Las+Vegas+NV+89134'
    },
    {
      icon: ClockIcon,
      title: 'Hours',
      value: 'Mon-Fri: 9AM-6PM, Sat: 10AM-4PM',
      href: null
    }
  ];

  return (
    <footer className={`bg-gray-900 text-white ${className}`}>
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-white mb-4">
                Dr. Jan Duffy
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                Your trusted REALTOR® in Summerlin West. With over 15 years of experience, 
                I help families find their dream homes in Las Vegas's most desirable communities.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="flex-shrink-0 mt-1">
                      <item.icon className="w-4 h-4 text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-300">{item.title}</p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="text-blue-400 hover:text-blue-300 transition-colors duration-200 text-sm"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-gray-300 text-sm">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold text-white mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    href={service.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Communities */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold text-white mb-6">Communities</h4>
            <ul className="space-y-3">
              {communities.map((community, index) => (
                <li key={index}>
                  <Link
                    href={community.href}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm"
                  >
                    {community.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 pt-8 border-t border-gray-800"
        >
          <div className="bg-gradient-to-r from-blue-900 via-blue-800 to-purple-900 rounded-2xl p-8 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/10 rounded-full blur-2xl"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Find Your Dream Home?
              </h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Let Dr. Jan Duffy guide you through the Summerlin West real estate market. 
                Get expert advice, personalized service, and results that exceed your expectations.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-white text-blue-900 font-semibold py-3 px-8 rounded-lg hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl"
                >
                  Get Free Consultation
                </Link>
                <Link
                  href="tel:+17025550123"
                  className="bg-transparent text-white font-semibold py-3 px-8 rounded-lg border-2 border-white hover:bg-white hover:text-blue-900 transition-all duration-200"
                >
                  Call (702) 555-0123
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Footer */}
      <div className="bg-gray-950 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © {currentYear} Dr. Jan Duffy, REALTOR®. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <Link href="/privacy" className="hover:text-blue-400 transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-blue-400 transition-colors duration-200">
                Terms of Service
              </Link>
              <Link href="/disclaimer" className="hover:text-blue-400 transition-colors duration-200">
                Disclaimer
              </Link>
            </div>
            
            <div className="text-sm text-gray-400">
              Licensed in Nevada • Equal Housing Opportunity
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}



