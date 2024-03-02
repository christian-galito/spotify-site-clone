import React from "react";
import { IconButton, IconButtonProps } from "@mui/material";

interface IconButtonComponentProps extends IconButtonProps {}

const IconButtonComponent = (props: IconButtonComponentProps) => {
  return <IconButton {...props}></IconButton>;
};

export default IconButtonComponent;
