import { Routing } from '../pages'

import { withProviders } from './providers'
import './index.scss'

function App(): JSX.Element {
  return <Routing />
}

export default withProviders(App)
