'use client';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import {
  FaChevronDown,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhone,
  FaYoutube,
} from 'react-icons/fa';
import LatestMarketInsightsClient from '../../components/ui/LatestMarketInsightsClient';

const RealScoutOfficeListingsWrapper = dynamic(
  () => import('../../components/ui/RealScoutOfficeListingsWrapper'),
  {
    ssr: false,
  }
);

// import LeadCaptureFormClient from '../../components/ui/LeadCaptureFormClient';
import styles from './contact.module.css';

// Import RealScout components
const RealScoutLeadCapture = dynamic(() => import('../../components/ui/RealScoutWidgetEnhanced'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center p-8">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
    </div>
  ),
});

const RealScoutHomeValue = dynamic(() => import('../../components/ui/RealScoutHomeValue'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center p-8">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
    </div>
  ),
});

// Import SEO Optimizer
const RealScoutSEOOptimizer = dynamic(() => import('../../components/ui/RealScoutSEOOptimizer'), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center p-8">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
    </div>
  ),
});

// Import additional RealScout components
const RealScoutPropertyValuation = dynamic(
  () => import('../../components/ui/RealScoutPropertyValuation'),
  {
    ssr: false,
    loading: () => (
      <div className="flex items-center justify-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    ),
  }
);

const RealScoutAdvancedSearch = dynamic(
  () => import('../../components/ui/RealScoutAdvancedSearch'),
  {
    ssr: false,
    loading: () => (
      <div className="flex items-center justify-center p-8">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    ),
  }
);

const socialLinks = [
  {
    name: 'Browse Properties',
    url: 'https://drjanduffy.realscout.com/homesearch/shared-searches/U2hhcmVhYmxlU2VhcmNoTGluay05NTMy',
    icon: <FaFacebook />,
    color: '#3A8DDE',
  },
  {
    name: 'View Listings',
    url: 'https://drjanduffy.realscout.com/homesearch/shared-searches/U2hhcmVhYmxlU2VhcmNoTGluay05NTMy',
    icon: <FaInstagram />,
    color: '#16B286',
  },
  {
    name: 'Search Properties',
    url: 'https://drjanduffy.realscout.com/homesearch/shared-searches/U2hhcmVhYmxlU2VhcmNoTGluay05NTMy',
    icon: <FaYoutube />,
    color: '#0A2540',
  },
];

const serviceAreas = [
  'Summerlin West',
  'The Vistas',
  'Stonebridge',
  'Redpoint',
  'The Cliffs',
  'Reverence',
  'Downtown Summerlin',
  'All Summerlin Villages',
];

const quickLinks = [
  { href: '/market-reports', label: 'Summerlin Market Reports' },
  { href: '/current-listing', label: 'Featured Home for Sale' },
  { href: '/about', label: 'Meet Your Summerlin Expert' },
  { href: '/communities', label: 'Explore Summerlin Communities' },
];

export default function ContactClient() {
  return (
    <div className={styles.page}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <h1 className={styles.heroTitle}>
          Contact Dr. Jan Duffy: Your Trusted Summerlin West Real Estate Expert
        </h1>
        <p className={styles.heroSubtitle}>
          Get in touch for buying, selling, or market questions. Dr. Jan Duffy provides
          personalized, expert guidance for all your Summerlin West real estate needs, from
          first-time home buying to luxury property investments. With over 15 years of experience
          and deep local market knowledge, she's your go-to resource for The Vistas, Stonebridge,
          Redpoint, and all Summerlin West communities.
        </p>
        <a href="#contact-form" className={styles.contactButton}>
          <FaChevronDown /> Contact Form
        </a>
      </section>
      <main className={styles.main}>
        <section className={styles.sectionCard} aria-label="Send a Message" id="contact-form">
          <h2 className={styles.sectionTitle}>Send a Message to Dr. Jan Duffy</h2>
          <p className={styles.heroSubtitle}>
            Ready to start your Summerlin West real estate journey? Send Dr. Jan Duffy a message
            with your questions, goals, or property requirements. Whether you're looking to buy your
            first home in The Vistas, sell your current property in Stonebridge, or explore
            investment opportunities in Redpoint, Dr. Duffy will provide personalized guidance
            tailored to your specific needs and timeline.
          </p>
          <div className={styles.contactWidgets}>
            <div className={styles.leadCaptureWidget}>
              <h3 className={styles.widgetTitle}>Get Expert Guidance</h3>
              <RealScoutLeadCapture
                variant="lead-capture"
                agentId="QWdlbnQtMjI1MDUw"
                source="Contact Page"
                community="Summerlin West"
              />
            </div>
            <div className={styles.homeValueWidget}>
              <h3 className={styles.widgetTitle}>Discover Your Home's Value</h3>
              <RealScoutHomeValue />
            </div>
          </div>

          {/* Additional RealScout Widgets */}
          <div className={styles.additionalWidgets}>
            <div className={styles.widgetSection}>
              <h3 className={styles.widgetTitle}>Get Your Free Property Valuation</h3>
              <RealScoutPropertyValuation
                title="Free Property Valuation"
                subtitle="Get an accurate estimate of your home's worth in today's market"
                variant="full"
                showComparables={true}
                showMarketAnalysis={true}
                showLeadCapture={true}
              />
            </div>

            <div className={styles.widgetSection}>
              <h3 className={styles.widgetTitle}>Quick Property Search</h3>
              <RealScoutAdvancedSearch
                title="Search Properties While You're Here"
                subtitle="Find your dream home in Summerlin West"
                variant="sidebar"
                showFeatures={true}
                priceMin={400000}
                priceMax={2000000}
              />
            </div>
          </div>
        </section>
        <section className={styles.sectionCard} aria-label="Quick Links">
          <h2 className={styles.sectionTitle}>
            Quick Links to Summerlin West Real Estate Resources
          </h2>
          <p className={styles.heroSubtitle}>
            Access valuable resources and information about Summerlin West real estate. These quick
            links provide easy access to market reports, featured properties, community information,
            and Dr. Jan Duffy's expertise. Whether you're researching neighborhoods, exploring
            market trends, or looking for specific property types, these resources will help you
            make informed decisions about your Summerlin West real estate journey.
          </p>
          <div className={styles.quickLinksContainer}>
            {quickLinks.map((link) => (
              <Link key={link.href} href={link.href} className={styles.quickLink}>
                {link.label}
              </Link>
            ))}
          </div>
        </section>
        <section className={styles.sectionCard} aria-label="Our Office">
          <h2 className={styles.sectionTitle}>Our Office Location and Contact Information</h2>
          <p className={styles.heroSubtitle}>
            Visit Dr. Jan Duffy at her conveniently located office in the heart of Summerlin. Our
            office is easily accessible from all Summerlin West communities and provides a
            professional environment for consultations, document signing, and client meetings.
            Located at One Summerlin, our office is centrally positioned to serve clients throughout
            The Vistas, Stonebridge, Redpoint, and all Summerlin West neighborhoods.
          </p>
          <div className={styles.officeLocationContainer}>
            <iframe
              title="Office Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3218.123456789!2d-115.3336!3d36.1540!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8c1a2b3c4d5e6%3A0x1234567890abcdef!2s1980%20Festival%20Plaza%20Dr%2C%20Las%20Vegas%2C%20NV%2089135!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus"
              width={350}
              height={200}
              className={styles.mapIframe}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            <div className={styles.officeDetails}>
              <div className={styles.officeDetail}>
                <FaMapMarkerAlt className={styles.icon} />
                <span className={styles.detailText}>
                  1980 Festival Plaza Dr (One Summerlin), Las Vegas, NV 89135
                </span>
              </div>
              <div className={styles.officeDetail}>
                <FaPhone className={styles.icon} />
                <a href="tel:7025500112" className={styles.detailText}>
                  (702) 550-0112
                </a>
              </div>
              <div className={styles.officeDetail}>
                <FaEnvelope className={styles.icon} />
                <a
                  href="mailto:DrJanSells@SummerlinWestRealEstate.com"
                  className={styles.detailText}
                >
                  DrJanSells@SummerlinWestRealEstate.com
                </a>
              </div>
              <div className={styles.socialLinksContainer}>
                {socialLinks.map((s) => (
                  <a
                    key={s.name}
                    href={s.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.name}
                    className={styles.socialLink}
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className={styles.sectionCard} aria-label="Areas We Serve">
          <h2 className={styles.sectionTitle}>
            Areas We Serve: Summerlin West Communities and Neighborhoods
          </h2>
          <p className={styles.heroSubtitle}>
            Dr. Jan Duffy provides expert real estate services throughout Summerlin West and
            surrounding areas. Her deep knowledge of each community's unique characteristics,
            amenities, and market conditions allows her to provide exceptional service to clients in
            all these neighborhoods. Whether you're buying or selling, Dr. Duffy's local expertise
            ensures you get the best possible outcome in your real estate transaction.
          </p>
          <div className={styles.serviceAreasContainer}>
            {serviceAreas.map((area) => (
              <span key={area} className={styles.serviceAreaTag}>
                {area}
              </span>
            ))}
          </div>
          <div className={styles.responseTime}>
            <strong>Response Time:</strong> We reply to all inquiries within 1 business day (often
            much faster!)
          </div>
        </section>
        <section className={styles.sectionCard} aria-label="Market Insights">
          <h2 className={styles.sectionTitle}>
            Featured Summerlin West Listings and Current Market Insights
          </h2>
          <p className={styles.heroSubtitle}>
            Explore current market conditions and featured properties in Summerlin West. Dr. Jan
            Duffy provides up-to-date market analysis and showcases exceptional properties that
            represent the best of Summerlin West real estate. Whether you're looking for a luxury
            home in The Vistas, a family-friendly property in Stonebridge, or an investment
            opportunity in Redpoint, these listings offer insight into the current market and
            available opportunities.
          </p>
          <LatestMarketInsightsClient />
        </section>

        {/* SEO Optimized RealScout Widgets */}
        <section className={styles.sectionCard} aria-label="Complete Real Estate Solutions">
          <h2 className={styles.sectionTitle}>Complete Real Estate Solutions</h2>
          <p className={styles.heroSubtitle}>
            Access all of Dr. Jan Duffy's real estate tools and services in one place. From property
            search to market analysis, we provide comprehensive solutions for all your real estate
            needs.
          </p>
          <RealScoutSEOOptimizer
            pageType="contact"
            location="Summerlin West, Las Vegas, NV"
            community="Summerlin West"
            className="mt-8"
          />
        </section>

        {/* Entry-Level Properties */}
        <section className={styles.sectionCard} aria-label="Entry-Level Properties">
          <h2 className={styles.sectionTitle}>Entry-Level Properties in Summerlin West</h2>
          <p className={styles.heroSubtitle}>
            Discover affordable entry-level properties in Summerlin West. Perfect for first-time
            homebuyers or those looking to enter the Summerlin West market. These properties offer
            excellent value and investment potential.
          </p>
          {/* @ts-ignore - RealScout web component */}
          <RealScoutOfficeListingsWrapper
            agentEncodedId="QWdlbnQtMjI1MDUw"
            sortOrder="PRICE_LOW"
            listingStatus="For Sale"
            propertyTypes=",SFR,MF,TC,LAL,MOBILE,OTHER"
            priceMin="500000"
            priceMax="800000"
            maxListings={12}
            className="mt-6"
          />
        </section>

        {/* Advanced Property Search */}
        <section className={styles.sectionCard} aria-label="Advanced Property Search">
          <h2 className={styles.sectionTitle}>Advanced Property Search</h2>
          <p className={styles.heroSubtitle}>
            Start your property search directly from our contact page. Use our advanced search tool
            to find homes that match your specific criteria in Summerlin West.
          </p>
          {/* @ts-ignore - RealScout web component */}
          <realscout-advanced-search agent-encoded-id="QWdlbnQtMjI1MDUw"></realscout-advanced-search>
        </section>

        {/* Simple Property Search */}
        <section className={styles.sectionCard} aria-label="Quick Property Search">
          <h2 className={styles.sectionTitle}>Quick Property Search</h2>
          <p className={styles.heroSubtitle}>
            Browse available properties with our simple search tool. Perfect for quick property
            browsing while you're on our contact page.
          </p>
          {/* @ts-ignore - RealScout web component */}
          <realscout-simple-search agent-encoded-id="QWdlbnQtMjI1MDUw"></realscout-simple-search>
        </section>

        {/* Office Listings Widget */}
        <section className={styles.sectionCard} aria-label="Office Listings">
          <h2 className={styles.sectionTitle}>Office Properties in Summerlin West</h2>
          <p className={styles.heroSubtitle}>
            Explore office properties and commercial real estate opportunities in Summerlin West.
            Perfect for businesses looking to establish or relocate their operations.
          </p>
          {/* @ts-ignore - RealScout web component */}
          <RealScoutOfficeListingsWrapper
            agentEncodedId="QWdlbnQtMjI1MDUw"
            sortOrder="PRICE_LOW"
            listingStatus="For Sale"
            propertyTypes=",SFR,OTHER"
            priceMin="500000"
            priceMax="600000"
            maxListings={12}
            className="mt-6"
          />
        </section>
      </main>
    </div>
  );
}
