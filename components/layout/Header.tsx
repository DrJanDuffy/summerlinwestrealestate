import React, { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = () => setMobileMenuOpen(false);

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="bg-white shadow-sm sticky top-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold text-primary-600"
            >
              Summerlin West Real Estate
            </motion.div>
          </Link>
          
          <nav className="hidden md:flex space-x-8">
            <Link href="/properties" className="text-gray-700 hover:text-primary-600 transition-colors">
              Properties
            </Link>
            <Link href="/communities" className="text-gray-700 hover:text-primary-600 transition-colors">
              Communities
            </Link>
            <Link href="/market-report" className="text-gray-700 hover:text-primary-600 transition-colors">
              Market Report
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-primary-600 transition-colors">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-primary-600 transition-colors">
              Contact
            </Link>
          </nav>
          
          <div className="md:hidden">
            {/* Mobile menu toggle button */}
            <button
              className="text-gray-700"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setMobileMenuOpen((open) => !open)}
            >
              {mobileMenuOpen ? (
                // Close icon
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Hamburger icon
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed top-16 left-0 w-full bg-white shadow-lg z-50"
          >
            <ul className="flex flex-col items-center py-4 space-y-4">
              <li><Link href="/properties" className="text-gray-700 text-lg" onClick={handleLinkClick}>Properties</Link></li>
              <li><Link href="/communities" className="text-gray-700 text-lg" onClick={handleLinkClick}>Communities</Link></li>
              <li><Link href="/market-report" className="text-gray-700 text-lg" onClick={handleLinkClick}>Market Report</Link></li>
              <li><Link href="/about" className="text-gray-700 text-lg" onClick={handleLinkClick}>About</Link></li>
              <li><Link href="/contact" className="text-gray-700 text-lg" onClick={handleLinkClick}>Contact</Link></li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header; 