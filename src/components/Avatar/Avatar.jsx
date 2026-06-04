import UserContext from "../../context/UserContext";
import { useContext } from "react";
import "./Avatar.css"

function Avatar(){

    const user=useContext(UserContext);

    return(
        <div>
            <h1>Avatar Component</h1>
            <p>Name : {user.name}</p>
        </div>
    )
}

export default Avatar;