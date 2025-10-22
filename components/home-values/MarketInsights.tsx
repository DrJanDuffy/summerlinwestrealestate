'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './MarketInsights.module.css';

interface MarketInsightsProps {
  className?: string;
}

interface InsightData {
  title: string;
  content: string;
  bottomLine: string;
}

const insights: InsightData[] = [
  {
    title: '🏠 For Sellers: Maximum Equity Opportunity',
    content:
      'Home values increased 5.5% this year - but online estimates miss the mark by 15-20%. Your corner lot, upgraded kitchen, or pool could add $50K+ to your value. Recent example: 425 Desert Rose listed at $520K, sold for $547K in 12 days with 6 offers.',
    bottomLine: "Don't rely on Zillow's \"Zestimate\" - your home's worth more than you think.",
  },
  {
    title: '🎯 For Buyers: Strategy Beats Speed',
    content:
      "Inventory up 31% means more choices, but 67% of homes still sell in 30 days. Smart buyers win with proper pre-approval, local market knowledge, and strategic offer timing. This week's winner: $475K offer on $485K list price with inspection waiver.",
    bottomLine: "It's not about the highest offer - it's about the smartest offer.",
  },
];

export default function MarketInsights({ className }: MarketInsightsProps) {
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
    <section ref={sectionRef} className={`${styles.marketInsights} ${className || ''}`}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>What These Numbers Mean for YOU</h2>
        <p className={styles.sectionSubtitle}>
          Expert insights from 20+ years in Las Vegas luxury real estate
        </p>

        <div className={styles.insightsGrid}>
          {insights.map((insight, insightIndex) => (
            <div
              key={`insight-${insight.title.replace(/\s+/g, '-').toLowerCase()}-${insightIndex}`}
              className={`${styles.insightCard} ${isVisible ? styles.fadeInUp : ''}`}
              data-delay={insightIndex * 0.2}
            >
              <h3 className={styles.insightTitle}>{insight.title}</h3>
              <p className={styles.insightContent}>{insight.content}</p>
              <p className={styles.bottomLine}>
                <strong>Bottom line:</strong> {insight.bottomLine}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
