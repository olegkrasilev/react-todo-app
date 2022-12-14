import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';
import { Spinner } from './spinner';

describe('<Spinner />', () => {
  test('it should mount', () => {
    render(<Spinner loading={true} />);

    const spinner = screen.getByTestId('Spinner');

    expect(spinner).toBeInTheDocument();
  });
});
