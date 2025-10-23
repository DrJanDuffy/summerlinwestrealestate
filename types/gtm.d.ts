// Google Tag Manager and Facebook Pixel type definitions
declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
    gtag: (...args: unknown[]) => void;
    fbq: (...args: unknown[]) => void;
  }

  // Global functions
  function gtag(...args: unknown[]): void;
  function fbq(...args: unknown[]): void;
}

export {};
