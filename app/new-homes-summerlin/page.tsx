"use client";

import styles from "../page.module.css";
import Link from "next/link";
import dynamic from "next/dynamic";
import SummerlinWestOverview from "@/components/ui/SummerlinWestOverview";

// Dynamic imports for client components
const LatestMarketInsights = dynamic(
  () => import("../../components/ui/LatestMarketInsights"),
  { ssr: false }
);

const LeadCaptureForm = dynamic(
  () => import("../../components/ui/LeadCaptureForm"),
  { ssr: false }
);

export default function NewHomesSummerlin() {
  return (
    <div className={styles.page}>
      <main>
        {/* Header Section */}
        <header style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', padding: '2rem 0', textAlign: 'center', boxShadow: '0 4px 6px rgba(0,0,0,0.1)'}}>
          <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 20px'}}>
            <h1 style={{fontSize: '2.5rem', marginBottom: '0.5rem', textShadow: '2px 2px 4px rgba(0,0,0,0.3)'}}>New Construction Homes in Summerlin West</h1>
            <p style={{fontSize: '1.2rem', opacity: 0.9, marginBottom: '1rem'}}>Luxury Living at the Gateway to Red Rock Canyon</p>
            <p><strong>Dr. Jan Duffy, REALTOR® | Your New Construction Specialist</strong></p>
          </div>
        </header>

        {/* Intro Section */}
        <section style={{background: 'white', padding: '3rem 0', boxShadow: '0 2px 10px rgba(0,0,0,0.1)'}}>
          <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 20px'}}>
            <div style={{textAlign: 'center', maxWidth: '800px', margin: '0 auto'}}>
              <h2 style={{color: '#764ba2', marginBottom: '1.5rem', fontSize: '2rem'}}>Build Your Dream Home in Summerlin West</h2>
              <p style={{fontSize: '1.1rem', marginBottom: '1.5rem', color: '#555'}}>Discover the ultimate in luxury living with brand-new construction homes in Summerlin West, Las Vegas's most prestigious master-planned community. As your dedicated new construction specialist, Dr. Jan Duffy provides expert guidance through every step of building your dream home with Summerlin's premier national builders.</p>
              <p style={{fontSize: '1.1rem', marginBottom: '1.5rem', color: '#555'}}>From energy-efficient designs to cutting-edge smart home technology, these new homes offer the perfect blend of innovation, quality, and the legendary Summerlin lifestyle—all with breathtaking Red Rock Canyon views and world-class amenities at your doorstep.</p>
            </div>
          </div>
        </section>

        {/* Builders Section */}
        <section style={{padding: '4rem 0', background: '#f8f9fa'}}>
          <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 20px'}}>
            <h2 style={{textAlign: 'center', fontSize: '2.2rem', color: '#764ba2', marginBottom: '3rem'}}>Meet Summerlin's Premier Builders</h2>
            <p style={{textAlign: 'center', fontSize: '1.1rem', marginBottom: '2rem', color: '#666'}}>Summerlin's all-star roster of national homebuilders ensures quality, innovation, and progressive home design while maintaining the community's aesthetic excellence and lasting value.</p>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem', marginTop: '2rem'}}>
              {/* Builder Cards */}
              {[
                {name: 'KB Home', desc: 'Building dreams since 1957, KB Home offers customizable new construction with dependable materials and an industry-leading 10-year limited warranty. Their commitment to quality homes at affordable prices, combined with outstanding customer service, makes them a trusted choice for Summerlin West families.', link: 'https://drjanduffy.realscout.com/homesearch/map?geo_type=neighborhood&geo_id=1049260&for_sale=1&for_rent=0'},
                {name: 'Toll Brothers', desc: "America's luxury home builder since 1967, Toll Brothers homes perform well above building code standards. Each community is managed with meticulous attention to detail, offering the personalized service of a local builder backed by national resources and an impeccable reputation.", link: 'https://drjanduffy.realscout.com/homesearch/map?geo_type=neighborhood&geo_id=1049260&for_sale=1&for_rent=0'},
                {name: 'Taylor Morrison', desc: 'Wherever life takes you, Taylor Morrison builds homes and communities inspired by you. They believe your life should feel inspired—by joy, adventure, and new beginnings. Their innovative designs and community focus make finding your perfect Summerlin West home effortless.', link: 'https://drjanduffy.realscout.com/homesearch/map?geo_type=neighborhood&geo_id=1049260&for_sale=1&for_rent=0'},
                {name: 'Lennar', desc: 'With the Logic of Lennar, you get everything you want and need to enhance luxury, quality, and ease of purchase. Founded in 1954, Lennar is dedicated to Total Lennar Care (TLC), making the home buying process a true celebration for all generations.', link: 'https://drjanduffy.realscout.com/homesearch/map?geo_type=neighborhood&geo_id=1049260&for_sale=1&for_rent=0'},
                {name: 'Pulte Homes', desc: 
                  "Pulte's Life Tested® homes are designed and built for the way you live. With functional design, innovation, and beautiful liveable communities, Pulte offers energy-efficient homebuilding with more customer satisfaction awards than any other homebuilder.", link: 'https://drjanduffy.realscout.com/homesearch/map?geo_type=neighborhood&geo_id=1049260&for_sale=1&for_rent=0'},
                {name: 'Richmond American Homes', desc: 'For over 45 years, Richmond American has designed and built 240,000+ homes with livability and style in mind. Their designer-curated details and inviting layouts fit any lifestyle, backed by experience, quality craftsmanship, and unwavering customer service.', link: 'https://drjanduffy.realscout.com/homesearch/map?geo_type=neighborhood&geo_id=1049260&for_sale=1&for_rent=0'},
                {name: 'SHAWOOD', desc: "The flagship brand of Sekisui House, one of the world's largest residential homebuilders. Since 1995, SHAWOOD uses proprietary technology for maximum design flexibility while being stronger, safer, and more sustainable—home, perfected.", link: 'https://drjanduffy.realscout.com/homesearch/map?geo_type=neighborhood&geo_id=1049260&for_sale=1&for_rent=0'},
                {name: 'Tri Pointe Homes', desc: "In the life-changing business, Tri Pointe designs homes, neighborhoods, and experiences that inspire and uplift. As local specialists on a national scale, they're customer-driven and committed to environmentally responsible practices and enduring craftsmanship.", link: 'https://drjanduffy.realscout.com/homesearch/map?geo_type=neighborhood&geo_id=1049260&for_sale=1&for_rent=0'},
                {name: 'Woodside Homes', desc: 'A highly respected leader integrating great design with green solutions. Utilizing the latest technology and construction methods, Woodside puts great design and flexible choices within reach, making the process fun, easy, and affordable.', link: 'https://drjanduffy.realscout.com/homesearch/map?geo_type=neighborhood&geo_id=1049260&for_sale=1&for_rent=0'},
                {name: 'Edward Homes', desc: 'A local development firm built on being attentive to every detail and fiscally responsible. Edward Homes believes quality, not quantity, matters most. Their Thrive community offers modern townhome living with low-maintenance lifestyle near Downtown Summerlin.', link: 'https://drjanduffy.realscout.com/homesearch/map?geo_type=neighborhood&geo_id=1049260&for_sale=1&for_rent=0'},
              ].map((builder, idx) => (
                <div key={builder.name} style={{background: 'white', borderRadius: '15px', padding: '2rem', boxShadow: '0 8px 25px rgba(0,0,0,0.1)', transition: 'transform 0.3s, box-shadow 0.3s', borderLeft: '5px solid #667eea'}}>
                  <h3 style={{color: '#764ba2', marginBottom: '1rem', fontSize: '1.4rem'}}>{builder.name}</h3>
                  <p style={{color: '#666', marginBottom: '1.5rem', lineHeight: 1.6}}>{builder.desc}</p>
                  <a href={builder.link} className="view-inventory-btn" style={{background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', padding: '0.8rem 1.5rem', border: 'none', borderRadius: '25px', cursor: 'pointer', fontWeight: 'bold', textDecoration: 'none', display: 'inline-block', transition: 'all 0.3s'}} target="_blank" rel="noopener noreferrer">View {builder.name} Inventory</a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section style={{padding: '4rem 0', background: 'white'}}>
          <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 20px'}}>
            <h2 style={{textAlign: 'center', fontSize: '2.2rem', color: '#764ba2', marginBottom: '3rem'}}>Why Choose New Construction in Summerlin West?</h2>
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginTop: '2rem'}}>
              <div style={{textAlign: 'center', padding: '1.5rem'}}>
                <div style={{width: '60px', height: '60px', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', borderRadius: '50%', margin: '0 auto 1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '1.5rem'}}>🏠</div>
                <h4 style={{color: '#764ba2', marginBottom: '0.5rem'}}>Latest Design Trends</h4>
                <p>Energy-efficient features, smart home technology, and contemporary layouts designed for modern living</p>
              </div>
              <div style={{textAlign: 'center', padding: '1.5rem'}}>
                <div style={{width: '60px', height: '60px', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', borderRadius: '50%', margin: '0 auto 1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '1.5rem'}}>🛡️</div>
                <h4 style={{color: '#764ba2', marginBottom: '0.5rem'}}>Builder Warranties</h4>
                <p>Comprehensive protection with industry-leading warranties up to 10 years for peace of mind</p>
              </div>
              <div style={{textAlign: 'center', padding: '1.5rem'}}>
                <div style={{width: '60px', height: '60px', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', borderRadius: '50%', margin: '0 auto 1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '1.5rem'}}>🏔️</div>
                <p>Premium location with Red Rock Canyon views, 150+ miles of trails, and world-class amenities</p>
              </div>
              <div style={{textAlign: 'center', padding: '1.5rem'}}>
                <div style={{width: '60px', height: '60px', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', borderRadius: '50%', margin: '0 auto 1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '1.5rem'}}>👩‍🎓</div>
                <h4 style={{color: '#764ba2', marginBottom: '0.5rem'}}>Expert Guidance</h4>
                <p>Dr. Jan Duffy's expertise in new construction contracts, builder negotiations, and Summerlin market knowledge</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section style={{background: 'linear-gradient(135deg, #764ba2 0%, #667eea 100%)', color: 'white', padding: '4rem 0', textAlign: 'center'}}>
          <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 20px'}}>
            <div>
              <h2 style={{fontSize: '2.2rem', marginBottom: '1rem'}}>Ready to Build Your Summerlin West Dream Home?</h2>
              <p style={{fontSize: '1.2rem', marginBottom: '2rem', opacity: 0.9}}>Let Dr. Jan Duffy guide you through the new construction process with her expert knowledge of builders, communities, and market timing.</p>
              <div style={{display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap'}}>
                <a href="#" className="cta-btn" style={{background: 'white', color: '#764ba2', padding: '1rem 2rem', border: 'none', borderRadius: '30px', fontWeight: 'bold', textDecoration: 'none', display: 'inline-block', transition: 'all 0.3s'}}>
                  Schedule Builder Tour
                </a>
                <a href="#" className="cta-btn" style={{background: 'white', color: '#764ba2', padding: '1rem 2rem', border: 'none', borderRadius: '30px', fontWeight: 'bold', textDecoration: 'none', display: 'inline-block', transition: 'all 0.3s'}}>
                  Get New Construction Guide
                </a>
                <a href="/contact" className="cta-btn" style={{background: 'white', color: '#764ba2', padding: '1rem 2rem', border: 'none', borderRadius: '30px', fontWeight: 'bold', textDecoration: 'none', display: 'inline-block', transition: 'all 0.3s'}}>
                  Contact Dr. Duffy
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer Section */}
        <footer style={{background: '#333', color: 'white', padding: '2rem 0', textAlign: 'center'}}>
          <div style={{maxWidth: '1200px', margin: '0 auto', padding: '0 20px'}}>
            <p>&copy; 2025 Dr. Jan Duffy, REALTOR® | SummerlinWestRealEstate.com | Licensed in Nevada</p>
            <p>Specializing in Summerlin West New Construction | Red Rock Canyon Luxury Homes</p>
          </div>
        </footer>
      </main>
    </div>
  );
}
