import { RouteObject } from 'react-router-dom'

import TestPage from 'pages/test'

export const routesConfig: RouteObject[] = [
  {
    path: '/',
    element: <TestPage />,
  },
]
