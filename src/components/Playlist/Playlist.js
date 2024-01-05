import React, { useState } from "react";

const Playlist = ({ tracks, removeTrack }) => {
  const songList = tracks ?? [];

  const [playlistName, setPlaylistName] = useState("New Playlist");
  const handleNameChange = (e) => {
    setPlaylistName(e.target.value);
  };

  const handleSavePlaylist = (props) => {
    const trackUris = props.tracks.map(trackUris)
    props.createSpotfiyPlaylist(playlistName, trackUris)
  };

  return (
    <div>
      <label htmlFor="playlist-maker">Name:</label>
      <input
        htmlFor="playlist-maker"
        type="text"
        id="playlist-maker"
        onChange={handleNameChange}
        value={playlistName}
      />
      <h2>{playlistName}</h2>

      <ol>
        {songList.map((track) => (
          <li key={track.id}>
            <b>{track.name}</b>
            <p>
              {track.artist} | {track.album}
            </p>
            
            <button
              type="submit"
              onClick={() => {
                console.log("button clicked");
                removeTrack(track.id);
              }}
            >
              Remove From Playlist
            </button>
          </li>
        ))}
      </ol>
      <button value="submit" onClick={handleSavePlaylist}>Save to Spotify</button>
    </div>
  );
};

export default Playlist;
