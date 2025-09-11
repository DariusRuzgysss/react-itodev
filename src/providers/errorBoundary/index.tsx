import { QueryErrorResetBoundary } from '@tanstack/react-query';
import { ErrorBoundary } from 'react-error-boundary';
import type { PropsWithChildren } from 'react';
import { ErrorFallback } from '../../components';

const ErrorBoundaryProvider = ({ children }: PropsWithChildren) => {
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundary
          onReset={reset}
          fallbackRender={({ resetErrorBoundary }) => (
            <ErrorFallback
              message="There was an error!"
              buttonText="Try again"
              onReset={() => resetErrorBoundary()}
            />
          )}
        >
          {children}
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  );
};

export default ErrorBoundaryProvider;
