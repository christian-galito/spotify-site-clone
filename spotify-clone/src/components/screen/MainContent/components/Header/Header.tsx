import React from "react";
import "./Header.css";
import Button from "../../../../shared/UI/Button/Button";
import { Icon } from "../../../../shared/UI";

const Header = () => {
  return (
    <div className="header-container">
      <div className="header-nav">
        <ul>
          <li>
            <Icon icon="arrow-back" size="small" />
          </li>
          <li>
            <Icon icon="arrow-forward" size="small" />
          </li>
        </ul>
      </div>
      <div className="header-menu">
        <p>Premium</p>
        <p>Support</p>
        <p>Download</p>
        <p
          style={{
            margin: "0 8px",
            transform: "none",
            color: "#a7a7a7",
            cursor: "default",
          }}
        >
          |
        </p>
        <p style={{ margin: "0 16px 0 8px" }}>Sign up</p>
        <Button>Log in</Button>
      </div>
    </div>
  );
};

export default Header;
