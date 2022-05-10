import React, { useContext } from "react";
import {
  FacebookIcon,
  FacebookShareButton,
  LineIcon,
  LineShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";
import { UserSelected } from "../../App";
import RightPanelArrows from "../right-panel-arrows/RightPanelArrows";
import { SharePanelDiv } from "./SharePanel.style";

const SharePanel = () => {
  const { userSelected } = useContext(UserSelected);

  const shareUrl = "https://product-generator.netlify.app/";
  const context = `I am hereby to present a new product, ${userSelected.name}! ${userSelected.ad} (generated with Product Generator)`;
  const contextTwitter = `${userSelected.name} - ${userSelected.ad} (generated with Product Generator)`;

  return (
    <SharePanelDiv>
      <RightPanelArrows panelTitle={"Share your product!"} />
      SharePanel
      <div>
        <FacebookShareButton
          url={shareUrl}
          quote={context}
          className="Demo__some-network__share-button"
        >
          <FacebookIcon size={32} round />
        </FacebookShareButton>

        <TwitterShareButton
          url={shareUrl}
          title={contextTwitter}
          className="Demo__some-network__share-button"
        >
          <TwitterIcon size={32} round />
        </TwitterShareButton>

        <WhatsappShareButton
          url={shareUrl}
          title={context}
          separator=":: "
          className="Demo__some-network__share-button"
        >
          <WhatsappIcon size={32} round />
        </WhatsappShareButton>

        <LineShareButton
          url={shareUrl}
          title={context}
          className="Demo__some-network__share-button"
        >
          <LineIcon size={32} round />
        </LineShareButton>
      </div>
    </SharePanelDiv>
  );
};

export default SharePanel;
