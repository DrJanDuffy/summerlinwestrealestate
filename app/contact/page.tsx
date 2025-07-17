import styles from "../page.module.css";
import Link from "next/link";
import SummerlinWestOverview from '../components/ui/SummerlinWestOverview';
import LatestMarketInsightsClient from '../../components/ui/LatestMarketInsightsClient';
import LeadCaptureFormClient from "../../components/ui/LeadCaptureFormClient";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaChevronDown,
} from "react-icons/fa";

export const metadata = {
  title: "Contact a Summerlin Real Estate Expert | Summerlin West Real Estate",
  description:
    "Contact a Summerlin real estate expert for buying, selling, or market questions. Get personalized help with Summerlin homes, communities, and market trends.",
  openGraph: {
    title:
      "Contact a Summerlin Real Estate Expert | Summerlin West Real Estate",
    description:
      "Contact a Summerlin real estate expert for buying, selling, or market questions. Get personalized help with Summerlin homes, communities, and market trends.",
  },
};

const socialLinks = [
  {
    name: "Browse Properties",
    url: "https://drjanduffy.realscout.com/homesearch/shared-searches/U2hhcmVhYmxlU2VhcmNoTGluay05NTMy",
    icon: <FaFacebook />,
    color: "#3A8DDE",
  },
  {
    name: "View Listings",
    url: "https://drjanduffy.realscout.com/homesearch/shared-searches/U2hhcmVhYmxlU2VhcmNoTGluay05NTMy",
    icon: <FaInstagram />,
    color: "#16B286",
  },
  {
    name: "Search Properties",
    url: "https://drjanduffy.realscout.com/homesearch/shared-searches/U2hhcmVhYmxlU2VhcmNoTGluay05NTMy",
    icon: <FaYoutube />,
    color: "#0A2540",
  },
];

const serviceAreas = [
  "Summerlin West",
  "The Vistas",
  "Stonebridge",
  "Redpoint",
  "The Cliffs",
  "Reverence",
  "Downtown Summerlin",
  "All Summerlin Villages",
];

const quickLinks = [
  { href: "/market-reports", label: "Summerlin Market Reports" },
  { href: "/current-listing", label: "Featured Home for Sale" },
  { href: "/about", label: "Meet Your Summerlin Expert" },
  { href: "/communities", label: "Explore Summerlin Communities" },
];

export default function Contact() {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        {/* Hero Section */}
        <section className={styles.hero}>
          <h1 className={styles.heroTitle}>
            Contact a Summerlin Real Estate Expert
          </h1>
          <p className={styles.heroSubtitle}>
            Get in touch for buying, selling, or market questions
          </p>
          <a href="#contact-form" className="btn btn-primary">
            <FaChevronDown /> Contact Form
          </a>
        </section>

        {/* Contact Form Section */}
        <section
          className={styles.section}
          aria-label="Send a Message"
          id="contact-form"
        >
          <h2 className={styles.sectionTitle}>Send a Message</h2>
          <LeadCaptureFormClient
            variant="inline"
            title="Contact a Summerlin Real Estate Expert"
            subtitle="Get personalized help with Summerlin homes, communities, and market trends."
            source="Contact Page"
          />
        </section>

        {/* Quick Links Section */}
        <section className={styles.section} aria-label="Quick Links">
          <h2 className={styles.sectionTitle}>Quick Links</h2>
          <div className={styles.grid}>
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={styles.card}
              >
                <h3 className="text-xl font-semibold mb-2">{link.label}</h3>
                <p className="text-gray-600">Learn more about {link.label.toLowerCase()}</p>
              </Link>
            ))}
          </div>
        </section>

        {/* Office Location Section */}
        <section className={styles.section} aria-label="Our Office">
          <h2 className={styles.sectionTitle}>Our Office</h2>
          <div className={styles.grid}>
            <div className={styles.card}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Office Location</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <FaMapMarkerAlt className="text-brand-600 text-xl mt-1" />
                      <div>
                        <p className="font-medium">1980 Festival Plaza Dr (One Summerlin)</p>
                        <p className="text-gray-600">Las Vegas, NV 89135</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <FaPhone className="text-brand-600 text-xl" />
                      <a href="tel:7025500112" className="text-brand-600 hover:text-brand-700 transition-colors">
                        (702) 550-0112
                      </a>
                    </div>
                    <div className="flex items-center gap-3">
                      <FaEnvelope className="text-brand-600 text-xl" />
                      <a
                        href="mailto:info@summerlinwestrealestate.com"
                        className="text-brand-600 hover:text-brand-700 transition-colors"
                      >
                        info@summerlinwestrealestate.com
                      </a>
                    </div>
                    <div className="flex gap-4 pt-4">
                      {socialLinks.map((s) => (
                        <a
                          key={s.name}
                          href={s.url}
                          target="_blank"
                          rel="noreferrer"
                          aria-label={s.name}
                          className="text-gray-400 hover:text-brand-600 transition-colors text-2xl"
                        >
                          {s.icon}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <div>
                  <iframe
                    title="Office Location Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3218.123456789!2d-115.3336!3d36.1540!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c8c1a2b3c4d5e6%3A0x1234567890abcdef!2s1980%20Festival%20Plaza%20Dr%2C%20Las%20Vegas%2C%20NV%2089135!5e0!3m2!1sen!2sus!4v1710000000000!5m2!1sen!2sus"
                    width="100%"
                    height="300"
                    className="rounded-lg border border-gray-200"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas Section */}
        <section className={styles.section} aria-label="Areas We Serve">
          <h2 className={styles.sectionTitle}>Areas We Serve</h2>
          <div className={styles.card}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {serviceAreas.map((area) => (
                <span key={area} className="px-4 py-2 bg-brand-100 text-brand-700 rounded-lg text-center font-medium">
                  {area}
                </span>
              ))}
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <p className="text-green-800">
                <strong>Response Time:</strong> We reply to all inquiries within 1
                business day (often much faster!)
              </p>
            </div>
          </div>
        </section>

        {/* Market Insights Section */}
        <section className={styles.section} aria-label="Market Insights">
          <h2 className={styles.sectionTitle}>Featured Summerlin Listings</h2>
          <LatestMarketInsightsClient />
        </section>
      </div>
    </div>
  );
}
