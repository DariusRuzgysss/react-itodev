import type { FallbackProps } from 'react-error-boundary';

export type ErrorBoundaryProviderProps = {
  children: React.ReactNode;
  fallback?: (props: FallbackProps) => React.ReactNode;
};
