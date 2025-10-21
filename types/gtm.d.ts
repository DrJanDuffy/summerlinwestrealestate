// Google Tag Manager and Facebook Pixel type definitions
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
    fbq: (...args: any[]) => void;
  }
  
  // Global functions
  function gtag(...args: any[]): void;
  function fbq(...args: any[]): void;
}

export {};
