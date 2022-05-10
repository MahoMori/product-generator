import React, { useState } from "react";

// ----- redux -----
import { useSelector } from "react-redux";
import { TStore } from "../../redux/store";

// ----- interface -----
import { FetchComponentProp, ObjectString } from "../../assets/interface";
import ProductAdList from "./ProductAdList";

import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";
import RightPanelArrows from "../right-panel-arrows/RightPanelArrows";
import { ProductAdDiv } from "./ProductAd.style";

const ProductAd: React.VFC<FetchComponentProp> = ({ aiFetch }) => {
  const generatedTextState = useSelector((state: TStore) => state);

  const [detailInput, setDetailInput] = useState<string>("");

  const productAd = {
    prompt: `Write a creative ad for the following product:\n\nProduct: ${detailInput}`,
    temperature: 0.5,
    max_tokens: 60,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
  };

  return (
    <ProductAdDiv>
      <RightPanelArrows panelTitle={"Generate Product Ad"} />

      <form
        onSubmit={(e) => {
          e.preventDefault();
          aiFetch(productAd, detailInput, "ad");
        }}
      >
        <textarea onChange={(e) => setDetailInput(e.target.value)}></textarea>
        <button type="submit">Generate</button>
      </form>
      <div>
        {generatedTextState.ad.length > 0 &&
          generatedTextState.ad.map((ad: ObjectString) => (
            <ProductAdList ad={ad} />
          ))}
      </div>
    </ProductAdDiv>
  );
};

export default ProductAd;
