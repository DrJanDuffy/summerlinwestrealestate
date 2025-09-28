/**
 * RealScout Configuration
 * Integrates with Cloudflare Worker for optimal performance
 */

export const REAL_SCOUT_CONFIG = {
  // Script source - can be from Cloudflare Worker or direct
  SCRIPT_URL: process.env.REALSCOUT_SCRIPT_URL || 'https://em.realscout.com/widgets/realscout-web-components.umd.js',
  
  // Cloudflare Worker endpoint (if using)
  WORKER_URL: process.env.REALSCOUT_WORKER_URL || null,
  
  // Agent ID for Dr. Jan Duffy
  AGENT_ID: 'QWdlbnQtMjI1MDUw',
  
  // Default locations and settings
  DEFAULT_LOCATION: 'Summerlin West, Las Vegas, NV',
  DEFAULT_PRICE_MIN: 400000,
  DEFAULT_PRICE_MAX: 2000000,
  
  // Widget variants
  VARIANTS: {
    SEARCH: 'search',
    LISTINGS: 'listings',
    LEAD_CAPTURE: 'lead-capture',
    MARKET_INSIGHTS: 'market-insights',
    PROPERTY_VALUATION: 'property-valuation',
  } as const,
} as const;

/**
 * Check if RealScout script is loaded
 */
export const isRealScoutLoaded = (): boolean => {
  if (typeof window === 'undefined') return false;
  
  return !!(
    document.querySelector('script[src*="realscout-web-components"]') ||
    customElements.get('realscout-search-widget') ||
    customElements.get('realscout-office-listings') ||
    customElements.get('realscout-lead-capture')
  );
};

/**
 * Wait for RealScout custom elements to be defined
 */
export const waitForRealScoutElements = (timeout = 5000): Promise<boolean> => {
  return new Promise((resolve) => {
    if (typeof window === 'undefined') {
      resolve(false);
      return;
    }

    const checkElements = () => {
      const hasElements = !!(
        customElements.get('realscout-search-widget') ||
        customElements.get('realscout-office-listings') ||
        customElements.get('realscout-lead-capture')
      );
      
      if (hasElements) {
        resolve(true);
        return;
      }
      
      setTimeout(checkElements, 100);
    };

    // Start checking immediately
    checkElements();
    
    // Timeout after specified time
    setTimeout(() => resolve(false), timeout);
  });
};

/**
 * Get the appropriate script source based on environment
 */
export const getRealScoutScriptSource = (): string => {
  // If Cloudflare Worker is configured, use it
  if (REAL_SCOUT_CONFIG.WORKER_URL) {
    return REAL_SCOUT_CONFIG.WORKER_URL;
  }
  
  // Otherwise use the direct script URL
  return REAL_SCOUT_CONFIG.SCRIPT_URL;
};
