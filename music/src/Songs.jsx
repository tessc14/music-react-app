import React, { useState } from 'react'


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
            <h2>TOP SONGS:</h2>
            <div className="songs">
                <div className="song">
                    <h3>Song title</h3>
                    {favourite && (<p></p>)}
                    <h4>Album</h4>
                    <p>release date</p>
                    <button
                        onClick={addFavourite}
                        >Like
                    </button>
                </div>
                <div className="song">
                    <h3>Song title</h3>
                    <h4>Album</h4>
                    <p>release date</p>
                    <button
                        onClick={ addFavourite }
                        >Like
                    </button>
                </div>
                <div className="song">
                    <h3>Song title</h3>
                    <h4>Album</h4>
                    <p>release date</p>
                    <button
                        onClick={ addFavourite }
                        >Like
                    </button>
                </div>
                <div className="song">
                    <h3>Song title</h3>
                    <h4>Album</h4>
                    <p>release date</p>
                    <button
                        onClick={ addFavourite }
                        >Like
                    </button>
                </div>
                <div className="song">
                    <h3>Song title</h3>
                    <h4>Album</h4>
                    <p>release date</p>
                    <button
                        onClick={ addFavourite }
                        >Like
                    </button>
                </div>
                <div className="song">
                    <h3>Song title</h3>
                    <h4>Album</h4>
                    <p>release date</p>
                    <button
                        onClick={ addFavourite }
                        >Like
                    </button>
                </div>
            </div>
            
        </>
    )
}

export default Songs