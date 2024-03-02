import React, { useCallback, useEffect, useRef, useState } from "react";

import "simplebar-react/dist/simplebar.min.css";
import SimpleBar from "simplebar-react";
import clsx from "clsx";

import "./Library.css";

import { Icon } from "../../../../shared/UI";
import CreatePlaylist from "./CreatePlaylist/CreatePlaylist";
import BrowsePodcast from "./BrowsePodcast/BrowsePodcast";
import { Tooltip } from "../../../../shared/MUI";

const Library = () => {
  const [hasScroll, setHasScroll] = useState(false);

  const libraryRef = useRef<any>();

  console.log(libraryRef?.current?.scrollTop, "div ref");

  const handleScroll = useCallback(() => {
    setHasScroll(!!libraryRef?.current?.scrollTop);
  }, []);

  useEffect(() => {
    const div = libraryRef.current;
    div.addEventListener("scroll", handleScroll);
  }, [handleScroll]);

  return (
    <>
      <div
        className={clsx({
          "library-container": true,
          "has-scroll": hasScroll,
        })}
      >
        <div
          style={{
            padding: "12px 18px",
            justifyContent: "space-between",
            display: "flex",
          }}
        >
          <Tooltip
            title="Collapse Your Library"
            placement="top"
            enterDelay={500}
          >
            <div className="library-item-1">
              <Icon icon="library" size="medium" />
              <p>Your Library</p>
            </div>
          </Tooltip>
          <Tooltip
            title="Create playlist or folder"
            placement="top"
            enterDelay={500}
          >
            <div className="library-item-2">
              <Icon icon="add" size="small" />
            </div>
          </Tooltip>
        </div>
      </div>

      <SimpleBar
        style={{ minHeight: "120px" }}
        autoHide={false}
        scrollableNodeProps={{ ref: libraryRef }}
      >
        <div>
          <CreatePlaylist />
          <BrowsePodcast />
        </div>
      </SimpleBar>
    </>
  );
};

export default Library;
