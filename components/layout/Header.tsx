'use client';
import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    href: "/properties",
    label: "Properties",
    icon: (
      <svg
        width="20"
        height="20"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M3 9.75L12 4l9 5.75M4.5 10.75v7.5A1.75 1.75 0 006.25 20h11.5A1.75 1.75 0 0020 18.25v-7.5" />
      </svg>
    ),
  },
  {
    href: "/communities",
    label: "Communities",
    icon: (
      <svg
        width="20"
        height="20"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    ),
  },
  {
    href: "/market-report",
    label: "Market Report",
    icon: (
      <svg
        width="20"
        height="20"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M9 17V9m3 8V7m3 10v-4" />
      </svg>
    ),
  },
  {
    href: "/about",
    label: "About",
    icon: (
      <svg
        width="20"
        height="20"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 16v-4m0-4h.01" />
      </svg>
    ),
  },
  {
    href: "/contact",
    label: "Contact",
    icon: (
      <svg
        width="20"
        height="20"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        viewBox="0 0 24 24"
      >
        <path d="M21 10.5V6a2 2 0 00-2-2H5a2 2 0 00-2 2v4.5M21 10.5l-9 6.5-9-6.5M21 10.5V18a2 2 0 01-2 2H5a2 2 0 01-2-2v-7.5" />
      </svg>
    ),
  },
];

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

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
          {/* Desktop menu */}
          <nav
            className="hidden md:flex space-x-4"
            role="navigation"
            aria-label="Main menu"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-2 text-gray-700 hover:text-primary-600 transition-colors px-2 py-1 rounded ${
                  pathname === link.href
                    ? "bg-primary-100 text-primary-700 font-semibold"
                    : ""
                }`}
              >
                {link.icon}
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="md:hidden">
            {/* Mobile menu toggle button */}
            <button
              className="text-gray-700"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileMenuOpen((open) => !open)}
            >
              {mobileMenuOpen ? (
                // Close icon
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                // Hamburger icon
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
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
            role="navigation"
            aria-label="Main menu"
          >
            <ul className="flex flex-col items-center py-4 space-y-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`flex items-center gap-2 text-gray-700 text-lg px-3 py-2 rounded ${
                      pathname === link.href
                        ? "bg-primary-100 text-primary-700 font-semibold"
                        : ""
                    }`}
                    onClick={handleLinkClick}
                  >
                    {link.icon}
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
