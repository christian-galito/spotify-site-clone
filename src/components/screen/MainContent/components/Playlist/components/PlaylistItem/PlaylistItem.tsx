import React from "react";

import "./PlaylistItem.css";
import { TPlaylistItem } from "../../utility";
import PlayButton from "../PlayButton/PlayButton";

interface PlaylistItemProps {
  playlist: TPlaylistItem;
}

const PlaylistItem = (props: PlaylistItemProps) => {
  const { img, title, description } = props.playlist;
  return (
    <div className="playlist-item-container">
      <img src={img} alt="Mega Hit Mix" />
      <p className="title">{title}</p>
      <p className="description">{description}</p>
      <PlayButton />
    </div>
  );
};

export default PlaylistItem;
