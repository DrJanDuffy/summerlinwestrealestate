'use client';

import { useState } from 'react';

export default function RealScoutExpertDebugPage() {
  const [diagnostics, setDiagnostics] = useState<any[]>([]);
  const [isRunning, setIsRunning] = useState(false);

  const addDiagnostic = (message: string, type: 'info' | 'success' | 'error' | 'warning') => {
    setDiagnostics(prev => [...prev, {
      timestamp: new Date().toLocaleTimeString(),
      message,
      type
    }]);
  };

  const runExpertDiagnostics = async () => {
    setIsRunning(true);
    setDiagnostics([]);
    
    addDiagnostic('🔬 Starting RealScout Expert Diagnostics', 'info');
    
    // Test 1: Script Loading
    addDiagnostic('📜 Testing script loading...', 'info');
    const script = document.querySelector('script[src*="realscout-web-components"]') as HTMLScriptElement;
    if (script) {
      addDiagnostic(`✅ Script found: ${script.src}`, 'success');
      addDiagnostic(`📊 Script complete: ${script.complete}`, 'info');
      addDiagnostic(`📊 Script readyState: ${script.readyState}`, 'info');
    } else {
      addDiagnostic('❌ Script element not found', 'error');
    }

    // Test 2: Custom Elements Registry
    addDiagnostic('🔧 Testing custom elements registry...', 'info');
    if (customElements && customElements.get) {
      addDiagnostic('✅ Custom elements registry available', 'success');
      const realscoutElement = customElements.get('realscout-office-listings');
      if (realscoutElement) {
        addDiagnostic('✅ realscout-office-listings element registered', 'success');
      } else {
        addDiagnostic('❌ realscout-office-listings element not registered', 'error');
      }
    } else {
      addDiagnostic('❌ Custom elements registry not available', 'error');
    }

    // Test 3: Window Object
    addDiagnostic('🌐 Testing window.RealScout object...', 'info');
    if (window.RealScout) {
      addDiagnostic(`✅ window.RealScout found: ${typeof window.RealScout}`, 'success');
      addDiagnostic(`📊 RealScout methods: ${Object.keys(window.RealScout).join(', ')}`, 'info');
    } else {
      addDiagnostic('❌ window.RealScout not available', 'error');
    }

    // Test 4: DOM Elements
    addDiagnostic('🔍 Testing DOM elements...', 'info');
    const realscoutElements = document.querySelectorAll('realscout-office-listings');
    addDiagnostic(`📊 Found ${realscoutElements.length} realscout-office-listings elements`, 'info');
    
    realscoutElements.forEach((element, index) => {
      addDiagnostic(`📊 Element ${index + 1}: ${element.children.length} children`, 'info');
      addDiagnostic(`📊 Element ${index + 1} attributes: ${Array.from(element.attributes).map(attr => `${attr.name}="${attr.value}"`).join(', ')}`, 'info');
    });

    // Test 5: Network Test
    addDiagnostic('🌐 Testing network connectivity...', 'info');
    try {
      await fetch('https://em.realscout.com/widgets/realscout-web-components.umd.js', {
        method: 'HEAD',
        mode: 'no-cors'
      });
      addDiagnostic('✅ RealScout script URL accessible', 'success');
    } catch (error) {
      addDiagnostic(`❌ Network error: ${error}`, 'error');
    }

    // Test 6: Agent ID Validation
    addDiagnostic('🆔 Testing agent ID...', 'info');
    const agentId = 'QWdlbnQtMjI1MDUw';
    addDiagnostic(`📊 Agent ID: ${agentId}`, 'info');
    
    // Decode agent ID for verification
    try {
      const decoded = atob(agentId);
      addDiagnostic(`📊 Decoded agent ID: ${decoded}`, 'info');
    } catch (error) {
      addDiagnostic(`❌ Agent ID decode error: ${error}`, 'error');
    }

    // Test 7: Alternative Script Loading
    addDiagnostic('🔄 Testing alternative script loading...', 'info');
    const testScript = document.createElement('script');
    testScript.src = 'https://em.realscout.com/widgets/realscout-web-components.umd.js';
    testScript.type = 'module';
    testScript.onload = () => {
      addDiagnostic('✅ Alternative script loaded successfully', 'success');
    };
    testScript.onerror = () => {
      addDiagnostic('❌ Alternative script failed to load', 'error');
    };
    
    // Don't actually append to avoid conflicts
    addDiagnostic('📊 Alternative script test prepared (not executed)', 'info');

    addDiagnostic('🏁 Expert diagnostics complete', 'success');
    setIsRunning(false);
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'success': return 'text-green-600';
      case 'error': return 'text-red-600';
      case 'warning': return 'text-yellow-600';
      default: return 'text-blue-600';
    }
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">RealScout Expert Diagnostic Center</h1>
      
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Expert Diagnostic Tools</h2>
        <button
          onClick={runExpertDiagnostics}
          disabled={isRunning}
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 disabled:opacity-50"
        >
          {isRunning ? 'Running Diagnostics...' : 'Run Expert Diagnostics'}
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h2 className="text-xl font-semibold mb-4">Test Widget</h2>
        <div className="border-2 border-dashed border-gray-300 p-4 rounded-lg">
          <style dangerouslySetInnerHTML={{
            __html: `
              realscout-office-listings {
                --rs-listing-divider-color: #0e64c8;
                width: 100%;
                min-height: 200px;
                border: 2px solid #e5e7eb;
                padding: 16px;
              }
            `
          }} />
          {/* @ts-ignore - RealScout web component */}
          <realscout-office-listings
            agent-encoded-id="QWdlbnQtMjI1MDUw"
            sort-order="NEWEST"
            listing-status="For Sale"
            property-types=",SFR"
            price-min="500000"
            price-max="600000"
          />
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Diagnostic Results</h2>
        <div className="space-y-2 max-h-96 overflow-y-auto">
          {diagnostics.map((diagnostic, index) => (
            <div key={index} className={`p-2 rounded ${getTypeColor(diagnostic.type)}`}>
              <span className="text-sm text-gray-500">[{diagnostic.timestamp}]</span> {diagnostic.message}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
