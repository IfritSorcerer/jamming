import React, { useCallback, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import SearchResults from "../SearchBar/SearchResults";
import Playlist from "../Playlist/Playlist";
import Spotify from "../../util/Spotify";

import styles from "../../styles/App.module.css";
const App = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [playlistName, setPlaylistName] = useState("New Playlist");
  const [playlistTracks, setPlaylistTracks] = useState([]);

  const search = useCallback((term) => {
    Spotify.search(term).then(setSearchResults);
    console.log(searchResults)
  }, [searchResults]);

  const addTrack = useCallback(
    (track) => {
      if (playlistTracks.some((savedTrack) => savedTrack.id === track.id))
        return;
      setPlaylistTracks((prevTracks) => [...prevTracks, track]);
    },
    [playlistTracks]
  );

  const removeTrack = useCallback((track) => {
    setPlaylistTracks((prevTracks) => 
    prevTracks.filter((currentTrack) => currentTrack.id !== track.id)
    );
  }, []);

  const updatePlaylistName = useCallback((name) => {
    setPlaylistName(name);
  }, []);

  const savePlaylist = useCallback(() => {
    const trackUris = playlistTracks.map((track) => track.uri);
    Spotify.savePlaylist(playlistName, trackUris).then(() => {
      setPlaylistName("New Playlist");
      setPlaylistTracks([]);
    });
  }, [playlistName, playlistTracks]);

  return (
    <div>
        <header className={styles.h1}>
        <h1>Jamming!</h1>
        </header>
      <SearchBar onSearch={search} />
      <SearchResults searchResults={searchResults} onAdd={addTrack} />
      <Playlist
        playlistName={playlistName}
        playlistTracks={playlistTracks}
        onNameChange={updatePlaylistName}
        onRemove={removeTrack}
        onSave={savePlaylist}
      />
    </div>
  );
};

export default App;
