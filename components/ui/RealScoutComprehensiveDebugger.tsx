'use client';

import { useEffect, useState } from 'react';

interface RealScoutStatus {
  scriptLoaded: boolean;
  customElementsAvailable: boolean;
  agentId: string;
  apiResponse: any;
  errors: string[];
  networkStatus: 'checking' | 'success' | 'error';
}

export default function RealScoutComprehensiveDebugger() {
  const [status, setStatus] = useState<RealScoutStatus>({
    scriptLoaded: false,
    customElementsAvailable: false,
    agentId: 'QWdlbnQtMjI1MDUw',
    apiResponse: null,
    errors: [],
    networkStatus: 'checking'
  });

  useEffect(() => {
    const checkRealScoutComprehensive = async () => {
      try {
        // Check script loading
        const scriptElement = document.querySelector('script[src*="realscout-web-components"]');
        const scriptLoaded = !!scriptElement;

        // Check custom elements
        const customElementsAvailable = !!(
          customElements.get('realscout-search-widget') ||
          customElements.get('realscout-office-listings') ||
          customElements.get('realscout-your-listings') ||
          customElements.get('realscout-lead-capture')
        );

        // Test API connectivity
        let apiResponse = null;
        let networkStatus: 'checking' | 'success' | 'error' = 'checking';
        
        try {
          // Test RealScout API endpoint
          const testResponse = await fetch('https://em.realscout.com/api/v1/agents/QWdlbnQtMjI1MDUw/listings', {
            method: 'GET',
            headers: {
              'Accept': 'application/json',
            },
            mode: 'cors'
          });
          
          if (testResponse.ok) {
            apiResponse = await testResponse.json();
            networkStatus = 'success';
          } else {
            networkStatus = 'error';
            apiResponse = { error: `HTTP ${testResponse.status}: ${testResponse.statusText}` };
          }
        } catch (apiError) {
          networkStatus = 'error';
          apiResponse = { error: `API Error: ${apiError}` };
        }

        setStatus({
          scriptLoaded,
          customElementsAvailable,
          agentId: 'QWdlbnQtMjI1MDUw',
          apiResponse,
          errors: [],
          networkStatus
        });

      } catch (error) {
        setStatus(prev => ({
          ...prev,
          errors: [...prev.errors, `Debug Error: ${error}`]
        }));
      }
    };

    // Check immediately
    checkRealScoutComprehensive();
    
    // Check every 5 seconds
    const interval = setInterval(checkRealScoutComprehensive, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-50 border border-gray-300 rounded-lg p-6 text-sm">
      <h3 className="font-bold text-gray-800 mb-4 text-lg">RealScout Comprehensive Debug</h3>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Script Status */}
        <div className="bg-white p-4 rounded-lg border">
          <h4 className="font-semibold text-gray-700 mb-3">Script & Elements</h4>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span>Script Loaded:</span>
              <span className={`px-2 py-1 rounded text-xs ${
                status.scriptLoaded ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              }`}>
                {status.scriptLoaded ? '✅ Yes' : '❌ No'}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span>Custom Elements:</span>
              <span className={`px-2 py-1 rounded text-xs ${
                status.customElementsAvailable ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              }`}>
                {status.customElementsAvailable ? '✅ Available' : '❌ Not Available'}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <span>Agent ID:</span>
              <code className="text-xs bg-gray-200 px-2 py-1 rounded">{status.agentId}</code>
            </div>
          </div>
        </div>

        {/* API Status */}
        <div className="bg-white p-4 rounded-lg border">
          <h4 className="font-semibold text-gray-700 mb-3">API Connectivity</h4>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span>Network Status:</span>
              <span className={`px-2 py-1 rounded text-xs ${
                status.networkStatus === 'success' ? 'bg-green-100 text-green-800' :
                status.networkStatus === 'error' ? 'bg-red-100 text-red-800' :
                'bg-yellow-100 text-yellow-800'
              }`}>
                {status.networkStatus === 'success' ? '✅ Success' :
                 status.networkStatus === 'error' ? '❌ Error' :
                 '⏳ Checking...'}
              </span>
            </div>
            {status.apiResponse && (
              <div className="mt-2">
                <details className="text-xs">
                  <summary className="cursor-pointer text-blue-600 hover:text-blue-800">
                    API Response Details
                  </summary>
                  <pre className="mt-2 p-2 bg-gray-100 rounded text-xs overflow-auto max-h-32">
                    {JSON.stringify(status.apiResponse, null, 2)}
                  </pre>
                </details>
              </div>
            )}
          </div>
        </div>

        {/* Errors */}
        {status.errors.length > 0 && (
          <div className="lg:col-span-2 bg-white p-4 rounded-lg border">
            <h4 className="font-semibold text-red-700 mb-3">Errors</h4>
            <ul className="space-y-1">
              {status.errors.map((error, index) => (
                <li key={index} className="text-red-600 text-xs">❌ {error}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Quick Actions */}
        <div className="lg:col-span-2 bg-blue-50 p-4 rounded-lg border border-blue-200">
          <h4 className="font-semibold text-blue-800 mb-3">Quick Actions</h4>
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => window.location.reload()}
              className="px-3 py-1 bg-blue-600 text-white rounded text-xs hover:bg-blue-700"
            >
              Reload Page
            </button>
            <button
              onClick={() => {
                // Force reload RealScout script
                const existingScript = document.querySelector('script[src*="realscout-web-components"]');
                if (existingScript) {
                  existingScript.remove();
                }
                const script = document.createElement('script');
                script.src = 'https://em.realscout.com/widgets/realscout-web-components.umd.js';
                script.type = 'module';
                document.head.appendChild(script);
              }}
              className="px-3 py-1 bg-green-600 text-white rounded text-xs hover:bg-green-700"
            >
              Reload Script
            </button>
            <button
              onClick={() => {
                // Test different agent ID
                console.log('Testing with different agent ID...');
              }}
              className="px-3 py-1 bg-purple-600 text-white rounded text-xs hover:bg-purple-700"
            >
              Test Different Agent
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
