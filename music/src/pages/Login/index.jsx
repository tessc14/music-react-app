import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts'

import './style.css'

function Login() {
    // const navigate = useNavigate()

    // const [inputValue, setInputValue] = useState('')
    // const inputRef = useRef()
    // const { setUser } = useAuth()

    // useEffect(() => {
    //     inputRef.current.focus()
    // }, [])

    // const handleInput = (e) => {
    //     setInputValue(e.target.value)
    // }

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     console.log(inputValue)
    //     //save username
    //     setUser(inputValue)
    //     navigate('/')
    // }

    const CLIENT_ID = "9eab7f79233b4e78ac359562622b3a73"
    const REDIRECT_URI = "http://localhost:5173/home"
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
    const RESPONSE_TYPE = "token"

    const { token, setToken } = useAuth()

    useEffect(() => {
    const hash = window.location.hash
    let token = window.localStorage.getItem("token")

    if (!token && hash) {
        token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

        window.location.hash = ""
        window.localStorage.setItem("token", token)
    }

    setToken(token)

    }, [])

    const logout = () => {
    setToken("")
    window.localStorage.removeItem("token")
    }  


  return (
    <>
    <div className="form-div">
    
        <h2>Please login:</h2>
        {!token ?
        <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
            >Login to Spotify</a>
        : <button onClick={logout}
            >Logout</button>}


        {/* <form className="login-form"
        onSubmit={handleSubmit}>
            <label htmlFor="username" className='{styles.mr10}'>Username:</label>
            <input type="text" id="username" className="login-input"
            placeholder="Type your name"
            autoComplete="off"
            value={inputValue}
            onChange={handleInput}
            // ref={inputRef}onSubmit={handleSubmit}
            />
            <input type="submit" value="Submit" className="submit-btn"/>

        </form>  */}
    </div>
    
    </>
  )
}

export default Login