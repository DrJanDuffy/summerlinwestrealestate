import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Offline - Summerlin West Real Estate',
  description: 'You are currently offline. Please check your internet connection.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function OfflinePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
      <div className="max-w-md mx-auto text-center px-4">
        {/* Logo */}
        <div className="mb-8">
          <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Summerlin West Real Estate</h1>
        </div>

        {/* Offline Message */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
          
          <h2 className="text-xl font-semibold text-gray-900 mb-4">You're Offline</h2>
          <p className="text-gray-600 mb-6">
            It looks like you're not connected to the internet. Please check your connection and try again.
          </p>
          
          <button
            onClick={() => window.location.reload()}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Try Again
          </button>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Need Immediate Assistance?</h3>
          <p className="text-gray-600 mb-4">
            Contact Dr. Jan Duffy directly for expert real estate guidance:
          </p>
          
          <div className="space-y-3">
            <a
              href="tel:702-550-0112"
              className="flex items-center justify-center bg-green-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call (702) 550-0112
            </a>
            
            <a
              href="mailto:DrJanSells@SummerlinWestRealEstate.com"
              className="flex items-center justify-center bg-blue-600 text-white px-4 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email Dr. Jan Duffy
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
          <div className="grid grid-cols-2 gap-3">
            <Link
              href="/properties"
              className="bg-gray-100 text-gray-700 px-4 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors"
            >
              Properties
            </Link>
            <Link
              href="/about"
              className="bg-gray-100 text-gray-700 px-4 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors"
            >
              About Dr. Jan Duffy
            </Link>
            <Link
              href="/communities"
              className="bg-gray-100 text-gray-700 px-4 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors"
            >
              Communities
            </Link>
            <Link
              href="/market-reports"
              className="bg-gray-100 text-gray-700 px-4 py-3 rounded-lg font-medium hover:bg-gray-200 transition-colors"
            >
              Market Reports
            </Link>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-sm text-gray-500">
          <p>© 2025 Summerlin West Real Estate</p>
          <p>Dr. Jan Duffy, REALTOR® | Berkshire Hathaway HomeServices</p>
        </div>
      </div>
    </div>
  );
}
