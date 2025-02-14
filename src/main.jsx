import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router'
import { ToastContainer} from 'react-toastify';
import AppRouter from './routes/AppRouter.jsx'
import './index.css'


createRoot(document.getElementById('root')).render(
  <HashRouter>
    <AppRouter/>
    <ToastContainer />
  </HashRouter>,
)
