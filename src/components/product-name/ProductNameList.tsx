import React, { useContext } from "react";
import { UserSelected } from "../../App";
import { NameListComponentProp } from "../../assets/interface";
import {
  ListDataCard,
  ListDataDiv,
  SelectButton,
} from "../../assets/style/styleVariables";

const ProductNameList: React.VFC<NameListComponentProp> = ({ name }) => {
  const { setUserSelected } = useContext(UserSelected);
  return (
    <ListDataCard>
      <ListDataDiv>
        <span>Prompt:</span>
        <p>{name.description}</p>
        <p>{name.seedWords.join(", ")}</p>
      </ListDataDiv>
      <ListDataDiv>
        <span>Result:</span>

        {name.generatedText.map((word) => (
          <div key={word}>
            <p>{word}</p>
            <SelectButton
              bColor={"blue"}
              type="button"
              onClick={() => {
                setUserSelected((prev) => ({
                  ad: prev.ad,
                  name: word,
                }));
              }}
            >
              Select
            </SelectButton>
          </div>
        ))}
      </ListDataDiv>
    </ListDataCard>
  );
};

export default ProductNameList;
