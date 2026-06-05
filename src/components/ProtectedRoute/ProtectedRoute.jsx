import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({children}){
    const{isLoggedIn}=useContext(AuthContext)

    return isLoggedIn ? children : <Navigate to="/" />
}