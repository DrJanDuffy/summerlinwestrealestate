'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface RealScoutTestResult {
  agentId: string;
  status: 'testing' | 'success' | 'error' | 'no-listings';
  response?: any;
  error?: string;
  listingCount?: number;
}

export default function RealScoutAgentTester() {
  const [results, setResults] = useState<RealScoutTestResult[]>([]);
  const [isTesting, setIsTesting] = useState(false);

  const testAgentIds = [
    'QWdlbnQtMjI1MDUw', // Agent-225050 (current)
    'QWdlbnQtMjI1MDUx', // Agent-225051 (test)
    'QWdlbnQtMjI1MDUy', // Agent-225052 (test)
    'QWdlbnQtMjI1MDUz', // Agent-225053 (test)
  ];

  useEffect(() => {
    const testRealScoutAgents = async () => {
      setIsTesting(true);
      const testResults: RealScoutTestResult[] = [];

      for (const agentId of testAgentIds) {
        const decodedId = Buffer.from(agentId, 'base64').toString('utf8');
        
        testResults.push({
          agentId: `${agentId} (${decodedId})`,
          status: 'testing'
        });
        
        setResults([...testResults]);

        try {
          // Test multiple API endpoints
          const endpoints = [
            `https://em.realscout.com/api/v1/agents/${agentId}/listings`,
            `https://api.realscout.com/v1/agents/${agentId}/listings`,
            `https://em.realscout.com/api/v1/listings?agentId=${agentId}`,
            `https://drjanduffy.realscout.com/api/v1/agents/${agentId}/listings`
          ];

          let success = false;
          let lastError = '';

          for (const endpoint of endpoints) {
            try {
              console.log(`Testing ${endpoint}`);
              
              const response = await fetch(endpoint, {
                method: 'GET',
                headers: {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
                },
                mode: 'cors'
              });

              if (response.ok) {
                const data = await response.json();
                console.log(`Success for ${agentId}:`, data);
                
                const listingCount = data.listings?.length || data.totalCount || 0;
                
                testResults[testResults.length - 1] = {
                  agentId: `${agentId} (${decodedId})`,
                  status: listingCount > 0 ? 'success' : 'no-listings',
                  response: data,
                  listingCount
                };
                
                success = true;
                break;
              } else {
                lastError = `HTTP ${response.status}: ${response.statusText}`;
              }
            } catch (apiError) {
              lastError = `Network Error: ${apiError}`;
            }
          }

          if (!success) {
            testResults[testResults.length - 1] = {
              agentId: `${agentId} (${decodedId})`,
              status: 'error',
              error: lastError
            };
          }

        } catch (error) {
          testResults[testResults.length - 1] = {
            agentId: `${agentId} (${decodedId})`,
            status: 'error',
            error: `Test Error: ${error}`
          };
        }

        setResults([...testResults]);
        
        // Small delay between tests
        await new Promise(resolve => setTimeout(resolve, 1000));
      }

      setIsTesting(false);
    };

    testRealScoutAgents();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-lg p-6"
    >
      <div className="text-center mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          RealScout Agent ID Testing
        </h3>
        <p className="text-gray-600 mb-4">
          Testing multiple agent IDs to identify the correct RealScout configuration
        </p>
        {isTesting && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600 mx-auto mb-2"></div>
            <p className="text-blue-800 font-medium">Testing agent IDs...</p>
          </div>
        )}
      </div>

      <div className="space-y-4">
        {results.map((result, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className={`border rounded-lg p-4 ${
              result.status === 'success' ? 'border-green-200 bg-green-50' :
              result.status === 'no-listings' ? 'border-yellow-200 bg-yellow-50' :
              result.status === 'error' ? 'border-red-200 bg-red-50' :
              'border-blue-200 bg-blue-50'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-semibold text-gray-900">
                {result.agentId}
              </h4>
              <span className={`px-2 py-1 rounded text-xs font-medium ${
                result.status === 'success' ? 'bg-green-100 text-green-800' :
                result.status === 'no-listings' ? 'bg-yellow-100 text-yellow-800' :
                result.status === 'error' ? 'bg-red-100 text-red-800' :
                'bg-blue-100 text-blue-800'
              }`}>
                {result.status === 'success' ? '✅ Success' :
                 result.status === 'no-listings' ? '⚠️ No Listings' :
                 result.status === 'error' ? '❌ Error' :
                 '⏳ Testing...'}
              </span>
            </div>

            {result.status === 'success' && (
              <div className="text-green-800">
                <p className="font-medium">Found {result.listingCount} listings!</p>
                <details className="mt-2">
                  <summary className="cursor-pointer text-sm">View Response</summary>
                  <pre className="mt-2 p-2 bg-white rounded text-xs overflow-auto max-h-32">
                    {JSON.stringify(result.response, null, 2)}
                  </pre>
                </details>
              </div>
            )}

            {result.status === 'no-listings' && (
              <div className="text-yellow-800">
                <p className="font-medium">Agent ID is valid but has no active listings</p>
                <p className="text-sm">This might be the correct agent ID but no properties are currently listed</p>
              </div>
            )}

            {result.status === 'error' && (
              <div className="text-red-800">
                <p className="font-medium">Error: {result.error}</p>
              </div>
            )}

            {result.status === 'testing' && (
              <div className="text-blue-800">
                <p className="font-medium">Testing API endpoints...</p>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      <div className="mt-6 bg-gray-50 border border-gray-200 rounded-lg p-4">
        <h4 className="font-semibold text-gray-900 mb-2">Next Steps</h4>
        <ul className="text-sm text-gray-700 space-y-1">
          <li>• If any agent ID shows "Success", we can use that for the RealScout integration</li>
          <li>• If all show "No Listings", the agent ID might be correct but inactive</li>
          <li>• If all show "Error", there might be a broader API or CORS issue</li>
          <li>• Contact RealScout support with these test results for assistance</li>
        </ul>
      </div>
    </motion.div>
  );
}
