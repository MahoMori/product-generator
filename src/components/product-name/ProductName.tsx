import React, { useState, useEffect } from "react";

// ----- redux -----
import { useDispatch, useSelector } from "react-redux";
import { TStore } from "../../redux/store";
import { addGeneratedName } from "../../redux/generatedTextSlice";

// ----- interface -----
import { HeightProps, JsonObject, NameState } from "../../assets/interface";

// ----- components -----
import RightPanelArrows from "../right-panel-arrows/RightPanelArrows";
import ProductNameList from "./ProductNameList";

// ----- styled-components -----
import { ProductNameDiv, SeedWordsStyle } from "./ProductName.style";
import {
  FormStyle,
  TextareaStyle,
  GenerateButton,
  HrLine,
  NoDataText,
} from "../../assets/style/styleVariables";

const ProductName: React.VFC<HeightProps> = ({
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
  const [descriptionInput, setDescriptionInput] = useState<string>("");
  const [seedWordsInput, setSeedWordsInput] = useState<string[]>(["", "", ""]);

  const [loading, setIsLoading] = useState<boolean>(false);

  // ----- fetch API -----
  const productName: JsonObject = {
    prompt: `Product description: A home milkshake maker\nSeed words: fast, healthy, compact.\nProduct names: HomeShaker, Fit Shaker, QuickShake, Shake Maker\n\nProduct description: ${descriptionInput}\nSeed words: ${seedWordsInput.join(
      ", "
    )}.`,
    temperature: 0.8,
    max_tokens: 60,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
  };

  const aiNameFetch = (
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
      })
      .then(() => {
        const adDivHeight = getHeight("product-ad-div") as number;
        const nameDivHeight = getHeight("product-name-div") as number;

        setHeight(Math.max(adDivHeight, nameDivHeight).toString());
      });
  };

  useEffect(() => {
    // if the app is showing ProductName component and generated name exists
    if (leftValue === "-100" && generatedTextState.name.length > 0) {
      const heightValue = getHeight("product-name-div") as number;
      setHeight(heightValue.toString());
    }

    // if the app is showing ProductName component and generated name does not exist
    if (leftValue === "-100" && generatedTextState.name.length === 0)
      setHeight("600");
  }, [leftValue]);

  return (
    <ProductNameDiv id="product-name-div">
      <RightPanelArrows
        panelTitle={"Generate Product Name"}
        leftValue={leftValue}
        setLeftValue={setLeftValue}
      />
      <FormStyle
        onSubmit={(e) => {
          e.preventDefault();
          aiNameFetch(productName, descriptionInput, seedWordsInput);
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

          <div>
            <span>*</span>
            <input
              type="text"
              placeholder="fit"
              required
              onChange={(e) =>
                setSeedWordsInput((prev) => [prev[0], e.target.value, prev[2]])
              }
            ></input>
          </div>

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

      {generatedTextState.name.length > 0 && (
        <>
          {generatedTextState.name.map((name: NameState) => (
            <ProductNameList key={name.id} name={name} />
          ))}

          <HrLine />
          <NoDataText>No data below this😣</NoDataText>
        </>
      )}
    </ProductNameDiv>
  );
};

export default ProductName;
