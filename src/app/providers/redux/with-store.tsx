import { Suspense } from 'react';
import { Provider } from 'react-redux';

import { store } from 'app/store';

export const withReduxStore = (component: () => React.ReactNode) => () =>
  (
    <Provider store={store}>
      <Suspense fallback='Loading...'>{component()}</Suspense>
    </Provider>
  );
