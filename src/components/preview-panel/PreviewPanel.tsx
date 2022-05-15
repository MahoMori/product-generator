import React, { useContext } from "react";

// ----- context for user selected text -----
import { UserSelected } from "../../App";

// ----- styled-components -----
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
