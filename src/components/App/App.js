import React from "react";
import SearchBar from "../SearchBar/SeachBar";
import SearchResults from "../SearchBar/SearchResults";
import Playlist from "../Playlist/Playlist";
import Tracklist from "../Track/Tracklist";
import Track from "../Track/Track";
import trackId from "../Track/Track";

function App() {
  return (
    <div>
      <h1>Jamming!</h1>
      <SearchBar />
      <SearchResults />
      <Tracklist trackId={trackId} />{" "}
      {/* To go along with the change I made in the tracklist file and give you an example of props and destructuring. */}
      <Playlist />
    </div>
  );
}

export default App;
