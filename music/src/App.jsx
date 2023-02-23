import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { NavBar } from './layout'
import * as Pages from './pages'
import './App.css'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Pages.Home />}></Route>
        <Route path="/billie" element={<Pages.Billie />}></Route>
        <Route path="/login" element={<Pages.Login />}/>

      </Routes>
    </div>
  )
}

export default App
