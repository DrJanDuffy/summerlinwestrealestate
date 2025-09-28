'use client'

import { useState, useEffect } from 'react'
import styles from './HomeValuesHero.module.css'

interface HomeValuesHeroProps {
  className?: string
}

export default function HomeValuesHero({ className }: HomeValuesHeroProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className={`${styles.hero} ${className || ''}`}>
      <div className={styles.container}>
        <h1 className={`${styles.heroTitle} ${isVisible ? styles.fadeInUp : ''}`}>
          What's YOUR Las Vegas Home Worth in 2025?
        </h1>
        <p className={`${styles.heroSubtitle} ${isVisible ? styles.fadeInUp : ''}`}>
          Current market value • Recent neighborhood sales • Expert analysis from Dr. Jan Duffy
        </p>
        <a 
          href="tel:702-222-1964" 
          className={`${styles.ctaButton} ${styles.pulse} ${isVisible ? styles.fadeInUp : ''}`}
          aria-label="Call Dr. Jan Duffy for free home valuation"
        >
          Get My FREE Home Value Now: 702-222-1964
        </a>
      </div>
    </section>
  )
}

