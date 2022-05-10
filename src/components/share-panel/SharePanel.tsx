import React from "react";
import RightPanelArrows from "../right-panel-arrows/RightPanelArrows";
import { SharePanelDiv } from "./SharePanel.style";

const SharePanel = () => {
  return (
    <SharePanelDiv>
      <RightPanelArrows panelTitle={"Share your product!"} />
      SharePanel
    </SharePanelDiv>
  );
};

export default SharePanel;
