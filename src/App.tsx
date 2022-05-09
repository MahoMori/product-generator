import React, { useEffect } from "react";
import "./App.css";

const productAd = {
  prompt:
    // "Write a creative ad for the following product to run on TikTok aimed at teenagers:\n\nProduct: Colorful running shoes comfortable and waterproof.",
    "Write a creative ad for the following product:\n\nProduct: Colorful running shoes comfortable and waterproof.",

  temperature: 0.5,
  max_tokens: 60,
  top_p: 1.0,
  frequency_penalty: 0.0,
  presence_penalty: 0.0,
};

const productName = {
  prompt:
    "Product description: A home milkshake maker\nSeed words: fast, healthy, compact.\nProduct names: HomeShaker, Fit Shaker, QuickShake, Shake Maker\n\nProduct description: A pair of shoes that can fit any foot size.\nSeed words: adaptable, fit, omni-fit.",
  temperature: 0.8,
  max_tokens: 60,
  top_p: 1.0,
  frequency_penalty: 0.0,
  presence_penalty: 0.0,
};

function App() {
  const productAdFetch = () => {
    fetch("https://api.openai.com/v1/engines/text-curie-001/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.REACT_APP_API}`,
      },
      body: JSON.stringify(productAd),
    })
      .then((res) => res.json())
      .then((data) => console.log(data.choices[0].text));
  };
  useEffect(() => {}, []);

  return <div className="App"></div>;
}

export default App;
