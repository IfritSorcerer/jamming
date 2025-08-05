import React, { useCallback } from "react";

import "../../styles/TrackInfo.css";

const Track = (props) => {
  const addTrack = useCallback(
    (event) => {
      props.onAdd(props.track);
    },
    [props.onAdd, props.track]
  );

  const removeTrack = useCallback(
    (event) => {
      props.onRemove(props.track);
    },
    [props.onRemove, props.track]
  );
  
  const renderAction = () => {
    if (props.isRemoval) {
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
            src={props.track.art}
            alt="Album Cover"
          />
      <div>
        <h3>{props.track.name}</h3>
        <p>
          {props.track.artist} | {props.track.album}
        </p>
      </div>
        {renderAction()}
    </div>
  );
};

export default Track;
