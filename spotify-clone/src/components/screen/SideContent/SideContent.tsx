import React from "react";

import Navigation from "./components/Navigation/Navigation";
import Library from "./components/Library/Library";
import SideFooter from "./components/Library/SideFooter/SideFooter";
import "./SideContent.css";

const SideContent = () => {
  return (
    <div className="side-container">
      <Navigation />
      <div className="library">
        <Library />
        <SideFooter />
      </div>
    </div>
  );
};

export default SideContent;
