import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { JsonObject, NameState } from "../../assets/interface";
import { TStore } from "../../redux/store";
import RightPanelArrows from "../right-panel-arrows/RightPanelArrows";
import { ProductNameDiv, SeedWordsStyle } from "./ProductName.style";
import ProductNameList from "./ProductNameList";
import { addGeneratedName } from "../../redux/generatedTextSlice";
import {
  FormStyle,
  TextareaStyle,
  GenerateButton,
  HrLine,
} from "../../assets/style/styleVariables";

const ProductName = () => {
  const dispatch = useDispatch();
  const generatedTextState = useSelector((state: TStore) => state);

  const [descriptionInput, setDescriptionInput] = useState<string>("");
  const [seedWordsInput, setSeedWordsInput] = useState<string[]>(["", "", ""]);
  const [loading, setIsLoading] = useState<boolean>(false);

  const productName = {
    prompt: `Product description: A home milkshake maker\nSeed words: fast, healthy, compact.\nProduct names: HomeShaker, Fit Shaker, QuickShake, Shake Maker\n\nProduct description: ${descriptionInput}\nSeed words: ${seedWordsInput.join(
      ", "
    )}.`,
    temperature: 0.8,
    max_tokens: 60,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
  };

  const aiFetch = (
    jsonObject: JsonObject,
    description: string,
    seedWords: string[]
  ) => {
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
        console.log(data.choices[0].text);
        const text: string = data.choices[0].text;
        const nameArr: string[] = text
          .substring(text.indexOf(":") + 2)
          .split(", ");

        dispatch(
          addGeneratedName({
            description,
            seedWords,
            generatedText: nameArr,
          })
        );
        setIsLoading(false);
      });
  };

  return (
    <ProductNameDiv>
      <RightPanelArrows panelTitle={"Generate Product Name"} />
      <FormStyle
        onSubmit={(e) => {
          e.preventDefault();
          aiFetch(productName, descriptionInput, seedWordsInput);
        }}
      >
        <TextareaStyle>
          <p>Product description:</p>
          <textarea
            required
            placeholder="A pair of shoes that can fit any foot size."
            onChange={(e) => setDescriptionInput(e.target.value)}
          ></textarea>
        </TextareaStyle>

        <SeedWordsStyle>
          <p>Seed words:</p>
          <div>
            <span>*</span>
            <input
              type="text"
              placeholder="adaptable"
              required
              onChange={(e) =>
                setSeedWordsInput((prev) => [e.target.value, prev[1], prev[2]])
              }
            />
          </div>

          <input
            type="text"
            placeholder="fit"
            onChange={(e) =>
              setSeedWordsInput((prev) => [prev[0], e.target.value, prev[2]])
            }
          ></input>
          <input
            type="text"
            placeholder="omni-fit"
            onChange={(e) =>
              setSeedWordsInput((prev) => [prev[0], prev[1], e.target.value])
            }
          ></input>
        </SeedWordsStyle>

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

      {generatedTextState.name.length > 0 &&
        generatedTextState.name.map((name: NameState) => (
          <ProductNameList name={name} />
        ))}
    </ProductNameDiv>
  );
};

export default ProductName;
