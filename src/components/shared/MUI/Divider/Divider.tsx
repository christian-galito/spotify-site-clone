import React from "react";

import { Divider, DividerProps } from "@mui/material";

interface DividerComponentProps extends DividerProps {}

const DividerComponent = (props: DividerComponentProps) => {
  return <Divider {...props} />;
};

export default DividerComponent;
