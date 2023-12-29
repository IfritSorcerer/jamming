import React, { useState } from "react";
import TrackListing from "../Track/TrackListing";
import Playlist from "./Playlist";

const PlaylistContainer = () => {
  const [tracks, setTracks] = useState([]);

  const addTrackToPlaylist = (track) => {
    setTracks([...tracks, track]);
  };

  const removeTrackFromPlaylist = (trackIdToRemove) => {
      console.log('removing track with ID:', trackIdToRemove);
    setTracks((tracks) =>
      tracks.filter((track) => track.id !== trackIdToRemove)
    );
  };

  return (
    <div>
      <TrackListing addTrack={addTrackToPlaylist} />
      <Playlist tracks={tracks} removeTrack={removeTrackFromPlaylist} />
    </div>
  );
};

export default PlaylistContainer;
