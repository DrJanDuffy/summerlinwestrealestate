import type { Metadata } from 'next'
import { Suspense } from 'react'
import HomeValuesHero from '@/components/home-values/HomeValuesHero'
import MarketStats from '@/components/home-values/MarketStats'
import MarketInsights from '@/components/home-values/MarketInsights'
import NeighborhoodSpotlight from '@/components/home-values/NeighborhoodSpotlight'
import ContactSection from '@/components/home-values/ContactSection'
import HomeValuationForm from '@/components/home-values/HomeValuationForm'
import LoadingSpinner from '@/components/ui/LoadingSpinner'
import StructuredData from '@/components/ui/StructuredData'

export const metadata: Metadata = {
  title: "Las Vegas Home Values 2025: What's YOUR Home Worth Right Now?",
  description: "Discover your Las Vegas home's true value in 2025. See current market prices, recent sales, and get your free home valuation from Dr. Jan Duffy - Top 1% Las Vegas REALTOR®.",
  keywords: [
    'Las Vegas home values',
    'home valuation',
    'property worth',
    'Las Vegas real estate',
    'home price estimate',
    'Dr. Jan Duffy',
    'Summerlin West homes',
    'Henderson real estate',
    'Centennial Hills',
    'free home appraisal'
  ],
  openGraph: {
    title: "Las Vegas Home Values 2025: What's YOUR Home Worth Right Now?",
    description: "Discover your Las Vegas home's true value in 2025. See current market prices, recent sales, and get your free home valuation from Dr. Jan Duffy - Top 1% Las Vegas REALTOR®.",
    type: 'website',
    locale: 'en_US',
    siteName: 'Summerlin West Real Estate',
    images: [
      {
        url: '/images/las-vegas-home-values-2025.jpg',
        width: 1200,
        height: 630,
        alt: 'Las Vegas Home Values 2025 - Dr. Jan Duffy Real Estate Expert'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: "Las Vegas Home Values 2025: What's YOUR Home Worth Right Now?",
    description: "Discover your Las Vegas home's true value in 2025. See current market prices, recent sales, and get your free home valuation from Dr. Jan Duffy - Top 1% Las Vegas REALTOR®.",
    images: ['/images/las-vegas-home-values-2025.jpg']
  },
  alternates: {
    canonical: 'https://summerlinwestrealestate.com/home-values'
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
  }
}

// Structured Data for Real Estate
const structuredData = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  "name": "Dr. Jan Duffy",
  "description": "Top 1% Las Vegas REALTOR® with 20+ years of proven results in luxury real estate",
  "url": "https://summerlinwestrealestate.com",
  "telephone": "+1-702-550-0112",
  "email": "DrJanSells@SummerlinWestRealEstate.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Las Vegas",
    "addressRegion": "NV",
    "addressCountry": "US"
  },
  "areaServed": [
    "Las Vegas",
    "Summerlin West",
    "Henderson",
    "Centennial Hills",
    "The Lakes"
  ],
  "serviceType": "Real Estate Services",
  "priceRange": "$300K - $2M+",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Real Estate Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Free Home Valuation",
          "description": "Professional home value assessment with current market analysis"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Property Sales",
          "description": "Expert representation for selling luxury homes in Las Vegas"
        }
      }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.9",
    "reviewCount": "127",
    "bestRating": "5",
    "worstRating": "1"
  }
}

export default function HomeValuesPage() {
  return (
    <>
      <StructuredData data={structuredData} />
      
      <main className="home-values-page">
        <Suspense fallback={<LoadingSpinner />}>
          <HomeValuesHero />
        </Suspense>
        
        <Suspense fallback={<LoadingSpinner />}>
          <MarketStats />
        </Suspense>
        
        <Suspense fallback={<LoadingSpinner />}>
          <MarketInsights />
        </Suspense>
        
        <Suspense fallback={<LoadingSpinner />}>
          <NeighborhoodSpotlight />
        </Suspense>
        
        <Suspense fallback={<LoadingSpinner />}>
          <HomeValuationForm />
        </Suspense>
        
        <Suspense fallback={<LoadingSpinner />}>
          <ContactSection />
        </Suspense>
      </main>
    </>
  )
}
