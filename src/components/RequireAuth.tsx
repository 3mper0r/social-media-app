import { Navigate, Outlet, useLocation } from "react-router-dom"
import useAuth from "../hooks/useAuth"
import {users} from '../../db/db.json'

const RequireAuth = () => {
   
    const { auth }:any = useAuth()
    // const us = users.forEach(u => u.name)
    // console.log('name', us);
    const location = useLocation()

    return (
        auth?.name || auth?.password
            ? <Outlet/>
            : <Navigate to="/login" state={{from: location}} replace />
    )
}

export default RequireAuth