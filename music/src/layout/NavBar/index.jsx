import React from 'react'
import { NavLink } from 'react-router-dom'
import './style.css'

function NavBar() {
  return (
    <>
        <nav className="navbar">
            <h2>Music Site</h2>
            <ul classname="nav-links">
                <li>
                    <NavLink to="/">
                        Home
                    </NavLink>
                </li>
            </ul>

        </nav>
    </>
  )
}

export default NavBar