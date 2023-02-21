import React, { useState } from 'react'

import {Header, Songs, Form} from './components'

import './index.css'
import './header.css'
import './songs.css'


function App() {
  

  return (
    <div className="App">
        <Header />
        <Songs />
        <Form />
    </div>
  )
}

export default App
