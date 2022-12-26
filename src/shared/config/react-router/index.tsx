import { RouteObject } from 'react-router-dom';

import { element } from 'prop-types';

import { TodoListPage } from 'pages/TodoListPage';
import { TodoItemPage } from 'pages/TodoItemPage';

export const routesConfig: RouteObject[] = [
  {
    path: '/',
    element: <TodoListPage />,
  },
  {
    path: '/:todoId',
    element: <TodoItemPage />,
  },
  {
    path: '*',
    element: <TodoListPage />,
  },
];
