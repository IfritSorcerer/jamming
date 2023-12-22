import React, { useState } from "react";

const Playlist = ({ tracks, removeTrack }) => {
  const songList = tracks ?? [];

  return (
    <div>
      <label htmlFor="playlist-maker">Name:</label>
      <input
        htmlFor="playlist-maker"
        type="text"
        id="playlist-maker"
      />
      <h2>Playlist:</h2>

      <ol>
        {songList.map((track) => (
          <li key={track.id}>
            <b>{track.name}</b>
            <p>
              {track.artist} | {track.album}
            </p>
            <button type="submit" onClick={removeTrack} >Remove From Playlist</button>
          </li>
        ))}
      </ol>
      <button value="submit">Save to Spotify</button>
    </div>
  );
};

export default Playlist;
