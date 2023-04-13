import { useState } from 'react'
import Nav from '../Components/NavBar'
import './App.css'
import Gallery from '../pages/Gallery'
import Home from '../pages/Home'
import Create from '../pages/Create'
import { Routes, Route } from 'react-router-dom'
import UpdateCrewmate from "../pages/Update"
import Info from '../pages/Info'

function App() {

  return (
    <div className="App">
    <Nav />
    <Routes>
        <Route index={true} exact path="/" element={<Home />} />
        <Route index={true} exact path="/create" element={<Create />} />
        <Route index={true} exact path="/gallery" element={<Gallery />} />
        <Route index={true} exact path="/update" element={<UpdateCrewmate />} />
        <Route index={true} exact path="/info" element={<Info />} />
    </Routes>
    </div>
  )
}

export default App
