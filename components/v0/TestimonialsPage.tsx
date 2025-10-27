/**
 * V0.app Generated: SEO-Optimized Testimonials Page with Carousel
 * Keywords: Summerlin West real estate testimonials, client reviews, luxury home reviews
 */
'use client';

import { useEffect, useState } from 'react';
import RealScoutWidget from '@/components/ui/RealScoutWidget';

export default function TestimonialsPage() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Add structured data for SEO
    const schema = {
      '@context': 'https://schema.org',
      '@type': 'RealEstateAgent',
      name: 'Dr. Jan Duffy',
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5',
        ratingCount: '150+',
        bestRating: '5',
        worstRating: '1',
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

  const testimonials = [
    {
      name: 'Sarah & Michael Johnson',
      location: 'The Vistas',
      property: 'Luxury Estate with Red Rock Views',
      rating: 5,
      text: 'Dr. Jan Duffy made our home purchase seamless. Her expertise in The Vistas market was invaluable. We found our dream home and closed quickly thanks to her professionalism.',
      avatar: '👨‍👩‍👧‍👦',
    },
    {
      name: 'Robert Chen',
      location: 'San Marcos',
      property: 'Modern Luxury Home',
      rating: 5,
      text: 'As a first-time luxury homebuyer, I was nervous. Dr. Duffy guided me through every step with patience and expertise. Her knowledge of the San Marcos community is unmatched.',
      avatar: '👤',
    },
    {
      name: 'Jennifer Martinez',
      location: 'Casa Rosa',
      property: 'Spanish-Inspired Villa',
      rating: 5,
      text: 'Dr. Jan Duffy is simply the best! She understood exactly what we were looking for and found the perfect home in Casa Rosa. Her attention to detail and negotiation skills are incredible.',
      avatar: '👩',
    },
    {
      name: 'David & Lisa Anderson',
      location: 'Solano',
      property: 'Contemporary Estate',
      rating: 5,
      text: 'We interviewed several agents, but Dr. Duffy stood out immediately. Her $6+ billion in sales speaks volumes. She made selling our home effortless and maximized our return.',
      avatar: '👨‍👩‍👦',
    },
    {
      name: 'Patricia Thompson',
      location: 'Paradiso',
      property: 'Mediterranean Villa',
      rating: 5,
      text: "Dr. Duffy's market knowledge is extraordinary. She found properties we didn't even know existed. Her network and expertise made all the difference in our purchase.",
      avatar: '👵',
    },
    {
      name: 'James Wilson',
      location: 'Encanto',
      property: 'Luxury Villa',
      rating: 5,
      text: "Top 1% agent? Absolutely! Dr. Duffy's professionalism, market insights, and dedication to client satisfaction are unmatched. Highly recommend her services.",
      avatar: '👨',
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Client Testimonials & Reviews
          </h1>
          <p className="text-xl text-gray-600 mb-2">
            See What Clients Say About Working With Dr. Jan Duffy
          </p>
          <div className="flex items-center gap-2 mt-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-2xl">
                  ★
                </span>
              ))}
            </div>
            <span className="text-lg text-gray-700 font-semibold">5.0 Rating</span>
            <span className="text-gray-500">(150+ Reviews)</span>
          </div>
        </div>
      </header>

      {/* RealScout Listings */}
      <section className="bg-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <RealScoutWidget
            type="listings"
            agentEncodedId="QWdlbnQtMjI1MDUw"
            sortOrder="NEWEST"
          />
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 py-12">
        {/* Featured Testimonial Carousel */}
        <section className="mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-12 relative">
            {/* Navigation */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
              aria-label="Previous testimonial"
            >
              ←
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
              aria-label="Next testimonial"
            >
              →
            </button>

            {/* Testimonial Content */}
            <div className="max-w-4xl mx-auto text-center">
              <div className="text-6xl mb-6">{currentTestimonial.avatar}</div>
              <div className="flex justify-center gap-1 mb-6">
                {[...Array(currentTestimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-2xl">
                    ★
                  </span>
                ))}
              </div>
              <blockquote className="text-2xl text-gray-700 italic mb-8">
                "{currentTestimonial.text}"
              </blockquote>
              <div className="border-t border-gray-200 pt-6">
                <div className="font-bold text-xl text-gray-900">{currentTestimonial.name}</div>
                <div className="text-gray-600">{currentTestimonial.location}</div>
                <div className="text-sm text-gray-500">{currentTestimonial.property}</div>
              </div>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-blue-600 w-8' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* All Testimonials Grid */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">More Client Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <article
                key={index}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-4xl">{testimonial.avatar}</div>
                  <div>
                    <div className="font-bold text-gray-900">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">{testimonial.location}</div>
                  </div>
                </div>
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-700 italic">"{testimonial.text}"</p>
              </article>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl shadow-xl p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Join Our Satisfied Clients?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Work with Dr. Jan Duffy for an exceptional real estate experience
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              Schedule Consultation
            </a>
            <a
              href="tel:+17025500112"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Call (702) 550-0112
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
