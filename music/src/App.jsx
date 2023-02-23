import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ProtectedRoute from './routes';
import { AuthProvider } from './contexts';
import { NavBar } from './layout'
import * as Pages from './pages'
import './App.css'

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<ProtectedRoute redirectTo='/login' />} >
            <Route index element={<Pages.Home />}/>
            <Route path="/billie" element={<Pages.Billie />}/>
          </Route>
          
          <Route path="/login" element={<Pages.Login />}/>

        </Routes>
      </div>
    </AuthProvider>

  )
}

export default App
