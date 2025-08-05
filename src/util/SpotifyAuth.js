const clientID = "747656671cad4eaa86ef2f1f3877ae15";
const redirectUri = "https://jammingmusicfinder.netlify.app/";

const SpotifyAuth = {
  generateCodeVerifier(length = 128) {
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~";
    let verifier = "";
    for (let i = 0; i < length; i++) {
      verifier += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return verifier;
  },

  async generateCodeChallenge(codeVerifier) {
    const data = new TextEncoder().encode(codeVerifier);
    const digest = await crypto.subtle.digest("SHA-256", data);
    return btoa(String.fromCharCode(...new Uint8Array(digest)))
      .replace(/\+/g, "-")
      .replace(/\//g, "_")
      .replace(/=+$/, "");
  },

  async redirectToAuthCodeFlow() {
    const verifier = this.generateCodeVerifier();
    const challenge = await this.generateCodeChallenge(verifier);
    localStorage.setItem("verifier", verifier);

    const url = `https://accounts.spotify.com/authorize?client_id=${clientID}&response_type=code&redirect_uri=${encodeURIComponent(
      redirectUri
    )}&scope=playlist-modify-public%20playlist-modify-private&code_challenge_method=S256&code_challenge=${challenge}`;

    window.location = url;
  },

  async exchangeToken(code) {
    const verifier = localStorage.getItem("verifier");

    const body = new URLSearchParams({
      client_id: clientID,
      grant_type: "authorization_code",
      code,
      redirect_uri: redirectUri,
      code_verifier: verifier,
    });

    const response = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: body,
    });

    const data = await response.json();
    if (data.access_token) {
      localStorage.setItem("access_token", data.access_token);
      localStorage.setItem("expires_in", data.expires_in);
    }
    return data.access_token;
  },

  getAccessToken() {
    return localStorage.getItem("access_token");
  },
};

export default SpotifyAuth;