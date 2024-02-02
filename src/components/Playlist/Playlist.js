import React, { useCallback } from "react";
import TrackListing from "../Track/TrackListing";

const Playlist = (props) => {
  const handleNameChange = useCallback(
    (event) => {
      props.onNameChange(event.targets.value);
    },
    [props.onNameChange]
  );

  return (
    <div>
      <label htmlFor="playlist">Name:</label>
      <input
        onNameChange={handleNameChange}
        htmlFor="playlist"
        type="text"
        id="playlist"
        placeholder="New Playlist"
      />
      <TrackListing
        tracks={props.playlistTracks}
        isRemoval={true}
        onRemove={props.onRemove}
      />
      <button onClick={props.onSave}>Save to Spotify</button>
    </div>
  );
};

export default Playlist;
