import React from "react";

import "../Library.css";
import { Button } from "../../../../../shared/UI";

const CreatePlaylist = () => {
  return (
    <div className="sub-library-container" onScroll={() => {}}>
      <p style={{ fontWeight: "bold" }}>Create your first playlist</p>
      <p style={{ fontSize: "12px" }}>It's easy, we'll help you</p>
      <Button size="small" sx={{ width: "120px" }}>
        Create Playlist
      </Button>
    </div>
  );
};

export default CreatePlaylist;
