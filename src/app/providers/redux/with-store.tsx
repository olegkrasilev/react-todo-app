import { Suspense } from 'react';
import { Provider } from 'react-redux';

import { store } from 'app/store';

export const withReduxStore = (component: () => React.ReactNode) => () =>
  (
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    <Provider store={store}>
      <Suspense fallback='Loading...'>{component()}</Suspense>
    </Provider>
  );
