import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import BookList from './components/BookList.tsx'
import BookDetail from './pages/BookDetail.tsx'
import NotFound from './pages/NotFound.tsx'


const router =  createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/books',
    element: <BookList />
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

