import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';
import { ThemeSwitcher } from './theme-switcher';

describe('<ThemeSwitcher />', () => {
  test('it should mount', () => {
    render(<ThemeSwitcher />);

    const themeSwitcher = screen.getByTestId('ThemeSwitcher');

    expect(themeSwitcher).toBeInTheDocument();
  });
});
