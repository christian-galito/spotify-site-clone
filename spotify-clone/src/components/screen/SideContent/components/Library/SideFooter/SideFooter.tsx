import React from "react";
import { Icon } from "../../../../../shared/UI";

import "../../../SideContent.css";

const SideFooter = () => {
  return (
    <div
      style={{
        margin: "24px",
        gap: "16px",
        color: "#b3b3b3",
        display: "flex",
        flexDirection: "column",
        flex: 1,
        justifyContent: "end",
      }}
    >
      <div
        style={{
          gap: "16px",
          display: "flex",
          flexWrap: "wrap",
          fontSize: "10px",
          cursor: "pointer",
        }}
      >
        <p>Legal</p>
        <p>Safety & Privacy Center</p>
        <p>Privacy Policy</p>
        <p>Cookies</p>
        <p>About Ads</p>
        <p>Accessibility</p>
      </div>
      <div className="side-footer-cookies">Cookies</div>

      <div className="side-footer-language">
        <Icon icon="language" size="small" />
        <p style={{ fontSize: "12px", fontWeight: 400, paddingTop: "2px" }}>
          English
        </p>
      </div>
    </div>
  );
};

export default SideFooter;
