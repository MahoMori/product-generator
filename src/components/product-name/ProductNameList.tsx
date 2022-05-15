import React, { useContext } from "react";

// ----- context for user selected text -----
import { UserSelected } from "../../App";

// ----- interface -----
import { NameListComponentProp } from "../../assets/interface";

// ----- styled-components -----
import {
  ListDataCard,
  ListDataDiv,
  SelectButton,
} from "../../assets/style/styleVariables";

const ProductNameList: React.VFC<NameListComponentProp> = ({ name }) => {
  const { userSelected, setUserSelected } = useContext(UserSelected);
  return (
    <ListDataCard>
      <ListDataDiv>
        <span>Prompt</span>
        <p>
          <i>Product description:</i> {name.description}
        </p>
        <p>
          <i>Seed words:</i> {name.seedWords.join(", ")}
        </p>
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
              disabled={userSelected.name === word ? true : false}
            >
              {userSelected.name === word ? "Selected" : "Select"}
            </SelectButton>
          </div>
        ))}
      </ListDataDiv>
    </ListDataCard>
  );
};

export default ProductNameList;
