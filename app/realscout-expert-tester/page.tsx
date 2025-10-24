'use client';

import { useState } from 'react';

interface TestConfig {
  id: string;
  name: string;
  scriptUrl: string;
  widgetType: string;
  agentId: string;
  params: Record<string, string>;
}

export default function RealScoutExpertTester() {
  const [activeTest, setActiveTest] = useState<string | null>(null);
  const [testResults, setTestResults] = useState<Record<string, any>>({});

  const testConfigs: TestConfig[] = [
    {
      id: 'config1',
      name: 'Original Configuration',
      scriptUrl: 'https://em.realscout.com/widgets/realscout-web-components.umd.js',
      widgetType: 'realscout-office-listings',
      agentId: 'QWdlbnQtMjI1MDUw',
      params: {
        'sort-order': 'NEWEST',
        'listing-status': 'For Sale',
        'property-types': ',SFR',
        'price-min': '500000',
        'price-max': '600000'
      }
    },
    {
      id: 'config2',
      name: 'Broader Search',
      scriptUrl: 'https://em.realscout.com/widgets/realscout-web-components.umd.js',
      widgetType: 'realscout-office-listings',
      agentId: 'QWdlbnQtMjI1MDUw',
      params: {
        'sort-order': 'NEWEST',
        'listing-status': 'For Sale,For Rent,In Contract',
        'property-types': ',SFR,MF,TC',
        'price-min': '300000',
        'price-max': '2000000'
      }
    },
    {
      id: 'config3',
      name: 'Alternative Script URL',
      scriptUrl: 'https://em.realscout.com/widgets/realscout-web-components.js',
      widgetType: 'realscout-office-listings',
      agentId: 'QWdlbnQtMjI1MDUw',
      params: {
        'sort-order': 'NEWEST',
        'listing-status': 'For Sale',
        'property-types': ',SFR',
        'price-min': '500000',
        'price-max': '600000'
      }
    },
    {
      id: 'config4',
      name: 'Your Listings Widget',
      scriptUrl: 'https://em.realscout.com/widgets/realscout-web-components.umd.js',
      widgetType: 'realscout-your-listings',
      agentId: 'QWdlbnQtMjI1MDUw',
      params: {
        'sort-order': 'NEWEST',
        'listing-status': 'For Sale,For Rent,In Contract',
        'property-types': ',SFR,MF,TC,LAL,MOBILE,OTHER',
        'price-min': '300000',
        'price-max': '3000000'
      }
    }
  ];

  const runTest = async (config: TestConfig) => {
    setActiveTest(config.id);
    setTestResults(prev => ({
      ...prev,
      [config.id]: { status: 'running', startTime: Date.now() }
    }));

    // Clear any existing widgets
    const existingWidgets = document.querySelectorAll('realscout-office-listings, realscout-your-listings');
    existingWidgets.forEach(widget => widget.remove());

    // Create test container
    const testContainer = document.getElementById(`test-${config.id}`);
    if (!testContainer) return;

    // Clear container
    testContainer.innerHTML = '';

    // Add loading indicator
    const loadingDiv = document.createElement('div');
    loadingDiv.className = 'flex items-center justify-center p-8 bg-gray-100 rounded-lg';
    loadingDiv.innerHTML = `
      <div class="text-center">
        <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p class="text-gray-600">Testing ${config.name}...</p>
      </div>
    `;
    testContainer.appendChild(loadingDiv);

    // Create script element
    const script = document.createElement('script');
    script.src = config.scriptUrl;
    script.type = 'module';
    script.id = `test-script-${config.id}`;

    // Create widget element
    const widget = document.createElement(config.widgetType);
    widget.setAttribute('agent-encoded-id', config.agentId);
    Object.entries(config.params).forEach(([key, value]) => {
      widget.setAttribute(key, value);
    });

    // Add styles
    const style = document.createElement('style');
    style.textContent = `
      ${config.widgetType} {
        --rs-listing-divider-color: #0e64c8;
        width: 100%;
        min-height: 300px;
        border: 2px solid #e5e7eb;
        padding: 16px;
        margin: 16px 0;
      }
    `;
    testContainer.appendChild(style);

    // Monitor widget loading
    let attempts = 0;
    const maxAttempts = 20;
    const checkInterval = setInterval(() => {
      attempts++;
      
      // Check if widget has content
      if (widget.children.length > 0) {
        clearInterval(checkInterval);
        setTestResults(prev => ({
          ...prev,
          [config.id]: {
            status: 'success',
            duration: Date.now() - prev[config.id].startTime,
            message: `Widget loaded successfully with ${widget.children.length} children`
          }
        }));
        return;
      }

      // Check for custom element registration
      if (customElements.get(config.widgetType)) {
        clearInterval(checkInterval);
        setTestResults(prev => ({
          ...prev,
          [config.id]: {
            status: 'partial',
            duration: Date.now() - prev[config.id].startTime,
            message: 'Custom element registered but no content loaded'
          }
        }));
        return;
      }

      // Timeout
      if (attempts >= maxAttempts) {
        clearInterval(checkInterval);
        setTestResults(prev => ({
          ...prev,
          [config.id]: {
            status: 'failed',
            duration: Date.now() - prev[config.id].startTime,
            message: 'Widget failed to load within timeout period'
          }
        }));
      }
    }, 500);

    // Load script and widget
    script.onload = () => {
      testContainer.appendChild(widget);
    };

    script.onerror = () => {
      clearInterval(checkInterval);
      setTestResults(prev => ({
        ...prev,
        [config.id]: {
          status: 'error',
          duration: Date.now() - prev[config.id].startTime,
          message: 'Script failed to load'
        }
      }));
    };

    document.head.appendChild(script);

    // Cleanup after test
    setTimeout(() => {
      script.remove();
      setActiveTest(null);
    }, 15000);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'success': return 'text-green-600 bg-green-50';
      case 'partial': return 'text-yellow-600 bg-yellow-50';
      case 'failed': return 'text-red-600 bg-red-50';
      case 'error': return 'text-red-600 bg-red-50';
      case 'running': return 'text-blue-600 bg-blue-50';
      default: return 'text-gray-600 bg-gray-50';
    }
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">RealScout Expert Configuration Tester</h1>
      
      <div className="grid gap-6">
        {testConfigs.map((config) => (
          <div key={config.id} className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex justify-between items-center mb-4">
              <div>
                <h2 className="text-xl font-semibold">{config.name}</h2>
                <p className="text-gray-600 text-sm">
                  {config.widgetType} • {config.scriptUrl.split('/').pop()}
                </p>
              </div>
              <button
                onClick={() => runTest(config)}
                disabled={activeTest === config.id}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50"
              >
                {activeTest === config.id ? 'Testing...' : 'Test Configuration'}
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
              <div>
                <strong>Agent ID:</strong> {config.agentId}
              </div>
              <div>
                <strong>Widget Type:</strong> {config.widgetType}
              </div>
              <div className="col-span-2">
                <strong>Parameters:</strong>
                <pre className="mt-1 p-2 bg-gray-100 rounded text-xs">
                  {JSON.stringify(config.params, null, 2)}
                </pre>
              </div>
            </div>

            {testResults[config.id] && (
              <div className={`p-3 rounded-lg ${getStatusColor(testResults[config.id].status)}`}>
                <div className="flex justify-between items-center">
                  <span className="font-semibold">
                    {testResults[config.id].status.toUpperCase()}
                  </span>
                  <span className="text-sm">
                    {testResults[config.id].duration}ms
                  </span>
                </div>
                <p className="text-sm mt-1">{testResults[config.id].message}</p>
              </div>
            )}

            <div id={`test-${config.id}`} className="mt-4 min-h-[200px]">
              {/* Test results will appear here */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
