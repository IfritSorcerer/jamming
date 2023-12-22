import React from "react";


const TrackListing = (props) => {
  const track = [
    {
      id: 0,
      artist: "King Gizzard & The Lizard Wizard",
      name: "Robot Stop",
      album: "Nonagon Infinity",
    },
    {
      id: 1,
      artist: "Black Midi",
      name: "Western",
      album: "Schlagenheim",
    },
    {
      id: 2,
      artist: "Casiopea",
      name: "Domino Line",
      album: "Mint Jams",
    },
  ];
  return (
    <div>
      {track.map((track) => (
        <li key={track.id}>
          <b>{track.name}</b>
          <p>{track.artist} | {track.album}</p>
          <button 
            type="submit"
            onClick={() => props.addTrack(track)}>Add to Playlist</button>
        </li>
      ))}
      ;
    </div>
  );
};

export default TrackListing;
