import React from "react";

import "./Playlist.css";
import { playlists } from "./utility";
import PlaylistItem from "./components/PlaylistItem/PlaylistItem";

const Playlist = () => {
  return (
    <>
      <p className="playlist-title"> Spotify Playlist</p>
      <div className="playlist-container">
        {playlists.map((p) => (
          <PlaylistItem playlist={p} key={p.id} />
        ))}
      </div>
    </>
  );
};

export default Playlist;
