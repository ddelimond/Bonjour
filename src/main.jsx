import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { AuthContextProvider } from './context/authContext'
import { DarkModeContextProvider } from './context/darkModeContex'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DarkModeContextProvider>
      <AuthContextProvider
      <App />
    </AuthContextProvider>
  </DarkModeContextProvider>

  </React.StrictMode >
);
