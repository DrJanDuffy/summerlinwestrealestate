'use client';

export default function RealScoutDebugPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">RealScout Debug Center</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Test 1: Your Exact Config */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4 text-blue-600">Test 1: Your Exact Config</h2>
            <div className="text-sm text-gray-600 mb-4">
              <p>Agent ID: QWdlbnQtMjI1MDUw</p>
              <p>Status: For Sale</p>
              <p>Types: ,SFR</p>
              <p>Price: $500K - $600K</p>
            </div>
            <style dangerouslySetInnerHTML={{
              __html: `
                realscout-office-listings {
                  --rs-listing-divider-color: #0e64c8;
                  width: 100%;
                  min-height: 300px;
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

          {/* Test 2: Broader Search */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4 text-green-600">Test 2: Broader Search</h2>
            <div className="text-sm text-gray-600 mb-4">
              <p>Agent ID: QWdlbnQtMjI1MDUw</p>
              <p>Status: For Sale</p>
              <p>Types: ,SFR,MF,TC</p>
              <p>Price: $400K - $2M</p>
            </div>
            <style dangerouslySetInnerHTML={{
              __html: `
                realscout-office-listings {
                  --rs-listing-divider-color: #0e64c8;
                  width: 100%;
                  min-height: 300px;
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
              property-types=",SFR,MF,TC"
              price-min="400000"
              price-max="2000000"
            />
          </div>

          {/* Test 3: Different Agent ID */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4 text-purple-600">Test 3: Different Agent ID</h2>
            <div className="text-sm text-gray-600 mb-4">
              <p>Agent ID: QWdlbnQtMjI1MDUw (same)</p>
              <p>Status: For Sale, For Rent</p>
              <p>Types: ,SFR</p>
              <p>Price: $300K - $3M</p>
            </div>
            <style dangerouslySetInnerHTML={{
              __html: `
                realscout-office-listings {
                  --rs-listing-divider-color: #0e64c8;
                  width: 100%;
                  min-height: 300px;
                  border: 2px solid #e5e7eb;
                  padding: 16px;
                }
              `
            }} />
            {/* @ts-ignore - RealScout web component */}
            <realscout-office-listings
              agent-encoded-id="QWdlbnQtMjI1MDUw"
              sort-order="PRICE_LOW"
              listing-status="For Sale,For Rent"
              property-types=",SFR"
              price-min="300000"
              price-max="3000000"
            />
          </div>

          {/* Test 4: Minimal Config */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4 text-orange-600">Test 4: Minimal Config</h2>
            <div className="text-sm text-gray-600 mb-4">
              <p>Agent ID: QWdlbnQtMjI1MDUw</p>
              <p>Status: For Sale</p>
              <p>Types: (all)</p>
              <p>Price: (all)</p>
            </div>
            <style dangerouslySetInnerHTML={{
              __html: `
                realscout-office-listings {
                  --rs-listing-divider-color: #0e64c8;
                  width: 100%;
                  min-height: 300px;
                  border: 2px solid #e5e7eb;
                  padding: 16px;
                }
              `
            }} />
            {/* @ts-ignore - RealScout web component */}
            <realscout-office-listings
              agent-encoded-id="QWdlbnQtMjI1MDUw"
            />
          </div>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Debug Information</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <strong>Script Status:</strong> 
              <span id="script-status" className="ml-2 text-red-600">Checking...</span>
            </div>
            <div>
              <strong>Custom Element:</strong> 
              <span id="element-status" className="ml-2 text-red-600">Checking...</span>
            </div>
            <div>
              <strong>Window.RealScout:</strong> 
              <span id="window-status" className="ml-2 text-red-600">Checking...</span>
            </div>
            <div>
              <strong>Ready State:</strong> 
              <span id="ready-state" className="ml-2 text-blue-600">Checking...</span>
            </div>
          </div>
        </div>
      </div>

      <script dangerouslySetInnerHTML={{
        __html: `
          document.addEventListener('DOMContentLoaded', function() {
            // Check script status
            const script = document.querySelector('script[src*="realscout-web-components"]');
            const scriptStatus = document.getElementById('script-status');
            if (script) {
              scriptStatus.textContent = 'Loaded';
              scriptStatus.className = 'ml-2 text-green-600';
            } else {
              scriptStatus.textContent = 'Not Found';
              scriptStatus.className = 'ml-2 text-red-600';
            }

            // Check custom element status
            const elementStatus = document.getElementById('element-status');
            if (customElements.get('realscout-office-listings')) {
              elementStatus.textContent = 'Available';
              elementStatus.className = 'ml-2 text-green-600';
            } else {
              elementStatus.textContent = 'Not Available';
              elementStatus.className = 'ml-2 text-red-600';
            }

            // Check window.RealScout
            const windowStatus = document.getElementById('window-status');
            if (window.RealScout) {
              windowStatus.textContent = 'Available';
              windowStatus.className = 'ml-2 text-green-600';
            } else {
              windowStatus.textContent = 'Not Available';
              windowStatus.className = 'ml-2 text-red-600';
            }

            // Check document ready state
            const readyState = document.getElementById('ready-state');
            readyState.textContent = document.readyState;
            readyState.className = 'ml-2 text-blue-600';

            console.log('RealScout Debug Info:');
            console.log('Script:', script);
            console.log('Custom Element:', customElements.get('realscout-office-listings'));
            console.log('Window.RealScout:', window.RealScout);
            console.log('Ready State:', document.readyState);
          });

          // Check again after delay
          setTimeout(function() {
            console.log('Delayed check (5s):');
            console.log('Custom Element:', customElements.get('realscout-office-listings'));
            console.log('Window.RealScout:', window.RealScout);
          }, 5000);
        `
      }} />
    </div>
  );
}
