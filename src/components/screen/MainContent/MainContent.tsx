import React from "react";

import "simplebar-react/dist/simplebar.min.css";
import SimpleBar from "simplebar-react";

import "./MainContent.css";

import Header from "./components/Header/Header";
import Playlist from "./components/Playlist/Playlist";
import MainFooter from "./components/MainFooter/MainFooter";

const MainContent = () => {
  return (
    <div className="main-container">
      <SimpleBar style={{ height: "100%" }} autoHide={false}>
        <Header />
        <Playlist />
        <MainFooter />
      </SimpleBar>
    </div>
  );
};

export default MainContent;
