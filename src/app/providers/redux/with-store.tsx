import { Suspense } from 'react';
import { Provider } from 'react-redux';

import { store } from 'app/store';
import { Spinner } from 'widgets/spinner';

export const withReduxStore = (component: () => React.ReactNode) => () =>
  (
    <Provider store={store}>
      <Suspense fallback={<Spinner />}>{component()}</Suspense>
    </Provider>
  );
