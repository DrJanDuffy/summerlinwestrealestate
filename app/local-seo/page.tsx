import type { Metadata } from 'next';
import Link from 'next/link';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Summerlin West Local SEO Guide | Communities, Amenities & Lifestyle | Dr. Jan Duffy',
  description:
    'Complete guide to Summerlin West communities, amenities, and lifestyle. Discover The Vistas, Stonebridge, Redpoint, and more with local insights from Dr. Jan Duffy, REALTOR®.',
  keywords: [
    'Summerlin West communities',
    'The Vistas Las Vegas',
    'Stonebridge Summerlin',
    'Redpoint community',
    'Summerlin West amenities',
    'Red Rock Canyon access',
    'Las Vegas master-planned communities',
    'Summerlin West lifestyle',
    'local Summerlin West guide',
    'Dr. Jan Duffy local expert',
  ],
  openGraph: {
    title: 'Summerlin West Local SEO Guide | Communities, Amenities & Lifestyle',
    description:
      'Complete guide to Summerlin West communities, amenities, and lifestyle. Discover The Vistas, Stonebridge, Redpoint, and more.',
    url: 'https://www.summerlinwestrealestate.com/local-seo',
    siteName: 'Summerlin West Real Estate',
    images: [
      {
        url: '/images/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Summerlin West Local SEO Guide - Dr. Jan Duffy Real Estate',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.summerlinwestrealestate.com/local-seo',
  },
};

export default function LocalSEO() {
  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>Complete Summerlin West Local Guide</h1>
        <p className={styles.heroDescription}>
          Discover everything you need to know about Summerlin West, Las Vegas's premier
          master-planned community. From luxury neighborhoods to world-class amenities, get the
          insider knowledge from Dr. Jan Duffy, your local real estate expert with over $6 billion
          in sales.
        </p>
      </section>

      {/* Communities Overview */}
      <section className={styles.communities}>
        <h2 className={styles.sectionTitle}>Premier Summerlin West Communities</h2>

        <div className={styles.communityGrid}>
          <div className={styles.communityCard}>
            <h3>The Vistas</h3>
            <p>
              The crown jewel of Summerlin West, The Vistas offers luxury homes with stunning Red
              Rock Canyon views. This gated community features custom and semi-custom homes by top
              builders, resort-style amenities, and direct access to hiking trails.
            </p>
            <ul>
              <li>Gated luxury community</li>
              <li>Red Rock Canyon views</li>
              <li>Resort-style amenities</li>
              <li>26 unique subdivisions</li>
              <li>Top-rated schools nearby</li>
            </ul>
            <Link href="/service-area" className={styles.learnMore}>
              Explore The Vistas →
            </Link>
          </div>

          <div className={styles.communityCard}>
            <h3>Stonebridge</h3>
            <p>
              Stonebridge combines modern luxury with established community charm. This well-planned
              neighborhood offers a variety of home styles, excellent amenities, and a strong sense
              of community in the heart of Summerlin West.
            </p>
            <ul>
              <li>Established luxury community</li>
              <li>Diverse home styles</li>
              <li>Community amenities</li>
              <li>Prime location</li>
              <li>Strong resale values</li>
            </ul>
            <Link href="/service-area/stonebridge" className={styles.learnMore}>
              Explore Stonebridge →
            </Link>
          </div>

          <div className={styles.communityCard}>
            <h3>Redpoint</h3>
            <p>
              Redpoint represents the future of luxury living in Summerlin West. This modern
              community features contemporary architecture, smart home technology, and innovative
              design elements that appeal to today's discerning buyers.
            </p>
            <ul>
              <li>Modern architecture</li>
              <li>Smart home features</li>
              <li>Contemporary design</li>
              <li>Energy-efficient homes</li>
              <li>New construction available</li>
            </ul>
            <Link href="/service-area/redpoint" className={styles.learnMore}>
              Explore Redpoint →
            </Link>
          </div>
        </div>
      </section>

      {/* Local Amenities */}
      <section className={styles.amenities}>
        <h2 className={styles.sectionTitle}>Summerlin West Amenities & Lifestyle</h2>

        <div className={styles.amenityGrid}>
          <div className={styles.amenityCard}>
            <h3>Red Rock Canyon National Conservation Area</h3>
            <p>
              Summerlin West's greatest natural asset, Red Rock Canyon offers over 150 miles of
              hiking trails, rock climbing, scenic drives, and unparalleled natural beauty.
              Residents enjoy direct access to this national treasure right in their backyard.
            </p>
            <ul>
              <li>150+ miles of hiking trails</li>
              <li>Rock climbing opportunities</li>
              <li>Scenic 13-mile drive</li>
              <li>Visitor center and facilities</li>
              <li>Wildlife viewing</li>
            </ul>
          </div>

          <div className={styles.amenityCard}>
            <h3>Downtown Summerlin</h3>
            <p>
              The premier shopping, dining, and entertainment destination in Las Vegas, Downtown
              Summerlin features over 125 shops and restaurants, entertainment venues, and community
              events throughout the year.
            </p>
            <ul>
              <li>125+ shops and restaurants</li>
              <li>Entertainment venues</li>
              <li>Community events</li>
              <li>Outdoor dining options</li>
              <li>Family-friendly activities</li>
            </ul>
          </div>

          <div className={styles.amenityCard}>
            <h3>Championship Golf Courses</h3>
            <p>
              Summerlin West is home to several championship golf courses, including TPC Summerlin,
              which hosts the PGA Tour's Shriners Hospitals for Children Open. Golf enthusiasts
              enjoy world-class courses with stunning mountain views.
            </p>
            <ul>
              <li>TPC Summerlin (PGA Tour course)</li>
              <li>Multiple championship courses</li>
              <li>Mountain and canyon views</li>
              <li>Professional instruction</li>
              <li>Tournament play opportunities</li>
            </ul>
          </div>

          <div className={styles.amenityCard}>
            <h3>Top-Rated Schools</h3>
            <p>
              Summerlin West is served by the Clark County School District's top-performing schools,
              providing excellent educational opportunities for families. The area is home to
              award-winning elementary, middle, and high schools.
            </p>
            <ul>
              <li>Award-winning schools</li>
              <li>High test scores</li>
              <li>Extracurricular programs</li>
              <li>Modern facilities</li>
              <li>Strong parent involvement</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Local Insights */}
      <section className={styles.insights}>
        <h2 className={styles.sectionTitle}>Local Market Insights from Dr. Jan Duffy</h2>

        <div className={styles.insightsGrid}>
          <div className={styles.insightCard}>
            <h3>Market Trends</h3>
            <p>
              Summerlin West continues to see strong appreciation and demand, driven by limited
              inventory, excellent amenities, and proximity to employment centers. The luxury market
              remains particularly robust with high-end homes selling quickly.
            </p>
            <ul>
              <li>Strong appreciation rates</li>
              <li>Limited inventory driving demand</li>
              <li>Quick sales for luxury homes</li>
              <li>Stable market fundamentals</li>
              <li>Premium pricing for quality properties</li>
            </ul>
          </div>

          <div className={styles.insightCard}>
            <h3>Investment Opportunities</h3>
            <p>
              Summerlin West offers excellent long-term investment potential due to its
              master-planned nature, limited land availability, and continued development of
              amenities and infrastructure.
            </p>
            <ul>
              <li>Master-planned community stability</li>
              <li>Limited land availability</li>
              <li>Continued amenity development</li>
              <li>Strong rental demand</li>
              <li>Long-term appreciation potential</li>
            </ul>
          </div>

          <div className={styles.insightCard}>
            <h3>Lifestyle Benefits</h3>
            <p>
              Living in Summerlin West offers a unique combination of urban convenience and natural
              beauty, with easy access to hiking, golf, shopping, and entertainment while
              maintaining a peaceful residential atmosphere.
            </p>
            <ul>
              <li>Urban convenience with natural beauty</li>
              <li>Outdoor recreation opportunities</li>
              <li>Cultural and entertainment options</li>
              <li>Strong community connections</li>
              <li>Work-life balance advantages</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className={styles.cta}>
        <h2 className={styles.ctaTitle}>Ready to Make Summerlin West Your Home?</h2>
        <p className={styles.ctaDescription}>
          Let Dr. Jan Duffy's local expertise guide you to your perfect home in Summerlin West. With
          over $6 billion in sales and deep knowledge of the area, she can help you find the ideal
          community and property for your lifestyle and budget.
        </p>
        <div className={styles.ctaButtons}>
          <Link href="/contact" className={styles.primaryButton}>
            Contact Dr. Jan Duffy
          </Link>
          <Link href="/properties" className={styles.secondaryButton}>
            View Available Properties
          </Link>
        </div>
        <div className={styles.contactInfo}>
          <p>
            <strong>Phone:</strong> (702) 550-0112
          </p>
          <p>
            <strong>Email:</strong> DrJanSells@SummerlinWestRealEstate.com
          </p>
          <p>
            <strong>Office:</strong> 1980 Festival Plaza Dr, Las Vegas, NV 89135
          </p>
        </div>
      </section>
    </div>
  );
}
