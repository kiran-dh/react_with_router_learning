import { useReducer, useEffect } from "react";
import ThemeReducer from "../../Reducers/ThemeReducer";
import "./Contact.css";

function Contact(){

    const initialState={
        darkMode:true,
    }

    const[state,dispatch]=useReducer(ThemeReducer,initialState)

    useEffect(()=>{
        document.body.className = state.darkMode ? "dark" : "light"
    },[state.darkMode])

    return(
        <div className="contact">
            <h1>Contact Page</h1>
            <div className="theme-toggle">
                <span>{state.darkMode?"Reducer Dark Mode":"Reducer Light Mode"}</span>
                <button onClick={()=>dispatch({type:"ToggleTheme"})}>Toggle Theme</button>
            </div>
        </div>
    )
}

export default Contact;
