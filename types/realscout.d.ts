// TypeScript declarations for RealScout web components
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'realscout-search-widget': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
        'agent-id'?: string;
        'price-min'?: number;
        'price-max'?: number;
        location?: string;
        'show-features'?: boolean;
        'show-communities'?: boolean;
        communities?: string;
        variant?: string;
      }, HTMLElement>;
      'realscout-office-listings': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
        'agent-id'?: string;
        'price-min'?: number;
        'price-max'?: number;
        location?: string;
      }, HTMLElement>;
      'realscout-lead-capture': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
        'agent-id'?: string;
        source?: string;
        community?: string;
        'property-type'?: string;
        'price-range'?: string;
        'show-market-report'?: boolean;
        'show-valuation'?: boolean;
        'show-consultation'?: boolean;
        variant?: string;
      }, HTMLElement>;
      'realscout-market-insights': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
        'agent-id'?: string;
        location?: string;
        'show-charts'?: boolean;
        'show-trends'?: boolean;
        'show-comparisons'?: boolean;
        communities?: string;
        variant?: string;
        'update-frequency'?: string;
      }, HTMLElement>;
      'realscout-property-valuation': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
        'agent-id'?: string;
        'default-address'?: string;
        'show-comparables'?: boolean;
        'show-market-analysis'?: boolean;
        'show-investment-metrics'?: boolean;
        'show-lead-capture'?: boolean;
        variant?: string;
      }, HTMLElement>;
      'realscout-your-listings': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
        'agent-encoded-id'?: string;
        'sort-order'?: string;
        'listing-status'?: string;
        'property-types'?: string;
      }, HTMLElement>;
    }
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