import React from "react";

function Playlist() {
    return (
       <div> 
            <label htmlFor="playlist-maker" >Name:</label>
            <input 
                htmlFor='playlist-maker'
                type="text"
                id="playlist-maker"
              />
            <button value='submit'>Save To Spotify</button>  
        </div>     
    )
};

export default Playlist