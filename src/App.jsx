import {
  Routes,
  Route,
} from "react-router-dom"
import { useState, useContext } from "react"
import { lazy, Suspense } from "react"
import { AuthContext } from "./context/AuthContext"

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
import Dashboard from "./components/Dashboard/Dashboard.jsx"
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute.jsx"
import Login from "./pages/Login/Login.jsx"

const Reports = lazy(()=>import("./pages/Reports/Reports"))

export default function App(){

  const [user]=useState({
    name:"Kiran"
  })

  const[darkMode,setDarkMode]=useState(true)
  const { isLoggedIn } = useContext(AuthContext)

  useWindowTitle("My React App")

  return (
    <UserContext.Provider value={user} >
      <ThemeContext.Provider value={{darkMode,setDarkMode}}>

          {isLoggedIn && <NavBar/>}

          <Routes>

            <Route 
              path="/" 
              element={<Login />} 
            />

            <Route
              path="/Home"
              element={
                <ProtectedRoute>
                  <Home/>
                </ProtectedRoute>
              }
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

          {isLoggedIn && (
            <>
              <Profile/>
              <br />
              <Counter/>
              <br />
              <UserData/>
              <Todo/>
              <Dashboard />
              <Suspense fallback={<h2>Loading Reports...</h2>}>
                <Reports />
              </Suspense>
            </>
          )}

      </ThemeContext.Provider>
    </UserContext.Provider>

    
  )
}