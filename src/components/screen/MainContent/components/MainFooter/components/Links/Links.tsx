import React from "react";
import "./Links.css";

const Links = () => {
  return (
    <div className="links-container">
      <div className="links-div">
        <p>Company</p>
        <ul>
          <li>About</li>
          <li>Jobs</li>
          <li>For the Record</li>
        </ul>
      </div>

      <div className="links-div">
        <p>Communities</p>
        <ul>
          <li>For Artists</li>
          <li>Developers</li>
          <li>Advertising</li>
          <li>Investors</li>
          <li>Vendors</li>
        </ul>
      </div>
      <div className="links-div">
        <p>Useful links</p>
        <ul>
          <li>Support</li>
          <li>Free Mobile App</li>
        </ul>
      </div>
    </div>
  );
};

export default Links;
