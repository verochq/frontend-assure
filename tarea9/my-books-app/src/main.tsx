import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Books from './pages/Books.tsx'
import BookDetail from './pages/BookDetail.tsx'
import NotFound from './pages/NotFound.tsx'


const router =  createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/books',
    element: <Books />
  },
  {
    path: '/books/:id',
    element: <BookDetail />
  },
  {
    path: '*',
    element: <NotFound />
  }
])



const root = document.getElementById('root');



createRoot(root!).render(
  
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

