'use client';

import { useState } from 'react';
import { trackEmailClick, trackFormSubmission, trackPhoneClick } from '../../lib/lead-tracking';

interface LeadFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  propertyType: string;
  priceRange: string;
  community: string;
  intent: 'buy' | 'sell' | 'invest' | 'consultation';
}

interface EnhancedLeadFormProps {
  title?: string;
  subtitle?: string;
  showPropertyFields?: boolean;
  showPriceRange?: boolean;
  showCommunitySelection?: boolean;
  formType?: 'general' | 'property_inquiry' | 'market_report' | 'valuation' | 'consultation';
  propertyId?: string;
  community?: string;
}

export default function EnhancedLeadForm({
  title = 'Get Your Free Real Estate Consultation',
  subtitle = 'Connect with Dr. Jan Duffy for expert guidance on Summerlin West real estate',
  showPropertyFields = true,
  showPriceRange = true,
  showCommunitySelection = true,
  formType = 'general',
  propertyId,
  community,
}: EnhancedLeadFormProps) {
  const [formData, setFormData] = useState<LeadFormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
    propertyType: 'single_family',
    priceRange: '600000-1000000',
    community: community || '',
    intent: 'buy',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Track form submission
      trackFormSubmission(formType, {
        ...formData,
        property_id: propertyId,
        form_type: formType,
        page_url: window.location.href,
        page_title: document.title,
      });

      // Simulate form submission (replace with actual API call)
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setIsSubmitted(true);

      // Track successful submission
      trackFormSubmission('form_success', {
        ...formData,
        property_id: propertyId,
        form_type: formType,
        submission_status: 'success',
      });
    } catch (error) {
      console.error('Form submission error:', error);

      // Track failed submission
      trackFormSubmission('form_error', {
        ...formData,
        property_id: propertyId,
        form_type: formType,
        submission_status: 'error',
        error_message: error instanceof Error ? error.message : 'Unknown error',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePhoneClick = (phoneNumber: string) => {
    trackPhoneClick(phoneNumber, `${formType}_form_phone`);
  };

  const handleEmailClick = (email: string) => {
    trackEmailClick(email, `${formType}_form_email`);
  };

  if (isSubmitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg
            className="w-8 h-8 text-green-600"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-green-800 mb-2">Thank You!</h3>
        <p className="text-green-700 mb-4">
          Your message has been sent successfully. Dr. Jan Duffy will contact you within 24 hours.
        </p>
        <div className="flex justify-center space-x-4">
          <a
            href="tel:+17025500112"
            onClick={() => handlePhoneClick('+17025500112')}
            className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
          >
            Call (702) 550-0112
          </a>
          <a
            href="mailto:DrJanSells@SummerlinWestRealEstate.com"
            onClick={() => handleEmailClick('DrJanSells@SummerlinWestRealEstate.com')}
            className="bg-green-100 text-green-800 px-4 py-2 rounded-lg hover:bg-green-200 transition-colors"
          >
            Email Dr. Jan Duffy
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">{title}</h2>
        <p className="text-gray-600">{subtitle}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your full name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              Phone Number *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="(702) 555-0123"
            />
          </div>

          <div>
            <label htmlFor="intent" className="block text-sm font-medium text-gray-700 mb-2">
              I'm looking to *
            </label>
            <select
              id="intent"
              name="intent"
              required
              value={formData.intent}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="buy">Buy a Home</option>
              <option value="sell">Sell a Home</option>
              <option value="invest">Investment Property</option>
              <option value="consultation">General Consultation</option>
            </select>
          </div>

          {showPropertyFields && (
            <div>
              <label
                htmlFor="propertyType"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Property Type
              </label>
              <select
                id="propertyType"
                name="propertyType"
                value={formData.propertyType}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="single_family">Single Family Home</option>
                <option value="condo">Condominium</option>
                <option value="townhome">Townhome</option>
                <option value="luxury">Luxury Home</option>
                <option value="investment">Investment Property</option>
              </select>
            </div>
          )}

          {showPriceRange && (
            <div>
              <label htmlFor="priceRange" className="block text-sm font-medium text-gray-700 mb-2">
                Price Range
              </label>
              <select
                id="priceRange"
                name="priceRange"
                value={formData.priceRange}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="400000-600000">$400K - $600K</option>
                <option value="600000-800000">$600K - $800K</option>
                <option value="800000-1000000">$800K - $1M</option>
                <option value="1000000-1500000">$1M - $1.5M</option>
                <option value="1500000-2000000">$1.5M - $2M</option>
                <option value="2000000+">$2M+</option>
              </select>
            </div>
          )}

          {showCommunitySelection && (
            <div>
              <label htmlFor="community" className="block text-sm font-medium text-gray-700 mb-2">
                Preferred Community
              </label>
              <select
                id="community"
                name="community"
                value={formData.community}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select a community</option>
                <option value="The Vistas">The Vistas</option>
                <option value="Stonebridge">Stonebridge</option>
                <option value="Redpoint">Redpoint</option>
                <option value="Reverence">Reverence</option>
                <option value="The Paseos">The Paseos</option>
                <option value="Other">Other Summerlin West Area</option>
              </select>
            </div>
          )}
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Tell us about your real estate goals..."
          />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>

        <div className="text-center text-sm text-gray-500">
          <p>By submitting this form, you agree to be contacted by Dr. Jan Duffy's team.</p>
          <div className="mt-2 flex justify-center space-x-4">
            <a
              href="tel:+17025500112"
              onClick={() => handlePhoneClick('+17025500112')}
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Call (702) 550-0112
            </a>
            <a
              href="mailto:DrJanSells@SummerlinWestRealEstate.com"
              onClick={() => handleEmailClick('DrJanSells@SummerlinWestRealEstate.com')}
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Email Us
            </a>
          </div>
        </div>
      </form>
    </div>
  );
}
