import "./NavBar.css"
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

function NavBar(){
    const { logout } = useContext(AuthContext)
    const navigate = useNavigate()

    function handleLogout(){
        logout()
        navigate("/")
    }

    return(
        <nav>
            <Link to="/Home">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <button onClick={handleLogout}>Logout</button>
        </nav>
    )
}

export default NavBar;