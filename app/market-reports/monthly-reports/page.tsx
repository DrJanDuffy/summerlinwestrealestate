import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Monthly Market Reports | Summerlin West Real Estate | Dr. Jan Duffy',
  description:
    'Get detailed monthly market reports for Summerlin West real estate. Expert analysis, trends, and insights from Dr. Jan Duffy, REALTOR® with $6B+ in sales.',
  keywords: [
    'Summerlin West market reports',
    'Las Vegas real estate trends',
    'monthly market analysis',
    'The Vistas market data',
    'Stonebridge sales trends',
    'Redpoint market insights',
    'Dr. Jan Duffy market reports',
    'Summerlin West statistics',
    'luxury real estate trends',
    'Las Vegas market analysis',
  ],
  openGraph: {
    title: 'Monthly Market Reports | Summerlin West Real Estate | Dr. Jan Duffy',
    description:
      'Get detailed monthly market reports for Summerlin West real estate. Expert analysis, trends, and insights from Dr. Jan Duffy.',
    url: 'https://www.summerlinwestrealestate.com/market-reports/monthly-reports',
    siteName: 'Summerlin West Real Estate',
    images: [
      {
        url: '/images/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Monthly Market Reports - Summerlin West Real Estate',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: '/market-reports/monthly-reports',
  },
};

export default function MonthlyReports() {
  const monthlyReports = [
    {
      month: 'October 2025',
      title: 'Fall Market Shows Strong Resilience',
      summary:
        'Summerlin West continues to demonstrate market stability with moderate price appreciation and healthy inventory levels.',
      keyMetrics: {
        medianPrice: '$875,000',
        averageDaysOnMarket: '28',
        inventoryLevel: '2.3 months',
        priceChange: '+3.2%',
      },
      highlights: [
        'Luxury segment shows continued strength',
        'New construction driving inventory growth',
        'Fall season bringing motivated sellers',
        'Strong demand from out-of-state buyers',
      ],
      slug: 'october-2025-fall-market-resilience',
    },
    {
      month: 'September 2025',
      title: 'Back-to-School Market Momentum',
      summary:
        'September brought renewed activity as families returned from summer travel and focused on real estate decisions.',
      keyMetrics: {
        medianPrice: '$868,000',
        averageDaysOnMarket: '24',
        inventoryLevel: '2.1 months',
        priceChange: '+2.8%',
      },
      highlights: [
        'Family-focused buying activity increased',
        'School district proximity driving decisions',
        'Luxury properties maintaining premium pricing',
        'Interest rate stability supporting confidence',
      ],
      slug: 'september-2025-back-to-school-momentum',
    },
    {
      month: 'August 2025',
      title: 'Summer Market Maintains Stability',
      summary:
        'Despite traditional summer slowdown, Summerlin West market showed remarkable consistency and resilience.',
      keyMetrics: {
        medianPrice: '$862,000',
        averageDaysOnMarket: '31',
        inventoryLevel: '2.5 months',
        priceChange: '+2.5%',
      },
      highlights: [
        'Summer vacation impact minimal',
        'Luxury segment outperformed expectations',
        'Investment property activity increased',
        'New construction sales remained strong',
      ],
      slug: 'august-2025-summer-market-stability',
    },
    {
      month: 'July 2025',
      title: 'Mid-Summer Market Analysis',
      summary:
        'July data reveals continued market strength with particular emphasis on luxury and new construction segments.',
      keyMetrics: {
        medianPrice: '$858,000',
        averageDaysOnMarket: '26',
        inventoryLevel: '2.2 months',
        priceChange: '+3.1%',
      },
      highlights: [
        'New construction leading price appreciation',
        'Luxury homes selling above asking',
        'Strong cash buyer presence',
        'Limited inventory maintaining competition',
      ],
      slug: 'july-2025-mid-summer-analysis',
    },
  ];

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>Monthly Market Reports</h1>
        <p className={styles.heroDescription}>
          Stay informed with comprehensive monthly market analysis for Summerlin West real estate.
          Get expert insights, trends, and data-driven reports from Dr. Jan Duffy, your local real
          estate expert with over $6 billion in sales and deep market knowledge.
        </p>
      </section>

      {/* Market Overview */}
      <section className={styles.overview}>
        <h2 className={styles.sectionTitle}>Current Market Overview</h2>
        <div className={styles.overviewGrid}>
          <div className={styles.overviewCard}>
            <h3>Market Status: Strong & Stable</h3>
            <p>
              Summerlin West continues to demonstrate remarkable market resilience with consistent
              appreciation, healthy inventory levels, and strong buyer demand across all price
              segments.
            </p>
          </div>
          <div className={styles.overviewCard}>
            <h3>Key Trend: Luxury Segment Growth</h3>
            <p>
              The luxury segment ($1M+) is showing particularly strong performance, with premium
              properties maintaining value and attracting high-quality buyers from across the
              country.
            </p>
          </div>
          <div className={styles.overviewCard}>
            <h3>Outlook: Continued Stability</h3>
            <p>
              Market fundamentals remain strong with limited land availability, continued amenity
              development, and favorable economic conditions supporting long-term growth.
            </p>
          </div>
        </div>
      </section>

      {/* Monthly Reports */}
      <section className={styles.reports}>
        <h2 className={styles.sectionTitle}>Latest Monthly Reports</h2>
        <div className={styles.reportsGrid}>
          {monthlyReports.map((report, index) => (
            <div key={index} className={styles.reportCard}>
              <div className={styles.reportHeader}>
                <h3 className={styles.reportMonth}>{report.month}</h3>
                <h4 className={styles.reportTitle}>{report.title}</h4>
              </div>

              <p className={styles.reportSummary}>{report.summary}</p>

              <div className={styles.keyMetrics}>
                <h5>Key Metrics:</h5>
                <div className={styles.metricsGrid}>
                  <div className={styles.metric}>
                    <span className={styles.metricLabel}>Median Price</span>
                    <span className={styles.metricValue}>{report.keyMetrics.medianPrice}</span>
                  </div>
                  <div className={styles.metric}>
                    <span className={styles.metricLabel}>Days on Market</span>
                    <span className={styles.metricValue}>
                      {report.keyMetrics.averageDaysOnMarket}
                    </span>
                  </div>
                  <div className={styles.metric}>
                    <span className={styles.metricLabel}>Inventory</span>
                    <span className={styles.metricValue}>{report.keyMetrics.inventoryLevel}</span>
                  </div>
                  <div className={styles.metric}>
                    <span className={styles.metricLabel}>Price Change</span>
                    <span className={styles.metricValue}>{report.keyMetrics.priceChange}</span>
                  </div>
                </div>
              </div>

              <div className={styles.highlights}>
                <h5>Key Highlights:</h5>
                <ul>
                  {report.highlights.map((highlight, idx) => (
                    <li key={idx}>{highlight}</li>
                  ))}
                </ul>
              </div>

              <div className={styles.reportActions}>
                <Link
                  href={`/market-reports/monthly-reports/${report.slug}`}
                  className={styles.readReport}
                >
                  Read Full Report →
                </Link>
                <Link
                  href={`/market-reports/monthly-reports/${report.slug}/download`}
                  className={styles.downloadReport}
                >
                  Download PDF
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Community-Specific Analysis */}
      <section className={styles.communityAnalysis}>
        <h2 className={styles.sectionTitle}>Community-Specific Market Analysis</h2>

        <div className={styles.communityGrid}>
          <div className={styles.communityCard}>
            <h3>The Vistas</h3>
            <div className={styles.communityMetrics}>
              <div className={styles.communityMetric}>
                <span>Median Price:</span>
                <span>$925,000</span>
              </div>
              <div className={styles.communityMetric}>
                <span>Price Range:</span>
                <span>$650K - $2.5M</span>
              </div>
              <div className={styles.communityMetric}>
                <span>Days on Market:</span>
                <span>22</span>
              </div>
            </div>
            <p>
              The Vistas continues to lead the luxury market with strong appreciation and limited
              inventory. Red Rock Canyon views and resort-style amenities drive premium pricing.
            </p>
          </div>

          <div className={styles.communityCard}>
            <h3>Stonebridge</h3>
            <div className={styles.communityMetrics}>
              <div className={styles.communityMetric}>
                <span>Median Price:</span>
                <span>$785,000</span>
              </div>
              <div className={styles.communityMetric}>
                <span>Price Range:</span>
                <span>$550K - $1.2M</span>
              </div>
              <div className={styles.communityMetric}>
                <span>Days on Market:</span>
                <span>28</span>
              </div>
            </div>
            <p>
              Stonebridge offers excellent value with established amenities and strong community
              appeal. Family-friendly features and good schools drive consistent demand.
            </p>
          </div>

          <div className={styles.communityCard}>
            <h3>Redpoint</h3>
            <div className={styles.communityMetrics}>
              <div className={styles.communityMetric}>
                <span>Median Price:</span>
                <span>$1,050,000</span>
              </div>
              <div className={styles.communityMetric}>
                <span>Price Range:</span>
                <span>$750K - $2.8M</span>
              </div>
              <div className={styles.communityMetric}>
                <span>Days on Market:</span>
                <span>18</span>
              </div>
            </div>
            <p>
              Redpoint's modern luxury homes are in high demand with quick sales and premium
              pricing. Contemporary design and smart home features appeal to discerning buyers.
            </p>
          </div>
        </div>
      </section>

      {/* Expert Insights */}
      <section className={styles.expertInsights}>
        <h2 className={styles.sectionTitle}>Expert Market Insights from Dr. Jan Duffy</h2>

        <div className={styles.insightsGrid}>
          <div className={styles.insightCard}>
            <h3>Market Outlook</h3>
            <p>
              "Summerlin West continues to demonstrate remarkable resilience in the current market
              environment. The combination of limited inventory, strong demand, and world-class
              amenities creates a perfect storm for continued appreciation and market stability."
            </p>
          </div>

          <div className={styles.insightCard}>
            <h3>Buyer Strategy</h3>
            <p>
              "For buyers, the key is preparation and speed. With inventory levels remaining low and
              quality properties selling quickly, having financing pre-approved and being ready to
              act decisively is crucial for success."
            </p>
          </div>

          <div className={styles.insightCard}>
            <h3>Seller Opportunities</h3>
            <p>
              "Sellers are in an excellent position with strong demand and limited competition. The
              key is proper pricing from the start and professional presentation to maximize value
              and minimize time on market."
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className={styles.cta}>
        <h2 className={styles.ctaTitle}>Get Your Personalized Market Analysis</h2>
        <p className={styles.ctaDescription}>
          Ready to understand how these market trends affect your specific situation? Contact Dr.
          Jan Duffy for a personalized market analysis and expert guidance tailored to your buying
          or selling goals.
        </p>
        <div className={styles.ctaButtons}>
          <Link href="/contact" className={styles.primaryButton}>
            Get Market Analysis
          </Link>
          <Link href="/home-values" className={styles.secondaryButton}>
            Home Value Report
          </Link>
        </div>
      </section>
    </div>
  );
}
