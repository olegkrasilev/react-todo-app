import { useRoutes } from 'react-router'
import routesConfig from '../shared/config/react-router'

export const Routing = () => {
  const routes = useRoutes(routesConfig)

  return routes
}
