import { Navigate, Outlet } from "react-router"
import { useAuth } from "../hooks/UseAuth"

function ProtectedRoute({ children }) {
  const {isAuth} = useAuth()

  if(!isAuth) return <Navigate to='/login'/>
  return children ? children : <Outlet />  
    
  
}

export default ProtectedRoute