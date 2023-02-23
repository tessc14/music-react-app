import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import './style.css'

const LocationDisplay = () => {
    const location = useLocation()
    if (location.pathname ==  "/") {
        return <span>Home Page</span>
    } 
    return <span>{location.pathname}</span>
}

function NavBar() {
  return (
    <>
        <nav className="navbar">
            <h2>Music Site</h2>
            <h3><LocationDisplay /></h3>
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
                        Login
                    </NavLink>
                </li>
            </ul>

        </nav>
    </>
  )
}

export default NavBar