import React from "react";

// ----- interface -----
import { RightPanelArrowProps } from "../../assets/interface";

// ----- styled-components -----
import { ArrowsDiv, PanelTitle } from "./RightPanelArrows.style";

// ----- react icons -----
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

const RightPanelArrows = ({
  panelTitle,
  leftValue,
  setLeftValue,
}: RightPanelArrowProps) => {
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
