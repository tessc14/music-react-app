import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../contexts'


function Home() {
  const {user} = useAuth()
  return (
    <>
        <h1>Welcome {user}</h1>
        <ul>Choose an artist:
            <Link to={'/billie'}>
               <li>Billie Eilish</li> 
            </Link>
            
        </ul>
    </>
  )
}

export default Home