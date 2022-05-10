import React, { useState, useEffect } from "react";
import "./App.css";

import { useDispatch, useSelector } from "react-redux";
import { TStore } from "./redux/store";
import { addGeneratedText } from "./redux/generatedTextSlice";
import ProductAd from "./components/product-ad/ProductAd";
import { JsonObject } from "./assets/interface";

function App() {
  const dispatch = useDispatch();
  const generatedTextState = useSelector((state: TStore) => state);

  const productName = {
    prompt:
      "Product description: A home milkshake maker\nSeed words: fast, healthy, compact.\nProduct names: HomeShaker, Fit Shaker, QuickShake, Shake Maker\n\nProduct description: A pair of shoes that can fit any foot size.\nSeed words: adaptable, fit, omni-fit.",
    temperature: 0.8,
    max_tokens: 60,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
  };

  const aiFetch = (jsonObject: JsonObject, kw: string) => {
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
            addGeneratedText({ generatedText: data.choices[0].text, kw })
          );
        } else {
          console.log(data.choices[0].text);
          const text = data.choices[0].text;
          const nameArr = text.substring(text.indexOf(":") + 2).split(", ");
          nameArr.map((name: string) =>
            dispatch(
              addGeneratedText({
                generatedText: name,
                kw,
              })
            )
          );
        }
        // dispatch(addGeneratedText({ generatedText: data.choices[0].text, kw }));
      });
  };

  useEffect(() => {}, []);

  return (
    <div className="App">
      <ProductAd aiFetch={aiFetch} />
    </div>
  );
}

export default App;
