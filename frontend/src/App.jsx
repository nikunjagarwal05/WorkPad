import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ThemeProvider } from "./context/ThemeContext"
import ThemeToggle from "./components/ThemeToggle/ThemeToggle"

import Home from "./pages/Home/Home"
import Login from "./pages/Login/Login"
import SignUp from "./pages/SignUp/SignUp"
import Front from "./pages/Front/Front"

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div>
          <ThemeToggle />
          <Routes>
            <Route path="/" exact element={<Front />} />
            <Route path="/dashboard" exact element={<Home />} />
            <Route path="/signup" exact element={<SignUp />} />
            <Route path="/login" exact element={<Login />} />
          </Routes>
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
