import React, { useContext } from "react";
import { UserSelected } from "../../App";

const PreviewPanel = () => {
  const { userSelected } = useContext(UserSelected);

  return (
    <div>
      <div>
        <p>{userSelected.name}</p>
        <p>{userSelected.ad}</p>
      </div>
    </div>
  );
};

export default PreviewPanel;
