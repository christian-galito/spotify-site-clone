import React, { useEffect, useState } from "react";
import { IconButtonProps, SxProps, Theme } from "@mui/material";
import {
  Add,
  ArrowBackIosNew,
  ArrowForwardIos,
  Facebook,
  FacebookOutlined,
  FacebookTwoTone,
  Home,
  HomeOutlined,
  HomeTwoTone,
  Instagram,
  Language,
  LanguageOutlined,
  LanguageTwoTone,
  LibraryMusic,
  LibraryMusicOutlined,
  LibraryMusicTwoTone,
  Search,
  SearchOutlined,
  SearchTwoTone,
  Twitter,
} from "@mui/icons-material";

interface IconButtonComponentProps extends IconButtonProps {
  icon:
    | "facebook"
    | "instagram"
    | "twitter"
    | "home"
    | "search"
    | "library"
    | "add"
    | "language"
    | "arrow-back"
    | "arrow-forward";
  variant?: "filled" | "outlined" | "duotone";
}

const IconComponent = (props: IconButtonComponentProps) => {
  const { icon, variant = "filled", sx, size = "small" } = props;

  const [style, setStyle] = useState<SxProps<Theme>>(sx ?? {});

  useEffect(() => {
    if (size) {
      let fontSize;

      switch (size) {
        case "small":
          fontSize = "20px";
          break;
        case "medium":
          fontSize = "30px";
          break;
        case "large":
          fontSize = "40px";
          break;
      }

      setStyle({ ...sx, fontSize });
    }
  }, [size, sx]);

  const getIcon = () => {
    switch (icon) {
      case "facebook":
        switch (variant) {
          case "filled":
            return <Facebook sx={style} />;
          case "outlined":
            return <FacebookOutlined sx={style} />;
          case "duotone":
            return <FacebookTwoTone sx={style} />;
          default:
            return <></>;
        }
      case "instagram":
        return <Instagram sx={style} />;
      case "twitter":
        return <Twitter sx={style} />;
      case "home":
        switch (variant) {
          case "filled":
            return <Home sx={style} />;
          case "outlined":
            return <HomeOutlined sx={style} />;
          case "duotone":
            return <HomeTwoTone sx={style} />;
          default:
            return <></>;
        }
      case "search":
        switch (variant) {
          case "filled":
            return <Search sx={style} />;
          case "outlined":
            return <SearchOutlined sx={style} />;
          case "duotone":
            return <SearchTwoTone sx={style} />;
          default:
            return <></>;
        }
      case "add":
        return <Add sx={style} />;

      case "library":
        switch (variant) {
          case "filled":
            return <LibraryMusic sx={style} />;
          case "outlined":
            return <LibraryMusicOutlined sx={style} />;
          case "duotone":
            return <LibraryMusicTwoTone sx={style} />;
          default:
            return <></>;
        }
      case "language":
        switch (variant) {
          case "filled":
            return <Language sx={style} />;
          case "outlined":
            return <LanguageOutlined sx={style} />;
          case "duotone":
            return <LanguageTwoTone sx={style} />;
          default:
            return <></>;
        }
      case "arrow-back":
        return <ArrowBackIosNew sx={style} />;
      case "arrow-forward":
        return <ArrowForwardIos sx={style} />;
      default:
        return <></>;
    }
  };

  return getIcon();
};

export default IconComponent;
