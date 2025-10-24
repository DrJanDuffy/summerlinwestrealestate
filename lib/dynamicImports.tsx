import dynamic from 'next/dynamic';

/**
 * Optimized dynamic imports with consistent loading configurations
 * Reduces bundle size by code-splitting heavy components
 */

// Form components - heavy due to validation libraries
export const LeadCaptureForm = dynamic(() => import('../components/ui/LeadCaptureForm'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center p-8">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
    </div>
  ),
});

export const VistasLeadForm = dynamic(() => import('../components/ui/VistasLeadForm'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center p-8">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
    </div>
  ),
});

// RealScout components removed - using alternative solutions

// Market insights - heavy due to data processing
export const LatestMarketInsights = dynamic(() => import('../components/ui/LatestMarketInsights'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center p-8">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
    </div>
  ),
});

export const LatestMarketInsightsClient = dynamic(
  () => import('../components/ui/LatestMarketInsightsClient'),
  {
    ssr: false,
    loading: () => (
      <div className="flex items-center justify-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    ),
  }
);

// Testimonials - heavy due to animations
export const TestimonialsSection = dynamic(() => import('../components/ui/TestimonialsSection'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center p-8">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
    </div>
  ),
});

export const TestimonialsSectionClient = dynamic(
  () => import('../components/ui/TestimonialsSectionClient'),
  {
    ssr: false,
    loading: () => (
      <div className="flex items-center justify-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    ),
  }
);

// Homebot widget - external service
export const HomebotWidget = dynamic(() => import('../components/ui/HomebotWidget'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center p-8">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
    </div>
  ),
});

// Featured slider - heavy due to animations and images
export const FeaturedHomeSlider = dynamic(() => import('../components/ui/FeaturedHomeSlider'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center p-8">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
    </div>
  ),
});

// RealScout Components removed - using alternative lead generation tools

// Market Insights Feed - integrates Simplifying the Market content
export const MarketInsightsFeed = dynamic(() => import('../components/ui/MarketInsightsFeed'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center p-8">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
    </div>
  ),
});
