import { render } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';
import { LangSwitcher } from './lang-switcher';

describe('<LangSwitcher />', () => {
  test('it should mount', () => {
    render(<LangSwitcher />);
  });
});
