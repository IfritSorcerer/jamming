import React from "react";

const TrackListing = (props) => {
  const track = [
    {
      id: 0,
      artist: "King Gizzard & The Lizard Wizard",
      name: "Robot Stop",
      album: "Nonagon Infinity",
      uri: "1234",
    },
    {
      id: 1,
      artist: "Black Midi",
      name: "Western",
      album: "Schlagenheim",
      uri: '5678',
    },
    {
      id: 2,
      artist: "Casiopea",
      name: "Domino Line",
      album: "Mint Jams",
      uri: "91011"
    },
  ];
  
  return (
    <div>
      {track.map((track) => (
        <li key={track.id}>
          <b>{track.name}</b>
          <p>
            {track.artist} | {track.album}
          </p>
          <button type="submit" onClick={() => props.addTrack(track)}>
            Add to Playlist
          </button>
        </li>
      ))}
      ;
    </div>
  );
};

export default TrackListing;
