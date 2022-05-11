import React, { useState } from "react";

// ----- redux -----
import { useDispatch, useSelector } from "react-redux";
import { TStore } from "../../redux/store";

// ----- interface -----
import { JsonObject, ObjectString } from "../../assets/interface";
import ProductAdList from "./ProductAdList";

import RightPanelArrows from "../right-panel-arrows/RightPanelArrows";
import { ProductAdDiv } from "./ProductAd.style";
import { addGeneratedAd } from "../../redux/generatedTextSlice";
import {
  FormStyle,
  TextareaStyle,
  GenerateButton,
  HrLine,
} from "../../assets/style/styleVariables";

const ProductAd = () => {
  const dispatch = useDispatch();
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

  const aiFetch = (jsonObject: JsonObject, originalText: string) => {
    fetch("https://api.openai.com/v1/engines/text-curie-001/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_API}`,
      },
      body: JSON.stringify(jsonObject),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.choices[0].text);
        dispatch(
          addGeneratedAd({
            originalText,
            generatedText: data.choices[0].text,
          })
        );
      });
  };

  return (
    <ProductAdDiv>
      <RightPanelArrows panelTitle={"Generate Product Ad"} />

      <FormStyle
        onSubmit={(e) => {
          e.preventDefault();
          aiFetch(productAd, detailInput);
        }}
      >
        <TextareaStyle>
          <p>Product detail:</p>
          <textarea
            required
            onChange={(e) => setDetailInput(e.target.value)}
            placeholder="Learning Room is a virtual environment to help students from kindergarten to high school excel in school."
          ></textarea>
        </TextareaStyle>

        <GenerateButton type="submit">Generate</GenerateButton>
      </FormStyle>

      <HrLine />

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
