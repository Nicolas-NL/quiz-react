import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.jsx'
import QuestionPage from './pages/QuestionPage.jsx'
import AnswersPage from './pages/AnswersPage.jsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  } ,
  {
    path: '/first',
    element: <QuestionPage />,
  },
  {
    path: '/answers',
    element:<AnswersPage />
  }
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
);