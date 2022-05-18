import React, { useState, createContext } from "react";

// ----- interface -----
import { UserSelectedTypes, ContextUserSelected } from "./assets/interface";

// ----- components -----
import PreviewPanel from "./components/preview-panel/PreviewPanel";
import ProductAd from "./components/product-ad/ProductAd";
import ProductName from "./components/product-name/ProductName";
import SharePanel from "./components/share-panel/SharePanel";

// ----- styled-components -----
import { Header, Main, PanelParentDiv, RightPanelSection } from "./App.style";

// ----- createContext -----
export const UserSelected = React.createContext<ContextUserSelected>(
  {} as ContextUserSelected
);

function App() {
  // user selected text
  const [userSelected, setUserSelected] = useState<UserSelectedTypes>({
    ad: "",
    name: "",
  });

  // left value and height for styled components
  const [leftValue, setLeftValue] = useState<string>("0");
  const [height, setHeight] = useState<string>("600");
  const getHeight = (idName: string) => {
    let element = document.getElementById(idName);
    if (element) return element.clientHeight;
  };

  // left value and height for styled components
  const [descriptionInput, setDescriptionInput] = useState<string>("");

  return (
    <div className="App">
      <Header>
        <h1>💡 Creative Product Generator 🛍️</h1>
      </Header>

      <Main>
        <UserSelected.Provider value={{ userSelected, setUserSelected }}>
          <PreviewPanel />

          <RightPanelSection>
            <PanelParentDiv leftValue={leftValue} height={height}>
              {/* components from here */}
              <ProductAd
                leftValue={leftValue}
                setLeftValue={setLeftValue}
                height={height}
                setHeight={setHeight}
                getHeight={getHeight}
                descriptionInput={descriptionInput}
                setDescriptionInput={setDescriptionInput}
              />
              <ProductName
                leftValue={leftValue}
                setLeftValue={setLeftValue}
                height={height}
                setHeight={setHeight}
                getHeight={getHeight}
                descriptionInput={descriptionInput}
                setDescriptionInput={setDescriptionInput}
              />
              <SharePanel
                leftValue={leftValue}
                setLeftValue={setLeftValue}
                setHeight={setHeight}
              />
              {/* components up to here */}
            </PanelParentDiv>
          </RightPanelSection>
        </UserSelected.Provider>
      </Main>
    </div>
  );
}

export default App;
