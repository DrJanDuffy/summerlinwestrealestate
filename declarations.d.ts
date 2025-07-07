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
  }
}
