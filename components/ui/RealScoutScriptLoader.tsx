'use client';

import { useEffect, useState } from 'react';

interface RealScoutScriptLoaderProps {
  onLoad?: () => void;
  onError?: (error: Error) => void;
}

export default function RealScoutScriptLoader({ onLoad, onError }: RealScoutScriptLoaderProps) {
  const [status, setStatus] = useState<'loading' | 'loaded' | 'error'>('loading');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadRealScoutScript = async () => {
      try {
        // Check if script is already loaded
        const existingScript = document.querySelector('script[src*="realscout-web-components"]');
        if (existingScript) {
          console.log('RealScout script already loaded');
          setStatus('loaded');
          onLoad?.();
          return;
        }

        // Create and load the script
        const script = document.createElement('script');
        script.src = 'https://em.realscout.com/widgets/realscout-web-components.umd.js';
        script.type = 'module';
        script.async = true;
        
        script.onload = () => {
          console.log('RealScout script loaded successfully');
          setStatus('loaded');
          onLoad?.();
        };
        
        script.onerror = (e) => {
          const errorMsg = 'Failed to load RealScout script';
          console.error(errorMsg, e);
          setError(errorMsg);
          setStatus('error');
          onError?.(new Error(errorMsg));
        };

        document.head.appendChild(script);

        // Wait for custom elements to be defined
        const checkCustomElements = () => {
          const elementNames = [
            'realscout-search-widget',
            'realscout-office-listings',
            'realscout-your-listings',
            'realscout-lead-capture'
          ];
          
          const hasElements = elementNames.some(name => customElements.get(name));
          
          if (hasElements) {
            console.log('RealScout custom elements are available');
            return true;
          }
          
          return false;
        };

        // Check every 100ms for up to 10 seconds
        let attempts = 0;
        const maxAttempts = 100;
        
        const checkInterval = setInterval(() => {
          attempts++;
          
          if (checkCustomElements()) {
            clearInterval(checkInterval);
            return;
          }
          
          if (attempts >= maxAttempts) {
            clearInterval(checkInterval);
            const timeoutError = 'RealScout custom elements not available after timeout';
            console.warn(timeoutError);
            setError(timeoutError);
            setStatus('error');
            onError?.(new Error(timeoutError));
          }
        }, 100);

      } catch (err) {
        const errorMsg = `Error loading RealScout script: ${err}`;
        console.error(errorMsg);
        setError(errorMsg);
        setStatus('error');
        onError?.(err as Error);
      }
    };

    loadRealScoutScript();
  }, [onLoad, onError]);

  return (
    <div className="text-sm text-gray-600">
      RealScout Status: 
      <span className={`ml-2 px-2 py-1 rounded text-xs ${
        status === 'loading' ? 'bg-yellow-100 text-yellow-800' :
        status === 'loaded' ? 'bg-green-100 text-green-800' :
        'bg-red-100 text-red-800'
      }`}>
        {status === 'loading' ? 'Loading...' : 
         status === 'loaded' ? 'Loaded' : 
         'Error'}
      </span>
      {error && <div className="mt-1 text-red-600 text-xs">{error}</div>}
    </div>
  );
}
