import ReactDOM from 'react-dom/client'
import { RouterProvider } from "react-router-dom"
import router from './routes'
import './locale'
import './styles/index.less'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />
)
