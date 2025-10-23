'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface RealScoutDiagnosticProps {
  className?: string;
}

export default function RealScoutDiagnostic({ className = '' }: RealScoutDiagnosticProps) {
  const [diagnostics, setDiagnostics] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const runDiagnostics = async () => {
      try {
        setIsLoading(true);
        
        // Test our proxy endpoint
        const proxyResponse = await fetch('/api/realscout-proxy?agentId=QWdlbnQtMjI1MDUw');
        const proxyData = await proxyResponse.json();
        
        // Check script loading
        const scriptLoaded = typeof window !== 'undefined' && 
          !!document.querySelector('script[src*="realscout-web-components"]');
        
        // Check custom elements
        const customElementsAvailable = typeof window !== 'undefined' && 
          (!!customElements.get('realscout-office-listings') ||
           !!customElements.get('realscout-your-listings') ||
           !!customElements.get('realscout-search-widget'));
        
        // Check environment variables
        const envVars = {
          REALSCOUT_OFFICE_ID: process.env.NEXT_PUBLIC_REALSCOUT_OFFICE_ID || 'Not set',
          REALSCOUT_SCRIPT_URL: process.env.REALSCOUT_SCRIPT_URL || 'Not set'
        };
        
        setDiagnostics({
          timestamp: new Date().toISOString(),
          scriptLoaded,
          customElementsAvailable,
          proxyData,
          envVars,
          userAgent: typeof window !== 'undefined' ? navigator.userAgent : 'Server-side',
          url: typeof window !== 'undefined' ? window.location.href : 'Server-side'
        });
        
      } catch (error) {
        console.error('Diagnostic error:', error);
        setDiagnostics({
          error: `Diagnostic failed: ${error}`,
          timestamp: new Date().toISOString()
        });
      } finally {
        setIsLoading(false);
      }
    };

    runDiagnostics();
  }, []);

  if (isLoading) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`realscout-diagnostic-container ${className}`}
      >
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-8 text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <h3 className="text-lg font-semibold text-blue-900 mb-2">
            Running RealScout Diagnostics
          </h3>
          <p className="text-blue-700">Analyzing configuration and connectivity...</p>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`realscout-diagnostic-container ${className}`}
    >
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">
          RealScout Diagnostic Report
        </h3>
        
        {diagnostics?.error ? (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
            <h4 className="font-semibold text-red-900 mb-2">Diagnostic Error</h4>
            <p className="text-red-800">{diagnostics.error}</p>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Script Status */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-3">Script Loading Status</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center justify-between">
                  <span>Script Loaded:</span>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    diagnostics?.scriptLoaded ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {diagnostics?.scriptLoaded ? '✅ Yes' : '❌ No'}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Custom Elements:</span>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    diagnostics?.customElementsAvailable ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {diagnostics?.customElementsAvailable ? '✅ Available' : '❌ Not Available'}
                  </span>
                </div>
              </div>
            </div>

            {/* Environment Variables */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-3">Environment Variables</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>REALSCOUT_OFFICE_ID:</span>
                  <code className="text-xs bg-gray-200 px-2 py-1 rounded">
                    {diagnostics?.envVars?.REALSCOUT_OFFICE_ID}
                  </code>
                </div>
                <div className="flex justify-between">
                  <span>REALSCOUT_SCRIPT_URL:</span>
                  <code className="text-xs bg-gray-200 px-2 py-1 rounded">
                    {diagnostics?.envVars?.REALSCOUT_SCRIPT_URL}
                  </code>
                </div>
              </div>
            </div>

            {/* Proxy API Results */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <h4 className="font-semibold text-gray-900 mb-3">Proxy API Results</h4>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>API Success:</span>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${
                    diagnostics?.proxyData?.success ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                  }`}>
                    {diagnostics?.proxyData?.success ? '✅ Success' : '❌ Failed'}
                  </span>
                </div>
                {diagnostics?.proxyData?.endpoint && (
                  <div className="flex justify-between">
                    <span>Endpoint:</span>
                    <code className="text-xs bg-gray-200 px-2 py-1 rounded">
                      {diagnostics.proxyData.endpoint}
                    </code>
                  </div>
                )}
                {diagnostics?.proxyData?.error && (
                  <div className="flex justify-between">
                    <span>Error:</span>
                    <span className="text-red-600 text-sm">{diagnostics.proxyData.error}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Recommendations */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-semibold text-blue-900 mb-3">Recommendations</h4>
              <ul className="text-sm text-blue-800 space-y-1">
                {!diagnostics?.scriptLoaded && (
                  <li>• <strong>Script Issue:</strong> RealScout script not loading. Check layout.tsx</li>
                )}
                {!diagnostics?.customElementsAvailable && (
                  <li>• <strong>Elements Issue:</strong> Custom elements not available. Script may not be loaded properly</li>
                )}
                {diagnostics?.envVars?.REALSCOUT_OFFICE_ID === 'Not set' && (
                  <li>• <strong>Office ID:</strong> Set NEXT_PUBLIC_REALSCOUT_OFFICE_ID environment variable</li>
                )}
                {!diagnostics?.proxyData?.success && (
                  <li>• <strong>API Issue:</strong> RealScout API not responding. Agent ID may be invalid or inactive</li>
                )}
                <li>• <strong>Contact RealScout:</strong> Provide this diagnostic report to RealScout support</li>
                <li>• <strong>Verify Agent ID:</strong> Confirm Agent-225050 is correct and active</li>
              </ul>
            </div>

            {/* Raw Data */}
            <details className="bg-gray-50 border border-gray-200 rounded-lg p-4">
              <summary className="cursor-pointer font-semibold text-gray-900 mb-2">
                Raw Diagnostic Data
              </summary>
              <pre className="text-xs bg-white p-3 rounded border overflow-auto max-h-64">
                {JSON.stringify(diagnostics, null, 2)}
              </pre>
            </details>
          </div>
        )}
      </div>
    </motion.div>
  );
}
