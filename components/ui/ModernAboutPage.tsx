'use client';

import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React, { useId, useRef, useState } from 'react';
import {
  FaAward,
  FaChartLine,
  FaChevronLeft,
  FaChevronRight,
  FaEnvelope,
  FaFacebook,
  FaGraduationCap,
  FaHandshake,
  FaHome,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhone,
  FaQuoteLeft,
  FaStar,
  FaTrophy,
  FaUsers,
} from 'react-icons/fa';
import InternalLinking from './InternalLinking';

// import RealScoutIntegration from './RealScoutIntegration';

interface ModernAboutPageProps {
  className?: string;
}

export default function ModernAboutPage({ className = '' }: ModernAboutPageProps) {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const statsRef = useRef(null);
  const testimonialsRef = useRef(null);
  const mapId = useId();

  const isStatsInView = useInView(statsRef, { once: true });
  const isTestimonialsInView = useInView(testimonialsRef, { once: true });

  const stats = [
    { number: '$6B+', label: 'Total Sales Volume', icon: FaChartLine },
    { number: '15+', label: 'Years Experience', icon: FaTrophy },
    { number: '200+', label: 'Happy Clients', icon: FaUsers },
    { number: '98%', label: 'List-to-Sale Ratio', icon: FaAward },
  ];

  const specializations = [
    {
      title: 'Luxury Real Estate',
      description: 'High-end properties in The Ridges and Red Rock Country Club',
      icon: FaHome,
      color: 'from-blue-500 to-purple-600',
    },
    {
      title: 'First-Time Buyers',
      description: 'Expert guidance through your first home purchase',
      icon: FaHandshake,
      color: 'from-green-500 to-teal-600',
    },
    {
      title: 'New Construction',
      description: 'Exclusive access to pre-construction opportunities',
      icon: FaGraduationCap,
      color: 'from-orange-500 to-red-600',
    },
    {
      title: 'Investment Properties',
      description: 'Strategic real estate investment opportunities',
      icon: FaChartLine,
      color: 'from-purple-500 to-pink-600',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah & Michael Chen',
      location: 'The Vistas',
      rating: 5,
      text: 'Dr. Duffy made our dream of owning a home in The Vistas a reality. Her knowledge of the area and negotiation skills saved us thousands.',
      image:
        'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=100&h=100&fit=crop&crop=entropy&auto=format&q=80',
    },
    {
      name: 'Jennifer Martinez',
      location: 'Stonebridge',
      rating: 5,
      text: 'As first-time buyers, we were nervous about the process. Dr. Duffy guided us every step of the way with patience and expertise.',
      image:
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=100&h=100&fit=crop&crop=entropy&auto=format&q=80',
    },
    {
      name: 'David & Lisa Thompson',
      location: 'Redpoint',
      rating: 5,
      text: "We sold our home above asking price in just 8 days! Dr. Duffy's marketing strategy and staging advice were exceptional.",
      image:
        'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=100&h=100&fit=crop&crop=entropy&auto=format&q=80',
    },
  ];

  const achievements = [
    'Top 1% of REALTORS® in Nevada',
    'Berkshire Hathaway HomeServices Elite Agent',
    'Certified Luxury Home Marketing Specialist',
    'Graduate, REALTOR® Institute (GRI)',
    'Certified Residential Specialist (CRS)',
    "Accredited Buyer's Representative (ABR)",
  ];

  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 ${className}`}>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-blue-800 to-purple-900 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                Meet Dr. Jan Duffy
                <span className="block text-blue-300">Your Summerlin West Expert</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100 leading-relaxed">
                15+ years of experience helping families discover luxury living at the gateway to
                Red Rock Canyon
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                  <span className="text-lg font-semibold">$6B+ Sales Volume</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                  <span className="text-lg font-semibold">200+ Happy Clients</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                  <span className="text-lg font-semibold">98% Success Rate</span>
                </div>
              </div>
              <div className="flex gap-4">
                <Link
                  href="tel:702-550-0112"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
                >
                  <FaPhone className="inline mr-2" />
                  Call (702) 550-0112
                </Link>
                <Link
                  href="#contact"
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300"
                >
                  Get Free Consultation
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative z-10">
                <Image
                  src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=500&h=600&fit=crop&crop=entropy&auto=format&q=80"
                  alt="Dr. Jan Duffy - Summerlin West Real Estate Expert"
                  width={500}
                  height={600}
                  className="rounded-2xl shadow-2xl"
                  priority
                />
                <div className="absolute -bottom-6 -left-6 bg-white text-blue-900 p-6 rounded-xl shadow-xl">
                  <div className="text-center">
                    <div className="text-3xl font-bold">Top 1%</div>
                    <div className="text-sm">of Nevada REALTORS®</div>
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl transform rotate-3 scale-105 -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section ref={statsRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isStatsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Proven Results</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dr. Jan Duffy's track record speaks for itself with consistent results across all
              market conditions
            </p>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 50 }}
                animate={isStatsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                  <stat.icon className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                  <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Specializations Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Specialized Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive real estate services tailored to your unique needs and goals
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specializations.map((spec, index) => (
              <motion.div
                key={spec.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group-hover:scale-105 h-full">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${spec.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <spec.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{spec.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{spec.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Professional Credentials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Professional Credentials
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Dr. Jan Duffy combines academic excellence with real-world experience, bringing a
                unique perspective to real estate that goes beyond traditional transactions.
              </p>
              <div className="grid sm:grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center bg-blue-50 rounded-lg p-4"
                  >
                    <FaAward className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{achievement}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white"
            >
              <h3 className="text-2xl font-bold mb-6">Education & Background</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <FaGraduationCap className="w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">Doctorate in Psychology</div>
                    <div className="text-blue-100">Understanding client needs and motivations</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <FaTrophy className="w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">Business & Marketing Expertise</div>
                    <div className="text-blue-100">Strategic approach to real estate</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <FaHandshake className="w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">Licensed REALTOR®</div>
                    <div className="text-blue-100">License #S.0197614</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={testimonialsRef} className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isTestimonialsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">What Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real stories from real buyers and sellers who have worked with Dr. Jan Duffy
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isTestimonialsInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl">
              <FaQuoteLeft className="w-12 h-12 text-blue-600 mb-6" />
              <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8">
                "{testimonials[activeTestimonial].text}"
              </blockquote>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-4">
                    {testimonials[activeTestimonial].name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900">
                      {testimonials[activeTestimonial].name}
                    </div>
                    <div className="text-gray-600">{testimonials[activeTestimonial].location}</div>
                    <div className="flex mt-1">
                      {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                        <FaStar
                          key={`star-${i}-${activeTestimonial}`}
                          className="w-4 h-4 text-yellow-400"
                        />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() =>
                      setActiveTestimonial((prev) =>
                        prev === 0 ? testimonials.length - 1 : prev - 1
                      )
                    }
                    className="p-3 rounded-full bg-blue-100 hover:bg-blue-200 transition-colors"
                    aria-label="Previous testimonial"
                  >
                    <FaChevronLeft className="w-4 h-4 text-blue-600" />
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setActiveTestimonial((prev) =>
                        prev === testimonials.length - 1 ? 0 : prev + 1
                      )
                    }
                    className="p-3 rounded-full bg-blue-100 hover:bg-blue-200 transition-colors"
                    aria-label="Next testimonial"
                  >
                    <FaChevronRight className="w-4 h-4 text-blue-600" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Office Location */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Visit Our Office</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conveniently located in the heart of Summerlin, easily accessible from all communities
            </p>
          </motion.div>
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white"
            >
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <FaMapMarkerAlt className="w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">Office Address</div>
                    <div className="text-blue-100">
                      1980 Festival Plaza Dr (One Summerlin)
                      <br />
                      Las Vegas, NV 89135
                    </div>
                  </div>
                </div>
                <div className="flex items-start">
                  <FaPhone className="w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">Phone</div>
                    <div className="text-blue-100">(702) 550-0112</div>
                  </div>
                </div>
                <div className="flex items-start">
                  <FaEnvelope className="w-6 h-6 mr-4 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="text-blue-100">DrJanSells@SummerlinWestRealEstate.com</div>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <h4 className="font-semibold mb-4">Follow Dr. Jan Duffy</h4>
                <div className="flex gap-4">
                  <a
                    href="https://www.facebook.com/summerlinwestrealestate"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                    aria-label="Follow on Facebook"
                  >
                    <FaFacebook className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.instagram.com/summerlinwestrealestate"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                    aria-label="Follow on Instagram"
                  >
                    <FaInstagram className="w-5 h-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/jan-duffy-realestate"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                    aria-label="Connect on LinkedIn"
                  >
                    <FaLinkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-xl"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3218.123456789!2d-115.3336!3d36.1540!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8c1a2b3c4d5e6%3A0x1234567890abcdef!2s1980%20Festival%20Plaza%20Dr%2C%20Las%20Vegas%2C%20NV%2089135!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus"
                width="100%"
                height="400"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Dr. Jan Duffy Office Location"
                className="border-0 rounded-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* RealScout Integration Points */}
      <section id="contact" className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Ready to Work Together?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get expert guidance tailored to your specific needs with a free consultation
            </p>
          </motion.div>

          {/* RealScout Lead Capture Widget Integration Point */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-xl max-w-4xl mx-auto"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Get Your Free Market Consultation
              </h3>
              <p className="text-gray-600">
                Whether you're buying or selling in Summerlin West, get expert market analysis and
                strategic advice
              </p>
            </div>
            {/* RealScout Lead Capture Widget */}
            {/* <RealScoutIntegration type="lead-capture" /> */}
          </motion.div>
        </div>
      </section>

      {/* Current Listings Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Current Premium Properties
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore Dr. Jan Duffy's current listings in Summerlin West
            </p>
          </motion.div>

          {/* RealScout Office Listings Widget */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* <RealScoutIntegration type="listings" /> */}
          </motion.div>
        </div>
      </section>

      {/* Internal Linking Section for SEO */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <InternalLinking
            currentPage="about"
            title="Explore More Summerlin West Resources"
            description="Discover additional resources and services to support your real estate journey. From property listings to market insights, find everything you need to make informed decisions in Summerlin West."
            showFeaturedSnippets={true}
            maxLinks={6}
          />
        </div>
      </section>
    </div>
  );
}
