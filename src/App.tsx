import React, { useState, useEffect, createContext } from "react";
import "./App.css";

// ----- redux -----
import { useDispatch, useSelector } from "react-redux";
import { TStore } from "./redux/store";
import { addGeneratedAd, addGeneratedName } from "./redux/generatedTextSlice";

// ----- interface -----
import {
  ContextProviderValue,
  JsonObject,
  ObjectString,
} from "./assets/interface";

// ----- components -----
import ProductAd from "./components/product-ad/ProductAd";
import PreviewPanel from "./components/preview-panel/PreviewPanel";

// ----- useContext -----
export const UserSelected = React.createContext<ContextProviderValue>(
  {} as ContextProviderValue
);

function App() {
  const dispatch = useDispatch();
  const generatedTextState = useSelector((state: TStore) => state);

  const [userSelected, setUserSelected] = useState<ObjectString>({
    ad: "",
    name: "",
  });
  // const value = { userSelected, setUserSelected };

  const productName = {
    prompt:
      "Product description: A home milkshake maker\nSeed words: fast, healthy, compact.\nProduct names: HomeShaker, Fit Shaker, QuickShake, Shake Maker\n\nProduct description: A pair of shoes that can fit any foot size.\nSeed words: adaptable, fit, omni-fit.",
    temperature: 0.8,
    max_tokens: 60,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
  };

  const aiFetch = (
    jsonObject: JsonObject,
    originalText: string,
    kw: string,
    description?: string,
    seedWords?: string[]
  ) => {
    // const jsonObject = kw === "ad" ? productAd : productName;

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
        if (kw === "ad") {
          console.log(data.choices[0].text);
          dispatch(
            addGeneratedAd({
              originalText,
              generatedText: data.choices[0].text,
            })
          );
        } else {
          console.log(data.choices[0].text);
          const text: string = data.choices[0].text;
          const nameArr: string[] = text
            .substring(text.indexOf(":") + 2)
            .split(", ");

          dispatch(
            addGeneratedName({
              description: description as string,
              seedWords: seedWords as string[],
              generatedText: nameArr,
            })
          );
        }
        // dispatch(addGeneratedText({ generatedText: data.choices[0].text, kw }));
      });
  };

  useEffect(() => {}, []);

  return (
    <div className="App">
      <UserSelected.Provider value={{ userSelected, setUserSelected }}>
        <PreviewPanel />
        <ProductAd aiFetch={aiFetch} />
      </UserSelected.Provider>
    </div>
  );
}

export default App;
