import React from "react";
// import  trackId  from './Track';

// Could also use props here to pass the trackId stuff to the component instead of
// hardcoding it and all that
const Tracklist = ({ trackId }) => {
  const songListing = trackId.map((trackId) => (
    <li>
      <p>{trackId.artist}</p>
    </li>
  ));
  return (
    <>
      <ul>{songListing}</ul>
      <button type="submit">+</button>
    </>
  );
};

export default Tracklist;
