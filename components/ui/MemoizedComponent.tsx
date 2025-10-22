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
export default function MemoizedComponent({ children, name: _name }: MemoizedComponentProps) {
  const MemoizedChild = memo(
    function MemoizedChildComponent() {
      return <>{children}</>;
    },
    () => true
  );

  MemoizedChild.displayName = `MemoizedComponent(${_name || 'Anonymous'})`;

  return <MemoizedChild />;
}

/**
 * Memo wrapper for components with props
 */
export function withMemo<T extends object>(
  Component: React.ComponentType<T>,
  areEqual?: (_prevProps: T, _nextProps: T) => boolean
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
