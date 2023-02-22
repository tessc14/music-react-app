import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { NavBar } from './layout'
import * as Pages from './pages'
import './App.css'
// import {Header, Songs, Form} from './components'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Pages.Home />}></Route>
        <Route path="/billie" element={<Pages.Billie />}></Route>



      </Routes>



        {/* <Header />
        <Songs />
        <Form /> */}
    </div>
  )
}

export default App
