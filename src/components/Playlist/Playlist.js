import React, { useCallback } from "react";
import TrackListing from "../Track/TrackListing";

import "../../styles/PlaylistInfo.css";

const Playlist = (props) => {
  const handleNameChange = useCallback(
    (event) => {
      props.onNameChange(event.target.value);
    },
    [props.onNameChange]
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
        tracks={props.playlistTracks}
        isRemoval={true}
        onRemove={props.onRemove}
      />
      <button 
        className="SpotifySaveBtn"
        onClick={props.onSave}>Save to Spotify</button>
    </div>
  );
};

export default Playlist;
