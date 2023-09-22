import { Outlet, Navigate } from "react-router-dom"

export default function ProtectedRoutes(){
    let isSignedIn = localStorage.getItem("isUserSignedIn")
    isSignedIn = isSignedIn ? JSON.parse(isSignedIn) : false

    return(
       isSignedIn ? <Outlet /> : <Navigate to='/login' />
    )
}