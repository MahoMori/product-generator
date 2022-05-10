import React, { useState, useEffect, createContext } from "react";

// ----- redux -----
import { useDispatch, useSelector } from "react-redux";
import { TStore } from "./redux/store";
import { addGeneratedAd, addGeneratedName } from "./redux/generatedTextSlice";

// ----- interface -----
import {
  ContextLeftValue,
  ContextUserSelected,
  JsonObject,
  ObjectString,
} from "./assets/interface";

// ----- components -----
import PreviewPanel from "./components/preview-panel/PreviewPanel";
import ProductAd from "./components/product-ad/ProductAd";
import ProductName from "./components/product-name/ProductName";
import SharePanel from "./components/share-panel/SharePanel";

// ----- styled-components -----
import { Header, Main, PanelParentDiv, RightPanelSection } from "./App.style";
import { Section } from "./assets/style/styleVariables";

// ----- useContext -----
export const UserSelected = React.createContext<ContextUserSelected>(
  {} as ContextUserSelected
);

export const LeftValue = React.createContext<ContextLeftValue>(
  {} as ContextLeftValue
);

function App() {
  const dispatch = useDispatch();
  // const generatedTextState = useSelector((state: TStore) => state);

  const [userSelected, setUserSelected] = useState<ObjectString>({
    ad: "",
    name: "",
  });

  const [leftValue, setLeftValue] = useState<string>("0");

  return (
    <div className="App">
      <Header>
        <h1>💡 Creative Product Generator 🛍️</h1>
      </Header>

      <Main>
        <UserSelected.Provider value={{ userSelected, setUserSelected }}>
          <PreviewPanel />

          <LeftValue.Provider value={{ leftValue, setLeftValue }}>
            <RightPanelSection>
              <PanelParentDiv leftValue={leftValue}>
                {/* components */}
                <ProductAd />
                <ProductName />
                <SharePanel />
                {/* components */}
              </PanelParentDiv>
            </RightPanelSection>
          </LeftValue.Provider>
        </UserSelected.Provider>
      </Main>
    </div>
  );
}

export default App;
