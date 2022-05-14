import React, { useContext } from "react";

import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import { LeftValue } from "../../App";
import { ObjectString } from "../../assets/interface";
import { ArrowsDiv, PanelTitle } from "./RightPanelArrows.style";

const RightPanelArrows = ({ panelTitle }: ObjectString) => {
  const { leftValue, setLeftValue } = useContext(LeftValue);

  return (
    <ArrowsDiv>
      <button
        onClick={() => {
          setLeftValue((prev) => (parseInt(prev) + 100).toString());
        }}
        disabled={leftValue === "0" ? true : false}
      >
        <BsArrowLeftCircle />
      </button>

      <PanelTitle>
        <p>{panelTitle}</p>
      </PanelTitle>

      <button
        onClick={() => {
          setLeftValue((prev) => (parseInt(prev) - 100).toString());
        }}
        disabled={leftValue === "-200" ? true : false}
      >
        <BsArrowRightCircle />
      </button>
    </ArrowsDiv>
  );
};

export default RightPanelArrows;
