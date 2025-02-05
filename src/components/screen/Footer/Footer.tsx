import React from "react";

import "./Footer.css";
import { Button } from "../../shared/UI";

const Footer = () => {
  return (
    <div className="footer-container">
      <div>
        <p style={{ fontSize: "12px", fontWeight: 400 }}>Preview of Spotify</p>
        <p>
          Sign up to get unlimited songs and podcasts with occasional ads. No
          credit card needed.
        </p>
      </div>
      <div style={{ fontSize: "13px" }}>
        <Button size="medium">Sign Up Free</Button>
      </div>
    </div>
  );
};

export default Footer;
