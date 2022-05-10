import React, { useContext } from "react";
import { UserSelected } from "../../App";
import { AdListComponentProp } from "../../assets/interface";

const ProductAdList: React.VFC<AdListComponentProp> = ({ ad }) => {
  const { userSelected, setUserSelected } = useContext(UserSelected);

  return (
    <div>
      <div>
        <p>Prompt:</p>
        <p>{ad.originalText}</p>
      </div>
      <div>
        <p>Result:</p>
        <p>{ad.generatedText}</p>
      </div>
      <button
        type="button"
        onClick={() => {
          setUserSelected((prev) => ({
            ad: ad.generatedText,
            name: prev.name,
          }));
        }}
      >
        Select
      </button>
    </div>
  );
};

export default ProductAdList;
