import React, { useContext } from "react";
import { UserSelected } from "../../App";
import { AdListComponentProp } from "../../assets/interface";
import {
  ListDataCard,
  ListDataDiv,
  SelectButton,
} from "../../assets/style/styleVariables";

const ProductAdList: React.VFC<AdListComponentProp> = ({ ad }) => {
  const { setUserSelected } = useContext(UserSelected);

  return (
    <ListDataCard>
      <ListDataDiv>
        <span>Prompt:</span>
        <p>{ad.originalText}</p>
      </ListDataDiv>
      <ListDataDiv>
        <span>Result:</span>
        <p>{ad.generatedText}</p>
        <SelectButton
          bColor={"green"}
          type="button"
          onClick={() => {
            setUserSelected((prev) => ({
              ad: ad.generatedText,
              name: prev.name,
            }));
          }}
        >
          Select
        </SelectButton>
      </ListDataDiv>
    </ListDataCard>
  );
};

export default ProductAdList;
