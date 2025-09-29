'use client';

import { useEffect, useState } from 'react';
import { waitForRealScoutElements } from '../../lib/realscout-config';

export default function RealScoutTestWidget() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [testResults, setTestResults] = useState<string[]>([]);

  useEffect(() => {
    const testWidget = async () => {
      try {
        const elementsReady = await waitForRealScoutElements(10000);
        
        if (elementsReady) {
          console.log('RealScout elements loaded successfully');
          setTestResults(prev => [...prev, '✅ RealScout elements loaded']);
          setIsLoaded(true);
        } else {
          console.error('RealScout elements failed to load');
          setTestResults(prev => [...prev, '❌ RealScout elements failed to load']);
          setError('RealScout widgets failed to load within timeout');
        }
      } catch (err) {
        console.error('RealScout widget loading error:', err);
        setTestResults(prev => [...prev, `❌ Error: ${err instanceof Error ? err.message : 'Unknown error'}`]);
        setError(err instanceof Error ? err.message : 'Unknown error loading RealScout widgets');
      }
    };

    testWidget();
  }, []);

  const addTestResult = (_result: string) => {
    // Function for future use
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-8">
      <h2 className="text-2xl font-bold mb-6">RealScout Widget Test</h2>
      
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-3">Test Results:</h3>
        <div className="bg-gray-50 p-4 rounded">
          {testResults.map((result, index) => (
            <div key={index} className="text-sm font-mono">{result}</div>
          ))}
        </div>
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
          <h3 className="text-red-900 font-semibold mb-2">Error:</h3>
          <p className="text-red-700">{error}</p>
        </div>
      )}

      {!isLoaded && !error && (
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-2"></div>
          <p className="text-blue-700 text-center">Loading RealScout widgets...</p>
        </div>
      )}

      {isLoaded && (
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">Test 1: Basic Widget</h3>
            <div className="border border-gray-200 rounded p-4">
              {/* @ts-ignore - RealScout web component */}
              <realscout-office-listings
                agent-id="QWdlbnQtMjI1MDUw"
                price-min="400000"
                price-max="2000000"
                location="Summerlin West, Las Vegas, NV"
              />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Test 2: With Additional Parameters</h3>
            <div className="border border-gray-200 rounded p-4">
              {/* @ts-ignore - RealScout web component */}
              <realscout-office-listings
                agent-id="QWdlbnQtMjI1MDUw"
                price-min="500000"
                price-max="1500000"
                location="Summerlin West, Las Vegas, NV"
                sort-order="PRICE_LOW"
                listing-status="For Sale"
                property-types="SFR"
                max-listings={6}
              />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Test 3: Search Widget</h3>
            <div className="border border-gray-200 rounded p-4">
              {/* @ts-ignore - RealScout web component */}
              <realscout-search-widget
                agent-id="QWdlbnQtMjI1MDUw"
                price-min="400000"
                price-max="2000000"
                location="Summerlin West, Las Vegas, NV"
              />
            </div>
          </div>
        </div>
      )}

      <div className="mt-6 text-sm text-gray-600">
        <p><strong>Agent ID:</strong> QWdlbnQtMjI1MDUw</p>
        <p><strong>Location:</strong> Summerlin West, Las Vegas, NV</p>
        <p><strong>Price Range:</strong> $400,000 - $2,000,000</p>
      </div>
    </div>
  );
}
