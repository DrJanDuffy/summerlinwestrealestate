'use client';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import LatestMarketInsightsClient from '../../components/ui/LatestMarketInsightsClient';
import RealScoutAdvancedSearch from '../../components/ui/RealScoutAdvancedSearch';
import useExpandable from '../../hooks/useExpandable';
import styles from '../page.
import dynamic from 'next/dynamic';

const RealScoutOfficeListingsWrapper = dynamic(() => import('../../components/ui/RealScoutOfficeListingsWrapper'), {
  ssr: false,
});
module.css';

const LeadCaptureForm = dynamic(() => import('../../components/ui/LeadCaptureForm'), {
  ssr: false,
});

function FAQItem({ faq, index }: { faq: { q: string; a: string }; index: number }) {
  const { isExpanded, ariaProps } = useExpandable(false);
  return (
    <div className={styles.faqItem}>
      <button {...ariaProps} aria-controls={`faq-panel-${index}`} className={styles.faqQuestion}>
        {faq.q}
      </button>
      <div id={`faq-panel-${index}`} hidden={!isExpanded} className={styles.faqAnswer}>
        {faq.a}
      </div>
    </div>
  );
}

export default function MarketReportsClient() {
  // FAQ accordion state
  const [_openFAQ, _setOpenFAQ] = useState<number | null>(null);
  const faqs = [
    {
      q: 'What are the best neighborhoods in Summerlin West?',
      a: 'Popular neighborhoods include The Vistas, Redpoint, Stonebridge, The Cliffs, and Reverence. Each offers unique amenities and lifestyle options.',
    },
    {
      q: 'What is the average home price in Summerlin West?',
      a: 'The median home price is around $850,000, with luxury homes reaching $2M+.',
    },
    {
      q: 'Are there new construction homes available?',
      a: 'Yes! New construction is available in Redpoint, Stonebridge, and The Cliffs. Contact us for the latest releases and builder incentives.',
    },
    {
      q: 'How do I schedule a home tour?',
      a: 'Contact us via the form or call to schedule a private showing of any property.',
    },
    {
      q: 'What makes Summerlin West special?',
      a: 'Master-planned communities, top-rated schools, Red Rock Canyon access, and a family-friendly lifestyle with excellent amenities.',
    },
    {
      q: 'How can I get a free market report?',
      a: 'Fill out the form on this page or visit our Market Reports section for a free analysis and insights.',
    },
  ];
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <h1>Summerlin West Real Estate Market Reports and Trends</h1>
        <p className={styles.subtitle}>
          Get the latest insights, trends, and data for the Summerlin real estate market. Dr. Jan
          Duffy provides comprehensive market analysis, neighborhood-specific data, and expert
          insights to help you make informed decisions about buying or selling in Summerlin West.
          Our reports cover The Vistas, Stonebridge, Redpoint, and all Summerlin West communities
          with detailed statistics, price trends, and market predictions.
        </p>
      </section>
      {/* Dr. Jan Duffy Callout Section */}
      <section className={`${styles.sectionCard} ${styles.calloutSection}`}>
        <h2>Meet Your Summerlin West Real Estate Expert and Market Analyst</h2>
        <p>
          <strong>Dr. Jan Duffy, REALTOR®</strong> has helped families discover luxury living at the
          gateway to Red Rock Canyon since 2015. As a longtime resident and doctorate-level
          educator, she brings analytical precision and deep local knowledge to every transaction.
          Her comprehensive understanding of Summerlin West market trends, combined with her
          educational background in psychology and business, allows her to provide exceptional
          market analysis and personalized service to clients throughout The Vistas, Stonebridge,
          Redpoint, and all Summerlin West communities.
        </p>
        <p>
          Specializing in{' '}
          <strong>The Ridges, Red Rock Country Club, The Vistas, and The Paseos</strong>, Dr. Duffy
          is your go-to resource for buying or selling in Summerlin West. Her market reports are
          based on real-time MLS data, local market conditions, and years of experience helping
          clients navigate the Summerlin West real estate market successfully.
        </p>
        <p>
          <Link href="/about">Learn more about Dr. Duffy's expertise and track record &rarr;</Link>
        </p>
      </section>
      <LatestMarketInsightsClient />
      <section className={styles.sectionCard}>
        <h2>Current Summerlin West Market Statistics and Key Performance Indicators</h2>
        <p className={styles.heroSubtitle}>
          Stay informed about the latest market conditions in Summerlin West with our comprehensive
          market statistics. These key performance indicators reflect the most current market
          trends, including inventory levels, pricing, and market velocity. Understanding these
          metrics helps you make informed decisions whether you're buying or selling in Summerlin
          West. The market continues to show strong demand with limited inventory, making it
          essential to work with an experienced local expert like Dr. Jan Duffy.
        </p>
        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>287</div>
            <div className={styles.statLabel}>Active Listings</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>12</div>
            <div className={styles.statLabel}>Avg Days on Market</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>$920K</div>
            <div className={styles.statLabel}>Median Home Price</div>
          </div>
          <div className={styles.statCard}>
            <div className={styles.statNumber}>98%</div>
            <div className={styles.statLabel}>List-to-Sale Ratio</div>
          </div>
        </div>
      </section>
      <section className={styles.sectionCard}>
        <h2>Frequently Asked Questions About Summerlin West Real Estate Market</h2>
        <p className={styles.heroSubtitle}>
          Get answers to the most common questions about the Summerlin West real estate market. Dr.
          Jan Duffy has compiled these FAQs based on years of experience helping clients navigate
          the Summerlin West real estate market. From market trends and pricing to community
          amenities and lifestyle, find the information you need to make informed decisions about
          your Summerlin West real estate journey.
        </p>
        <div className={styles.contentList}>
          {faqs.map((faq, i) => (
            <FAQItem key={faq.q} faq={faq} index={i} />
          ))}
        </div>
      </section>
      <section className={styles.sectionCard}>
        <h2>Monthly Market Trends and Data Visualization for Summerlin West</h2>
        <p className={styles.heroSubtitle}>
          Visualize the latest market trends and data for Summerlin West real estate. Our
          comprehensive charts and graphs provide clear insights into price trends, inventory
          levels, and market performance across The Vistas, Stonebridge, Redpoint, and other
          Summerlin West communities. These visual representations help you understand market
          dynamics and make data-driven decisions about your real estate investments.
        </p>
        <div className={styles.chartsGrid}>
          <div>
            <h3 className={styles.centerTitle}>Price Trends</h3>
            <Image
              src="https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80"
              alt="Summerlin home price trends chart"
              width={400}
              height={220}
              className={styles.chartImage}
              priority
            />
          </div>
          <div>
            <h3 className={styles.centerTitle}>Inventory Trends</h3>
            <Image
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80"
              alt="Summerlin housing inventory trends chart"
              width={400}
              height={220}
              className={styles.chartImage}
            />
          </div>
        </div>
      </section>
      <section className={styles.sectionCard}>
        <h2>Download the Complete Summerlin West Market Report and Analysis</h2>
        <p className={styles.heroSubtitle}>
          Get comprehensive market insights with our detailed Summerlin West market report. This
          exclusive report includes neighborhood-specific data, price trends, market predictions,
          and expert analysis from Dr. Jan Duffy. Perfect for investors, homebuyers, and sellers who
          want to understand the current market conditions and make informed decisions about their
          Summerlin West real estate investments.
        </p>
        <LeadCaptureForm
          variant="inline"
          title="Download the Full Market Report"
          subtitle="Get a detailed PDF with neighborhood breakdowns, price trends, and expert analysis."
          source="Market Reports Download"
          formId="download"
        />
      </section>
      <section className={styles.sectionCard}>
        <h2>Expert Summerlin West Market Analysis and Insights</h2>
        <p className={styles.heroSubtitle}>
          Dr. Jan Duffy provides expert analysis of the Summerlin West real estate market, offering
          insights into market drivers, neighborhood performance, and future outlook. Her
          comprehensive understanding of local market conditions, combined with years of experience
          helping clients navigate the Summerlin West real estate market, provides valuable
          perspective for buyers, sellers, and investors.
        </p>
        <div className={styles.marketAnalysis}>
          <div className={styles.analysisSection}>
            <strong>What&apos;s driving the Summerlin West market?</strong>
            <p>
              Low inventory with only 287 active listings, high demand from out-of-state buyers, and
              continued migration to Las Vegas are keeping prices strong at a median of $920K. New
              construction is helping with 45 active projects, but resale homes remain in high
              demand with an average of 12 days on market. The limited supply combined with strong
              demand from California, Texas, and Washington buyers is creating competitive bidding
              situations.
            </p>
          </div>
          <div className={styles.analysisSection}>
            <strong>Which Summerlin West neighborhoods are performing best?</strong>
            <p>
              Redpoint, Stonebridge, and The Cliffs are seeing the fastest sales and highest
              appreciation, with luxury segments in The Ridges and Reverence also performing well.
              The Vistas continues to be a top choice for families due to its proximity to top-rated
              schools and community amenities. New construction in Grand Park District and Kestrel
              Commons Village is attracting buyers seeking modern features and builder incentives.
            </p>
          </div>
          <div className={styles.analysisSection}>
            <strong>What&apos;s the outlook for Summerlin West real estate?</strong>
            <p>
              Experts predict continued growth, especially in walkable, amenity-rich communities
              like The Vistas and Stonebridge. Mortgage rates and new builder incentives will shape
              the market in the coming months, but the fundamental demand drivers remain strong. The
              8.2% year-over-year appreciation is expected to continue, though at a more moderate
              pace than the peak growth periods.
            </p>
          </div>
        </div>
      </section>
      <section className={styles.sectionCard}>
        <h2>Sign Up for Dr. Jan Duffy's Exclusive Summerlin West Market Newsletter</h2>
        <p className={styles.heroSubtitle}>
          Stay informed about the latest Summerlin West real estate market trends and opportunities.
          Dr. Jan Duffy's monthly newsletter provides exclusive market insights, new listing alerts,
          community updates, and expert analysis that you won't find anywhere else. Join over 2,000
          subscribers who trust Dr. Duffy for the most current and accurate Summerlin West real
          estate information.
        </p>
        <LeadCaptureForm
          variant="inline"
          title="Subscribe to the Summerlin Market Newsletter"
          subtitle="Monthly updates, expert insights, and exclusive market data—straight to your inbox."
          source="Market Reports Newsletter"
          formId="newsletter"
        />
      </section>
      <section className={styles.sectionCard}>
        <h2>Explore More Summerlin West Real Estate Resources and Services</h2>
        <p className={styles.heroSubtitle}>
          Access additional resources and services to support your Summerlin West real estate
          journey. From featured listings and community information to expert consultations and
          market analysis, Dr. Jan Duffy provides comprehensive support for all your real estate
          needs. Whether you're buying, selling, or investing in Summerlin West, these resources
          will help you make informed decisions and achieve your real estate goals.
        </p>
        <ul className={styles.resourceLinks}>
          <li>
            <Link href="/current-listing">See our current listing in The Vistas</Link>
          </li>
          <li>
            <Link href="/communities">Explore all Summerlin West communities</Link>
          </li>
          <li>
            <Link href="/about">Meet your Summerlin real estate expert</Link>
          </li>
          <li>
            <Link href="/contact">Contact for a custom market analysis</Link>
          </li>
        </ul>
      </section>

      {/* Investment Properties */}
      <section className={styles.section} aria-label="Investment Properties">
        <h2 className={styles.sectionTitle}>
          Investment Properties in Summerlin West
        </h2>
        <p className={styles.heroSubtitle}>
          Explore investment opportunities in Summerlin West. These properties offer excellent potential 
          for rental income, appreciation, and long-term wealth building. Perfect for investors looking 
          to capitalize on Summerlin West's strong market fundamentals.
        </p>
        {/* @ts-ignore - RealScout web component */}
        <RealScoutOfficeListingsWrapper 
              agentEncodedId="QWdlbnQtMjI1MDUw" 
              sortOrder="PRICE_LOW" 
              listingStatus="For Sale" 
              propertyTypes=",SFR,MF,TC,LAL,MOBILE,OTHER" 
              priceMin="700000" 
              priceMax="1500000"
              maxListings={12}
              className="mt-6"
            />
      </section>

      {/* Advanced Property Search */}
      <section className={styles.section} aria-label="Advanced Property Search">
        <h2 className={styles.sectionTitle}>
          Advanced Property Search
        </h2>
        <p className={styles.heroSubtitle}>
          Use our advanced search tool to find properties that match the latest market trends. 
          Filter by price, location, features, and more to discover your perfect investment opportunity.
        </p>
        {/* @ts-ignore - RealScout web component */}
        <realscout-advanced-search agent-encoded-id="QWdlbnQtMjI1MDUw"></realscout-advanced-search>
      </section>

      {/* Simple Property Search */}
      <section className={styles.section} aria-label="Quick Property Search">
        <h2 className={styles.sectionTitle}>
          Quick Property Search
        </h2>
        <p className={styles.heroSubtitle}>
          Browse available properties with our simple search tool. 
          Perfect for quick property browsing while reviewing market reports.
        </p>
        {/* @ts-ignore - RealScout web component */}
        <realscout-simple-search agent-encoded-id="QWdlbnQtMjI1MDUw"></realscout-simple-search>
      </section>

      {/* Additional Property Search Options */}
      <section className={styles.section} aria-label="Additional Property Search">
        <h2 className={styles.sectionTitle}>
          Broader Market Options in Summerlin West
        </h2>
        <p className={styles.heroSubtitle}>
          Explore a comprehensive range of residential properties across Summerlin West communities. 
          From entry-level homes to luxury estates, discover all available options while reviewing market reports.
        </p>
        {/* @ts-ignore - RealScout web component */}
        <RealScoutOfficeListingsWrapper 
              agentEncodedId="QWdlbnQtMjI1MDUw" 
              sortOrder="PRICE_LOW" 
              listingStatus="For Sale" 
              propertyTypes=",SFR,MF,TC,LAL,MOBILE,OTHER" 
              priceMin="400000" 
              priceMax="2000000"
              maxListings={12}
              className="mt-6"
            />
      </section>

      <RealScoutAdvancedSearch />
    </div>
  );
}
