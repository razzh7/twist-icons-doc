import { createBrowserRouter } from "react-router-dom"
import App from '../App'
import Home from '../layout/Home'
import SiteIconDisplay from '../layout/Icons'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'icons/:id',
        element: <SiteIconDisplay />
      }
    ]
  }
])

export default router