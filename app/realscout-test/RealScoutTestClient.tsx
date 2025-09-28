'use client';

import RealScoutWidgetDebug from '../../../components/ui/RealScoutWidgetDebug';
import RealScoutWidgetSimple from '../../../components/ui/RealScoutWidgetSimple';
import RealScoutWidgetTraditional from '../../../components/ui/RealScoutWidgetTraditional';

export default function RealScoutTestClient() {
  const checkRealScoutStatus = () => {
    console.log('Checking for RealScout script...');
    const script = document.querySelector('script[src*="realscout-web-components"]');
    console.log('RealScout script found:', script);
    
    console.log('Checking custom elements...');
    console.log('realscout-search-widget defined:', !!customElements.get('realscout-search-widget'));
    console.log('realscout-office-listings defined:', !!customElements.get('realscout-office-listings'));
    console.log('realscout-lead-capture defined:', !!customElements.get('realscout-lead-capture'));
  };

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          RealScout Widget Test Page
        </h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Debug Widget */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              RealScout Widget Debug
            </h2>
            <RealScoutWidgetDebug variant="search" />
          </div>
          
          {/* Simple Widget */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              RealScout Widget Simple
            </h2>
            <RealScoutWidgetSimple variant="search" />
          </div>
          
          {/* Lead Capture Widget */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              RealScout Lead Capture
            </h2>
            <RealScoutWidgetSimple variant="lead-capture" />
          </div>
          
          {/* Listings Widget */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              RealScout Listings
            </h2>
            <RealScoutWidgetSimple variant="listings" />
          </div>
        </div>
        
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Traditional Search Widget */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Traditional Search Widget
            </h2>
            <RealScoutWidgetTraditional variant="search" />
          </div>
          
          {/* Traditional Lead Capture */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Traditional Lead Capture
            </h2>
            <RealScoutWidgetTraditional variant="lead-capture" />
          </div>
          
          {/* Traditional Listings */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">
              Traditional Listings
            </h2>
            <RealScoutWidgetTraditional variant="listings" />
          </div>
        </div>
        
        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">
            Manual RealScout Script Test
          </h2>
          <p className="text-gray-600 mb-4">
            Check the browser console for RealScout script loading information.
          </p>
          <button 
            type="button"
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            onClick={checkRealScoutStatus}
          >
            Check RealScout Status
          </button>
        </div>
      </div>
    </div>
  );
}
