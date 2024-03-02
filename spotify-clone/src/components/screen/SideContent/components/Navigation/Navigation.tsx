import React, { useState } from "react";
import "./Navigation.css";
import SpotifySvgIcon from "../../../../shared/SVG/SpotifySvgIcon";
import { Icon } from "../../../../shared/UI";
import clsx from "clsx";

const Navigation = () => {
  const [active, setActive] = useState<"home" | "search">();

  return (
    <div className="nav-container">
      <SpotifySvgIcon />
      <div
        className={clsx({
          "nav-item": true,
          "nav-active": active === "home",
        })}
        onClick={() => setActive("home")}
      >
        <Icon icon="home" size="medium" />
        <p>Home</p>
      </div>
      <div
        className={clsx({
          "nav-item": true,
          "nav-active": active === "search",
        })}
        onClick={() => setActive("search")}
      >
        <Icon icon="search" size="medium" />
        <p>Search</p>
      </div>
    </div>
  );
};

export default Navigation;
