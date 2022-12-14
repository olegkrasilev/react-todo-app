import { render } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';
import TodoListPage from './todo-list-page';

describe('<TodoListPage />', () => {
  test('it should mount', () => {
    render(<TodoListPage />);
  });
});
