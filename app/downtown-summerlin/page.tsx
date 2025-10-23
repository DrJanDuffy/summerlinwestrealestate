import type { Metadata } from 'next';
import dynamicImport from 'next/dynamic';
import Link from 'next/link';

const RealScoutOfficeListings = dynamicImport(
  () => import('../../components/ui/RealScoutOfficeListings')
);

// Disable SSR for this page to prevent prerendering issues
export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: 'Downtown Summerlin Real Estate Guide | Shopping, Dining, Homes & Market',
  description:
    'Explore Downtown Summerlin: shopping, dining, entertainment, and real estate market trends. Find homes for sale and get your free Summerlin market report.',
  keywords: [
    'Downtown Summerlin real estate',
    'Summerlin shopping district',
    'Las Vegas Ballpark area',
    'Downtown Summerlin homes',
    'walkable Summerlin community',
    'Summerlin entertainment district',
    'Las Vegas luxury condos',
    'Downtown Summerlin market',
    'Summerlin West shopping',
    'Las Vegas walkable community',
  ],
  alternates: {
    canonical: '/downtown-summerlin',
  },
  openGraph: {
    title: 'Downtown Summerlin Real Estate Guide | Shopping, Dining, Homes & Market',
    description:
      'Explore Downtown Summerlin: shopping, dining, entertainment, and real estate market trends. Find homes for sale and get your free Summerlin market report.',
    url: 'https://www.summerlinwestrealestate.com/downtown-summerlin',
    siteName: 'Summerlin West Real Estate',
    images: [
      {
        url: '/images/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Downtown Summerlin Real Estate Guide',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Downtown Summerlin Real Estate Guide | Shopping, Dining, Homes & Market',
    description:
      'Explore Downtown Summerlin: shopping, dining, entertainment, and real estate market trends.',
    images: ['/images/og-image.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function DowntownSummerlin() {
  return (
    <div>
      <main>
        <section>
          <h1>Downtown Summerlin Real Estate Guide</h1>
          <p>
            Your comprehensive resource for living, shopping, and investing in Downtown Summerlin
          </p>
        </section>

        <section>
          <h2>Meet Your Summerlin West Real Estate Expert</h2>
          <p>
            <strong>Dr. Jan Duffy, REALTOR®</strong> has helped families discover luxury living at
            the gateway to Red Rock Canyon since 2015. As a longtime resident and doctorate-level
            educator, she brings analytical precision and deep local knowledge to every transaction.
            Specializing in{' '}
            <strong>The Ridges, Red Rock Country Club, The Vistas, and The Paseos</strong>, Dr.
            Duffy is your go-to resource for buying or selling in Summerlin West.
          </p>
          <p>Ready to make your move in Summerlin West?</p>
          <p>
            <strong>
              Contact Dr. Jan Duffy today for your complimentary market consultation and discover
              your dream home or get top dollar for your property.
            </strong>
          </p>
          <p>
            <Link href="/contact">Contact Dr. Jan Duffy &rarr;</Link>
          </p>
        </section>

        <section>
          <h2>Shopping in Downtown Summerlin</h2>
          <p>
            Downtown Summerlin is home to over 125 stores, from luxury boutiques to popular national
            brands. Enjoy open-air shopping, seasonal events, and a vibrant atmosphere perfect for
            families and trendsetters alike. Whether you&apos;re looking for fashion, home goods, or
            unique gifts, you&apos;ll find it all in this premier Las Vegas shopping destination.
          </p>
        </section>

        <section>
          <h2>Dining in Downtown Summerlin</h2>
          <p>
            Experience a culinary adventure with Downtown Summerlin&apos;s diverse dining options.
            From upscale steakhouses and trendy cafes to family-friendly eateries and quick bites,
            there&apos;s something for every palate. Enjoy al fresco dining, happy hours, and
            chef-driven menus in a lively, walkable environment.
          </p>
        </section>

        <section>
          <h2>Entertainment & Lifestyle</h2>
          <p>
            Downtown Summerlin is more than shopping and dining—it&apos;s a lifestyle hub. Enjoy
            year-round events, live music, farmers markets, and the Las Vegas Ballpark. The area is
            also home to City National Arena, practice facility for the Vegas Golden Knights, making
            it a hotspot for sports fans and families.
          </p>
        </section>

        <section>
          <h2>Downtown Summerlin Real Estate Market</h2>
          <p>
            The Downtown Summerlin area offers a mix of luxury condos, modern townhomes, and
            single-family homes. With walkable access to shopping, dining, and entertainment,
            it&apos;s one of the most desirable places to live in Las Vegas. The real estate market
            here is competitive, with homes selling quickly and strong appreciation trends.
          </p>
          <ul>
            <li>Median Home Price: $650,000</li>
            <li>Average Days on Market: 14</li>
            <li>Walkability Score: 9/10</li>
            <li>Top-rated schools nearby</li>
          </ul>
        </section>

        {/* Downtown Summerlin Properties */}
        <section>
          <h2>Properties in Downtown Summerlin</h2>
          <p>
            Discover homes available in the Downtown Summerlin area. These properties offer walkable
            access to shopping, dining, and entertainment, making them perfect for those who want to
            live in the heart of Summerlin's vibrant lifestyle.
          </p>
          {/* @ts-ignore - RealScout web component */}
          <RealScoutOfficeListings
            agentEncodedId="QWdlbnQtMjI1MDUw"
            sortOrder="PRICE_LOW"
            listingStatus="For Sale"
            propertyTypes=",SFR,MF,TC,LAL,MOBILE,OTHER"
            priceMin="500000"
            priceMax="1200000"
            maxListings={12}
            className="mt-6"
          />
        </section>

        <section>
          <h2>Get Your Downtown Summerlin Market Report</h2>
          <p>Contact Dr. Jan Duffy for your free market report and personalized consultation.</p>
          <p>
            <Link href="/contact">Get Your Free Market Report &rarr;</Link>
          </p>
        </section>

        <section>
          <h2>Explore More Summerlin Real Estate Resources</h2>
          <ul>
            <li>
              <Link href="/market-reports">See all Summerlin market reports</Link>
            </li>
            <li>
              <Link href="/communities">Explore Summerlin West communities</Link>
            </li>
            <li>
              <Link href="/current-listing">View our current listing in The Vistas</Link>
            </li>
            <li>
              <Link href="/contact">Contact a Summerlin real estate expert</Link>
            </li>
          </ul>
        </section>

        {/* Advanced Property Search */}
        <section>
          <h2>Advanced Property Search in Downtown Summerlin</h2>
          <p>
            Use our advanced search tool to find properties in Downtown Summerlin. Filter by price,
            features, and more to discover your perfect home in this walkable community.
          </p>
          {/* @ts-ignore - RealScout web component */}
          <realscout-advanced-search agent-encoded-id="QWdlbnQtMjI1MDUw"></realscout-advanced-search>
        </section>

        {/* Simple Property Search */}
        <section>
          <h2>Quick Property Search in Downtown Summerlin</h2>
          <p>
            Browse available properties in Downtown Summerlin with our simple search tool. Perfect
            for quick property browsing in this walkable community.
          </p>
          {/* @ts-ignore - RealScout web component */}
          <realscout-simple-search agent-encoded-id="QWdlbnQtMjI1MDUw"></realscout-simple-search>
        </section>

        {/* Office Listings Widget */}
        <section>
          <h2>Office Properties in Downtown Summerlin</h2>
          <p>
            Explore office properties and commercial real estate opportunities in Downtown
            Summerlin. From professional office spaces to commercial buildings, find the perfect
            location for your business.
          </p>
          {/* @ts-ignore - RealScout web component */}
          <RealScoutOfficeListings
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
