'use client';

import { motion } from 'framer-motion';
import { StarIcon } from '@heroicons/react/24/solid';

interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  image?: string;
  propertyType?: string;
  salePrice?: string;
}

interface EnhancedTestimonialsProps {
  title?: string;
  subtitle?: string;
  testimonials?: Testimonial[];
  className?: string;
}

const defaultTestimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah & Michael Johnson',
    location: 'The Vistas, Summerlin West',
    rating: 5,
    text: 'Dr. Jan Duffy made our home buying experience seamless. Her knowledge of Summerlin West is unmatched, and she found us the perfect home in The Vistas. We couldn\'t be happier!',
    propertyType: 'Luxury Home',
    salePrice: '$1,250,000'
  },
  {
    id: '2',
    name: 'David Chen',
    location: 'Red Rock Country Club',
    rating: 5,
    text: 'As a first-time homebuyer, I was nervous about the process. Dr. Jan Duffy guided me through every step and helped me find an amazing investment property. Her expertise is incredible.',
    propertyType: 'Investment Property',
    salePrice: '$850,000'
  },
  {
    id: '3',
    name: 'Lisa Rodriguez',
    location: 'Summerlin West',
    rating: 5,
    text: 'We sold our home in just 3 days thanks to Dr. Jan Duffy\'s marketing strategy. She got us $50,000 over asking price! Her professionalism and results speak for themselves.',
    propertyType: 'Single Family Home',
    salePrice: '$975,000'
  },
  {
    id: '4',
    name: 'Robert & Jennifer Kim',
    location: 'The Vistas',
    rating: 5,
    text: 'Dr. Jan Duffy helped us relocate from California to Las Vegas. She understood our needs perfectly and found us a beautiful home with mountain views. Highly recommended!',
    propertyType: 'Relocation',
    salePrice: '$1,100,000'
  },
  {
    id: '5',
    name: 'Amanda Foster',
    location: 'Red Rock Country Club',
    rating: 5,
    text: 'Working with Dr. Jan Duffy was a game-changer. She negotiated an incredible deal on our new home and made the entire process stress-free. She\'s the best REALTOR® in Las Vegas!',
    propertyType: 'Luxury Home',
    salePrice: '$1,400,000'
  },
  {
    id: '6',
    name: 'Mark Thompson',
    location: 'Summerlin West',
    rating: 5,
    text: 'Dr. Jan Duffy\'s market knowledge is impressive. She helped us sell our home quickly and find our dream retirement home. Her attention to detail and client service is outstanding.',
    propertyType: 'Retirement Home',
    salePrice: '$750,000'
  }
];

export default function EnhancedTestimonials({
  title = "What Our Clients Say",
  subtitle = "Real stories from satisfied homeowners who found their perfect property with Dr. Jan Duffy",
  testimonials = defaultTestimonials,
  className = "",
}: EnhancedTestimonialsProps) {
  return (
    <div className={`py-16 lg:py-24 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {subtitle}
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 relative overflow-hidden group"
            >
              {/* Background Pattern */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50 to-purple-50 rounded-full blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
              
              {/* Rating */}
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5 text-yellow-400" />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-gray-700 mb-6 leading-relaxed relative z-10">
                "{testimonial.text}"
              </blockquote>

              {/* Client Info */}
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
                {testimonial.salePrice && (
                  <div className="text-right">
                    <p className="text-sm font-medium text-green-600">{testimonial.salePrice}</p>
                    <p className="text-xs text-gray-500">{testimonial.propertyType}</p>
                  </div>
                )}
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 bg-gradient-to-r from-blue-900 via-blue-800 to-purple-900 rounded-2xl p-8 lg:p-12 text-white relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-purple-500/10 rounded-full blur-2xl"></div>
          
          <div className="relative z-10">
            <h3 className="text-2xl lg:text-3xl font-bold text-center mb-8">
              Dr. Jan Duffy's Track Record
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl lg:text-4xl font-bold text-blue-200 mb-2">500+</div>
                <div className="text-blue-100">Happy Clients</div>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-bold text-blue-200 mb-2">$50M+</div>
                <div className="text-blue-100">Total Sales Volume</div>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-bold text-blue-200 mb-2">15+</div>
                <div className="text-blue-100">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl lg:text-4xl font-bold text-blue-200 mb-2">98%</div>
                <div className="text-blue-100">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="mt-16 text-center"
        >
          <div className="bg-white rounded-2xl shadow-lg p-8 lg:p-12">
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Let Dr. Jan Duffy help you find your perfect home in Summerlin West. 
              Experience the difference that expertise and dedication make.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-8 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Get Your Free Consultation
              </a>
              <a
                href="tel:+17025550123"
                className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-lg border-2 border-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-200"
              >
                Call (702) 555-0123
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}



