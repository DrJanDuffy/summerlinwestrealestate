"use client";
import React from "react";
import Link from "next/link";
import styles from "./Header.module.css";

const navLinks = [
  { href: "/current-listing", label: "Vistas Listing" },
  { href: "/communities", label: "Communities" },
  { href: "/market", label: "Market" },
  { href: "/hidden-home-equity-tax", label: "Hidden Home Equity Tax" },
  { href: "/compare", label: "Compare" },
  { href: "https://drjanduffy.realscout.com/homesearch/map?geo_type=neighborhood&geo_id=1049244&for_sale=1&for_rent=0", label: "The Vistas", external: true },
  { href: "/sold", label: "Sold" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16" aria-label="Main navigation">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold text-brand-600 hover:text-brand-700 transition-colors">
              Summerlin West Real Estate
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) =>
              link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 hover:text-brand-600 transition-colors font-medium"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.label}
                </a>
              ) : (
                <Link 
                  key={link.href} 
                  href={link.href} 
                  className="text-gray-700 hover:text-brand-600 transition-colors font-medium"
                >
                  {link.label}
                </Link>
              )
            )}
          </div>
          
          <div className="md:hidden">
            <button className="text-gray-700 hover:text-brand-600 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
