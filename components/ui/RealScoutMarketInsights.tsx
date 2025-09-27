'use client';
import { useEffect } from 'react';
import MarketInsightsFeed from './MarketInsightsFeed';

interface RealScoutMarketInsightsProps {
  title?: string;
  subtitle?: string;
  variant?: 'full' | 'compact' | 'sidebar';
  showCharts?: boolean;
  showTrends?: boolean;
  showComparisons?: boolean;
  communities?: string[];
  agentId?: string;
  updateFrequency?: 'daily' | 'weekly' | 'monthly';
}

export default function RealScoutMarketInsights({
  title = "Summerlin West Market Insights",
  subtitle = "Real-time market data and trends for informed decisions",
  variant = 'full',
  showCharts = true,
  showTrends = true,
  showComparisons = true,
  communities = ['The Vistas', 'Stonebridge', 'Redpoint', 'Reverence'],
  agentId = 'QWdlbnQtMjI1MDUw',
  updateFrequency = 'daily'
}: RealScoutMarketInsightsProps) {
  
  useEffect(() => {
    // Load RealScout market insights widget script
    if (!document.querySelector('script[src*="realscout-web-components"]')) {
      const script = document.createElement('script');
      script.src = 'https://em.realscout.com/widgets/realscout-web-components.umd.js';
      script.type = 'module';
      document.head.appendChild(script);
    }

    // Add custom styling for RealScout market insights
    if (!document.querySelector('style[data-realscout-market-styles]')) {
      const style = document.createElement('style');
      style.setAttribute('data-realscout-market-styles', 'true');
      style.textContent = `
        realscout-market-insights {
          --rs-primary-color: #3A8DDE;
          --rs-secondary-color: #0A2540;
          --rs-accent-color: #16B286;
          --rs-border-radius: 12px;
          --rs-font-family: 'Inter', system-ui, sans-serif;
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
        }
        
        realscout-market-insights .rs-market-header {
          background: linear-gradient(135deg, #3A8DDE 0%, #0A2540 100%);
          color: white;
          padding: 2rem;
          border-radius: 12px 12px 0 0;
          text-align: center;
        }
        
        realscout-market-insights .rs-market-content {
          background: white;
          padding: 1.5rem;
          border-radius: 0 0 12px 12px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
        }
        
        realscout-market-insights .rs-stat-card {
          background: #f8fafc;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          padding: 1.5rem;
          text-align: center;
          transition: transform 0.3s ease;
        }
        
        realscout-market-insights .rs-stat-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 25px rgba(0,0,0,0.1);
        }
        
        realscout-market-insights .rs-stat-value {
          font-size: 2rem;
          font-weight: 700;
          color: #3A8DDE;
          margin-bottom: 0.5rem;
        }
        
        realscout-market-insights .rs-stat-label {
          font-size: 0.875rem;
          color: #6b7280;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }
        
        realscout-market-insights .rs-trend-up {
          color: #16B286;
        }
        
        realscout-market-insights .rs-trend-down {
          color: #ef4444;
        }
        
        realscout-market-insights .rs-chart-container {
          background: white;
          border-radius: 8px;
          padding: 1rem;
          margin: 1rem 0;
        }
        
        realscout-market-insights .rs-community-comparison {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 1rem;
          margin: 1rem 0;
        }
        
        realscout-market-insights .rs-insight-item {
          background: #f8fafc;
          border-left: 4px solid #3A8DDE;
          padding: 1rem;
          margin: 0.5rem 0;
          border-radius: 0 8px 8px 0;
        }
        
        realscout-market-insights .rs-insight-title {
          font-weight: 600;
          color: #0A2540;
          margin-bottom: 0.5rem;
        }
        
        realscout-market-insights .rs-insight-text {
          color: #6b7280;
          font-size: 0.875rem;
        }
      `;
      document.head.appendChild(style);
    }
  }, []);

  return (
    <div className="real-scout-market-insights">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">{title}</h2>
        <p className="text-lg text-gray-600">{subtitle}</p>
      </div>
      
      {/* RealScout Market Data Widget */}
      <div className="mb-12">
        {/* RealScout Market Insights Widget - Temporarily disabled for build */}
        <div className="bg-purple-50 border border-purple-200 rounded-lg p-8 text-center">
          <h3 className="text-xl font-semibold text-purple-900 mb-2">Live Market Data</h3>
          <p className="text-purple-700 mb-4">RealScout market insights widget will be integrated here</p>
          <a 
            href="/market-report" 
            className="inline-flex items-center px-6 py-3 bg-purple-600 text-white font-medium rounded-lg hover:bg-purple-700 transition-colors"
          >
            View Market Report
          </a>
        </div>
      </div>
      
      {/* Simplifying the Market Content Feed */}
      <div className="mt-12">
        <MarketInsightsFeed 
          maxArticles={4}
          showImages={true}
          title="Latest Market Insights from Simplifying the Market"
        />
      </div>
    </div>
  );
}
