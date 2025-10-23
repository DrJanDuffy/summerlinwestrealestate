'use client';

import { useEffect, useState } from 'react';

interface DebugInfo {
  scriptLoaded: boolean;
  scriptElement: Element | null;
  customElements: string[];
  windowObject: boolean;
  documentObject: boolean;
  scriptUrl: string;
  errors: string[];
}

export default function RealScoutDebugger() {
  const [debugInfo, setDebugInfo] = useState<DebugInfo>({
    scriptLoaded: false,
    scriptElement: null,
    customElements: [],
    windowObject: false,
    documentObject: false,
    scriptUrl: '',
    errors: []
  });

  useEffect(() => {
    const checkRealScoutStatus = () => {
      try {
        const scriptElement = document.querySelector('script[src*="realscout-web-components"]');
        const scriptUrl = scriptElement?.getAttribute('src') || 'Not found';
        
        // Check for custom elements
        const customElementsList: string[] = [];
        const elementNames = [
          'realscout-search-widget',
          'realscout-office-listings',
          'realscout-your-listings',
          'realscout-lead-capture',
          'realscout-advanced-search',
          'realscout-simple-search'
        ];
        
        elementNames.forEach(name => {
          if (customElements.get(name)) {
            customElementsList.push(name);
          }
        });

        setDebugInfo({
          scriptLoaded: !!scriptElement,
          scriptElement,
          customElements: customElementsList,
          windowObject: typeof window !== 'undefined',
          documentObject: typeof document !== 'undefined',
          scriptUrl,
          errors: []
        });
      } catch (error) {
        setDebugInfo(prev => ({
          ...prev,
          errors: [...prev.errors, `Error checking RealScout: ${error}`]
        }));
      }
    };

    // Check immediately
    checkRealScoutStatus();
    
    // Check every 2 seconds
    const interval = setInterval(checkRealScoutStatus, 2000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-100 border border-gray-300 rounded-lg p-4 text-sm">
      <h3 className="font-bold text-gray-800 mb-3">RealScout Debug Information</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h4 className="font-semibold text-gray-700 mb-2">Environment</h4>
          <ul className="space-y-1 text-gray-600">
            <li>Window Object: {debugInfo.windowObject ? '✅ Available' : '❌ Not Available'}</li>
            <li>Document Object: {debugInfo.documentObject ? '✅ Available' : '❌ Not Available'}</li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-semibold text-gray-700 mb-2">Script Loading</h4>
          <ul className="space-y-1 text-gray-600">
            <li>Script Loaded: {debugInfo.scriptLoaded ? '✅ Yes' : '❌ No'}</li>
            <li>Script URL: <code className="text-xs bg-gray-200 px-1 rounded">{debugInfo.scriptUrl}</code></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-semibold text-gray-700 mb-2">Custom Elements</h4>
          {debugInfo.customElements.length > 0 ? (
            <ul className="space-y-1 text-gray-600">
              {debugInfo.customElements.map(element => (
                <li key={element}>✅ {element}</li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600">❌ No custom elements found</p>
          )}
        </div>
        
        <div>
          <h4 className="font-semibold text-gray-700 mb-2">Errors</h4>
          {debugInfo.errors.length > 0 ? (
            <ul className="space-y-1 text-red-600">
              {debugInfo.errors.map((error, index) => (
                <li key={index}>❌ {error}</li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600">✅ No errors detected</p>
          )}
        </div>
      </div>
      
      <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded">
        <h4 className="font-semibold text-blue-800 mb-2">Quick Actions</h4>
        <div className="space-x-2">
          <button
            onClick={() => window.location.reload()}
            className="px-3 py-1 bg-blue-600 text-white rounded text-xs hover:bg-blue-700"
          >
            Reload Page
          </button>
          <button
            onClick={() => {
              // Check script status without reloading
              const existingScript = document.querySelector('script[src*="realscout-web-components"]');
              if (existingScript) {
                console.log('RealScout script found:', existingScript);
                alert('RealScout script is already loaded. Check console for details.');
              } else {
                alert('RealScout script not found. Check layout.tsx for script loading.');
              }
            }}
            className="px-3 py-1 bg-green-600 text-white rounded text-xs hover:bg-green-700"
          >
            Check Script Status
          </button>
        </div>
      </div>
    </div>
  );
}
