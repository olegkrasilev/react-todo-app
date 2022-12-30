import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Spinner } from 'widgets/spinner';

export const withRouter = (component: () => React.ReactNode) => () =>
  (
    <BrowserRouter>
      <Suspense fallback={<Spinner />}>{component()}</Suspense>
    </BrowserRouter>
  );
