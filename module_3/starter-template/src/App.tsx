import StaffItem from 'components/StaffItem'
import MainLayout from 'layouts/MainLayout'
import About from 'pages/About'
import Dashboard from 'pages/Dashboard'
import LoginPage from 'pages/Login/LoginPage'
import StaffList from 'pages/StaffList'
import { useRoutes } from 'react-router-dom'

function App() {
  const elementsRoutes = useRoutes([
    {
      path: '/',
      element: <MainLayout />,
      children: [
        {
          path: '',
          element: <Dashboard />
        },
        { path: 'about', element: <About /> },
        {
          path: 'staffList',
          element: <StaffList />,
          children: [
            { path: ':staffId', element: <StaffItem /> },
            { path: 'list', element: <>staff llisst</> }
          ]
        }
      ]
    },
    {
      path: 'login',
      element: <LoginPage />,
      children: []
    },
    {
      path: '*',
      element: <>Not Found</>,
      children: []
    }
  ])
  return <div className='App'>{elementsRoutes}</div>
}

export default App
