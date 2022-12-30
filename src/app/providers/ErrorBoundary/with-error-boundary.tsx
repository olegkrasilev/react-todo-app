import { Suspense } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import { ErrorPage } from 'widgets/error-page';
import { Spinner } from 'widgets/spinner';

export const withErrorBoundary = (component: () => React.ReactNode) => () =>
  (
    <ErrorBoundary FallbackComponent={ErrorPage}>
      <Suspense fallback={<Spinner />}>{component()}</Suspense>
    </ErrorBoundary>
  );
