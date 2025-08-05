
const Spotify = {
  async search(term,accessToken) {
    
    if (!accessToken) {
      console.error("Access token missing");
      return [];
    }

    const response = await fetch(
      `https://api.spotify.com/v1/search?type=track&q=${encodeURIComponent(term)}`,
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );

    if (!response.ok) {
      console.error("Search error:", response.status, await response.text());
      return [];
    }

    const jsonResponse = await response.json();
    if (!jsonResponse.tracks) return [];

    return jsonResponse.tracks.items.map((track) => ({
      id: track.id,
      name: track.name,
      artist: track.artists[0].name,
      album: track.album.name,
      art: track.album.images[0].url,
      uri: track.uri,
    }));
  },

  async savePlaylist(name, trackUris, accessToken) {
    if (!name || !trackUris.length) {
      alert("It's quiet in this playlist. Add some jams!");
      return;
    }

   
    if (!accessToken) {
      alert("No access token found. Please log in again.");
      return;
    }

    const headers = {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    };

    try {
      
      const userResponse = await fetch("https://api.spotify.com/v1/me", {
        headers,
      });

      if (!userResponse.ok) {
        console.error("User fetch error:", userResponse.status, await userResponse.text());
        return;
      }

      const userData = await userResponse.json();
      const userId = userData.id;

      
      const playlistResponse = await fetch(
        `https://api.spotify.com/v1/users/${userId}/playlists`,
        {
          headers,
          method: "POST",
          body: JSON.stringify({ name }),
        }
      );

      if (!playlistResponse.ok) {
        console.error("Playlist creation error:", playlistResponse.status, await playlistResponse.text());
        return;
      }

      const playlistData = await playlistResponse.json();
      const playlistId = playlistData.id;

      
      const tracksResponse = await fetch(
        `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
        {
          headers,
          method: "POST",
          body: JSON.stringify({ uris: trackUris }),
        }
      );

      if (!tracksResponse.ok) {
        console.error("Add tracks error:", tracksResponse.status, await tracksResponse.text());
        return;
      }

      alert(`Playlist "${name}" created successfully!`);
    } catch (err) {
      console.error("Save playlist error:", err);
    }
  },
};

export default Spotify;
