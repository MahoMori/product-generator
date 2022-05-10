import styled from "styled-components";
import { Section } from "./assets/style/styleVariables";

export const Header = styled.header`
  width: 100%;
  height: 6vh;

  text-align: center;
`;

export const Main = styled.main`
  display: flex;
  width: 100%;
  height: 94vh;

  background: pink;
`;

export const RightPanelSection = styled(Section)`
  position: relative;
  overflow: hidden;
`;

export const PanelParentDiv = styled.div<{ leftValue: string }>`
  position: absolute;
  width: 100%;
  height: 100%;
  left: ${(props) => (props.leftValue ? `${props.leftValue}%` : "0%")};
  transition: left 1s;
`;
