// Global TypeScript declarations for RealScout custom elements

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'realscout-search-widget': {
        'agent-encoded-id'?: string;
        'search-type'?: string;
        'show-features'?: boolean;
        'price-min'?: number;
        'price-max'?: number;
        communities?: string;
        'property-types'?: string;
        'sort-order'?: string;
        'results-per-page'?: string;
        'show-map'?: boolean;
        'show-filters'?: boolean;
        theme?: string;
        variant?: string;
        [key: string]: any;
      };
      'realscout-lead-capture-widget': {
        'agent-encoded-id'?: string;
        source?: string;
        'show-market-report'?: boolean;
        'show-valuation'?: boolean;
        'show-consultation'?: boolean;
        variant?: string;
        [key: string]: any;
      };
      'realscout-market-insights-widget': {
        'agent-encoded-id'?: string;
        variant?: string;
        'show-charts'?: boolean;
        'show-trends'?: boolean;
        'show-comparisons'?: boolean;
        [key: string]: any;
      };
      'realscout-property-valuation-widget': {
        'agent-encoded-id'?: string;
        variant?: string;
        [key: string]: any;
      };
      'realscout-market-insights': {
        'agent-encoded-id'?: string;
        title?: string;
        subtitle?: string;
        variant?: string;
        'show-charts'?: boolean;
        'show-trends'?: boolean;
        'show-comparisons'?: boolean;
        communities?: string;
        'update-frequency'?: string;
        'data-points'?: string;
        'time-period'?: string;
        'show-forecasts'?: string;
        'show-seasonal-trends'?: string;
        'show-neighborhood-comparison'?: string;
        'show-price-distribution'?: string;
        'show-market-velocity'?: string;
        theme?: string;
        'interactive-charts'?: string;
        'export-enabled'?: string;
        'share-enabled'?: string;
        [key: string]: any;
      };
    }
  }
}

export {};
