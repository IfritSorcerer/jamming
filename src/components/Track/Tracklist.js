import React from "react";
import  trackId  from './Track';
function Tracklist() {
    const songListing = trackId.map(trackId => 
        <li>
            <p>{trackId.artist}</p>
        </li>);
     return (
        <>
        <ul>{songListing}</ul>
        <button type="submit">+</button>
        </>
     )   
};

export default Tracklist;