import compose from 'compose-function';

import { withErrorBoundary } from './ErrorBoundary';

import { withRouter } from './Router';

export const withProviders = compose(withRouter, withErrorBoundary);
