import React from "react";
import Link from "next/link";
import LeadCaptureForm from "../ui/LeadCaptureForm";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 py-12 px-4 mt-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="font-bold text-xl text-gray-900 mb-4">
              Summerlin West Real Estate
            </h3>
            <div className="space-y-2 text-sm text-gray-600">
              <p>1980 Festival Plaza Dr (One Summerlin)</p>
              <p>Las Vegas, NV 89135</p>
              <p>NV License #1234567</p>
              <p>Brokered by Realty Experts, LLC</p>
            </div>
            <div className="space-y-2 text-sm">
              <p className="text-gray-600">
                Phone:{" "}
                <a href="tel:7025500112" className="text-brand-600 hover:text-brand-700 transition-colors">
                  (702) 550-0112
                </a>
              </p>
              <p className="text-gray-600">
                Email:{" "}
                <a
                  href="mailto:info@summerlinwestrealestate.com"
                  className="text-brand-600 hover:text-brand-700 transition-colors"
                >
                  info@summerlinwestrealestate.com
                </a>
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg text-gray-900 mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-600 hover:text-brand-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/current-listing" className="text-gray-600 hover:text-brand-600 transition-colors">
                  Vistas Listing
                </Link>
              </li>
              <li>
                <Link href="/communities" className="text-gray-600 hover:text-brand-600 transition-colors">
                  Communities
                </Link>
              </li>
              <li>
                <Link href="/market-reports" className="text-gray-600 hover:text-brand-600 transition-colors">
                  Market Reports
                </Link>
              </li>
              <li>
                <Link href="/hidden-home-equity-tax" className="text-gray-600 hover:text-brand-600 transition-colors">
                  Hidden Home Equity Tax
                </Link>
              </li>
              <li>
                <Link href="/compare" className="text-gray-600 hover:text-brand-600 transition-colors">
                  Compare
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-brand-600 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-brand-600 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg text-gray-900 mb-4">Service Areas</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Summerlin West</li>
              <li>The Vistas</li>
              <li>Stonebridge</li>
              <li>Redpoint</li>
              <li>The Cliffs</li>
              <li>Reverence</li>
              <li>Downtown Summerlin</li>
              <li>All Summerlin Villages</li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg text-gray-900 mb-4">
              Newsletter Signup
            </h4>
            <LeadCaptureForm
              variant="inline"
              title="Subscribe to Our Newsletter"
              subtitle="Monthly updates, market trends, and exclusive insights."
              source="Footer Newsletter"
            />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-200 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-sm text-gray-500 text-center md:text-left">
              <p>
                &copy; {new Date().getFullYear()} Summerlin West Real Estate. All rights reserved.
              </p>
              <p className="mt-1">
                Each office independently owned and operated.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <a
                href="https://drjanduffy.realscout.com/homesearch/shared-searches/U2hhcmVhYmxlU2VhcmNoTGluay05NTMy"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Browse Properties"
                className="text-gray-400 hover:text-brand-600 transition-colors"
              >
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.326 24h11.495v-9.294H9.691v-3.622h3.13V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0" />
                </svg>
              </a>
              <a
                href="https://drjanduffy.realscout.com/homesearch/shared-searches/U2hhcmVhYmxlU2VhcmNoTGluay05NTMy"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View Listings"
                className="text-gray-400 hover:text-brand-600 transition-colors"
              >
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.334 3.608 1.308.974.974 1.246 2.241 1.308 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.334 2.633-1.308 3.608-.974.974-2.241 1.246-3.608 1.308-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.334-3.608-1.308-.974-.974-1.246-2.241-1.308-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.334-2.633 1.308-3.608C4.515 2.497 5.782 2.225 7.148 2.163 8.414 2.105 8.794 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.771.131 4.659.363 3.678 1.344 2.697 2.325 2.465 3.437 2.406 4.718 2.347 5.999 2.334 6.408 2.334 12c0 5.592.013 6.001.072 7.282.059 1.281.291 2.393 1.272 3.374.981.981 2.093 1.213 3.374 1.272C8.332 23.987 8.741 24 12 24s3.668-.013 4.948-.072c1.281-.059 2.393-.291 3.374-1.272.981-.981 1.213-2.093 1.272-3.374.059-1.281.072-1.69.072-7.282 0-5.592-.013-6.001-.072-7.282-.059-1.281-.291-2.393-1.272-3.374-.981-.981-2.093-1.213-3.374-1.272C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z" />
                </svg>
              </a>
              <a
                href="https://drjanduffy.realscout.com/homesearch/shared-searches/U2hhcmVhYmxlU2VhcmNoTGluay05NTMy"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Search Properties"
                className="text-gray-400 hover:text-brand-600 transition-colors"
              >
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a2.994 2.994 0 0 0-2.112-2.112C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.386.574A2.994 2.994 0 0 0 .502 6.186C0 8.072 0 12 0 12s0 3.928.502 5.814a2.994 2.994 0 0 0 2.112 2.112C4.5 20.5 12 20.5 12 20.5s7.5 0 9.386-.574a2.994 2.994 0 0 0 2.112-2.112C24 15.928 24 12 24 12s0-3.928-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="mt-4 text-center">
            <p className="text-xs text-gray-400">
              All information deemed reliable but not guaranteed. Equal Housing Opportunity.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
