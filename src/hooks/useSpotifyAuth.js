import { useEffect, useState } from "react";
import SpotifyAuth from "../util/SpotifyAuth";

export default function useSpotifyAuth() {
    const [token, setToken] = useState(null);

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);
        const code = urlParams.get("code");

        const stored = SpotifyAuth.getAccessToken();

        if (stored) {
            setToken(stored);
        } else if (code){
            SpotifyAuth.exchangeToken(code).then((newToken) => {
                setToken(newToken);
                window.history.replaceState({}, document.title, "/");
            });
        } else {
            SpotifyAuth.redirectToAuthCodeFlow();
        }
    }, []);
    return token;
}