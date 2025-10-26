/**
 * V0.app Generated: SEO-Optimized Contact Page
 * Keywords: Contact Summerlin West real estate agent, real estate consultation
 */
'use client';

import { useEffect, useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    propertyInterest: ''
  });

  useEffect(() => {
    // Add structured data for SEO
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'RealEstateAgent',
      name: 'Dr. Jan Duffy',
      telephone: '+1-702-550-0112',
      email: 'jan@summerlinwestrealestate.com',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Summerlin West',
        addressRegion: 'Nevada'
      },
      areaServed: {
        '@type': 'City',
        name: 'Summerlin West'
      }
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
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contact Dr. Jan Duffy - Summerlin West Real Estate Agent
          </h1>
          <p className="text-xl text-gray-600 mb-2">
            Get Expert Help Buying or Selling Your Luxury Home
          </p>
          <p className="text-lg text-gray-500">
            Licensed REALTOR® | Top 1% Agent | $6+ Billion in Sales
          </p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <section className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Send a Message</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:border-blue-600 focus:outline-none"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:border-blue-600 focus:outline-none"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:border-blue-600 focus:outline-none"
                  placeholder="(702) 555-0123"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Property Interest
                </label>
                <select className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:border-blue-600 focus:outline-none">
                  <option>Buying a Home</option>
                  <option>Selling a Home</option>
                  <option>Investment Property</option>
                  <option>Relocation</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full border-2 border-gray-300 rounded-lg px-4 py-3 focus:border-blue-600 focus:outline-none"
                  placeholder="Tell us about your real estate needs..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </section>

          {/* Contact Information */}
          <section className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
            <div className="space-y-6">
              <div className="flex items-start">
                <svg className="w-8 h-8 text-blue-600 mr-4 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Phone</h3>
                  <a href="tel:+17025500112" className="text-blue-600 hover:text-blue-700 font-semibold">
                    (702) 550-0112
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <svg className="w-8 h-8 text-blue-600 mr-4 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Email</h3>
                  <a href="mailto:jan@summerlinwestrealestate.com" className="text-blue-600 hover:text-blue-700 font-semibold">
                    jan@summerlinwestrealestate.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <svg className="w-8 h-8 text-blue-600 mr-4 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">Service Area</h3>
                  <p className="text-gray-600">
                    Summerlin West, Las Vegas, Nevada
                  </p>
                  <p className="text-gray-600">
                    The Vistas, San Marcos, Casa Rosa & More
                  </p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-blue-50 rounded-lg p-6 mt-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Ready to Get Started?
              </h3>
              <p className="text-gray-600 mb-4">
                Schedule a free consultation with Dr. Jan Duffy
              </p>
              <a
                href="#"
                className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Schedule Consultation
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
