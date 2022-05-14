import React, { useContext, useEffect } from "react";
import {
  FacebookIcon,
  FacebookShareButton,
  EmailShareButton,
  EmailIcon,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";
import { LeftValue, UserSelected } from "../../App";
import { HeightProps } from "../../assets/interface";
import RightPanelArrows from "../right-panel-arrows/RightPanelArrows";
import { SharePanelDiv, ShareContainer } from "./SharePanel.style";

const SharePanel: React.VFC<HeightProps> = ({ setHeight }) => {
  const { userSelected } = useContext(UserSelected);

  const { leftValue } = useContext(LeftValue);

  const shareUrl = "https://product-generator.netlify.app/";
  const context = `I am hereby to present a new product, ${userSelected.name}! ${userSelected.ad} (generated with Product Generator)`;
  const contextTwitter = `${userSelected.name} - ${userSelected.ad} (generated with Product Generator)`;

  useEffect(() => {
    if (leftValue === "-200") {
      setHeight("600");
    }
  }, [leftValue]);

  return (
    <SharePanelDiv>
      <RightPanelArrows panelTitle={"Share your product!"} />

      <ShareContainer>
        <img
          src={require("../../assets/images/share-gif.gif")}
          alt="share animation gif"
        />

        <div>
          <FacebookShareButton
            url={shareUrl}
            quote={context}
            className="Demo__some-network__share-button"
          >
            <FacebookIcon size={80} borderRadius={20} />
          </FacebookShareButton>

          <TwitterShareButton
            url={shareUrl}
            title={contextTwitter}
            className="Demo__some-network__share-button"
          >
            <TwitterIcon size={80} borderRadius={20} />
          </TwitterShareButton>

          <WhatsappShareButton
            url={shareUrl}
            title={context}
            separator=":: "
            className="Demo__some-network__share-button"
          >
            <WhatsappIcon size={80} borderRadius={20} />
          </WhatsappShareButton>

          <EmailShareButton
            url={shareUrl}
            title={context}
            className="Demo__some-network__share-button"
          >
            <EmailIcon size={80} borderRadius={20} />
          </EmailShareButton>
        </div>
      </ShareContainer>
    </SharePanelDiv>
  );
};

export default SharePanel;
