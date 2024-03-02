import React from "react";
import "./MainFooter.css";
import Links from "./components/Links/Links";
import SocialMedia from "./components/SocialMedia/SocialMedia";
import { Divider } from "../../../../shared/MUI";

const MainFooter = () => {
  return (
    <div className="main-footer-container">
      <Links />
      <SocialMedia />
      <Divider
        sx={{
          width: "calc(100% - 32px);",
          margin: `8px 16px`,
          backgroundColor: "rgba(255, 255, 255, 0.1)",
        }}
      />
      <p
        style={{
          marginLeft: "16px",
          height: "100px",
          paddingTop: "16px",
          color: "#a7a7a7",
        }}
      >
        © 2024 Spotify AB
      </p>
    </div>
  );
};

export default MainFooter;
