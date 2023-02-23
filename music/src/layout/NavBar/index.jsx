import React from 'react'
import { useNavigate, NavLink, useLocation } from 'react-router-dom'
import { useAuth } from '../../contexts'
import './style.css'

const LocationDisplay = () => {
    
    const location = useLocation()
    if (location.pathname ==  "/home") {
        return <span>Home Page</span>
    } else if (location.pathname == "/") {
        return <span>Log in</span>
    }
    return <span>{location.pathname}</span>
}

    const UsernameDisplay = () => {
        // const {user} = useAuth()
        const location = useLocation()
        if (location.pathname == "/" || location.pathname == "/billie"){
            return <span></span>
        }
    }

function NavBar() {
    const { token, setToken } = useAuth()
    const Navigate = useNavigate()

    const LogOut = () => {
        setToken('')
        window.localStorage.removeItem("token")
        Navigate('/')
        console.log("logged out!")  
    }
    
  return (
    <>
        <nav className="navbar">
            <h2>Music Site</h2>
            <h3><LocationDisplay /></h3>
            <h3><UsernameDisplay/></h3>
            <ul className="nav-links">
                <li>
                    <NavLink to="/home">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/billie">
                        Billie
                    </NavLink>
                </li>
                <li>
                    {!token ? 
                        <button onClick={LogOut}>
                            Logout
                        </button>
                        : <NavLink to="/"><button>Log in</button></NavLink>}
                    
                </li>
            </ul>

        </nav>
    </>
  )
}

export default NavBar