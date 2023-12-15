import React from "react";

// First, you should redo your components to be arrow functions. Main reason: it's kinda "industry standard" now.
// But there's other reasons and stuff. https://www.geeksforgeeks.org/arrow-functions-in-javascript/
const Playlist = () => {
  return (
    <div>
      <label htmlFor="playlist-maker">Name:</label>
      <input htmlFor="playlist-maker" type="text" id="playlist-maker" />
      <button value="submit">Save To Spotify</button>
    </div>
  );
};

export default Playlist;
