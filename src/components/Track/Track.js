import React, { useCallback } from "react";

import "../../styles/TrackInfo.css";

const Track = ({onAdd, onRemove, track, isRemoval}) => {
  const addTrack = useCallback(
    (event) => {
      onAdd(track);
    },
    [onAdd, track]
  );

  const removeTrack = useCallback(
    (event) => {
      onRemove(track);
    },
    [onRemove, track]
  );
  
  const renderAction = () => {
    if (isRemoval) {
      return (
        <button 
          onClick={removeTrack}
          className="ButtonAction">-</button>
      );
    }
    return (
      <button 
        onClick={addTrack}
        className="ButtonAction">+</button>
    );
  };
  return (
    <div className="TrackContainer">
          <img 
            className= "AlbumArt"
            src={track.art}
            alt="Album Cover"
          />
      <div>
        <h3>{track.name}</h3>
        <p>
          {track.artist} | {track.album}
        </p>
      </div>
        {renderAction()}
    </div>
  );
};

export default Track;
