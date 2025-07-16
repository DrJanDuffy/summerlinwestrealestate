declare namespace JSX {
  interface IntrinsicElements {
    &apos;realscout-office-listings': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      &apos;agent-encoded-id&apos;?: string;
      &apos;price-min&apos;?: string | number;
      &apos;price-max&apos;?: string | number;
      // Add other attributes as needed
    };
  }
} 