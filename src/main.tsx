import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { AuthContextProvider } from '~/context/Auth.tsx'
import { CartContextProvider } from '~/context/Cart.tsx'
import { Cart } from '~/components/Cart.tsx'
import { ToastContainer } from "react-toastify"
import "react-toastify/ReactToastify.css"
import { Auth } from '~/components/Auth.tsx'
import { Sizes } from '~/components/Sizes.tsx'

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/cart", element: <Cart /> },
  { path: "/auth", element: <Auth /> },
  { path: "/sizes", element: <Sizes /> }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthContextProvider>
      <CartContextProvider>
        <RouterProvider router={router} />
        <ToastContainer />
      </CartContextProvider>
    </AuthContextProvider>
  </StrictMode>,
)
