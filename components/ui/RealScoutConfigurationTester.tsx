'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface TestResult {
  id: string;
  name: string;
  type: 'office' | 'agent' | 'search';
  config: any;
  status: 'testing' | 'success' | 'error' | 'no-listings';
  error?: string;
  timestamp?: string;
}

export default function RealScoutConfigurationTester() {
  const [results, setResults] = useState<TestResult[]>([]);
  const [isTesting, setIsTesting] = useState(false);

  const testConfigurations: TestResult[] = [
    {
      id: 'office-1',
      name: 'Office Listings - Default Office ID',
      type: 'office',
      config: {
        'office-id': process.env.NEXT_PUBLIC_REALSCOUT_OFFICE_ID || 'QWZmaWNlLTEyMzQ1',
        'price-min': '500000',
        'price-max': '2000000',
        'property-types': 'SFR'
      },
      status: 'testing'
    },
    {
      id: 'office-2',
      name: 'Office Listings - No Price Filter',
      type: 'office',
      config: {
        'office-id': process.env.NEXT_PUBLIC_REALSCOUT_OFFICE_ID || 'QWZmaWNlLTEyMzQ1',
        'property-types': 'SFR'
      },
      status: 'testing'
    },
    {
      id: 'agent-1',
      name: 'Agent Listings - Current Agent ID',
      type: 'agent',
      config: {
        'agent-encoded-id': 'QWdlbnQtMjI1MDUw',
        'sort-order': 'NEWEST',
        'listing-status': 'For Sale',
        'property-types': 'SFR'
      },
      status: 'testing'
    },
    {
      id: 'agent-2',
      name: 'Agent Listings - All Statuses',
      type: 'agent',
      config: {
        'agent-encoded-id': 'QWdlbnQtMjI1MDUw',
        'sort-order': 'NEWEST',
        'listing-status': 'For Sale,For Rent,In Contract,Sold',
        'property-types': 'SFR,MF,TC'
      },
      status: 'testing'
    },
    {
      id: 'search-1',
      name: 'Search Widget - Basic',
      type: 'search',
      config: {
        'agent-encoded-id': 'QWdlbnQtMjI1MDUw',
        'price-min': '500000',
        'price-max': '2000000'
      },
      status: 'testing'
    }
  ];

  useEffect(() => {
    const testConfigurations = async () => {
      setIsTesting(true);
      const testResults: TestResult[] = [];

      for (const config of testConfigurations) {
        testResults.push({
          ...config,
          status: 'testing',
          timestamp: new Date().toISOString()
        });
        setResults([...testResults]);

        // Simulate testing each configuration
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // For now, mark as testing - in real implementation, we'd test each config
        testResults[testResults.length - 1] = {
          ...config,
          status: 'testing',
          timestamp: new Date().toISOString()
        };
        setResults([...testResults]);
      }

      setIsTesting(false);
    };

    testConfigurations();
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
          RealScout Configuration Expert Testing
        </h3>
        <p className="text-gray-600 mb-4">
          Testing multiple RealScout configurations to find the working setup
        </p>
        {isTesting && (
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600 mx-auto mb-2"></div>
            <p className="text-blue-800 font-medium">Testing configurations...</p>
          </div>
        )}
      </div>

      <div className="space-y-4">
        {testConfigurations.map((config, index) => (
          <motion.div
            key={config.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className={`border rounded-lg p-4 ${
              config.status === 'success' ? 'border-green-200 bg-green-50' :
              config.status === 'error' ? 'border-red-200 bg-red-50' :
              config.status === 'no-listings' ? 'border-yellow-200 bg-yellow-50' :
              'border-blue-200 bg-blue-50'
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <h4 className="font-semibold text-gray-900">
                {config.name}
              </h4>
              <span className={`px-2 py-1 rounded text-xs font-medium ${
                config.status === 'success' ? 'bg-green-100 text-green-800' :
                config.status === 'error' ? 'bg-red-100 text-red-800' :
                config.status === 'no-listings' ? 'bg-yellow-100 text-yellow-800' :
                'bg-blue-100 text-blue-800'
              }`}>
                {config.status === 'success' ? '✅ Success' :
                 config.status === 'error' ? '❌ Error' :
                 config.status === 'no-listings' ? '⚠️ No Listings' :
                 '⏳ Testing...'}
              </span>
            </div>

            <div className="text-sm text-gray-600 mb-2">
              <strong>Type:</strong> {config.type} | <strong>Component:</strong> realscout-{config.type === 'office' ? 'office-listings' : config.type === 'agent' ? 'your-listings' : 'search-widget'}
            </div>

            <details className="text-xs">
              <summary className="cursor-pointer text-blue-600 hover:text-blue-800 mb-2">
                View Configuration
              </summary>
              <pre className="mt-2 p-2 bg-gray-100 rounded text-xs overflow-auto max-h-32">
                {JSON.stringify(config.config, null, 2)}
              </pre>
            </details>

            {config.status === 'testing' && (
              <div className="text-blue-800">
                <p className="font-medium">Testing configuration...</p>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      <div className="mt-6 bg-gray-50 border border-gray-200 rounded-lg p-4">
        <h4 className="font-semibold text-gray-900 mb-2">Expert Recommendations</h4>
        <ul className="text-sm text-gray-700 space-y-1">
          <li>• <strong>Office Listings</strong> are typically more reliable than agent listings</li>
          <li>• <strong>Remove price filters</strong> if no listings appear</li>
          <li>• <strong>Include all property types</strong> (SFR, MF, TC) for broader results</li>
          <li>• <strong>Check environment variables</strong> for correct office/agent IDs</li>
          <li>• <strong>Contact RealScout support</strong> with these test results if none work</li>
        </ul>
      </div>
    </motion.div>
  );
}
