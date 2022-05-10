import React, { useContext } from "react";

import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import { LeftValue } from "../../App";
import { ObjectString } from "../../assets/interface";

const RightPanelArrows = ({ panelTitle }: ObjectString) => {
  const { leftValue, setLeftValue } = useContext(LeftValue);

  return (
    <div>
      <button
        onClick={() => {
          setLeftValue((prev) => (parseInt(prev) - 100).toString());
          console.log(leftValue);
        }}
        disabled={leftValue === "-200" ? true : false}
      >
        <BsArrowLeftCircle />
      </button>

      <div>
        <p>{panelTitle}</p>
      </div>

      <button
        onClick={() => {
          setLeftValue((prev) => (parseInt(prev) + 100).toString());
          console.log(leftValue);
        }}
        disabled={leftValue === "0" ? true : false}
      >
        <BsArrowRightCircle />
      </button>
    </div>
  );
};

export default RightPanelArrows;
