import React from "react";
import SearchBar from "../SearchBar/SeachBar";
import SearchResults from "../SearchBar/SearchResults";
import Playlist from "../Playlist/Playlist";
import Tracklist from "../Track/Tracklist";



function App() {
  return (
    <div>
      <h1>Jamming!</h1>
      <SearchBar />
      <SearchResults />
      <Tracklist />
      <Playlist />
    </div>
  );
}


export default App;