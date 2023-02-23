import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { useAuth } from '../../contexts'
import './style.css'

const LocationDisplay = () => {
    
    const location = useLocation()
    if (location.pathname ==  "/") {
        return <span>Home Page</span>
    } else if (location.pathname == "/login") {
        return <span>Log in</span>
    }
    return <span>{location.pathname}</span>
}

const UsernameDisplay = () => {
    const {user} = useAuth()
    const location = useLocation()
    if (location.pathname == "/" || location.pathname == "/billie"){
        return <span>{user}'s account</span>
    }
}

function NavBar() {
    const { setUser } = useAuth()

    const resetUser = () => {
        setUser('')
    }
    
  return (
    <>
        <nav className="navbar">
            <h2>Music Site</h2>
            <h3><LocationDisplay /></h3>
            <h3><UsernameDisplay/></h3>
            <ul className="nav-links">
                <li>
                    <NavLink to="/">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/billie">
                        Billie
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/login">
                        <button onClick={resetUser}>
                            Logout
                        </button>
                        
                    </NavLink>
                </li>
            </ul>

        </nav>
    </>
  )
}

export default NavBar