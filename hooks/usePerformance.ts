'use client';
import { useEffect, useCallback, useState } from 'react';

interface PerformanceMetrics {
  loadTime: number;
  renderTime: number;
  interactionTime: number;
}

/**
 * Hook for monitoring component performance
 * Helps identify slow components and optimize accordingly
 */
export function usePerformance(componentName: string) {
  const startTime = performance.now();

  const logPerformance = useCallback((metric: string, value: number) => {
    if (process.env.NODE_ENV === 'development') {
      console.log(`[Performance] ${componentName} - ${metric}: ${value.toFixed(2)}ms`);
    }
  }, [componentName]);

  const measureRender = useCallback(() => {
    const renderTime = performance.now() - startTime;
    logPerformance('Render Time', renderTime);
    return renderTime;
  }, [startTime, logPerformance]);

  const measureInteraction = useCallback((interactionName: string) => {
    return (callback: () => void) => {
      const start = performance.now();
      callback();
      const end = performance.now();
      logPerformance(`${interactionName} Interaction`, end - start);
    };
  }, [logPerformance]);

  useEffect(() => {
    const loadTime = performance.now() - startTime;
    logPerformance('Load Time', loadTime);
  }, [startTime, logPerformance]);

  return {
    measureRender,
    measureInteraction,
    logPerformance,
  };
}

/**
 * Hook for lazy loading with intersection observer
 */
export function useLazyLoad(options: IntersectionObserverInit = {}) {
  const observerOptions = {
    root: null,
    rootMargin: '50px',
    threshold: 0.1,
    ...options,
  };

  const observe = useCallback((element: HTMLElement | null, callback: () => void) => {
    if (!element) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          callback();
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    observer.observe(element);

    return () => observer.disconnect();
  }, [observerOptions]);

  return { observe };
}

/**
 * Hook for debouncing expensive operations
 */
export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}
