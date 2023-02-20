import React, { useState } from 'react'
import './songs.css'


const Songs = () => {

    const [favourite, setFavourite] = useState(false)

    const addFavourite = (e) => {
        
        setFavourite(!favourite)
        if (!favourite) {
        e.target.style.backgroundColor='cadetblue'
        e.target.textContent='Unlike'
        } else {
            e.target.style.backgroundColor='white'
            e.target.textContent='Like'
        }
    }

    return (
        <>
         <div className="songSection">
            <h2 className="top">TOP SONGS:</h2>
            <div className="songs">
                <div className="song" >
                    <h3>bad guy</h3>
                    <div id="bad-guy">
                        
                    {/* {favourite && (<p>LIKED</p>)} */}
                    
                    </div>
                    <h4>WWAFAWDWG</h4>
                    <p>release date</p>
                    <button
                        onClick={addFavourite}
                        >Like
                    </button>
                </div>
                
                <div className="song" >
                    <h3>when the party's over</h3>
                    <div id="when">
                        
                    {/* {favourite && (<p>LIKED</p>)} */}
                    
                    </div>
                    <h4>WWAFAWDWG</h4>
                    <p>release date</p>
                    <button
                        onClick={addFavourite}
                        >Like
                    </button>
                </div>
                <div className="song" >
                    <h3>everything i wanted</h3>
                    <div id="everything">
                        
                    {/* {favourite && (<p>LIKED</p>)} */}
                    
                    </div>
                    <h4>WWAFAWDWG</h4>
                    <p>release date</p>
                    <button
                        onClick={addFavourite}
                        >Like
                    </button>
                </div>
                <div className="song" >
                    <h3>lovely</h3>
                    <div id="lovely">
                        
                    {/* {favourite && (<p>LIKED</p>)} */}
                    
                    </div>
                    <h4>WWAFAWDWG</h4>
                    <p>release date</p>
                    <button
                        onClick={addFavourite}
                        >Like
                    </button>
                </div>
                <div className="song" >
                    <h3>tv</h3>
                    <div id="tv">
                        
                    {/* {favourite && (<p>LIKED</p>)} */}
                    
                    </div>
                    <h4>WWAFAWDWG</h4>
                    <p>release date</p>
                    <button
                        onClick={addFavourite}
                        >Like
                    </button>
                </div>
            </div>
           </div> 
        </>
    )
}

export default Songs