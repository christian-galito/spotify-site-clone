import React from "react";
import "./SocialMedia.css";
import { Icon, IconButton } from "../../../../../../shared/UI";

const SocialMedia = () => {
  return (
    <div className="social-media-container">
      <IconButton className="social-media">
        <Icon icon="instagram" />
      </IconButton>
      <IconButton className="social-media">
        <Icon icon="twitter" />
      </IconButton>
      <IconButton className="social-media">
        <Icon icon="facebook" variant="outlined" />
      </IconButton>
    </div>
  );
};

export default SocialMedia;
