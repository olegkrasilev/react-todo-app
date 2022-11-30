import { render } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';
import { ErrorPage } from './error-page';

describe('<ErrorPage />', () => {
  test('it should mount', () => {
    render(<ErrorPage />);
  });
});
