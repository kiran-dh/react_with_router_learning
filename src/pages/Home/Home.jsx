import { useContext, useEffect } from "react";
import ThemeContext from "../../context/ThemeContext";
import "./Home.css";

function Home(){

    const{darkMode,setDarkMode}=useContext(ThemeContext)

    useEffect(()=>{
        document.body.className = darkMode ? "dark" : "light"
    },[darkMode])

    return(
        <div className="home">
            <h1>Home Page</h1>
            <div className="theme-toggle">
                <span>{darkMode?"Context Dark Mode":"Context Light Mode"}</span>
                <button onClick={()=>setDarkMode(!darkMode)}>Toggle</button>
            </div>
        </div>
    )
}

export default Home;
