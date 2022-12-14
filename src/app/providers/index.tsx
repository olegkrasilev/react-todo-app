import compose from 'compose-function';

import { withErrorBoundary } from './ErrorBoundary';
import { withI18n } from './i18n';
import { withReduxStore } from './redux';
import { withRouter } from './Router';

export const withProviders = compose(
  withRouter,
  withErrorBoundary,
  withI18n,
  withReduxStore,
);
