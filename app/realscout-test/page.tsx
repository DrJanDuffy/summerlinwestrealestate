export default function RealScoutTestPage() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">RealScout Widget Test</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-xl font-semibold mb-4">Test 1: Basic RealScout Widget</h2>
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
          <realscout-office-listings
            agent-encoded-id="QWdlbnQtMjI1MDUw"
            sort-order="NEWEST"
            listing-status="For Sale"
            property-types=",SFR"
            price-min="500000"
            price-max="600000"
          />
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-xl font-semibold mb-4">Test 2: Broader Search</h2>
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
          <realscout-office-listings
            agent-encoded-id="QWdlbnQtMjI1MDUw"
            sort-order="NEWEST"
            listing-status="For Sale"
            property-types=",SFR,MF,TC"
            price-min="400000"
            price-max="2000000"
          />
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-xl font-semibold mb-4">Debug Information</h2>
          <div className="space-y-4">
            <div>
              <strong>Script Status:</strong> 
              <span id="script-status" className="ml-2 text-red-600">Checking...</span>
            </div>
            <div>
              <strong>Custom Element Status:</strong> 
              <span id="element-status" className="ml-2 text-red-600">Checking...</span>
            </div>
            <div>
              <strong>Window.RealScout:</strong> 
              <span id="window-status" className="ml-2 text-red-600">Checking...</span>
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
          });
        `
      }} />
    </div>
  );
}
