import React, { useContext } from "react";
import { UserSelected } from "../../App";
import { Section } from "../../assets/style/styleVariables";

const PreviewPanel = () => {
  const { userSelected } = useContext(UserSelected);

  return (
    <Section>
      <div>
        <p>{userSelected.name}</p>
        <p>{userSelected.ad}</p>
      </div>
    </Section>
  );
};

export default PreviewPanel;
