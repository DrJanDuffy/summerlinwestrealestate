import type { Metadata } from 'next';
import InternalLinking from '../../components/ui/InternalLinking';
import { generateFAQSchema } from '../../lib/structured-data';

export const metadata: Metadata = {
  title: 'Frequently Asked Questions | Summerlin West Real Estate | Dr. Jan Duffy',
  description:
    'Get answers to common questions about buying and selling homes in Summerlin West. Expert insights from Dr. Jan Duffy, top REALTOR® with $6B+ in sales.',
  alternates: {
    canonical: '/faq',
  },
  openGraph: {
    title: 'Frequently Asked Questions | Summerlin West Real Estate | Dr. Jan Duffy',
    description:
      'Get answers to common questions about buying and selling homes in Summerlin West. Expert insights from Dr. Jan Duffy, top REALTOR® with $6B+ in sales.',
    url: 'https://www.summerlinwestrealestate.com/faq',
    siteName: 'Summerlin West Real Estate',
    images: [
      {
        url: '/images/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Summerlin West Real Estate FAQ',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Frequently Asked Questions | Summerlin West Real Estate | Dr. Jan Duffy',
    description:
      'Get answers to common questions about buying and selling homes in Summerlin West. Expert insights from Dr. Jan Duffy, top REALTOR® with $6B+ in sales.',
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

const faqs = [
  {
    question: 'What are the best communities in Summerlin West?',
    answer:
      'The best communities in Summerlin West include The Vistas with its Red Rock Canyon views and 26 subdivisions, Stonebridge with gated luxury and resort amenities, and Paradiso with custom homes and mountain views. Each offers unique features from family-friendly neighborhoods to exclusive gated communities.',
  },
  {
    question: 'How much do homes cost in Summerlin West?',
    answer:
      'Homes in Summerlin West range from $600,000 to over $2.5 million, with luxury properties in The Vistas and Stonebridge commanding premium prices. The area offers excellent value with master-planned amenities, top-rated schools, and proximity to Red Rock Canyon.',
  },
  {
    question: 'Who is the best real estate agent in Summerlin West?',
    answer:
      'Dr. Jan Duffy is recognized as one of the top real estate agents in Summerlin West, with over $6 billion in sales volume and 15+ years of experience. She specializes in luxury properties and provides expert guidance for The Vistas, Stonebridge, and other premier communities.',
  },
  {
    question: 'What makes Summerlin West different from other Las Vegas areas?',
    answer:
      "Summerlin West stands out for its master-planned community design, proximity to Red Rock Canyon, top-rated schools, and luxury amenities. It offers a unique combination of natural beauty, urban convenience, and high-end living that's unmatched in the Las Vegas Valley.",
  },
  {
    question: 'Are there good schools in Summerlin West?',
    answer:
      'Yes, Summerlin West is served by some of the top-rated schools in the Clark County School District. The area features highly-rated elementary, middle, and high schools, with many students achieving academic excellence and participating in award-winning programs.',
  },
  {
    question: 'What amenities are available in Summerlin West?',
    answer:
      'Summerlin West offers extensive amenities including over 150 miles of walking trails, championship golf courses, community centers, pools, tennis courts, and parks. Residents also enjoy easy access to Downtown Summerlin for shopping, dining, and entertainment.',
  },
  {
    question: 'Is Summerlin West a good investment?',
    answer:
      'Summerlin West has consistently shown strong appreciation and is considered one of the best real estate investments in Las Vegas. The master-planned community design, limited supply, and high demand make it a stable and appreciating market.',
  },
  {
    question: 'What is the average time to sell a home in Summerlin West?',
    answer:
      "The average time to sell a home in Summerlin West varies by price range and condition, but well-priced properties typically sell within 30-60 days. Dr. Jan Duffy's average list-to-sale ratio is 98%, with many properties selling above asking price.",
  },
  {
    question: 'Are there new construction homes available in Summerlin West?',
    answer:
      'Yes, there are several new construction communities in Summerlin West, including developments in The Vistas, Stonebridge, and Redpoint. These offer modern designs, smart home technology, and builder incentives.',
  },
  {
    question: 'What should I know about HOA fees in Summerlin West?',
    answer:
      'HOA fees in Summerlin West vary by community, typically ranging from $150-$400 per month. These fees cover amenities like pools, tennis courts, landscaping, and community maintenance. The fees are generally considered reasonable given the extensive amenities provided.',
  },
  {
    question: 'How do I get started buying a home in Summerlin West?',
    answer:
      "Start by contacting Dr. Jan Duffy for a consultation. She'll help you understand the market, get pre-approved for financing, and begin your search. Her expertise and local knowledge will guide you through the entire process.",
  },
  {
    question: 'What is the property tax rate in Summerlin West?',
    answer:
      "Property tax rates in Summerlin West are approximately 3.5% of assessed value, which is competitive for Nevada. The area's strong property values and excellent amenities make the tax investment worthwhile for most homeowners.",
  },
];

const structuredData = generateFAQSchema(faqs);

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <main className="faq-page">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-r from-blue-900 to-indigo-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Frequently Asked Questions
            </h1>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Get expert answers to common questions about buying and selling homes in Summerlin
              West. Dr. Jan Duffy provides insights based on over $6 billion in sales and 15+ years
              of experience.
            </p>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-8">
              {faqs.map((faq) => (
                <div
                  key={faq.question}
                  className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm"
                >
                  <h2 className="text-xl font-semibold text-gray-900 mb-4">{faq.question}</h2>
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Still Have Questions?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Dr. Jan Duffy is here to help with personalized guidance and expert insights. Contact
              her today for a confidential consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+17025500112"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                Call (702) 550-0112
              </a>
              <a
                href="/contact"
                className="inline-flex items-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
              >
                Contact Form
              </a>
            </div>
          </div>
        </section>

        {/* Internal Linking Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <InternalLinking
              currentPage="faq"
              title="Explore More Summerlin West Resources"
              description="Discover comprehensive resources for buying, selling, and investing in Summerlin West luxury real estate. From market insights to community guides, find everything you need to make informed decisions."
              showFeaturedSnippets={true}
              maxLinks={6}
            />
          </div>
        </section>
      </main>
    </>
  );
}
