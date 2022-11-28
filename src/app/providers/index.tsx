import compose from 'compose-function';

import { withRouter } from './Router';

export const withProviders = compose(withRouter);
