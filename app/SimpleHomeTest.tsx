'use client';

export default function SimpleHomeTest() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-indigo-800">
      {/* Test Header */}
      <header className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-gray-900">
              Summerlin West Real Estate
            </div>
            <nav className="space-x-6">
              <a href="/" className="text-blue-600 hover:text-blue-800 font-medium">
                Home
              </a>
              <a href="/about" className="text-gray-600 hover:text-gray-900 font-medium">
                About
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Test Hero Section */}
      <main className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Find Your Dream Home
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Discover luxury living in Summerlin West with Dr. Jan Duffy, REALTOR®
          </p>
          
          {/* Test Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white p-6 rounded-lg shadow-xl">
              <div className="text-3xl font-bold text-blue-600 mb-2">$920K</div>
              <div className="text-gray-600">Median Price</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-xl">
              <div className="text-3xl font-bold text-green-600 mb-2">287</div>
              <div className="text-gray-600">Active Listings</div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-xl">
              <div className="text-3xl font-bold text-purple-600 mb-2">12</div>
              <div className="text-gray-600">Avg Days on Market</div>
            </div>
          </div>

          {/* Test Buttons */}
          <div className="mt-12 space-x-4">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
              Search Properties
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Get Market Report
            </button>
          </div>
        </div>
      </main>

      {/* Test Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">
            Dr. Jan Duffy REALTOR® | Summerlin West Real Estate
          </p>
        </div>
      </footer>
    </div>
  );
}
