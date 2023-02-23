import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts'

import './style.css'

function Login() {
    const navigate = useNavigate()

    const [inputValue, setInputValue] = useState('')
    // const inputRef = useRef()
    const { setUser } = useAuth()

    // useEffect(() => {
    //     inputRef.current.focus()
    // }, [])


    const handleInput = (e) => {
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(inputValue)
        //save username
        setUser(inputValue)
        navigate('/')
    }


  return (
    <>
    <div className="form-div">
    
        <h2>Please login:</h2>
        <form className="login-form"
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

        </form> 
    </div>
    
    </>
  )
}

export default Login