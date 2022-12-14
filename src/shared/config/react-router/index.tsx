import { RouteObject } from 'react-router-dom';

import { TodoListPage } from 'pages/TodoListPage';

export const routesConfig: RouteObject[] = [
  {
    path: '/',
    element: <TodoListPage />,
  },
];
