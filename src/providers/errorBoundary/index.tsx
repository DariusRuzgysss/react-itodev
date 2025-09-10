import { QueryErrorResetBoundary } from '@tanstack/react-query';
import { ErrorBoundary } from 'react-error-boundary';
import Button from '@mui/material/Button';
import type { ErrorBoundaryProviderProps } from './types';

const ErrorBoundaryProvider = ({
  children,
  fallback,
}: ErrorBoundaryProviderProps) => {
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundary
          onReset={reset}
          fallbackRender={
            fallback ??
            (({ resetErrorBoundary }) => (
              <div className="flex flex-col items-center gap-4 p-4 text-center">
                <p className="text-red-600 font-medium">There was an error!</p>
                <Button variant="outlined" onClick={() => resetErrorBoundary()}>
                  Try again
                </Button>
              </div>
            ))
          }
        >
          {children}
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  );
};

export default ErrorBoundaryProvider;
