import { Routes, Route } from "react-router-dom"
import React from 'react'
import Login from './pages/Login'
import Home from './pages/Home'
import Register from './pages/Register'

function App() {
  return (
    <div>
      <Routes>
        <Route path = "/" element = {<Login />} />
        <Route path = "login" element = {<Login />} />
        <Route path = "/register" element={<Register />} />
        <Route path = "home" element = {<Home />} />
      </Routes>
    </div>
  )
}

export default App;

  
