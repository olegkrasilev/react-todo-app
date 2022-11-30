import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import { ErrorPage } from 'widgets/error-page';

export const withErrorBoundary = (component: () => React.ReactNode) => () =>
  (
    <ErrorBoundary FallbackComponent={ErrorPage}>
      <Suspense fallback='Loading...'>{component()}</Suspense>
    </ErrorBoundary>
  );
