import React from "react";
import SearchBar from "../SearchBar/SeachBar";
import SearchResults from "../SearchBar/SearchResults";
import PlaylistContainer from "../Playlist/PlaylistContainer";

function App() {
  return (
    <div>
      <h1>Jamming!</h1>
      <SearchBar />
      <SearchResults />

      <PlaylistContainer />
    </div>
  );
}

export default App;
