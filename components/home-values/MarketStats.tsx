'use client'

import { useState, useEffect, useRef } from 'react'
import styles from './MarketStats.module.css'

interface MarketStatsProps {
  className?: string
}

interface StatData {
  value: string
  label: string
  trend: string
  trendType: 'up' | 'down' | 'neutral'
}

const marketStats: StatData[] = [
  {
    value: '$445K',
    label: 'Median Home Price',
    trend: '↗ +2.3% vs last year',
    trendType: 'up'
  },
  {
    value: '55',
    label: 'Average Days on Market',
    trend: "Sellers' market conditions",
    trendType: 'neutral'
  },
  {
    value: '$480K',
    label: 'Single Family Homes',
    trend: 'Strong demand continues',
    trendType: 'up'
  },
  {
    value: '$303K',
    label: 'Condos & Townhomes',
    trend: '+4.4% year-over-year',
    trendType: 'up'
  }
]

export default function MarketStats({ className }: MarketStatsProps) {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className={`${styles.marketStats} ${className || ''}`}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Las Vegas Market Snapshot - September 2025</h2>
        <p className={styles.sectionSubtitle}>Real data from actual sales this month</p>
        
        <div className={styles.statsGrid}>
          {marketStats.map((stat, statIndex) => (
            <div 
              key={`stat-${stat.value}-${statIndex}`}
              className={`${styles.statCard} ${isVisible ? styles.fadeInUp : ''}`}
              data-delay={statIndex * 0.1}
            >
              <span className={styles.statNumber}>{stat.value}</span>
              <div className={styles.statLabel}>
                {stat.label}
                <br />
                <span className={`${styles.trend} ${styles[stat.trendType]}`}>
                  {stat.trend}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
