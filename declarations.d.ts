// declarations.d.ts

interface Window {
  Homebot?: any;
}

declare namespace JSX {
  interface IntrinsicElements {
    "realscout-simple-search": React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    > & {
      "agent-encoded-id"?: string;
      "aria-label"?: string;
    };
    "realscout-office-listings": React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    > & {
      "office-id"?: string;
      "office-name"?: string;
      [key: string]: any;
    };
  }
}
