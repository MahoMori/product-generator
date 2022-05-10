import React, { useState } from "react";
import { FetchComponentProp } from "../../assets/interface";

const ProductAd: React.VFC<FetchComponentProp> = ({ aiFetch }) => {
  const [detailInput, setDetailInput] = useState<string>();

  const productAd = {
    prompt: `Write a creative ad for the following product:\n\nProduct: ${detailInput}`,
    temperature: 0.5,
    max_tokens: 60,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
  };

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          aiFetch(productAd, "ad");
        }}
      >
        <textarea onChange={(e) => setDetailInput(e.target.value)}></textarea>
        <button type="submit">Generate</button>
      </form>
    </div>
  );
};

export default ProductAd;
