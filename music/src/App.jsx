import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import * as Pages from './pages'
import './App.css'
// import {Header, Songs, Form} from './components'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Pages.Home />}></Route>



      </Routes>



        {/* <Header />
        <Songs />
        <Form /> */}
    </div>
  )
}

export default App
