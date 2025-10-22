'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './NeighborhoodSpotlight.module.css';

interface NeighborhoodSpotlightProps {
  className?: string;
}

interface NeighborhoodData {
  name: string;
  medianPrice: string;
  priceChange: string;
  recentSale: string;
  insiderTip: string;
}

const neighborhoods: NeighborhoodData[] = [
  {
    name: 'Summerlin West',
    medianPrice: '$650K',
    priceChange: '+6% vs 2024',
    recentSale: '1247 Canyon Vista sold $675K (3 days, multiple offers)',
    insiderTip: 'New construction in The Cliffs adding premium inventory',
  },
  {
    name: 'Henderson/Green Valley',
    medianPrice: '$525K',
    priceChange: '+4% vs 2024',
    recentSale: '892 Pecos Legacy closed $540K (14 days)',
    insiderTip: 'Best value for luxury amenities + A-rated schools',
  },
  {
    name: 'Centennial Hills',
    medianPrice: '$580K',
    priceChange: '+5% vs 2024',
    recentSale: '1456 Desert Peaks sold $595K (8 days, 4 offers)',
    insiderTip: 'Mountain views commanding 15% premiums',
  },
  {
    name: 'The Lakes/West Sahara',
    medianPrice: '$515K',
    priceChange: '+3% vs 2024',
    recentSale: '789 Lake Shore closed $525K (waterfront lot)',
    insiderTip: 'Waterfront properties still undervalued vs Phoenix',
  },
];

export default function NeighborhoodSpotlight({ className }: NeighborhoodSpotlightProps) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className={`${styles.neighborhoodSpotlight} ${className || ''}`}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>September 2025 Neighborhood Spotlight</h2>
        <p className={styles.sectionSubtitle}>
          Recent sales in Las Vegas's most sought-after areas
        </p>

        <div className={styles.neighborhoodsGrid}>
          {neighborhoods.map((neighborhood, neighborhoodIndex) => (
            <div
              key={`neighborhood-${neighborhood.name.replace(/\s+/g, '-').toLowerCase()}-${neighborhoodIndex}`}
              className={`${styles.neighborhoodCard} ${isVisible ? styles.fadeInUp : ''}`}
              data-delay={neighborhoodIndex * 0.1}
            >
              <h3 className={styles.neighborhoodName}>
                <strong>{neighborhood.name}</strong>
              </h3>
              <p className={styles.priceInfo}>
                <strong>Median Price:</strong> {neighborhood.medianPrice} (
                {neighborhood.priceChange})
              </p>
              <p className={styles.recentSale}>
                <strong>This Week:</strong> {neighborhood.recentSale}
              </p>
              <p className={styles.insiderTip}>
                <strong>Insider Tip:</strong> {neighborhood.insiderTip}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
