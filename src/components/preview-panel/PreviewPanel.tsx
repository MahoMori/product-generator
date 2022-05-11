import React, { useContext } from "react";
import { UserSelected } from "../../App";
import { Section } from "../../assets/style/styleVariables";
import { PreviewPanelDiv } from "./PreviewPanel.style";

const PreviewPanel = () => {
  const { userSelected } = useContext(UserSelected);

  return (
    <Section>
      <PreviewPanelDiv
        style={{
          fontFamily: "'Hind Siliguri', sans-serif",
        }}
      >
        <div>
          <p>{userSelected.name}</p>
          <p>{userSelected.ad}</p>
        </div>
      </PreviewPanelDiv>
    </Section>
  );
};

export default PreviewPanel;
