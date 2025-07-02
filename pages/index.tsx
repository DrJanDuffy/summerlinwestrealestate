import React from 'react';
import { NextSeo } from 'next-seo';
import { motion } from 'framer-motion';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Button from '../components/ui/Button';

const HomePage: React.FC = () => {
  return (
    <>
      <NextSeo
        title="Summerlin West Real Estate - Your Trusted Partner"
        description="Find your perfect home in Summerlin West. Expert real estate services with local market knowledge and personalized attention."
        canonical="https://summerlinwestrealestate.com"
        openGraph={{
          url: 'https://summerlinwestrealestate.com',
          title: 'Summerlin West Real Estate - Your Trusted Partner',
          description: 'Find your perfect home in Summerlin West. Expert real estate services with local market knowledge and personalized attention.',
          images: [
            {
              url: '/images/hero-image.jpg',
              width: 1200,
              height: 630,
              alt: 'Summerlin West Real Estate',
            },
          ],
        }}
      />
      
      <div className="min-h-screen bg-gray-50">
        <Header />
        
        <main>
          {/* Hero Section */}
          <section className="relative bg-gradient-to-r from-primary-600 to-primary-800 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center"
              >
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  Find Your Dream Home in
                  <span className="block text-secondary-400">Summerlin West</span>
                </h1>
                <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                  Your trusted partner for real estate in one of Las Vegas' most desirable communities
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-secondary-600 hover:bg-secondary-700">
                    View Properties
                  </Button>
                  <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-600">
                    Get Market Report
                  </Button>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Why Choose Summerlin West?
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  Discover the perfect blend of luxury, convenience, and community
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    title: 'Top-Rated Schools',
                    description: 'Excellent educational opportunities with highly-rated public and private schools',
                    icon: '🎓',
                  },
                  {
                    title: 'Beautiful Parks',
                    description: 'Access to numerous parks, trails, and outdoor recreation areas',
                    icon: '🌳',
                  },
                  {
                    title: 'Shopping & Dining',
                    description: 'Convenient access to premium shopping centers and fine dining',
                    icon: '🛍️',
                  },
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.2 }}
                    className="text-center p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors"
                  >
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 bg-secondary-600 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Find Your Perfect Home?
                </h2>
                <p className="text-xl mb-8 max-w-2xl mx-auto">
                  Let us help you navigate the Summerlin West real estate market with expert guidance
                </p>
                <Button size="lg" className="bg-white text-secondary-600 hover:bg-gray-100">
                  Contact Us Today
                </Button>
              </motion.div>
            </div>
          </section>
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default HomePage; 