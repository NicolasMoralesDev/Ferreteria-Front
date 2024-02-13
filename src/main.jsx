import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import { CartProvider } from './context/CartContext.jsx'
import './index.css'
import './App.css';
import { UserProvider } from './context/UserContext.jsx'
import { PaginationProvider } from './context/PaginationContext.jsx'
import { PaginationCategoryProvider } from './context/PaginationCategoryContext.jsx'
import { RouterProvider } from 'react-router-dom'
import { routes } from './router/Routes.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <CartProvider>
    <UserProvider>
      <PaginationProvider>
        <PaginationCategoryProvider>
          <RouterProvider router={routes} />
        </PaginationCategoryProvider>
      </PaginationProvider>
    </UserProvider>
  </CartProvider>


)
