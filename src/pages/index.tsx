import { useRoutes } from 'react-router'
import routesConfig from '../shared/config/react-router'

export const Routing = (): React.ReactElement<
  any,
  string | React.JSXElementConstructor<any>
> | null => {
  const routes = useRoutes(routesConfig)

  return routes
}
