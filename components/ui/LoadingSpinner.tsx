'use client';

import styles from './LoadingSpinner.module.css';

interface LoadingSpinnerProps {
  className?: string;
}

export default function LoadingSpinner({ className }: LoadingSpinnerProps) {
  return (
    <div className={`${styles.spinner} ${className || ''}`}>
      <div className={styles.spinnerInner}></div>
    </div>
  );
}
