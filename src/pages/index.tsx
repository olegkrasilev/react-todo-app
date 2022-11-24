import { useRoutes } from 'react-router';

import { routesConfig } from '../shared/config/react-router';

export const Routing = () => {
  return useRoutes(routesConfig);
};
