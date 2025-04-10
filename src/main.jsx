import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import ReactQuestionPage from './pages/ReactQuestionPage.jsx'
import AnswersPage from './pages/AnswersPage.jsx'
import MenuPage from './pages/MenuPage.jsx'
import JSQuestionPage from './pages/JSQuestionPage.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  } ,
  {
    path: '/react',
    element: <ReactQuestionPage />,
  },
  {
    path: '/answers',
    element:<AnswersPage />
  },
  {
    path: '/menu',
    element:<MenuPage />
  },
  {
    path: '/js',
    element:<JSQuestionPage />
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
);