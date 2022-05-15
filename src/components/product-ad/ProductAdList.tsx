import React, { useContext } from "react";

// ----- context for user selected text -----
import { UserSelected } from "../../App";

// ----- interface -----
import { AdListComponentProps } from "../../assets/interface";

// ----- styled-components -----
import {
  ListDataCard,
  ListDataDiv,
  SelectButton,
} from "../../assets/style/styleVariables";

const ProductAdList: React.VFC<AdListComponentProps> = ({ ad }) => {
  const { userSelected, setUserSelected } = useContext(UserSelected);

  return (
    <ListDataCard>
      <ListDataDiv>
        <span>Prompt</span>
        <p>{ad.originalText}</p>
      </ListDataDiv>
      <ListDataDiv>
        <span>Result</span>
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
          disabled={userSelected.ad === ad.generatedText ? true : false}
        >
          {userSelected.ad === ad.generatedText ? "Selected" : "Select"}
        </SelectButton>
      </ListDataDiv>
    </ListDataCard>
  );
};

export default ProductAdList;
