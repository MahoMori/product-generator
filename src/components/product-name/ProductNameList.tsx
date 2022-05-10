import React, { useContext } from "react";
import { UserSelected } from "../../App";
import { NameListComponentProp } from "../../assets/interface";

const ProductNameList: React.VFC<NameListComponentProp> = ({ name }) => {
  const { setUserSelected } = useContext(UserSelected);
  return (
    <div>
      <div>
        <p>Prompt:</p>
        <p>{name.description}</p>
        <p>{name.seedWords.join(", ")}</p>
      </div>
      <div>
        <p>Result:</p>

        {name.generatedText.map((word) => (
          <div>
            <p>{word}</p>
            <button
              type="button"
              onClick={() => {
                setUserSelected((prev) => ({
                  ad: prev.ad,
                  name: word,
                }));
              }}
            >
              Select
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductNameList;
