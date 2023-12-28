import React, { useState } from "react";
import TrackListing from "../Track/TrackListing";
import Playlist from "./Playlist";

const PlaylistContainer = () => {
  const [tracks, setTracks] = useState([]);  

  const addTrackToPlaylist = (track) => {
    setTracks([...tracks, track]);
  };

 const removeTrackFromPlaylist = (track) => {
  
 }
  return (
    <div>
      <TrackListing addTrack={addTrackToPlaylist} />
      <Playlist tracks={tracks} />
    </div>
  );
};

export default PlaylistContainer;
