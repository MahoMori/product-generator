import styled from "styled-components";
import { color, Section } from "./assets/style/styleVariables";

import { device } from "./assets/style/screenSize";

export const Header = styled.header`
  width: 100%;
  height: auto;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${color.platinum};

  text-align: center;

  & h1 {
    font-family: "MuseoModerno", cursive;
  }

  @media ${device.tablet} {
    height: 7vh;
  }

  @media ${device.desktop} {
    & h1 {
      font-size: 3.5em;
    }
  }
`;

export const Main = styled.main`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  width: 100%;
  height: 100vh;

  overflow-x: clip;

  @media ${device.tablet} {
    display: flex;
    height: 93vh;
  }
`;

export const RightPanelSection = styled(Section)`
  position: relative;

  @media ${device.tablet} {
    overflow-y: scroll;
    overflow-x: hidden;
  }
`;

export const PanelParentDiv = styled.div<{ leftValue: string; height: string }>`
  position: absolute;
  width: 100%;
  left: ${(props) => (props.leftValue ? `${props.leftValue}%` : "0%")};
  transition: left 0.7s;

  height: ${(props) =>
    parseInt(props.height) > 600 ? `${props.height}px` : "100vh"};
  overflow-y: ${(props) => (parseInt(props.height) > 600 ? "unset" : "clip")};
`;
