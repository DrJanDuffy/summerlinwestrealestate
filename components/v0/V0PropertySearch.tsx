/**
 * V0.app Generated: AI-Powered Property Search (October 2025)
 * Using latest V0 features: Design Mode, Tailwind CSS, Smart Filters
 */
'use client';

import { useState } from 'react';

export default function V0PropertySearch() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    priceRange: [0, 5000000],
    bedrooms: '',
    bathrooms: '',
    propertyType: '',
    community: '',
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">AI-Powered Property Search</h1>
          <p className="text-lg text-gray-600">
            Find your dream luxury home in Summerlin West with intelligent search
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Natural Language Search Bar */}
        <section className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              placeholder="Try: 'Show me luxury homes in The Vistas under $2M with 3+ bedrooms'"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 border-2 border-gray-300 rounded-lg px-6 py-4 text-lg focus:border-blue-600 focus:outline-none"
            />
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Search
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-3">
            💡 AI understands natural language - ask exactly what you're looking for
          </p>
        </section>

        {/* Smart Filters */}
        <section className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Smart Filters</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">Price Range</label>
              <div className="flex gap-2">
                <input
                  type="number"
                  placeholder="Min"
                  className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:border-blue-600 focus:outline-none"
                />
                <input
                  type="number"
                  placeholder="Max"
                  className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:border-blue-600 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">Bedrooms</label>
              <select className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:border-blue-600 focus:outline-none">
                <option>Any</option>
                <option>1+</option>
                <option>2+</option>
                <option>3+</option>
                <option>4+</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">Bathrooms</label>
              <select className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:border-blue-600 focus:outline-none">
                <option>Any</option>
                <option>2+</option>
                <option>3+</option>
                <option>4+</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">Community</label>
              <select className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:border-blue-600 focus:outline-none">
                <option>All Communities</option>
                <option>The Vistas</option>
                <option>San Marcos</option>
                <option>Casa Rosa</option>
                <option>Solano</option>
                <option>Encanto</option>
                <option>Paradiso</option>
                <option>Palmilla</option>
              </select>
            </div>
          </div>
        </section>

        {/* Property Results Grid */}
        <section className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-gray-900">
              Found <span className="text-blue-600">42</span> Properties
            </h2>
            <div className="flex gap-2">
              <button className="px-4 py-2 border-2 border-gray-300 rounded-lg hover:border-blue-600">
                List View
              </button>
              <button className="px-4 py-2 border-2 border-blue-600 bg-blue-600 text-white rounded-lg">
                Grid View
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Sample Property Cards */}
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div
                key={item}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow"
              >
                <div className="bg-gradient-to-br from-blue-400 to-blue-600 h-48 relative">
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-semibold text-blue-600">
                    New Listing
                  </div>
                  <button className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-full text-sm font-semibold hover:bg-white transition-colors">
                    ❤️ Save
                  </button>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <div className="font-bold text-2xl text-gray-900">$1,250,000</div>
                    <div className="text-sm text-gray-500">Est. Payment</div>
                  </div>
                  <p className="text-lg font-semibold text-gray-700 mb-2">123 Luxury Lane</p>
                  <p className="text-gray-600 mb-4">The Vistas, Summerlin West</p>
                  <div className="flex gap-4 text-sm text-gray-600 mb-4 pb-4 border-b">
                    <span>🛏️ 4 beds</span>
                    <span>🚿 3 baths</span>
                    <span>📐 3,200 sqft</span>
                  </div>
                  <div className="flex gap-2">
                    <button className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                      View Details
                    </button>
                    <button className="px-4 py-2 border-2 border-gray-300 rounded-lg hover:border-blue-600 transition-colors">
                      📍 Map
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Market Insights */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl shadow-xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-6">Market Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 rounded-lg p-6">
              <div className="text-4xl font-bold mb-2">$1.2M</div>
              <div className="text-blue-100">Average Home Price</div>
              <p className="text-sm mt-2 text-blue-200">↑ 8% from last year</p>
            </div>
            <div className="bg-white/10 rounded-lg p-6">
              <div className="text-4xl font-bold mb-2">45 Days</div>
              <div className="text-blue-100">Days on Market</div>
              <p className="text-sm mt-2 text-blue-200">↓ 15% faster sales</p>
            </div>
            <div className="bg-white/10 rounded-lg p-6">
              <div className="text-4xl font-bold mb-2">62</div>
              <div className="text-blue-100">Active Listings</div>
              <p className="text-sm mt-2 text-blue-200">+23% inventory</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
