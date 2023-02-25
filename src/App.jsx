import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import { createBrowserRouter, RouterProvider, Route, Outlet, Navigate } from "react-router-dom";
import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';
import Navbar from './components/Navbar/Navbar'
import LeftSidebar from './components/LeftSidebar/LeftSidebar'
import RightSidebar from './components/RightSidebar/RightSidebar'
import ErrorPage from './pages/Error/ErrorPage';

function App() {
  const currentUser = true



  const Layout = () => {
    return (
      <div style={{
        backgroundColor: 'rgba(246,243,243,1)'
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
