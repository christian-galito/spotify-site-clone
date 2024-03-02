import React, { useEffect, useState } from "react";
import { SxProps, Theme } from "@mui/material/styles";

import { Button, ButtonProps } from "@mui/material";
import "./Button.css";

// const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
//   color: "black",
//   padding: "16px",
//   borderRadius: "50px",
//   textTransform: "none",
//   backgroundColor: "#F6F6F6",
//   width: "150px",
//   height: "50px",
//   "&:hover": {
//     transform: "scale(1.1)",
//   },
// }));

const ButtonComponent = (props: ButtonProps) => {
  const { variant = "contained", size = "medium", sx } = props;

  const [style, setStyle] = useState<SxProps<Theme>>(sx ?? {});

  useEffect(() => {
    if (size) {
      let padding;
      switch (size) {
        case "small":
          padding = "4px";
          break;
        case "medium":
          padding = "8px";
          break;
        case "large":
          padding = "12px";
          break;
        default:
          break;
      }

      setStyle({ ...sx, padding });
    }
  }, [sx, size]);

  return (
    <Button
      className="button1"
      {...props}
      sx={style}
      variant={variant}
    ></Button>
  );

  // return (
  //   <ColorButton variant={variant} size={size}>
  //     {children}
  //   </ColorButton>
  // );
};

export default ButtonComponent;
