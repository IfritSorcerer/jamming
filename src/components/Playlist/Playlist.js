import React, { useCallback } from "react";
import TrackListing from "../Track/TrackListing";

import "../../styles/PlaylistInfo.css";

const Playlist = ({onNameChange, playlistTracks, onRemove, onSave}) => {
  const handleNameChange = useCallback(
    (event) => {
      onNameChange(event.target.value);
    },
    [onNameChange]
  );

  return (
    <div className="PlaylistContainer">
      <input
        onNameChange={handleNameChange}
        htmlFor="playlist"
        className="PlaylistInput"
        type="text"
        placeholder="New Playlist"
      />
      <TrackListing
        tracks={playlistTracks}
        isRemoval={true}
        onRemove={onRemove}
      />
      <button 
        className="SpotifySaveBtn"
        onClick={onSave}>Save to Spotify</button>
    </div>
  );
};

export default Playlist;
