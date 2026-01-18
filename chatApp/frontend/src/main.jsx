import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from './contextApi/Contextapi.jsx';
import { BrowserRouter } from "react-router";
import { AuthContext } from './contextApi/Contextapi.jsx';

createRoot(document.getElementById('root')).render(
  <>
  <AuthProvider>
    <BrowserRouter>
      <App />
      <ToastContainer position="top-right" autoClose={2000} pauseOnHover closeOnClick draggable/>
    </BrowserRouter>
  </AuthProvider>
  </>,
)
