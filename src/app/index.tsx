import { Routing } from '../pages';

import { withProviders } from './providers';
import './index.scss';
import Layout from './layout';

function App(): JSX.Element {
  return (
    <Layout>
      <Routing />
    </Layout>
  );
}

export default withProviders(App);
