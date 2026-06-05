import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login(){
    const {login}=useContext(AuthContext)
    const Navigate = useNavigate()

    function handelLogin(){
        login();
        Navigate("/Home")
    }

    return(
        <div>
            <h1>Login Page</h1>
            <button onClick={()=>handelLogin()}>Login</button>
        </div>
    )
}