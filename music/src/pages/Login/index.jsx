import React, { useState, useEffect, useRef } from 'react'
import { useNavigate } from 'react-router-dom'
// import { useAuth } from '../../contexts'

import './style.css'

function Login() {

    // const [inputValue, setInputValue] = useState('')
    // const inputRef = useRef()
    // const goTo = useNavigate()
    // const { setUser } = useAuth()

    // useEffect(() => {
    //     inputRef.current.focus()
    // }, [])


    // const handleInput = (e) => {
    //     setInputValue(e.target.value)
    // }

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     //save username
    //     setUser(inputValue)
    //     //go to / page
    //     goTo('/')
    // }

  return (
    <>
    <div className="form-div">
        <h2>Please login:</h2>
        <form className="login-form"
        >
            <label htmlFor="username" className='{styles.mr10}'>Username:</label>
            <input type="text" id="username" className="login-input"
            placeholder="Type your name"
            autoComplete="off"
            // value={inputValue}
            // onChange={handleInput}
            // ref={inputRef}onSubmit={handleSubmit}
            />
            <input type="submit" value="Submit" className="submit-btn"/>

        </form> 
    </div>
    
    </>
  )
}

export default Login