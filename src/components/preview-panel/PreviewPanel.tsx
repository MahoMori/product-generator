import React, { useContext } from "react";
import { UserSelected } from "../../App";
import { Section } from "../../assets/style/styleVariables";
import { PreviewPanelDiv, PreviewCard } from "./PreviewPanel.style";

const PreviewPanel = () => {
  const { userSelected } = useContext(UserSelected);

  return (
    <Section>
      <PreviewPanelDiv
        style={{
          fontFamily: "'Hind Siliguri', sans-serif",
        }}
      >
        <PreviewCard>
          <p>{userSelected.name}</p>
          <p>{userSelected.ad}</p>
        </PreviewCard>
      </PreviewPanelDiv>
    </Section>
  );
};

export default PreviewPanel;
