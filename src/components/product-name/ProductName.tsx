import React from "react";
import RightPanelArrows from "../right-panel-arrows/RightPanelArrows";
import { ProductNameDiv } from "./ProductName.style";

const ProductName = () => {
  return (
    <ProductNameDiv>
      <RightPanelArrows panelTitle={"Generate Product Name"} />
      ProductName
    </ProductNameDiv>
  );
};

export default ProductName;
