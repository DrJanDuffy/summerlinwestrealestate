'use client';

import { useEffect } from 'react';

export default function GooglePageSpeedOptimization() {
  useEffect(() => {
    // Google PageSpeed optimization strategies
    const optimizePageSpeed = () => {
      // 1. Image optimization
      const optimizeImages = () => {
        const images = document.querySelectorAll('img');
        images.forEach((img) => {
          // Add loading="lazy" for below-the-fold images
          if (!img.getAttribute('loading')) {
            img.setAttribute('loading', 'lazy');
          }
          
          // Add decoding="async" for better performance
          if (!img.getAttribute('decoding')) {
            img.setAttribute('decoding', 'async');
          }
          
          // Add fetchpriority="high" for above-the-fold images
          const rect = img.getBoundingClientRect();
          if (rect.top < window.innerHeight && rect.bottom > 0) {
            img.setAttribute('fetchpriority', 'high');
          }
        });
      };

      // 2. Font optimization
      const optimizeFonts = () => {
        // Preload critical fonts
        const criticalFonts = [
          'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
          'https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&display=swap'
        ];
        
        criticalFonts.forEach((fontUrl) => {
          const link = document.createElement('link');
          link.rel = 'preload';
          link.as = 'style';
          link.href = fontUrl;
          document.head.appendChild(link);
        });

        // Add font-display: swap to existing font links
        const fontLinks = document.querySelectorAll('link[href*="fonts.googleapis.com"]');
        fontLinks.forEach((link) => {
          const linkElement = link as HTMLLinkElement;
          if (!linkElement.href.includes('display=swap')) {
            linkElement.href += (linkElement.href.includes('?') ? '&' : '?') + 'display=swap';
          }
        });
      };

      // 3. Resource hints
      const addResourceHints = () => {
        const hints = [
          { rel: 'dns-prefetch', href: 'https://www.google-analytics.com' },
          { rel: 'dns-prefetch', href: 'https://www.googletagmanager.com' },
          { rel: 'dns-prefetch', href: 'https://fonts.googleapis.com' },
          { rel: 'dns-prefetch', href: 'https://fonts.gstatic.com' },
          { rel: 'dns-prefetch', href: 'https://images.unsplash.com' },
          { rel: 'preconnect', href: 'https://www.google-analytics.com' },
          { rel: 'preconnect', href: 'https://www.googletagmanager.com' },
          { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
          { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
        ];

        hints.forEach((hint) => {
          const link = document.createElement('link');
          link.rel = hint.rel;
          link.href = hint.href;
          document.head.appendChild(link);
        });
      };

      // 4. Critical resource preloading
      const preloadCriticalResources = () => {
        const criticalResources = [
          '/images/og-image.svg',
          '/images/logo.png',
          '/manifest.json'
        ];

        criticalResources.forEach((resource) => {
          const link = document.createElement('link');
          link.rel = 'preload';
          link.as = resource.endsWith('.json') ? 'fetch' : 'image';
          link.href = resource;
          if (resource.endsWith('.json')) {
            link.crossOrigin = 'anonymous';
          }
          document.head.appendChild(link);
        });
      };

      // 5. JavaScript optimization
      const optimizeJavaScript = () => {
        // Defer non-critical scripts
        const scripts = document.querySelectorAll('script[src]');
        scripts.forEach((script) => {
          if (!script.hasAttribute('defer') && !script.hasAttribute('async')) {
            const src = script.getAttribute('src');
            if (src && !src.includes('critical') && !src.includes('analytics')) {
              script.setAttribute('defer', '');
            }
          }
        });
      };

      // 6. CSS optimization
      const optimizeCSS = () => {
        // Add critical CSS inline
        const criticalCSS = `
          /* Critical CSS for above-the-fold content */
          body { font-family: Inter, sans-serif; }
          .hero { background: linear-gradient(135deg, #1e40af, #7c3aed); }
          .container { max-width: 1200px; margin: 0 auto; padding: 0 1rem; }
        `;
        
        const style = document.createElement('style');
        style.textContent = criticalCSS;
        document.head.appendChild(style);
      };

      // 7. Third-party script optimization
      const optimizeThirdPartyScripts = () => {
        // Load third-party scripts after page load
        const thirdPartyScripts = [
          'https://www.facebook.net/en_US/fbevents.js',
          'https://www.googletagmanager.com/gtag/js'
        ];

        thirdPartyScripts.forEach((src) => {
          const script = document.createElement('script');
          script.src = src;
          script.async = true;
          script.defer = true;
          document.head.appendChild(script);
        });
      };

      // 8. Service Worker for caching
      const registerServiceWorker = () => {
        if ('serviceWorker' in navigator) {
          navigator.serviceWorker.register('/sw.js')
            .then((registration) => {
              console.log('Service Worker registered:', registration);
            })
            .catch((error) => {
              console.log('Service Worker registration failed:', error);
            });
        }
      };

      // Run all optimizations
      optimizeImages();
      optimizeFonts();
      addResourceHints();
      preloadCriticalResources();
      optimizeJavaScript();
      optimizeCSS();
      optimizeThirdPartyScripts();
      registerServiceWorker();

      // Track PageSpeed optimization
      if ((window as any).gtag) {
        (window as any).gtag('event', 'pagespeed_optimization', {
          event_category: 'Performance',
          event_label: 'PageSpeed Optimization Applied',
          value: 1,
        });
      }
    };

    // Run optimizations after page load
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', optimizePageSpeed);
    } else {
      optimizePageSpeed();
    }

    // Monitor Core Web Vitals
    const monitorCoreWebVitals = () => {
      // LCP (Largest Contentful Paint)
      const observer = new PerformanceObserver((list) => {
        const entries = list.getEntries();
        const lastEntry = entries[entries.length - 1];
        
        if ((window as any).gtag) {
          (window as any).gtag('event', 'web_vital', {
            event_category: 'Core Web Vitals',
            event_label: 'LCP',
            value: Math.round(lastEntry.startTime),
            non_interaction: true,
          });
        }
      });

      observer.observe({ entryTypes: ['largest-contentful-paint'] });

      // CLS (Cumulative Layout Shift)
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          const layoutShiftEntry = entry as any; // LayoutShift entry type
          if (!layoutShiftEntry.hadRecentInput) {
            clsValue += layoutShiftEntry.value;
          }
        }
        
        if ((window as any).gtag) {
          (window as any).gtag('event', 'web_vital', {
            event_category: 'Core Web Vitals',
            event_label: 'CLS',
            value: Math.round(clsValue * 1000),
            non_interaction: true,
          });
        }
      });

      clsObserver.observe({ entryTypes: ['layout-shift'] });

      // FID (First Input Delay)
      const fidObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          const eventTimingEntry = entry as any; // Cast to access processingStart
          if ((window as any).gtag) {
            (window as any).gtag('event', 'web_vital', {
              event_category: 'Core Web Vitals',
              event_label: 'FID',
              value: Math.round(eventTimingEntry.processingStart - eventTimingEntry.startTime),
              non_interaction: true,
            });
          }
        }
      });

      fidObserver.observe({ entryTypes: ['first-input'] });
    };

    // Monitor Core Web Vitals after page load
    setTimeout(monitorCoreWebVitals, 1000);

  }, []);

  return null; // This component doesn't render anything
}
