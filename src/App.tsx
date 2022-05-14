import React, { useState, createContext } from "react";

// ----- interface -----
import {
  ContextLeftValue,
  UserSelectedTypes,
  ContextUserSelected,
} from "./assets/interface";

// ----- components -----
import PreviewPanel from "./components/preview-panel/PreviewPanel";
import ProductAd from "./components/product-ad/ProductAd";
import ProductName from "./components/product-name/ProductName";
import SharePanel from "./components/share-panel/SharePanel";

// ----- styled-components -----
import { Header, Main, PanelParentDiv, RightPanelSection } from "./App.style";

// ----- useContext -----
export const UserSelected = React.createContext<ContextUserSelected>(
  {} as ContextUserSelected
);

export const LeftValue = React.createContext<ContextLeftValue>(
  {} as ContextLeftValue
);

function App() {
  const [userSelected, setUserSelected] = useState<UserSelectedTypes>({
    ad: "",
    name: "",
  });

  const [leftValue, setLeftValue] = useState<string>("0");
  const [height, setHeight] = useState<string>("600");
  const getHeight = (idName: string) => {
    let element = document.getElementById(idName);
    if (element) return element.clientHeight.toString();
  };

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
              <PanelParentDiv leftValue={leftValue} height={height}>
                {/* components */}
                <ProductAd
                  height={height}
                  setHeight={setHeight}
                  getHeight={getHeight}
                />
                <ProductName
                  height={height}
                  setHeight={setHeight}
                  getHeight={getHeight}
                />
                <SharePanel
                  height={height}
                  setHeight={setHeight}
                  getHeight={getHeight}
                />
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
