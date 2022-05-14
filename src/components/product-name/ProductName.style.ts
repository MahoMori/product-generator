import styled from "styled-components";
import { device } from "../../assets/style/screenSize";
import { color, RightPanelStyle } from "../../assets/style/styleVariables";

export const ProductNameDiv = styled(RightPanelStyle)`
  left: 100%;
  background-color: ${color.blue};
`;

export const SeedWordsStyle = styled.div`
  & p {
    margin: 0.5rem 0 0.25rem -0.25rem;
  }

  & input {
    width: 100%;
    height: 2rem;
    border: solid 2px #000;
    border-radius: 5px;
    padding: 0 0.25rem;
    font-family: "Noto Sans JP", sans-serif;
  }

  & div {
    position: relative;
  }

  & span {
    color: #c41e3a;
    font-size: 1.5rem;
    position: absolute;
    left: -0.8rem;
    top: 0.2rem;
  }

  & *:nth-child(3) {
    margin: 0.25rem 0;
  }
  @media ${device.desktop} {
    & p {
      font-size: 1.5rem;
    }

    & span {
      font-size: 1.75rem;
    }

    & input {
      height: 2.25rem;
      font-size: 1.2rem;
    }
  }
`;
