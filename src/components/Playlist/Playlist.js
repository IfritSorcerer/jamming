import React, { useState } from "react";


const Playlist = ({ tracks }) => {
  const songList = tracks ?? [];

  return (
    <div>
      <label htmlFor="playlist-maker">Name:</label>
      <input htmlFor="playlist-maker" type="text" id="playlist-maker" />
      <h2>Playlist:</h2>
      <ul>
        {songList.map((track) => (
          <li key={track.id}>{track.name}</li>
        ))};
      </ul>
      <button value="submit">Save to Spotify</button>
      
    </div>
  );
};


export default Playlist;