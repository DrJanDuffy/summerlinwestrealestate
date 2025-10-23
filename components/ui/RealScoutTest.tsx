'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface RealScoutTestProps {
  className?: string;
}

export default function RealScoutTest({ className = '' }: RealScoutTestProps) {
  const [debugInfo, setDebugInfo] = useState<any>({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkRealScout = () => {
      if (typeof window === 'undefined') return;

      const script = document.querySelector('script[src*="realscout-web-components"]');
      const customElement = customElements.get('realscout-office-listings');
      
      const info = {
        scriptFound: !!script,
        scriptSrc: script?.getAttribute('src') || 'Not found',
        customElementAvailable: !!customElement,
        allCustomElements: Array.from(customElements.entries?.() || []),
        windowRealScout: !!(window as any).RealScout,
        documentReady: document.readyState,
        timestamp: new Date().toISOString()
      };

      setDebugInfo(info);
      setIsLoading(false);
    };

    // Check immediately
    checkRealScout();

    // Check again after a delay
    const timeoutId = setTimeout(checkRealScout, 2000);
    
    return () => clearTimeout(timeoutId);
  }, []);

  if (isLoading) {
    return (
      <div className={`bg-blue-50 border border-blue-200 rounded-lg p-6 ${className}`}>
        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-blue-700 text-center">Checking RealScout status...</p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`bg-white border border-gray-200 rounded-lg p-6 ${className}`}
    >
      <h3 className="text-lg font-semibold text-gray-900 mb-4">RealScout Debug Information</h3>
      
      <div className="space-y-3 text-sm">
        <div className="flex justify-between">
          <span className="font-medium">Script Found:</span>
          <span className={debugInfo.scriptFound ? 'text-green-600' : 'text-red-600'}>
            {debugInfo.scriptFound ? 'Yes' : 'No'}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span className="font-medium">Script Source:</span>
          <span className="text-gray-600 text-xs break-all">{debugInfo.scriptSrc}</span>
        </div>
        
        <div className="flex justify-between">
          <span className="font-medium">Custom Element Available:</span>
          <span className={debugInfo.customElementAvailable ? 'text-green-600' : 'text-red-600'}>
            {debugInfo.customElementAvailable ? 'Yes' : 'No'}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span className="font-medium">Document Ready:</span>
          <span className="text-gray-600">{debugInfo.documentReady}</span>
        </div>
        
        <div className="flex justify-between">
          <span className="font-medium">Window RealScout:</span>
          <span className={debugInfo.windowRealScout ? 'text-green-600' : 'text-red-600'}>
            {debugInfo.windowRealScout ? 'Yes' : 'No'}
          </span>
        </div>
        
        {debugInfo.allCustomElements.length > 0 && (
          <div>
            <span className="font-medium">Available Custom Elements:</span>
            <div className="mt-1 text-xs text-gray-600">
              {debugInfo.allCustomElements.map(([name]: [string]) => (
                <div key={name}>• {name}</div>
              ))}
            </div>
          </div>
        )}
        
        <div className="flex justify-between">
          <span className="font-medium">Last Checked:</span>
          <span className="text-gray-600 text-xs">{new Date(debugInfo.timestamp).toLocaleTimeString()}</span>
        </div>
      </div>
    </motion.div>
  );
}
