import React from "react";

import "../Library.css";
import { Button } from "../../../../../shared/UI";

const BrowsePodcast = () => {
  return (
    <div className="sub-library-container">
      <p style={{ fontWeight: "bold" }}>Let's find some podcast to follow</p>
      <p style={{ fontSize: "12px" }}>We'll keep you updated on new episodes</p>
      <Button size="small" sx={{ width: "130px" }}>
        Browse podcast
      </Button>
    </div>
  );
};

export default BrowsePodcast;
