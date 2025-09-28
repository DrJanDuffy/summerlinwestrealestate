// TypeScript declarations for RealScout web components
declare namespace JSX {
  interface IntrinsicElements {
    'realscout-search-widget': {
      'agent-id'?: string;
      'price-min'?: number;
      'price-max'?: number;
      location?: string;
      'show-features'?: boolean;
      'show-communities'?: boolean;
      communities?: string;
      variant?: string;
    };
    'realscout-office-listings': {
      'agent-id'?: string;
      'price-min'?: number;
      'price-max'?: number;
      location?: string;
    };
    'realscout-lead-capture': {
      'agent-id'?: string;
      source?: string;
      community?: string;
      'property-type'?: string;
      'price-range'?: string;
      'show-market-report'?: boolean;
      'show-valuation'?: boolean;
      'show-consultation'?: boolean;
      variant?: string;
    };
    'realscout-market-insights': {
      'agent-id'?: string;
      location?: string;
      'show-charts'?: boolean;
      'show-trends'?: boolean;
      'show-comparisons'?: boolean;
      communities?: string;
      variant?: string;
      'update-frequency'?: string;
    };
    'realscout-property-valuation': {
      'agent-id'?: string;
      'default-address'?: string;
      'show-comparables'?: boolean;
      'show-market-analysis'?: boolean;
      'show-investment-metrics'?: boolean;
      'show-lead-capture'?: boolean;
      variant?: string;
    };
  }
}

// Global types for RealScout
declare global {
  namespace RealScout {
    interface WidgetConfig {
      agentId: string;
      location?: string;
      priceMin?: number;
      priceMax?: number;
      communities?: string[];
      variant?: string;
    }
  }
}