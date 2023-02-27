import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import { createBrowserRouter, RouterProvider, Route, Outlet, Navigate } from "react-router-dom";
import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';
import Navbar from './components/Navbar/Navbar'
import LeftSidebar from './components/LeftSidebar/LeftSidebar'
import RightSidebar from './components/RightSidebar/RightSidebar'
import ErrorPage from './pages/Error/ErrorPage';
import './style.scss';
import { useContext } from 'react';
import { DarkModeContext } from './context/darkModeContex';

function App() {
  const currentUser = true

  const { darkMode } = useContext(DarkModeContext);

  const Layout = () => {
    return (
      <div className={`theme-${darkMode ? 'dark' : 'light'}`} style={{
        background: 'linear-gradient(to left, rgba(50, 137, 177, .3), rgba(17, 53, 115, 1))'
      }
      }>
        <Navbar />
        <div style={{ display: 'flex' }}>
          <LeftSidebar />
          <Outlet />
          <RightSidebar />
        </div>
      </div >
    )
  }

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to='/login' />
    }
    else {
      return children
    }
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element:
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>,
      children: [
        {
          path: "/",
          element: <Home />
        },
      ],
      errorElement: <ErrorPage />
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
