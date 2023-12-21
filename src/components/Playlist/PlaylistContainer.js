import React, { useState } from "react";
import TrackListing from "../Track/Track";
import Playlist from "./Playlist";

const PlaylistContainer = () => {
  const [tracks, setTracks] = useState([]);

  const addTrackToPlaylist = (track) => {
    setTracks([...tracks, track]);
  };

  return (
    <div>
      <h2>Track Listing:</h2>
      <TrackListing addTrack={addTrackToPlaylist} />
      <Playlist tracks={tracks} />
    </div>
  );
};

export default PlaylistContainer;
