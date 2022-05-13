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
          <p>{userSelected.name ? userSelected.name : <i>Product Name</i>}</p>
          <p>
            {userSelected.ad ? userSelected.ad : <i>Product Description</i>}
          </p>
        </PreviewCard>
      </PreviewPanelDiv>
    </Section>
  );
};

export default PreviewPanel;
