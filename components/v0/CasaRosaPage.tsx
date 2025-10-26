/**
 * V0.app Generated: Casa Rosa Community Page
 * Keywords: Casa Rosa Summerlin West homes, Casa Rosa luxury real estate, Casa Rosa neighborhood
 */
'use client';

import { useEffect } from 'react';

export default function CasaRosaPage() {
  useEffect(() => {
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'Residence',
      name: 'Casa Rosa Community',
      description:
        'Beautiful community in The Vistas with elegant homes and family-friendly amenities',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Summerlin West',
        addressRegion: 'Nevada',
      },
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <section className="bg-gradient-to-r from-purple-600 to-purple-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-5xl font-bold mb-4">Casa Rosa</h1>
          <p className="text-2xl">Elegant Homes in The Vistas</p>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 py-12">
        <div className="bg-white rounded-xl shadow-xl p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">About Casa Rosa</h2>
          <p className="text-lg text-gray-700 mb-6">
            Casa Rosa is a beautiful community in The Vistas featuring elegant homes and
            family-friendly amenities. Residents enjoy Spanish-inspired architecture, resort-style
            amenities, and proximity to Downtown Summerlin.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Home Types</h3>
              <p className="text-gray-700">Single-Family Homes</p>
              <p className="text-gray-700">2,200 - 4,500 sq ft</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Price Range</h3>
              <p className="text-gray-700 font-semibold text-2xl">$750K - $2M</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Amenities</h3>
              <ul className="text-gray-700 space-y-1">
                <li>• Community Pool</li>
                <li>• Tennis Courts</li>
                <li>• Walking Trails</li>
                <li>• Parks</li>
              </ul>
            </div>
          </div>

          <div className="bg-purple-100 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-3">Why Choose Casa Rosa?</h3>
            <ul className="text-gray-700 space-y-2">
              <li>✓ Spanish-inspired architecture</li>
              <li>✓ Family-friendly community</li>
              <li>✓ Top-rated schools nearby</li>
              <li>✓ Minutes from Downtown Summerlin</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
