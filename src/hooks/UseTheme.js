import { useState, useEffect } from "react";

function UseTheme(){
    const [darkMode, setDarkMode] = useState(true)

    useEffect(()=>{
        document.body.className = darkMode ? "dark" : "light"
    },[darkMode])

    const ToggleTheme = () => {
        setDarkMode(!darkMode)
    }

    return{
        darkMode,
        ToggleTheme
    }
}

export default UseTheme;