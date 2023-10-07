import { Navigate, Outlet, useLocation } from "react-router-dom"
import useAuth from "../hooks/useAuth"
import Cookies from "js-cookie"
import name from '../../db/db.json'

const RequireAuth = () => {
    console.log('name', name);
    
    //let username = name
    const { auth }:any = useAuth()
    const location = useLocation()

    return (
        auth?.n || Cookies.get('token')
            ? <Outlet/>
            : <Navigate to="/login" state={{from: location}} replace />
    )
}

export default RequireAuth