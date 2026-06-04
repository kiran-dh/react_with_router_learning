import UseTheme from "../../hooks/UseTheme";
import "./About.css";

function About() {

  const{
    darkMode,
    ToggleTheme
  } = UseTheme()

  return(
    <div className="about">
      <h1>About Page</h1>
      <div className="theme-toggle">
        <span>{darkMode?"Hook Dark Mode":"Hook Light Mode"}</span>
        <button onClick={()=>ToggleTheme()}>Toggle Theme</button>
      </div>
    </div>
  )
}

export default About;
