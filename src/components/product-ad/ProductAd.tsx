import React, { useEffect, useState } from "react";

// ----- redux -----
import { useDispatch, useSelector } from "react-redux";
import { addGeneratedAd } from "../../redux/generatedTextSlice";
import { TStore } from "../../redux/store";

// ----- interface -----
import { JsonObject, AdState } from "../../assets/interface";

// ----- components -----
import ProductAdList from "./ProductAdList";
import RightPanelArrows from "../right-panel-arrows/RightPanelArrows";

// ----- styled-components -----
import { ProductAdDiv } from "./ProductAd.style";
import {
  FormStyle,
  TextareaStyle,
  GenerateButton,
  HrLine,
  NoDataText,
} from "../../assets/style/styleVariables";
import { HeightProps } from "../../assets/interface";

const ProductAd: React.VFC<HeightProps> = ({
  leftValue,
  setLeftValue,
  height,
  setHeight,
  getHeight,
}) => {
  // redux
  const dispatch = useDispatch();
  const generatedTextState = useSelector((state: TStore) => state);

  // useState for inputs
  const [detailInput, setDetailInput] = useState<string>("");

  const [loading, setIsLoading] = useState<boolean>(false);

  // ----- fetch API -----
  const productAd: JsonObject = {
    prompt: `Write a creative ad for the following product:\n\nProduct: ${detailInput}`,
    temperature: 0.5,
    max_tokens: 60,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
  };

  const aiAdFetch = (jsonObject: JsonObject, originalText: string) => {
    setIsLoading(true);
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
        dispatch(
          addGeneratedAd({
            originalText,
            generatedText: data.choices[0].text,
          })
        );
        setIsLoading(false);
      })
      .then(() => setHeight(getHeight("product-ad-div") as string));
  };

  useEffect(() => {
    // if the app is showing ProductAd component and generated ad exists
    if (leftValue === "0" && generatedTextState.ad.length > 0) {
      setHeight(getHeight("product-ad-div") as string);
    }

    // if the app is showing ProductAd component and generated ad does not exist
    if (leftValue === "0" && generatedTextState.ad.length === 0)
      setHeight("600");
  }, [leftValue]);

  return (
    <ProductAdDiv id="product-ad-div">
      <RightPanelArrows
        panelTitle={"Generate Product Ad"}
        leftValue={leftValue}
        setLeftValue={setLeftValue}
      />

      <FormStyle
        onSubmit={(e) => {
          e.preventDefault();
          aiAdFetch(productAd, detailInput);
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

        <GenerateButton type="submit">
          {loading ? (
            <img
              src={require("../../assets/images/loading-gif.gif")}
              alt="loading"
            />
          ) : (
            <>Generate</>
          )}
        </GenerateButton>
      </FormStyle>

      <HrLine />

      {generatedTextState.ad.length > 0 && (
        <>
          {generatedTextState.ad.map((ad: AdState) => (
            <ProductAdList key={ad.id} ad={ad} />
          ))}
          <HrLine />
          <NoDataText>No data below this😣</NoDataText>
        </>
      )}
    </ProductAdDiv>
  );
};

export default ProductAd;
