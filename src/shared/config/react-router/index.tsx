import React from 'react'
import { RouteObject } from 'react-router-dom'
import TestPage from '../../../pages/test'

const routesConfig: RouteObject[] = [
  {
    path: '/',
    element: <TestPage />,
  },
]

export default routesConfig
