import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import { fallback } from './ui';

export const withErrorBoundary = (component: () => React.ReactNode) => () =>
  (
    <ErrorBoundary FallbackComponent={fallback}>
      <Suspense fallback='Loading...'>{component()}</Suspense>
    </ErrorBoundary>
  );
