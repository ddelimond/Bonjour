import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import { createBrowserRouter, RouterProvider, Route, Outlet, Navigate } from "react-router-dom";
import Home from './pages/Home/Home';
import Profile from './pages/Profile/Profile';
import Navbar from './components/Navbar/Navbar'
import LeftSidebar from './components/LeftSidebar/LeftSidebar'
import RightSidebar from './components/RightSidebar/RightSidebar'
import ErrorPage from './pages/Error/ErrorPage';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { store } from './redux/store';


function App() {
  const currentUser = false
  // const [currentUser, setCurrentUser] = useState(localStorage.getItem('user'))
  let storedTheme = JSON.parse(localStorage.getItem('theme-dark'));
  console.log('App ' + storedTheme)
  storedTheme === null ? localStorage.setItem('theme-dark', 'false') : storedTheme;
  let theme = useSelector(state => state.theme).theme;
  console.log(theme)


  const Layout = () => {
    return (
      <div className={theme}>
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
