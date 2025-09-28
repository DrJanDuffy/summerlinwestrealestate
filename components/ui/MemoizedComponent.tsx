'use client';
import { memo, type ReactNode } from 'react';

interface MemoizedComponentProps {
  children: ReactNode;
  name?: string;
}

/**
 * Higher-order component for memoizing expensive components
 * Use this wrapper for components that receive stable props
 */
export default function MemoizedComponent({ children, name }: MemoizedComponentProps) {
  return memo(
    () => <>{children}</>,
    () => true
  );
}

/**
 * Memo wrapper for components with props
 */
export function withMemo<T extends object>(
  Component: React.ComponentType<T>,
  areEqual?: (prevProps: T, nextProps: T) => boolean
) {
  return memo(Component, areEqual);
}

/**
 * Memo wrapper for components that should only re-render when specific props change
 */
export function withStableMemo<T extends object>(
  Component: React.ComponentType<T>,
  stableProps: (keyof T)[]
) {
  return memo(Component, (prevProps, nextProps) => {
    return stableProps.every((prop) => prevProps[prop] === nextProps[prop]);
  });
}
