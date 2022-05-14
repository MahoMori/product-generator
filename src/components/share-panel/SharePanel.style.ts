import styled from "styled-components";
import { device } from "../../assets/style/screenSize";
import { color, RightPanelStyle } from "../../assets/style/styleVariables";

export const SharePanelDiv = styled(RightPanelStyle)`
  left: 200%;
  background-color: ${color.yellow};
`;

export const ShareContainer = styled.div`
  width: 100%;
  height: auto;
  margin: 1rem 0;
  padding: 1rem 0;

  background-color: #fff;

  & img {
    width: 95%;
    display: block;
    margin: 0 auto;
  }

  & div {
    width: 70%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 0.5rem;
  }

  & button {
    cursor: default !important;

    & svg {
      cursor: pointer;
    }
  }

  @media ${device.tablet} {
    & img {
      width: 90%;
    }
  }

  @media ${device.laptop} {
    & img {
      width: 65%;
    }

    & div {
      display: flex;
      justify-content: space-around;
    }
  }
`;
