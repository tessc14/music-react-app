import React, { useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../../contexts'
import axios from 'axios'

function Home() {
  const {token} = useAuth()
  // const [searchKey, setSearchKey] = useState("")
  const [artists, setArtists] = useState([])

  // const searchArtists = async (e) => {
  //   e.preventDefault()
  //   const {data} = await axios.get("https://api.spotify.com/v1/search", {
  //       headers: {
  //           Authorization: `Bearer ${token}`
  //       },
  //       params: {
  //           q: searchKey,
  //           type: "artist"
  //       }
  //   })

  //   setArtists(data.artists.items)
  // }

    const searchArtists = async () => {
      // e.preventDefault()
        const response = await fetch("https://api.spotify.com/v1/artists", {
          headers: {
              Authorization: `Bearer ${token}`
          },
          params: {
              q: '0TnOYISbd1XYRBk9myaseg',
              type: "artist"
          }
        })
        const artistData = await response.json()
        // setArtists(artistData.data)
        console.log(artistData)
        
    }

    useEffect(() => {
        searchArtists()
    }, [])

  // const renderArtists = () => {
  //    artists.map(artist => (
  //       <div key={artist.id}>
  //           {artist.images.length ? <img width={"100%"} src={artist.images[0].url} alt=""/> : <div>No Image</div>}
  //           {artist.name}
  //       </div>
  //   ))
  // }

  return (
    <>
        <h1>Welcome user</h1>
        
         <ul>Choose an artist:
            <Link to={'/billie'}>
               <li>Billie Eilish</li> 
            </Link>
            
        </ul>
        <form onSubmit={searchArtists}>
          <input type="text" onChange={e => setSearchKey(e.target.value)}/>
          <button type={"submit"}>Search</button>
        </form>
        {/* {renderArtists()} */}
    </>
  )
}

export default Home