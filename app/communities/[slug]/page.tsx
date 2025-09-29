import Image from 'next/image';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import NeighborhoodHero from '../../../components/ui/NeighborhoodHero';
import styles from '../../page.module.css';
import RealScoutOfficeListingsWrapper from '../../../components/ui/RealScoutOfficeListingsWrapper';
const communities = [
  {
    name: 'The Vistas',
    description:
      'Luxury homes with stunning mountain views and gated communities for ultimate privacy and exclusivity.',
    priceRange: '$950K - $2.5M',
    minPrice: 950000,
    maxPrice: 2500000,
    features: ['Mountain Views', 'Luxury Homes', 'Gated Community', 'Golf Course'],
    homeTypes: 'Single Family, Custom Estates',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80',
    slug: 'the-vistas',
    highlighted: true,
    yearBuilt: '2018-Present',
    schools: ['Top-Rated Elementary', 'Award-Winning High School'],
    amenities: ['Private Golf Course', 'Community Center', 'Walking Trails'],
  },
  {
    name: 'The Paseos',
    description:
      'Family-friendly neighborhood with top-rated schools and abundant community amenities.',
    priceRange: '$750K - $1.5M',
    minPrice: 750000,
    maxPrice: 1500000,
    features: ['Top Schools', 'Family-Friendly', 'Parks Nearby', 'Community Pool'],
    homeTypes: 'Single Family, Townhomes',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80',
    slug: 'the-paseos',
    highlighted: true,
    yearBuilt: '2019-Present',
    schools: ['Highly Rated Elementary', 'Prestigious Middle School'],
    amenities: ['Community Pools', 'Playgrounds', 'Sports Courts'],
  },
  {
    name: 'Stonebridge',
    description:
      'Modern homes with resort-style amenities, perfectly positioned near Red Rock Canyon.',
    priceRange: '$650K - $1.2M',
    minPrice: 650000,
    maxPrice: 1200000,
    features: ['Resort Amenities', 'New Construction', 'Walking Trails', 'Fitness Center'],
    homeTypes: 'Single Family, Patio Homes',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80',
    slug: 'stonebridge',
    highlighted: true,
    yearBuilt: '2020-Present',
    schools: ['Top Elementary', 'High-Performing Middle School'],
    amenities: ['Resort Pool', 'Fitness Center', 'Tennis Courts'],
  },
  {
    name: 'Redpoint',
    description:
      'New construction with contemporary design and cutting-edge smart home technology.',
    priceRange: '$750K - $1.8M',
    minPrice: 750000,
    maxPrice: 1800000,
    features: ['New Construction', 'Contemporary', 'Builder Incentives', 'Smart Homes'],
    homeTypes: 'Single Family, Modern Design',
      image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80',
    slug: 'redpoint',
    highlighted: false,
    yearBuilt: '2021-Present',
    schools: ['Modern Elementary', 'STEM-Focused High School'],
    amenities: ['Modern Clubhouse', 'Co-working Spaces', 'Dog Parks'],
  },
  {
    name: 'Redpoint Square',
    description:
      'Urban-style living in Summerlin West with walkable access to downtown entertainment.',
    priceRange: '$600K - $1.1M',
    minPrice: 600000,
    maxPrice: 1100000,
    features: ['Urban Style', 'Walkable', 'Downtown Access', 'Transit Friendly'],
    homeTypes: 'Condos, Townhomes, Lofts',
      image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80',
    slug: 'redpoint-square',
    highlighted: false,
    yearBuilt: '2020-Present',
    schools: ['Urban Elementary', 'Arts-Focused Middle School'],
    amenities: ['Rooftop Terraces', 'Retail Shops', 'Cafes'],
  },
  {
    name: 'Reverence',
    description:
      'Luxury estates with unmatched privacy, elegant architecture, and panoramic city views.',
    priceRange: '$1.2M - $3M+',
    minPrice: 1200000,
    maxPrice: 3000000,
    features: ['Luxury Estates', 'Privacy', 'Elegant Design', 'City Views'],
    homeTypes: 'Custom Estates, Luxury Homes',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop&crop=entropy&auto=format&q=80',
    slug: 'reverence',
    highlighted: true,
    yearBuilt: '2017-Present',
    schools: ['Elite Private School', 'International Baccalaureate'],
    amenities: ['Private Club', 'Concierge Services', 'Wine Cellar'],
  },
];

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const community = communities.find((c) => c.slug === slug);
  if (!community) {
    redirect(
      'https://drjanduffy.realscout.com/homesearch/shared-searches/U2hhcmVhYmxlU2VhcmNoTGluay05NTMy'
    );
  }
  return (
    <div className={styles.page}>
      <main>
        <NeighborhoodHero
          neighborhood={{ name: community.name }}
          marketData={{
            medianPrice: community.minPrice,
            priceChange: 0,
            daysOnMarket: 14,
            marketTrend: 'flat',
          }}
        />
        <section className={styles.sectionCard}>
          <h1>{community.name}</h1>
          <Image
            src={community.image}
            alt={`${community.name} neighborhood homes in Summerlin West`}
            width={400}
            height={220}
            className={styles.communityImage}
          />
          <p>{community.description}</p>
          <ul>
            <li>
              <strong>Price Range:</strong> {community.priceRange}
            </li>
            <li>
              <strong>Home Types:</strong> {community.homeTypes}
            </li>
            <li>
              <strong>Year Built:</strong> {community.yearBuilt}
            </li>
            <li>
              <strong>Schools:</strong> {community.schools.join(', ')}
            </li>
            <li>
              <strong>Amenities:</strong> {community.amenities.join(', ')}
            </li>
            <li>
              <strong>Features:</strong> {community.features.join(', ')}
            </li>
          </ul>
          
          {/* Community Properties */}
          <section className={styles.sectionCard}>
            <h2>Properties in {community.name}</h2>
            <p>
              Discover homes available in {community.name}. This community offers 
              {community.description.toLowerCase()} with {community.features.join(', ').toLowerCase()}.
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

          {/* Advanced Property Search */}
          <section className={styles.sectionCard}>
            <h2>Advanced Property Search in {community.name}</h2>
            <p>
              Use our advanced search tool to find properties specifically in {community.name}. 
              Filter by price, features, and more to discover your perfect home in this community.
            </p>
            {/* @ts-ignore - RealScout web component */}
            <realscout-advanced-search agent-encoded-id="QWdlbnQtMjI1MDUw"></realscout-advanced-search>
          </section>

          {/* Simple Property Search */}
          <section className={styles.sectionCard}>
            <h2>Quick Property Search in {community.name}</h2>
            <p>
              Browse available properties in {community.name} with our simple search tool. 
              Perfect for quick property browsing in this community.
            </p>
            {/* @ts-ignore - RealScout web component */}
            <realscout-simple-search agent-encoded-id="QWdlbnQtMjI1MDUw"></realscout-simple-search>
          </section>

          {/* Additional Property Search Options */}
          <section className={styles.sectionCard}>
            <h2>Broader Market Options in {community.name}</h2>
            <p>
              Explore a comprehensive range of residential properties in {community.name} and surrounding Summerlin West communities. 
              From entry-level homes to luxury estates, discover all available options in this premier master-planned community.
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

          <Link href="/communities" className={styles.ctaBtn}>
            Back to All Communities
          </Link>
        </section>
      </main>
    </div>
  );
}
