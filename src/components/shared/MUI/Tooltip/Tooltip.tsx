import React from "react";

import { Tooltip, TooltipProps } from "@mui/material";

interface TooltipComponentProps extends TooltipProps {}

const TooltipComponent = (props: TooltipComponentProps) => {
  return <Tooltip {...props} />;
};

export default TooltipComponent;
