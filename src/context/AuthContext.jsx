import { useState, useContext, createContext } from "react";
export const AuthContext= createContext();

export default function AuthProvider({children}){
    const[isLoggedIn,setIsLoggedIn] =useState(
        localStorage.getItem("auth")=== "true"
    )

    function login(){
        setIsLoggedIn(true)
        localStorage.setItem("auth","true")
    }

    function logout(){
        setIsLoggedIn(false)
        localStorage.removeItem("auth")
    }

    return(
        <AuthContext.Provider
            value={{
                isLoggedIn,
                login,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    )
}