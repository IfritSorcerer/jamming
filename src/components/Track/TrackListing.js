import React from "react";
import Track from "./Track";

const TrackListing = ({tracks, onAdd, isRemoval, onRemove}) => {
  return (
    <div>
      {tracks?.map((track) => {
        return (
          <Track
            track={track}
            key={track.id}
            onAdd={onAdd}
            isRemoval={isRemoval}
            onRemove={onRemove}
          />  
        );
      })}
    </div>
  );
};


export default TrackListing;
