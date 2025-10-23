'use client';

import { useEffect } from 'react';

interface CoreWebVitalsProps {
  measurementId?: string;
}

export default function CoreWebVitals({ measurementId }: CoreWebVitalsProps) {
  useEffect(() => {
    // Only run in browser environment
    if (typeof window === 'undefined') return;

    // Import web-vitals library dynamically
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      // Core Web Vitals tracking
      getCLS((metric) => {
        console.log('CLS:', metric);
        if (measurementId) {
          // Send to Google Analytics
          (window as any).gtag?.('event', 'web_vitals', {
            event_category: 'Web Vitals',
            event_label: 'CLS',
            value: Math.round(metric.value * 1000),
            non_interaction: true,
          });
        }
      });

      getFID((metric) => {
        console.log('FID:', metric);
        if (measurementId) {
          (window as any).gtag?.('event', 'web_vitals', {
            event_category: 'Web Vitals',
            event_label: 'FID',
            value: Math.round(metric.value),
            non_interaction: true,
          });
        }
      });

      getFCP((metric) => {
        console.log('FCP:', metric);
        if (measurementId) {
          (window as any).gtag?.('event', 'web_vitals', {
            event_category: 'Web Vitals',
            event_label: 'FCP',
            value: Math.round(metric.value),
            non_interaction: true,
          });
        }
      });

      getLCP((metric) => {
        console.log('LCP:', metric);
        if (measurementId) {
          (window as any).gtag?.('event', 'web_vitals', {
            event_category: 'Web Vitals',
            event_label: 'LCP',
            value: Math.round(metric.value),
            non_interaction: true,
          });
        }
      });

      getTTFB((metric) => {
        console.log('TTFB:', metric);
        if (measurementId) {
          (window as any).gtag?.('event', 'web_vitals', {
            event_category: 'Web Vitals',
            event_label: 'TTFB',
            value: Math.round(metric.value),
            non_interaction: true,
          });
        }
      });
    });

    // Performance optimization functions
    const optimizeImages = () => {
      const images = document.querySelectorAll('img');
      images.forEach((img) => {
        // Add loading="lazy" if not already present
        if (!img.getAttribute('loading')) {
          img.setAttribute('loading', 'lazy');
        }

        // Add decoding="async" for better performance
        if (!img.getAttribute('decoding')) {
          img.setAttribute('decoding', 'async');
        }
      });
    };

    const optimizeFonts = () => {
      // Preload critical fonts
      const criticalFonts = [
        'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
      ];

      criticalFonts.forEach((fontUrl) => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'style';
        link.href = fontUrl;
        document.head.appendChild(link);
      });
    };

    const optimizeResources = () => {
      // Preload critical resources
      const criticalResources = ['/images/og-image.svg', '/images/logo.png'];

      criticalResources.forEach((resource) => {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.as = 'image';
        link.href = resource;
        document.head.appendChild(link);
      });
    };

    // Run optimizations
    optimizeImages();
    optimizeFonts();
    optimizeResources();

    // Service Worker registration for caching
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/sw.js')
        .then((registration) => {
          console.log('SW registered: ', registration);
        })
        .catch((registrationError) => {
          console.log('SW registration failed: ', registrationError);
        });
    }
  }, [measurementId]);

  return null; // This component doesn't render anything
}
