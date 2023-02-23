import React from 'react'
import { Link } from 'react-router-dom'


function Home() {
  return (
    <>
        <h1>Welcome</h1>
        <ul>Choose an artist:
            <Link to={'/billie'}>
               <li>Billie Eilish</li> 
            </Link>
            
        </ul>
    </>
  )
}

export default Home