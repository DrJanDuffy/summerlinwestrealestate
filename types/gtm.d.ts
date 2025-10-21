// Google Tag Manager type definitions
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
  
  // Global gtag function
  function gtag(...args: any[]): void;
}

export {};
