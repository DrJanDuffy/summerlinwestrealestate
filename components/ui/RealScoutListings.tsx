'use client';
import { useEffect, useState } from 'react';
import { waitForRealScoutElements } from '../../lib/realscout-config';

interface RealScoutListingsProps {
  agentId?: string;
  priceMin?: number;
  priceMax?: number;
  sortOrder?: string;
  listingStatus?: string;
  propertyTypes?: string;
  maxListings?: number;
  className?: string;
}

export default function RealScoutListings({
  agentId = 'QWdlbnQtMjI1MDUw',
  priceMin = 500000,
  priceMax = 1200000,
  sortOrder = 'STATUS_AND_SIGNIFICANT_CHANGE',
  listingStatus = 'For Sale',
  propertyTypes = 'SFR,MF,TC',
  maxListings = 12,
  className = '',
}: RealScoutListingsProps) {
  const [widgetLoaded, setWidgetLoaded] = useState(false);

  useEffect(() => {
    const loadWidget = async () => {
      try {
        // Wait for RealScout elements to be defined
        const elementsLoaded = await waitForRealScoutElements(10000);

        if (elementsLoaded) {
          setWidgetLoaded(true);
        }
      } catch (error) {
        console.error('Error loading RealScout listings widget:', error);
      }
    };

    loadWidget();

    // Add the styles if they don't exist
    if (!document.querySelector('style[data-realscout-listings-styles]')) {
      const style = document.createElement('style');
      style.setAttribute('data-realscout-listings-styles', 'true');
      style.textContent = `
        realscout-office-listings {
          --rs-listing-divider-color: rgb(101, 141, 172);
          --rs-primary-color: #3A8DDE;
          --rs-secondary-color: #0A2540;
          --rs-accent-color: #16B286;
          --rs-border-radius: 12px;
          --rs-font-family: 'Inter', system-ui, sans-serif;
          width: 100%;
        }
        
        realscout-office-listings .rs-listing-card {
          border: 1px solid #e5e7eb;
          border-radius: 12px;
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        
        realscout-office-listings .rs-listing-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
        }
        
        realscout-office-listings .rs-listing-image {
          width: 100%;
          height: 200px;
          object-fit: cover;
        }
        
        realscout-office-listings .rs-listing-details {
          padding: 1rem;
        }
        
        realscout-office-listings .rs-listing-price {
          font-size: 1.5rem;
          font-weight: 700;
          color: #3A8DDE;
          margin-bottom: 0.5rem;
        }
        
        realscout-office-listings .rs-listing-address {
          color: #6b7280;
          font-size: 0.875rem;
          margin-bottom: 0.5rem;
        }
        
        realscout-office-listings .rs-listing-features {
          display: flex;
          gap: 1rem;
          font-size: 0.875rem;
          color: #6b7280;
        }
        
        realscout-office-listings .rs-listing-status {
          display: inline-block;
          padding: 0.25rem 0.75rem;
          border-radius: 9999px;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        
        realscout-office-listings .rs-listing-status.new {
          background: #dcfce7;
          color: #166534;
        }
        
        realscout-office-listings .rs-listing-status.price-change {
          background: #fef3c7;
          color: #92400e;
        }
        
        realscout-office-listings .rs-listing-status.regular {
          background: #f3f4f6;
          color: #374151;
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  return (
    <div className={`real-scout-listings-container ${className}`}>
      {/* RealScout Listings Widget */}
      <div className="widget-container">
        {widgetLoaded ? (
          // @ts-expect-error - RealScout web component
          <realscout-office-listings
            agent-encoded-id={agentId}
            sort-order={sortOrder}
            listing-status={listingStatus}
            property-types={propertyTypes}
            price-min={priceMin.toString()}
            price-max={priceMax.toString()}
            max-listings={maxListings}
            show-features={true}
            show-communities={true}
            communities="The Vistas,Stonebridge,Redpoint,Reverence"
            location="Summerlin West, Las Vegas, NV"
          />
        ) : (
          <div className="bg-orange-50 border border-orange-200 rounded-lg p-8 text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-600 mx-auto mb-4"></div>
            <h3 className="text-xl font-semibold text-orange-900 mb-2">
              Loading Property Listings
            </h3>
            <p className="text-orange-700 mb-4">Preparing MLS data for Summerlin West...</p>
            <p className="text-sm text-orange-600">Powered by RealScout</p>
          </div>
        )}
      </div>
    </div>
  );
}
