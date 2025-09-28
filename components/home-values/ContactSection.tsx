'use client'

import { useState, useEffect, useRef } from 'react'
import styles from './ContactSection.module.css'

interface ContactSectionProps {
  className?: string
}

export default function ContactSection({ className }: ContactSectionProps) {
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
    <section ref={sectionRef} className={`${styles.contactSection} ${className || ''}`}>
      <div className={styles.container}>
        <div className={styles.contactContent}>
          <h2 className={`${styles.contactTitle} ${isVisible ? styles.fadeInUp : ''}`}>
            Ready to Discover Your Home's TRUE Market Value?
          </h2>
          <p className={`${styles.contactSubtitle} ${isVisible ? styles.fadeInUp : ''}`}>
            I'll pull fresh comparables tonight and show you exactly what your home's worth in today's market
          </p>
          
          <div className={`${styles.phoneNumber} ${isVisible ? styles.fadeInUp : ''}`}>
            702-222-1964
          </div>
          
          <div className={`${styles.agentInfo} ${isVisible ? styles.fadeInUp : ''}`}>
            <p className={styles.agentName}>
              <strong>Dr. Jan Duffy</strong>
            </p>
            <p className={styles.agentTitle}>
              Las Vegas Real Estate Expert 🎰
            </p>
            <p className={styles.agentCredentials}>
              Top 1% REALTOR® | 20+ Years Proven Results
            </p>
            <p className={styles.licenseNumber}>
              License #S.0185709
            </p>
          </div>
          
          <a 
            href="tel:702-222-1964" 
            className={`${styles.ctaButton} ${isVisible ? styles.fadeInUp : ''}`}
            aria-label="Call Dr. Jan Duffy for free home analysis"
          >
            Call/Text Now for FREE Analysis
          </a>
          
          <p className={`${styles.disclaimer} ${isVisible ? styles.fadeInUp : ''}`}>
            Same-day response • No obligation • Expert market insights included
          </p>
        </div>
      </div>
    </section>
  )
}

