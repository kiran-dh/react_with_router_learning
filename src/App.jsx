import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import { useState } from "react"

import Home from "./pages/Home/Home"
import About from "./pages/About/About"
import Contact from "./pages/Contact/Contact"
import NavBar from "./components/NavBar/NavBar"
import User from "./pages/User/User"
import NotFound from "./pages/NotFound/NotFound"
import UserContext from "./context/UserContext"
import Profile from "./components/Profile/Profile"
import ThemeContext from "./context/ThemeContext"
import Counter from "./components/Counter/Counter"
import useWindowTitle from "./hooks/UseWindowsTitle"
import UserData from "./components/UserData/UserData"
import Todo from "./components/Todo/Todo"

export default function App(){

  const [user]=useState({
    name:"Kiran"
  })

  const[darkMode,setDarkMode]=useState(false)

  useWindowTitle("My React App")

  return (
    <UserContext.Provider value={user} >
      <ThemeContext.Provider value={{darkMode,setDarkMode}}>
        <BrowserRouter>

          <NavBar/>

          <Routes>

            <Route
              path="/"
              element={<Home/>}
            />

            <Route
              path="/about"
              element={<About/>}
            />

            <Route
              path="/contact"
              element={<Contact/>}
            />

            <Route
              path="/user/:id"
              element={<User />}
            />

            <Route
              path="*"
              element={<NotFound />}
            />

          </Routes>

          <Profile/>

          <br />

          <Counter/>

          <br />

          <UserData/>

          <Todo/>

        </BrowserRouter>
      </ThemeContext.Provider>
    </UserContext.Provider>

    
  )
}